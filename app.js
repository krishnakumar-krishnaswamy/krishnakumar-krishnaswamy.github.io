function loadProject(project) {

  const output = document.getElementById("output");

  if (project === "project1") {
    output.innerHTML = `<h3>Project 1</h3><p>Healthcare Research demo.</p>`;
  }

  else if (project === "project2") {
    output.innerHTML = `<h3>Project 2</h3><p>IT Release Readiness Agent.</p>`;
  }

  else if (project === "project3") {
    output.innerHTML = `<h3>Project 3</h3><p>AI / LLM experiments.</p>`;
  }
}

/* CONTACT UI */
function loadContact() {

  const output = document.getElementById("output");

  output.innerHTML = `
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
  `;
}

/* COPY FUNCTION */
function copyEmail() {

  const email = "yourgithubemail@example.com";

  navigator.clipboard.writeText(email).then(() => {

    document.getElementById("copyStatus").innerText =
      "Email copied to clipboard ✔";

  });
}
