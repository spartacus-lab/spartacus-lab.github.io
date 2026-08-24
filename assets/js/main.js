// Menu mobile
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Filtro categorie negli approfondimenti
(function () {
  var filtri = document.querySelectorAll('.filtro');
  var lista = document.getElementById('articoli');
  if (!filtri.length || !lista) return;

  var articoli = lista.querySelectorAll('.articolo');
  var vuoto = document.getElementById('nessun-risultato');

  filtri.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.dataset.cat;
      filtri.forEach(function (b) { b.classList.toggle('is-active', b === btn); });

      var visibili = 0;
      articoli.forEach(function (a) {
        var mostra = cat === 'tutti' || a.dataset.cat === cat;
        a.hidden = !mostra;
        if (mostra) visibili++;
      });
      if (vuoto) vuoto.hidden = visibili > 0;
    });
  });
})();
