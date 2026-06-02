# CozyThreads — Freshdesk Portal Theme

A warm, cozy custom theme for the **CozyThreads** Freshdesk support portal.
Earthy terracotta + cream palette, soft rounded cards, friendly serif headings —
built to feel like the brand: comfortable, handmade, inviting.

> Freshdesk doesn't accept a single uploaded "theme file." Instead you paste
> each piece into the matching slot under **Admin → Channels → Portals →
> [your portal] → Customize**. This repo mirrors those slots one-to-one so you
> can copy/paste with confidence.

---

## What's in here

```
freshdesk-theme/
├── README.md                ← you are here (install guide)
├── theme.config.json        ← brand tokens (colors, fonts, radius) for reference
├── assets/
│   ├── css/
│   │   └── theme.css         ← paste into  Customize → CSS  (the whole file)
│   └── js/
│       └── theme.js          ← paste into  Layout page, before </body>
└── templates/
    ├── layout.html           ← Customize → Pages → Layout
    ├── home.html             ← Customize → Pages → Home page
    ├── category.html         ← Customize → Pages → Category page
    ├── folder.html           ← Customize → Pages → Folder page
    ├── article.html          ← Customize → Pages → Article page
    ├── search.html           ← Customize → Pages → Search results page
    ├── new_ticket.html       ← Customize → Pages → New ticket page
    ├── ticket_list.html      ← Customize → Pages → Ticket list page
    └── ticket_details.html   ← Customize → Pages → Ticket details page
```

## Install (10 minutes)

1. **Back up your current portal first.** In Customize, copy your existing CSS
   and each page's HTML into a scratch doc before overwriting. Freshdesk has no
   built-in version history for portal edits.
2. **CSS** — Open *Customize → CSS*, select all, delete, and paste the full
   contents of `assets/css/theme.css`. Save.
3. **Layout** — Open *Customize → Pages → Layout* and paste
   `templates/layout.html`. This is the master template (head/header/footer +
   the `{{{pageContent}}}` slot every other page renders into).
4. **Each page** — For Home, Category, Folder, Article, Search, New Ticket,
   Ticket List, and Ticket Details, paste the matching file from `templates/`.
5. **JS (optional)** — The mobile-nav toggle + search-focus helpers live in
   `assets/js/theme.js`. Paste it right before `</body>` in the Layout page
   (it's already wired in `layout.html` as a reference block — replace the
   inline placeholder with the file contents, or host it and `<script src>` it).
6. **Logo & favicon** — Upload via *Customize → Header* (or Portal settings).
   The theme reads Freshdesk's standard `{{portal.logo_url}}` and falls back to
   the wordmark "CozyThreads" if no logo is set.
7. **Preview, then Publish.** Use the preview toggle before hitting Publish so
   changes don't go live half-applied.

## Customizing the brand

All colors, fonts, and shape values are CSS custom properties declared once at
the top of `theme.css` under `:root`. Change them there and everything updates:

```css
:root {
  --ct-terracotta: #c75b39;   /* primary brand / buttons / links     */
  --ct-clay:       #8c3b23;   /* hover + deep accents                */
  --ct-sage:       #6b8e5a;   /* secondary accent (success, badges)  */
  --ct-gold:       #e0a458;   /* highlights, ratings                 */
  --ct-cream:      #fbf6ef;   /* page background                     */
  --ct-sand:       #fff9f2;   /* raised cards                        */
  --ct-ink:        #3a2e28;   /* primary text                        */
  --ct-muted:      #7a6a5f;   /* secondary text                      */
}
```

`theme.config.json` documents the same tokens in a build-tool-friendly format if
you later want to generate these from a design system.

## A note on Freshdesk Liquid placeholders

The templates use Freshdesk's portal objects (`{{portal.solution_categories}}`,
`{{article.description}}`, `{{{pageContent}}}`, etc.). These are stable but the
exact set available to your account can vary by Freshdesk plan/version. Each
template flags Freshdesk-injected regions with an HTML comment like
`<!-- FRESHDESK: ticket form injected here -->`. If a variable renders blank,
check the live object list in your portal's template editor sidebar and swap in
the equivalent — the surrounding markup/CSS stays the same.
