import { profile, certificates, jobs } from "./data.js";
import {
  hydrateElements,
  renderProfileSections,
  renderLinks,
  renderJobs,
  renderCertificates,
  handleMobileToggle,
  loadLandscapeImage,
} from "./ui.js";

const init = () => {
  hydrateElements();
  renderProfileSections(profile);
  renderLinks(profile);
  renderJobs(jobs);
  renderCertificates(certificates);
  handleMobileToggle();
  loadLandscapeImage(profile);
  window.addEventListener("resize", () => loadLandscapeImage(profile));
};

document.addEventListener("DOMContentLoaded", init);
