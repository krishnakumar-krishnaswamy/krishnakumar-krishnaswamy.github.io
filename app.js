function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("show");
}

function loadProject(project) {

  const output = document.getElementById("output");
  const guide = document.getElementById("guide");

  if (project === "healthcare") {

    guide.innerText = "Healthcare Project: Upload dataset and run analysis tools.";

    output.innerHTML = `
      <h3>Healthcare Research Project</h3>
      <p>Interactive analysis workspace (placeholder).</p>
    `;
  }

  else if (project === "project2") {

    guide.innerText = "IT Readiness Agent: Evaluate release readiness workflows.";

    output.innerHTML = `
      <h3>Project 2 - IT Readiness Agent</h3>
      <p>Coming soon...</p>
    `;
  }
}
