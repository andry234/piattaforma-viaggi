# 🚀 WKNDR – Roadmap dell'MVP

**Concept:** Una piattaforma di viaggi basata sui "Drop". Invece di un catalogo di 1.000 viaggi, WKNDR "lancia" (drop) 3 esclusive esperienze per il weekend, curate nei dettagli, ogni martedì per il fine settimana successivo (o il mese successivo). Chi prima arriva, meglio alloggia.

---

## 1. La Proposta di Valore (L' "Hook" / Il Gancio)
*   **Problema:** La Gen Z e i Millennial soffrono di "Decision Fatigue" (Fatica decisionale). Vogliono viaggiare, ma pianificare è noioso e opprimente.
*   **Soluzione:** WKNDR cura l'atmosfera (il *vibe*). Prenoti l'esperienza, non solo il volo.
*   **Tagline:** *Non pianificare. Parti e basta.*

## 2. Funzionalità Principali (Il Minimo Indispensabile)
Per il lancio, non serve un'app completa. Serve un flusso web mobile fluido e senza intoppi.

### A. La Homepage del "Drop" (Mobile First)
*   Una landing page pulita e di grande impatto (Webflow o Framer).
*   **Conto alla rovescia (Countdown):** "Prossimo Drop tra: 02 Giorni 14 Ore".
*   **Le Card:** 3 schede destinazione visibili solo quando il drop è attivo. 
    *   *Esempio:* "The Urban Jungle (Berlino)" | "The Digital Detox (Alpi)" | "The Secret Rave (Ibiza)".
*   **Elementi Visivi:** Video verticali dinamici (in stile TikTok) invece di foto statiche.

### B. Checkout Senza Attriti
*   Integrazione diretta con Stripe.
*   Nessun modulo di registrazione infinito. "Checkout Ospite" di default.
*   **Pagamento Frazionato:** Opzione per pagare tramite Klarna o dividere il conto con gli amici (essenziale per i giovani viaggiatori).

### C. Il "Concierge in Tasca" (WhatsApp/Telegram)
*   Invece di sviluppare un'app di chat, usiamo ciò che hanno già.
*   Una volta prenotato, l'utente riceve un link a un Canale Telegram (o gruppo) privato per quel viaggio specifico.
*   L'itinerario, i biglietti e le "gemme nascoste" vengono inviati direttamente lì.

## 3. Lo Stack Tecnologico (No-Code e Basso Costo)
*   **Frontend:** Framer (ideale per siti ad alto impatto di design, interattivi e veloci) o Carrd (per la massima semplicità).
*   **Database/Backend:** Airtable (per gestire i dettagli del viaggio e la disponibilità).
*   **Pagamenti:** Stripe (checkout integrato).
*   **Automazione:** Zapier (Quando qualcuno paga su Stripe -> Aggiungi ad Airtable -> Invia messaggio di benvenuto su WhatsApp).
*   **Marketing:** TikTok e Instagram Reels (copertura organica).

## 4. Il Flusso Utente (L'"Happy Path")
1.  **Scoperta:** L'utente vede un video virale su TikTok riguardo all'imminente "Drop Segreto".
2.  **Accesso:** L'utente clicca sul "Link in Bio" -> Atterra sul sito mobile di WKNDR.
3.  **Selezione:** Scorre le 3 opzioni disponibili per il weekend.
4.  **Prenotazione:** Clicca su "Assicurati il posto" -> Paga con Apple Pay / Google Pay.
5.  **Consegna (Fulfillment):** Riceve istantaneamente un "WKNDR Pass" (PDF/Wallet Pass) via Email e un invito WhatsApp.

## 5. Strategia di Marketing: Il "Modello Drop"
*   **Scarsità:** "Solo 10 posti disponibili a questo prezzo".
*   **Mistero:** Offrire un "Viaggio Misterioso" in cui l'utente conosce il prezzo e il clima, ma non la destinazione fino a 24 ore prima della partenza.
*   **Influencer Seeding:** Inviare gratuitamente 2-3 micro-influencer nel primo viaggio in cambio di contenuti di alta qualità utilizzando l'hashtag `#WKNDR`.

## 6. Metriche di Successo (KPI)
*   **Tempo di Sell-out:** Quanto velocemente si esauriscono i "Drop"?
*   **CAC (Costo di Acquisizione Cliente):** Quanto spendiamo in Ads rispetto alle entrate per ogni singolo viaggio?
*   **Contenuti Generati dagli Utenti (UGC):** Quanti utenti taggano `@WKNDR` durante il loro viaggio?

## 7. Nuove Feature Approvate (Prossima Implementazione)
*   **Elementi FOMO:** Ticker live di prenotazioni ("Marco ha prenotato The Urban Jungle") e Waitlist VIP per i drop bloccati/sold-out.
*   **Dettagli Sensoriali (Micro-interazioni):** Cursore custom (pallino che reagisce all'hover) e Video Background adrenalinico per la sezione Hero.

## 8. Idee in Brainstorming (Da valutare in futuro)
*   **Prezzi Dinamici (Dynamic Pricing):** Mostrare una barra di avanzamento dei posti disponibili per incrementare l'urgenza (es. "Solo 2 posti a 290€. Prossimo tier: 350€").
*   **Quiz "Trova la tua Vibe":** Micro-quiz visivo per suggerire il drop perfetto agli utenti indecisi.
*   **Integrazione CRM (Airtable / Make.com):** Collegare il checkout finto a un vero database per raccogliere contatti reali.
*   **Preview Concierge Post-Acquisto:** Una finta chat interattiva stile WhatsApp per simulare l'esperienza del concierge 24/7 post-pagamento.