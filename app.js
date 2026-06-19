function setActive(label) {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.innerText.trim() === label.trim()) {
      btn.classList.add("active");
    }
  });
}

function setHome() {
  setActive("Home");

  document.getElementById("guide").innerText =
    "Welcome Home: Select a project from the left.";

  document.getElementById("output").innerHTML =
    "This is the home dashboard. Choose a project to begin.";
}

function loadProject(project) {

  const output = document.getElementById("output");
  const guide = document.getElementById("guide");

  if (project === "healthcare") {

    setActive("Project 1 - Healthcare Research");

    guide.innerText =
      "Healthcare Project: Upload dataset and run analysis tools.";

    output.innerHTML = `
      <h3>Healthcare Research Project</h3>
      <p>Interactive analysis workspace (placeholder).</p>
    `;
  }

  else if (project === "project2") {

    setActive("Project 2 - IT Readiness Agent");

    guide.innerText =
      "IT Readiness Agent: Evaluate release readiness workflows.";

    output.innerHTML = `
      <h3>Project 2</h3>
      <p>Coming soon...</p>
    `;
  }
}

// DEFAULT LOAD
setHome();
