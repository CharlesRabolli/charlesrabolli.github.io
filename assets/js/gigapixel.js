(function () {
  'use strict';
  var root = document.getElementById('gigapixel');
  if (!root) return;
  var cv = root.querySelector('canvas'), ctx = cv.getContext('2d');
  var w = root.querySelector('#gp-w'), h = root.querySelector('#gp-h');
  var state = { mpp: 0.25, tile: 256, heat: false };
  // fixed pseudo-random tissue shape and texture
  var seed = 11;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  var lobes = []; for (var i = 0; i < 9; i++) lobes.push(0.78 + 0.35 * rnd());
  var nuclei = []; for (var j = 0; j < 900; j++) nuclei.push([rnd(), rnd(), rnd()]);
  function inside(u, v) { // u,v in [-1,1]
    var a = Math.atan2(v, u), r = Math.hypot(u, v);
    var k = (a + Math.PI) / (2 * Math.PI) * lobes.length;
    var i0 = Math.floor(k) % lobes.length, i1 = (i0 + 1) % lobes.length, t = k - Math.floor(k);
    var R = lobes[i0] * (1 - t) + lobes[i1] * t;
    return r < R * 0.92;
  }
  function fmt(n) { return n >= 1e6 ? (n / 1e6).toFixed(1) + 'M' : n >= 1e3 ? Math.round(n).toLocaleString() : String(Math.round(n)); }
  function draw() {
    var Wmm = +w.value, Hmm = +h.value;
    root.querySelector('[data-o="w"]').textContent = Wmm;
    root.querySelector('[data-o="h"]').textContent = Hmm;
    var pxW = Wmm * 1000 / state.mpp, pxH = Hmm * 1000 / state.mpp;
    var tilesX = Math.ceil(pxW / state.tile), tilesY = Math.ceil(pxH / state.tile);
    var tiles = tilesX * tilesY * 0.7;
    root.querySelector('[data-k="px"]').textContent = fmt(pxW) + ' × ' + fmt(pxH);
    root.querySelector('[data-k="gp"]').textContent = (pxW * pxH / 1e9).toFixed(1);
    root.querySelector('[data-k="tiles"]').textContent = fmt(tiles);
    root.querySelector('[data-k="gb"]').textContent = (pxW * pxH * 3 / 1e9).toFixed(1);
    // canvas
    var CW = cv.width, CH = cv.height, pad = 20;
    ctx.clearRect(0, 0, CW, CH);
    var scale = Math.min((CW - 2 * pad) / Wmm, (CH - 2 * pad) / Hmm);
    var bw = Wmm * scale, bh = Hmm * scale, ox = (CW - bw) / 2, oy = (CH - bh) / 2;
    ctx.fillStyle = '#ffffff'; ctx.fillRect(ox, oy, bw, bh);
    ctx.strokeStyle = 'rgba(0,0,0,.15)'; ctx.strokeRect(ox + .5, oy + .5, bw - 1, bh - 1);
    // tissue
    var img = ctx.createImageData(Math.max(1, Math.round(bw)), Math.max(1, Math.round(bh)));
    for (var y = 0; y < img.height; y++) for (var x = 0; x < img.width; x++) {
      var u = x / img.width * 2 - 1, v = y / img.height * 2 - 1, o = (y * img.width + x) * 4;
      if (inside(u, v)) { img.data[o] = 243; img.data[o + 1] = 190; img.data[o + 2] = 214; img.data[o + 3] = 255; }
      else { img.data[o + 3] = 0; }
    }
    ctx.putImageData(img, Math.round(ox), Math.round(oy));
    ctx.fillStyle = 'rgba(70,52,140,.75)';
    nuclei.forEach(function (n) {
      var u = n[0] * 2 - 1, v = n[1] * 2 - 1;
      if (!inside(u, v)) return;
      ctx.beginPath(); ctx.arc(ox + n[0] * bw, oy + n[1] * bh, 0.8 + n[2] * 1.4, 0, 6.283); ctx.fill();
    });
    // tile grid (draw every tile if it is at least 3px, otherwise every k-th line)
    var tpx = state.tile * state.mpp / 1000 * scale; // tile size on canvas
    var step = Math.max(1, Math.ceil(3 / tpx));
    var hot = [0.62, 0.38]; // attention focus (u,v in 0..1)
    for (var ty = 0; ty < tilesY; ty += step) for (var tx = 0; tx < tilesX; tx += step) {
      var cx = (tx + 0.5) / tilesX, cy = (ty + 0.5) / tilesY;
      if (!inside(cx * 2 - 1, cy * 2 - 1)) continue;
      var X = ox + tx * tpx, Y = oy + ty * tpx, S = tpx * step;
      if (state.heat) {
        var d = Math.hypot((cx - hot[0]) * Wmm, (cy - hot[1]) * Hmm) / Math.max(Wmm, Hmm);
        var a = Math.max(0, 1 - d / 0.22);
        if (a > 0) { ctx.fillStyle = 'rgba(179,38,62,' + (0.75 * a * a).toFixed(3) + ')'; ctx.fillRect(X, Y, S, S); }
      }
      if (S >= 3) { ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 0.5; ctx.strokeRect(X, Y, S, S); }
    }
    // scale bar: 5 mm
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#142033'; ctx.fillRect(ox, CH - 10, 5 * scale, 3);
    ctx.font = '11px "IBM Plex Mono", monospace'; ctx.fillText('5 mm', ox + 5 * scale + 6, CH - 6);
    if (step > 1) { ctx.fillText('grid lines every ' + step + ' tiles', ox, 13); }
  }
  root.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (b.dataset.mag) { state.mpp = +b.dataset.mag; root.querySelectorAll('[data-mag]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); }
    if (b.dataset.tile) { state.tile = +b.dataset.tile; root.querySelectorAll('[data-tile]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); }
    if (b.hasAttribute('data-heat')) { state.heat = !state.heat; b.setAttribute('aria-pressed', String(state.heat)); }
    draw();
  });
  w.addEventListener('input', draw); h.addEventListener('input', draw);
  draw();
})();
