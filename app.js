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

/* HOME PAGE */

function loadHome() {

  clearActiveButtons();

  const output = document.getElementById("output");

  output.innerHTML = `
    <div class="home-view">

      <div>

        Welcome, I'm glad you're here.
        Hope you're having a wonderful day.

        <br><br>

        Explore selected projects and
        proof-of-concepts using the navigation menu.

      </div>

    </div>
  `;

}

/* PROJECTS */

function loadProject(project) {

  const output = document.getElementById("output");

  if (project === "project1") {

    setActiveButton("btn-project1");

    output.innerHTML = `
      <div class="project-view">
        Project 1: Healthcare Research Demo
      </div>
    `;
  }

  else if (project === "project2") {

    setActiveButton("btn-project2");

    output.innerHTML = `
      <div class="project-view">
        Project 2: IT Release Readiness Agent
      </div>
    `;
  }

  else if (project === "project3") {

    setActiveButton("btn-project3");

    output.innerHTML = `
      <div class="project-view">
        Project 3: AI / LLM Experiments
      </div>
    `;
  }

}

/* CONTACT */

function loadContact() {

  setActiveButton("btn-contact");

  const output = document.getElementById("output");

  output.innerHTML = `
    <div class="contact-wrapper">

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

    </div>
  `;
}

/* COPY EMAIL */

function copyEmail() {

  const email = "yourgithubemail@example.com";

  navigator.clipboard.writeText(email).then(() => {

    document.getElementById("copyStatus").innerText =
      "Email copied to clipboard ✔";

  });

}

/* DEFAULT HOME PAGE */

loadHome();
