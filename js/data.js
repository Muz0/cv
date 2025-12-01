export const profile = {
  name: "Muzaffar Mustafayev",
  summary:
    "Graduate Chemical engineer experienced in catalyst monitoring, process optimization, and reactor operations.",
  photo: {
    src: "img/Muzaffar.webp",
    width: 160,
    height: 160,
    alt: "Portrait photo of Muzaffar Mustafayev",
  },
  personalDetails: [
    {
      label: "Profile",
      value:
        "Graduate Chemical engineer experienced in catalyst monitoring, process optimization, and reactor operations.",
    },
    {
      label: "Bachelor's Degree",
      value: ["University of Strasbourg", "Chemical Engineering"],
      link: {
        href: "https://chimie.unistra.fr/formation/licences/chimie/odf-parcours-chemical-engineering-ufaz-delocalise-en-azerbaidjan-PR962-18427/?tab=presentation",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    {
      label: "Specialization",
      value: "Chemical Hazards and Process Safety",
      link: {
        href: "https://www.coursera.org/specializations/chemical-hazards-and-process-safety/",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    {
      label: "Languages",
      value: "Azerbaijani, Russian, English, French",
    },
  ],
  contactDetails: [
    {
      label: "Mobile",
      value: "+994709966399",
      link: { href: "tel:+994709966399" },
    },
    {
      label: "Email",
      value: "muzaffar.mustafayev@ufaz.az",
      link: { href: "mailto:muzaffar.mustafayev@ufaz.az" },
    },
    {
      label: "Address",
      value: "Baku, Azerbaijan",
      tag: "address",
    },
  ],
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muzaffar-mustafayev/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/muzaffar_mustafayev/",
    },
  ],
  mobileDetailLabels: [
    "Bachelor's Degree",
    "Specialization",
    "Languages",
    "Mobile",
    "Email",
  ],
};

export const certificates = [
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
    display: false,
    description: "Full-Stack Development",
    date: "2023",
    category: "Technical",
  },
  {
    name: "Erasmus Plus",
    display: true,
    description: "Team Leader, Istanbul, Turkiye",
    date: "2023",
    category: "Leadership",
  },
  {
    name: "Yelo Bank",
    display: false,
    description: "Career Trainings",
    date: "2023",
    category: "Professional",
  },
  {
    name: "Financial Literacy Forum (UFAZ & UNEC)",
    display: false,
    description: "Project Planner and Organizer",
    date: "2023",
    category: "Leadership",
  },
  {
    name: "U.S. Department of State Program Alumni",
    display: false,
    description: "FLEX/ALEX'22 Washington, D.C.",
    date: "2022",
    category: "Academic Exchange",
  },
  {
    name: "Iowa State University",
    display: false,
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
    display: false,
    description: "THEIA, Baku, Azerbaijan",
    date: "2022",
    category: "Leadership",
  },
  {
    name: "TECH LIBERTY Forum",
    display: false,
    description:
      "Cryptocurrencies and Cybersecurity by Friedrich Naumann Foundation, Tbilisi, Georgia",
    date: "2021",
    category: "Technical",
  },
  {
    name: "Preparing Global Leaders Forum",
    display: false,
    description: "Certificate of Recognition",
    date: "2020",
    category: "Leadership",
  },
];

export const jobs = [
  {
    title: "SOCAR Downstream Management",
    position: "Process Engineering Intern - Baku Oil Refinery",
    display: true,
    responsibilities: [
      "Monitored 4 catalytic reforming reactors daily, analyzing sensor data to track temperature, pressure, and catalyst performance for reporting.",
      "Supported stable octane yield by assisting in process parameter adjustments and hydrogen recovery optimization, aligning plant data with manuals and lab results.",
      "Assisted catalyst regeneration unit start-up, bringing systems to operational specifications and implementing an experimental Gray Burn mode.",
      "Defended a diploma project on mechanisms of catalyst deactivation and regeneration with an excellent academic evaluation.",
    ],
    date: "April - June 2025",
  },
  {
    title: "Kronos Enterprises, AU",
    position: "MR 23 IT & AV Lead at COP29",
    // display: true,
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
    // display: true,
    responsibilities: [
      "Oversaw development and integration of an ERP system, reducing report preparation time from 1.5 hours to 15 minutes while improving KPIs.",
      "Collaborated with the development team to debug and optimize iOS and Android mobile applications, enhancing user experience.",
      "Designed, developed, and deployed three full-stack websites integrated with Google Workspace.",
      "Maintained communication with ISPs and OTP service providers to ensure operational continuity.",
    ],
    date: "June 2024 - December 2024",
  },
  {
    title: "Kapital Bank OJSC",
    position: "IT Department Intern - Head Office",
    // display: true,
    responsibilities: [
      "Managed a project between development and cybersecurity teams to create a Telegram bot for inventory management.",
      "Troubleshot internal banking systems for cross-departmental functionality.",
      "Configured 20+ Teltonika routers for the ATM network, enhancing connection reliability and uptime.",
    ],
    date: "July 2023 - August 2023",
  },
  {
    title: "ENGROUP LLC",
    position: "Junior IT Specialist",
    // display: true,
    responsibilities: [
      "Designed and installed surveillance systems at multiple sites, increasing security reliability.",
      "Diagnosed hardware issues, improving repair efficiency by 30%.",
      "Installed and set up computer systems; managed Teltonika GPS systems.",
    ],
    date: "November 2022 - July 2023",
  },
  {
    title: "Crazy Innovations",
    position: "Technical Support / Marketing Tools Manager",
    // display: true,
    responsibilities: [
      "Deployed network marketing tools, boosting customer engagement by 25%.",
      "Resolved 90% of technical issues within 24 hours, ensuring smooth operations.",
      "Managed small networks and video registration systems at public places.",
    ],
    date: "June 2022 - November 2022",
  },
  {
    title: "AIESEC in Azerbaijan",
    position: "International Relations Manager",
    // display: true,
    responsibilities: [
      "Managed international development through partnerships across Europe and Asia.",
      "Conducted market research and managed project lists to meet demand.",
      "Ensured exchange standards compliance while working with the local committee executive board.",
    ],
    date: "February 2022 - August 2022",
  },
  {
    title: "Azerbaijan Chemical Society",
    position: "Graphic Designer",
    // display: true,
    responsibilities: [
      "Designed posters and logos for events and seminars using Canva and Photoshop.",
      "Researched promotional needs and utilized various channels to reach target audiences.",
    ],
    date: "December 2021 - February 2022",
  },
];
