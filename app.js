const LINKS = {
  github: "https://github.com/krishnakumar-krishnaswamy/krishnakumar-krishnaswamy.github.io",
  linkedin: "https://www.linkedin.com/in/krishnakumar-krishnaswamy-pmp-9a80a3129?trk=people-guest_people_search-card",
  credly: "https://www.credly.com/users/krishnakumar-krishnaswamy.95a45e03/badges/credly"
};

// TOGGLE FUNCTION (FIXED PROPERLY)
function toggle(id) {
  const el = document.getElementById(id);

  if (el.style.display === "none" || el.style.display === "") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

// RENDER
function render(html) {
  document.getElementById("output").innerHTML = html;
}

// BASIC PAGES
function loadHome() {
  render(`<div class="card">Home</div>`);
}

function loadProject(id) {
  render(`<div class="card">Project: ${id}</div>`);
}

function loadPublication() {
  render(`<div class="card">Publication 1</div>`);
}

function loadThesis() {
  render(`<div class="card">MS CS Thesis</div>`);
}

// CONTACT
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
  document.getElementById("tick").innerText = "✔ Copied";

  setTimeout(() => {
    document.getElementById("tick").innerText = "";
  }, 2000);
}
