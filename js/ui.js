const INITIAL_VISIBLE_JOBS = 3;
const MAX_CERTIFICATES_RENDERED = 100;

const THEME_STORAGE_KEY = "preferred-theme";

const state = {
  showAllJobs: false,
  elements: {},
};

const applyAttributes = (element, attrs = {}) => {
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      element.setAttribute(key, value);
    }
  });
};

const appendLines = (element, value) => {
  const lines = Array.isArray(value) ? value : [value];
  lines.forEach((line, index) => {
    element.append(line);
    if (index < lines.length - 1) {
      element.appendChild(document.createElement("br"));
    }
  });
};

const normalizeTheme = (theme) =>
  theme === "dark" || theme === "light" ? theme : null;

const applyThemePreference = (theme) => {
  const normalized = normalizeTheme(theme);
  if (normalized) {
    document.body.dataset.theme = normalized;
    localStorage.setItem(THEME_STORAGE_KEY, normalized);
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.removeItem(THEME_STORAGE_KEY);
  }
  return normalized;
};

const detectSystemPreference = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const updateThemeToggleLabel = (theme) => {
  const { themeToggleBtn } = state.elements;
  if (!themeToggleBtn) return;

  if (!theme) {
    themeToggleBtn.dataset.state = "system";
    themeToggleBtn.setAttribute(
      "aria-label",
      "Using device theme. Single click to customize."
    );
    themeToggleBtn.setAttribute("aria-pressed", "false");
  } else {
    const label = theme === "dark" ? "dark" : "light";
    themeToggleBtn.dataset.state = label;
    themeToggleBtn.setAttribute(
      "aria-label",
      `Using ${label} theme. Single click toggles light/dark. Double-click to follow device.`
    );
    themeToggleBtn.setAttribute("aria-pressed", "true");
  }
};

const getNextManualTheme = (current) =>
  current === "dark" ? "light" : "dark";

const getInitialManualTheme = () =>
  detectSystemPreference() === "dark" ? "light" : "dark";

const createValueElement = (detail) => {
  if (detail.link && !detail.tag) {
    const linkEl = document.createElement("a");
    applyAttributes(linkEl, detail.link);
    appendLines(linkEl, detail.value);
    return linkEl;
  }

  const wrapper = document.createElement(detail.tag || "span");
  if (detail.attrs) {
    applyAttributes(wrapper, detail.attrs);
  }

  if (detail.link) {
    const linkEl = document.createElement("a");
    applyAttributes(linkEl, detail.link);
    appendLines(linkEl, detail.value);
    wrapper.appendChild(linkEl);
  } else {
    appendLines(wrapper, detail.value);
  }

  return wrapper;
};

export const hydrateElements = () => {
  state.elements = {
    jobsList: document.getElementById("jobs-list"),
    certificatesList: document.getElementById("certificates-list"),
    personalTitle: document.getElementById("personal-title"),
    personalDetails: document.getElementById("personal-details"),
    contactDetails: document.getElementById("contact-details"),
    linksList: document.getElementById("links-list"),
    profileImage: document.getElementById("profile_image"),
    mobileName: document.getElementById("mobile-name"),
    mobileSummary: document.getElementById("mobile-summary"),
    mobileDetails: document.getElementById("mobile-details"),
    mobileExtra: document.getElementById("mobileExtra"),
    toggleProfileBtn: document.getElementById("toggleProfile"),
    themeToggleBtn: document.getElementById("themeToggle"),
  };
};

export const renderDetailsTable = (details, target) => {
  if (!target) return;
  target.innerHTML = "";

  details.forEach((detail) => {
    if (detail.display === false) return;

    const row = document.createElement("tr");
    const header = document.createElement("th");
    header.scope = "row";
    header.textContent = detail.label;

    const valueCell = document.createElement("td");
    valueCell.appendChild(createValueElement(detail));

    row.append(header, valueCell);
    target.appendChild(row);
  });
};

const createJobEntry = ({ title, position, responsibilities, date }) => {
  const container = document.createElement("section");
  container.classList.add("work-experience");

  const companyTitle = document.createElement("h2");
  companyTitle.classList.add("title");
  companyTitle.textContent = title;

  const positionEl = document.createElement("h3");
  positionEl.classList.add("position");
  positionEl.textContent = position;

  const layout = document.createElement("div");
  layout.classList.add("fix-resp-date");

  const respList = document.createElement("ul");
  responsibilities.forEach((resp) => {
    const li = document.createElement("li");
    li.textContent = resp;
    respList.appendChild(li);
  });

  const dateEl = document.createElement("p");
  dateEl.classList.add("job-date");
  dateEl.textContent = date;

  layout.append(respList, dateEl);
  container.append(companyTitle, positionEl, layout);
  return container;
};

export const renderProfileSections = (profile) => {
  const {
    personalTitle,
    personalDetails,
    contactDetails,
    mobileName,
    mobileSummary,
    mobileDetails,
  } = state.elements;

  if (personalTitle) {
    personalTitle.textContent = profile.name;
  }

  renderDetailsTable(profile.personalDetails, personalDetails);
  renderDetailsTable(profile.contactDetails, contactDetails);

  if (mobileName) {
    mobileName.textContent = profile.name;
  }
  if (mobileSummary) {
    mobileSummary.textContent = profile.summary;
  }

  if (mobileDetails) {
    const detailLookup = new Map();
    [...profile.personalDetails, ...profile.contactDetails].forEach(
      (detail) => detailLookup.set(detail.label, detail)
    );

    const mobileRows = profile.mobileDetailLabels
      .map((label) => detailLookup.get(label))
      .filter(Boolean);

    renderDetailsTable(mobileRows, mobileDetails);
  }
};

export const renderLinks = (profile) => {
  const { linksList } = state.elements;
  if (!linksList) return;

  linksList.innerHTML = "";
  profile.links.forEach(({ label, href }) => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = label;
    li.appendChild(anchor);
    linksList.appendChild(li);
  });
};

export const renderJobs = (jobs) => {
  const { jobsList } = state.elements;
  if (!jobsList) return;

  jobsList.innerHTML = "";

  const displayableJobs = jobs.filter(({ display }) => display === true);
  const visibleJobs = state.showAllJobs
    ? displayableJobs
    : displayableJobs.slice(0, INITIAL_VISIBLE_JOBS);

  visibleJobs.forEach((job) => {
    jobsList.appendChild(createJobEntry(job));
  });

  if (displayableJobs.length > INITIAL_VISIBLE_JOBS) {
    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.id = "show_more_jobs_btn";
    toggleButton.classList.add("show-more-btn", "button");
    toggleButton.textContent = state.showAllJobs ? "Show Less" : "Show More";
    toggleButton.addEventListener("click", () => {
      state.showAllJobs = !state.showAllJobs;
      renderJobs(jobs);
    });
    jobsList.appendChild(toggleButton);
  }
};

export const renderCertificates = (certificates) => {
  const { certificatesList } = state.elements;
  if (!certificatesList) return;

  certificatesList.innerHTML = "";

  const ul = document.createElement("ul");
  certificates
    .filter(({ display }) => display === true)
    .slice(0, MAX_CERTIFICATES_RENDERED)
    .forEach(({ name, description, date }) => {
      const li = document.createElement("li");
      const nameSpan = document.createElement("span");
      nameSpan.textContent = name;
      li.appendChild(nameSpan);
      li.append(`: ${description}${date ? `, ${date}` : ""}`);
      ul.appendChild(li);
    });

  certificatesList.appendChild(ul);
};

export const handleMobileToggle = () => {
  const { toggleProfileBtn, mobileExtra } = state.elements;
  if (!toggleProfileBtn || !mobileExtra) return;

  toggleProfileBtn.addEventListener("click", () => {
    mobileExtra.classList.remove("mobileHidden");
    toggleProfileBtn.style.display = "none";
  });
};

export const initThemeControls = () => {
  const { themeToggleBtn } = state.elements;
  if (!themeToggleBtn) return;

  const storedTheme = normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));
  const initialTheme = applyThemePreference(storedTheme);
  updateThemeToggleLabel(initialTheme);

  themeToggleBtn.addEventListener("click", (event) => {
    if (event.detail > 1) return;
    const currentTheme = document.body.dataset.theme || null;
    const nextTheme = currentTheme
      ? getNextManualTheme(currentTheme)
      : getInitialManualTheme();
    const appliedTheme = applyThemePreference(nextTheme);
    updateThemeToggleLabel(appliedTheme);
  });

  themeToggleBtn.addEventListener("dblclick", (event) => {
    event.preventDefault();
    const appliedTheme = applyThemePreference(null);
    updateThemeToggleLabel(appliedTheme);
  });
};

export const loadProfileImage = (profile) => {
  const { profileImage } = state.elements;
  if (!profileImage || profileImage.querySelector("img.profile-photo")) return;

  const img = new Image(profile.photo.width, profile.photo.height);
  img.src = profile.photo.src;
  img.alt = profile.photo.alt;
  img.className = "profile-photo";
  profileImage.appendChild(img);
};
