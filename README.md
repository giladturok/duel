# DUEL project page

Source for <https://giladturok.github.io/duel/>, the project page for
*DUEL: Exact Likelihood Reshapes Masked Diffusion Scaling Laws and Beyond*.

A single static page, with no build step and no framework:

- `index.html`: all content. Math is LaTeX, rendered by KaTeX (macros in `static/js/main.js`).
  Write `<` inside math as `&lt;`, or the HTML parser will eat it.
- `static/css/style.css`: layout and palette. `--duel` (sage) marks exact / DUEL and `--elbo` (terracotta)
  marks bound / ELBO, matching the paper's figures.
- `static/images/`: figures exported from `manuscript/figures/*.pdf`.

Preview locally with `python -m http.server` and open <http://localhost:8000>.
Numbers in the tables are copied from `manuscript/sections/experiments.tex`.
