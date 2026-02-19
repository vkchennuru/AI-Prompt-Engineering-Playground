// ── SHARED JS FOR ALL LEVEL PAGES ──────────────────────────────────────────────

let progress = JSON.parse(localStorage.getItem('pe_progress') || '{}');
const LEVELS_CONFIG = {
  total: 6,
  tabs: [5, 6, 5, 5, 6, 5]
};

function saveProgress(key, val) {
  progress[key] = val;
  localStorage.setItem('pe_progress', JSON.stringify(progress));
  updateProgressBar();
  updateNavProgress();
}

function updateProgressBar() {
  let done = 0;
  for (let l = 1; l <= 6; l++) {
    const tabs = LEVELS_CONFIG.tabs[l-1];
    for (let t = 0; t < tabs; t++) {
      if (progress[`l${l}_t${t}_done`]) done++;
    }
  }
  const total = LEVELS_CONFIG.tabs.reduce((a, b) => a + b, 0);
  const el = document.getElementById('progress-bar');
  if (el) el.style.width = (done / total * 100) + '%';
}

function updateNavProgress() {
  const el = document.getElementById('nav-progress-label');
  if (!el) return;
  let done = 0, total = 0;
  for (let l = 1; l <= 6; l++) {
    const tabs = LEVELS_CONFIG.tabs[l-1];
    total += tabs;
    for (let t = 0; t < tabs; t++) {
      if (progress[`l${l}_t${t}_done`]) done++;
    }
  }
  el.textContent = `${done}/${total} completed`;
}

function switchTab(levelId, tabIdx, btn) {
  saveProgress(`l${levelId}_t${tabIdx}_done`, true);
  document.querySelectorAll('.tab').forEach((b, i) => {
    b.classList.toggle('active', i === tabIdx);
  });
  document.querySelectorAll('.lesson-content').forEach((c, i) => {
    c.classList.toggle('active', i === tabIdx);
  });
  btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

// ── SIMULATED AI ──────────────────────────────────────────────────────────────
const AI_RESPONSES = {
  vague: [
    "AI can mean many things. Could you be more specific about what you want to know?",
    "That's a broad topic. Here's a general overview: Artificial intelligence simulates human intelligence...",
    "There's a lot to cover here. Which aspect interests you most?"
  ],
  specific: [
    "Here is a concise, 150-word answer addressing exactly what you asked with structured points...",
    "Based on your requirements, here's a targeted response in JSON format as requested:\n{\n  \"result\": \"...\",\n  \"details\": [\"point 1\", \"point 2\"]\n}",
    "Following your specifications, I've structured this as a numbered list with examples:\n1. First key point with example\n2. Second insight\n3. Practical recommendation"
  ],
  code: [
    "```python\ndef solution(n):\n    \"\"\"Solves the problem as specified.\"\"\"\n    if n <= 0:\n        raise ValueError('Input must be positive')\n    return sum(range(1, n+1))\n\n# Example: solution(10) = 55\n```",
    "Here's a clean implementation with error handling and docstrings as you specified..."
  ]
};

function simulateAI(prompt, type = 'auto') {
  const len = prompt.trim().length;
  const hasStructure = /json|list|format|words|bullet|table/i.test(prompt);
  const hasRole = /you are|act as|expert|specialist/i.test(prompt);
  const hasCot = /step by step|think|reason|explain/i.test(prompt);
  const hasCode = /code|function|class|python|javascript/i.test(prompt);
  if (len < 20) return AI_RESPONSES.vague[Math.floor(Math.random() * 3)];
  if (hasCode) return AI_RESPONSES.code[0];
  if (hasStructure || hasRole || hasCot) return AI_RESPONSES.specific[Math.floor(Math.random() * 3)];
  return "I understand your request. Here's a comprehensive response covering the key points you've asked about, with relevant context and examples to support the explanation.";
}

function scorePrompt(prompt) {
  let score = 0;
  const feedback = [];
  if (prompt.length > 30) { score += 20; } else { feedback.push("Add more detail and context."); }
  if (/\d+\s*(word|sentence|paragraph|bullet)/.test(prompt)) { score += 20; feedback.push("✓ Length/format specified"); }
  if (/you are|act as|expert|as a/.test(prompt.toLowerCase())) { score += 15; feedback.push("✓ Role assigned"); }
  if (/tone:|style:|format:|audience:/.test(prompt.toLowerCase()) || /formal|casual|professional|simple/.test(prompt.toLowerCase())) { score += 15; feedback.push("✓ Style/tone defined"); }
  if (/step|first|then|finally|example/.test(prompt.toLowerCase())) { score += 15; feedback.push("✓ Structure requested"); }
  if (prompt.split('\n').length > 2 || prompt.includes(':')) { score += 15; feedback.push("✓ Well structured"); }
  return { score: Math.min(100, score), feedback };
}

function answerQuiz(qid, selectedIdx, correctIdx, explanation) {
  const container = document.getElementById(qid);
  if (!container || container.dataset.answered) return;
  container.dataset.answered = 'true';
  const opts = container.querySelectorAll('.quiz-opt');
  opts.forEach((opt, i) => {
    opt.disabled = true;
    if (i === correctIdx) opt.classList.add('correct');
    else if (i === selectedIdx) opt.classList.add('wrong');
  });
  const expl = document.getElementById(qid + '_ex');
  if (expl) { expl.textContent = explanation; expl.classList.add('show'); }
}

function togglePattern(head) {
  const body = head.nextElementSibling;
  const chevron = head.querySelector('.pattern-chevron');
  body.classList.toggle('open');
  chevron.style.transform = body.classList.contains('open') ? 'rotate(180deg)' : '';
}

function copyText(btn, text) {
  navigator.clipboard.writeText(text.trim()).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = 'Copy', 1500);
  }).catch(() => { btn.textContent = 'Copy'; });
}

function addParticles(count) {
  const pEl = document.getElementById('particles');
  if (!pEl) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.style.left = Math.random() * 100 + '%';
    s.style.animationDuration = (14 + Math.random() * 18) + 's';
    s.style.animationDelay = (Math.random() * 20) + 's';
    s.style.width = s.style.height = (2 + Math.random() * 4) + 'px';
    pEl.appendChild(s);
  }
}

// ── LEVEL-SPECIFIC FUNCTIONS ──────────────────────────────────────────────────

// Level 1
function runEx1() {
  const prompt = document.getElementById('ex1_input').value;
  const out = document.getElementById('ex1_output');
  out.textContent = '⏳ Simulating response...';
  out.classList.add('show');
  setTimeout(() => { out.textContent = simulateAI(prompt); }, 600);
}
function scoreEx1() {
  const prompt = document.getElementById('ex1_input').value;
  const { score, feedback } = scorePrompt(prompt);
  const fb = document.getElementById('ex1_feedback');
  fb.className = 'ex-feedback show ' + (score >= 60 ? 'good' : score >= 30 ? 'info' : 'bad');
  fb.innerHTML = `<strong>Score: ${score}/100</strong><br>${feedback.join(' · ') || 'Try adding length, format, audience, and tone.'}`;
}
function resetEx1() {
  document.getElementById('ex1_input').value = 'write something about climate change';
  document.getElementById('ex1_output').classList.remove('show');
  document.getElementById('ex1_feedback').classList.remove('show');
}
function runExStruct() {
  const prompt = document.getElementById('ex_struct').value;
  const out = document.getElementById('ex_struct_out');
  out.textContent = '⏳ Simulating...';
  out.classList.add('show');
  setTimeout(() => { out.textContent = simulateAI(prompt); }, 600);
}
function checkFix(n) {
  const prompt = document.getElementById(`fix${n}`).value;
  const { score, feedback } = scorePrompt(prompt);
  const fb = document.getElementById(`fix${n}_fb`);
  const models = [
    `Write a professional follow-up email to [NAME] from [COMPANY] regarding our meeting on [DATE]. Tone: formal but warm. Length: under 100 words. Include: appreciation for their time, one key takeaway, and a clear next step with a proposed date.`,
    `You are a machine learning instructor. Explain supervised learning to a software developer with no ML background. Use a real-world analogy and one simple Python pseudocode example. Keep it under 200 words.`
  ];
  fb.className = 'ex-feedback show ' + (score >= 50 ? 'good' : 'info');
  fb.innerHTML = `<strong>Your score: ${score}/100</strong><br>${feedback.join(' · ')}<br><br><strong>Model answer:</strong><br><em>${models[n-1]}</em>`;
}

// Level 2
function runCoT() {
  const prompt = document.getElementById('cot_input').value;
  const out = document.getElementById('cot_output');
  out.classList.add('show');
  const hasCoT = /step|reason|think|first|then|finally/i.test(prompt);
  out.textContent = hasCoT
    ? 'Step 1: Identify the speed: 60 mph\nStep 2: Identify the time: 2.5 hours\nStep 3: Apply formula: distance = speed × time\nStep 4: Calculate: 60 × 2.5 = 150 miles\nAnswer: The train travels 150 miles.'
    : "The train travels 150 miles. (Try adding \"Let's think step by step\" to see the reasoning!)";
}
function runRole() {
  const prompt = document.getElementById('role_input').value;
  const out = document.getElementById('role_output');
  out.classList.add('show');
  out.textContent = simulateAI(prompt, 'role');
}
function fillRoleExample() {
  document.getElementById('role_input').value = `You are a senior nutritionist with 15 years of clinical experience.\nYour communication style is clear, evidence-based, and encouraging.\nYour audience is busy working parents.\n\nExplain the most important dietary change they can make in 5 minutes a day. Use practical, actionable advice. No jargon. Max 150 words.`;
}
function runCombo() {
  const prompt = document.getElementById('combo_input').value;
  const out = document.getElementById('combo_output');
  out.classList.add('show');
  out.textContent = simulateAI(prompt);
}
function scoreCombo() {
  const prompt = document.getElementById('combo_input').value;
  const { score, feedback } = scorePrompt(prompt);
  const hasRole = /you are|act as/.test(prompt.toLowerCase());
  const hasCoT = /step|think|reason/.test(prompt.toLowerCase());
  const hasFormat = /json|list|table|format|markdown/.test(prompt.toLowerCase());
  const fb = document.getElementById('combo_feedback');
  const fullScore = score + (hasRole ? 10 : 0) + (hasCoT ? 10 : 0) + (hasFormat ? 10 : 0);
  fb.className = 'ex-feedback show ' + (fullScore >= 70 ? 'good' : 'info');
  fb.innerHTML = `<strong>Score: ${Math.min(100, fullScore)}/100</strong><br>
    ${hasRole ? '✓' : '✗'} Role assigned &nbsp; ${hasCoT ? '✓' : '✗'} Chain-of-thought &nbsp; ${hasFormat ? '✓' : '✗'} Format specified`;
}

// Level 3
function showChainStep2() {
  const p = document.getElementById('chain1').value;
  const out = document.getElementById('chain1_out');
  out.classList.add('show');
  out.textContent = p.length > 10 ? 'Chain output: [Structured outline generated from Prompt 1...]\n\n• Section 1: Introduction\n• Section 2: Main points\n• Section 3: Conclusion\n\nNow use this output as context for Prompt 2 ↓' : 'Please enter a prompt first.';
  if (p.length > 10) document.getElementById('chain2_section').style.display = '';
}
function showChainStep3() {
  const p = document.getElementById('chain2').value;
  const out = document.getElementById('chain2_out');
  out.classList.add('show');
  out.textContent = p.length > 10
    ? "Chain output: [Refined content building on Prompt 1's output...]\n\nExcellent! You've completed a 2-step prompt chain. In production, you can chain as many steps as needed."
    : 'Please enter Prompt 2 first.';
}
function runMeta() {
  const prompt = document.getElementById('meta_input').value;
  const out = document.getElementById('meta_output');
  out.classList.add('show');
  out.textContent = `[Simulated Meta-Prompt Output]\n\nPrompt Variant 1 (Zero-shot): \n"Explain [topic] in simple terms."\n\nPrompt Variant 2 (Role-based):\n"You are an expert in [topic]. Explain it to a beginner with 3 key insights."\n\nPrompt Variant 3 (Structured):\n"Explain [topic]. Format: 1) Definition 2) Real-world example 3) Common misconception 4) Why it matters."`;
}
function fillMetaExample() {
  document.getElementById('meta_input').value = `Create 3 different prompts for summarizing long articles.\nEach should use a different technique:\n1. Direct instruction\n2. Role-based approach\n3. Template-based with structured output\n\nFor each prompt, show the template and explain when to use it.`;
}
function runPatternEx() {
  const prompt = document.getElementById('pattern_ex').value;
  const { score, feedback } = scorePrompt(prompt);
  const out = document.getElementById('pattern_ex_out');
  const fb = document.getElementById('pattern_ex_fb');
  out.classList.add('show');
  out.textContent = simulateAI(prompt);
  fb.className = 'ex-feedback show ' + (score >= 60 ? 'good' : 'info');
  fb.innerHTML = `<strong>Prompt Quality: ${score}/100</strong> ${score >= 60 ? '✓ Pattern well applied!' : '— Add more structure from the pattern templates.'}`;
}

// Level 4
function countTokens() {
  const text = document.getElementById('token_input').value;
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const tokens = Math.ceil(chars / 4);
  const cost = (tokens / 1000 * 0.005).toFixed(4);
  document.getElementById('tc_chars').textContent = chars.toLocaleString();
  document.getElementById('tc_words').textContent = words.toLocaleString();
  document.getElementById('tc_tokens').textContent = tokens.toLocaleString();
  document.getElementById('tc_cost').textContent = '$' + cost;
}
function updateOptStats() {
  const inText = document.getElementById('opt_in')?.value || '';
  const outText = document.getElementById('opt_out')?.value || '';
  const inT = Math.ceil(inText.length / 4);
  const outT = Math.ceil(outText.length / 4);
  const saved = inT > 0 ? Math.round((1 - outT / inT) * 100) : 0;
  if (document.getElementById('opt_in_t')) document.getElementById('opt_in_t').textContent = inT;
  if (document.getElementById('opt_out_t')) document.getElementById('opt_out_t').textContent = outT;
  if (document.getElementById('opt_saved')) document.getElementById('opt_saved').textContent = saved + '%';
}
function runAB() {
  const a = document.getElementById('ab_a').value;
  const b = document.getElementById('ab_b').value;
  const outA = document.getElementById('ab_a_out');
  const outB = document.getElementById('ab_b_out');
  outA.style.opacity = outB.style.opacity = '1';
  outA.textContent = outB.textContent = '⏳ Generating...';
  setTimeout(() => {
    outA.textContent = a.length > 5 ? simulateAI(a) : 'Enter Prompt A first.';
    outB.textContent = b.length > 5 ? simulateAI(b) : 'Enter Prompt B first.';
  }, 700);
}

// Level 5
function runDomainEx() {
  const p = document.getElementById('domain_ex').value;
  const out = document.getElementById('domain_ex_out');
  out.classList.add('show');
  out.textContent = simulateAI(p);
}
function scoreDomain() {
  const p = document.getElementById('domain_ex').value;
  const { score, feedback } = scorePrompt(p);
  const fb = document.getElementById('domain_ex_fb');
  fb.className = 'ex-feedback show ' + (score >= 60 ? 'good' : 'info');
  fb.innerHTML = `<strong>Score: ${score}/100</strong><br>${feedback.join(' · ')}`;
}

// Level 6
function claimBadge() {
  const btn = event.target;
  btn.textContent = '🎉 Congratulations, Prompt Engineer!';
  btn.style.background = 'linear-gradient(135deg,#69f0ae,#ffd700)';
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
  addParticles(8);
  updateProgressBar();
  updateNavProgress();
});
