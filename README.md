# ⚡ ShiftFlex — Project Foundation (Phase 1)

> **"Your Time. Your Rules. Your Shift."**  
> *(«Твій час. Твої правила. Твоя зміна.»)*

ShiftFlex is a high-performance web marketplace connecting students seeking flexible, verified part-time shifts with agile businesses that need immediate on-demand staff.

---

## 🚀 Features Implemented in Phase 1

1. **Brand Identity & Design System**:
   - Palette: Primary Dark (`#17231F`), Graphite (`#24332D`), Lime Accent (`#C8F169`), Light BG (`#F7F8F5`), White (`#FFFFFF`), Primary Text (`#202923`), Secondary Text (`#69736D`), Borders (`#E6EAE4`), Success (`#238653`), Warning (`#A76B13`), Error (`#C43D45`).
   - Inter typography scale configured in Tailwind CSS.
   - Reusable UI primitives: `Button`, `Badge`, `Card`, `Input`, `ThemeToggle`, `LanguageToggle`.
2. **Dual-Theme Engine (Dark & Light Mode)**:
   - Complete support across all components.
   - Visible theme switcher with smooth transitions.
   - Persistent theme storage (`localStorage`) with system preference auto-detection fallback.
   - High-contrast accessibility compliance.
3. **Multilingual Architecture (UA / EN)**:
   - **Ukrainian is the default language** (`uk`).
   - English available via instant switcher (`en`).
   - Full interface translation coverage (nav, hero, filters, badges, cards, forms, error boundary, footer).
   - Dynamic document `lang` tag update and persistence.
4. **Interactive Homepage Shell**:
   - Hero section with live shift teaser and dual student/employer CTAs.
   - **Live Shift Radar** with interactive filtering (All, Today, High Pay, Instant Payout).
   - **Smart Match AI preview** demonstrating student university timetable fitting.
   - Interactive Design System playground with live token copy, button states, badge variants, and Zod input validation demo.
5. **Security Foundation**:
   - Strict TypeScript configuration (`strict: true`).
   - Input validation schemas powered by **Zod**.
   - Zero sensitive tokens or passwords in `localStorage`.
   - Client API architecture configured for HttpOnly SameSite cookie sessions and Role-Based Access Control (RBAC).
   - Safe Error Boundary preventing application crashes.
6. **Testing & Code Quality**:
   - 11 unit & component tests in **Vitest** + **React Testing Library** + **JSDOM**.
   - Full TypeScript strict build verification (`tsc -b && vite build`).

---

## 🛠️ Tech Stack

- **Runtime & Tooling**: Node.js v22 LTS, Vite 8, TypeScript 7
- **Frontend Framework**: React 19
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 3.4 with custom design tokens, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Validation**: Zod 3.24
- **Testing**: Vitest 3, React Testing Library, JSDOM

---

## 📂 Project Structure

```text
ShiftFlex/
├── public/
│   └── favicon.svg           # Custom ShiftFlex Lime SVG logo
├── src/
│   ├── components/
│   │   ├── domain/           # ShiftCard, LiveRadarWidget, SmartMatchPreview, DesignSystemShowcase
│   │   ├── feedback/         # ErrorBoundary
│   │   ├── layout/           # Header, Footer
│   │   └── ui/               # Button, Badge, Card, Input, ThemeToggle, LanguageToggle
│   ├── config/               # Type-safe environment validation (env.ts)
│   ├── context/              # ThemeContext, LanguageContext
│   ├── hooks/                # useTheme, useLanguage, useReducedMotion
│   ├── layouts/              # MainLayout (with Skip link & radar ticker)
│   ├── locales/              # uk.ts (default), en.ts, index.ts
│   ├── pages/                # HomePage, NotFoundPage
│   ├── schemas/              # Zod validation schemas (auth, shifts)
│   ├── services/             # apiClient, shiftService
│   ├── tests/                # Unit & integration tests with Vitest
│   ├── types/                # TypeScript domain models (shift, user, theme, i18n)
│   ├── utils/                # cn (tailwind-merge), storage, security helpers
│   ├── App.tsx               # Root component with providers & routes
│   ├── index.css             # Tailwind directives & CSS custom properties
│   └── main.tsx              # React DOM mounting
├── .env.example              # Environment variables template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Design tokens & color system
├── tsconfig.app.json         # Strict TypeScript configuration with @/* alias
└── vite.config.ts            # Vite & Vitest configuration
```

---

## 💻 Getting Started

### Prerequisites

Ensure [Node.js](https://nodejs.org/) (v20+ or v22+) is installed.

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Run Tests

```bash
npm run test
```

### Run Production Build

```bash
npm run build
```
