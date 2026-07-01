# Flare — Business Website

A premium, animated marketing website for **Flare**, built with React, Vite,
Tailwind CSS v4, Framer Motion and React Router. No backend required — the
Contact and Careers forms send email notifications through Formspree.

## Pages

- **Home** — hero, stats, services preview, portfolio, testimonials, CTA
- **About** — story, mission/vision, values
- **Services** — detailed breakdown of all 7 services + ad platforms
- **Careers** — open positions + job application form
- **Contact** — contact form + company contact info

## 1. Run it locally

```bash
npm install
npm run dev
```

Visit the printed local URL (usually `http://localhost:5173`).

## 2. Connect the contact & careers forms (no backend needed)

Both forms post to one endpoint defined in `src/lib/useFormSubmit.js`:

```js
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

To receive real email notifications instantly:

1. Go to formspree.io and create a free account.
2. Create a new form and copy its endpoint URL (`https://formspree.io/f/xxxxxxx`).
3. Paste it into `FORM_ENDPOINT` in `src/lib/useFormSubmit.js`.
4. Verify the destination email Formspree sends to (your inbox).

That's it — every Contact and Careers submission will email you instantly.
You can swap Formspree for **EmailJS** or **Resend** instead; both work the
same way (POST the form data to their API endpoint from the same file).

## 3. Customize content

All copy for services, portfolio, testimonials, jobs and stats lives in:

```
src/lib/data.js
```

Edit text, add/remove portfolio projects, jobs, or testimonials there —
the page layouts will update automatically.

Company email, WhatsApp link, and social links are set in:

- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

Update `hello@flare.agency` and the WhatsApp link (`https://wa.me/...`) with
your real details.

## 4. Brand & design tokens

Colors, fonts, and the signature "flare trail" motif are defined in:

- `src/index.css` — color tokens, type tokens
- `src/components/FlareTrail.jsx` — the animated signature element

## 5. Build for production

```bash
npm run build
```

Output goes to `dist/`.

## 6. Deploy

**Vercel**
```bash
npm i -g vercel
vercel
```
Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

Both platforms auto-detect this Vite project — just connect your Git repo or
drag-and-drop the `dist` folder after building.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- React Router (pages)
- Lucide React (icons)
- Formspree (form email delivery — swappable with EmailJS/Resend)
