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
}
