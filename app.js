// ===============================
// PORTFOLIO NAVIGATION ENGINE
// ===============================

// Track current active item
let currentActive = null;

// ===============================
// UTIL: CLEAR ACTIVE STATE
// ===============================
function clearActive() {
  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.remove("active");
  });
}

// ===============================
// UTIL: SET ACTIVE ITEM
// ===============================
function setActive(id) {
  clearActive();
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

// ===============================
// MAIN RENDER ENGINE
// ===============================
function render(contentHTML) {
  const output = document.getElementById("output");

  // Safe replace content
  output.innerHTML = contentHTML;
}

// ===============================
// HOME
// ===============================
function loadHome() {
  setActive("nav-home");

  render(`
    <div class="panel">
      <div class="card">
        <div>Welcome</div>
        <div>Portfolio Overview</div>
      </div>
    </div>
  `);
}

// ===============================
// PROJECT LOADER (FUTURE PYODIDE READY)
// ===============================
function loadProject(projectId) {
  setActive(projectId);

  render(`
    <div class="panel" id="project-container">
      <div class="card">
        <div>Loading Project...</div>
      </div>
    </div>
  `);

  // Future hook for Pyodide or JS modules
  console.log("Load project:", projectId);
}

// ===============================
// PUBLICATION
// ===============================
function loadPublication() {
  setActive("nav-publication");

  render(`
    <div class="panel">
      <div class="card">
        <div>Publication Section</div>
      </div>
    </div>
  `);
}

// ===============================
// THESIS
// ===============================
function loadThesis() {
  setActive("nav-thesis");

  render(`
    <div class="panel">
      <div class="card">
        <div>MS CS Thesis</div>
      </div>
    </div>
  `);
}

// ===============================
// CERTIFICATIONS
// ===============================
function loadCert(type) {
  setActive(type);

  let content = "";

  if (type === "credly") {
    window.open("YOUR_CREDLY_URL", "_blank");
    return;
  }

  content = `
    <div class="panel">
      <div class="card">
        <div>Certification: ${type}</div>
      </div>
    </div>
  `;

  render(content);
}

// ===============================
// ACTIVITIES
// ===============================
function loadActivity(type) {
  setActive(type);

  render(`
    <div class="panel">
      <div class="card">
        <div>Activity: ${type}</div>
      </div>
    </div>
  `);
}

// ===============================
// CONTACT (CENTER SPECIAL CASE)
// ===============================
function loadContact() {
  setActive("nav-contact");

  render(`
    <div class="contact-center">
      <div class="contact-card">
        <div>Email</div>
        <div class="email-box">your@email.com</div>
        <button onclick="copyEmail()">Copy Email</button>
      </div>
    </div>
  `);
}

// ===============================
// COPY EMAIL
// ===============================
function copyEmail() {
  navigator.clipboard.writeText("your@email.com");

  alert("Email copied!");
}
