# charlesrabolli.com

Personal site of Charles P. Rabolli, built with [Hugo](https://gohugo.io/) (no theme, custom layouts) and deployed to GitHub Pages by `.github/workflows/publish.yaml` on every push to `main`. Cloudflare provides DNS in front of GitHub Pages.

## Run locally

```bash
hugo server
```

Then open http://localhost:1313.

## Where things live

| What | File |
|---|---|
| Home page bio | `content/_index.md` |
| Home page layout (research highlights, "Now", education) | `layouts/index.html` |
| News list on the home page | `data/news.yaml` |
| Education and training | `data/education.yaml` |
| Publications | `data/publications.yaml` |
| RNA biology deep dive | `content/rna-biology/index.md` |
| RNA therapeutics deep dive | `content/rna-therapeutics/index.md` |
| Computational pathology deep dive | `content/computational-pathology/index.md` |
| Chart data (timelines, PubMed counts, etc.) | `assets/data/*.json` |
| Diagrams (inline SVG, theme-aware) | `assets/svg/*.svg` |
| Styles / scripts | `assets/css/main.css`, `assets/js/*.js` |

## Writing shortcodes (for the long-form pages)

```
{{< fig svg="svg/name.svg" >}}Caption…{{< /fig >}}        inline SVG diagram
{{< fig chart="data-file" >}}Caption…{{< /fig >}}          interactive chart from assets/data/data-file.json
{{< fig src="/figures/x.png" alt="…" >}}Caption…{{< /fig >}} image
{{< video id="YOUTUBE_ID" title="…" who="…" >}}Note…{{< /video >}}
{{< callout type="bench|lab|bedside|microscope|key|caution" title="…" >}}…{{< /callout >}}
{{< interactive name="drach" >}}                            partial in layouts/partials/interactives/
```

Figures are numbered automatically. Headings `##`/`###` populate the sticky table of contents.
