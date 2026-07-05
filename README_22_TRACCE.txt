TAROCCHI LIQUIDI — SISTEMA 22 TRACCE / QR

COSA CARICARE

1) Nella root principale del sito, insieme a index.html:
   - traccia.html
   - sticker-22-tracce.html   (facoltativo: serve solo per stampare/vedere i QR)

2) Nella cartella assets del sito:
   - carica tutta la cartella tracce

Struttura corretta:

/assets/tracce/tracce.json
/assets/tracce/qr/matto.png
/assets/tracce/qr/bagatto.png
...
/assets/tracce/arcani/matto.jpg
/assets/tracce/audio/matto.mp3

URL DELLE 22 TRACCE

https://www.tarocchiliquidi.it/traccia.html?a=matto
https://www.tarocchiliquidi.it/traccia.html?a=bagatto
https://www.tarocchiliquidi.it/traccia.html?a=papessa
https://www.tarocchiliquidi.it/traccia.html?a=imperatrice
https://www.tarocchiliquidi.it/traccia.html?a=imperatore
https://www.tarocchiliquidi.it/traccia.html?a=papa
https://www.tarocchiliquidi.it/traccia.html?a=amoureux
https://www.tarocchiliquidi.it/traccia.html?a=carro
https://www.tarocchiliquidi.it/traccia.html?a=giustizia
https://www.tarocchiliquidi.it/traccia.html?a=eremita
https://www.tarocchiliquidi.it/traccia.html?a=ruota
https://www.tarocchiliquidi.it/traccia.html?a=forza
https://www.tarocchiliquidi.it/traccia.html?a=appeso
https://www.tarocchiliquidi.it/traccia.html?a=arcano-senza-nome
https://www.tarocchiliquidi.it/traccia.html?a=temperanza
https://www.tarocchiliquidi.it/traccia.html?a=diavolo
https://www.tarocchiliquidi.it/traccia.html?a=torre
https://www.tarocchiliquidi.it/traccia.html?a=stella
https://www.tarocchiliquidi.it/traccia.html?a=luna
https://www.tarocchiliquidi.it/traccia.html?a=sole
https://www.tarocchiliquidi.it/traccia.html?a=giudizio
https://www.tarocchiliquidi.it/traccia.html?a=mondo

IMMAGINI

Per ora il file è pronto a cercare le immagini in:
/assets/tracce/arcani/NOME-ARCANO.jpg

Esempi:
/assets/tracce/arcani/matto.jpg
/assets/tracce/arcani/bagatto.jpg
/assets/tracce/arcani/papessa.jpg

La traccia amoureux richiama ancora l'immagine esterna già testata, ma per il sistema definitivo consiglio di caricare tutte le 22 immagini localmente.

AUDIO

Carica gli audio in:
/assets/tracce/audio/NOME-ARCANO.mp3

Esempi:
/assets/tracce/audio/matto.mp3
/assets/tracce/audio/amoureux.mp3

Se usi .m4a, basta modificare il percorso dentro assets/tracce/tracce.json.

SOTTOTITOLI

I sottotitoli sono dentro:
/assets/tracce/tracce.json

Ogni riga ha:
- inizio
- fine
- testo

La pagina mostra i sottotitoli durante l'audio. Se l'audio non è ancora caricato, simula comunque i sottotitoli usando i tempi del JSON.

FLUSSO ESPERIENZA

QR -> traccia.html?a=arcano -> Attiva la Traccia -> Fotocamera -> Carta -> Ascolta la voce del Tarocco -> Sottotitoli -> Segui la Traccia
