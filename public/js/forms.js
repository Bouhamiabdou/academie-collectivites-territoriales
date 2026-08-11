function populateSectionSelect() {
  const select = document.getElementById("regSection");
  if (!select) return;
  const lang = getLang();
  const placeholder = TRANSLATIONS["reg.form.section.placeholder"][lang];
  select.innerHTML =
    `<option value="" disabled selected>${placeholder}</option>` +
    PROGRAMME.map((s, i) => `<option value="${i + 1}">${String(i + 1).padStart(2, "0")} — ${lang === "ar" ? s.ar : s.fr}</option>`).join("");
}

function setupFormSubmit(formId, successId) {
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form || !success) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    success.classList.add("visible");
    success.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateSectionSelect();
  setupFormSubmit("registerForm", "registerSuccess");
  setupFormSubmit("contactForm", "contactSuccess");
  setupFormSubmit("propositionForm", "propositionSuccess");
});

document.addEventListener("langchange", populateSectionSelect);
