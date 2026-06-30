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

  if (el) {
    el.classList.add("active");

    // ✅ highlight parent group (fix hierarchy UX)
    const parent = getParentGroup(el);

    if (parent) {
      parent.classList.add("active");
    }
  }
}

function openTab(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

function getParentGroup(el) {
  if (!el) return null;
  return el.closest(".group")?.previousElementSibling;
}

function renderCard(type, value) {
  const out = document.getElementById("output");

out.classList.remove("fade");
void out.offsetWidth;
out.classList.add("fade");
  
  if (type === "home") {

  out.innerHTML = `
    <div class="card">
    
     <div class="card-body">

  <div class="info-value">
    Technologist, Researcher, and Digital Modernization Practitioner.
    Building Cost-Conscious Pilot Tools.
  </div>

  <div class="skill-container">

  <div class="skill-row">

    <div class="skill-box">Customer First</div>

    <div class="skill-box">Navigate Ambiguity</div>

    <div class="skill-box">Problem Solving</div>

    <div class="skill-box">Continuous Learning</div>

    <div class="skill-box">Adaptability Mindset</div>

  </div>

  <div class="skill-row">

    <div class="skill-box">Systems Thinking</div>

    <div class="skill-box">Data Analysis</div>

    <div class="skill-box">Decision Making</div>

    <div class="skill-box">Software Release Governance</div>

</div>

  <div class="skill-row">

    <div class="skill-box">Stakeholder Engagement</div>

    <div class="skill-box">Tailored Communication</div>

    <div class="skill-box">Risk Management</div>

    <div class="skill-box">Executive Partnership</div>

    <div class="skill-box">Cross-Functional Collaboration</div>

    <div class="skill-box">Distributed Team Coordination</div>

  </div>

  <div class="skill-row">

    <div class="skill-box">Technical Program Management</div>

    <div class="skill-box">SDLC</div>

    <div class="skill-box">Agile Scrum</div>

    <div class="skill-box">Kanban</div>

    <div class="skill-box">ITSM</div>

    <div class="skill-box">ITIL</div>

    <div class="skill-box">Hybrid Delivery</div>

  </div>

  <div class="skill-row">

    <div class="skill-box">Google Cloud</div>

    <div class="skill-box">Gen AI</div>

    <div class="skill-box">Python</div>

    <div class="skill-box">Salesforce CRM</div>

    <div class="skill-box">Identity and Access Management IAM</div>

  </div>

  </div>

</div>

</div>
  `;
}

  else if (type === "project") {

  const projects = {

   "1": `
  <div class="card">

    <div class="card-title">
      Project 1
    </div>

    <div class="card-body">

      <p>
        Pilot tool currently under development.
      </p>

      <p>
        <small>
          Implementation updates will be published as development progresses.
        </small>
      </p>

    </div>

  </div>
`

    /*
    ,"2": `
      <div class="card">
        Future Project Placeholder
      </div>
    `

    ,"3": `
      <div class="card">
        Future Project Placeholder
      </div>
    `
    */

  };

  out.innerHTML = projects[value];
}

    
else if (type === "publication") {

  const publications = {

    "1": `
<div class="card">

  <div class="card-title">
    Publication
  </div>

  <div class="card-body">

    <p>
      <strong>Title</strong><br>
      Search Similar Protein Structures with Classification,
      Sequence and 3D Alignments
    </p>

    <p>
      <strong>Authors</strong><br>
      ZAIXIN LU,
      ZHIYU ZHAO,
      SERGIO GARCIA,
      KRISHNAKUMAR KRISHNASWAMY,
      and BIN FU
    </p>

    <p>
      <strong>Venue</strong><br>
      World Scientific – Journal of Bioinformatics and Computational Biology
    </p>

    <p>
      <a href="https://www.worldscientific.com/doi/abs/10.1142/S021972000900431X"
         target="_blank">
         View Publication
      </a>
    </p>

  </div>

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

  <div class="card-title">
    MS CS Thesis
  </div>

  <div class="card-body">

    <p>
      <strong>Title</strong><br>
      Visualization of Protein Classification
    </p>

    <p>
      <strong>Problem Statement</strong><br>
      Researchers and professors navigating large hierarchical Structural Classification of Proteins (SCOP) datasets across Family, Superfamily, and Fold classifications often faced a time-consuming exploration process. Vertical scrolling through large semi-structured datasets added further complexity.
    </p>

    <p>
      <strong>Solution</strong><br>
      Prepared a data entity model and transformed the semi-structured hierarchy into an interactive visualization model that preserved parent-child-grandchild relationships. Developed a hyperbolic tree visualization model enabling researchers to interactively expand protein classification hierarchies within a browser without excessive scrolling.
    </p>

    <p>
      <strong>Technology</strong><br>
      Java, JavaScript
    </p>

    <p>
      <strong>Result</strong><br>
      Successfully demonstrated the solution before the MS CS Thesis Committee during the thesis defense for visualization and navigation of large-scale protein hierarchies.
    </p>

    <p>
      <strong>Skills</strong><br>
      Problem Solving, Data Modeling, Semi-Structured Data, Data Visualization, Interactive Exploration, Java, JavaScript
    </p>

    <p>
      <a href="https://utrgv.primo.exlibrisgroup.com/discovery/fulldisplay?context=L&vid=01UT_RGV_INST:UTRGV&search_scope=Search_All&tab=Search_All&lang=en&docid=alma991011372539704696"
         target="_blank">
         View Thesis Record
      </a>
    </p>

  </div>

</div>
`;
}
     
else if (type === "cert") {

  if (value === "ITIL v3") {

    out.innerHTML = `
      <div class="card">

  <div class="card-title">
    ITIL v3 Foundation
  </div>

  <div class="card-body">

    <div class="meta-section">

  <div class="meta-label">
    Issued By
  </div>

  <div class="meta-value">
    <a href="https://www.axelos.com/" target="_blank">
      Axelos
    </a>
  </div>

  <div class="meta-label">
    Earned
  </div>

  <div class="meta-value">
    June 2014
  </div>

  <div class="meta-label">
    Credential
  </div>

  <div class="meta-value">
    <a href="assets/documents/itil-v3-foundation-certificate.pdf"
       target="_blank">
      View Certificate
    </a>
  </div>

</div>
      </div>
      </div>
    `;
  }

  else if (value === "CSM") {

  out.innerHTML = `
    <div class="card">

  <div class="card-title">
    Certified ScrumMaster® (CSM)
  </div>

  <div class="card-body">

      <div class="meta-section">

  <div class="meta-label">
    Issued By
  </div>

  <div class="meta-value">
    Scrum Alliance, Inc.
  </div>

  <div class="meta-label">
    Earned
  </div>

  <div class="meta-value">
    January 2016
  </div>

  <div class="meta-label">
    Credential
  </div>

  <div class="meta-value">
    <a href="https://bcert.me/bc/html/show-badge.html?b=xwjtqipd"
       target="_blank">
      View Credential Record
    </a>
  </div>

</div>
      </div>

</div>
  `;
}

else if (value === "SAFe POPM") {

  out.innerHTML = `
<div class="card">

  <div class="card-title">
    Certified SAFe® 5 Product Owner / Product Manager
  </div>

  <div class="card-body">

    <div class="meta-section">

      <div class="meta-label">
        Issued By
      </div>

      <div class="meta-value">
        <a href="https://scaledagile.com/"
           target="_blank">
          Scaled Agile, Inc.
        </a>
      </div>

      <div class="meta-label">
        Earned
      </div>

      <div class="meta-value">
        October 06, 2020
      </div>

      <div class="meta-label">
        Credential
      </div>

      <div class="meta-value">
        <a href="https://www.credly.com/badges/3a4f123e-d666-47b0-9d40-5ea470affc74"
           target="_blank">
          View Certificate
        </a>
      </div>

    </div>

  </div>

</div>
`;
}  
}
    
else if (type === "activity") {

  if (value === "contest") {

    out.innerHTML = `
      <div class="card">

      <div class="card-title">
      ACM International Collegiate Programming Contest (ICPC)
      </div>

     <div class="card-body">

       <div class="section-title">About ICPC</div>

<p>
The International Collegiate Programming Contest (ICPC)
is the oldest, largest and most prestigious algorithmic
programming competition for university students. Teams
collaborate to solve complex real-world programming
challenges under time constraints, fostering problem
solving, creativity, innovation and teamwork.
</p>

<div class="section-title">Recognition</div>

<p>
Awarded Honorable Mention as a Contestant
in the ACM International Collegiate Programming Contest.
</p>

<div class="section-title">Skills</div>

<p>
Problem Solving,
Algorithms,
Competitive Programming,
Analytical Thinking,
Team Collaboration.
</p>

<p>
        <a href="https://icpc.global/"
           target="_blank">
           Visit ICPC Website
        </a>

        <br><br>

        <a href="assets/documents/acm-icpc-certificate.pdf"
           target="_blank">
           View My Certificate
        </a>
</p>
        </div>

</div>
    `;
  }

  else if (value === "mentorship") {

  out.innerHTML = `
<div class="card">

  <div class="card-title">
    Student STEM Mentorship
  </div>

  <div class="card-body">

    <div class="section-title">Program</div>

<p>
UTPA / Hidalgo ISD Early College High School (ECHS)
Summer Science Academy – First Cohort Initiative
</p>

     <div class="section-title">About</div>
     <p>
      Selected as a mentor for the UTPA / Hidalgo ISD Early College High School
      Summer Science Academy as part of its first cohort initiative.

      Supported high school students in learning foundational STEM concepts and
      encouraged analytical thinking through guided instruction and interactive
      learning activities.

      Motivated and inspired students to pursue college and higher education
      pathways.

      The program prepares students for successful transition into higher
      education while developing workforce-ready STEM skills.
    </p>

      <div class="section-title">Recognition</div>
      <p>
      Received a formal Certificate of Appreciation for mentoring and
      instructional contributions.
    </p>

      <div class="section-title">Skills</div>
      <p>
      Teaching, Mentorship, Communication,
      STEM Education, Leadership
    </p>

    <p>
      <a href="https://hechs.hidalgo-isd.org/apps/pages/index.jsp?uREC_ID=2629218&type=d&pREC_ID=2269669"
         target="_blank">
         Program Website
      </a>

      <br><br>

      <a href="assets/documents/hidalgo-science-academy.pdf"
         target="_blank">
         View My Certificate
      </a>
    </p>

  </div>

</div>
`;
}

  else if (value === "conference") {

  out.innerHTML = `
<div class="card">

  <div class="card-title">
    HENAAC Conference (Now Great Minds in STEM)
  </div>

  <div class="card-body">

     <div class="section-title">Event</div>
      <p>
      College Bowl Competition
    </p>

     <div class="section-title">Participation</div>
      <p>
      Participated in the HENAAC Conference in Los Angeles during graduate studies
      and networked with representatives from multiple STEM organizations and
      industry leaders.

      Based on discussions with Boeing representatives, I was selected to join
      the Boeing-sponsored College Bowl team, where an industry mentor coached
      the team throughout the competition.
    </p>

      <div class="section-title">About the Competition</div>
      <p>
      The College Bowl is a team-based competition where students collaborate
      with industry mentors to solve real-world challenges while demonstrating
      teamwork, communication, and problem-solving skills.
    </p>

      <div class="section-title">Skills</div>
      <p>
      Networking, Teamwork, Problem Solving,
      Communication, Leadership, Collaboration
    </p>

    <p>
      <a href="https://greatmindsinstem.org/"
         target="_blank">
         Great Minds in STEM
      </a>
    </p>

  </div>
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

function handleGroupClick(el, groupId) {

  setActive(el);
  toggle(groupId);
}
window.addEventListener("DOMContentLoaded", () => {
  renderCard("home");
});
