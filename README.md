# WKNDR | Non pianificare. Parti e basta. ✈️✨

**WKNDR** è una landing page interattiva e moderna per un servizio esclusivo di viaggi last-minute per il weekend. L'applicazione promuove un'esperienza di viaggio senza stress basata sul concetto di **"Secret Drops"**: destinazioni misteriose o esclusive sbloccate a tempo ogni martedì alle 12:00, con prenotazione istantanea e supporto concierge dedicato su WhatsApp.

Il sito presenta un design cyberpunk/dark moderno con effetti di glassmorfismo, animazioni fluide e supporto multilingua (Italiano/Inglese).

---

## 🚀 Funzionalità Principali

*   **Secret Drops Countdown:** Un conto alla rovescia animato che calcola in tempo reale il tempo rimanente al prossimo drop (ogni martedì alle 12:00).
*   **Esperienze Live ("LIVE NOW"):** Esplorazione interattiva dei pacchetti viaggio disponibili. Cliccando su una scheda si apre una finestra modale con dettagli aggiuntivi e galleria.
*   **Checkout Rapido Simulato:** Pulsanti di acquisto rapido con integrazione finta di Apple Pay e Klarna (pagamento in 3 rate con calcolo automatico dei costi di gestione).
*   **Prossimi Drop & Waitlist:** Anteprima delle mete future (nascoste da un lucchetto) con modulo per iscriversi alla waitlist VIP e ricevere l'accesso prioritario via email.
*   **Motore di Traduzione (IT/EN):** Sistema client-side nativo in JavaScript ([lang.js](file:///Users/albertoriccelli/Desktop/piattaforma-viaggi/lang.js)) che scansiona il DOM e traduce tutti i contenuti. Salva la lingua preferita nel `localStorage` del browser.
*   **Smooth Scrolling & Scroll Animations:** Integrazione della libreria *Lenis* per uno scorrimento ultra-fluido della pagina, abbinata ad animazioni di comparsa guidate da `IntersectionObserver`.

---

## 🛠️ Tecnologie Utilizzate

L'applicazione è sviluppata interamente con tecnologie web standard (Vanilla stack) per garantire massime prestazioni e caricamento istantaneo:

1.  **HTML5:** Struttura semantica ottimizzata per l'accessibilità e la SEO.
2.  **CSS3:** Layout responsive (Flexbox e CSS Grid), variabili CSS per la gestione dei colori di design, filtri di sfocatura (backdrop-filter) per il glassmorfismo e animazioni personalizzate (glitch title, pulsazioni, fade-in).
3.  **Vanilla JavaScript (ES6+):** Logica applicativa autonoma per il countdown, la gestione dello stato dei modali, il cambio lingua e l'interazione con l'utente.
4.  **Lenis Smooth Scroll:** Libreria esterna per migliorare l'esperienza di scorrimento sui diversi browser.

---

## 📂 Struttura del Progetto

```bash
piattaforma-viaggi/
├── assets/                  # File multimediali (video di sfondo, immagini destinazioni)
├── index.html               # Home page (Live Drops, Countdown, Checkout)
├── drops.html               # Anteprima prossimi drop e modulo Waitlist
├── vibes.html               # Galleria fotografica dello stile WKNDR
├── how-it-works.html        # Guida al funzionamento del servizio in 3 passaggi
├── faq.html                 # Risposte alle domande frequenti e supporto
├── style.css                # Foglio di stile principale (design system e responsive)
├── script.js                # Logica del countdown, modali, menu e animazioni scroll
├── lang.js                  # Dizionario di traduzione e motore multilingua IT/EN
└── README.md                # Questo file
```

---

## 💻 Come Eseguire il Progetto Localmente

Trattandosi di un sito statico, non è necessario compilare il codice. Puoi avviarlo in due modi:

### Opzione 1: Apertura diretta
Fai doppio clic sul file [index.html](file:///Users/albertoriccelli/Desktop/piattaforma-viaggi/index.html) per aprirlo direttamente in qualsiasi browser web moderno.

### Opzione 2: Server locale (Consigliato)
Per caricare correttamente tutti gli asset e testare al meglio le performance, puoi avviare un server locale leggero.

Se hai **Node.js** installato:
```bash
npx serve .
```

Se preferisci usare **Python**:
```bash
python3 -m http.server 8080
```
Visita poi `http://localhost:8080` nel tuo browser.

---

## 🎨 Design System e Stile

Il design è stato curato per offrire un'estetica premium e futuristica:
*   **Sfondo scuro:** `#0a0a0c` con accenti neon verde acido (`#ccff00`).
*   **Tipografia:** *Bebas Neue* per i titoli impattanti e *Poppins* per i testi di lettura.
*   **Componenti Glass:** Contenitori sfocati semitrasparenti con bordi sottili per un effetto moderno in sovrapposizione al video di sfondo della Hero.
