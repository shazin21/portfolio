# Shazin Ansari – AI Engineer Portfolio

A premium, production-grade personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and modern web standards.

Designed with an aesthetic inspired by Linear, Vercel, and modern AI research labs, establishing Shazin Ansari as a technically rigorous AI professional specializing in Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and AI Research.

---

## 🌟 Key Features

- **Dark Mode by Default**: Deep obsidian theme (`#090a0f`) with restrained electric cyan & indigo accents, glassmorphism, and a seamless light mode toggle.
- **Interactive AI System Topology**: Dynamic HTML5 Canvas rendering a neural attention and vector retrieval pipeline (responsive to cursor interaction, pauses off-screen for maximum performance).
- **Comprehensive Project Showcase**:
  - **DocuMind AI**: Intelligent Document QA (RAG, Sentence Transformers, FAISS, Groq API, FastAPI).
  - **Resume AI**: Semantic resume search & QA with LangSmith tracing.
  - **Detectify**: 92% accuracy KNN supervised classification with Django & MySQL.
  - **Mental Health Support App**: Modular Flask application (with clear non-clinical disclosures).
  - **Face Recognition Attendance System**: OpenCV, Haar Cascades, LBPH (~85% accuracy).
- **Interactive Architecture Flow Visualizer**: Step-by-step pipeline diagrams for every project with role descriptions and stage highlights.
- **Project Filtering**: Category filter tabs for instant exploration across Generative AI, Machine Learning, Computer Vision, and Web Systems.
- **Recruiter-Ready Resume System**:
  - Interactive modal preview.
  - One-click ATS-ready plain text copying.
  - Print-to-PDF (`window.print()`).
  - Download trigger.
- **Technical SEO & Lighthouse 95+ Optimization**:
  - JSON-LD Structured Data (`Person` & `WebSite` schemas).
  - Automated `sitemap.xml` and `robots.txt`.
  - OpenGraph & Twitter/X meta cards.
  - Semantic HTML5 hierarchy (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Optimized fonts using `next/font/google` (`Geist` and `Geist Mono`).

---

## 📁 Project Structure

```
shazin-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme tokens, custom scrollbars, and grid patterns
│   │   ├── icon.svg            # Custom vector neural favicon
│   │   ├── layout.tsx          # Root layout, fonts, SEO metadata, and JSON-LD
│   │   ├── not-found.tsx       # Custom 404 terminal page
│   │   ├── page.tsx            # Full portfolio single-page application
│   │   ├── robots.ts           # Dynamic robots.txt generation
│   │   └── sitemap.ts          # Dynamic sitemap.xml generation
│   ├── components/
│   │   ├── AboutSection.tsx    # Bio and 6 core competency cards
│   │   ├── ArchitectureDiagram.tsx # Interactive pipeline flow diagrams
│   │   ├── BackToTop.tsx       # Smooth floating back-to-top button
│   │   ├── ContactSection.tsx  # Direct inquiry form & social links
│   │   ├── EducationSection.tsx# Academic credentials (MES College / KTU)
│   │   ├── ExperienceSection.tsx # Keywords Studios & Amazon client engagement
│   │   ├── Footer.tsx          # Minimalist footer with build credits
│   │   ├── HeroNetworkCanvas.tsx # Interactive HTML5 neural network canvas
│   │   ├── HeroSection.tsx     # Hero banner, identity, badges, and primary CTAs
│   │   ├── Navbar.tsx          # Glassmorphic header with navigation & resume button
│   │   ├── ProjectCard.tsx     # Project card with quick architecture preview
│   │   ├── ProjectModal.tsx    # Deep-dive architecture and technical modal
│   │   ├── ProjectsSection.tsx # Filterable projects grid
│   │   ├── ResumeModal.tsx     # Full resume preview, copy, print, & download modal
│   │   ├── ScrollProgress.tsx  # Reading progress indicator
│   │   ├── SkillsSection.tsx   # Grouped categories (no deceptive percentage bars)
│   │   ├── SocialIcons.tsx     # Clean SVG vector icons (GitHub, LinkedIn)
│   │   └── ThemeToggle.tsx     # Dark/Light mode switcher with localStorage persistence
│   ├── data/
│   │   ├── portfolioData.ts    # Single source of truth for all content & projects
│   │   └── siteConfig.ts       # Canonical URLs, SEO tags, and schema generators
│   └── types/
│       └── portfolio.ts        # Strict TypeScript interfaces
├── public/                     # Static assets & downloadable files
└── package.json
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ Personalization & Placeholders

All content is centralized in **`src/data/portfolioData.ts`** and **`src/data/siteConfig.ts`** for effortless editing:

1. **Email, LinkedIn, & GitHub**:
   - Open `src/data/portfolioData.ts`
   - Update `personalInfo.email`, `personalInfo.linkedinUrl`, and `personalInfo.githubUrl`.
2. **Resume PDF File**:
   - Place your official `Shazin_Ansari_AI_Engineer_Resume.pdf` inside the `public/` directory.
   - The "Download Resume" buttons will directly serve this file.
3. **Contact Form Backend Integration**:
   - The contact form is currently wired to a client-side mailto handler with instant feedback.
   - To send emails silently via API:
     - **Option A (Formspree)**: Set `<form action="https://formspree.io/f/YOUR_ID" method="POST">` in `ContactSection.tsx`.
     - **Option B (Resend / Next.js Server Action)**: Add a simple Route Handler in `src/app/api/contact/route.ts` using the official `resend` SDK.
4. **Custom Domain**:
   - Update `siteConfig.url` in `src/data/siteConfig.ts` with your custom production URL (e.g. `https://shazinansari.com`).

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Shazin Ansari AI Engineer Portfolio"
   git branch -M main
   git remote add origin https://github.com/shazin-ansari/portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com/new).
3. Vercel automatically detects Next.js — click **Deploy**.
