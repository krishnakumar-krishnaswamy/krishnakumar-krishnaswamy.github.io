function loadHome() {
  document.getElementById("header").innerText = "FN-LN Portfolio";

  document.getElementById("output").innerHTML =
    "Welcome — select a project from the left.";
}

function loadProject(project) {

  const header = document.getElementById("header");
  const output = document.getElementById("output");

  if (project === "project1") {

    header.innerText = "Project 1 - Healthcare";

    output.innerHTML = `
      <h3>Healthcare Research</h3>
      <p>Interactive healthcare analysis workspace.</p>
    `;
  }

  else if (project === "project2") {

    header.innerText = "Project 2 - IT Readiness";

    output.innerHTML = `
      <h3>IT Release Readiness Agent</h3>
      <p>Workflow evaluation system (concept stage).</p>
    `;
  }

  else if (project === "project3") {

    header.innerText = "Project 3 - AI Experiments";

    output.innerHTML = `
      <h3>AI / LLM Experiments</h3>
      <p>Experimental AI integration sandbox.</p>
    `;
  }
}

/* IMPORTANT: DEFAULT STATE */
loadHome();
