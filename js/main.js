import { profile, certificates, jobs } from "./data.js";
import {
  hydrateElements,
  renderProfileSections,
  renderLinks,
  renderJobs,
  renderCertificates,
  handleMobileToggle,
  initThemeControls,
  loadLandscapeImage,
} from "./ui.js";

const init = () => {
  hydrateElements();
  renderProfileSections(profile);
  renderLinks(profile);
  renderJobs(jobs);
  renderCertificates(certificates);
  handleMobileToggle();
  initThemeControls();
  loadLandscapeImage(profile);
  window.addEventListener("resize", () => loadLandscapeImage(profile));
};

document.addEventListener("DOMContentLoaded", init);
