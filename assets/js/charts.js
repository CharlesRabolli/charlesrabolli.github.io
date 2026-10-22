/* Small, dependency-free chart renderer for the long-form pages.
   Each chart is a <div class="chart" data-chart="ID"> with a sibling
   <script type="application/json" id="ID">{...spec...}</script>.
   Types: timeline (events in lanes), line (yearly series), hbar (horizontal bars).
   Colors come from CSS custom properties (--s1..--s4) so dark mode is automatic. */
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var SLOTS = ['--s1', '--s2', '--s3', '--s4'];

  function el(tag, attrs, parent) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function txt(parent, x, y, s, attrs) {
    var t = el('text', Object.assign({ x: x, y: y }, attrs || {}), parent);
    t.textContent = s;
    return t;
  }
  function color(i) { return 'var(' + SLOTS[i % SLOTS.length] + ')'; }
  function fmt(n) { return n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'K' : String(n); }
  function measure(svg, s, size, weight) {
    var t = txt(svg, -9999, -9999, s, { 'font-size': size, 'font-weight': weight || 400 });
    var w = t.getComputedTextLength ? t.getComputedTextLength() : s.length * size * 0.55;
    svg.removeChild(t);
    return w;
  }

  // ---------- tooltip ----------
  function tooltip(host) {
    var tip = document.createElement('div');
    tip.className = 'chart-tip';
    tip.setAttribute('role', 'status');
    tip.hidden = true;
    host.appendChild(tip);
    return {
      show: function (html, x, y) {
        tip.innerHTML = html;
        tip.hidden = false;
        var hw = host.clientWidth, tw = tip.offsetWidth;
        var left = Math.min(Math.max(8, x - tw / 2), hw - tw - 8);
        tip.style.left = left + 'px';
        tip.style.top = Math.max(4, y - tip.offsetHeight - 14) + 'px';
      },
      hide: function () { tip.hidden = true; }
    };
  }

  // ---------- data table (accessibility + "show data") ----------
  function table(host, head, rows) {
    var d = document.createElement('details');
    d.className = 'chart-data';
    var s = document.createElement('summary');
    s.textContent = 'Show data';
    d.appendChild(s);
    var t = document.createElement('table');
    var tr = document.createElement('tr');
    head.forEach(function (h) { var th = document.createElement('th'); th.textContent = h; tr.appendChild(th); });
    var thead = document.createElement('thead'); thead.appendChild(tr); t.appendChild(thead);
    var tb = document.createElement('tbody');
    rows.forEach(function (r) {
      var row = document.createElement('tr');
      r.forEach(function (c) { var td = document.createElement('td'); td.innerHTML = c; row.appendChild(td); });
      tb.appendChild(row);
    });
    t.appendChild(tb);
    d.appendChild(t);
    host.parentNode.insertBefore(d, host.nextSibling);
  }

  function header(svg, spec, W) {
    var y = 0;
    if (spec.title) { txt(svg, 0, 18, spec.title, { 'font-size': 15, 'font-weight': 600, class: 'd-ink' }); y = 24; }
    if (spec.subtitle) { txt(svg, 0, y + 16, spec.subtitle, { 'font-size': 12.5, class: 'd-ink3' }); y += 22; }
    return y + 10;
  }

  // ---------- timeline ----------
  function timeline(host, spec) {
    var W = Math.max(560, host.clientWidth);
    var svg = el('svg', { width: '100%', role: 'img', 'aria-label': spec.title || 'Timeline' });
    host.appendChild(svg);
    svg.setAttribute('viewBox', '0 0 ' + W + ' 10');
    var top = header(svg, spec, W);
    if (spec.legend) {
      var lx = 0;
      spec.legend.forEach(function (l) {
        el('circle', { cx: lx + 5, cy: top + 2, r: 5, fill: color(l.slot) }, svg);
        var t = txt(svg, lx + 15, top + 6, l.label, { 'font-size': 12, class: 'd-ink2' });
        lx += 15 + measure(svg, l.label, 12) + 22;
      });
      top += 18;
    }
    var padL = spec.laneLabelWidth || 150, padR = 18;
    var x0 = spec.xmin, x1 = spec.xmax;
    var X = function (v) { return padL + (v - x0) / (x1 - x0) * (W - padL - padR); };
    if (spec.segments) {
      // piecewise-linear axis: [{from, to, frac}], fracs sum to 1
      X = function (v) {
        var acc = 0, span = W - padL - padR;
        for (var i = 0; i < spec.segments.length; i++) {
          var sg = spec.segments[i];
          if (v <= sg.to || i === spec.segments.length - 1) return padL + span * (acc + sg.frac * (Math.min(Math.max(v, sg.from), sg.to) - sg.from) / (sg.to - sg.from));
          acc += sg.frac;
        }
      };
    }
    var tip = tooltip(host);
    var rowH = 15, laneGap = 16;
    var y = top + 8;
    var laneIndex = {};
    spec.lanes.forEach(function (l, i) { laneIndex[l.id] = i; });

    // axis ticks
    var tickStep = spec.tickStep || 10;
    var axisG = el('g', {}, svg);
    var laneG = el('g', {}, svg);
    var markG = el('g', {}, svg);

    spec.lanes.forEach(function (lane, li) {
      var evs = spec.events.filter(function (e) { return e.lane === lane.id; }).sort(function (a, b) { return a.year - b.year; });
      // greedy label rows (labels above dots)
      var rows = [];
      evs.forEach(function (e) {
        if (!e.label || e.hideLabel) { e._row = -1; return; }
        var w = measure(svg, e.label, 11.5, e.major ? 600 : 400);
        var left = X(e.year) - 3, right = left + w + 6;
        if (right > W - 2) { left = X(e.year) - w + 3; right = X(e.year) + 3; e._anchorEnd = true; }
        var r = 0;
        while (rows[r] && rows[r].some(function (iv) { return !(right < iv[0] - 4 || left > iv[1] + 4); })) r++;
        (rows[r] = rows[r] || []).push([left, right]);
        e._row = r;
      });
      var nRows = Math.max(1, rows.length);
      var laneTop = y, dotY = y + nRows * rowH + 10;
      var laneBottom = dotY + 12;
      if (li % 2 === 0) el('rect', { x: 0, y: laneTop - 6, width: W, height: laneBottom - laneTop + 8, class: 'd-sunk', rx: 6, opacity: 0.6 }, laneG);
      txt(laneG, 10, dotY + 4, lane.label, { 'font-size': 12, 'font-weight': 600, class: 'd-ink2' });
      el('line', { x1: padL, x2: W - padR, y1: dotY, y2: dotY, class: 'd-rule-s', 'stroke-width': 1 }, laneG);
      evs.forEach(function (e) {
        var cx = X(e.year);
        if (e._row >= 0) {
          var ly = dotY - 10 - e._row * rowH;
          el('line', { x1: cx, x2: cx, y1: ly + 2, y2: dotY - 5, class: 'd-ink3-s', 'stroke-width': 0.75, opacity: 0.6 }, markG);
          txt(markG, e._anchorEnd ? cx + 3 : cx - 3, ly, e.label, { 'font-size': 11.5, 'font-weight': e.major ? 600 : 400, class: e.major ? 'd-ink' : 'd-ink2', 'text-anchor': e._anchorEnd ? 'end' : 'start' });
        }
        var fillc = spec.colorBy === 'flag' ? color(e.flag ? 1 : 0) : color(lane.slot != null ? lane.slot : li);
        var c = el('circle', { cx: cx, cy: dotY, r: e.major ? 5.5 : 4.5, fill: fillc, stroke: 'var(--bg-elev)', 'stroke-width': 2 }, markG);
        var hit = el('circle', { cx: cx, cy: dotY, r: 12, fill: 'transparent', tabindex: 0, 'aria-label': (e.when || Math.floor(e.year)) + ': ' + (e.label || '') + '. ' + (e.detail || '') }, markG);
        var show = function () {
          c.setAttribute('r', 7);
          var b = host.getBoundingClientRect(), s = svg.getBoundingClientRect();
          var scale = s.width / W;
          tip.show('<b>' + (e.when || Math.floor(e.year)) + (e.label ? ' · ' + e.label : '') + '</b>' + (e.detail ? '<span>' + e.detail + '</span>' : ''), cx * scale + (s.left - b.left), dotY * scale + (s.top - b.top));
        };
        var hide = function () { c.setAttribute('r', e.major ? 5.5 : 4.5); tip.hide(); };
        hit.addEventListener('mouseenter', show); hit.addEventListener('focus', show);
        hit.addEventListener('mouseleave', hide); hit.addEventListener('blur', hide);
        hit.addEventListener('click', show);
      });
      y = laneBottom + laneGap;
    });
    // axis
    var axY = y - 4;
    var tks = spec.ticks || [];
    if (!spec.ticks) for (var t = Math.ceil(x0 / tickStep) * tickStep; t <= x1; t += tickStep) tks.push(t);
    tks.forEach(function (t) {
      el('line', { x1: X(t), x2: X(t), y1: top, y2: axY - 6, class: 'd-rule-s', 'stroke-width': 1, opacity: 0.45 }, axisG);
      txt(axisG, X(t), axY + 10, String(t), { 'font-size': 11, class: 'd-ink3 t-mono', 'text-anchor': 'middle' });
    });
    (spec.segments || []).slice(0, -1).forEach(function (sg) {
      var bx = X(sg.to);
      el('path', { d: 'M' + (bx - 4) + ' ' + (axY + 1) + ' l4 -8 M' + bx + ' ' + (axY + 1) + ' l4 -8', class: 'd-ink3-s', 'stroke-width': 1.2, fill: 'none' }, axisG);
    });
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + (axY + 18));
    table(host, ['Year', 'Track', 'Event', 'Detail'], spec.events.slice().sort(function (a, b) { return a.year - b.year; }).map(function (e) {
      var lane = spec.lanes[laneIndex[e.lane]];
      return [String(e.when || Math.floor(e.year)), lane ? lane.label : '', e.label || '', e.detail || ''];
    }));
  }

  // ---------- line ----------
  function line(host, spec) {
    var W = Math.max(520, host.clientWidth);
    var H = spec.height || 330;
    var svg = el('svg', { width: '100%', role: 'img', 'aria-label': spec.title || 'Line chart', viewBox: '0 0 ' + W + ' ' + H }, host);
    var top = header(svg, spec, W) + (spec.yLabel ? 24 : 8);
    var padL = 46, padR = spec.padR || 130, padB = 28;
    var xs = [];
    spec.series.forEach(function (sr) { Object.keys(sr.values).forEach(function (k) { if (xs.indexOf(+k) === -1) xs.push(+k); }); });
    xs.sort(function (a, b) { return a - b; });
    var x0 = spec.xmin || Math.min.apply(null, xs), x1 = spec.xmax || Math.max.apply(null, xs);
    var ymax = spec.ymax || Math.max.apply(null, spec.series.map(function (s) { return Math.max.apply(null, Object.values(s.values)); }));
    var step = Math.pow(10, Math.floor(Math.log10(ymax)));
    var niceMax = Math.ceil(ymax / step) * step;
    if (niceMax / step < 4) step = step / 2;
    var X = function (v) { return padL + (v - x0) / (x1 - x0) * (W - padL - padR); };
    var Y = function (v) { return H - padB - v / niceMax * (H - padB - top); };
    for (var g = 0; g <= niceMax + 1e-9; g += step) {
      el('line', { x1: padL, x2: W - padR, y1: Y(g), y2: Y(g), class: 'd-rule-s', 'stroke-width': 1, opacity: g === 0 ? 1 : 0.5 }, svg);
      txt(svg, padL - 8, Y(g) + 4, (spec.valuePrefix || '') + (spec.valueFormat === 'raw' ? +g.toFixed(2) : fmt(g)) + (spec.valueSuffix || ''), { 'font-size': 11, class: 'd-ink3 t-mono', 'text-anchor': 'end' });
    }
    var xt = spec.xTicks || 5;
    for (var t = Math.ceil(x0 / xt) * xt; t <= x1; t += xt) txt(svg, X(t), H - 8, String(t), { 'font-size': 11, class: 'd-ink3 t-mono', 'text-anchor': 'middle' });
    if (spec.yLabel) txt(svg, padL - 8, top - 12, spec.yLabel, { 'font-size': 11.5, class: 'd-ink3' });

    (spec.annotations || []).forEach(function (a) {
      el('line', { x1: X(a.x), x2: X(a.x), y1: top + 4, y2: H - padB, class: 'd-ink3-s', 'stroke-width': 1, 'stroke-dasharray': '2 3', opacity: 0.8 }, svg);
      var tx = txt(svg, X(a.x) + (a.right ? -5 : 5), top + 14 + (a.dy || 0), a.label, { 'font-size': 11.5, class: 'd-ink2', 'text-anchor': a.right ? 'end' : 'start' });
    });

    var pts = spec.series.map(function (s, si) {
      var arr = xs.filter(function (x) { return x >= x0 && x <= x1 && s.values[x] != null; }).map(function (x) { return [x, s.values[x]]; });
      var col = color(s.slot != null ? s.slot : si);
      var d = arr.map(function (p, i) { return (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1); }).join(' ');
      el('path', { d: d + ' L' + X(arr[arr.length - 1][0]) + ' ' + Y(0) + ' L' + X(arr[0][0]) + ' ' + Y(0) + ' Z', fill: col, opacity: 0.1 }, svg);
      el('path', { d: d, fill: 'none', stroke: col, 'stroke-width': 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, svg);
      var last = arr[arr.length - 1];
      el('circle', { cx: X(last[0]), cy: Y(last[1]), r: 4.5, fill: col, stroke: 'var(--bg-elev)', 'stroke-width': 2 }, svg);
      txt(svg, X(last[0]) + 10, Y(last[1]) + 4 + (s.labelDy || 0), s.name, { 'font-size': 12, 'font-weight': 600, class: 'd-ink' });
      txt(svg, X(last[0]) + 10, Y(last[1]) + 19 + (s.labelDy || 0), (spec.valuePrefix || '') + (spec.valueFormat === 'raw' ? last[1] : fmt(last[1])) + (spec.valueSuffix || '') + ' in ' + last[0], { 'font-size': 11.5, class: 'd-ink3' });
      return { s: s, arr: arr, col: col };
    });

    // crosshair
    var tip = tooltip(host);
    var cross = el('line', { y1: top, y2: H - padB, class: 'd-ink3-s', 'stroke-width': 1, opacity: 0 }, svg);
    var dots = pts.map(function (p) { return el('circle', { r: 4.5, fill: p.col, stroke: 'var(--bg-elev)', 'stroke-width': 2, opacity: 0 }, svg); });
    var overlay = el('rect', { x: padL, y: top, width: W - padL - padR, height: H - padB - top, fill: 'transparent' }, svg);
    var move = function (ev) {
      var s = svg.getBoundingClientRect(), b = host.getBoundingClientRect();
      var scale = s.width / W;
      var px = ((ev.touches ? ev.touches[0].clientX : ev.clientX) - s.left) / scale;
      var yr = Math.round(x0 + (px - padL) / (W - padL - padR) * (x1 - x0));
      yr = Math.max(x0, Math.min(x1, yr));
      cross.setAttribute('x1', X(yr)); cross.setAttribute('x2', X(yr)); cross.setAttribute('opacity', 0.6);
      var html = '<b>' + yr + '</b>';
      var minY = H;
      pts.forEach(function (p, i) {
        var v = p.s.values[yr];
        if (v == null) return;
        dots[i].setAttribute('cx', X(yr)); dots[i].setAttribute('cy', Y(v)); dots[i].setAttribute('opacity', 1);
        minY = Math.min(minY, Y(v));
        html += '<span><i style="background:' + p.col + '"></i>' + p.s.name + ': ' + (spec.valuePrefix || '') + v.toLocaleString() + (spec.valueSuffix || '') + '</span>';
      });
      tip.show(html, X(yr) * scale + (s.left - b.left), minY * scale + (s.top - b.top));
    };
    var leave = function () { cross.setAttribute('opacity', 0); dots.forEach(function (d) { d.setAttribute('opacity', 0); }); tip.hide(); };
    overlay.addEventListener('mousemove', move); overlay.addEventListener('touchstart', move, { passive: true });
    overlay.addEventListener('mouseleave', leave);
    var head = ['Year'].concat(spec.series.map(function (s) { return s.name; }));
    table(host, head, xs.map(function (x) { return [String(x)].concat(spec.series.map(function (s) { return (s.values[x] != null ? s.values[x] : '').toLocaleString(); })); }));
  }

  // ---------- horizontal bars ----------
  function hbar(host, spec) {
    var W = Math.max(520, host.clientWidth);
    var rowH = spec.rowHeight || 34;
    var svg = el('svg', { width: '100%', role: 'img', 'aria-label': spec.title || 'Bar chart' }, host);
    svg.setAttribute('viewBox', '0 0 ' + W + ' 10');
    var top = header(svg, spec, W) + 6;
    var padL = spec.labelWidth || 170, padR = 70;
    var log = spec.scale === 'log';
    var vmax = spec.max || Math.max.apply(null, spec.items.map(function (d) { return d.hi != null ? d.hi : d.value; }));
    var vmin = spec.min || (log ? 1 : 0);
    var X = log
      ? function (v) { return padL + (Math.log10(v) - Math.log10(vmin)) / (Math.log10(vmax) - Math.log10(vmin)) * (W - padL - padR); }
      : function (v) { return padL + (v - vmin) / (vmax - vmin) * (W - padL - padR); };
    var tip = tooltip(host);
    var groups = [];
    spec.items.forEach(function (d, i) { if (d.group && groups.indexOf(d.group) === -1) groups.push(d.group); });
    var y = top;
    var ticks = spec.ticks || (log ? [] : [0, vmax / 4, vmax / 2, 3 * vmax / 4, vmax]);
    var bottom = top + spec.items.length * rowH + (groups.length ? groups.length * 18 : 0);
    ticks.forEach(function (t) {
      el('line', { x1: X(t), x2: X(t), y1: top - 2, y2: bottom, class: 'd-rule-s', 'stroke-width': 1, opacity: t === vmin ? 1 : 0.5 }, svg);
      var lab = spec.tickLabels ? spec.tickLabels[ticks.indexOf(t)] : (spec.tickFormat ? spec.tickFormat.replace('{}', fmt(t)) : fmt(t));
      txt(svg, X(t), bottom + 15, lab, { 'font-size': 11, class: 'd-ink3 t-mono', 'text-anchor': 'middle' });
    });
    var lastGroup = null;
    spec.items.forEach(function (d, i) {
      if (d.group && d.group !== lastGroup) {
        txt(svg, 0, y + 13, d.group, { 'font-size': 11, class: 'd-ink3 t-mono', 'letter-spacing': '.06em' });
        y += 18; lastGroup = d.group;
      }
      var cy = y + rowH / 2;
      var slot = d.slot != null ? d.slot : (spec.slot != null ? spec.slot : 0);
      var col = color(slot);
      txt(svg, padL - 10, cy + 4, d.label, { 'font-size': 12.5, class: d.em ? 'd-ink' : 'd-ink2', 'font-weight': d.em ? 600 : 400, 'text-anchor': 'end' });
      var bh = Math.min(18, rowH - 12);
      var x = X(d.value), xb = X(vmin);
      var w = Math.max(2, x - xb);
      // square at the baseline, 4px rounded data-end
      var r = Math.min(4, w / 2);
      var p = 'M' + xb + ' ' + (cy - bh / 2) + ' H' + (x - r) + ' Q' + x + ' ' + (cy - bh / 2) + ' ' + x + ' ' + (cy - bh / 2 + r) + ' V' + (cy + bh / 2 - r) + ' Q' + x + ' ' + (cy + bh / 2) + ' ' + (x - r) + ' ' + (cy + bh / 2) + ' H' + xb + ' Z';
      var bar;
      if (spec.marks === 'dot') {
        if (!spec.loDot) el('line', { x1: X(vmin), x2: x, y1: cy, y2: cy, class: 'd-rule-s', 'stroke-width': 1, 'stroke-dasharray': '2 3' }, svg);
        bar = el('circle', { cx: x, cy: cy, r: 6, fill: col, stroke: 'var(--bg-elev)', 'stroke-width': 2 }, svg);
      } else {
        bar = el('path', { d: p, fill: col }, svg);
      }
      if (d.lo != null && d.hi != null && spec.loDot) {
        el('line', { x1: X(d.lo), x2: X(d.hi), y1: cy, y2: cy, stroke: col, 'stroke-width': 3, opacity: 0.45 }, svg);
      } else if (d.lo != null && d.hi != null) {
        el('line', { x1: X(d.lo), x2: X(d.hi), y1: cy, y2: cy, class: 'd-ink-s', 'stroke-width': 1.5 }, svg);
        el('line', { x1: X(d.lo), x2: X(d.lo), y1: cy - 5, y2: cy + 5, class: 'd-ink-s', 'stroke-width': 1.5 }, svg);
        el('line', { x1: X(d.hi), x2: X(d.hi), y1: cy - 5, y2: cy + 5, class: 'd-ink-s', 'stroke-width': 1.5 }, svg);
      }
      if (spec.loDot && d.lo != null) el('circle', { cx: X(d.lo), cy: cy, r: 5, fill: 'var(--bg-elev)', stroke: col, 'stroke-width': 2 }, svg);
      if (spec.marks === 'dot') svg.appendChild(bar);
      var vx = Math.max(x, d.hi != null ? X(d.hi) : x) + (spec.marks === 'dot' ? 12 : 8);
      txt(svg, vx, cy + 4, d.display || (fmt(d.value) + (spec.unit || '')), { 'font-size': 12, class: 'd-ink', 'font-weight': 600 });
      var hit = el('rect', { x: 0, y: y, width: W, height: rowH, fill: 'transparent', tabindex: 0, 'aria-label': d.label + ': ' + (d.display || d.value) }, svg);
      var show = function () {
        bar.setAttribute('opacity', 0.85);
        var s = svg.getBoundingClientRect(), b = host.getBoundingClientRect(), scale = s.width / W;
        tip.show('<b>' + d.label + '</b><span>' + (d.detail || (d.display || d.value)) + '</span>', x * scale + (s.left - b.left), (cy - bh / 2) * scale + (s.top - b.top));
      };
      var hide = function () { bar.setAttribute('opacity', 1); tip.hide(); };
      hit.addEventListener('mouseenter', show); hit.addEventListener('focus', show);
      hit.addEventListener('mouseleave', hide); hit.addEventListener('blur', hide);
      y += rowH;
    });
    if (spec.xLabel) txt(svg, X(vmin), bottom + 32, spec.xLabel, { 'font-size': 11.5, class: 'd-ink3' });
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + (bottom + (spec.xLabel ? 40 : 24)));
    table(host, ['Item', spec.valueHead || 'Value', 'Detail'], spec.items.map(function (d) { return [d.label, d.display || String(d.value), d.detail || '']; }));
  }

  var RENDER = { timeline: timeline, line: line, hbar: hbar };

  function renderAll() {
    document.querySelectorAll('.chart[data-chart]').forEach(function (host) {
      var data = document.getElementById(host.dataset.chart);
      if (!data) return;
      var spec = JSON.parse(data.textContent);
      host.innerHTML = '';
      var old = host.parentNode.querySelector('.chart-data');
      if (old) old.remove();
      (RENDER[spec.type] || function () {})(host, spec);
    });
  }
  var lastW = 0;
  function onResize() {
    var w = document.querySelector('.prose') ? document.querySelector('.prose').clientWidth : innerWidth;
    if (Math.abs(w - lastW) > 40) { lastW = w; renderAll(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onResize); else onResize();
  var rt; addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(onResize, 150); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { lastW = 0; onResize(); });
})();
