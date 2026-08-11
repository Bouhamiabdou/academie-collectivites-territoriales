/* Rendu de l'accordéon du programme (page programme.html) + mini-cartes (page index.html) */

function axeLabel(count, lang) {
  if (lang === "ar") return TRANSLATIONS["prog.axes.count"][lang];
  return count === 1 ? "axe" : "axes";
}

function renderProgrammeAccordion() {
  const container = document.getElementById("programmeList");
  if (!container) return;
  const lang = getLang();
  const empty = document.getElementById("progEmpty");

  container.innerHTML = "";
  PROGRAMME.forEach((section, si) => {
    const secEl = document.createElement("div");
    secEl.className = "prog-section";
    secEl.dataset.index = String(si);

    const searchText = buildSearchText(section);
    secEl.dataset.search = searchText.toLowerCase();

    const toggle = document.createElement("button");
    toggle.className = "prog-section-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = `
      <span class="prog-section-num">${String(si + 1).padStart(2, "0")}</span>
      <span class="prog-section-title">${lang === "ar" ? section.ar : section.fr}</span>
      <span class="prog-section-count">${section.axes.length} ${axeLabel(section.axes.length, lang)}</span>
      <span class="prog-chevron">&#9662;</span>
    `;

    const body = document.createElement("div");
    body.className = "prog-section-body";
    body.hidden = true;
    body.innerHTML = section.axes
      .map(
        (axe) => `
        <div class="prog-axe">
          <h4>${lang === "ar" ? axe.ar : axe.fr}</h4>
          <ul>
            ${axe.items.map((it) => `<li>${lang === "ar" ? it.ar : it.fr}</li>`).join("")}
          </ul>
        </div>
      `
      )
      .join("");

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      body.hidden = expanded;
    });

    secEl.appendChild(toggle);
    secEl.appendChild(body);
    container.appendChild(secEl);
  });

  if (location.hash.startsWith("#s")) {
    const idx = parseInt(location.hash.replace("#s", ""), 10) - 1;
    const target = container.querySelector(`[data-index="${idx}"]`);
    if (target) {
      const t = target.querySelector(".prog-section-toggle");
      t.setAttribute("aria-expanded", "true");
      target.querySelector(".prog-section-body").hidden = false;
      setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }

  const search = document.getElementById("progSearch");
  if (search && search.value.trim()) filterProgramme(search.value);
  if (empty) empty.style.display = "none";
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
    if (match && q) {
      const toggle = el.querySelector(".prog-section-toggle");
      toggle.setAttribute("aria-expanded", "true");
      el.querySelector(".prog-section-body").hidden = false;
    }
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
    <a class="prog-mini-card" href="programme.html#s${si + 1}">
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
  renderProgrammeAccordion();
  renderProgrammeMiniCards();
  renderProgrammeStats();
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  const search = document.getElementById("progSearch");
  if (search) {
    search.addEventListener("input", (e) => filterProgramme(e.target.value));
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) {
      search.value = q;
      filterProgramme(q);
    }
  }

  const expandAll = document.getElementById("progExpandAll");
  const collapseAll = document.getElementById("progCollapseAll");
  if (expandAll) {
    expandAll.addEventListener("click", () => {
      document.querySelectorAll("#programmeList .prog-section-toggle").forEach((t) => {
        t.setAttribute("aria-expanded", "true");
        t.parentElement.querySelector(".prog-section-body").hidden = false;
      });
    });
  }
  if (collapseAll) {
    collapseAll.addEventListener("click", () => {
      document.querySelectorAll("#programmeList .prog-section-toggle").forEach((t) => {
        t.setAttribute("aria-expanded", "false");
        t.parentElement.querySelector(".prog-section-body").hidden = true;
      });
    });
  }
});

document.addEventListener("langchange", renderAll);
