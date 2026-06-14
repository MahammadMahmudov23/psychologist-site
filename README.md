# [Name] — Psychologist & Psychotherapist

A premium single-page website for a private therapy practice in Baku. Warm, safe, human, destigmatizing — emotional safety above all.

- **Identity:** muted sage `#6E8268` / sand `#EFE9DD` / clay `#BE7355`. Type: **Fraunces** + **Mulish**.
- **Signature:** slow "breathing" gradient orbs + a breath-pacing circle in the hero (both pause under reduced-motion).
- **Stack:** static HTML/CSS/JS · GSAP + ScrollTrigger · Lenis · no build step.

## Run locally
Open `index.html`, or serve it: `python3 -m http.server 8000`.

## Sections
Home · About & approach · Sessions (₼ prices) · Path (3 steps) · Resources (+ example article modal) · Testimonials · FAQ · Booking (→ WhatsApp + email, with confidentiality reassurance) · Contact. Floating WhatsApp button on every screen.

## (a) Placeholders to replace
- `[Name]` — the psychologist's name (in `index.html`)
- `[Street Address]`, `[District]`, `[University]`
- `hello@example.az` — email (in `index.html` **and** `js/app.js`)
- `994000000000` — WhatsApp number (in `js/app.js` and every `wa.me/` link)
- `+994 00 000 00 00` / `tel:+994000000000` — phone
- Prices (₼ values) in the Sessions section
- Social links (`href="#"`)
- The map: replace the `.map .ph` block with a Google Maps `<iframe>`

## (b) Adding real photos
Each photo slot is a `.ph` block with `aria-label="IMAGE: …"`. Replace it with:
```html
<img src="assets/portrait.webp" alt="Portrait of [Name]" loading="lazy"
     style="width:100%;height:100%;object-fit:cover">
```
Choose calm, warm, non-stocky imagery. Sizes: hero ~900×900, about portrait 1000×1250, article cover 1200×675.

## (c) Change the WhatsApp number
In `js/app.js`, set `const WA = '994000000000'` to the real number (digits only). Then find-replace `994000000000` across `index.html` for the static `wa.me/` links.

## Deploy (GitHub Pages)
```bash
git init && git add . && git commit -m "Psychologist site"
gh repo create psychologist-site --public --source=. --push
# Settings → Pages → Deploy from a branch → main → /root → Save
```

> If you are in crisis, contact local emergency services. This site offers general information and is not a substitute for professional assessment. All imagery is placeholder — add real photos before launch.
