# Vinoth Murugan — Portfolio

**Live site:** <https://Vinoth-ai-20.github.io/portfolio>

A personal portfolio for Vinoth Murugan, a Research Software Engineer and M.E. Computer Science graduate from Tamil Nadu, India. The site showcases ongoing work on Phylon (an Artificial Life research platform), a growing body of research software projects, and a shift toward Computational Biophysics, Physics-Informed Neural Networks (PINNs), and Scientific Machine Learning for PhD applications in Europe (2027 intake).

---

## Project Structure

```
vinoth-portfolio/
├── frontend/           React + Vite app (deployed to GitHub Pages)
├── backend/            FastAPI email handler (deployed to Render)
├── .github/
│   └── workflows/
│       └── deploy.yml  Automatic deployment to GitHub Pages on every push to main
└── README.md
```

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Routing | React Router DOM v6 (HashRouter) |
| Icons | Lucide React |
| Backend | FastAPI + Uvicorn |
| Email | Gmail SMTP |
| Deployment | GitHub Pages + Render.com |

---

## Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload   # http://localhost:8000
```

---

## Deployment

### GitHub Pages (Frontend)

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds the frontend and pushes the output to the `gh-pages` branch on every push to `main`. No manual step is needed.

To enable it for your own fork:

1. Go to **Repository Settings** and open the **Pages** tab.
2. Set the source to **Deploy from branch**, select `gh-pages`, and choose the root folder.
3. Push any commit to `main` and the workflow takes care of the rest.

### Render (Backend)

1. Create a free account at [render.com](https://render.com).
2. Create a new Web Service, connect this repository, and set the Root Directory to `backend`.
3. Add these environment variables in the Render dashboard:
   - `GMAIL_USER` — your Gmail address
   - `GMAIL_APP_PASSWORD` — your 16-character Google App Password
4. Update `frontend/.env.production` with the Render service URL.

### Gmail App Password

Go to **Google Account**, open **Security**, enable **2-Step Verification**, then generate an App Password under **App Passwords**. Use it as `GMAIL_APP_PASSWORD` in Render.

---

## CV Download

Drop a file named `vinoth-murugan-cv.pdf` into `frontend/public/` and the Download CV button on the hero section will automatically link to it after the next build.

---

## Author

**Vinoth Murugan**
Research Software Engineer and M.E. CSE Graduate

- GitHub: [github.com/Vinoth-ai-20](https://github.com/Vinoth-ai-20)
- YouTube: [youtube.com/@ChromaticPolymath](https://www.youtube.com/@ChromaticPolymath)
- LinkedIn: [linkedin.com/in/vinoth-murugan-2k3](https://linkedin.com/in/vinoth-murugan-2k3)
- ORCID: [0009-0007-2730-2139](https://orcid.org/0009-0007-2730-2139)
- Email: vinoth.ac.in@gmail.com
- Location: Tamil Nadu, India
