# intentional-equity.com

Website for Intentional Equity, LLC. Plain HTML and CSS, hosted on GitHub Pages.

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | The one-page site (Services, Who we work with, Approach, About, Contact) |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms of Use |
| `404.html` | Page shown for broken links |
| `CNAME` | Tells GitHub Pages to serve the site at intentional-equity.com |
| `.nojekyll` | Tells GitHub to publish the files as-is |
| `assets/styles.css` | All styling, including the brand colors at the top |
| `assets/fonts/` | Self-hosted font (Albert Sans) and its license |
| `assets/logo/` | Logo files for proposals, letterhead, and slides (SVG and PNG, standard and reversed, plus the "IE" icon) |
| `assets/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser and phone icons |
| `assets/og-image.png` | Preview image shown when the link is shared on LinkedIn or email |

## Brand reference

| Color | Hex | Use |
|---|---|---|
| Background | #FAFAFA | Page background |
| Ink | #1D1F24 | Headings, body text, logo |
| Muted | #5A5D66 | Secondary text, logo descriptor |
| Gallery Blue | #0B369A | Buttons, links, emphasis |
| Burnt Terracotta | #C34811 | Logo square and small accents only |
| Stone Linen | #D9D1CA | Contact band, hero block, panels |

Typeface: Albert Sans (Bold for the logo and headings, Regular for body text). Do not use Burnt Terracotta for text on Gallery Blue; the contrast is too low to read.

Note: `.nojekyll` is a hidden file. On a Mac, press Cmd + Shift + . in Finder to see it. Make sure it is uploaded.

## Part 1: Publish the site on GitHub

1. Sign in to GitHub and click **New repository**.
2. Name it `intentional-equity` (any name works). Set it to **Public**. GitHub Pages on a free account requires a public repository.
3. Click **Create repository**, then **uploading an existing file**.
4. Drag in everything from this folder, including the `assets` folder and the `.nojekyll` and `CNAME` files. Click **Commit changes**.
5. Go to **Settings > Pages**.
6. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**. Click **Save**.
7. Under **Custom domain**, confirm it shows `intentional-equity.com` (the CNAME file sets this). If it is blank, type it in and click **Save**.

Recommended: verify the domain under your GitHub account (**Settings > Pages > Add a domain**) before or right after this step. GitHub recommends it to prevent someone else from claiming your domain.

## Part 2: Point the domain to GitHub (at your domain registrar)

Remove any existing default "parked" or forwarding records for `@` and `www`, then add:

| Type | Name / Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with your GitHub username. Do not include the repository name. Do not create wildcard (`*`) records.

DNS changes can take up to 24 hours. Once GitHub shows the domain check as successful, return to **Settings > Pages** and check **Enforce HTTPS** (this option can take up to 24 hours to appear).

Source: GitHub Docs, "Managing a custom domain for your GitHub Pages site."

## Part 3: Set up hello@intentional-equity.com

The site lists hello@intentional-equity.com. That address must work before launch.

- Check whether your registrar offers free email forwarding. Most do. Forward `hello@intentional-equity.com` to your Gmail.
- Forwarding only receives mail. Replies will come from your Gmail address unless you also set up a sending option (such as a paid Google Workspace mailbox, or Gmail's "Send mail as" feature with an SMTP service). Decide which you want before launch.
- Send a test email from a different account to confirm it arrives.

## Making changes later

- **Text:** edit `index.html` in GitHub (click the file, then the pencil icon) and commit. Changes go live in about a minute.
- **Colors:** change the values at the top of `assets/styles.css` under `:root`.
- **Legal pages:** update the "Last updated" date whenever you change them.
