const LINKS = {
  github: "https://github.com/krishnakumar-krishnaswamy/krishnakumar-krishnaswamy.github.io",

  linkedin: "https://www.linkedin.com/in/krishnakumar-krishnaswamy-pmp-9a80a3129?utm_source=portfolio",

  credly: "https://www.credly.com/users/krishnakumar-krishnaswamy.95a45e03/badges/credly"
};

/* SAFE OPEN */
function openTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

/* TOGGLE MENU */
function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

/* CENTRAL RENDER ENGINE */
function renderCard(type, value) {
  const out = document.getElementById("output");

  if (type === "home") {
    out.innerHTML = `<div class="card">Home</div>`;
  }

  else if (type === "project") {
    out.innerHTML = `<div class="card">Project ${value}</div>`;
  }

  else if (type === "publication") {
    out.innerHTML = `<div class="card">Publication ${value}</div>`;
  }

  else if (type === "thesis") {
    out.innerHTML = `<div class="card">MS CS Thesis</div>`;
  }

  else if (type === "cert") {
    out.innerHTML = `<div class="card">Certification: ${value}</div>`;
  }

  else if (type === "activity") {
    out.innerHTML = `<div class="card">Activity: ${value}</div>`;
  }

  else if (type === "contact") {
    out.innerHTML = `
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

/* EMAIL REVEAL */
function revealEmail() {
  document.getElementById("emailBox").innerText =
    "informkrishnakumar@gmail.com";
}

/* COPY EMAIL */
function copyEmail() {
  navigator.clipboard.writeText("informkrishnakumar@gmail.com");

  document.getElementById("tick").innerText = "✔ Copied";

  setTimeout(() => {
    document.getElementById("tick").innerText = "";
  }, 2000);
}
