const data = [
  {
    name: "PASHA Holding LLC:",
    description: "Volunteered as IT manager at the 16th anniversary",
    date: "2022",
  },
  {
    name: "Yelo Bank,",
    description: "Career Trainings",
    date: "2023"
  },
  {
    name: "U.S. Department of State Program Alumni",
    description: "FLEX/ALEX’22 Washington, D.C.",
    date: "",
  },
  {
    name:"Iowa State University",
    description:"Mechanics Assistant at Plane Model Contest",
    date:"2022"
  },
  {
    name: "University of Michigan ",
    description: "Getting Started with Python, Coursera",
    date: "2022",
  },
  {
    name: "European Youth Parliament: ",
    description: "THEIA, Baku, Azerbaijan",
    date: "2022",
  },
  {
    name: "TECH LIBERTY Forum ",
    description: "by Friedrich Naumann Foundation, Tbilisi, Georgia",
    date: "2021",
  },
  {
   name: "Preparing Global Leaders Forum ",
    description: "Certificate of Recognition",
    date: "2020",
  }
];

const certificatesDiv = document.getElementById("certificates");
const title = document.createElement("h1");
const breaker = document.createElement("hr");
const ul = document.createElement("ul");
title.innerHTML = "Certificates";


data.forEach((certificate) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.classList.add("bold_certificates");

  span.innerText = certificate.name;

  const p = document.createElement("p");
  p.innerHTML = `${span.outerHTML} ${certificate.description} ${
    certificate.date ? `, ${certificate.date}` : ""
  }`;
  li.appendChild(p);
  ul.appendChild(li);
});

certificatesDiv.appendChild(title);
certificatesDiv.appendChild(breaker);
certificatesDiv.appendChild(ul);
document.getElementById("jobs").appendChild(certificatesDiv);
