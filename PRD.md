# Project Requirement Document (PRD): AWS CLF-C02 Reviewer v2.1

## 1. Project Overview
The **AWS CCP Reviewer** is an interactive, high-performance study platform designed to help users master the AWS Certified Cloud Practitioner (CLF-C02) exam. It provides a specialized environment where curriculum content (Notes, Diagrams, Questions) is modularized for targeted learning and rapid review.

## 2. Core Architecture & Design
- **Technology:** Vanilla JavaScript (ES Modules), HTML5 (Semantic), and Custom CSS.
- **Data Structure:** Modular architecture with content separated into Modules within Domains. Each domain is isolated into its own package (`assets/js/questions/domainX.js` and `assets/js/data/domainX/lessons.js`).
- **UI/UX Theme:** **Green and Soft Neutrals**. A restful, nature-inspired palette designed to reduce eye strain and promote focus.
    - **Primary:** Muted Sage / Moss Green (`#768A76`).
    - **Background:** Cream / Soft Neutral (`#F4F3EF`).
    - **Accent:** Earthy Browns / Soft Yellows (`#B8905B`).
- **Navigation:**
    - **Global:** Quick access to Home, Study, Tips, and Quiz.
    - **Study Sidebar:** A sticky sidebar listing all Domains and their underlying Modules for direct access.
    - **Sequential Progression:** Bottom navigation ("Next Module" / "Previous Module") allowing users to flow through the entire curriculum across domain boundaries.

## 3. Key Features
- **Module-by-Module Study:** Content is delivered in granular modules to prevent information overload. Each module includes focused descriptions, structured tables, and custom conceptual HTML.
- **Dual Quiz Engine:** Comprehensive 'Full Practice' quizzes vs. domain-specific sessions.
- **Visual Learning:** SVG diagrams integrated directly into the study flow, only appearing on the first module of a domain to maintain clarity.
- **Corporate Use Cases:** Real-world examples (e.g., Netflix, Airbnb) appearing at the conclusion of each domain.
- **Exam Tips:** A dedicated view for quick patterns and "who did what" API auditing rules.

## 4. Current File Structure
```text
/
├── index.html          # Entry point
├── PRD.md              # Project Requirements Document
├── assets/
│   ├── js/
│   │   ├── app.js      # Main Engine (Routing, Sidebar Logic, Sequential Rendering)
│   │   ├── questions/  # Question Modules (Domain-segmented)
│   │   │   ├── index.js
│   │   │   └── domain[1-4].js
│   │   └── data/       # Study Content Modules
│   │       ├── index.js
│   │       ├── diagrams.js
│   │       └── domain[1-4]/
│   │           └── lessons.js
│   └── css/            # "Green & Neutrals" Design System
```

## 5. Feature Roadmap

### Phase 2: Progress & Performance
- **Local Persistence:** Implement `localStorage` to save quiz scores and history.
- **Study Progress:** Track which modules have been completed in the sidebar.

### Phase 3: Advanced Learning Tools
- **Spaced Repetition System (SRS):** Re-surface concepts/questions the user frequently gets wrong.
- **Dynamic Content Injection:** Allow auto-generation of modules from external data files.

### Phase 4: Active Recall
- **Interactive Flashcards:** A dedicated mode to flip through key terms from the modules for quick recall.

## 6. Maintenance Guidelines
- **Color Consistency:** Always use `var(--primary)`, `var(--bg-main)`, and `var(--accent)` to maintain the restful theme. Avoid hardcoded hex colors in JS or CSS.
- **Module Hygiene:** Keep modules focused. If a module becomes too long, split it into parts (e.g., Module 10 Part A & B).
