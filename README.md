# Spartacus — sito

Sito di **Spartacus — Biomeccanica e Allenamento** (Giuseppe Roscigno, Pescina AQ).
Pubblicato con GitHub Pages su <https://spartacus-lab.github.io>.

Questo file spiega **come aggiungere contenuti senza sapere programmare** e, più in fondo,
come è fatto il sito per chi (o cosa) ci deve mettere le mani sul serio.

---

## Parte 1 — Aggiungere contenuti

> **Regola d'oro:** ogni prodotto, evento o articolo è **un singolo file di testo** dentro
> una cartella. Aggiungi il file → il sito si aggiorna da solo. Cancelli il file →
> sparisce dal sito. Non devi toccare nient'altro.

### Dove sta cosa

| Voglio aggiungere… | Metto un file in… | Le foto in… |
|---|---|---|
| Una bici, delle ruote, un accessorio | `_prodotti/` | `assets/img/prodotti/` |
| Una gara o un evento | `_eventi/` | `assets/img/eventi/` |
| Un articolo / una news | `_posts/` | `assets/img/foto/` |
| Cambiare i prezzi del coaching | `_data/piani.yml` | — |
| Cambiare telefono, mail, città | `_config.yml` | — |

### Come si scrive un file

Ogni file ha due parti:

1. **La scheda** — in cima, fra due righe di `---`. Sono i dati (titolo, prezzo, data…).
2. **Il testo** — sotto, scritto normalmente.

Nel testo puoi usare:

```
## Un titoletto
Testo normale.
**Grassetto** e *corsivo*.

- Un elenco
- puntato
```

---

### Aggiungere un prodotto alla vetrina

**1.** Metti le foto in `assets/img/prodotti/`. Dai nomi semplici, senza spazi né accenti:
`bianchi-oltre-01.jpg`, `bianchi-oltre-02.jpg`…

**2.** Crea un file in `_prodotti/`. Il nome del file diventa l'indirizzo della pagina:
`bianchi-oltre.md` → `spartacus-lab.github.io/vetrina/bianchi-oltre/`

**3.** Copia questo modello e cambia i valori:

```markdown
---
title: "Bianchi Oltre XR4"
categoria: "Bici da corsa"
ordine: 24
prezzo: "2.400 €"
stato: "Usata — taglia 54"
sommario: "Telaio celeste, Ultegra Di2, ruote a profilo 50."
copertina: /assets/img/prodotti/bianchi-oltre-01.jpg
immagini:
  - /assets/img/prodotti/bianchi-oltre-01.jpg
  - /assets/img/prodotti/bianchi-oltre-02.jpg
specifiche:
  - voce: "Gruppo"
    valore: "Shimano Ultegra Di2"
  - voce: "Taglia"
    valore: "54"
---

Qui scrivi la descrizione, con tutto lo spazio che vuoi.

## Un titoletto se serve

Altro testo.
```

**Cosa significano i campi:**

- `title` — il nome che si legge sul sito.
- `categoria` — raggruppa il prodotto nel filtro della vetrina. Usa **esattamente** una di
  queste, o ne crei una nuova: `Bici da corsa`, `MTB`, `Ruote`, `Componenti`,
  `Abbigliamento`, `Accessori`.
- `ordine` — numero che decide la posizione (più basso = più in alto). Lascia spazio fra
  i numeri (10, 20, 30…) così puoi infilarne altri in mezzo.
- `prezzo` — scrivi quello che vuoi: `"2.400 €"`, `"Su richiesta"`, `"Trattabile"`.
  Se togli la riga, il sito scrive «Su richiesta».
- `stato` — la scritta piccola sotto al prezzo. Facoltativo.
- `sommario` — una riga sola, appare nella griglia della vetrina.
- `copertina` — la foto della griglia. **Serve sempre**, altrimenti compare un segnaposto.
- `immagini` — la galleria della pagina di dettaglio. Facoltativa.
- `specifiche` — la tabella tecnica. Facoltativa. Aggiungi quante coppie `voce`/`valore` vuoi.

> **Attenzione alle virgolette.** I valori vanno fra `"` doppi. Se dentro al testo ti serve
> una virgoletta, scrivi `«»` oppure evita.

---

### Aggiungere un evento

File in `_eventi/`, per esempio `granfondo-marsica.md`:

```markdown
---
title: "1ª Granfondo della Marsica"
data: 2027-05-16
tipo: "Granfondo strada"
luogo: "Pescina (AQ)"
ritrovo: "Ore 7.30 — Piazza Mazzini"
partenza: "Ore 9.00"
percorso: "120 km, 2100 m D+"
quota: "35 €"
info: "388 483 0320"
organizzatore: "ASD Esempio"
locandina: /assets/img/eventi/granfondo-marsica.jpg
---

Descrizione dell'evento.
```

- `data` va scritta **così**: `2027-05-16` (anno-mese-giorno). È l'unico campo obbligatorio
  oltre al titolo.
- Il sito divide da solo gli eventi in **«In programma»** e **«Edizioni passate»**,
  confrontando la data con il giorno in cui il sito viene ricostruito. Non devi spostare niente.
- Tutti gli altri campi sono facoltativi: se li togli, semplicemente non compaiono.

---

### Aggiungere un articolo / una news

File in `_posts/`. **Il nome del file deve iniziare con la data**, così:

```
2027-01-15-come-scegliere-le-tacchette.md
```

Contenuto:

```markdown
---
title: "Come scegliere le tacchette"
categoria: "Biomeccanica"
sommario: "Una riga che riassume l'articolo, appare nella lista."
copertina: /assets/img/foto/fitting-metro.jpg
tags: [tacchette, ginocchia]
---

Il testo dell'articolo.

## Un capitolo

Altro testo.
```

- `categoria` crea i pulsanti di filtro nella pagina Approfondimenti. Usa poche categorie
  ricorrenti: `Allenamento`, `Biomeccanica`, `Recupero`, `Nutrizione`, `News`.
- `copertina` e `tags` sono facoltativi.
- Gli articoli si ordinano da soli, **dal più recente**. I tre più recenti finiscono anche
  in home.

---

### Cambiare i prezzi del coaching

Apri `_data/piani.yml`. È una lista dei quattro piani. Cambia solo i valori dopo i due punti:

```yaml
- nome: "Base"
  claim: "Il primo passo verso un metodo di allenamento strutturato"
  prezzo: "€300"
  periodo: "Annuale"
  descrizione: "Piano mensile personalizzato…"
  evidenza: false          # true = piano evidenziato in rosso
  badge: "Più richiesto"   # etichetta sopra al piano (solo se evidenza: true)
  specifiche:
    - voce: "Programmazione"
      valore: "Mensile, revisione base a fine mese"
```

Le modifiche appaiono **sia in home sia nella pagina Coaching**: si scrivono una volta sola.

Stessa logica per `_data/servizi.yml` (i sei riquadri della home).

---

### Cambiare contatti e dati generali

In `_config.yml`, sezione `contatti`:

```yaml
contatti:
  telefono: "388 483 0320"
  telefono_intl: "393884830320"   # per WhatsApp: prefisso 39 + numero senza spazi
  email: "spartacusbikeshop@gmail.com"
  citta: "Pescina (AQ)"
```

Cambiati qui, si aggiornano ovunque: header, footer, pulsanti WhatsApp, dati per Google.

> ⚠️ Dopo aver modificato `_config.yml` il sito va **ricostruito** (succede da solo su
> GitHub, ma in locale devi riavviare il server).

---

### Sostituire le foto

- Le foto vanno in `assets/img/`. Usa nomi **senza spazi, senza accenti, minuscoli**.
- Prima di caricarle **ridimensionale**: massimo 1600 px di lato lungo. Una foto da 5 MB
  presa dal telefono rallenta il sito per tutti.
- Il logo è `assets/img/logo-spartacus.jpg`. Se lo sostituisci, tieni **lo stesso nome**
  e lo sfondo nero.

---

### Pubblicare le modifiche

Se usi GitHub dal sito web: apri il file, matita ✏️ in alto a destra, modifica,
«Commit changes». Il sito si aggiorna da solo in 1–2 minuti.

Da terminale:

```bash
git add . && git commit -m "Aggiunto prodotto X" && git push
```

---

## Parte 2 — Struttura tecnica

> Sezione per sviluppatori e agenti AI.

### Stack

Jekyll 3.10 statico (versione GitHub Pages), **nessun plugin non-whitelisted**, nessun
build step JS, nessuna dipendenza esterna a runtime a parte Google Fonts.
Il CSS è un unico file scritto a mano — **non c'è Sass**: `assets/css/style.css` viene
servito così com'è.

### Alberatura

```
_config.yml            Configurazione + contatti (fonte unica)
_data/
  piani.yml            Listino coaching → home + /coaching/
  servizi.yml          Le 6 aree di intervento → home
_layouts/
  default.html         Scheletro HTML
  page.html            Pagine statiche (head + prose o full_width)
  prodotto.html        Dettaglio prodotto
  evento.html          Dettaglio evento
  post.html            Dettaglio articolo
_includes/
  head.html            <head>, meta OG, JSON-LD LocalBusiness
  nav.html             Header sticky + menu mobile
  footer.html          Footer + <script>
  cta.html             Blocco CTA finale riutilizzabile
  icone.html           Libreria icone SVG: {% include icone.html nome="bici" %}
_prodotti/  _eventi/  _posts/     Contenuti, un file ciascuno
assets/css/style.css   Tutto lo stile
assets/js/main.js      Menu mobile + filtro per categoria
assets/img/            prodotti/ · eventi/ · foto/
```

### Collections e permalink

| Collection | Cartella | URL |
|---|---|---|
| `prodotti` | `_prodotti/` | `/vetrina/:name/` |
| `eventi` | `_eventi/` | `/eventi/:name/` |
| `posts` | `_posts/` | `/approfondimenti/:title/` |

I layout sono assegnati via `defaults` in `_config.yml`: **non serve** scrivere `layout:`
nel front matter dei contenuti.

### Convenzioni del front matter delle pagine

```yaml
layout: page          # implicito
permalink: /url/
title: "Titolo H1"
eyebrow: "Sopra-titolo rosso"
lead: "Paragrafo introduttivo"
full_width: true      # salta il wrapper .prose (per layout a griglia)
no_cta: true          # nasconde il blocco CTA finale
description: "Meta description SEO"
```

### Sistema di filtro (riusabile)

`assets/js/main.js` collega qualunque gruppo di filtri a qualunque lista. Markup:

```html
<div class="filtri" data-filtra="NOME">
  <button class="filtro is-active" data-cat="tutti">Tutti</button>
  <button class="filtro" data-cat="slug-categoria">Etichetta</button>
</div>
<div id="NOME">
  <a class="…" data-cat="slug-categoria">…</a>
</div>
<p data-vuoto="NOME" hidden>Nessun risultato.</p>
```

Usato in `/vetrina/` (`NOME` = `prodotti`) e `/approfondimenti/` (`NOME` = `articoli`).
Gli slug si generano con il filtro Liquid `| slugify`.

### Design system

Token in `:root` dentro `style.css`. Il sito è **dark-only** per scelta di brand.

| Token | Valore | Uso |
|---|---|---|
| `--nero` / `--nero-2` / `--nero-3` | `#08080a` → `#15151a` | sfondi, card, riquadri |
| `--rosso` | `#e11d26` | accento primario (dal logo) |
| `--bianco` / `--grigio` | `#f4f4f6` / `#a6a6b0` | testo |
| `--bordo` | `#26262f` | filetti e bordi card |

Font: **Barlow Condensed** (700/800, spesso corsivo e maiuscolo) per i titoli,
**Barlow** per il testo. Entrambi da Google Fonts.

Componenti principali: `.hero`, `.servizi`, `.pilastri`, `.step`, `.piani`, `.prodotti`,
`.articoli`, `.eventi`, `.card`, `.quote`, `.faq`, `.cta`, `.stats`, `.galleria`, `.specs`.

Dettagli ricorrenti del linguaggio visivo: sfondo nero con trama diagonale (`.diag`),
strisce rosse di velocità nella hero (`.hero__streaks`), barra tricolore (`.tricolore`),
bottoni con angolo tagliato (`clip-path`).

### Sviluppo locale

```bash
LANG=en_US.UTF-8 jekyll serve --livereload
```

> ⚠️ **`LANG` è obbligatoria.** Senza, Ruby usa `US-ASCII` e la build fallisce sui
> caratteri accentati e sui trattini lunghi. In `_config.yml` c'è già `encoding: UTF-8`,
> ma la variabile d'ambiente serve comunque.

Build di produzione:

```bash
LANG=en_US.UTF-8 jekyll build
```

Su GitHub Pages la build è automatica a ogni push su `main`.

### Note per agenti

- **Non aggiungere plugin** fuori dalla whitelist di GitHub Pages: la build remota
  fallirebbe silenziosamente.
- **Non introdurre Sass**: `style.css` non ha front matter, quindi Jekyll lo copia
  senza processarlo. Aggiungere `---` in cima lo farebbe passare per il convertitore SCSS
  e la build si romperebbe.
- `[hidden] { display: none !important; }` in cima al CSS è **necessario**: molti componenti
  dichiarano `display: flex/grid` e sovrascriverebbero l'attributo `hidden` usato dai filtri.
- I prezzi e i modelli marcati **«Da confermare»** nei file di `_prodotti/` sono segnaposto:
  vanno verificati con Giuseppe prima della pubblicazione, non inventati.
