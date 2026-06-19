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

function loadContact() {

  const output = document.getElementById("output");

  output.innerHTML = `
    <h3>Contact</h3>

    <div class="form-group">
      <input type="text" placeholder="First Name" />
    </div>

    <div class="form-group">
      <input type="text" placeholder="Last Name" />
    </div>

    <div class="form-group">
      <input type="email" placeholder="Email ID" />
    </div>

    <div class="form-group">
      <textarea rows="4" maxlength="100" placeholder="Message (max 100 chars)"></textarea>
    </div>

    <button class="nav-btn">Submit</button>
  `;
}
