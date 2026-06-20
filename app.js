function clearActiveButtons() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });
}

function setActiveButton(id) {
  clearActiveButtons();
  document.getElementById(id).classList.add("active");
}

/* PROJECTS */
function loadProject(project) {

  const output = document.getElementById("output");

  if (project === "project1") {
    setActiveButton("btn-project1");
    output.innerHTML = `
      <div class="project-view">
        <h2>Project 1: Healthcare Research Demo</h2>
      </div>
    `;
  }

  else if (project === "project2") {
    setActiveButton("btn-project2");
    output.innerHTML = `
      <div class="project-view">
        <h2>Project 2: IT Release Readiness Agent</h2>
      </div>
    `;
  }

  else if (project === "project3") {
    setActiveButton("btn-project3");
    output.innerHTML = `
      <div class="project-view">
        <h2>Project 3: AI / LLM Experiments</h2>
      </div>
    `;
  }
}

/* CONTACT */
function loadContact() {

  setActiveButton("btn-contact");

  document.getElementById("output").innerHTML = `
    <div class="contact-wrapper">

      <div class="contact-card">

        <div class="contact-title">Contact</div>

        <div class="contact-email">
          yourgithubemail@example.com
        </div>

        <button class="copy-btn" onclick="copyEmail()">
          Copy Email
        </button>

        <div id="copyStatus" class="copied-msg"></div>

      </div>

    </div>
  `;
}

function copyEmail() {
  const email = "yourgithubemail@example.com";

  navigator.clipboard.writeText(email).then(() => {
    document.getElementById("copyStatus").innerText =
      "Email copied to clipboard ✔";
  });
}
