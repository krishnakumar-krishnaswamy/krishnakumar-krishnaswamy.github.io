function clearActiveButtons() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });
}

function setActiveButton(id) {
  clearActiveButtons();
  document.getElementById(id).classList.add("active");
}

/* MODE SWITCH (IMPORTANT FIX) */
function setMode(mode) {
  const main = document.querySelector(".main");

  if (mode === "contact") {
    main.classList.add("contact-mode");
  } else {
    main.classList.remove("contact-mode");
  }
}

/* PROJECTS */
function loadProject(project) {

  setMode("project");

  const output = document.getElementById("output");

  if (project === "project1") {
    setActiveButton("btn-project1");
    output.innerHTML = `<div class="project-view">Project 1: Healthcare Research Demo</div>`;
  }

  else if (project === "project2") {
    setActiveButton("btn-project2");
    output.innerHTML = `<div class="project-view">Project 2: IT Release Readiness Agent</div>`;
  }

  else if (project === "project3") {
    setActiveButton("btn-project3");
    output.innerHTML = `<div class="project-view">Project 3: AI / LLM Experiments</div>`;
  }
}

/* CONTACT */
function loadContact() {

  setActiveButton("btn-contact");
  setMode("contact");

  const output = document.getElementById("output");

  output.innerHTML = `
    <div class="contact-wrapper">

      <div class="contact-card">

        <div class="contact-title">Contact</div>

        <div class="contact-email">yourgithubemail@example.com</div>

        <button class="copy-btn" onclick="copyEmail()">Copy Email</button>

        <div id="copyStatus" class="copied-msg"></div>

      </div>

    </div>
  `;
}

/* COPY EMAIL */
function copyEmail() {
  navigator.clipboard.writeText("yourgithubemail@example.com")
    .then(() => {
      document.getElementById("copyStatus").innerText =
        "Email copied to clipboard ✔";
    });
}
