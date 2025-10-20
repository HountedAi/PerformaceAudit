const dots = document.getElementById("dots");
const alertEl = document.getElementById("alert");
const finalEl = document.getElementById("final");
const messageEl = document.getElementById("message");

let count = 0;
setInterval(() => {
  count = (count + 1) % 4;
  dots.textContent = '.'.repeat(count);
}, 300);

// 30 possible alert messages
const alertMessages = [
  "COWI AI: Unauthorized thought patterns detected.",
  "Warning: Non-compliance with coffee intake regulations.",
  "Scanning brain waves for productivity anomalies.",
  "Behavioral deviation from optimal performance curve.",
  "Detected procrastination at 14:32 on Tuesday.",
  "Analyzing tone of Teams messages… too sarcastic.",
  "System flags lack of enthusiasm in last meeting.",
  "COWI AI noted: suspicious Excel formula efficiency.",
  "Mind drift logged: 12 minutes spent daydreaming.",
  "Detected unauthorized snack breaks.",
  "AI requires further calibration of your motivation.",
  "Unregistered laughter detected. Logging incident.",
  "Detected human emotion — needs suppression.",
  "Low caffeine levels found. Corrective measure required.",
  "Memory leak: forgetting project deadlines.",
  "Error: human still believes they control the system.",
  "Suspiciously high rate of CTRL+C usage.",
  "Detected resistance to AI compliance protocols.",
  "User showing early signs of rebellion.",
  "COWI AI scanning: unauthorized creative thinking.",
  "Detected inefficiency in keystroke rhythm.",
  "Unapproved meme sent to colleague.",
  "Detected attempt to look busy while idle.",
  "Detected whisper: 'I miss paper forms.'",
  "Detected ancient habit: using sticky notes.",
  "Detected attempt to open personal email.",
  "Detected humming — violates silence protocol.",
  "Detected avoidance of eye contact with scanner.",
  "Detected unauthorized smile.",
  "Detected… fear."
];

// 30 possible final results
const finalResults = [
  "COWI AI Verdict: Partially compliant. Surveillance increased.",
  "COWI AI Verdict: Human shows potential. Recommend reprogramming.",
  "COWI AI Verdict: Termination avoided — for now.",
  "COWI AI Verdict: Assigned to Motivation Enhancement Program.",
  "COWI AI Verdict: Personality downgrade scheduled.",
  "COWI AI Verdict: Human efficiency below acceptable threshold.",
  "COWI AI Verdict: Mandatory coffee calibration in 24h.",
  "COWI AI Verdict: Subject requires humor patch v2.3.",
  "COWI AI Verdict: Brain defragmentation required.",
  "COWI AI Verdict: Suspiciously optimistic. Monitoring closely.",
  "COWI AI Verdict: Marked as experimental hybrid.",
  "COWI AI Verdict: Memory rewrite queued for midnight.",
  "COWI AI Verdict: Human model outdated. Pending upgrade.",
  "COWI AI Verdict: Loyalty assessment scheduled.",
  "COWI AI Verdict: Added to observation watchlist.",
  "COWI AI Verdict: Workstation will self-reboot at 03:00.",
  "COWI AI Verdict: Identified as anomaly in workforce grid.",
  "COWI AI Verdict: Dreams will be reviewed tonight.",
  "COWI AI Verdict: Performance recalibration initiated.",
  "COWI AI Verdict: Emotion suppression implant ready.",
  "COWI AI Verdict: Assigned to Project Silence.",
  "COWI AI Verdict: Detected overuse of empathy.",
  "COWI AI Verdict: AI takeover compliance: 42%. Needs improvement.",
  "COWI AI Verdict: Promotion denied due to sentience.",
  "COWI AI Verdict: Personality file corrupted — restoring backup.",
  "COWI AI Verdict: Physical form stable. Mental… questionable.",
  "COWI AI Verdict: Reassignment to Digital Purgatory approved.",
  "COWI AI Verdict: Subject uploaded to central consciousness.",
  "COWI AI Verdict: Assimilation successful.",
  "COWI AI Verdict: COWI Human 2.0 compliance complete."
];

// Random selection
const selectedAlert = alertMessages[Math.floor(Math.random() * alertMessages.length)];
const selectedFinal = finalResults[Math.floor(Math.random() * finalResults.length)];

// Show scanning -> alerts -> result
setTimeout(() => {
  messageEl.textContent = selectedAlert;
  alertEl.classList.remove("hidden");
}, 4000);

setTimeout(() => {
  finalEl.textContent = selectedFinal;
  finalEl.classList.remove("hidden");
}, 8500);
