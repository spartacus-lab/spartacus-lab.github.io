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

// Nasconde con forza la barra di Google Translate: il CSS di Google si carica
// dinamicamente dopo il nostro e a volte vince la cascata, lasciando la barra
// invisibile-ma-ancora-cliccabile sopra la nav (intercetta i click). Lo stile
// inline con !important battle sempre i fogli di stile esterni.
(function () {
  function nascondi(nodo) {
    nodo.style.setProperty('display', 'none', 'important');
    nodo.style.setProperty('pointer-events', 'none', 'important');
  }
  function scansiona() {
    document.querySelectorAll('body > div.skiptranslate').forEach(nascondi);
    document.body.style.setProperty('top', '0', 'important');
  }
  scansiona();
  new MutationObserver(scansiona).observe(document.body, { childList: true });
})();

// Traduzione EN/IT — pilota il widget Google Translate nascosto
// tramite il pulsante nella nav, senza mostrare l'interfaccia di Google.
// Lo stato si legge/scrive nel cookie "googtrans" (lo stesso che usa
// Google) e si applica con un ricaricamento: è il modo più affidabile,
// perché la struttura interna del widget cambia da una versione all'altra.
(function () {
  var btn = document.getElementById('lang-toggle');
  if (!btn) return;

  function isEnglish() {
    return document.cookie.indexOf('googtrans=/it/en') !== -1;
  }

  function updateLabel() {
    var en = isEnglish();
    btn.textContent = en ? 'IT' : 'EN';
    btn.setAttribute('aria-label', en ? 'Torna all\'italiano' : 'Switch to English');
  }

  btn.addEventListener('click', function () {
    if (isEnglish()) {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + location.hostname + ';';
    } else {
      document.cookie = 'googtrans=/it/en; path=/';
    }
    location.reload();
  });

  updateLabel();
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
