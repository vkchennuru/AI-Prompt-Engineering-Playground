# 🧠 AI Prompt Engineering Playground

> **A free, interactive, open-source educational resource for learning AI Prompt Engineering — from beginner to expert.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OER](https://img.shields.io/badge/Type-Open%20Educational%20Resource-blue)](https://en.wikipedia.org/wiki/Open_educational_resources)
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen)](https://YOUR-USERNAME.github.io/prompt-engineering-playground/)

---

## 🌐 Live Demo

**👉 [Open the Playground](https://YOUR-USERNAME.github.io/prompt-engineering-playground/)**

No sign-up required. No cost. Works in any modern browser.

---

## 📖 About

The **AI Prompt Engineering Playground** is a self-contained, browser-based interactive learning tool. It guides learners through 6 progressive levels of prompt engineering — from understanding how LLMs work, to building production-ready AI systems.

**Created by:** Venkata Krishnaveni Chennuru  
**Affiliation:** Faculty, Department of Computer Science, SKR & SKR Government College for Women (Autonomous), Kadapa, India  
**License:** MIT (Free to use, share, adapt)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 **6 Progressive Levels** | Structured learning from basics to mastery |
| 💡 **Interactive Exercises** | Real-time prompt testing with simulated AI responses |
| 📊 **Prompt Scoring** | Automated quality scoring with actionable feedback |
| 📋 **Pattern Library** | 20+ copyable prompt templates for real-world use |
| 🔢 **Token Counter** | Live token and cost estimation tool |
| 🔬 **A/B Testing Tool** | Compare two prompts side-by-side |
| ❓ **Knowledge Quizzes** | Check your understanding at each level |
| 💾 **Progress Tracking** | LocalStorage-based progress that persists between sessions |
| 📱 **Responsive Design** | Works on desktop, tablet, and mobile |
| 🆓 **Zero Dependencies** | Pure HTML/CSS/JS — no build tools, no frameworks needed |

---

## 📚 Curriculum

### Level 1 — Prompt Basics (8–10 hours)
- What is a prompt and how LLMs work
- Vague vs specific prompts (before/after comparisons)
- The anatomy of a great prompt (Role, Task, Context, Format, Length, Tone)
- **Exercise:** Fix broken prompts | **Quiz:** 3 knowledge questions

### Level 2 — Prompt Techniques (10–12 hours)
- Zero-shot, one-shot, and few-shot prompting
- Chain-of-Thought (CoT) prompting
- Role prompting
- Output format control (JSON, tables, lists, code)
- **Exercise:** Combine multiple techniques | **Quiz:** Knowledge check

### Level 3 — Prompt Patterns (12–15 hours)
- Expert Persona pattern
- Recipe pattern
- Reflection pattern
- Template Fill pattern
- Prompt chaining (multi-step workflows)
- Meta-prompting (AI writing prompts for you)
- **Exercise:** Pattern challenge | **Quiz:** Pattern identification

### Level 4 — Prompt Optimization (10–12 hours)
- Token efficiency and cost reduction
- A/B testing framework for prompts
- Debugging bad responses
- Token counter lab
- Prompt optimizer (compare verbose vs optimized)
- **Quiz:** Token and optimization concepts

### Level 5 — Domain Applications (15–18 hours)
- Code prompts (write functions, debug, code review)
- Content creation (blog posts, email copy)
- Data analysis (sentiment analysis, data extraction)
- Business templates (meeting summaries, reports)
- **Exercise:** Custom domain prompt | **Quiz:** Domain knowledge

### Level 6 — Mastery (15–18 hours)
- Prompt safety and ethics
- Prompt injection attacks and defense
- Production deployment best practices
- Evaluation frameworks and scorecards
- **Final Project:** Certificate of completion

---

## 🚀 How to Deploy (GitHub Pages — Free Hosting)

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **"New repository"** (green button)
3. Name it: `prompt-engineering-playground`
4. Set visibility to **Public**
5. Click **"Create repository"**

### Step 2: Upload Files

**Option A — Via GitHub Web Interface (easiest):**
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop ALL files from this folder:
   - `index.html`
   - `level1.html` through `level6.html`
   - `shared.css`
   - `shared.js`
   - `README.md`
3. Click **"Commit changes"**

**Option B — Via Git (command line):**
```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/prompt-engineering-playground.git

# Copy all files into the folder
# Then:
cd prompt-engineering-playground
git add .
git commit -m "Initial release: AI Prompt Engineering Playground"
git push origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages** (in the left sidebar)
2. Under **"Source"**, select **"Deploy from a branch"**
3. Choose **"main"** branch and **"/ (root)"** folder
4. Click **Save**
5. Wait 1–2 minutes, then visit:  
   `https://YOUR-USERNAME.github.io/prompt-engineering-playground/`

### Step 4: Update the README Links

After deployment, update the links in this README:
- Replace `YOUR-USERNAME` with your actual GitHub username
- Update the **Live Demo** badge URL

---

## 🗂️ File Structure

```
prompt-engineering-playground/
│
├── index.html          # Landing page with all 6 level cards
├── level1.html         # Level 1: Prompt Basics
├── level2.html         # Level 2: Prompt Techniques
├── level3.html         # Level 3: Prompt Patterns
├── level4.html         # Level 4: Prompt Optimization
├── level5.html         # Level 5: Domain Applications
├── level6.html         # Level 6: Mastery
├── shared.css          # Shared styles for all level pages
├── shared.js           # Shared JavaScript (AI simulation, progress, scoring)
└── README.md           # This file
```

**Total size:** ~150KB (no images or external assets required beyond Google Fonts)

---

## 🛠️ Customization

### Changing Colors Per Level

Each level page has a color variable block at the top of its `<style>` tag. Simply change the hex color:

```css
/* In level1.html */
.level-hero h1 { background: linear-gradient(135deg, #fff 30%, #00bfff); ... }
```

### Adding New Content

To add a new tab to any level:

1. Add a new `<button class="tab">` in the `.tabs` div
2. Add a corresponding `<div class="lesson-content">` with your content
3. Update the `LEVELS_CONFIG.tabs` array in `shared.js` to reflect the new tab count

### Updating the Prompt Scoring Logic

Edit the `scorePrompt()` function in `shared.js` to adjust scoring criteria.

---

## 📄 License

```
MIT License

Copyright (c) 2025 Venkata Krishnaveni Chennuru

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to:
- Add new exercises or content
- Fix bugs or improve the UI
- Translate content to another language
- Add a new level or topic

Please open an **Issue** or submit a **Pull Request**.

---

## 🌍 Open Educational Resource (OER)

This project is an **Open Educational Resource** — it is freely available for anyone to:
- **Use** for learning or teaching
- **Adapt** to their local context or language
- **Share** with students, colleagues, or communities worldwide

We believe quality AI education should be accessible to everyone, everywhere.

---

## 📬 Contact

**Venkata Krishnaveni Chennuru**  
Faculty, Department of Computer Science  
SKR & SKR Government College for Women (Autonomous)  
Kadapa, Andhra Pradesh, India

---

*Built with ❤️ for learners worldwide · MIT Licensed · Free forever*
