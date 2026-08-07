# Portfolio
This is a personal portfolio project showcasing my skills, projects, and experience as a software developer.

## Live Site
Deployed on GitHub Pages at [https://coghilldev.com](https://coghilldev.com), with two routes:

- `/` — the web design business page
- `/portfolio` — this software developer portfolio

## Features
- Overview of my technical skills and expertise.
- Detailed descriptions of my projects with links to repositories.
- Contact information for professional inquiries.

## Technologies Used
- React for the front-end UI components
- Tailwind CSS for styling
- Vite as the build tool
- EmailJS for contact form functionality

## Development Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/CoghillB/portfolio.git
    ```
2. Navigate to the project directory:
    ```bash
    cd portfolio
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Deployment

**Push to `main`. That is the only way the site gets published.**

`main` is the trunk. A push to it runs `.github/workflows/deploy.yml`, which
lints, builds, verifies the output, and publishes `dist/` to the `gh-pages`
branch. A deploy can also be re-run from the Actions tab via *Run workflow*
without needing an empty commit.

### What gates a deploy

The workflow fails, and nothing is published, if any of these fail:

- `npm run lint`
- `npm run build`
- `scripts/verify-dist.mjs` (runs as the last step of the build) — checks `dist/`
  contains `index.html`, `CNAME`, `.nojekyll`, `404.html`, the JS and CSS
  bundles, and a pre-rendered directory for every route in
  `scripts/prerender-routes.mjs`
- the EmailJS build secrets are present, so the contact form isn't silently
  broken on the deployed site

`CNAME` is the one worth understanding: GitHub Pages reads the custom domain
from that file in the published branch. Deploy without it and coghilldev.com
stops resolving — a full outage that looks like a successful deploy everywhere
except the domain itself.

### Do not add a second deploy path

There used to be an `npm run deploy` script (the `gh-pages` package) that
published whatever was in a local working tree, from any branch, with no lint,
no build check and no review. Because it bypassed `main`, `main` silently fell
15 commits behind what was actually live, and a routine push to `main` would
have reverted the site. The script has been removed. If you need to publish,
push to `main`.

### Adding a route

Add it to `src/App.jsx` **and** to `scripts/prerender-routes.mjs`. Pages is
static hosting with no rewrites, so a route without a pre-rendered directory
returns HTTP 404 to crawlers even though it renders fine in a browser. The
verify step fails if a listed route wasn't pre-rendered, but it cannot know
about a route you never listed.

### GitHub Pages configuration

Already configured, and only needs revisiting if the site moves:

- Settings > Pages > Build and deployment
- Source: "Deploy from a branch", Branch: `gh-pages`, folder: `/ (root)`
- Custom domain: `coghilldev.com`, with Enforce HTTPS on

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
