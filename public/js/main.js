document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerBtn");
  const nav = document.querySelector(".main-nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  const heroSearchForm = document.getElementById("heroSearchForm");
  if (heroSearchForm) {
    heroSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = document.getElementById("heroSearchInput").value.trim();
      window.location.href = "programme.html" + (q ? "?q=" + encodeURIComponent(q) : "");
    });
  }
});
