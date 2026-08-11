function renderCalendar(filter) {
  const container = document.getElementById("calGrid");
  if (!container) return;
  const lang = getLang();
  const activeFilter = filter || "all";

  const list = SESSIONS.filter((s) => activeFilter === "all" || s.format === activeFilter);

  container.innerHTML = list
    .map(
      (s) => `
    <div class="cal-card">
      <span class="cal-card-format">${TRANSLATIONS["cal.filter." + s.format][lang]}</span>
      <h3>${lang === "ar" ? s.ar : s.fr}</h3>
      <div class="cal-card-meta">
        <span>&#128197; ${lang === "ar" ? s.dateAr : s.date}</span>
        <span>&#128205; ${lang === "ar" ? s.cityAr : s.city}</span>
      </div>
      <div class="cal-card-footer">
        <span class="cal-card-places">${s.places} ${TRANSLATIONS["cal.card.places"][lang]}</span>
        <a class="btn btn-primary" href="inscription.html">${TRANSLATIONS["cal.card.register"][lang]}</a>
      </div>
    </div>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("calGrid")) return;
  renderCalendar("all");
  const buttons = document.querySelectorAll(".cal-filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCalendar(btn.dataset.filter);
    });
  });
});

document.addEventListener("langchange", () => {
  if (!document.getElementById("calGrid")) return;
  const active = document.querySelector(".cal-filter-btn.active");
  renderCalendar(active ? active.dataset.filter : "all");
});
