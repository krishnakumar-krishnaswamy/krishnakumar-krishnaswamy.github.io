function loadProject(project) {

  const output = document.getElementById("output");

  if (project === "project1") {
    output.innerHTML = `
      <h3>Project 1</h3>
      <p>Healthcare Research interactive demo placeholder.</p>
    `;
  }

  else if (project === "project2") {
    output.innerHTML = `
      <h3>Project 2</h3>
      <p>IT Release Readiness Agent (coming soon).</p>
    `;
  }

  else if (project === "project3") {
    output.innerHTML = `
      <h3>Project 3</h3>
      <p>AI / LLM experiments sandbox.</p>
    `;
  }
}

/* CONTACT FORM */
function loadContact() {

  const output = document.getElementById("output");

  output.innerHTML = `
    <h3>Contact</h3>

    <div class="form-group">
      <input id="fname" type="text" placeholder="First Name" />
    </div>

    <div class="form-group">
      <input id="lname" type="text" placeholder="Last Name" />
    </div>

    <div class="form-group">
      <input id="email" type="email" placeholder="Email ID" />
    </div>

    <div class="form-group">
      <textarea id="message" rows="4" maxlength="100" placeholder="Message (max 100 chars)"></textarea>
    </div>

    <button class="nav-btn" onclick="submitContact()">
      Submit
    </button>
  `;
}

/* EMAIL SUBMISSION (GITHUB PAGES SAFE) */
function submitContact() {

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = `Portfolio Contact from ${fname} ${lname}`;
  const body = `Name: ${fname} ${lname}
Email: ${email}

Message:
${message}`;

  /* Opens user's email client */
  window.location.href =
    `mailto:yourgithubemail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
