# Pizza Store Template

A free, open-source online ordering website and admin panel for pizza shops and small restaurants.

It has no build step and no install. Open `index.html` in a browser and it works.

![Homepage](docs/screenshot-home.jpg)

> **This is a front-end demo.** Everything is saved in the visitor's own browser. There is no server, no database and no real security yet. It is ready for showing clients, testing ideas and building on. Before taking real orders, read [Going live for real](#going-live-for-real).

---

## Contents

- [What's included](#whats-included)
- [Files](#files)
- [Quick start](#quick-start)
- [Demo logins](#demo-logins)
- [How to test it](#how-to-test-it)
- [Change the name](#change-the-name)
- [Change the logo](#change-the-logo)
- [Change the theme](#change-the-theme)
- [Currency and phone numbers](#currency-and-phone-numbers)
- [Edit the menu](#edit-the-menu)
- [Contact details, hours and delivery fee](#contact-details-hours-and-delivery-fee)
- [Admin login and demo options](#admin-login-and-demo-options)
- [Put it online with GitHub Pages](#put-it-online-with-github-pages)
- [Going live for real](#going-live-for-real)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## What's included

**Customer website**

- A homepage with menu categories, offer banners, popular items, featured deals, and contact details and hours.
- A full menu with category tabs.
- Size choices, such as Small, Medium and Large, each with its own price.
- Sale prices, shown with the old price crossed out.
- A Deals page with groups, such as Combos and Family deals.
- A cart with promo codes. Only one deal or discount applies per order, unless a code allows stacking.
- Checkout with cash on delivery and form checks.
- An order confirmation page.
- Customer accounts using a phone number and password, with order history, a saved address and an "Order again" button.
- An open/closed status. When the restaurant is closed, customers can browse but can't order.
- A mobile layout with bottom navigation, and automatic dark mode.

**Admin panel**

- **Dashboard:** an open/close switch, today's orders and revenue, new orders and quick actions.
- **New-order alerts:** a pop-up, a sound and a bell counter.
- **Orders:** new, completed and all, with search, full details and "Mark as completed".
- **Order PDFs:** a printable PDF for each order.
- **Categories:** reorder, hide, rename, and choose an icon.
- **Products:** sizes, sale prices, photo upload, sold out, and featured on the homepage.
- **Deals and discount codes:** create, edit, turn on and off.
- **Customers:** a list with order count and total spent.
- **Website:** logo upload, restaurant info, brand color, opening hours and the message shown while closed.
- **Settings:** delivery fee, admin email and password, and demo tools.

![Admin dashboard](docs/screenshot-admin.jpg)

![Mobile, light and dark](docs/screenshot-mobile.jpg)

---

## Files

| File | What it is | Do you edit it? |
|---|---|---|
| `config.js` | Store name, logo, contact details, hours, delivery fee, currency, phone format, colors, fonts, admin login | **Yes**, this is where you start |
| `menu.js` | Categories, products, prices, deals and discount codes | **Yes** |
| `images/` | Your logo and food photos | **Yes**, add your files here |
| `index.html` | The whole app: layout, styles and code | Only for bigger changes |
| `docs/` | Screenshots used in this README | No |
| `LICENSE` | MIT License | Keep it |

For most changes you only touch `config.js` and `menu.js`.

---

## Quick start

**Option A: just look at it**

1. Download or clone this repository.
2. Double-click `index.html`.

Everything works this way. One small exception: a logo image won't appear inside order PDFs, and the store name prints there instead. Option B fixes that.

**Option B: run a small local server (recommended while editing)**

1. Open a terminal in the project folder.
2. Run this command. Python is already installed on most Macs and Linux computers. On Windows, install it from python.org.
   ```
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

If you use VS Code, the **Live Server** extension does the same thing with one click.

**After you change a file**

Save it and refresh the page. When `config.js` or `menu.js` changes, the demo resets its data so your changes show up. A short message tells you when this happens.

---

## Demo logins

| Who | Login | Password |
|---|---|---|
| Customer | `202-555-0100` | `demo123` |
| Admin | `admin@example.com` | `admin123` |

The dark bar at the top switches between the customer site and the admin panel. It also has a **Reset demo data** button. You can also reach the admin panel at `index.html#/admin`.

---

## How to test it

Work through this list after any change. It takes about 10 minutes.

**Customer side**

1. Open the homepage. Check that the name, logo, colors, hours and delivery fee look right.
2. Go to **Menu**. Tap a pizza, pick a size and add it to the cart.
3. Tap **Add** on a single-price item, like a burger.
4. Open the cart. Type `WELCOME10` and press **Apply**. The total should drop by 10%.
5. Add a deal to the cart. The promo code should stop applying, because only one deal or discount is allowed per order.
6. Go to checkout and type a wrong phone number. You should see an error.
7. Fix the number and place the order. You should land on the confirmation page.
8. Log in with the demo customer account. Check **My orders** and try **Order again**.

**Admin side**

1. Log in to the admin panel.
2. Find the order you just placed under **Orders**. Open it, press **Generate PDF**, then **Download PDF**.
3. Press **Mark as completed**.
4. Test new-order alerts:
   - Keep the admin panel open in one browser tab.
   - Place an order from the customer site in a second tab.
   - The admin tab should show a pop-up, play a sound and update the bell.
   - You can also press **Simulate a new order** on the dashboard.
5. Close the restaurant with the switch at the top. The customer site should say it's closed and block ordering. Open it again.
6. Edit a product's price, then mark a product sold out. Check that both show on the customer site.
7. Create a deal and a discount code, then try them as a customer.
8. Change the delivery fee in **Settings**. Check the cart total.

**Look and feel**

1. Make the browser window narrow, or open the site on your phone, to check the mobile layout.
2. Switch your computer or phone to dark mode to check dark colors.

**Start fresh any time**

Press **Reset demo data** in the top bar or in **Settings**.

---

## Change the name

1. Open `config.js`.
2. Change this line:
   ```js
   name: 'Your Pizza Shop',
   ```
3. Save and refresh.

The name appears in the header, footer, browser tab, admin panel and PDFs.

> The **Website** page in the admin panel can also change the name. That change is saved in your browser only, so other visitors won't see it. For a change everyone sees, use `config.js`.

---

## Change the logo

Until you add a logo, the site shows a round pizza badge next to the store name.

1. Put your logo file in the `images` folder. A PNG with a transparent background works best, about 400 to 600 px wide.
2. In `config.js`, set the path:
   ```js
   logo: 'images/logo.png',
   ```
3. Optional: if your logo is dark, add a light version for dark mode and the dark admin sidebar:
   ```js
   logoDark: 'images/logo-white.png',
   ```
   Without it, the site places your logo on a small white plate on dark backgrounds.
4. Save and refresh.

**Browser tab icon (favicon)**

1. Open `index.html` and find the line that starts with `<link rel="icon"`. It's near the top.
2. Replace it with:
   ```html
   <link rel="icon" href="images/favicon.png">
   ```

---

## Change the theme

All theme settings are in the `theme` section of `config.js`.

**Main color**

```js
brand: '#2F5BD3',
```

Use any hex color. You can pick one at [htmlcolorcodes.com](https://htmlcolorcodes.com).

From this one color the site works out:
- the hover shades
- the light backgrounds
- the dark-mode version
- whether text on buttons should be white or black to stay readable

Error messages and the "closed" banner keep their own red, so they still look like warnings with any brand color.

**Dark mode color (optional)**

```js
brandDark: '',
```

Leave this empty to have a dark-mode color made for you, or set your own, like `'#7E99E4'`.

**Fonts**

```js
fontDisplay: 'Lilita One',   // headings and prices
fontBody: 'Figtree',         // everything else
googleFonts: 'https://fonts.googleapis.com/css2?family=Lilita+One&family=Figtree:wght@400;500;600;700;800&display=swap'
```

To use other Google Fonts:

1. Go to [fonts.google.com](https://fonts.google.com) and pick a heading font and a body font.
2. Click **Get font**, then **Get embed code**.
3. Copy only the link that starts with `https://fonts.googleapis.com/css2?...` and paste it into `googleFonts`.
4. Type the two font names exactly as Google shows them into `fontDisplay` and `fontBody`.

For the body font, choose one with weights 400 to 800, because the site uses bold text a lot.

**Try colors without editing files**

In the admin panel, open **Website**, then **Brand color**. It saves to your browser only, which is handy for trying colors live with a client. When you've chosen one, copy it into `config.js`.

**Advanced: other colors**

The neutral colors, such as text, backgrounds, borders and the sidebar, are at the top of the `<style>` section in `index.html`, under **THEME TOKENS**.

---

## Currency and phone numbers

**Currency**, in `config.js`:

```js
currency: {
  symbol: '$',
  position: 'before',
  space: false,
  decimals: 2,
  locale: 'en-US'
},
```

Examples:

| Country | symbol | position | space | decimals | locale | Shows as |
|---|---|---|---|---|---|---|
| USA | `'$'` | `'before'` | `false` | `2` | `'en-US'` | $1,234.50 |
| Pakistan | `'Rs.'` | `'before'` | `true` | `0` | `'en-US'` | Rs. 1,235 |
| India | `'₹'` | `'before'` | `false` | `0` | `'en-IN'` | ₹1,235 |
| UK | `'£'` | `'before'` | `false` | `2` | `'en-GB'` | £1,234.50 |
| Germany | `'€'` | `'after'` | `true` | `2` | `'de-DE'` | 1.234,50 € |
| UAE | `'AED'` | `'before'` | `true` | `2` | `'en-US'` | AED 1,234.50 |

If you switch to `decimals: 0`, also update the prices in `menu.js` and the delivery fee to whole numbers, like `1690` instead of `16.90`. Otherwise they'll be rounded.

**Phone numbers**, in `config.js`:

```js
phoneFormat: {
  placeholder: '202-555-0123',
  format: 'XXX-XXX-XXXX',
  minDigits: 7,
  maxDigits: 15,
  countryCode: '1'
},
```

What each setting does:
- `placeholder`: the example shown inside phone fields.
- `format`: how saved numbers are displayed. Each `X` is one digit. If a number has a different digit count, it's shown as typed.
- `minDigits` and `maxDigits`: the shortest and longest numbers checkout will accept.
- `countryCode`: used to build WhatsApp links. Leave out the plus sign.

Examples:

| Country | placeholder | format | minDigits | maxDigits | countryCode |
|---|---|---|---|---|---|
| USA | `'202-555-0123'` | `'XXX-XXX-XXXX'` | `10` | `10` | `'1'` |
| Pakistan | `'0300-1234567'` | `'XXXX-XXXXXXX'` | `11` | `11` | `'92'` |
| India | `'98765 43210'` | `'XXXXX XXXXX'` | `10` | `10` | `'91'` |
| UK | `'07700 900123'` | `'XXXXX XXXXXX'` | `11` | `11` | `'44'` |

> The demo customers have 10-digit US-style numbers. They can still log in after you change these settings, but checkout will ask them for a number in your new format. That's expected. New accounts you create will follow your format.

---

## Edit the menu

Open `menu.js`. The top of the file explains every field. Here's the short version.

**Categories**

```js
{ id: 'pizza', name: 'Pizza', icon: 'pizza' },
```

Icons you can use: `pizza`, `burger`, `drink`, `sides`, `wraps`, `dish`.

**A product with one price**

```js
{ id: 'classic-burger', category: 'burgers', name: 'Classic Burger', price: 6.99,
  description: 'Beef patty, lettuce, tomato, pickles and house sauce.' },
```

**A product with sizes**

```js
{ id: 'margherita', category: 'pizza', name: 'Margherita',
  description: 'Tomato sauce, mozzarella and fresh basil.',
  sizes: [
    { label: 'Small 10"', price: 8.99 },
    { label: 'Medium 12"', price: 11.99 },
    { label: 'Large 14"', price: 14.99, salePrice: 12.99 }
  ] },
```

`salePrice` is optional. It shows the normal price crossed out and adds a "Discount" tag.

**Optional product fields**

| Field | What it does |
|---|---|
| `image: 'images/margherita.png'` | Adds a photo. Without one, the item shows a neat "Photo coming soon" drawing. |
| `section: 'Pasta'` | Adds a small heading inside a category, like Pasta inside Sides. |
| `featured: true` | Shows the item under "Popular right now" on the homepage. |
| `available: false` | Shows the item as sold out. |

**Deals**

```js
{ id: 'family-feast', group: 'Family deals', name: 'Family Feast', price: 34.99,
  featured: true, banner: true,
  items: ['1 Large BBQ Chicken Pizza', '1 Large Margherita Pizza', '1 Large Fries'] },
```

- Each item line starts with a quantity.
- `group` becomes a tab on the Deals page.
- `featured: true` shows the deal in the Deals row on the homepage.
- `banner: true` turns the deal into a big offer card on the homepage.
- `banner: 'images/poster.jpg'` shows your own poster image instead of the card.

**Discount codes**

```js
{ code: 'WELCOME10', name: 'Welcome offer', type: 'percent', value: 10, minOrder: 20 },
{ code: 'SAVE5', name: 'Big order discount', type: 'fixed', value: 5, minOrder: 40 },
```

- `type`: `'percent'` takes a percentage off. `'fixed'` takes an amount off.
- `minOrder`: the smallest subtotal the code works on.
- `stackable: true`: lets the code combine with deals and with other stackable codes.

**Rules for editing safely**

- Text goes inside quotes. Numbers don't.
- Keep the commas between items.
- Each `id` must be unique and must not contain spaces.
- If the page shows a yellow warning bar after you save, you made a typo. Press `F12` and open **Console** to see the line number.

---

## Contact details, hours and delivery fee

All of these are in `config.js`:

```js
phone: '202-555-0199',
whatsapp: ['202-555-0198'],    // up to two numbers, or [] to hide
address: '123 Main Street, Springfield',
deliveryArea: 'Springfield',   // '' to hide
opensAt: '11:00',              // 24-hour time
closesAt: '23:00',
hoursNote: 'Every day',
deliveryFee: 2.99,             // 0 shows "free delivery"
closedMessage: "We're currently closed. Please try again during our opening hours.",
```

The opening hours are shown to customers, but they don't open or close ordering by themselves. The admin controls that with the **Open/Closed** switch.

---

## Admin login and demo options

```js
admin: { email: 'admin@example.com', password: 'admin123' },
demoBar: true,
storageKey: 'pizza-store-demo'
```

- **`admin`**: the demo admin login. **This is not real security.** Anyone who opens `config.js` can read the password. It's fine for demos only.
- **`demoBar: false`**: hides the dark demo bar and the login hints. Use this when presenting to a client. The admin panel is still at `index.html#/admin`.
- **`storageKey`**: the name used for browser storage. Change it only if you host two copies on the same website, so their data doesn't mix.

---

## Put it online with GitHub Pages

GitHub Pages hosts it for free.

1. Upload all the files and folders to a public GitHub repository.
2. In the repository, go to **Settings**, then **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose the branch **main** and the folder **/ (root)**, then press **Save**.
5. Wait a minute or two, then refresh that page. Your link appears at the top. It looks like `https://your-username.github.io/your-repo-name/`.

Any static host works the same way, such as Netlify, Vercel or Cloudflare Pages. Just upload the folder.

> Remember: on a hosted copy, each visitor's data stays in their own browser. A customer's order won't reach the admin panel on a different device. For that you need a server. See the next section.

---

## Going live for real

This template is the front end. To take real orders, a developer needs to add:

1. **A server and database.** Orders, menu, customers and settings must be saved in one shared place, not in each browser.
2. **Real logins.** Passwords must be checked and stored securely on the server, never in `config.js`.
3. **Order delivery to the restaurant.** The admin panel needs to receive orders from all customers' devices, for example with live updates or push notifications.
4. **Online payments (optional).** Right now the only option is cash on delivery.
5. **Storage for photos.** Today, photos uploaded in the admin panel are saved in the browser, which holds only about 5 MB in total. On a live site they should be uploaded to the server.

The screens, the cart and discount rules, and the data shapes in the code are already in place. Connecting them to a backend is the main remaining job.

---

## Troubleshooting

**My changes don't show up**
- Save the file and do a hard refresh: `Ctrl + F5` on Windows, or `Cmd + Shift + R` on Mac.
- Changes made in the admin panel are saved in your browser only. Editing `config.js` or `menu.js` resets them.

**A yellow bar says config.js or menu.js did not load**
- The files must be in the same folder as `index.html`.
- If they are, there's a typo in one of them, often a missing comma or quote. Press `F12`, open **Console**, and look for the red error with a line number.

**Photos or the logo don't appear**
- Check the path and the capital letters. `images/Logo.png` and `images/logo.png` are different files online.

**The "Download PDF" button says the PDF tool is still loading**
- The PDF tool (jsPDF) loads from the internet. Check your connection and try again.

**Fonts look plain**
- Fonts load from Google Fonts, which needs internet. Offline, the site uses system fonts.

**"Storage full" or uploaded photos disappear**
- Browser storage holds about 5 MB. Use smaller images, or put photos in the `images` folder and set them in `menu.js` instead of uploading them.

---

## License

Released under the **MIT License**. See [LICENSE](LICENSE).

**In simple words:** you can use, copy, change, sell and build on this project, free, for personal or commercial work. The one condition is that you keep the copyright notice and license text in your copies. The software comes with no warranty.

Copyright (c) 2026 Daniyal.

**Credits**
- PDF generation by [jsPDF](https://github.com/parallax/jsPDF), MIT License.
- Fonts by Google Fonts: Lilita One and Figtree, SIL Open Font License.
- Icons and line drawings are original to this project.
