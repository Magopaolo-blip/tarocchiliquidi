TAROCCHI LIQUIDI — 22 TRACCE v9
Testo/sottotitoli senza audio obbligatorio + musica di sottofondo

COSA CARICARE SU GITHUB

1) Nella ROOT del sito, insieme a index.html:
   - traccia.html
   - sticker-22-tracce.html  (pagina per vedere/stampare i 22 QR)

2) Dentro la cartella già esistente:
   assets/tracce/

   carica tutti questi file:
   - tracce.json
   - musica-traccia.mp3
   - tutti i file qr-*.png

IMPORTANTE
In questa versione gli audio della voce NON sono obbligatori.
Se nel file tracce.json il campo audio è vuoto, la pagina mostra solo i sottotitoli/testo.
Il bottone diventa automaticamente: "Leggi la Traccia".

MUSICA DI SOTTOFONDO
La musica parte quando l'utente preme "Attiva la Traccia" e si apre la carta.
Il file da caricare è:

   assets/tracce/musica-traccia.mp3

È una musica ambientale originale generata per questa esperienza, quindi non devi usare brani coperti da copyright.

QUANDO VORRAI AGGIUNGERE LA VOCE
Per ogni Arcano carica, nella stessa cartella assets/tracce/, un file audio:

   matto.mp3
   bagatto.mp3
   papessa.mp3
   ...

Poi nel file tracce.json modifica, per esempio:

   "audio": "assets/tracce/matto.mp3"

oppure se usi m4a:

   "audioM4a": "assets/tracce/matto.m4a"

Quando il campo audio è compilato, il bottone diventa automaticamente:
"Ascolta la voce del Tarocco".

LINK DI TEST
https://www.tarocchiliquidi.it/traccia.html?a=amoureux
https://www.tarocchiliquidi.it/traccia.html?a=matto
https://www.tarocchiliquidi.it/sticker-22-tracce.html
