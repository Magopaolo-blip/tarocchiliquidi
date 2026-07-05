TAROCCHI LIQUIDI — 22 TRACCE v10

CORREZIONI v10
- Dopo “Attiva la Traccia”, se non è presente un audio, i testi/sottotitoli partono automaticamente.
- La musica di sottofondo parte quando si attiva la Traccia.
- Il pulsante “Leggi/Ascolta” non appare quando l’audio non è ancora presente.
- L’Amoureux richiama direttamente l’immagine reale da Wikimedia Commons.

CARICAMENTO
1) Nella root del sito, sovrascrivi:
   - traccia.html
   - sticker-22-tracce.html

2) Dentro assets/tracce, carica/sovrascrivi TUTTI i file contenuti nella cartella assets/tracce dello ZIP:
   - tracce.json
   - musica-traccia.mp3
   - tutti i qr-*.png

TEST
https://www.tarocchiliquidi.it/traccia.html?a=amoureux

Se vedi ancora la versione precedente, apri in finestra anonima o aggiorna svuotando cache.
