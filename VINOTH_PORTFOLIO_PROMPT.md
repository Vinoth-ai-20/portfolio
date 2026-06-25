# VINOTH MURUGAN — PORTFOLIO WEBSITE

## Complete Build Specification for Google Antigravity

### Date: June 2026 | Version 1.0

---

## READ THIS FIRST — AGENT INSTRUCTIONS

You are an autonomous coding agent building a complete portfolio website.
Execute every instruction in this document top to bottom without skipping steps.
Do not ask for clarification — every decision is already made in this document.
When you finish each section, verify it works before moving to the next.
Do not use Create React App. Use Vite.

---

## SECTION 1: MISSION

You are building a professional portfolio website for **Vinoth Murugan**, a 23-year-old
Artificial Life Research Engineer from Tamil Nadu, India.

**The website has ONE primary job:**
Convince a European PhD supervisor or research lab that Vinoth is a serious,
capable Research Software Engineer who builds real simulation platforms for science.

**Primary focus of the entire site:**
The ALife simulator work — EcoSim Lab and Phylon. Every section connects back to this.

**Secondary job:**
Present Vinoth's technical breadth (systems programming, full-stack, creative work)
as supporting evidence for someone with genuine research depth, not just scattered skills.

**Tone:** Precise. Scientific. Human. Not corporate. Not startup-generic.
Think: a researcher's personal site, not a developer's job-hunt page.

---

## SECTION 2: ARCHITECTURE

### Frontend

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS v3 with custom theme config
- **Animations:** Framer Motion
- **Routing:** React Router DOM v6 — use HashRouter (required for GitHub Pages)
- **Icons:** Lucide React
- **Fonts:** Google Fonts — Space Grotesk (display) + Inter (body) + JetBrains Mono (code/labels)
- **Hero animation:** Custom HTML Canvas particle simulation (see Section 6)
- **Deployment target:** <https://Vinoth-ai-20.github.io/portfolio>
- **Repo name:** portfolio

### Backend

- **Framework:** FastAPI (Python 3.11)
- **Server:** Uvicorn
- **Purpose:** Contact form email handler only
- **Email:** Gmail SMTP using env vars GMAIL_USER and GMAIL_APP_PASSWORD
- **CORS origin:** <https://Vinoth-ai-20.github.io>
- **Deployment:** Render.com free tier

### Monorepo Structure

```
vinoth-portfolio/
├── frontend/           ← React + Vite app
├── backend/            ← FastAPI app
├── .github/
│   └── workflows/
│       └── deploy.yml  ← GitHub Actions for GitHub Pages deployment
└── README.md
```

---

## SECTION 3: DESIGN SYSTEM

### Color Palette

```js
// tailwind.config.js colors
colors: {
  black:     '#000000',  // dark bg
  prussian:  '#14213d',  // dark surface / light text
  seagreen:  '#5c946e',  // accent — ALL interactive elements
  alabaster: '#e5e5e5',  // light surface / dark text secondary
  white:     '#ffffff',  // light bg
}
```

### Dark Mode (DEFAULT — user opens site in dark mode)

| Role              | Value     |
|-------------------|-----------|
| Page background   | #000000   |
| Card / surface    | #14213d   |
| Accent / CTA      | #5c946e   |
| Text primary      | #ffffff   |
| Text secondary    | #e5e5e5   |
| Border            | #14213d   |

### Light Mode

| Role              | Value     |
|-------------------|-----------|
| Page background   | #ffffff   |
| Card / surface    | #e5e5e5   |
| Accent / CTA      | #5c946e   |
| Text primary      | #000000   |
| Text secondary    | #14213d   |
| Border            | #e5e5e5   |

### Typography

```css
/* Display — headings, hero name */
font-family: 'Space Grotesk', sans-serif;
font-weight: 700;

/* Body — paragraphs, descriptions */
font-family: 'Inter', sans-serif;
font-weight: 400;

/* Mono — tech labels, skill tags, code */
font-family: 'JetBrains Mono', monospace;
font-weight: 400;
```

### Type Scale

```
Hero name:        4rem  / 6rem desktop   Space Grotesk 700
Section headings: 2rem  / 2.5rem desktop Space Grotesk 700
Sub-headings:     1.25rem               Space Grotesk 500
Body text:        1rem                  Inter 400
Labels/tags:      0.75rem               JetBrains Mono 400
```

### Spacing

Use Tailwind defaults. Section vertical padding: py-24 (desktop), py-16 (mobile).

### Border Radius

Cards: rounded-2xl. Buttons: rounded-full. Tags: rounded-full.

### Signature Element — Agent Particle Canvas

This is the single most important visual element. See Section 6 for implementation.
It lives only in the Hero section as the animated background.

---

## SECTION 4: FILE STRUCTURE

### Frontend

```
frontend/
├── public/
│   ├── favicon.svg          ← SVG of a simple agent grid (6 dots in a 2×3 pattern)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── ALifeFeature.jsx    ← PRIMARY section — ALife Simulator showcase
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Research.jsx
│   │   ├── Creative.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ParticleCanvas.jsx  ← Agent simulation canvas
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json

backend/
├── main.py
├── requirements.txt
└── render.yaml
```

---

## SECTION 5: FULL CONTENT — EVERY SECTION

### 5.1 Meta / SEO (in index.html)

```html
<title>Vinoth Murugan — Artificial Life Research Engineer</title>
<meta name="description" content="Vinoth Murugan is an Artificial Life Research Engineer building EcoSim Lab and Phylon — research-grade platforms for agent-based simulation, evolutionary computation, emergent behavior, and adaptive intelligence." />
<meta name="author" content="Vinoth Murugan" />
<meta property="og:title" content="Vinoth Murugan — Artificial Life Research Engineer" />
<meta property="og:description" content="Building simulation platforms that help scientists understand living systems." />
<meta property="og:url" content="https://Vinoth-ai-20.github.io/portfolio" />
```

---

### 5.2 Navbar

**Logo (left):** `VM` in Space Grotesk 700, Sea Green color
**Nav links (right):** About · ALife · Projects · Research · Creative · Contact
**Theme toggle:** Sun/Moon icon (Lucide) — rightmost
**Mobile:** Hamburger menu, full-screen overlay
**Behavior:** Transparent at top, gains dark/light background + shadow on scroll.
Smooth scroll to section anchors using HashRouter + scrollIntoView.

---

### 5.3 Hero Section

**Layout:** Full viewport height. Particle canvas as full-bleed animated background.
Content centered vertically and horizontally.

**Content (exact copy):**

```
EYEBROW (JetBrains Mono, Sea Green):
  artificial_life_research_engineer.py

H1 (Space Grotesk 700, 6rem desktop / 3rem mobile, White):
  Vinoth
  Murugan

SUBTITLE (Inter 400, 1.125rem, Alabaster):
  Artificial Life Research Engineer developing Phylon,
  a research-grade platform for agent-based simulation,
  evolutionary computation, emergent behavior,
  and adaptive intelligence.

LOCATION TAG (JetBrains Mono, small, Sea Green):
  📍 Tamil Nadu, India → PhD applicant, Europe 2027

CTA BUTTONS (two, side by side):
  Primary button (Sea Green bg, Black text): "View ALife Research"
    → scrolls to #alife section

  Secondary button (outline, Sea Green border and text): "GitHub"
    → https://github.com/Vinoth-ai-20
    → opens in new tab
```

**Scroll indicator:** Small animated chevron-down (Lucide) at bottom center.
Fade out on scroll.

---

### 5.4 About Section

**Section ID:** `about`
**Heading:** About Me

**Layout:** Two columns on desktop (text left, stats/links right).
Single column on mobile.

**Left column — Bio (exact copy):**

```
I am a creative technologist and Research Software Engineer from Thanjavur, Tamil Nadu.
My work lives at the intersection of computation, biology, and simulation —
building the software platforms that help scientists model how living systems behave.

I hold a B.Tech in Artificial Intelligence & Data Science and have completed
an M.E. in Computer Science Engineering (August 2026). I spent a year and a half
as a Technical Training Engineer at an ARVR Innovation Center, teaching students
and guiding projects in augmented and virtual reality.

I am now focused entirely on two things: building open-source simulation
infrastructure as an independent researcher, and preparing for a fully funded
PhD in Computational Ecology at a European university in the 2027 intake.

My research software goal is simple — I want to build the tools
that make scientists faster at understanding life.
```

**Right column — Quick facts cards:**

```
🎓  B.Tech AI & DS — DSEC, 2024
🎓  M.E. CSE — SKEC, 2026
🏢  Ex-TTE — ARVR Innovation Center, DSU (Oct 2024 – Jun 2026)
📍  Tamil Nadu, India
🎯  PhD applicant — Computational Ecology, Europe 2027
🔬  ORCID: 0009-0007-2730-2139  → links to https://orcid.org/0009-0007-2730-2139
```

Each fact is a small card with Prussian Blue bg (dark mode) / Alabaster bg (light mode).

---

### 5.5 ALife Feature Section (PRIMARY SECTION)

**Section ID:** `alife`
**Eyebrow (JetBrains Mono, Sea Green):** research_focus.primary
**Section heading (Space Grotesk):** Artificial Life Simulator
**Subheading:** EcoSim Lab & Phylon — Building the Platform

**Layout:** This is the most important section. Give it full visual weight.
Dark Prussian Blue background strip (both modes) to visually separate it.

**Left side — Description:**

```
HEADLINE:
  An open-source platform for agent-based simulation,
  evolutionary computation, and emergent behavior research.

DESCRIPTION:
  EcoSim Lab is a web-based agent-based ecological simulation platform —
  the active prototype of a larger vision called Phylon.

  Built with Python, Mesa, FastAPI, and React, EcoSim Lab models
  multi-species ecosystems where individual agents follow simple behavioral
  rules and complex population dynamics emerge from their interactions.

  Phylon extends this into a research-grade Artificial Life Laboratory:
  a GPU-capable, massively scalable simulation environment for studying
  evolution, emergence, and adaptive intelligence — with no game engine
  dependencies and full scientific reproducibility built in.

RESEARCH ANGLE:
  This work directly addresses a gap in the research software ecosystem:
  most ecologists and ALife researchers lack accessible, reproducible,
  web-based tools for interactive simulation. Phylon aims to be that tool.
```

**Right side — Technical spec cards:**

```
CARD 1 — EcoSim Lab (Status: In Development)
  Stack: Python · Mesa · FastAPI · React · Docker
  What it does: Agent-based predator-prey ecological simulation
                with real-time web visualization and batch runner.
  Architecture: Mesa engine → FastAPI backend → React frontend
                50×50 spatial grid · Wolf / Sheep / Grass agents
                ODD Protocol documented · Sensitivity analysis
  GitHub: github.com/Vinoth-ai-20 (link to repo when public)

CARD 2 — Phylon (Status: Research Design Phase)
  Stack: Rust · WASM · GPU (CUDA/WGPU)
  What it does: Research-grade Artificial Life Laboratory —
                large-scale evolutionary simulation, no game engine.
  Vision: Each organism = autonomous Rust agent
          GPU-accelerated massive population runs
          Emergent behavior, evolutionary computation, adaptive intelligence
  Stage: Architecture and specification phase
```

**Architecture diagram (ASCII, rendered beautifully in the UI):**

```
React Frontend (Visualization)
        ↕ WebSocket + REST
FastAPI Backend (Simulation Controller)
        ↕
Mesa Engine (Agent Logic)
Wolf Agents · Sheep Agents · Grass Agents
        ↕ (Phylon extension)
Rust Core · GPU Compute · WASM Bridge
```

Render this diagram as a styled visual component, not plain text.

**Bottom of section — feature tags:**
Agent-Based Modeling · Evolutionary Computation · Emergent Behavior ·
Predator-Prey Dynamics · ODD Protocol · Scientific Reproducibility ·
Spatial Simulation · Distributed Computing · Research Software Engineering

Each tag: JetBrains Mono, Sea Green border, small, rounded-full.

---

### 5.6 Projects Section

**Section ID:** `projects`
**Heading:** Other Projects
**Subheading:** Systems, platforms, and experiments across simulation, enterprise, and HPC.

**Layout:** Responsive grid — 3 columns desktop, 2 tablet, 1 mobile.

**Project data (use this exact data in src/data/projects.js):**

```js
export const projects = [
  {
    id: 1,
    title: "SJG ERP",
    subtitle: "Open-Source CRM / ERP System",
    status: "In Development",
    statusColor: "green",
    stack: ["Tauri v2", "Rust", "React 19", "TypeScript", "libsql", "Turso"],
    description:
      "A full-stack desktop CRM/ERP for Sri Janagai Groups — a family tailoring institution. Built with Tauri v2 (Rust) and React 19. Features customer CRM, education module, tailoring order management, RBAC auth (Argon2id), and offline-first Turso sync. 24-phase roadmap, currently at Phase 4.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
  {
    id: 2,
    title: "NEAT Autonomous Driving Simulator",
    subtitle: "UG Capstone Project",
    status: "Completed",
    statusColor: "blue",
    stack: ["Python", "NEAT Algorithm", "Pygame"],
    description:
      "Autonomous vehicle simulator using NeuroEvolution of Augmenting Topologies. Individual vehicle agents evolve driving behavior over generations with no hand-coded rules — emergent competence through natural selection. An early personal landmark in agent-based simulation.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
  {
    id: 3,
    title: "AR Furniture Visualization App",
    subtitle: "M.E. Final Project",
    status: "In Progress",
    statusColor: "yellow",
    stack: ["Unify Engine", "Python", "AR", "Voice Commands"],
    description:
      "Augmented reality application for visualizing furniture placement in real rooms. Users scan their room, then place and reposition 3D furniture models using voice commands. Built as the M.E. Computer Science Engineering final project.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
  {
    id: 4,
    title: "COSMOS HPC DPR",
    subtitle: "Distributed Computing Platform",
    status: "Paused",
    statusColor: "gray",
    stack: ["Rust", "Axum", "Next.js", "Kubernetes", "PostgreSQL", "Turborepo"],
    description:
      "Kubernetes-based HPC distributed processing platform. Completed Week 1 (monorepo bootstrap with Turborepo + Cargo workspace) and Week 2 (auth infrastructure). Paused to focus on ecological simulation research.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
  {
    id: 5,
    title: "NEXUSIM HPC",
    subtitle: "Scientific Computing Platform",
    status: "Paused",
    statusColor: "gray",
    stack: ["Rust", "Axum", "Next.js", "PostgreSQL", "MinIO", "Docker", "k3d"],
    description:
      "Cloud-native HPC simulation management platform for computational chemistry workflows (Gaussian 16, ORCA). Features JWT auth, Jobs CRUD with RBAC, Zustand frontend store, and Docker Compose stack. Two weeks of an 8-phase roadmap completed.",
    github: "https://github.com/Vinoth-ai-20",
    demo: null,
  },
];
```

**Card design:**

- Prussian Blue bg (dark) / Alabaster bg (light)
- Status badge top-right: colored dot + text
- Title + subtitle
- Stack tags (JetBrains Mono, small, Sea Green)
- Description text
- GitHub link icon at bottom

---

### 5.7 Skills Section

**Section ID:** `skills`
**Heading:** Technical Skills

**Layout:** Category cards in a grid. Each category has a heading and tag list.

```js
export const skills = [
  {
    category: "Languages",
    icon: "Code",
    items: ["Python", "Rust", "TypeScript", "JavaScript"]
  },
  {
    category: "Simulation & ALife",
    icon: "Activity",
    items: ["Agent-Based Modeling", "Mesa Framework", "NEAT Algorithm",
            "Evolutionary Computation", "ODD Protocol", "Stochastic Simulation"]
  },
  {
    category: "Web & API",
    icon: "Globe",
    items: ["FastAPI", "Django", "React 19", "Next.js", "REST API", "WebSocket"]
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    items: ["RAG Systems", "LLM Integration", "Chatbot Development", "AI Agents"]
  },
  {
    category: "Systems & Desktop",
    icon: "Monitor",
    items: ["Tauri v2", "Rust Systems", "libsql / Turso", "SQLite WAL"]
  },
  {
    category: "DevOps & Infrastructure",
    icon: "Server",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Render", "Turborepo"]
  },
  {
    category: "AR / VR",
    icon: "Glasses",
    items: ["AR Development", "Unity Engine", "Unify Engine", "Spatial Computing"]
  },
  {
    category: "Design & Creative",
    icon: "Palette",
    items: ["Figma", "Adobe After Effects", "Adobe Illustrator",
            "Adobe Photoshop", "Motion Graphics", "Video Editing",
            "Portrait Art", "Photography"]
  }
];
```

---

### 5.8 Research Section

**Section ID:** `research`
**Eyebrow (JetBrains Mono, Sea Green):** phd_application_status.active
**Heading:** Research Direction
**Subheading:** Targeting fully funded PhD positions in Computational Ecology — Europe 2027

**Layout:** Two columns — left text, right cards.

**Left — Research statement:**

```
I am pursuing a fully funded PhD in Computational Ecology and Agent-Based Modeling
at a European research university, targeting the 2027 intake.

My research focus: building open-source simulation infrastructure that enables
ecologists and biologists to model complex ecosystem dynamics without requiring
deep programming expertise.

The work connects directly to what I am building now — EcoSim Lab is the
foundation of my PhD application portfolio and my proof of concept as a
Research Software Engineer.

Target institutions include Wageningen University & Research (Netherlands),
Helmholtz Centre for Environmental Research UFZ (Germany), and
TU Dresden — institutions where the ODD Protocol for agent-based modeling
was developed and where my technical approach has direct alignment with
active research groups.
```

**Right — Research identity cards:**

```
CARD: Research Interests
  → Computational Ecology
  → Agent-Based Modeling & Simulation
  → Research Software Engineering for Life Sciences
  → Emergent Behavior & Complex Systems
  → Distributed Scientific Computing
  → Evolutionary Computation

CARD: Academic Profile
  ORCID: 0009-0007-2730-2139
  Link → https://orcid.org/0009-0007-2730-2139

  Status: arXiv preprint — coming soon
  (show as a pill badge: "📝 Preprint in preparation")

CARD: Target Timeline
  Aug 2026 — M.E. degree conferred
  Nov 2026 — EcoSim Lab v1.0 public
  Dec 2026 — Literature review on arXiv
  Jan 2027 — PhD applications submitted
  2027–2028 — PhD begins
```

---

### 5.9 Creative Section

**Section ID:** `creative`
**Heading:** Beyond the Terminal
**Subheading:** Art, motion, and storytelling — the other half of how I think.

**Content:**

```
Before I was an engineer, I was an artist.

I won first prize in a school-level portrait competition. My father asked me
to put the pencil down and study engineering instead. I did both — just in
different forms.

Motion graphics, video editing, photography, and storytelling inform how I
think about visualization in my simulation work. When I design a real-time
frontend for a running ABM, I am also thinking about what makes the agent
behavior legible, beautiful, and meaningful to watch.
```

**Creative disciplines (displayed as icon + label cards):**

```
🎨  Portrait Art (pencil, charcoal)
🎬  Motion Graphics (After Effects, Illustrator)
📷  Photography & Videography
✂️  Video Editing
🎥  YouTube Content Creator
💃  Dance (reels, performance)
🎵  Music Production (learning)
📖  Storytelling & Scriptwriting
```

Note in the card at bottom:

```
"The same thinking that makes a good simulation visualization
makes a good short film — you're trying to make invisible forces
visible to another person."
```

---

### 5.10 Contact Section

**Section ID:** `contact`
**Heading:** Get In Touch
**Subheading:** For PhD collaboration inquiries, research discussions, or project opportunities.

**Layout:** Two columns — left info, right form.

**Left column:**

```
Email:
  vinoth.ac.in@gmail.com
  (clickable mailto link)

GitHub:
  github.com/Vinoth-ai-20

LinkedIn:
  linkedin.com/in/vinoth-murugan-2k3

ORCID:
  orcid.org/0009-0007-2730-2139

Location:
  Tamil Nadu, India
  Available for remote collaboration globally
```

**Right column — Contact Form:**
Fields:

- Name (required)
- Email (required)
- Subject (dropdown: PhD Inquiry · Research Collaboration · Project Discussion · Other)
- Message (textarea, min 3 rows)
- Send button (Sea Green, rounded-full)

Form submits via POST to FastAPI backend `/api/contact`.
Show loading spinner while submitting.
Show success message: "Message sent. I'll get back to you soon."
Show error message: "Something went wrong. Try emailing directly at <vinoth.ac.in@gmail.com>"

---

### 5.11 Footer

```
© 2026 Vinoth Murugan · Built with React + Tailwind + FastAPI
[GitHub] [LinkedIn] [ORCID] [Email]   ← Lucide icons, Sea Green on hover

Centered. Minimal. Dark bg both modes.
```

---

## SECTION 6: PARTICLE CANVAS — AGENT SIMULATION HERO ANIMATION

This is the most important visual component. Implement it exactly as specified.

### File: `src/components/ParticleCanvas.jsx`

**Concept:** Autonomous agents (dots) moving on the canvas with simple rules,
connecting to nearby agents with thin lines — a live visual metaphor for ALife.

**Implementation spec:**

```js
// ParticleCanvas.jsx
// - Full-bleed canvas behind hero content
// - 80 particles on desktop, 40 on mobile (detect via window.innerWidth)
// - Each particle has: x, y, vx, vy, radius (2px), opacity
// - Particle color: #5c946e (Sea Green) at 60% opacity
// - Connection line color: #5c946e at 20% opacity
// - Connection drawn when distance between two particles < 120px
// - Each particle bounces off canvas edges
// - Mouse repulsion: particles within 100px of cursor are gently pushed away
// - Speed: very slow (vx and vy between -0.4 and 0.4)
// - On resize: reinitialize particles to new canvas dimensions
// - Use requestAnimationFrame for animation loop
// - Cleanup on unmount (cancelAnimationFrame)
// - Canvas sits at position absolute, inset-0, z-index 0
// - Hero content sits at z-index 10 above canvas
// - Canvas opacity: 0.7 in dark mode, 0.4 in light mode
```

The canvas must be fully responsive and respect the user's theme.

---

## SECTION 7: DARK / LIGHT MODE

### Implementation

```js
// src/hooks/useTheme.js
// - Store preference in localStorage under key 'vinoth-theme'
// - Default: 'dark'
// - Toggle between 'dark' and 'light'
// - Apply class 'dark' on the <html> element for Tailwind dark: variants
// - Export: { theme, toggleTheme }
```

```js
// tailwind.config.js
// darkMode: 'class'  ← required
```

All color classes must use Tailwind dark: variants:

```
bg-white dark:bg-black
bg-alabaster dark:bg-prussian
text-black dark:text-white
```

The Sea Green accent (#5c946e) stays the same in both modes.

### ThemeToggle Component

- Moon icon (Lucide) in dark mode
- Sun icon (Lucide) in light mode
- Clicking toggles and persists to localStorage
- Smooth transition: `transition-colors duration-300` on body and all bg elements

---

## SECTION 8: ANIMATIONS

Use Framer Motion for all scroll-triggered animations.

**Entry animations:**

- All sections: fade-in + slide-up (y: 30 → 0, opacity: 0 → 1)
- Trigger: when element enters viewport (use Framer `whileInView`)
- Duration: 0.5s, ease: "easeOut"
- Stagger children: 0.1s delay between siblings in a grid

**Hero text:**

- Name letters animate in sequentially with staggerChildren: 0.05
- Subtitle fades in after name completes

**Project cards:**

- Scale on hover: 1.02
- Box shadow appears on hover (Sea Green, 20% opacity)

**Particle canvas:**

- Does not use Framer Motion — it's a raw Canvas animation

**Respect prefers-reduced-motion:**

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// If true: skip animations, render elements at final state immediately
```

---

## SECTION 9: BACKEND — FastAPI

### File: `backend/main.py`

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://Vinoth-ai-20.github.io"],
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

@app.get("/")
def root():
    return {"status": "Vinoth Murugan API — online"}

@app.post("/api/contact")
def contact(form: ContactForm):
    try:
        smtp_user = os.environ["GMAIL_USER"]
        smtp_pass = os.environ["GMAIL_APP_PASSWORD"]

        msg = MIMEMultipart()
        msg["From"] = smtp_user
        msg["To"] = "vinoth.ac.in@gmail.com"
        msg["Subject"] = f"Portfolio Contact: {form.subject} — from {form.name}"

        body = f"""
        Name: {form.name}
        Email: {form.email}
        Subject: {form.subject}

        Message:
        {form.message}
        """
        msg.attach(MIMEText(body, "plain"))

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(smtp_user, smtp_pass)
            server.sendmail(smtp_user, "vinoth.ac.in@gmail.com", msg.as_string())

        return {"success": True, "message": "Message sent."}
    except Exception as e:
        return {"success": False, "message": str(e)}
```

### File: `backend/requirements.txt`

```
fastapi==0.111.0
uvicorn[standard]==0.30.1
python-multipart==0.0.9
email-validator==2.1.1
```

### File: `backend/render.yaml`

```yaml
services:
  - type: web
    name: vinoth-portfolio-api
    env: python
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: GMAIL_USER
        sync: false
      - key: GMAIL_APP_PASSWORD
        sync: false
```

---

## SECTION 10: GITHUB PAGES DEPLOYMENT

### File: `frontend/vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // ← REQUIRED for GitHub Pages subdirectory
})
```

### File: `frontend/package.json` (relevant parts)

```json
{
  "name": "vinoth-portfolio",
  "homepage": "https://Vinoth-ai-20.github.io/portfolio",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.24.0",
    "framer-motion": "^11.2.10",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.19",
    "gh-pages": "^6.1.1",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.4",
    "vite": "^5.3.1"
  }
}
```

### File: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install and Build
        run: |
          cd frontend
          npm install
          npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: frontend/dist
```

---

## SECTION 11: TAILWIND CONFIG

### File: `frontend/tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black:     "#000000",
        prussian:  "#14213d",
        seagreen:  "#5c946e",
        alabaster: "#e5e5e5",
        white:     "#ffffff",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body:    ["Inter", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
```

---

## SECTION 12: GOOGLE FONTS IMPORT

Add to `frontend/index.html` inside `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

---

## SECTION 13: App.jsx STRUCTURE

```jsx
// App.jsx
import { HashRouter as Router } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ALifeFeature from './components/ALifeFeature'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Research from './components/Research'
import Creative from './components/Creative'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme } = useTheme()

  return (
    <div className={theme}>  {/* applies 'dark' class for Tailwind */}
      <div className="bg-white dark:bg-black text-black dark:text-white
                      font-body transition-colors duration-300 min-h-screen">
        <Router>
          <Navbar />
          <main>
            <Hero />
            <About />
            <ALifeFeature />
            <Projects />
            <Skills />
            <Research />
            <Creative />
            <Contact />
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  )
}
```

---

## SECTION 14: BUILD ORDER

Execute in this exact sequence. Verify each step before proceeding.

```
STEP 1:  Initialize monorepo: mkdir vinoth-portfolio, cd vinoth-portfolio
STEP 2:  Create frontend/ with Vite: npm create vite@latest frontend -- --template react
STEP 3:  Install all frontend dependencies (see package.json above)
STEP 4:  Configure tailwind.config.js and postcss.config.js
STEP 5:  Add Google Fonts to index.html
STEP 6:  Set base: '/portfolio/' in vite.config.js
STEP 7:  Create useTheme.js hook
STEP 8:  Create src/data/projects.js and skills.js
STEP 9:  Build ParticleCanvas.jsx (canvas animation)
STEP 10: Build ThemeToggle.jsx
STEP 11: Build Navbar.jsx
STEP 12: Build Hero.jsx (uses ParticleCanvas)
STEP 13: Build About.jsx
STEP 14: Build ALifeFeature.jsx (the primary section — do this carefully)
STEP 15: Build Projects.jsx
STEP 16: Build Skills.jsx
STEP 17: Build Research.jsx
STEP 18: Build Creative.jsx
STEP 19: Build Contact.jsx
STEP 20: Build Footer.jsx
STEP 21: Wire everything in App.jsx
STEP 22: Test dark/light mode toggle works
STEP 23: Test all scroll anchors work
STEP 24: Test contact form validation (form only, no backend yet)
STEP 25: Create backend/ with FastAPI files
STEP 26: Test backend locally: uvicorn main:app --reload
STEP 27: Create .github/workflows/deploy.yml
STEP 28: Verify npm run build runs without errors
STEP 29: Run npm run deploy to push to gh-pages branch
STEP 30: Commit everything to main branch
```

---

## SECTION 15: QUALITY CHECKLIST

Before declaring the build complete, verify every item:

- [ ] Dark mode is the default on first load
- [ ] Light mode toggle persists across page refresh (localStorage)
- [ ] Particle canvas renders in both modes (different opacity)
- [ ] All 8 nav links scroll to correct sections
- [ ] Hamburger menu works on mobile (< 768px)
- [ ] ALifeFeature section is visually the most prominent section after Hero
- [ ] All project cards show correct status badges and stack tags
- [ ] Contact form validates required fields before submit
- [ ] ORCID link opens in new tab
- [ ] GitHub link in hero opens in new tab
- [ ] `npm run build` produces no errors or warnings
- [ ] `vite preview` renders correctly with base path /portfolio/
- [ ] Mobile layout works at 375px width
- [ ] All fonts load correctly (Space Grotesk, Inter, JetBrains Mono)
- [ ] Framer Motion animations trigger on scroll (not on page load)
- [ ] `prefers-reduced-motion` is respected

---

## SECTION 16: ENVIRONMENT VARIABLES

### Frontend — create `frontend/.env.production`

```
VITE_API_URL=https://[your-render-service-name].onrender.com
```

### Frontend — create `frontend/.env.development`

```
VITE_API_URL=http://localhost:8000
```

Use `import.meta.env.VITE_API_URL` in Contact.jsx for the fetch URL.

### Backend — set in Render.com dashboard (not in code)

```
GMAIL_USER=vinoth.ac.in@gmail.com
GMAIL_APP_PASSWORD=[16-char Google App Password]
```

---

## SECTION 17: AFTER BUILD — SETUP INSTRUCTIONS FOR OWNER

Include a clear README.md at the repo root with these steps:

```markdown
## Setup Steps

### 1. Create GitHub repository
Name it exactly: portfolio
Push this code to main branch

### 2. Enable GitHub Pages
Repository Settings → Pages → Source: Deploy from branch → gh-pages branch

### 3. Deploy frontend
cd frontend && npm install && npm run deploy

### 4. Deploy backend to Render
- Create free account at render.com
- New Web Service → connect this GitHub repo → Root Directory: backend
- Environment variables: GMAIL_USER and GMAIL_APP_PASSWORD
- Update frontend/.env.production with your Render service URL

### 5. Enable GitHub App Password for Gmail
Google Account → Security → 2-Step Verification → App Passwords
Generate one for "Mail" → copy the 16-character password to Render env vars
```

---

*End of build specification.*
*All content, architecture, design decisions, and deployment configuration are provided.*
*Execute Step by Step. Verify before proceeding.*
