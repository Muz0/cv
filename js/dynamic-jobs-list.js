const jobs = [
  {
    title: "ENGROUP LLC",
    position: "Junior IT Specialist",
    responsibilities: [
      "Install and set up computer systems at various locations.",
      "Design and install networks and video surveillance systems.",
      "Perform basic hardware diagnostics and assess repair profitability.",
      "Manage Teltonika GPS systems.",
    ],
    date: "November 2022 - Nowadays",
  },
  {
    title: "Crazy Inn",
    position: "Technical Support/Marketing Tools Manager",
    responsibilities: [
      "Provide technical support for smooth workflow at multiple locations. ",
      "Manage small networks and video registration systems in public places.",
      "Deploy network marketing tools and report issues to developers for debugging.",
    ],
    date: "August - November 2022",
  },
  {
    title: "AIESEC in Azerbaijan",
    position: "International Relations Manager",
    responsibilities: [
      "Manage international development through partnerships with committees in Europe and Asia. ",
      "Conduct market research to meet market demand and manage project lists.",
      "Ensure exchange standards are met through working with the local committee's executive board.",
    ],
    date: "February 2022 - August 2022",
  },
  {
    title: "Azerbaijan Chemical Society",
    position: "Graphic Designer",
    responsibilities: [
      "Design posters and logos for events and seminars using Canva or Photoshop, with research on the needs of each promotion company.",
      "Utilize various promotion channels to reach the target audience effectively.",
    ],
    date: "December 2021 - February 2022",
  },
];

const fragment = document.createDocumentFragment();
const jobsElement = document.getElementById("jobs");
let counter = 0;

for (const job of jobs) {
  const hr = createHRElement();
  fragment.appendChild(hr);

  const jobDescription = createJobDescriptionElement(counter);

  const title = createTitleElement(counter, job.title);
  jobDescription.appendChild(title);

  const position = createPositionElement(counter, job.position);
  jobDescription.appendChild(position);

  const resDateDiv = createResponsibilitiesDateDiv();
  const responsibilities = createResponsibilitiesList(counter, job.responsibilities);
  resDateDiv.appendChild(responsibilities);

  const dateP = createDateElement(job.date);
  resDateDiv.appendChild(dateP);

  jobDescription.appendChild(resDateDiv);
  fragment.appendChild(jobDescription);

  counter++;
}

jobsElement.appendChild(fragment);



// Helper functions

function createHRElement() {
  const hr = document.createElement("hr");
  return hr;
}

function createJobDescriptionElement(counter) {
  const jobDescription = document.createElement("div");
  jobDescription.id = `job-description-${counter}`;
  jobDescription.classList.add("work-experience");
  return jobDescription;
}

function createTitleElement(counter, titleText) {
  const title = document.createElement("h2");
  title.id = `title-${counter}`;
  title.classList.add("title");
  title.textContent = titleText;
  return title;
}

function createPositionElement(counter, positionText) {
  const position = document.createElement("h3");
  position.id = `position-${counter}`;
  position.classList.add("position");
  position.textContent = positionText;
  return position;
}

function createResponsibilitiesDateDiv() {
  const resDateDiv = document.createElement("div");
  resDateDiv.classList.add("fix-resp-date");
  return resDateDiv;
}

function createResponsibilitiesList(counter, responsibilities) {
  const responsibilitiesList = document.createElement("ul");
  responsibilitiesList.id = `responsibilities-${counter}`;
  for (const responsibility of responsibilities) {
    const li = document.createElement("li");
    li.textContent = responsibility;
    responsibilitiesList.appendChild(li);
  }
  return responsibilitiesList;
}

function createDateElement(dateText) {
  const dateP = document.createElement("p");
  dateP.classList.add("job-date");
  dateP.textContent = dateText;
  return dateP;
}

