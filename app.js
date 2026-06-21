const LINKS = {
  github: "https://github.com/krishnakumar-krishnaswamy/krishnakumar-krishnaswamy.github.io",

  linkedin: "https://www.linkedin.com/in/krishnakumar-krishnaswamy/",

  credly: "https://www.credly.com/users/krishnakumar-krishnaswamy.95a45e03/badges/credly"
};

function setActive(el) {

  const items = document.querySelectorAll(
    ".nav-item, .nav-sub, .nav-group"
  );

  items.forEach(i => i.classList.remove("active"));

  el.classList.add("active");
}

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

  out.innerHTML = `
    <div class="card">

      Title:

      <br>

      Visualization of protein classification

      <br><br>

      Problem Statement:

      <br>

      Researchers and Professors navigating large hierarchical
      Structural Classification of Proteins (SCOP) datasets across
      Family, Superfamily and Fold classifications often faced a
      time-consuming exploration process. Vertical scrolling through
      large semi-structured datasets added further complexity.

      <br><br>

      Solution:

      <br>

      Prepared a data entity model and transformed the
      semi-structured hierarchy into an interactive visualization
      model that preserved parent-child-grandchild relationships
      within the dataset. Developed a hyperbolic tree visualization
      model that enabled Researchers and Professors to click and
      expand hierarchical relationships while exploring protein
      classification datasets within a browser-based layout without
      extensive vertical scrolling.

      <br><br>

      Technology:

      <br>

      Implemented the solution using Java and JavaScript to improve
      interactive exploration of complex biological protein data structures.

      <br><br>

      Result:

      <br>

      Successfully demonstrated the approach to the MS CS Thesis
      Committee during the thesis defense for visualization and
      navigation of large-scale protein hierarchies.

      <br><br>

      Skills:

      <br>

      Problem Solving, Data Modeling, Semi-Structured Data,
      Data Visualization, Interactive Exploration, Java,
      JavaScript.

      <br><br>

      <a href="https://utrgv.primo.exlibrisgroup.com/discovery/fulldisplay?context=L&vid=01UT_RGV_INST:UTRGV&search_scope=Search_All&tab=Search_All&lang=en&docid=alma991011372539704696"
         target="_blank">
         View Thesis Record
      </a>

    </div>
  `;
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

    
else if (type === "activity") {

  if (value === "contest") {

    out.innerHTML = `
      <div class="card">

        Title:

        <br>

        ACM International Collegiate Programming Contest (ICPC)

        <br><br>

        About ICPC:

        <br>

        The International Collegiate Programming Contest (ICPC)
        is the oldest, largest and most prestigious algorithmic
        programming competition for university students. Teams
        collaborate to solve complex real-world programming
        challenges under time constraints, fostering problem
        solving, creativity, innovation and teamwork.

        <br><br>

        Recognition:

        <br>

        Awarded Honorable Mention as a Contestant
        in the ACM International Collegiate Programming Contest.

        <br><br>

        Skills:

        <br>

        Problem Solving, Algorithms, Competitive Programming,
        Analytical Thinking, Team Collaboration.

        <br><br>

        <a href="https://icpc.global/"
           target="_blank">
           Visit ICPC Website
        </a>

        <br><br>

        <a href="assets/documents/acm-icpc-certificate.pdf"
           target="_blank">
           View My Certificate
        </a>

      </div>
    `;
  }

  else if (value === "mentorship") {

  out.innerHTML = `
    <div class="card">

      Title:

      <br>

      Student STEM Mentorship

      <br><br>

      Program:

      <br>

      UTPA / Hidalgo ISD Early College High School (ECHS)
      Summer Science Academy – First Cohort Initiative

      <br><br>

      About:

      <br>

      Selected as a mentor for the UTPA / Hidalgo ISD Early College
      High School (ECHS) Summer Science Academy as part of its
      first cohort initiative.

      Supported high school students in learning foundational STEM
      concepts and encouraged analytical thinking through guided
      instruction and interactive learning activities.

      Motivated and inspired students to pursue college and higher
      education pathways.

      The program is part of Hidalgo Independent School District’s
      Early College High School initiative focused on preparing
      students for successful transition to post-secondary education
      and developing workforce-ready skills for a global economy.

      <br><br>

      Recognition:

      <br>

      Received a formal certificate of appreciation for contributing
      to mentoring and instructional activities in the program.

      <br><br>

      Skills:

      <br>

      Teaching, Mentorship, Communication,
      STEM Education, Leadership

      <br><br>

      <a href="https://hechs.hidalgo-isd.org/apps/pages/index.jsp?uREC_ID=2629218&type=d&pREC_ID=2269669"
         target="_blank">
         Program Website
      </a>

      <br><br>

      <a href="assets/documents/hidalgo-science-academy.pdf"
         target="_blank">
         View Certificate
      </a>

    </div>
  `;
}

  else if (value === "conference") {

    out.innerHTML = `
      <div class="card">
        Conference Participation
      </div>
    `;
  }
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

function handleGroupClick(el, groupId, type, value) {

  setActive(el);       // highlight group header
  toggle(groupId);     // open/close menu
  renderCard(type, value); // auto load default content
}
