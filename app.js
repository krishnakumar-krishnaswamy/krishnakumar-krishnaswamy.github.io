function clearActiveButtons() {
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
}

function setActiveButton(id) {
  clearActiveButtons();
  document.getElementById(id).classList.add("active");
}

/* INITIAL EMPTY STATE */
window.onload = () => {
  document.getElementById("output").innerHTML = `
    <div class="project-area"></div>
    <div class="center-area"></div>
  `;
};

/* PROJECTS */
function loadProject(project) {

  const output = document.getElementById("output");

  setActiveButton("btn-project1");

  let title = "";

  if (project === "project1") {
    setActiveButton("btn-project1");
    title = "Project 1: Healthcare Research Demo";
  }

  if (project === "project2") {
    setActiveButton("btn-project2");
    title = "Project 2: IT Release Readiness Agent";
  }

  if (project === "project3") {
    setActiveButton("btn-project3");
    title = "Project 3: AI / LLM Experiments";
  }

  output.innerHTML = `
    <div class="project-area">${title}</div>
    <div class="center-area"></div>
  `;
}

/* CONTACT */
function loadContact() {

  setActiveButton("btn-contact");

  document.getElementById("output").innerHTML = `
    <div class="project-area"></div>

    <div class="center-area">

      <div class="contact-card">

        <div class="contact-title">Contact</div>

        <div class="contact-email">yourgithubemail@example.com</div>

        <button class="copy-btn" onclick="copyEmail()">Copy Email</button>

        <div id="copyStatus" class="copied-msg"></div>

      </div>

    </div>
  `;
}

function copyEmail() {
  navigator.clipboard.writeText("yourgithubemail@example.com").then(() => {
    document.getElementById("copyStatus").innerText =
      "Email copied to clipboard ✔";
  });
}
