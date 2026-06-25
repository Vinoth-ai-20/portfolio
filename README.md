# Vinoth Murugan — Portfolio

**Live site:** <https://Vinoth-ai-20.github.io/portfolio>

A professional portfolio website for Vinoth Murugan, Artificial Life Research Engineer.
Built with React 18 + Vite + Tailwind CSS + Framer Motion (frontend) and FastAPI (backend).

## Monorepo Structure

```powershell
vinoth-portfolio/
├── frontend/           ← React + Vite app
├── backend/            ← FastAPI email handler
├── .github/
│   └── workflows/
│       └── deploy.yml  ← Auto-deploy to GitHub Pages on push to main
└── README.md
```

## Setup Steps

### 1. Create GitHub repository

Name it exactly: **portfolio**

Push this code to the `main` branch:

```bash
git init
git add .
git commit -m "Initial portfolio build"
git remote add origin https://github.com/Vinoth-ai-20/portfolio.git
git push -u origin main
```

### 2. Enable GitHub Pages

Repository Settings → Pages → Source: **Deploy from branch** → select `gh-pages` branch → root folder

### 3. Auto-deploy via GitHub Actions

The `.github/workflows/deploy.yml` workflow automatically:

- Builds the frontend on every push to `main`
- Deploys to the `gh-pages` branch

**No manual deployment needed** — just push to `main`.

### 4. Deploy backend to Render

1. Create a free account at [render.com](https://render.com)
2. New Web Service → connect this GitHub repo → Root Directory: `backend`
3. Add environment variables:
   - `GMAIL_USER` = `vinoth.ac.in@gmail.com`
   - `GMAIL_APP_PASSWORD` = your 16-character Google App Password
4. Update `frontend/.env.production` with your Render service URL

### 5. Enable Gmail App Password

Google Account → Security → 2-Step Verification → App Passwords

Generate one for **Mail** → copy the 16-character password to Render env vars.

### 6. Local Development

```bash
# Frontend
cd frontend
npm install
npm run dev       # http://localhost:5173

# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload  # http://localhost:8000
```

## Tech Stack

| Layer | Technology |
| ------- | ----------- |
| Frontend | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Routing | React Router DOM v6 (HashRouter) |
| Icons | Lucide React |
| Backend | FastAPI + Uvicorn |
| Email | Gmail SMTP |
| Deployment | GitHub Pages + Render.com |

## Author

**Vinoth Murugan** — Artificial Life Research Engineer  
📍 Tamil Nadu, India  
🔬 ORCID: [0009-0007-2730-2139](https://orcid.org/0009-0007-2730-2139)  
📧 <vinoth.ac.in@gmail.com>
