(function () {
  'use strict';
  var root = document.getElementById('drach');
  if (!root) return;
  var ta = root.querySelector('textarea');
  var out = root.querySelector('.drach-out');
  var only = root.querySelector('[data-act="ggac"]');
  var seed = 7;
  function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
  function randomSeq(n) { var s = ''; for (var i = 0; i < n; i++) s += 'ACGU'[Math.floor(rnd() * 4)]; return s; }
  function clean(s) { return s.toUpperCase().replace(/T/g, 'U').replace(/[^ACGU]/g, ''); }
  function freqs(s) {
    var f = { A: 0, C: 0, G: 0, U: 0 };
    for (var i = 0; i < s.length; i++) f[s[i]]++;
    var n = Math.max(1, s.length);
    return { A: f.A / n, C: f.C / n, G: f.G / n, U: f.U / n };
  }
  function render() {
    var s = clean(ta.value);
    var strict = only.getAttribute('aria-pressed') === 'true';
    var re = strict ? /(?=GGACU)/g : /(?=[AGU][AG]AC[ACU])/g;
    var hits = [], m;
    while ((m = re.exec(s)) !== null) { hits.push(m.index); re.lastIndex = m.index + 1; }
    // build highlighted html, marking the central A
    var mark = new Array(s.length).fill(0);
    hits.forEach(function (i) { for (var k = 0; k < 5; k++) mark[i + k] = Math.max(mark[i + k], k === 2 ? 2 : 1); });
    var html = '', open = 0;
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (mark[i] === 2) html += '<b>' + c + '</b>';
      else if (mark[i] === 1) html += '<mark>' + c + '</mark>';
      else html += c;
      if ((i + 1) % 10 === 0) html += ' ';
    }
    out.innerHTML = s.length ? '<div class="drach-seq">' + html + '</div>' : '';
    var f = freqs(s);
    var p = strict ? f.G * f.G * f.A * f.C * f.U : (f.A + f.G + f.U) * (f.A + f.G) * f.A * f.C * (f.A + f.C + f.U);
    var expected = Math.max(0, s.length - 4) * p;
    root.querySelector('[data-k="len"]').textContent = s.length.toLocaleString();
    root.querySelector('[data-k="n"]').textContent = hits.length;
    root.querySelector('[data-k="perkb"]').textContent = s.length ? (hits.length / s.length * 1000).toFixed(1) : '0';
    root.querySelector('[data-k="exp"]').textContent = expected.toFixed(1);
  }
  root.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var act = b.dataset.act;
    if (act === 'example') { ta.value = randomSeq(600); }
    if (act === 'shuffle') {
      var a = clean(ta.value).split('');
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      ta.value = a.join('');
    }
    if (act === 'ggac') b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
    render();
  });
  ta.addEventListener('input', render);
  ta.value = randomSeq(600);
  render();
})();
