const translations = {
    "en": {
        "1. Scegli il Drop": "1. Choose the Drop",
        "Scegli il Drop": "Choose the Drop",
        "Ogni martedì alle 12:00 sblocchiamo 3 nuove destinazioni esclusive. Non hai tempo per decidere: i posti finiscono in fretta.": "Every Tuesday at 12:00 we unlock 3 new exclusive destinations. No time to decide: spots sell out fast.",
        "3 nuove destinazioni ogni martedì.": "3 new destinations every Tuesday.",
        "2. Zero Sbatti": "2. Zero Stress",
        "Zero Sbatti": "Zero Stress",
        "Nessun form infinito, nessun redirect strano. Scegli la vibe, paghi in un attimo con Apple Pay o dividi il conto con Klarna, e il gioco è fatto.": "No endless forms, no weird redirects. Choose the vibe, pay in a flash with Apple Pay or Klarna, and you're set.",
        "Prenota con Apple Pay o dividi con Klarna.": "Book with Apple Pay or split with Klarna.",
        "3. Concierge VIP": "3. VIP Concierge",
        "Concierge VIP": "VIP Concierge",
        "Appena prenotato, entri in un gruppo WhatsApp privato. Il tuo concierge personale ti manderà lì le carte d'imbarco, le info sull'alloggio e i consigli per la serata.": "Once booked, you enter a private WhatsApp group. Your personal concierge will send boarding passes, accommodation info, and night plans there.",
        "Ricevi l'itinerario e i ticket su WhatsApp.": "Receive itinerary and tickets on WhatsApp.",
        "Home": "Home",
        "Prossimi Drop": "Next Drops",
        "Come Funziona": "How It Works",
        "Le Nostre Vibe": "Our Vibes",
        "FAQ & Supporto": "FAQ & Support",
        "DROP SEGRETO": "SECRET DROP",
        "Non pianificare. Parti e basta.": "Don't plan. Just pack.",
        "Prossimo Drop tra:": "Next Drop in:",
        "GG": "D",
        "ORE": "HRS",
        "MIN": "MIN",
        "SEC": "SEC",
        "LIVE NOW": "LIVE NOW",
        "3 ESPERIENZE": "3 EXPERIENCES",
        "Prenota": "Book Now",
        "Prenota Ora": "Book Now",
        "COME FUNZIONA": "HOW IT WORKS",
        "Dalla scoperta alla partenza, tutto in tre semplici passaggi.": "From discovery to departure in three simple steps.",
        "NON PIANIFICARE. PARTI E BASTA. ✦ NO STRESS. SOLO VIBES. ✦ IL PROSSIMO DROP È QUASI QUI. ✦": "DON'T PLAN. JUST PACK. ✦ NO STRESS. ONLY VIBES. ✦ THE NEXT DROP IS ALMOST HERE. ✦",
                "Entra in Waitlist": "Join Waitlist",
        "VIP Waitlist": "VIP Waitlist",
        "Iscriviti per ricevere l'accesso 1 ora prima degli altri.": "Sign up to get access 1 hour before everyone else.",
        "Avvisami": "Notify Me",
        "Berlino": "Berlin",
        "Esplora il lato più crudo e autentico di Berlino. Accesso VIP a club underground, street art tour esclusivi e alloggio in un loft industriale per il weekend perfetto.": "Explore the raw and authentic side of Berlin. VIP access to underground clubs, exclusive street art tours, and accommodation in an industrial loft for the perfect weekend.",
        "SOLO 2 POSTI": "ONLY 2 SPOTS",
        "Alpi Svizzere": "Swiss Alps",
        "Stacca la spina dal mondo. Tre giorni in uno chalet di lusso isolato, senza wifi, con spa privata, cibo a chilometro zero e panorami mozzafiato.": "Disconnect from the world. Three days in an isolated luxury chalet, no wifi, private spa, zero-kilometer food, and breathtaking views.",
        "Non la solita Ibiza. Scopri una location segreta per un party esclusivo, tramonti infuocati e accesso alla lista ospiti per gli eventi più ricercati della Isla.": "Not the usual Ibiza. Discover a secret location for an exclusive party, fiery sunsets, and guest list access to the island's most sought-after events.",
        "Stai per assicurarti un weekend epico.": "You are about to secure an epic weekend.",
        "Pacchetto Drop": "Drop Package",
        "Tasse & Fee": "Taxes & Fees",
        "Totale": "Total",
        "Paga in 3 rate con": "Pay in 3 installments with",
        "Titolo": "Title",
        "Location": "Location",
        "Descrizione qui...": "Description here...",
        "I PROSSIMI DROP": "UPCOMING DROPS",
        "Un'anteprima delle destinazioni che sbloccheremo nelle prossime settimane. Preparati a essere veloce.": "A preview of the destinations we'll unlock in the coming weeks. Be ready to act fast.",
        "Classified Location": "Classified Location",
        "Drop Tra 2 Settimane": "Dropping in 2 Weeks",
        "Drop Tra 3 Settimane": "Dropping in 3 Weeks",
        "Tutto quello che devi sapere prima di partire.": "Everything you need to know before departure.",
        "Cos'è incluso nel prezzo?": "What is included in the price?",
        "Quasi tutto. Il prezzo finale che vedi copre il trasporto (volo/treno), l'alloggio (hotel/chalet/loft esclusivi) e l'accesso agli eventi principali o servizi descritti. Il cibo è a tue spese, a meno che non sia specificato (es. colazione in hotel).": "Almost everything. The final price covers transport (flight/train), accommodation (exclusive hotel/chalet/loft) and access to the main events or described services. Food is at your expense, unless specified (e.g. hotel breakfast).",
        "Cosa significa \"Viaggio Misterioso\"?": "What does 'Mystery Trip' mean?",
        "A volte lanciamo drop speciali dove conosciamo solo il prezzo, le \"vibe\" generali e il meteo. Scoprirai la tua vera destinazione solo 24 ore prima del decollo, tramite un messaggio sul tuo gruppo privato WhatsApp.": "Sometimes we launch special drops where you only know the price, the general vibes and the weather. You will discover your true destination only 24 hours before takeoff, via a message on your private WhatsApp group.",
        "Come funziona il supporto in viaggio?": "How does travel support work?",
        "Niente call center noiosi. Nel momento in cui paghi, ti inseriamo in un gruppo privato WhatsApp o Telegram che fungerà da \"Concierge 24/7\". Lì riceverai i biglietti e potrai scriverci per qualsiasi emergenza.": "No boring call centers. The moment you pay, we add you to a private WhatsApp or Telegram group that will act as a '24/7 Concierge'. There you will receive your tickets and can text us for any emergency.",
        "LE NOSTRE VIBE": "OUR VIBES",
        "Non vendiamo voli e hotel. Vendiamo ricordi. Dai un'occhiata allo stile WKNDR.": "We don't sell flights and hotels. We sell memories. Take a look at the WKNDR style."
    }
};

let currentLang = localStorage.getItem('wkndr_lang') || 'it';

function applyTranslations() {
    const isEn = currentLang === 'en';
    
    const walkDOM = (node) => {
        if (node.nodeType === 3) { // Text node
            let text = node.nodeValue.trim();
            if (!text) return;
            
            if (!node.parentElement.hasAttribute('data-it-text')) {
                node.parentElement.setAttribute('data-it-text', text);
            }
            
            let itText = node.parentElement.getAttribute('data-it-text');
            
            if (isEn && translations.en[itText]) {
                node.nodeValue = node.nodeValue.replace(itText, translations.en[itText]);
            } else if (!isEn) {
                if (translations.en[itText]) {
                   node.nodeValue = node.nodeValue.replace(translations.en[itText], itText);
                }
            }
        } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
            const attrsToTranslate = ['data-text', 'data-location', 'data-desc'];
            attrsToTranslate.forEach(attr => {
                if (node.hasAttribute(attr)) {
                    let text = node.getAttribute(attr);
                    let attrKey = 'data-it-attr-' + attr;
                    if (!node.hasAttribute(attrKey)) {
                        node.setAttribute(attrKey, text);
                    }
                    let itText = node.getAttribute(attrKey);
                    if (isEn && translations.en[itText]) {
                        node.setAttribute(attr, translations.en[itText]);
                    } else if (!isEn) {
                        node.setAttribute(attr, itText);
                    }
                }
            });
            
            for (let i = 0; i < node.childNodes.length; i++) {
                walkDOM(node.childNodes[i]);
            }
        }
    };
    
    walkDOM(document.body);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentLang = e.target.dataset.lang;
            localStorage.setItem('wkndr_lang', currentLang);
            applyTranslations();
        });
    });
    
    if (currentLang !== 'it') {
        applyTranslations();
    }
}

document.addEventListener('DOMContentLoaded', initLangSwitcher);
