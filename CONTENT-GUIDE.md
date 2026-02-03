# Content Editing Guide

Edit content without touching code. All text and images are configured in **`data/site-data.ts`**.

## Footer

The footer appears on every page. Edit the **FOOTER** object in `site-data.ts`.

### Logo & brand
- **logo.src** – Path to logo (e.g. `'/assets/logo/risd-logo.svg'`)
- **logo.alt** – Alt text for the logo
- **logo.text** – Brand name next to the logo (e.g. "RISD")
- **logo.href** – Link when the logo is clicked (usually `/`)

### Mission
- **mission** – The paragraph under the logo. Edit the text freely.

### Buttons
- **primaryCta** – "Partner With Us" (light green button): **label** and **href**
- **secondaryCta** – "Support Our Work" (white outline button): **label** and **href**

### Link columns
- **linkColumns** – Array of columns. Each column is an array of `{ label, href }`.
  - Column 1: e.g. Our Work, Our Story, Partner with us
  - Column 2: e.g. Donate, Careers, Internships
  - Column 3: e.g. Instagram, Twitter, LinkedIn (use full URLs for external links)
- Add or remove columns, or add/remove links in any column. External links (starting with `http`) open in a new tab.

### Copyright bar
- **copyright.year** – Year in the notice (e.g. `2026`)
- **copyright.organizationName** – Name in the notice (e.g. "RISD")
- **copyright.text** – Optional: set this to override the whole line (e.g. `"© 2026 RISD. All rights reserved."`)

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

## Vision, Mission, Values (About page)

This three-column section appears below “Who We Are” on the About page. Edit the **VISION_MISSION_VALUES** object in `site-data.ts`.

### Content
- **vision.title** – e.g. "Our Vision"
- **vision.description** – One paragraph
- **mission.title** – e.g. "Our Mission"
- **mission.description** – One paragraph
- **values.title** – e.g. "Our Values"
- **values.items** – Array of strings; each string is one line (use " • " or " & " within a line as needed, e.g. `"Accountability • Transparency • Integrity"`)

Add or remove lines in **values.items** as needed. No code changes required.

## Our Team (About page)

"Meet our team" section on the About page. Edit the **OUR_TEAM** object in `site-data.ts`.

### Section header
- **title** – e.g. "Meet our team"
- **description** – Optional intro paragraph below the title

### Team members
- **members** – Array of team member objects. Each has:
  - **name** – Full name
  - **title** – Role (e.g. "Cofounder, CEO")
  - **image.src** – Path to photo (add images to `public/assets/Team/` and set e.g. `'/assets/Team/leonard.jpg'`)
  - **image.alt** – Short description for accessibility
  - **social** – Optional links; leave a URL empty to hide that icon:
    - **facebook** – Full URL or `''`
    - **twitter** – Full URL or `''`
    - **linkedin** – Full URL or `''`

Add or remove objects in **members** to change the team list. No code changes needed.

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

## FAQ Section

### Text
- **sectionLabel** – Small label above the title (e.g. "WHAT WE DO")
- **title** – Main heading (e.g. "Have any question For Us?")
- **faqs** – Array of items, each with:
  - **question** – The FAQ question (shown in the accordion)
  - **answer** – The answer (shown when the item is expanded)

### Image
- **image.src** – Path to the image (e.g. `'/assets/About/children-eating.jpg'` or add a photo to `public/assets/Faq/` and use `'/assets/Faq/faq-supporting.jpg'`)
- **image.alt** – Short description of the photo (for accessibility)

### Adding/removing FAQs
Add or remove objects in the `faqs` array in `site-data.ts`. Order is preserved. No code changes needed.

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
