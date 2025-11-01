# Muslim Open Source Foundation (MOSF)

> **Status:** In Formation  
> Incorporation pending in Washington State.

## Mission
Empower the global Muslim community to gain Islamic and software engineering knowledge freely through open-source collaboration, education, and innovation.

## Vision
A world where Muslims lead in ethical technology and open knowledge — advancing society through faith-aligned, transparent, and accessible digital solutions.

## About
The Muslim Open Source Foundation (MOSF) is a nonprofit organization being formed to promote education, open-source development, and Islamic ethical values in technology.  
All MOSF projects will be freely available to the public under open licenses.

## Development

This website is built with:
- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TailwindCSS** - Utility-first CSS framework

### Local Development

To run the website locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To build the static site:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Deployment to GitHub Pages

The site is configured to deploy to GitHub Pages at the `/mosf-website/` path.

**Deployment Steps:**

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   - Option A: Using GitHub Actions (recommended)
     - Create a `.github/workflows/deploy.yml` workflow file (see below)
     - Push to `main` branch and the workflow will automatically deploy
   
   - Option B: Manual deployment
     ```bash
     # Install gh-pages package (if not already installed)
     npm install --save-dev gh-pages
     
     # Add deploy script to package.json:
     # "deploy": "npm run build && gh-pages -d dist"
     
     # Deploy
     npm run deploy
     ```

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

After deployment, enable GitHub Pages in repository settings:
1. Go to Settings → Pages
2. Select `gh-pages` branch as the source
3. The site will be available at `https://[username].github.io/mosf-website/`

---

© 2025 Muslim Open Source Foundation. All rights reserved.  
*(This organization is currently in formation.)*
