const LINKS = {
  github: "https://github.com/krishnakumar-krishnaswamy/krishnakumar-krishnaswamy.github.io",
  linkedin: "https://www.linkedin.com/in/krishnakumar-krishnaswamy-pmp-9a80a3129?trk=people-guest_people_search-card",
  credly: "https://www.credly.com/users/krishnakumar-krishnaswamy.95a45e03/badges/credly"
};

// RESET ACTIVE
function clearActive() {
  document.querySelectorAll(".nav-item, .nav-sub").forEach(el => {
    el.classList.remove("active");
  });
}

function setActive() {}

// RENDER
function render(html) {
  document.getElementById("output").innerHTML = html;
}

// HOME
function loadHome() {
  render(`<div class="card">Home</div>`);
}

// PROJECTS
function loadProject(id) {
  render(`<div class="card">Loading ${id}</div>`);
}

// PUBLICATION
function loadPublication() {
  render(`<div class="card">Publication</div>`);
}

// THESIS
function loadThesis() {
  render(`<div class="card">MS CS Thesis</div>`);
}

// CERTS
function loadCert(type) {
  render(`<div class="card">Certification: ${type}</div>`);
}

// ACTIVITIES
function loadActivity(type) {
  render(`<div class="card">Activity: ${type}</div>`);
}

// CONTACT (FIXED)
function loadContact() {
  render(`
    <div class="contact-center">
      <div class="contact-card">

        <div>Email</div>

        <div id="emailBox" class="email-box" onclick="revealEmail()">
          •••••••••••••••••••
        </div>

        <button onclick="copyEmail()">Copy Email</button>

        <div id="tick" class="tick"></div>

      </div>
    </div>
  `);
}

function revealEmail() {
  document.getElementById("emailBox").innerText =
    "informkrishnakumar@gmail.com";
}

function copyEmail() {
  navigator.clipboard.writeText("informkrishnakumar@gmail.com");

  const tick = document.getElementById("tick");
  tick.innerText = "✔ Copied";

  setTimeout(() => {
    tick.innerText = "";
  }, 2000);
}
