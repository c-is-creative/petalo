# Prototype 01

## Direction

Warm ink brown, natural light, cream text, pear wood, paper and cloth. Product and hand lead the first screen. Desktop and mobile use different supplied photographs to preserve the subject. Japanese uses Noto Serif JP with local Mincho fallbacks; English and Spanish use Cormorant Garamond. Google Fonts are the only font dependency.

The four entries remain What is PETALO / Shop / About / Online PETALO. Details in About open in place through accessible native disclosure controls. Purchase leads to the existing NHUMA store; the site does not simulate checkout.

## Online PETALO

Eight actual motifs cropped from the supplied printed kit sheet form a small local demonstration. Select, rotate, stamp, undo, clear and download a PNG. Keyboard users can move with arrow keys and stamp with Enter or Space. The original Online PETALO remains linked. Canvas work is temporary and is cleared on reload; saving a PNG preserves the image locally. Final individual motif artwork would improve quality and allow all 36 patterns.

## Editorial checks before launch

- Review EN / ES copy with the project team; this is first-draft website translation.
- Confirm the tagline FEEL. CREATE. BLOOM. and Romanized collaborator names.
- Confirm kit names, prices, contents and overseas delivery in the store; these are not invented in the prototype.
- Add the confirmed Galicia exhibition year, dates, venue and collaboration announcement when ready.
- Confirm photo credits and final logo usage. This prototype uses the provided logo, displayed in cream through CSS.
- Language switching is client-side; separate language URLs and social preview metadata can be added for the public site.

## Original photographs used

All from the supplied `PETALO_ALL` photo folder:

| Website file | Original |
| --- | --- |
| hero.jpg | 260607152954.jpg |
| hero-mobile.jpg | 260607154627-2.jpg |
| ritual.jpg | 260607150244.jpg |
| studio.jpg | 260607150112.jpg |
| kit.jpg | 260607170735.jpg |
| objects.jpg | 260607171916.jpg |
| package.jpg | 260607165314.jpg |
| unboxing.jpg | 260607170129.jpg |

The source originals remain unchanged. Deployment, commit and push are not part of this local prototype delivery.


## Editorial update — 2026-10-06

Added 00 Manifesto from the supplied Manifesto.pdf. Rebuilt 03 About from all nine pages of about.pdf, using six expandable topics and selected embedded photographs. Preserved the previous About text as 04 Story Behind; Online PETALO is now 05. Added the creative partner credits from 1.jpg and the use cases, 237 supporters, award and direct links from 2.jpg. The supplied For Good logo is reused. Navigation stays English in JP / EN / ES; body copy is translated. The historical Chiba figures are explicitly dated 2021. Additional photographs can replace or supplement the current images.

## Nine-kit collection

The 36 patterns are introduced as nine named kits, in the order supplied on the product insert: Curiosity, Creativity, Calm, Compassion, Courage, Care, Celebration, Continuity and Connection. Each kit pairs four motifs with its short phrase. English kit names remain shared across languages; accompanying phrases are translated. This collection is visible in About without opening a detail panel and links directly to the store. The subtle C-name sequence is left to discovery.

## Short visual landing page — revised brief

Manifesto shows only its title and promise; Read more opens the complete text. Shop uses five supplied product photos without captions, with two store links opening a new tab. Verified at 390×844 and 320×568: the complete shop section is below three viewport heights in JP/EN/ES. JP question labels match English; ES stays Spanish. About opening copy is one paragraph. The name origin opens with + over a faint monochrome flower background; other About editorial photographs use grayscale until replacement assets arrive. The nine-kit collection is expandable. Online PETALO follows the About use cases directly with the same background. Story Behind and Creative Partners open on demand lower on the page. The duplicate C’s CREATIVE / NHUMA signature is removed. Compact News follows the supplied screenshot’s order, with the award title, logo, 237 supporters, introductory paragraph and four links; award explanation opens with Read more.

## Additional product photographs

Nine supplied Nanami photographs were optimized for web use; originals remain untouched. Shop keeps its existing kit, objects and package photographs. Two images previously repeated from other sections are replaced with pattern-ends and wood-close. The other supplied photos are available for future placement without lengthening the page. Source mapping:

- 260607113240.jpg → assets/photos/basket.jpg
- 260607154730-2.jpg → assets/photos/studio-light.jpg
- 260607155557.jpg → assets/photos/pattern-ends.jpg
- 260607170739.jpg → assets/photos/kit-close.jpg
- 260607170914.jpg → assets/photos/kit-table.jpg
- 260607170933.jpg → assets/photos/kit-detail.jpg
- 260607171738.jpg → assets/photos/wood-sticks.jpg
- 260607171812.jpg → assets/photos/quiet-table.jpg
- 260607171847.jpg → assets/photos/wood-close.jpg


## Online PETALO kit trial — 2026-10-15 (unpublished)
The drawing palette now uses all 36 existing motif assets and the nine four-pattern kits from the product insert gallery. An expandable selector supports combining kits; tapping an individual motif adds its parent kit and selects that motif. At least one kit remains available. Stable individual pattern IDs are independent of active kits, so later single-stamp commerce can reference the same IDs without changing saved marks. No single-stamp purchase availability is advertised.
Rotation supports every integer degree, a live preview, numerical input, and repeat-on-hold direction buttons. Switching kits or language preserves the drawing. PNG export adds a separate 102-pixel footer with the original 658×240 PETALO logo at bottom right (112 pixels wide, 20% smaller than the initial 140 pixels; equal 32-pixel right and bottom margins). The source is downsampled with high-quality smoothing, never enlarged; artwork and keyboard focus indicators are kept separate from the exported logo.


## Drawing studio popup — 2026-10-16 (unpublished)
Online PETALO opens in an accessible native dialog measuring 90vw by 90dvh, with a close button, Escape support, background scroll lock, and preserved artwork on close/reopen. Paper is fitted proportionally into the remaining space; the kit selector overlays the paper and scrolls only its own catalogue. The desktop pointer previews the selected motif at the current rotation and actual stamp size using a DOM overlay, so the preview is never exported into the PNG. Touch remains tap-to-stamp. Verified popup and footer fit without dialog scrolling at 390×844, 820×1180, 667×375 and 1440×900.

The entry to the studio now shows a clickable palette and example stamp composition rather than a standalone text button. The entire preview opens the dialog. Example marks never populate the real drawing; once the user draws, the preview reflects their artwork without keyboard or mouse cursor overlays.

Release verification — 2026-10-19: JP/EN/ES across 320×568, 390×844, 667×375, 768×1024, 1024×768, 1440×900 and 2560×1440. Clicking the preview paper opens a 90vw×90dvh dialog at every size with visible paper and footer and no dialog scrolling. Also checked activation through preview header/palette/footer and Enter, Escape close, reopen preserving artwork, 37-degree mouse motif preview, and all-nine-kit selection. Fixed translated mobile dialog heading specificity and compressed long kit selections with ellipsis. Landscape phones use a proportional wide paper.

The paper now fills the entire remaining dialog area without letterbox bands. Its backing-canvas height follows the available area via ResizeObserver, retaining the same x/y pixel scale for stamp rendering and cursor preview. Checked zero unused width/height and no dialog scrolling at the seven responsive release sizes.
