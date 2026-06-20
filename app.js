// ===============================
// LINKS
// ===============================
const LINKS = {
  github: "https://github.com/krishnakumar-krishnaswamy/krishnakumar-krishnaswamy.github.io",
  linkedin: "https://www.linkedin.com/in/krishnakumar-krishnaswamy-pmp-9a80a3129?trk=people-guest_people_search-card",
  credly: "https://www.credly.com/users/krishnakumar-krishnaswamy.95a45e03/badges/credly"
};

// ===============================
// STATE HELPERS
// ===============================
function clearActive() {
  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.remove("active");
  });
}

function setActive(id) {
  clearActive();
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

// ===============================
// RENDER
// ===============================
function render(html) {
  document.getElementById("output").innerHTML = html;
}

// ===============================
// HOME
// ===============================
function loadHome() {
  setActive("nav-home");

  render(`
    <div class="panel">
      <div class="card">Portfolio Overview</div>
    </div>
  `);
}

// ===============================
// PROJECTS
// ===============================
function loadProject(id) {
  setActive(id);

  render(`
    <div class="panel">
      <div class="card">Loading ${id}...</div>
    </div>
  `);
}

// ===============================
// PUBLICATION
// ===============================
function loadPublication() {
  setActive("nav-publication");

  render(`
    <div class="panel">
      <div class="card">Publication Section</div>
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
      <div class="card">MS CS Thesis</div>
    </div>
  `);
}

// ===============================
// CERTIFICATIONS
// ===============================
function loadCert(type) {
  setActive(type);

  render(`
    <div class="panel">
      <div class="card">Certification: ${type}</div>
    </div>
  `);
}

// ===============================
// ACTIVITIES
// ===============================
function loadActivity(type) {
  setActive(type);

  render(`
    <div class="panel">
      <div class="card">Activity: ${type}</div>
    </div>
  `);
}

// ===============================
// CONTACT (MASK + REVEAL + COPY)
// ===============================
function loadContact() {
  setActive("nav-contact");

  render(`
    <div class="contact-center">
      <div class="contact-card">
        
        <div>Email</div>

        <div id="emailMasked" class="email-box" onclick="revealEmail()">
          •••••••••••••••••••
        </div>

        <button onclick="copyEmail()">Copy Email</button>

      </div>
    </div>
  `);
}

// Reveal email on click
function revealEmail() {
  const el = document.getElementById("emailMasked");

  el.innerText = "informkrishnakumar@gmail.com";

  el.onclick = null; // disable re-click reveal
}

// Copy email (works even if masked or revealed)
function copyEmail() {
  navigator.clipboard.writeText("informkrishnakumar@gmail.com");
  alert("Email copied!");
}
