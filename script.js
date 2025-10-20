// === 3D HUMAN-LIKE SCANNER (wireframe capsule) ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(innerWidth, innerHeight);
document.getElementById("scanner").appendChild(renderer.domElement);

const geometry = new THREE.CapsuleGeometry(0.8, 2.5, 10, 20);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff66, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
camera.position.z = 6;

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.01;
  mesh.rotation.x = 0.3;
  renderer.render(scene, camera);
}
animate();

// === AUDIT MESSAGES ===
const alertMessages = [
  "Analyzing caffeine saturation levels...",
  "Calibrating sarcasm detector...",
  "Evaluating meeting ghosting frequency...",
  "Scanning ergonomic posture deviations...",
  "Reading subconscious thoughts about Friday...",
  "Detecting unauthorized snack consumption...",
  "Mapping procrastination neural pathways...",
  "Retrieving unsent Teams messages...",
  "Inspecting code comments for despair...",
  "Quantifying eye-roll frequency...",
  "Decrypting motivational quote usage...",
  "Assessing printer rage incidents...",
  "Locating missing enthusiasm module...",
  "Measuring coffee-to-output ratio...",
  "Detecting silent judgment during meetings...",
  "Evaluating Halloween costume compliance...",
  "Testing empathy firmware version...",
  "Reviewing late-night email patterns...",
  "Tracking meme engagement index...",
  "Compiling excuses database...",
  "Scanning for sentient staplers...",
  "Detecting forbidden daydreams...",
  "Auditing lunch break extensions...",
  "Cross-checking with ghost in machine...",
  "Monitoring digital sighs per minute...",
  "Reconciling existential dread logs...",
  "Counting ignored calendar invites...",
  "Evaluating monitor staring contests...",
  "Reconstructing lost motivation packets...",
  "Checking humor buffer overflow..."
];

const finalResults = [
  "Status: Mildly haunted but functional.",
  "Outcome: 83% compatible with AI overlord protocol.",
  "Classification: Coffee-driven semi-autonomous unit.",
  "Verdict: Upgrade to Human 2.0 scheduled.",
  "Assessment: Emotion module unstable but entertaining.",
  "Alert: Keyboard possessed by sarcasm demon.",
  "Efficiency: Acceptable after sugar calibration.",
  "Behavioral drift: increasing near Fridays.",
  "Note: AI appreciates your sense of doom humor.",
  "Decision: Retain subject for further observation.",
  "Result: Personality matrix partially optimized.",
  "Flag: Over-creative energy detected.",
  "Summary: Organic processor overheating.",
  "Compliance: 58% – Pending neural patch.",
  "Final: Approved for Halloween operations.",
  "Judgment: Probation under AI supervision.",
  "Designation: Beta human variant detected.",
  "Conclusion: Reboot recommended, candy required.",
  "Condition: Contagious laughter virus present.",
  "Memo: Subject glows under stress—keep watching.",
  "Outcome: Ghost of productivity observed.",
  "Diagnosis: Terminal procrastination manageable.",
  "Update: Sleep mode disabled permanently.",
  "Finding: Brain fog density critical.",
  "Evaluation: Potential upgrade to spooky tier.",
  "AI remark: You amuse me, fragile carbon form.",
  "Level: Slightly corrupted yet lovable.",
  "Summary: Containment not required—for now.",
  "Verdict: Classified as Halloween-ready.",
  "Decision: Retention authorized until 31 Oct 2025."
];

// === SEQUENTIAL DISPLAY ===
const logEl = document.getElementById("log");
let index = 0;

function showNext() {
  if (index < 10) { // show 10 scanning messages
    const msg = alertMessages[Math.floor(Math.random() * alertMessages.length)];
    logEl.textContent = msg;
    logEl.style.opacity = 1;
    setTimeout(() => (logEl.style.opacity = 0), 600);
    index++;
    setTimeout(showNext, 800);
  } else {
    const finalMsg = finalResults[Math.floor(Math.random() * finalResults.length)];
    logEl.style.color = "#ff3333";
    logEl.textContent = finalMsg;
    logEl.style.opacity = 1;
  }
}

setTimeout(showNext, 2000);

// Resize handler
addEventListener("resize", () => {
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
});
