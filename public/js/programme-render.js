/* Rendu de la grille des rubriques du programme et des mini-cartes de l'accueil */

function axeLabel(count, lang) {
  if (lang === "ar") return TRANSLATIONS["prog.axes.count"][lang];
  return count === 1 ? "axe" : "axes";
}

function moduleLabel(count, lang) {
  if (lang === "ar") return TRANSLATIONS["prog.modules.count"][lang];
  return count === 1 ? "module" : "modules";
}

function renderProgrammeGrid() {
  const container = document.getElementById("programmeList");
  if (!container) return;
  const lang = getLang();

  container.innerHTML = "";
  PROGRAMME.forEach((section, si) => {
    const card = document.createElement("a");
    card.className = "prog-mini-card prog-section";
    card.href = `rubrique.html?s=${si + 1}`;
    card.dataset.search = buildSearchText(section).toLowerCase();
    card.innerHTML = `
      <span class="prog-mini-num">${String(si + 1).padStart(2, "0")}</span>
      <span class="prog-mini-title">${lang === "ar" ? section.ar : section.fr}</span>
      <span class="prog-mini-count">${section.axes.length} ${axeLabel(section.axes.length, lang)}</span>
    `;
    container.appendChild(card);
  });

  const search = document.getElementById("progSearch");
  filterProgramme(search ? search.value : "");
}

function buildSearchText(section) {
  let parts = [section.fr, section.ar];
  section.axes.forEach((axe) => {
    parts.push(axe.fr, axe.ar);
    axe.items.forEach((it) => parts.push(it.fr, it.ar));
  });
  return parts.join(" | ");
}

function filterProgramme(query) {
  const q = query.trim().toLowerCase();
  const sections = document.querySelectorAll("#programmeList .prog-section");
  let visibleCount = 0;
  sections.forEach((el) => {
    const match = !q || el.dataset.search.includes(q);
    el.style.display = match ? "" : "none";
    if (match) visibleCount++;
  });
  const empty = document.getElementById("progEmpty");
  if (empty) empty.style.display = visibleCount === 0 ? "block" : "none";
}

function renderProgrammeMiniCards() {
  const container = document.getElementById("programmeMiniCards");
  if (!container) return;
  const lang = getLang();
  const sectionsHtml = PROGRAMME.map(
    (section, si) => `
    <a class="prog-mini-card" href="rubrique.html?s=${si + 1}">
      <span class="prog-mini-num">${String(si + 1).padStart(2, "0")}</span>
      <span>
        <p class="prog-mini-title">${lang === "ar" ? section.ar : section.fr}</p>
        <span class="prog-mini-count">${section.axes.length} ${axeLabel(section.axes.length, lang)}</span>
      </span>
    </a>
  `
  ).join("");
  const suggestHtml = `
    <a class="prog-mini-card prog-mini-card-suggest" href="propositions.html">
      <span class="prog-mini-num">+</span>
      <span>
        <p class="prog-mini-title">${TRANSLATIONS["home.programme.suggest.title"][lang]}</p>
        <span class="prog-mini-count">${TRANSLATIONS["home.programme.suggest.desc"][lang]}</span>
      </span>
    </a>
  `;
  container.innerHTML = sectionsHtml + suggestHtml;
}

function renderProgrammeStats() {
  const elS = document.getElementById("statSections");
  const elA = document.getElementById("statAxes");
  const elI = document.getElementById("statItems");
  if (elS) elS.textContent = PROGRAMME_STATS.sections;
  if (elA) elA.textContent = PROGRAMME_STATS.axes;
  if (elI) elI.textContent = PROGRAMME_STATS.items;
}

function renderAll() {
  renderProgrammeGrid();
  renderProgrammeMiniCards();
  renderProgrammeStats();
}

document.addEventListener("DOMContentLoaded", () => {
  // Anciens liens programme.html#sN : redirection vers la page de la rubrique
  const legacy = location.hash.match(/^#s(\d+)$/);
  if (legacy && document.getElementById("programmeList")) {
    location.replace("rubrique.html?s=" + legacy[1]);
    return;
  }

  const search = document.getElementById("progSearch");
  if (search) {
    search.addEventListener("input", (e) => filterProgramme(e.target.value));
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) {
      search.value = q;
      filterProgramme(q);
    }
  }
});

document.addEventListener("langchange", renderAll);
