import { profile, certificates, jobs } from "./data.js";
import {
  hydrateElements,
  renderProfileSections,
  renderLinks,
  renderJobs,
  renderCertificates,
  handleMobileToggle,
  initThemeControls,
  loadProfileImage,
} from "./ui.js";

const init = () => {
  hydrateElements();
  renderProfileSections(profile);
  renderLinks(profile);
  renderJobs(jobs);
  renderCertificates(certificates);
  handleMobileToggle();
  initThemeControls();
  loadProfileImage(profile);
};

document.addEventListener("DOMContentLoaded", init);
