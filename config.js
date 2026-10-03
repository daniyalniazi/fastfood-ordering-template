/*
  STORE SETTINGS
  ---------------------------------------------------------------------------
  Change the values below to make the store your own, then save and refresh
  the page. The demo resets itself automatically when this file changes.

  Text goes inside quotes: 'like this'. Numbers have no quotes: 2.99
  Keep the commas at the end of each line.
*/
window.STORE_CONFIG = {

  /* ---------- Name and logo ---------- */

  // Shown in the header, footer, browser tab, admin panel and order PDFs.
  name: 'Your Pizza Shop',

  // Your logo file. Leave empty ('') to show a simple text logo made from the name.
  // Put the file in the images folder and write its path, for example: 'images/logo.png'
  logo: '',

  // Optional. A light-colored version of your logo for dark backgrounds
  // (dark mode and the admin sidebar). Example: 'images/logo-white.png'
  logoDark: '',


  /* ---------- Contact and delivery ---------- */

  phone: '202-555-0199',
  whatsapp: ['202-555-0198'],      // one or two numbers, or [] to hide WhatsApp
  address: '123 Main Street, Springfield',
  deliveryArea: 'Springfield',     // shown on the homepage and at checkout. '' to hide

  opensAt: '11:00',                // 24-hour time
  closesAt: '23:00',
  hoursNote: 'Every day',

  deliveryFee: 2.99,               // 0 for free delivery
  closedMessage: "We're currently closed. Please try again during our opening hours.",


  /* ---------- Money ---------- */

  currency: {
    symbol: '$',          // examples: 'Rs.', '€', '£', 'AED', '₹'
    position: 'before',   // 'before' shows $9.99, 'after' shows 9,99 €
    space: false,         // true adds a space: 'Rs. 500'
    decimals: 2,          // 0 for currencies without cents (PKR, JPY)
    locale: 'en-US'       // number style. 'de-DE' gives 1.234,50
  },


  /* ---------- Phone numbers ---------- */

  phoneFormat: {
    placeholder: '202-555-0123',   // example shown inside phone fields
    format: 'XXX-XXX-XXXX',        // how saved numbers are shown. Each X is one digit
    minDigits: 7,                  // shortest number accepted
    maxDigits: 15,                 // longest number accepted
    countryCode: '1'               // used for WhatsApp links. No plus sign. Pakistan: '92', UK: '44'
  },


  /* ---------- Look and feel ---------- */

  theme: {
    brand: '#2F5BD3',     // main color: buttons, prices, highlights
    brandDark: '',        // optional color for dark mode. Leave '' to make one automatically

    fontDisplay: 'Lilita One',   // headings and prices
    fontBody: 'Figtree',         // everything else
    // Google Fonts link that loads the two fonts above. Get one at fonts.google.com
    googleFonts: 'https://fonts.googleapis.com/css2?family=Lilita+One&family=Figtree:wght@400;500;600;700;800&display=swap'
  },


  /* ---------- Admin login (demo only, not real security) ---------- */

  admin: {
    email: 'admin@example.com',
    password: 'admin123'
  },


  /* ---------- Demo options ---------- */

  demoBar: true,                 // false hides the dark demo bar and the login hints
  storageKey: 'pizza-store-demo' // browser storage name. Change it if you run two copies on one site
};
