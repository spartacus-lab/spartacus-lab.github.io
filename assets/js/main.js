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

// Filtro per categoria — riusabile su vetrina e approfondimenti.
// Markup atteso:
//   <div class="filtri" data-filtra="NOME">…<button data-cat="…">…</div>
//   <div id="NOME">…<a data-cat="…">…</div>
//   <p data-vuoto="NOME" hidden>…</p>
(function () {
  document.querySelectorAll('.filtri[data-filtra]').forEach(function (gruppo) {
    var nome = gruppo.dataset.filtra;
    var lista = document.getElementById(nome);
    if (!lista) return;

    var bottoni = gruppo.querySelectorAll('.filtro');
    var voci = lista.querySelectorAll('[data-cat]');
    var vuoto = document.querySelector('[data-vuoto="' + nome + '"]');

    bottoni.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.dataset.cat;
        bottoni.forEach(function (b) { b.classList.toggle('is-active', b === btn); });

        var visibili = 0;
        voci.forEach(function (v) {
          var mostra = cat === 'tutti' || v.dataset.cat === cat;
          v.hidden = !mostra;
          if (mostra) visibili++;
        });
        if (vuoto) vuoto.hidden = visibili > 0;
      });
    });
  });
})();
