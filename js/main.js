(() => {
  // Data sources
  const certificates = [
    {
      name: "Schlumberger",
      display: true,
      description: "HSE in the Energy Sector",
      date: "2024",
      category: "Professional",
    },
    {
      name: "UFAZ ChemEng Club",
      display: true,
      description: "Advanced Process Equipment & Safety Workshop",
      date: "2025",
      category: "Technical",
    },
    {
      name: "U.S. Department of State",
      display: true,
      description: "Project Management, Tashkent, Uzbekistan",
      date: "2023",
      category: "Leadership",
    },
    {
      name: "Israel-Azerbaijani Training Center (Technest)",
      // display: true,
      description: "Full-Stack Development",
      date: "2023",
      category: "Technical",
    },
    {
      name: "Erasmus Plus",
      display: true,
      description: "Team Leader, Istanbul, Türkiye",
      date: "2023",
      category: "Leadership",
    },
    {
      name: "Yelo Bank",
      // display: true,
      description: "Career Trainings",
      date: "2023",
      category: "Professional",
    },
    {
      name: "Financial Literacy Forum (UFAZ & UNEC)",
      // display: true,
      description: "Project Planner and Organizer",
      date: "2023",
      category: "Leadership",
    },
    {
      name: "U.S. Department of State Program Alumni",
      // display: true,
      description: "FLEX/ALEX’22 Washington, D.C.",
      date: "2022",
      category: "Academic Exchange",
    },
    {
      name: "Iowa State University",
      // display: true,
      description: "Mechanics Assistant at Plane Model Contest",
      date: "2022",
      category: "Academic",
    },
    {
      name: "University of Michigan",
      display: true,
      description: "Getting Started with Python, Coursera",
      date: "2022",
      category: "Technical",
    },
    {
      name: "European Youth Parliament",
      // display: true,
      description: "THEIA, Baku, Azerbaijan",
      date: "2022",
      category: "Leadership",
    },
    {
      name: "TECH LIBERTY Forum",
      // display: true,
      description:
        "Cryptocurrencies and Cybersecurity by Friedrich Naumann Foundation, Tbilisi, Georgia",
      date: "2021",
      category: "Technical",
    },
    {
      name: "Preparing Global Leaders Forum",
      // display: true,
      description: "Certificate of Recognition",
      date: "2020",
      category: "Leadership",
    },
  ];

  const jobs = [
    {
      title: "SOCAR Downstream Management",
      position: "Process Engineering Intern – Baku Oil Refinery",
      display: true,
      responsibilities: [
        "Monitored 4 catalytic reforming reactors daily, analyzing data from 10+ sensors to track temperature, pressure, and catalyst performance at console; logged values for reporting.",
        "Contributed to steady octane yield by assisting in process parameter adjustments and hydrogen recovery optimization, aligning values with manuals and lab results.",
        "Assisted in start up of catalyst regeneration unit, and bringing up to operational specifications, implemented experimental “Gray Burn” mode. ",
        "Defended a Diploma project on “Mechanisms of Catalyst Deactivation and Regeneration in Catalytic Reforming Unit” with Excellent Evaluation. ",
      ],
      date: "April – June 2025",
    },
    {
      title: "Kronos Enterprises, AU",
      position: "MR 23 IT & AV Lead at COP29",
      display: true,
      responsibilities: [
        "Led a team of 3 IT specialists, optimizing system setup and operations for UN events.",
        "Resolved 3-5 technical issues per week, ensuring minimal downtime.",
        "Supported 2-3 daily sessions for 20-80 participants, managing audio, live interpretation, video, and PTZ camera systems.",
      ],
      date: "November 2024",
    },
    {
      title: "OBraz Company",
      position: "IT Project Manager",
      display: true,
      responsibilities: [
        "Oversaw development and integration of ERP system, reducing report preparation time from 1.5 hours to 15 minutes and improving KPIs.",
        "Collaborated with dev team to debug and optimize iOS and Android mobile applications, enhancing user experience.",
        "Designed, developed, and deployed three full-stack websites (archdigital.org, comline.az, pgi.az), integrated with Google Workspace.",
        "Maintained communication with ISPs and OTP service providers to ensure operational continuity.",
      ],
      date: "June 2024 – December 2024",
    },
    {
      title: "Kapital Bank OJSC",
      position: "IT Department Intern – Head Office",
      display: true,
      responsibilities: [
        "Managed project between dev and cybersecurity teams to create Telegram bot for inventory management.",
        "Troubleshot internal banking systems for cross-departmental functionality.",
        "Configured 20+ Teltonika routers for ATM network, enhancing connection reliability and uptime.",
      ],
      date: "July 2023 – August 2023",
    },
    {
      title: "ENGROUP LLC",
      position: "Junior IT Specialist",
      display: true,
      responsibilities: [
        "Designed and installed surveillance systems at multiple sites, increasing security reliability.",
        "Diagnosed hardware issues, improving repair efficiency by 30%.",
        "Installed and set up computer systems; managed Teltonika GPS systems.",
      ],
      date: "November 2022 – July 2023",
    },
    {
      title: "Crazy Innovations",
      position: "Technical Support / Marketing Tools Manager",
      display: true,
      responsibilities: [
        "Deployed network marketing tools, boosting customer engagement by 25%.",
        "Resolved 90% of technical issues within 24 hours, ensuring smooth operations.",
        "Managed small networks and video registration systems at public places.",
      ],
      date: "June 2022 – November 2022",
    },
    {
      title: "AIESEC in Azerbaijan",
      position: "International Relations Manager",
      display: true,
      responsibilities: [
        "Managed international development through partnerships across Europe and Asia.",
        "Conducted market research and managed project lists to meet demand.",
        "Ensured exchange standards compliance working with the local committee executive board.",
      ],
      date: "February 2022 – August 2022",
    },
    {
      title: "Azerbaijan Chemical Society",
      position: "Graphic Designer",
      display: true,
      responsibilities: [
        "Designed posters and logos for events and seminars using Canva and Photoshop.",
        "Researched promotional needs and utilized various channels to reach target audiences.",
      ],
      date: "December 2021 – February 2022",
    },
  ];
  // DOM Elements
  const jobsContainer = document.getElementById("jobs");
  const certificatesContainer = document.getElementById("certificates");

  // Separate global display limits
  const MAX_JOBS_RENDERED = 1;
  const MAX_CERTIFICATES_RENDERED = 100;

  // Number of jobs to show initially
  let softLimit = 3;
  let viewAllJobs = false;

  // Utils
  const createElement = (tag, options = {}) => {
    const el = document.createElement(tag);
    if (options.classList) el.classList.add(...options.classList);
    if (options.id) el.id = options.id;
    if (options.text) el.textContent = options.text;
    if (options.html) el.innerHTML = options.html;
    if (options.attrs) {
      Object.entries(options.attrs).forEach(([key, value]) =>
        el.setAttribute(key, value)
      );
    }
    return el;
  };

  // Render Jobs
  const renderJobs = () => {
    if (!jobsContainer) return;

    jobsContainer.innerHTML = ""; // reset

    const visibleCount = viewAllJobs
      ? MAX_JOBS_RENDERED
      : Math.min(MAX_JOBS_RENDERED, softLimit);

    const jobsList = jobs.slice(0, visibleCount);

    jobsList.forEach(({ title, position, responsibilities, date, display }) => {
      if (!display) return; // Skip if display is false or undefined

      const container = createElement("section", {
        classList: ["work-experience"],
      });

      const h2 = createElement("h2", { text: title, classList: ["title"] });
      const h3 = createElement("h3", {
        text: position,
        classList: ["position"],
      });

      const respDateDiv = createElement("div", {
        classList: ["fix-resp-date"],
      });
      const ul = createElement("ul");

      responsibilities.forEach((resp) => {
        const li = createElement("li", { text: resp });
        ul.appendChild(li);
      });

      const dateEl = createElement("p", {
        text: date,
        classList: ["job-date"],
      });

      respDateDiv.append(ul, dateEl);
      container.append(h2, h3, respDateDiv);
      jobsContainer.appendChild(container);
    });

    // Add Show More / Show Less button if needed
    if (jobs.length > visibleCount && MAX_JOBS_RENDERED > softLimit) {
      let btn = document.getElementById("show_more_jobs_btn");
      if (!btn) {
        btn = createElement("button", {
          id: "show_more_jobs_btn",
          text: viewAllJobs ? "Show Less" : "Show More",
          classList: ["show-more-btn", "button"],
          attrs: { type: "button" },
        });
        jobsContainer.appendChild(btn);

        btn.addEventListener("click", () => {
          viewAllJobs = !viewAllJobs;
          renderJobs();
          renderCertificates();
        });
      } else {
        btn.textContent = viewAllJobs ? "Show Less" : "Show More";
      }
    }
  };

  // Render Certificates
  const renderCertificates = () => {
    if (!certificatesContainer) return;

    certificatesContainer.innerHTML = ""; // reset

    // const title = createElement("h1", { text:  });
    const title = createElement("h1", { text: "Certificates", classList: ["title"] });
    const ul = createElement("ul");

    certificates
      .filter((c) => c.display)
      .slice(0, MAX_CERTIFICATES_RENDERED)
      .forEach(({ name, description, date }) => {
        const li = createElement("li");
        const nameSpan = createElement("span", {
          text: name,
          // classList: ["bold_certificates"],
        });
        li.appendChild(nameSpan);
        li.append(`: ${description}${date ? `, ${date}` : ""}`);
        ul.appendChild(li);
      });

    certificatesContainer.append(title, ul);
  };

  // Initialize all
  const init = () => {
    renderJobs();
    renderCertificates();
  };

  // Run on DOMContentLoaded for safety
  document.addEventListener("DOMContentLoaded", init);
})();
