/* CosmoAlma — tiny bilingual (ES/EN) engine.
   Each page defines window.COPY = { es: {...}, en: {...} } before loading this file.
   Any text or attribute containing {{t.key}} is filled from COPY[lang].key. */
(function () {
  var copy = window.COPY || {};
  var re = /\{\{t\.([A-Za-z0-9_]+)\}\}/g;
  var holes = [];
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var n;
  while ((n = walker.nextNode())) {
    if (n.nodeValue.indexOf('{{t.') > -1) holes.push({ node: n, tpl: n.nodeValue });
  }
  document.querySelectorAll('*').forEach(function (el) {
    for (var i = 0; i < el.attributes.length; i++) {
      var a = el.attributes[i];
      if (a.value.indexOf('{{t.') > -1) holes.push({ el: el, attr: a.name, tpl: a.value });
    }
  });
  var es = document.getElementById('lang-es');
  var en = document.getElementById('lang-en');
  function render(lang) {
    var t = copy[lang] || {};
    holes.forEach(function (h) {
      var v = h.tpl.replace(re, function (_, k) { return t[k] != null ? t[k] : ''; });
      if (h.node) h.node.nodeValue = v; else h.el.setAttribute(h.attr, v);
    });
    document.documentElement.lang = lang;
    if (t.pageTitle) document.title = t.pageTitle;
    if (es) es.setAttribute('aria-pressed', String(lang === 'es'));
    if (en) en.setAttribute('aria-pressed', String(lang === 'en'));
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  if (es) es.addEventListener('click', function () { render('es'); });
  if (en) en.addEventListener('click', function () { render('en'); });
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var start = saved || (/^es/i.test(navigator.language || 'es') ? 'es' : 'en');
  render(copy[start] ? start : 'es');
})();
