(function () {
  const byId = (id) => document.getElementById(id);

  // --- Header -----------------------------------------------------------
  byId("name").textContent = CONFIG.name;
  byId("title").textContent = CONFIG.title;
  byId("school-year").textContent = `${CONFIG.school} · ${CONFIG.classYear}`;
  document.title = CONFIG.name;

  // --- LinkedIn -----------------------------------------------------------
  byId("linkedin-btn").href = CONFIG.linkedin;

  // --- Portfolio (hidden automatically while empty) ------------------------
  const portfolioBtn = byId("portfolio-btn");
  const hasPortfolio = typeof CONFIG.portfolio === "string" && CONFIG.portfolio.trim() !== "";
  if (hasPortfolio) {
    portfolioBtn.href = CONFIG.portfolio;
    portfolioBtn.hidden = false;
  } else {
    portfolioBtn.hidden = true;
  }

  // --- Contact: email / phone --------------------------------------------
  byId("email-link").href = `mailto:${CONFIG.email}`;
  byId("email-value").textContent = CONFIG.email;

  const telDigits = CONFIG.phone.replace(/[^\d+]/g, "");
  byId("phone-link").href = `tel:${telDigits}`;
  byId("phone-value").textContent = CONFIG.phone;

  // --- Contact panel toggle -----------------------------------------------
  const toggle = byId("contact-toggle");
  const panel = byId("contact-panel");
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;
  });
})();
