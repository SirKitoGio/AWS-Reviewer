# Project Requirement Document (PRD): AWS CLF-C02 Reviewer

## 1. Project Overview
The **AWS CCP Reviewer** is an interactive web-based study tool designed to help users pass the AWS Certified Cloud Practitioner (CLF-C02) exam. It focuses on four key domains through visual diagrams, structured study material, and a practice quiz engine.

## 2. Current Status
- **Technology:** Vanilla JavaScript (ES Modules), HTML5, and CSS3.
- **Features:** 
    - Home dashboard with domain progress.
    - Study Mode with expandable sections and flashcards.
    - Quiz Engine with shuffled questions and immediate feedback.
    - Visual SVG Diagrams for complex concepts.
- **Issue:** Content is currently "hard-coded" in large data files, making it difficult to scale or add deep-dive lesson plans for specific sub-topics.

## 3. File Structure: Current vs. Proposed

### Current Structure (Monolithic)
```text
/
├── index.html          # Main Entry
├── questions.js        # ~2500 lines of questions (One big file)
├── reviewer.html       # Draft/React version (Currently unused)
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        ├── app.js      # Main App Logic (Handles everything)
        └── data.js     # Domain content & SVG diagrams (One big file)
```

### Proposed Structure (Modular & Scalable)
To allow for "learning each domain" in depth, we should move toward a modular structure where each domain has its own folder for notes, specific diagrams, and lessons.

```text
/
├── index.html
├── assets/
│   ├── js/
│   │   ├── core/
│   │   │   ├── app.js      # App engine (Routing/State)
│   │   │   └── quiz.js     # Isolated Quiz Logic
│   │   ├── data/
│   │   │   ├── index.js    # Aggregates all domains
│   │   │   ├── domain1/    # Cloud Concepts
│   │   │   │   ├── lessons.js
│   │   │   │   ├── diagrams.js
│   │   │   │   └── notes.md
│   │   │   ├── domain2/    # Security
│   │   │   └── ... (etc)
│   │   └── questions/
│   │       ├── domain1.js  # Segmented questions
│   │       └── ...
│   └── css/
```

## 4. Learning & Presentation Strategy
We want the app to transition from a "reviewer" to a "learning platform."

### Phase 1: Modularization
- Split `questions.js` by domain to reduce file size and improve loading.
- Move SVG diagrams into separate modules so they can be reused in "Lesson" views.

### Phase 2: Lesson Plan Integration
- **Concept Deep-Dives:** Instead of just definitions, add "Deep Dive" buttons that show detailed notes (the notes you will provide).
- **Presentation Mode:** A "Slide-style" view for studying where one concept is presented at a time with its corresponding diagram.
- **Active Recall:** Integrate a Spaced Repetition System (SRS) for terms the user gets wrong in the quiz.

### Phase 3: Content Expansion
- **User Notes Input:** Create a dedicated `notes/` directory where you can drop `.txt` or `.md` files. We will build a parser to automatically turn these notes into "Study Cards" in the app.

## 5. Next Steps
1. **Input Notes:** User will provide study notes.
2. **Refactor Data:** I will help you move from the current `data.js` to the `domainX/` folder structure.
3. **Enhance Study Mode:** Implement the "Lesson Plan" view to present your notes effectively.
