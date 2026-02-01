# Content Editing Guide

Edit content without touching code. All text and images are configured in **`data/site-data.ts`**.

## Who We Are Section

### Text
- **sectionLabel** – Small label above the title (e.g. "WHO WE ARE")
- **title** – Main heading
- **description** – Paragraph text
- **cta.label** – Button text
- **cta.href** – Button link (e.g. "/about")

### Image
1. **Replace the image**: Add your new photo to `public/assets/About/` and name it `children-eating.jpg` (overwrite the existing file)
2. **Or use a different image**: Add your image to `public/assets/About/`, then in `site-data.ts` change `image.src` to your filename
3. Update `image.alt` with a short description of the photo (for accessibility)

## What We Do Section

### Text
- **sectionLabel** – Small label (e.g. "WHAT WE DO")
- **title** – Main heading
- **intro** – Paragraph before the focus areas list
- **focusAreas** – Array of items, each with:
  - **icon** – One of: `education` | `health` | `environment` | `governance`
  - **title** – Focus area title (e.g. "Education")
  - **description** – Brief description
  - **iconSrc** – Optional: path to custom icon image (e.g. `'/assets/WhatWeDo/icons/health.svg'`)

### Image
- Replace `public/assets/WhatWeDo/focus-areas.jpg` or change `image.src` in the config
- Update `image.alt` for accessibility

### Adding/removing focus areas
Add or remove items in the `focusAreas` array. Use the existing icon keys or add `iconSrc` for custom icons.

## Measure Lasting Change Section

### Text
- **heading** – Main statement (e.g. "We measure success by real, lasting change.")
- **achievements** – Array of bullet points. Use **text** for bold (e.g. "**55** communities")

### Image
- Replace `public/assets/MeasureLastingChange/children-bw.jpg` or change `image.src` in the config
- **grayscale** – Set to `true` for black & white (default), `false` for color
- Update `image.alt` for accessibility

The organic green shape between the text and image uses `measurelastingchangebg.svg` (fixed design element).

Recommended: Photos showing people/community, around 1200×900px.
