// DUEL project page: KaTeX rendering, TOC highlighting, BibTeX copy.
document.addEventListener("DOMContentLoaded", () => {
  renderMathInElement(document.body, {
    delimiters: [
      { left: "\\[", right: "\\]", display: true },
      { left: "$", right: "$", display: false },
    ],
    macros: {
      "\\bx": "\\mathbf{x}",
      "\\bz": "\\mathbf{z}",
      "\\e": "\\mathbf{e}",
      "\\rev": "\\mathbf{x}^{#1}",
      "\\pol": "\\pi",
      "\\punif": "\\pi^{\\mathrm{unif}}",
      "\\pF": "\\pi^{F}",
      "\\sigF": "\\sigma^{F}",
      "\\ppol": "p^{#1}_{\\theta}",
      "\\E": "\\mathbb{E}",
      "\\Cat": "\\mathrm{Cat}",
      "\\KL": "D_{\\mathrm{KL}}",
    },
    throwOnError: false,
  });

  // Highlight the TOC entry of the section currently in view.
  const links = [...document.querySelectorAll(".toc a")];
  const targets = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const setActive = () => {
    let current = targets[0];
    for (const t of targets) if (t.getBoundingClientRect().top < window.innerHeight * 0.3) current = t;
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current.id));
  };
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();

  // Copy BibTeX.
  document.querySelectorAll(".copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = document.getElementById(btn.dataset.target).innerText;
      try { await navigator.clipboard.writeText(text); btn.textContent = "Copied"; }
      catch { btn.textContent = "Select & copy"; }
      setTimeout(() => (btn.textContent = "Copy"), 1600);
    });
  });
});
