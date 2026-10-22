(function () {
  'use strict';
  var root = document.getElementById('peaksales');
  if (!root) return;
  // pop and price sliders are log10 scales
  var presets = {
    ultra:  { pop: Math.log10(5000),    dx: 60, tx: 70, price: Math.log10(450000), roy: 15 },
    rare:   { pop: Math.log10(150000),  dx: 40, tx: 35, price: Math.log10(120000), roy: 12 },
    common: { pop: Math.log10(20000000), dx: 70, tx: 4,  price: Math.log10(5000),  roy: 10 }
  };
  var inputs = {};
  root.querySelectorAll('input[data-k]').forEach(function (i) { inputs[i.dataset.k] = i; });
  function money(v) {
    if (v >= 1e9) return '$' + (v / 1e9).toFixed(v >= 1e10 ? 0 : 1) + 'B';
    if (v >= 1e6) return '$' + (v / 1e6).toFixed(v >= 1e8 ? 0 : 1) + 'M';
    if (v >= 1e3) return '$' + Math.round(v / 1e3) + 'K';
    return '$' + Math.round(v);
  }
  function num(v) { return v >= 1e6 ? (v / 1e6).toFixed(1) + 'M' : Math.round(v).toLocaleString(); }
  function sig2(v) { var m = Math.pow(10, Math.floor(Math.log10(v)) - 1); return Math.round(v / m) * m; }
  function set(p) { Object.keys(p).forEach(function (k) { inputs[k].value = p[k]; }); }
  function render() {
    var pop = sig2(Math.pow(10, +inputs.pop.value)), dx = +inputs.dx.value / 100, tx = +inputs.tx.value / 100;
    var price = sig2(Math.pow(10, +inputs.price.value)), roy = +inputs.roy.value / 100;
    root.querySelector('[data-o="pop"]').textContent = num(pop);
    root.querySelector('[data-o="dx"]').textContent = Math.round(dx * 100) + '%';
    root.querySelector('[data-o="tx"]').textContent = Math.round(tx * 100) + '%';
    root.querySelector('[data-o="price"]').textContent = money(price);
    root.querySelector('[data-o="roy"]').textContent = Math.round(roy * 100) + '%';
    var pts = pop * dx * tx, rev = pts * price;
    root.querySelector('[data-r="pts"]').textContent = num(pts);
    root.querySelector('[data-r="rev"]').textContent = money(rev);
    root.querySelector('[data-r="royalty"]').textContent = money(rev * roy);
    root.querySelector('[data-r="perb"]').textContent = num(1e9 / price);
  }
  root.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-preset]'); if (!b) return;
    root.querySelectorAll('[data-preset]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    set(presets[b.dataset.preset]); render();
  });
  root.addEventListener('input', render);
  set(presets.ultra); render();
})();
