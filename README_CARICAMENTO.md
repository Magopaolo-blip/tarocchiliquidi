# Tarocchi Liquidi — TL NEXT v7

Versione pronta per GitHub Pages.

## Cosa contiene
- Homepage ottimizzata con hero compatta, font più sobrio e ritmo visivo pulito.
- Pagine: Consulto, Regala, Eventi, Aziende, Metodo, Biblioteca, Paolo, Privacy.
- Pagina semi-nascosta per campagna QR: `tracce.html`.
- Cache aggiornata a `tl-next-v8`.

## Pagina QR / Tracce in città
La pagina `tracce.html` non è nel menu principale ed è impostata con `noindex`.
È pensata per QR code fisici, cartoline, biglietti, adesivi o inviti.

URL principale:
`https://www.tarocchiliquidi.it/tracce.html`

URL con Arcano specifico:
`https://www.tarocchiliquidi.it/tracce.html?a=0`
...
`https://www.tarocchiliquidi.it/tracce.html?a=21`

Se manca il parametro `a`, la pagina mostra automaticamente una Traccia del giorno.

## Caricamento
Caricare tutti i file nella root della repository GitHub Pages, sostituendo quelli esistenti.


## Nota video Il Dono
La pagina `il-dono.html` contiene già il blocco video.
Per farlo funzionare, carica nella cartella `assets` il file video con questo nome esatto:

`il-dono.mp4`

Il poster del video è già impostato su `assets/dono.jpg`.


## Video in assets

La pagina Regala usa:
- `assets/il-dono.mp4`

La pagina Eventi usa:
- `assets/party-tarocchi-social-club.mp4`

I nomi devono restare esattamente questi, minuscole comprese.


V10:
- aggiunto poster video Eventi: assets/party-poster.jpg
- il video Eventi usa poster dedicato invece della foto duplicata della pagina.
- cache aggiornata a tl-next-v10.


V12: aggiunta sezione Libri nella pagina Paolo con tre collegamenti Amazon e dati strutturati Person/Book. Cache aggiornata a tl-next-v12.
