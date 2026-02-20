# 🧠 AI Prompt Engineering Playground

> **A free, interactive, browser-based Open Educational Resource for learning AI Prompt Engineering — from complete beginner to production-ready expert.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OER](https://img.shields.io/badge/Type-Open%20Educational%20Resource-blue)](https://oercommons.org)
[![CC BY 4.0](https://img.shields.io/badge/Content-CC%20BY%204.0-green)](https://creativecommons.org/licenses/by/4.0/)
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen)](https://YOUR-USERNAME.github.io/prompt-engineering-playground/)

---

## 🌐 Live Demo

**👉 [Open the Playground](https://YOUR-USERNAME.github.io/prompt-engineering-playground/)**

No sign-up. No cost. No installation. Works in any modern browser.

---

## 📖 About

The **AI Prompt Engineering Playground** is a self-contained, browser-based interactive learning platform. It guides learners through 6 progressive levels of prompt engineering — from understanding how LLMs work, all the way to building safe, production-ready AI systems.

**Created by:** Venkata Krishnaveni Chennuru  
**Affiliation:** Faculty, Department of Computer Science, SKR & SKR Government College for Women (Autonomous), Kadapa, Andhra Pradesh, India  
**License:** MIT (code) · CC BY 4.0 (content)  
**OER Listed:** [OER Commons](https://oercommons.org) · [MERLOT](https://merlot.org)

---

## ✨ What's Inside

| Feature | Details |
|---|---|
| 🎯 **6 Progressive Levels** | Structured path from basics to mastery |
| 💡 **Interactive Exercises** | Real-time prompt testing with simulated AI responses and scoring |
| 📊 **Prompt Scoring Engine** | Automated quality scoring with specific, actionable feedback |
| 📋 **Pattern Library** | 20+ copyable, production-ready prompt templates |
| 🔢 **Token Counter Tool** | Live token counting with cost estimation across major models |
| 🔬 **A/B Testing Tool** | Compare two prompts side-by-side with structured analysis |
| ❓ **Knowledge Quizzes** | Comprehension checks at every level |
| 💾 **Progress Tracking** | Browser-based progress that persists across sessions |
| 📱 **Fully Responsive** | Designed for desktop, tablet, and mobile |
| 🆓 **Zero Dependencies** | Pure HTML, CSS, JS — no build tools, no frameworks, no server |

---

## 📚 Curriculum Overview

### Level 1 — Prompt Basics `8–10 hrs`
How LLMs work and why prompt quality matters. Vague vs specific comparisons with before/after analysis. The anatomy of a great prompt: Role, Task, Context, Format, Length, Tone. Universal prompt template with a structured exercise to fix broken prompts.

### Level 2 — Prompt Techniques `10–12 hrs`
Zero-shot, one-shot, and few-shot prompting. Chain-of-Thought (CoT) with trigger phrases. Role prompting with a reusable formula. Output format control: JSON, markdown tables, numbered lists, code blocks. Combination exercise to apply all techniques at once.

### Level 3 — Prompt Patterns `12–15 hrs`
Expert Persona, Recipe, Reflection, and Template Fill patterns. Prompt chaining for multi-step workflows. Meta-prompting — using AI to write better prompts for you. Pattern challenge exercise with a pattern identification quiz.

### Level 4 — Prompt Optimization `10–12 hrs`
Token efficiency techniques and cost reduction strategies. A/B testing framework for prompt comparison. Systematic debugging guide for bad AI responses. Live token counter lab with cost estimation. Prompt optimizer comparing verbose vs lean versions.

### Level 5 — Domain Applications `15–18 hrs`
Code prompts: write functions, debug errors, conduct code review. Content creation: blog posts, email copy, social media. Data analysis: sentiment analysis, structured extraction. Business templates: meeting summaries, status reports. Custom domain exercise to apply skills to your own field.

### Level 6 — Mastery `15–18 hrs`
Prompt safety and responsible AI ethics. Prompt injection attacks — what they are and how to defend against them. RAG (Retrieval-Augmented Generation) prompt patterns. Production deployment: versioning, monitoring, caching, fallbacks. Evaluation frameworks and automated testing pipelines. A reflective Journey Complete section celebrating what learners have built.

---

## 🚀 Deploy in 3 Steps (GitHub Pages — Free)

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it: `prompt-engineering-playground`
4. Set visibility to **Public**
5. Click **Create repository**

### Step 2 — Upload All Files

**Via GitHub web interface (easiest):**
1. In your new repo, click **"uploading an existing file"**
2. Drag and drop all files from this project:

```
index.html
level1.html  level2.html  level3.html
level4.html  level5.html  level6.html
shared.css   shared.js
README.md    LICENSE
CONTRIBUTING.md  CITATION.cff  CITATION.md
```

3. Write a commit message: `Initial release: AI Prompt Engineering Playground`
4. Click **Commit changes**

**Via Git CLI:**
```bash
git clone https://github.com/YOUR-USERNAME/prompt-engineering-playground.git
cd prompt-engineering-playground
# copy all project files into this folder, then:
git add .
git commit -m "Initial release: AI Prompt Engineering Playground"
git push origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Click **Save**
5. Wait 1–2 minutes, then visit:

```
https://YOUR-USERNAME.github.io/prompt-engineering-playground/
```

> **After deploying:** Replace `YOUR-USERNAME` in this README, the CITATION files, and the GitHub repo "About" description with your actual GitHub username.

---

## 🗂️ File Structure

```
prompt-engineering-playground/
│
├── index.html          ← Landing page — all 6 level cards with progress
├── level1.html         ← Level 1: Prompt Basics
├── level2.html         ← Level 2: Prompt Techniques
├── level3.html         ← Level 3: Prompt Patterns
├── level4.html         ← Level 4: Prompt Optimization
├── level5.html         ← Level 5: Domain Applications
├── level6.html         ← Level 6: Mastery + Journey Complete
├── shared.css          ← Shared styles for all level pages
├── shared.js           ← Shared JS: AI simulation, scoring, progress tracking
│
├── README.md           ← This file
├── LICENSE             ← MIT License
├── CONTRIBUTING.md     ← Contribution guide
├── CITATION.cff        ← Machine-readable citation (GitHub auto-detects)
└── CITATION.md         ← Human-readable citation in APA, MLA, BibTeX formats
```

**Total size:** ~160 KB — no images, no external assets beyond Google Fonts.

---

## 🛠️ Customisation Guide

### Change a Level's Color Theme

Each level page has a color override at the top of its `<style>` block. For example, to change Level 1's color from cyan to teal:

```css
/* In level1.html */
.level-hero h1 { background: linear-gradient(135deg, #fff 30%, #00bfa5); ... }
.tab.active { color: #00bfa5 !important; border-color: rgba(0,191,165,.4) !important; }
```

### Add a New Tab to Any Level

1. Add a `<button class="tab">` inside the `.tabs` div
2. Add a `<div class="lesson-content" id="lX_tN">` with your content
3. Update the tab count in the `LEVELS_CONFIG` object in `shared.js`

### Adjust the Prompt Scoring Logic

Edit the `scorePrompt()` function in `shared.js` to change how prompts are evaluated. Scoring checks for length, format keywords, role definition, tone language, and structural elements.

### Translate to Another Language

1. Fork the repository
2. Create a folder named with the language code (e.g., `te/` for Telugu, `hi/` for Hindi)
3. Copy and translate the HTML files — shared.css and shared.js do not need translation
4. Submit a Pull Request

---

## 🤝 Contributing

All contributions are welcome — from fixing a typo to adding an entire new level. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on bug reports, pull requests, translations, and code style.

---

## 📄 How to Cite

If you use this resource in teaching, research, or publications, please cite it. See [CITATION.md](CITATION.md) for APA, MLA, Chicago, and BibTeX formats.

The [CITATION.cff](CITATION.cff) file enables GitHub's **"Cite this repository"** button in the right sidebar automatically.

**Quick APA citation:**
> Chennuru, V. K. (2025). *AI Prompt Engineering Playground* [Open Educational Resource]. GitHub. https://github.com/YOUR-USERNAME/prompt-engineering-playground

---

## 🌍 Open Educational Resource

This project is a fully open OER. You are free to:

- **Use** it for self-study, classroom teaching, or professional training
- **Adapt** it to your local context, curriculum, or language
- **Share** it with students, colleagues, and communities worldwide — with attribution

Listed on OER Commons and MERLOT. We believe quality AI education should be accessible to every learner, everywhere, regardless of institution or income.

---

## 📬 Contact

**Venkata Krishnaveni Chennuru**  
Faculty, Department of Computer Science  
SKR & SKR Government College for Women (Autonomous)  
Kadapa, Andhra Pradesh, India

---

## 📜 License

Code: [MIT License](LICENSE) — free to use, modify, and distribute.  
Content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to share and adapt with attribution.

---

*Built with ❤️ for learners worldwide · Free forever · Share freely*
