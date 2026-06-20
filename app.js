const LINKS = {
  github: "https://github.com/krishnakumar-krishnaswamy/krishnakumar-krishnaswamy.github.io",
  linkedin: "https://www.linkedin.com/in/krishnakumar-krishnaswamy-pmp-9a80a3129?trk=people-guest_people_search-card",
  credly: "https://www.credly.com/users/krishnakumar-krishnaswamy.95a45e03/badges/credly"
};

// TOGGLE
function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

// MAIN ROUTER
function renderSection(type, value) {

  const output = document.getElementById("output");

  // HOME
  if (type === "home") {
    output.innerHTML = `<div class="card">Home</div>`;
  }

  // PROJECT
  else if (type === "project") {
    output.innerHTML = `<div class="card">Project ${value}</div>`;
  }

  // PUBLICATION
  else if (type === "publication") {
    output.innerHTML = `<div class="card">Publication ${value}</div>`;
  }

  // THESIS
  else if (type === "thesis") {
    output.innerHTML = `<div class="card">MS CS Thesis (2006)</div>`;
  }

  // CERTIFICATIONS
  else if (type === "cert") {
    output.innerHTML = `<div class="card">Certification: ${value}</div>`;
  }

  // ACTIVITIES
  else if (type === "activity") {
    output.innerHTML = `<div class="card">Activity: ${value}</div>`;
  }

  // CONTACT
  else if (type === "contact") {
    output.innerHTML = `
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
    `;
  }
}

// EMAIL
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
