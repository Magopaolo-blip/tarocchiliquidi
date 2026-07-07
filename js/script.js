const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Tracce in città: una pagina QR dinamica, nascosta dal menu principale.
const qrArcani = [
  { n: '00', t: 'Il Matto', q: 'Che cosa ti chiede di muoverti prima di avere tutte le garanzie?' },
  { n: '01', t: 'Il Mago', q: 'Quale gesto piccolo può iniziare qualcosa che stai rimandando?' },
  { n: '02', t: 'La Papessa', q: 'Che cosa sai già, ma non hai ancora detto ad alta voce?' },
  { n: '03', t: 'L’Imperatrice', q: 'Quale idea chiede spazio, linguaggio e forma?' },
  { n: '04', t: 'L’Imperatore', q: 'Dove serve mettere un confine più chiaro?' },
  { n: '05', t: 'Il Papa', q: 'A chi o a che cosa stai consegnando autorità?' },
  { n: '06', t: 'L’Innamorato', q: 'Quale scelta continua a chiedere ascolto?' },
  { n: '07', t: 'Il Carro', q: 'In quale direzione stai andando con troppa o troppo poca decisione?' },
  { n: '08', t: 'La Giustizia', q: 'Che cosa va rimesso in equilibrio, senza forzarlo?' },
  { n: '09', t: 'L’Eremita', q: 'Quale risposta può arrivare solo rallentando?' },
  { n: '10', t: 'La Ruota', q: 'Quale schema si ripete e chiede un movimento diverso?' },
  { n: '11', t: 'La Forza', q: 'Quale parte di te può essere guidata con fermezza e dolcezza?' },
  { n: '12', t: 'L’Appeso', q: 'Che cosa cambia se smetti per un momento di tirare la corda?' },
  { n: '13', t: 'L’Arcano senza nome', q: 'Che cosa è pronto a trasformarsi in una forma più vera?' },
  { n: '14', t: 'Temperanza', q: 'Dove serve mescolare, ascoltare, trovare una misura?' },
  { n: '15', t: 'Il Diavolo', q: 'Quale legame ti trattiene e allo stesso tempo ti parla?' },
  { n: '16', t: 'La Torre', q: 'Quale struttura non regge più il tuo presente?' },
  { n: '17', t: 'La Stella', q: 'Che cosa torna possibile quando abbassi le difese?' },
  { n: '18', t: 'La Luna', q: 'Quale immagine interiore chiede di essere attraversata con calma?' },
  { n: '19', t: 'Il Sole', q: 'Dove la chiarezza nasce dalla relazione con l’altro?' },
  { n: '20', t: 'Il Giudizio', q: 'Quale chiamata stai ascoltando da tempo?' },
  { n: '21', t: 'Il Mondo', q: 'Che cosa può trovare compimento, prima di aprire un nuovo ciclo?' }
];
(function renderQrArcano(){
  const title = document.querySelector('#qrArcanoTitle');
  const num = document.querySelector('#qrArcanoNumber');
  const line = document.querySelector('#qrArcanoLine');
  if (!title || !num || !line) return;
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('a') || params.get('arcano') || '';
  const numeric = String(raw).match(/\d+/)?.[0];
  let index = numeric !== undefined ? Number(numeric) : NaN;
  if (!Number.isInteger(index) || index < 0 || index > 21) {
    const now = new Date();
    const seed = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000));
    index = seed % qrArcani.length;
  }
  const arcano = qrArcani[index];
  num.textContent = arcano.n;
  title.textContent = arcano.t;
  line.textContent = arcano.q;
})();
