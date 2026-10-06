# PETALO — first website prototype

A photograph-led, three-language website. Plain HTML, CSS and JavaScript; no build, framework, package installation or backend required.

## Files

- `index.html`: visual homepage with compact Manifesto, What is PETALO?, Shop and About, followed by Online PETALO, expandable Story Behind and compact News.
- `styles.css`: warm dark palette, serif typography, responsive layouts.
- `editorial.js`: new Manifesto and About translations, partner and crowdfunding copy.
- `script.js`: JP / EN / ES copy, language selection, local drawing canvas.
- `assets/photos/`: optimized supplied photographs, including images embedded in the About PDF. Originals remain untouched.
- `assets/logo.png`: supplied wordmark, cropped and made transparent for display.
- `assets/patterns/`: 36 motifs extracted from the supplied kit sheet; eight are available in the drawing demo.
- `docs/website-brief.md`: project direction and source notes.
- `docs/prototype-notes.md`: editorial and technical decisions for this version.

## Preview

Open `index.html` in a browser, or serve this folder with any static HTTP server:

```sh
python3 -m http.server 8080
```

Visit `http://localhost:8080/`. The Google Fonts stylesheet needs internet access; local serif fallbacks are included.

## GitHub Pages

Publish the repository root. All internal asset URLs are relative, so the site works at a project address such as `https://c-is-creative.github.io/petalo/`. `.nojekyll` disables Jekyll processing. Published at https://c-is-creative.github.io/petalo/.

The public repository deploys from the main branch, repository root.

Language links can use `?lang=ja`, `?lang=en`, or `?lang=es`. This prototype has one shared page rather than separate indexed language URLs. Before international launch, consider separate language pages and hreflang metadata.

## Editing

Japanese copy lives in `index.html`. English and Spanish translations live in `script.js` and `editorial.js`. Photo placement and text keys are shared across languages. Keep translation keys aligned when adding content.

Photography, wordmark and pattern designs are supplied project assets, not stock assets. Confirm final credits and publication rights before public release. No open-source license is implied for these assets.
