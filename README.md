# cosmoalma.com

Personal website of Dr. Alma González (University of Guanajuato): cosmology with the DESI Lyman-α forest and Rubin Observatory gravitational lensing. Bilingual (ES/EN), plain HTML. There is no build step.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `wgap-2025.html` | Outreach page: *Úbo niji ndi under máni eza'r* — El cielo en los ojos de las mujeres Eza'r (WGAP 2025) |
| `assets/i18n.js` | Language switcher. Picks ES/EN from the browser and remembers the visitor's choice across pages |
| `assets/img/` | Photos and images (`wgap-*` were taken from the project poster) |
| `CNAME` | Custom domain for GitHub Pages (`cosmoalma.com`) |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

## Publish with GitHub Pages

1. Create a public repository (e.g. `cosmoalma.com`) and upload every file in this folder, including `.nojekyll` and `CNAME`. With git:
   ```bash
   git init && git add . && git commit -m "First version of cosmoalma.com"
   git branch -M main
   git remote add origin https://github.com/<user>/cosmoalma.com.git
   git push -u origin main
   ```
2. Go to **Settings → Pages**. Under Source, choose *Deploy from a branch*, then `main` and `/ (root)`.
3. Under **Custom domain**, enter `cosmoalma.com`.
4. In **Squarespace Domains → DNS** (where the Google Domains registration moved), add:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - a `CNAME` record for `www` pointing to `<user>.github.io`
5. Once the domain is verified, turn on **Enforce HTTPS**.

## Editing text

All the text on each page is in the `window.COPY = { es: {...}, en: {...} }` block near the end of that page's HTML. Edit both languages there; the layout itself does not need to change. On github.com: open the file, click the pencil, edit, then commit.

## Adding or replacing photos

Upload an image to `assets/img/`. To swap a photo, upload a new file with the same name. To fill a dashed placeholder box (the `<div role="img" ...>`), replace it with:

```html
<img src="assets/img/my-photo.jpg" alt="Description" style="width: 100%; aspect-ratio: 3 / 2; object-fit: cover; border-radius: 12px">
```

## Still to fill in

- INSPIRE-HEP, ORCID, GitHub and CV links (footer of both pages)
- Photos: student group (Training) and hobbies (triathlon, cooking, Pancho, Hypa and Planck)
- The research "Read more" links on the home page still point nowhere; their detail pages are not built yet
