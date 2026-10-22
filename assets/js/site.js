(function () {
  'use strict';
  var root = document.documentElement;

  // ---- theme toggle ----
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      if (!current) current = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // ---- reading progress ----
  var bar = document.querySelector('.progress span');
  var article = document.querySelector('.longform__article');
  if (bar && article) {
    var ticking = false;
    var update = function () {
      var r = article.getBoundingClientRect();
      var total = r.height - innerHeight;
      var p = total > 0 ? Math.min(1, Math.max(0, -r.top / total)) : 0;
      bar.style.transform = 'scaleX(' + p + ')';
      ticking = false;
    };
    addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  // ---- TOC scrollspy ----
  var toc = document.querySelector('.toc nav');
  if (toc && 'IntersectionObserver' in window) {
    var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    var byId = {};
    var heads = [];
    links.forEach(function (a) {
      var id = decodeURIComponent(a.getAttribute('href').slice(1));
      var h = document.getElementById(id);
      if (h) { byId[id] = a; heads.push(h); }
    });
    var setActive = function (id) {
      links.forEach(function (a) { a.classList.remove('is-active'); });
      toc.querySelectorAll('li.is-open').forEach(function (li) { li.classList.remove('is-open'); });
      var a = byId[id];
      if (!a) return;
      a.classList.add('is-active');
      var li = a.parentElement;
      while (li && li !== toc) {
        if (li.tagName === 'LI') li.classList.add('is-open');
        li = li.parentElement;
      }
      // keep the active item visible inside the sticky TOC
      var box = document.querySelector('.toc');
      if (box) {
        var ar = a.getBoundingClientRect(), br = box.getBoundingClientRect();
        if (ar.top < br.top + 40 || ar.bottom > br.bottom - 40) box.scrollTop += ar.top - br.top - br.height / 3;
      }
    };
    var current = null;
    var pick = function () {
      var y = 120, best = null;
      for (var i = 0; i < heads.length; i++) {
        if (heads[i].getBoundingClientRect().top - y <= 0) best = heads[i]; else break;
      }
      var id = best ? best.id : (heads[0] && heads[0].id);
      if (id !== current) { current = id; setActive(id); }
    };
    var obs = new IntersectionObserver(pick, { rootMargin: '-100px 0px -60% 0px' });
    heads.forEach(function (h) { obs.observe(h); });
    addEventListener('scroll', function () { requestAnimationFrame(pick); }, { passive: true });
    pick();
  }

  // close mobile TOC after a jump
  document.querySelectorAll('.toc-mobile a').forEach(function (a) {
    a.addEventListener('click', function () { var d = a.closest('details'); if (d) d.open = false; });
  });

  // ---- click-to-load YouTube ----
  document.querySelectorAll('.yt').forEach(function (el) {
    var load = function () {
      if (el.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      var start = parseInt(el.dataset.start || '0', 10);
      f.src = 'https://www.youtube-nocookie.com/embed/' + el.dataset.id + '?autoplay=1&rel=0' + (start ? '&start=' + start : '');
      f.title = el.dataset.title || 'YouTube video';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      el.appendChild(f);
    };
    el.addEventListener('click', load);
  });

  // ---- publications filter ----
  var chips = document.querySelectorAll('.chip[data-filter]');
  if (chips.length) {
    var pubs = document.querySelectorAll('.pub');
    var empty = document.querySelector('.pubs-empty');
    var apply = function (f) {
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.dataset.filter === f)); });
      var shown = 0;
      pubs.forEach(function (p) {
        var tags = (p.dataset.tags || '').split(/\s+/);
        var ok = f === 'all' || tags.indexOf(f) !== -1;
        p.hidden = !ok;
        if (ok) shown++;
      });
      document.querySelectorAll('.pubs-year, .pubs-group').forEach(function (g) {
        g.hidden = !g.querySelector('.pub:not([hidden])');
      });
      if (empty) empty.hidden = shown > 0;
    };
    chips.forEach(function (c) { c.addEventListener('click', function () { apply(c.dataset.filter); }); });
  }
})();
