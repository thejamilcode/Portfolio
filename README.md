<div align="center">

# Jamil Ahmed — Personal Portfolio

**Backend Developer · Django · WordPress · CSE Final Year**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-jamilahmed.dev-2ecc88?style=for-the-badge&logo=vercel&logoColor=white)](https://jamilahmed.dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thejamilcode-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thejamilcode/)
[![GitHub](https://img.shields.io/badge/GitHub-thejamilcode-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thejamilcode)

</div>

---

## 📌 About

A fully responsive, dark-themed personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. The site showcases my projects, technical skills, development process, and contact information — designed to leave a strong first impression with smooth animations, glassmorphism cards, and a unique periodic-element design system.

---

## ✨ Features

- 🧪 **Periodic Element Design System** — Unique interactive logo and section headings using chemistry-inspired element tiles
- 🎨 **Dark Glassmorphism UI** — Premium dark green palette with blur backdrops, glowing borders, and depth layers
- ⌨️ **Typewriter Hero** — Animated VS Code-style editor panel with syntax-highlighted code on load
- 💼 **Projects Showcase** — Cards with real laptop screen mockups, tech stack pills, and a case study modal overlay
- 📧 **Working Contact Form** — Sends real emails to Gmail via Nodemailer + Next.js API route
- 📞 **Cal.com Integration** — "Book a Call" button links directly to a live scheduling page
- 🔝 **Scroll Progress Bar** — Green animated bar tracks reading progress in the navbar
- 🧭 **Smooth Navigation** — Anchor-based single page with sticky navbar and floating back-to-top button
- 📱 **Fully Responsive** — Mobile hamburger menu, responsive grids, and adaptive typography
- ⚡ **Performance Optimised** — Static generation, minimal JS, and Lighthouse-ready

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v3 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Email** | Nodemailer + Gmail SMTP |
| **Fonts** | Space Grotesk · Inter · JetBrains Mono |
| **Deployment** | Vercel |

---

## 🗂️ Project Structure

```
jamil-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Email API endpoint
│   ├── globals.css            # Design tokens & global styles
│   ├── layout.tsx             # Root layout, fonts & SEO metadata
│   └── page.tsx               # Home page — assembles all sections
├── components/
│   ├── Navbar.tsx             # Sticky nav with progress bar & mobile menu
│   ├── Hero.tsx               # Typewriter code editor hero section
│   ├── About.tsx              # Bio, photo, social links, CV download
│   ├── WhyChooseMe.tsx        # Value proposition cards
│   ├── Services.tsx           # Service offerings
│   ├── TechStack.tsx          # Tabbed technology grid with icons
│   ├── Projects.tsx           # Project cards with mockups & case study modal
│   ├── Timeline.tsx           # Git-commit style career timeline
│   ├── Process.tsx            # Development process steps
│   ├── Certificates.tsx       # Certificates & education
│   ├── Testimonials.tsx       # Client testimonials
│   ├── Contact.tsx            # Contact form → Gmail via API
│   ├── Footer.tsx             # Footer with logo & copyright
│   ├── BackToTop.tsx          # Floating scroll-to-top button
│   ├── PeriodicElement.tsx    # Reusable element tile component
│   └── TechIcons.tsx          # SVG icon set for all tech logos
├── lib/
│   └── data.ts                # All site content — projects, stack, timeline, etc.
├── public/
│   ├── images/                # Project screenshots & profile photo
│   ├── cv.pdf                 # Downloadable CV
│   └── robots.txt
├── .env.local                 # Gmail SMTP credentials (not committed)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- A Gmail account with 2FA enabled

### 1. Clone the Repository

```bash
git clone https://github.com/thejamilcode/jamil-portfolio.git
cd jamil-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
GMAIL_USER=jamilcode56@gmail.com
GMAIL_APP_PASSWORD=your_16_char_gmail_app_password
```

> **Getting your App Password:**
> 1. Enable 2-Step Verification at [myaccount.google.com/security](https://myaccount.google.com/security)
> 2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
> 3. Create a new password for "Mail" → copy the 16-character code

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deployment on Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Add these **Environment Variables** in Vercel dashboard:
   - `GMAIL_USER` → `jamilcode56@gmail.com`
   - `GMAIL_APP_PASSWORD` → your Gmail App Password
4. Click **Deploy** — done! ✅

Every `git push` to `main` triggers an automatic re-deployment.

---

## 🎯 Featured Projects

| Project | Stack | Link |
|---|---|---|
| **SolveIt** — Problem-solving marketplace | React.js · Vite · Node.js · Express.js | [Live →](https://solveit-place.vercel.app/) |
| **Hotel & Event Management System** | PHP · JavaScript · MySQL | [GitHub →](https://github.com/thejamilcode/Event-Hall-Booking-System) |
| **Student Management System** | PHP · MySQL · HTML · CSS | [GitHub →](https://github.com/thejamilcode) |

---

## 📬 Contact

| Channel | Details |
|---|---|
| 📧 Email | [jamilcode56@gmail.com](mailto:jamilcode56@gmail.com) |
| 📞 Phone | [+880 1796 876066](tel:+8801796876066) |
| 💼 LinkedIn | [linkedin.com/in/thejamilcode](https://www.linkedin.com/in/thejamilcode/) |
| 📅 Book a Call | [app.cal.com/jamilcode](https://app.cal.com/jamilcode) |
| 📍 Location | Sylhet, Bangladesh |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ by **Jamil Ahmed** · Sylhet, Bangladesh · 2026

</div>
