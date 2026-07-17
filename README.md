# Morning Star AI Group — Website

Single-file static site. `index.html` is the entire site (HTML/CSS/JS inline).

## Deploy on Render

1. Push this repo to GitHub.
2. In Render: **New +** → **Static Site** → connect this repo.
3. Build Command: *(leave blank)*
4. Publish Directory: `.`
5. Deploy. Render gives you a live `.onrender.com` URL.

## Connect your GoDaddy domain

1. In Render → your site → **Settings** → **Custom Domains** → add your domain.
2. Render shows the exact DNS records needed (A record for the apex domain, CNAME for `www`).
3. In GoDaddy → **My Domains** → your domain → **DNS** → add those records.
4. Allow a few minutes to a few hours for DNS to propagate.

## Editing the site

Everything lives in `index.html` — no build step, no dependencies. Edit and push to redeploy.
