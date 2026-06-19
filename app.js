function clearActiveButtons() {

  document.querySelectorAll(".nav-btn").forEach(button => {
    button.classList.remove("active");
  });

}

function setActiveButton(buttonId) {

  clearActiveButtons();

  document
    .getElementById(buttonId)
    .classList.add("active");
}

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

function loadContact() {

  setActiveButton("btn-contact");

  const output = document.getElementById("output");

  output.innerHTML = `
    <div class="contact-card">

      <div class="contact-title">
        Contact
      </div>

      <div class="contact-email">
        yourgithubemail@example.com
      </div>

      <button class="copy-btn" onclick="copyEmail()">
        Copy Email
      </button>

      <div id="copyStatus" class="copied-msg"></div>

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
