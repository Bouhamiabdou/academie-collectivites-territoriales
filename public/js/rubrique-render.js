/* Rendu de la page de détail d'une rubrique du programme (rubrique.html?s=N) */

function rubriqueIndex() {
  const n = parseInt(new URLSearchParams(window.location.search).get("s"), 10);
  return Number.isInteger(n) && n >= 1 && n <= PROGRAMME.length ? n - 1 : -1;
}

function renderRubrique() {
  const lang = getLang();
  const t = (key) => TRANSLATIONS[key][lang];
  const pick = (obj) => (lang === "ar" ? obj.ar : obj.fr);
  const si = rubriqueIndex();

  const title = document.getElementById("rubTitle");
  const kicker = document.getElementById("rubKicker");
  const meta = document.getElementById("rubMeta");
  const crumb = document.getElementById("rubCrumb");
  const body = document.getElementById("rubBody");
  const prev = document.getElementById("rubPrev");
  const next = document.getElementById("rubNext");

  if (si < 0) {
    title.textContent = t("prog.notfound.title");
    crumb.textContent = t("prog.notfound.title");
    kicker.textContent = "";
    meta.textContent = t("prog.notfound.desc");
    body.innerHTML = "";
    prev.hidden = true;
    next.hidden = true;
    return;
  }

  const section = PROGRAMME[si];
  const modules = section.axes.reduce((n, axe) => n + axe.items.length, 0);
  const num = String(si + 1).padStart(2, "0");

  document.title = `${pick(section)} — ${TRANSLATIONS["brand.name"][lang]}`;
  crumb.textContent = `${t("prog.section.label")} ${num}`;
  kicker.textContent = `${t("prog.section.label")} ${num} / ${PROGRAMME.length}`;
  title.textContent = pick(section);
  meta.textContent = `${section.axes.length} ${axeLabel(section.axes.length, lang)} · ${modules} ${moduleLabel(modules, lang)}`;

  body.innerHTML = section.axes
    .map(
      (axe, ai) => `
      <article class="rub-axe">
        <h2><span class="rub-axe-num">${ai + 1}</span>${pick(axe)}</h2>
        <ol class="rub-modules">
          ${axe.items.map((it) => `<li>${pick(it)}</li>`).join("")}
        </ol>
      </article>
    `
    )
    .join("");

  prev.hidden = si === 0;
  next.hidden = si === PROGRAMME.length - 1;
  if (!prev.hidden) {
    prev.href = `rubrique.html?s=${si}`;
    prev.textContent = t("prog.prev");
  }
  if (!next.hidden) {
    next.href = `rubrique.html?s=${si + 2}`;
    next.textContent = t("prog.next");
  }
}

document.addEventListener("langchange", renderRubrique);
