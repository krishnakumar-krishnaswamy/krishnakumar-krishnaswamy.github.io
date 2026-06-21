const LINKS = {
  github: "https://github.com/krishnakumar-krishnaswamy/krishnakumar-krishnaswamy.github.io",

  linkedin: "https://www.linkedin.com/in/krishnakumar-krishnaswamy/",

  credly: "https://www.credly.com/users/krishnakumar-krishnaswamy.95a45e03/badges/credly"
};

function openTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

function renderCard(type, value) {
  const out = document.getElementById("output");

  if (type === "home") {
    out.innerHTML = `<div class="card">Home</div>`;
  }

  else if (type === "project") {
    out.innerHTML = `<div class="card">Project ${value}</div>`;
  }

    /*
  else if (type === "publication") {
    out.innerHTML = `<div class="card">Publication ${value}</div>`;
  }
*/

else if (type === "publication") {

  const publications = {

    "1": `
      <div class="card">

    Title: SEARCH SIMILAR PROTEIN STRUCTURES WITH CLASSIFICATION, SEQUENCE AND 3D ALIGNMENTS <br><br>

    Authors: ZAIXIN LU, ZHIYU ZHAO, SERGIO GARCIA, KRISHNAKUMAR KRISHNASWAMY, and BIN FU<br><br>

    Venue: World Scientific - Journal of Bioinformatics and Computational Biology <br><br>

    <a href="https://www.worldscientific.com/doi/abs/10.1142/S021972000900431X"
       target="_blank">
       View Publication
    </a>
    
      </div>
    `,

    /*
    "2": `
      <div class="card">
        Future publication
      </div>
    `,

    "3": `
      <div class="card">
        Future publication
      </div>
    `
    */
  };

  out.innerHTML = publications[value];
}





    
  else if (type === "thesis") {
    out.innerHTML = `<div class="card">MS CS Thesis</div>`;
  }
    
else if (type === "cert") {

  if (value === "ITIL v3") {

    out.innerHTML = `
      <div class="card">
        ITIL v3 Foundation certification issued by Axelos on June, 2014
      </div>
    `;
  }

  else if (value === "CSM") {

    out.innerHTML = `
      <div class="card">
        Certified Scrum Master CSM certification issued by Scrum Alliance on January, 2016
      </div>
    `;
  }

  else if (value === "SAFe POPM") {

    out.innerHTML = `
      <div class="card">
        SAFe 5 Certified Product Owner / Product Manager POPM certification issued by Scaled Agile on September, 2020
      </div>
    `;
  }
}

    
  /*
  else if (type === "cert") {
    out.innerHTML = `<div class="card">Certification: ${value}</div>`;
  } 
*/
  else if (type === "activity") {
    out.innerHTML = `<div class="card">Activity: ${value}</div>`;
  }

  else if (type === "contact") {
    out.innerHTML = `
      <div class="contact-center">

        <div class="contact-card">

          <div>Email</div>

          <div id="emailBox" class="email-box" onclick="revealEmail()">
            •••••••••••••••••••
          </div>

          <button onclick="copyEmail()">Copy Email</button>

          <div id="tick" class="tick"></div>

        </div>

      </div>
    `;
  }
}

function revealEmail() {
  document.getElementById("emailBox").innerText =
    "informkrishnakumar@gmail.com";
}


function copyEmail() {
  navigator.clipboard.writeText("informkrishnakumar@gmail.com");

  document.getElementById("tick").innerText =
    "✔ Email Copied";
}


/*
function copyEmail() {
  navigator.clipboard.writeText("informkrishnakumar@gmail.com");

  document.getElementById("tick").innerText = "✔ Copied";

  setTimeout(() => {
    document.getElementById("tick").innerText = "";
  }, 2000);
}
*/
