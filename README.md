# Vizograph

Website for [www.vizograph.com](https://www.vizograph.com), built with Next.js, React and Tailwind CSS.
It is a single page exported as a static site and hosted on GitHub Pages.

## Run it locally

```bash
npm install     # once
npm run dev     # http://localhost:3000, reloads when you save
```

| Command         | What it does                       |
| --------------- | ---------------------------------- |
| `npm run build` | Builds the static site into `out/` |
| `npm run lint`  | Checks the code for problems       |

## Where things are

```
app/
  layout.tsx          fonts, metadata, navbar, footer, analytics
  page.tsx            the page: the sections in order
  globals.css         THEME: colors, shadows, fonts, animations
  robots.ts           robots.txt
  sitemap.ts          sitemap.xml
components/
  layout/             Navbar, Footer, Analytics, StructuredData
  sections/           Hero, ServicesBento, ProjectsBento, ProjectTile,
                      StoryTimeline, TeamGrid, ContactDetails
  ui/                 Button, Container, Section, SectionHeader, IconTile
lib/
  content.ts          ALL text on the site, plus the tracking IDs
  styles.ts           tile surfaces and class strings shared by sections
  cn.ts               joins class names (later ones win)
public/               images (projects, team, about), favicons, CNAME
```

### Change the text

Edit `lib/content.ts`. Every heading, paragraph, project popup, timeline entry, the Vizantra copy,
the email address and the postal address live there, so you never have to touch layout code to
reword the site.

### Add a section

Write it in `components/sections/`, drop it into `app/page.tsx`, and add an entry to `sections` in
`lib/content.ts` so the navbar links to it. The `id` on `<Section>` is the anchor.

### Add a project

Add an entry to `projects.items` in `lib/content.ts` and it appears in the grid and the footer.
Give it `image` for a logo (or leave it out for a typographic tile, like Vizantra) and `link` or
`external` for where the card should go.

### Change the theme

Edit the `@theme` block at the top of `app/globals.css`. The accents come from the logo:
`--color-accent` (cyan) through `--color-accent-soft` (teal-green), plus `--color-amber`.

Those raw logo colours are bright, so they are used as **fills** with dark text on top. When a
brand colour has to be text on a light surface, use the darker `*-ink` variants
(`--color-accent-ink`, `--color-amber-ink`), which are contrast-checked against the page.

The dark version of this design is one commit away: `git show 0fe98ca`.

### Reuse the building blocks

- `<Section id="...">` — a page section with the standard spacing and page width
- `<Container>` — centers content at the page width
- `<Button href="..." variant="accent | dark | subtle | onDark" size="sm | md | lg">` — renders a link when given `href`, otherwise a button
- `<SectionHeader index label title subtitle tone>` — the `[02/05] SERVICES` heading block
- `<IconTile icon={Mail} size="sm | md" />` — the rounded gradient icon tile

## Deployment

Every push to `main` runs `.github/workflows/static.yml`, which builds the site and publishes `out/`
to the `gh-pages` branch. **Pushing to `main` updates the live website.**

Do not delete `public/CNAME`. It keeps the custom domain `www.vizograph.com` connected.
