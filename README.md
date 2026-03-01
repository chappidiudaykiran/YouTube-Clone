# YouTube Clone
- Created React Layout

## Deploy on Netlify

### 1) Push project to GitHub
Push this project to a GitHub repository first.

### 2) Create site in Netlify
- In Netlify, choose **Add new site** → **Import an existing project**.
- Connect GitHub and select this repo.

### 3) Build settings
- Build command: `npm run build`
- Publish directory: `build`

This repo already includes:
- `netlify.toml` (build + SPA redirect)
- `public/_redirects` for React Router support

### 4) Add environment variable
In Netlify site settings, add:
- Key: `REACT_APP_YT_VIDEOS_API`
- Value: your YouTube videos API URL

Then trigger a redeploy.

### 5) Local production test (optional)
Run:
```bash
npm install
npm run build
```