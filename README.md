# aaron-milan-schott.github.io

Personal "portal" page linked from the QR code on Aaron Schott's business
card. Live at **https://aaron-milan-schott.github.io**.

Plain HTML/CSS/JS, no build step, no npm. GitHub Pages serves this repo
directly from the `main` branch.

## How to update your info

Everything personal (name, title, school, email, phone, LinkedIn, portfolio)
lives in one file: **[`js/config.js`](js/config.js)**. Open it, change the
value on the right of the field you want to update, then commit and push to
`main`:

```js
const CONFIG = {
  name: "Aaron Schott",
  title: "Computer Engineering Student",
  school: "Case Western Reserve University",
  classYear: "Class of 2028",

  email: "aaron.schott@case.edu",
  phone: "954-995-5300",

  linkedin: "https://www.linkedin.com/in/aaron-milan-schott/",
  portfolio: "",
  github: ""
};
```

GitHub Pages redeploys automatically after a push to `main` — the live site
usually updates within a minute or two. No other file needs to change for
any of these fields.

### Adding your portfolio URL

The Portfolio button is hidden automatically while `portfolio: ""` is empty.
To make it appear, just fill in the URL:

```js
portfolio: "https://your-portfolio-url.com",
```

Save, commit, push. The button appears with no other code changes. At that
point, also consider removing the `noindex` line described below so the site
can be found by search engines.

### Updating "Save Contact" (contact.vcf)

The Save Contact button links to a plain file, **[`contact.vcf`](contact.vcf)**,
at the repo root. This is intentional: a static `.vcf` file is the most
reliable way for iOS and Android to recognize "add to contacts" across
devices — more reliable than generating it with JavaScript.

Because it's a separate static file, it is **not** auto-generated from
`js/config.js`. If you change your email, phone, or LinkedIn URL in
`config.js`, also update the matching line in `contact.vcf` so the saved
contact stays in sync:

```
BEGIN:VCARD
VERSION:3.0
N:Schott;Aaron;;;
FN:Aaron Schott
ORG:Case Western Reserve University
TITLE:Computer Engineering Student
EMAIL;TYPE=INTERNET:aaron.schott@case.edu
TEL;TYPE=CELL:954-995-5300
URL:https://www.linkedin.com/in/aaron-milan-schott/
END:VCARD
```

(It's vCard version 3.0, with Windows-style CRLF line endings — keep both if
you hand-edit it.)

### Removing `noindex` later

`index.html` currently has:

```html
<meta name="robots" content="noindex">
```

This keeps your email and phone number out of search engine results while
there's no real portfolio site yet. Once you build one, delete that line so
this page (and your name) can be indexed normally.

## File structure

```
index.html        — page structure, all text/links filled in by js/main.js
css/style.css      — styling (light + dark mode via CSS variables)
js/config.js        — EDIT THIS to change any personal detail or link
js/main.js          — reads config.js and fills in the page; no edits needed
contact.vcf          — static vCard 3.0 file for the Save Contact button
.nojekyll            — tells GitHub Pages to skip Jekyll processing
```

## GitHub Pages setup (one-time)

In this repo's **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: **main**, folder **/ (root)**
- **Enforce HTTPS**: on
