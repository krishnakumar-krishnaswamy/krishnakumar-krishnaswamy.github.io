function loadProject(project) {

  const output = document.getElementById("output");
  const guide = document.getElementById("guide");

  if (project === "project1") {

    guide.innerText = "Project 1: Healthcare Research Demo";

    output.innerHTML = `
      <h3>Project 1 - Healthcare</h3>
      <p>Interactive healthcare analysis demo placeholder.</p>
    `;
  }

  else if (project === "project2") {

    guide.innerText = "Project 2: IT Release Readiness Agent";

    output.innerHTML = `
      <h3>Project 2</h3>
      <p>AI-based IT release readiness concept (coming soon).</p>
    `;
  }

  else if (project === "project3") {

    guide.innerText = "Project 3: AI / LLM Experiments";

    output.innerHTML = `
      <h3>Project 3</h3>
      <p>Experimental AI / LLM integration sandbox.</p>
    `;
  }
}
