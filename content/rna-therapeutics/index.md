---
title: "RNA Therapeutics: The Business of Programmable Medicine"
layout: longform
weight: 15
eyebrow: "A field guide · RNA therapeutics & biotech"
subtitle: "How antisense, siRNA, and mRNA medicines went from punchline to platform, how the companies behind them were built and financed, and the questions I'd ask of an RNA startup today."
description: "A long-form guide to the business of RNA therapeutics: modalities, chemistry and delivery as competitive moats, how Ionis, Alnylam, and Moderna were built, pricing, dealmaking, risk, and a framework for evaluating RNA startups, by Charles P. Rabolli."
cardText: "The business side of RNA medicines: the modalities, why chemistry and delivery became moats, how Ionis, Alnylam, and Moderna were built, pricing, dealmaking, what goes wrong, and how I'd evaluate an RNA startup."
parts: "8 parts"
card: "svg/rt-card.svg"
thumbnail: "/img/charles.jpg"
date: 2026-10-22
lastmod: 2026-10-22
scripts: ["js/peaksales.js"]
---

## Introduction {#introduction}

<p class="intro">On my <a href="/rna-biology/">RNA biology</a> page I tell the scientific story: how a molecule once dismissed as a disposable copy turned out to catalyze, regulate, and carry chemical marks. This page tells the other half. It covers how that science became an industry, why it took so long, who paid for it, and what the business of RNA medicines looks like now that it works.</p>

The economic idea at the heart of the field is simple to state. A conventional drug is a new molecule for every target. An RNA drug is mostly *information*: once you can make an oligonucleotide stable, safe, and able to reach a particular tissue, the next drug for that tissue is largely a matter of changing the sequence. That is what people mean by a *platform*. It is why companies that spent decades losing money are now among the most valuable in biotech, and why large pharmaceutical companies pay billions for delivery technologies rather than for individual drugs.

It took a long time to get here. Both antisense and RNA interference needed about twenty years from discovery to their first approved medicine, and both went through periods when most of the industry gave up on them. The companies that survived those winters did so with patient capital, unglamorous chemistry, and business models built to outlast skepticism.

I come at this as a physician-scientist rather than an investor. My PhD was on RNA biology in the heart, and many of the largest opportunities for RNA medicines are cardiometabolic. Over the past year I've also been involved in the student biotech-entrepreneurship community through [Nucleate](https://nucleate.org), and I completed Harvard Business School Online's CORe program in business fundamentals. This page is my attempt to connect the science to the strategy. Along the way, **Deal sheet** boxes unpack a transaction, **If you're building** boxes are notes for founders, and **At the bedside** boxes are reminders that the end customer is a patient.

*This page is educational. It is not investment advice, and it doesn't recommend any company or security. Financial figures are list prices or company-reported numbers available as of 2026.*

{{< fig chart="rt-timeline" >}}**Twenty years, then faster.** Time from a key scientific discovery (open circle) to the first U.S. approval built on it (filled circle). Antisense and RNAi each took two decades. mRNA, carried by pandemic urgency and existing lipid-nanoparticle know-how, took fifteen; CRISPR guide-RNA editing took eleven.{{< /fig >}}

### Start here: a viewing path {#watchlist}

{{< watchlist >}}
1. [Founder Stories: John Maraganore](#alnylam) (Axial). Alnylam's founding CEO on building an RNAi company through the hard years.
2. [Bringing a New Modality to Scale](#alnylam) (Ginkgo Bioworks). Maraganore on what it takes to turn a modality into an industry.
3. [Nusinersen: the first FDA-approved treatment for SMA](#ionis) (Adrian Krainer, Gairdner Symposium). From a splicing mechanism to a drug.
4. [Scientist Stories: Phil Sharp](#ecosystem) (Axial). A Nobel laureate who co-founded both Biogen and Alnylam.
5. [George Church on building biotech companies](#ecosystem) (Nucleate Virtual Summit 2025). A serial academic founder on company creation.
6. [Meet the Founders: Nucleate Activator](#ecosystem) (Nucleate). What it looks like to start a company from a lab.
{{< /watchlist >}}

## Part I: The Toolkit {#part-i}

"RNA therapeutics" covers several distinct technologies that share chemistry, manufacturing, and often delivery, but do very different things to a cell. The business differences follow from the biological ones.

{{< fig svg="svg/rt-modalities.svg" >}}**Where each modality acts.** Editors change DNA, splice-switching oligos act on pre-mRNA in the nucleus, silencers destroy a message, RNA-editing oligos recode it, mRNA medicines add a new one, and aptamers bind proteins directly.{{< /fig >}}

| Modality | What it does | How long one dose lasts | Typical delivery | First U.S. approval |
|---|---|---|---|---|
| Antisense oligo (RNase H) | Binds a target RNA and triggers its destruction | Weeks to months | Subcutaneous (often GalNAc), intrathecal | 1998 (fomivirsen) |
| Splice-switching oligo | Blocks a splice signal to change which exons are kept | Months | Intrathecal, intravenous | 2016 (nusinersen, eteplirsen) |
| siRNA | Loads into RISC, which cuts the target mRNA repeatedly | Three to six months | Subcutaneous GalNAc, IV lipid nanoparticle | 2018 (patisiran) |
| mRNA | Instructs cells to make a protein, often an antigen | Days | Intramuscular or IV lipid nanoparticle | 2020 (COVID-19 vaccines, emergency use) |
| Self-amplifying RNA | An mRNA that copies itself inside the cell | Longer than mRNA, at lower doses | Intramuscular lipid nanoparticle | Japan, 2023 (not yet U.S.) |
| RNA-guided editing | Cas9 or a base editor, guided by RNA, changes DNA | Potentially permanent | Cells edited outside the body; LNP-mRNA in vivo | 2023 (exa-cel, edited outside the body) |
| RNA-editing oligo | Recruits the cell's ADAR enzyme to change a single base | Under study | Subcutaneous GalNAc | Clinical stage; first human data 2024 |
| Aptamer | A folded RNA that binds a protein like an antibody | Weeks | Intravitreal | 2004 (pegaptanib) |

Two business observations fall out of this table. First, most approved RNA drugs turn something *down*. That biases the field toward targets where less of a protein is better: a toxic misfolded protein like transthyretin, or a cholesterol regulator like PCSK9. Second, the modalities differ enormously in durability, from days for mRNA to months for siRNA to potentially permanent for editing. Durability shapes everything downstream: dosing, price, how often a patient sees a clinician, and who gets paid for administering the drug.

{{< callout type="key" title="The human-genetics shortcut" >}}
The best RNA-silencing targets often come with a natural experiment already run. People born with loss-of-function variants in *PCSK9*, *APOC3*, or *ANGPTL3* have lower cholesterol or triglycerides and less heart disease, and they are otherwise healthy. That tells a drug developer two things before any trial: turning the gene down probably helps, and it is probably safe. An oligonucleotide that silences a liver gene is close to the purest way to copy that experiment pharmacologically, which is why cardiometabolic targets dominate many RNA pipelines.
{{< /callout >}}

## Part II: Chemistry Was the Moat (1978–2018) {#part-ii}

### From an idea to a drug-like molecule

In 1978, Paul Zamecnik and Mary Stephenson showed that a short synthetic oligonucleotide complementary to Rous sarcoma virus RNA could inhibit the virus in cells ([Zamecnik & Stephenson, 1978](https://pubmed.ncbi.nlm.nih.gov/75545/)). The idea was elegant. The molecule was not a drug. Unmodified nucleic acids are chewed up by nucleases within minutes, bounce off cell membranes, and can trigger the immune system.

The next two decades were chemistry. Replacing a non-bridging oxygen in the backbone with sulfur (the *phosphorothioate* linkage) slowed degradation and helped oligos bind blood proteins, so they stayed in circulation long enough to reach tissues. Modifications at the 2′ position of the sugar (2′-*O*-methoxyethyl, 2′-*O*-methyl, 2′-fluoro) and "locked" or constrained-ethyl sugars increased binding strength and stability and reduced immune activation. For siRNAs, the field eventually learned to modify nearly every nucleotide.

That chemistry is the first moat in this business. It is patentable, it took decades of iteration, and it is hard to reproduce quickly. When people say a company "owns a platform," they usually mean it owns a specific combination of chemistry, the know-how to make it at scale, and data on how it behaves in humans.

### GalNAc: the delivery solution that made the liver easy

The second moat was delivery. The first siRNA drug, patisiran, was packaged in lipid nanoparticles and infused intravenously every three weeks, with premedication to prevent infusion reactions. It worked, and it was approved in 2018. But the field's real breakthrough was simpler. Attaching a three-armed sugar, *N*-acetylgalactosamine (GalNAc), lets a chemically stabilized siRNA bind the asialoglycoprotein receptor (ASGPR), which is found in very large numbers on liver cells and almost nowhere else ([Nair et al., 2014](https://pubmed.ncbi.nlm.nih.gov/25434769/)). The drug can be injected under the skin and taken up by hepatocytes.

{{< fig svg="svg/rt-galnac.svg" >}}**Why a twice-yearly injection can work.** A fully modified siRNA with a GalNAc ligand binds a liver-specific receptor, is taken up into endosomes that act as a slow-release depot, loads into the catalytic RISC complex, and keeps silencing its target mRNA for months.{{< /fig >}}

The result was a steady march in dosing convenience. Patisiran (2018) was an infusion every three weeks. Givosiran (2019), the first GalNAc-siRNA, was a monthly shot. Vutrisiran (2022) moved to every three months. Inclisiran (2021), which silences *PCSK9* to lower LDL cholesterol, is given twice a year after two initial doses.

{{< fig chart="rt-dosing" >}}**Durability became a competitive advantage.** Days between maintenance doses for selected approved oligonucleotide drugs. Chemistry and GalNAc conjugation stretched siRNA dosing from every three weeks to every six months.{{< /fig >}}

{{< callout type="deal" title="Two drugs, one target, one rare disease" >}}
Familial chylomicronemia syndrome (FCS) is an ultra-rare genetic disorder that causes extremely high triglycerides and recurrent pancreatitis. In December 2024 the FDA approved Ionis's olezarsen, a GalNAc-conjugated *antisense* drug against *APOC3* given monthly, at an annual list price of $595,000. In November 2025 it approved Arrowhead's plozasiran, a GalNAc *siRNA* against the same gene, given every three months. Same target, same patients, two chemistries, different dosing intervals. When the biology is shared, competition shifts to durability, data, price, and commercial execution. The same race is now playing out in much larger cardiovascular indications.
{{< /callout >}}

## Part III: Delivery Is the Business {#part-iii}

If chemistry made oligonucleotides into drugs, delivery decides *which* drugs are possible. Look at the approved list and a pattern jumps out: most act in the liver, the central nervous system, or the eye, the three places the field learned to reach first.

| Tissue | How RNA drugs get there | Status | Examples |
|---|---|---|---|
| Liver | GalNAc conjugates; lipid nanoparticles | Many approved drugs | inclisiran, vutrisiran, olezarsen, plozasiran |
| Brain and spinal cord | Injection into the spinal fluid | Approved | nusinersen, tofersen |
| Eye | Injection into the eye | Approved | fomivirsen (historic), pegaptanib |
| Immune system (vaccines) | Lipid-nanoparticle mRNA, intramuscular | Approved | COVID-19 and RSV vaccines |
| Blood stem cells | Edited outside the body, then returned | Approved | exa-cel |
| Skeletal muscle | Unconjugated oligos (modest uptake); antibody–oligonucleotide conjugates | Approved (exon skipping); conjugates in late-stage trials | eteplirsen; antibody-conjugate programs |
| Tumors | Personalized mRNA cancer vaccines | Late-stage trials | neoantigen vaccines |
| Lung | Inhaled siRNA | Early trials | — |
| Heart, kidney, fat | Conjugates, new nanoparticles | Mostly preclinical or early | — |

There's a lesson for the heart in the first row. One of the largest RNAi markets is a *heart* disease, transthyretin amyloid cardiomyopathy, treated by silencing a gene in the *liver*. The misfolded protein that deposits in the heart is made by hepatocytes. In March 2025 the FDA expanded vutrisiran's label to cardiomyopathy, based on the HELIOS-B outcomes trial. Inclisiran lowers cardiovascular risk factors the same way. Much of "cardiovascular RNA medicine" today is really hepatic RNA medicine.

Reaching the heart muscle itself is a different problem, and for someone who spent a PhD on RNA regulation in cardiomyocytes, it's the delivery frontier I watch most closely. Antibody–oligonucleotide conjugates, which use an antibody against a receptor on muscle cells to carry an oligo inside, are the most advanced approach for muscle. In October 2025 Novartis agreed to acquire Avidity Biosciences, the leading company built on that idea, for about $12 billion. The deal closed in February 2026, and Avidity's early-stage cardiology programs were set to be spun out into a separate company. A price like that is a statement about what a solved delivery problem is worth.

{{< callout type="founder" >}}
If your company's thesis depends on reaching a new tissue, the delivery data *is* the company. Investors will ask for evidence that the drug reaches the target cell type, at a useful dose, in non-human primates, with a durable effect on a measurable biomarker. "Platform" claims without that data are a hypothesis.
{{< /callout >}}

## Part IV: Three Ways to Build an RNA Company {#part-iv}

The field's three most influential companies were built in strikingly different ways. Each model still has descendants.

### Ionis: the long game, financed by partners {#ionis}

Ionis was founded in 1989, as Isis Pharmaceuticals, by Stanley Crooke. For most of its history it was the definition of a long-horizon science company: decades of medicinal chemistry on antisense oligonucleotides, financed largely by partnering programs with larger companies in exchange for upfront payments, milestones, and royalties. Its first approved drug, fomivirsen in 1998, was a scientific milestone and a commercial footnote.

The turning point was spinal muscular atrophy. The backup gene *SMN2* mostly skips exon 7, partly because of a splicing silencer in the neighboring intron, first described by Ravindra Singh's group. Block that silencer with an antisense oligo and the cell makes more full-length SMN protein. Adrian Krainer's lab at Cold Spring Harbor Laboratory and Ionis scientists led by Frank Bennett screened and optimized the oligo that became nusinersen. Biogen licensed the resulting drug, nusinersen, which was approved in December 2016 for a disease that had been the leading genetic cause of infant death. It was launched at $125,000 per injection: $750,000 in the first year and $375,000 a year after that. That made it one of the most expensive drugs in the world and set off a public argument about rare-disease pricing.

{{< video id="2zFP331gmQo" title="Nusinersen (Spinraza): The First FDA Approved Treatment for SMA" who="Adrian Krainer · Canada Gairdner Symposium 2017" >}}The scientist behind the splicing insight explains how it became a drug.{{< /video >}}

The partnering model has a clear logic. The originator keeps its chemistry engine running without building a sales force, and the partner brings clinical-development scale and commercial reach. The cost is that most of the economics of a breakthrough flow to the partner. AstraZeneca paid Ionis $200 million upfront in 2021 for rights to eplontersen, a transthyretin drug. More recently Ionis has begun launching drugs itself, starting with olezarsen in 2024, a sign that the company now believes it can capture more of the value it creates.

### Alnylam: surviving the RNAi winter {#alnylam}

Alnylam was founded in 2002, four years after RNA interference was described, by five scientists: Phillip Sharp, Paul Schimmel, David Bartel, Thomas Tuschl, and Phillip Zamore. John Maraganore was the founding CEO. The early 2000s were euphoric about RNAi. In 2006 Merck acquired another RNAi company, Sirna Therapeutics, for about $1.1 billion, and RNAi's discoverers won the Nobel Prize the same year.

Then delivery turned out to be much harder than expected, and big pharma lost patience. Several large companies closed or scaled back their RNAi efforts around 2010. In 2014, Merck sold Sirna to Alnylam for about $175 million upfront in cash and stock, a fraction of what it had paid. Alnylam kept investing in the problem everyone else had walked away from: delivery chemistry, first with lipid nanoparticles and then with GalNAc conjugates.

{{< fig chart="rt-revenue" >}}**Compounding versus a windfall.** Alnylam's net product revenue grew every year after its first approval, reaching about $3.0 billion in 2025, when the company reported its first full year of GAAP profitability. Moderna's total revenue rose from about $60 million in 2019 to more than $18 billion in each of 2021 and 2022 on the strength of its COVID-19 vaccine, then fell sharply. The two lines measure slightly different things, product revenue versus total revenue, but the shapes tell the story.{{< /fig >}}

The payoff came in stages: the first siRNA approval in 2018, a series of GalNAc drugs in rare liver-driven diseases, the 2025 cardiomyopathy approval for vutrisiran, and partnerships that extend its reach into common disease. Inclisiran was licensed to The Medicines Company, which Novartis acquired for about $9.7 billion in 2020, largely for that drug. In 2023 Roche paid $310 million upfront to partner on zilebesiran, an siRNA against angiotensinogen being developed for hypertension.

{{< video id="-eZ8DKQ9iLQ" title="Founder Stories: John Maraganore" who="Axial" >}}Alnylam's founding CEO on building a company around a new modality, including the years when the field fell out of favor.{{< /video >}}

{{< video id="Cvs9834r24k" title="Bringing a New Modality to Scale" who="John Maraganore · Ginkgo Bioworks Ferment 2023" >}}On what it takes, scientifically and organizationally, to turn a modality into a pipeline of medicines.{{< /video >}}

{{< callout type="deal" title="The Sirna round trip" >}}
About $1.1 billion in 2006; about $175 million upfront in 2014. The same RNAi assets lost most of their headline value in eight years, not because the science was wrong but because the delivery problem hadn't been solved yet and the buyer's strategy changed. Biotech valuations track *when* a problem will be solved and *who* will be patient enough to solve it, as much as *whether* it can be.
{{< /callout >}}

### Moderna and BioNTech: platform companies meet a pandemic

Moderna was created in 2010 by the venture firm Flagship Pioneering with academic co-founders. It was built on the bet that mRNA could become a general-purpose drug platform for vaccines, protein replacement, and more. It raised unusually large private rounds for years without an approved product. Its December 2018 IPO raised $604 million, the largest biotech IPO on record at the time, and the stock fell 19% on its first day of trading as investors balked at the valuation. BioNTech, founded in Germany in 2008 by Uğur Şahin and Özlem Türeci, focused on mRNA cancer immunotherapy and went public in 2019.

Then the platform thesis was tested at a scale no one had planned for. Both companies' modified-nucleoside mRNA vaccines (BioNTech's with Pfizer) were authorized in December 2020, less than a year after the virus was sequenced. Moderna went from about $60 million in revenue in 2019 to about $18.5 billion in 2021. As pandemic demand fell, so did revenue, to about $3.2 billion in 2024. In 2025 BioNTech agreed to acquire its mRNA peer CureVac in an all-stock deal worth about $1.25 billion.

The lesson isn't that platforms fail. Moderna's speed in 2020 was the platform working exactly as designed. The lesson is that a platform company's value depends on how many *different* products it can turn into durable revenue, and that a single enormous product can hide that question for a few years.

{{< callout type="key" title="Three business models" >}}
**Partner and collect royalties** (Ionis for most of its history): less capital, less risk, less upside per drug. **Build an integrated company** (Alnylam): fund development and commercialization yourself and keep the economics, which needs patient capital and execution across many functions. **Create a platform company from scratch** (Flagship and Moderna): raise large amounts of money for a broad technology bet before any single product is proven. Most RNA startups today blend these models, usually partnering some programs to fund others.
{{< /callout >}}

## Part V: The Economics {#part-v}

### Pricing: the same chemistry across three orders of magnitude

What RNA drugs cost has less to do with how they're made than with how many patients there are and what the alternatives are. Patisiran launched at an average list price of about $450,000 a year, with an expected net price of about $345,000. An independent cost-effectiveness group argued the price would have to fall by roughly 90–95% to meet common thresholds. Inclisiran, made with closely related chemistry, launched at $3,250 per injection, about $6,500 a year, because it competes for a vast population that already has inexpensive generic statins.

{{< fig chart="rt-prices" >}}**Price follows the patient population, not the chemistry.** U.S. list prices at launch per patient per year (one-time for exa-cel), on a log scale. Net prices after rebates are lower. An RNA drug for a few thousand patients and one for millions can use nearly the same molecule and differ in price a hundredfold.{{< /fig >}}

### Cost of goods and manufacturing

Oligonucleotides are made by solid-phase chemical synthesis, and mRNA by in vitro transcription, a cell-free enzymatic reaction. Neither needs the living cell lines that antibody manufacturing does, and both are relatively standardized from one product to the next. That is part of the platform argument: much of the manufacturing process carries over to the next sequence. The constraints are real, though. Specialty raw materials, purification at scale, lipid-nanoparticle formulation, and the cold chain for mRNA all matter. Cost of goods becomes decisive when you move from a rare disease priced at hundreds of thousands of dollars to a primary-care drug priced like a statin.

### Peak sales, on the back of an envelope

Investors and business-development teams start with a crude model: how many patients, how many are diagnosed, how many will be treated, and at what net price. The calculator below lets you see why ultra-rare and common-disease programs can end up with similar revenue estimates and completely different strategies.

{{< interactive name="peaksales" >}}

{{< callout type="bedside" title="Cheap per dose is not the same as easy to use" >}}
Inclisiran is given in a clinic, which in the U.S. often means the practice buys the drug, administers it, and bills for it. That "buy-and-bill" model is familiar to oncology infusion centers and unfamiliar to many primary-care offices. A twice-yearly drug can be a better experience for patients and still face slow uptake if the logistics of ordering, storing, and getting reimbursed don't fit the practices that would prescribe it. Commercial strategy for RNA medicines in common disease is partly a workflow problem.
{{< /callout >}}

## Part VI: Deals and Capital {#part-vi}

Most RNA companies never sell a drug themselves. Their value is realized through licensing deals or acquisition, and the pattern of who pays for what is informative.

{{< fig chart="rt-deals" >}}**Pharma pays for platforms and validated targets.** Selected RNA-medicine deals, log scale. Acquisitions are shown at headline equity value (Lilly–Verve includes a contingent payment); licensing deals show upfront cash only, not potential milestones. Sources: company announcements and filings.{{< /fig >}}

Three patterns stand out:

- **Buying delivery.** Novo Nordisk paid $3.3 billion for Dicerna's RNAi platform in 2021. Novartis paid about $12 billion for Avidity's antibody–oligonucleotide conjugates in 2025–26. In both cases the buyer was paying for the ability to reach tissues and generate drugs, not for a single asset.
- **Buying validated cardiometabolic biology.** Novartis's $9.7 billion acquisition of The Medicines Company was essentially a purchase of inclisiran. Lilly's 2025 acquisition of Verve, for up to about $1.3 billion, was a bet that a one-time, mRNA-delivered base edit of *PCSK9* could someday replace lifelong cholesterol lowering. Roche's upfront payment for zilebesiran was a bet on hypertension.
- **Cycles.** The Sirna round trip, the post-pandemic contraction of mRNA, and consolidation such as BioNTech–CureVac are reminders that the industry swings between over-enthusiasm and over-correction. The best-capitalized companies tend to buy during the corrections.

{{< callout type="deal" title="Anatomy of a licensing deal" >}}
Licensing headlines often quote "up to $2.8 billion," but most of that number is contingent. A typical deal has an **upfront payment** (cash now, the most meaningful number), **development and regulatory milestones** (paid only if trials succeed and approvals come), **sales milestones** (paid only if the drug becomes a commercial success), and **royalties** on sales, usually tiered by revenue. Sometimes there is also an equity investment or co-development and profit-sharing in certain territories. When you read "biobucks," look first at the upfront and the royalty rate.
{{< /callout >}}

## Part VII: What Can Go Wrong {#part-vii}

### Safety

Oligonucleotides have class-level safety issues that depend on chemistry and dose. One early antisense drug for transthyretin amyloidosis carries a boxed warning for thrombocytopenia and glomerulonephritis. Lipid-nanoparticle drugs can cause infusion reactions. In vivo gene editing raises its own questions. In October 2025, after a serious liver event, Intellia paused its phase 3 trials of an LNP-delivered CRISPR therapy for transthyretin amyloidosis, and the FDA placed them on hold. A trial participant later died; the company reported that the death was due to an infection rather than the liver event. The holds were lifted in early 2026 with added liver monitoring. Episodes like this reprice an entire subfield overnight, which is one reason RNA investors watch competitors' safety data almost as closely as their own.

### Efficacy and regulation

Accelerated approval on a surrogate endpoint is a double-edged sword. In 2016 the FDA granted accelerated approval to eteplirsen, an exon-skipping oligo for Duchenne muscular dystrophy, on the basis of small increases in dystrophin protein, after an advisory committee had voted against it and with agency leadership overruling the review team. Patients and advocates celebrated. Others worried that the precedent lowered the evidence bar. For companies, surrogate-based approval accelerates revenue but leaves confirmatory trials, and the risk of losing the indication, ahead.

### Intellectual property

The core enabling technologies of RNA medicine, chemical modifications, lipid nanoparticles, and modified nucleosides, are heavily patented, and some of them have been the subject of high-profile litigation among the largest mRNA companies and the inventors of lipid-nanoparticle technology. For a startup, freedom to operate is not a formality. It shapes which chemistry and delivery systems you can use, and whom you can partner with.

### One patient at a time

The most moving and least solved part of the field is individualized medicine. In 2019, a team at Boston Children's Hospital designed a splice-correcting antisense oligo, named milasen, for a single child with a fatal neurodegenerative disease. They took it from the genetic diagnosis to treatment in about a year ([Kim et al., 2019](https://pubmed.ncbi.nlm.nih.gov/31597037/)). In 2025, a personalized in vivo base editor was given to an infant with a urea-cycle disorder (described in [Part VI of my RNA page](/rna-biology/#part-vi)). The science works. The business model doesn't yet: no conventional company can recoup development costs from one patient. Nonprofits such as the n-Lorem Foundation, started by Ionis's founder, and new regulatory frameworks are trying to fill the gap.

## Part VIII: How I'd Evaluate an RNA Startup {#part-viii}

When I look at an RNA company, as a student organizer hearing pitches or as a scientist reading a paper with a company behind it, these are the questions I've learned to ask.

| Question | Why it matters | Encouraging | Worrying |
|---|---|---|---|
| Is the target genetically validated in humans? | Natural knockouts predict efficacy and safety | Human loss-of-function data, as with *PCSK9* | Rationale based only on mouse models |
| Can the drug reach the tissue? | Delivery determines feasibility | Target engagement in the right cell type in primates | "Platform" claims without tissue data |
| Does the modality fit the biology? | Knockdown, restoration, and editing solve different problems | Clear match (e.g., silence a toxic protein) | A modality in search of a target |
| How durable is it? | Dosing interval drives adoption and competition | Months between doses, or one-time | Frequent dosing in a crowded market |
| Is there an early biomarker? | Fast, cheap proof of concept | LDL, TTR, triglycerides, protein levels | Proof requires a multi-year outcomes trial |
| Is there freedom to operate? | Chemistry and delivery IP | Owned or licensed, with clear rights | Unlicensed use of contested technology |
| Who pays, and how? | Rare and common diseases are different businesses | A credible payer and channel strategy | A rare-disease price assumed for a common disease |
| Who's on the team? | Oligo drug development is specialized | Chemistry, delivery, clinical, and business development experience | Only the founding scientist's expertise |

{{< callout type="bench" title="Would I start a company from my PhD?" >}}
My PhD work found that cardiac METTL3 shapes how the whole body responds to a Western diet, partly through a heart-to-fat signal, and that losing the m<sup>6</sup>A reader YTHDF3 in cardiomyocytes blunted pathological remodeling after pressure overload in mice. Run those findings through the table above and the honest answer is: not yet. The evidence comes from mouse models, and I'd want human genetic or tissue evidence before betting on these genes as drug targets. A YTHDF3-silencing drug would need to reach cardiomyocytes, a delivery problem that isn't solved. And no early biomarker would tell you quickly that it was working. That is a research program, not a company. Being able to say that plainly about your own work is one of the most useful habits the entrepreneurship community teaches.
{{< /callout >}}

Drugs that target the epitranscriptome itself are a related frontier. These are mostly small molecules rather than oligonucleotides, aimed at RNA-modifying enzymes. The first METTL3 inhibitor entered human trials in cancer in 2022. Whether that biology becomes a broad drug class is one of the open bets in RNA therapeutics.

## Building in the Ecosystem {#ecosystem}

RNA companies are disproportionately founded by academic scientists, and the path from a lab to a company is learnable. Phillip Sharp, who co-discovered RNA splicing, co-founded both Biogen and Alnylam. George Church has co-founded dozens of companies.

{{< video id="omdwhs3XAsk" title="Scientist Stories: Phil Sharp" who="Axial" >}}Discovering RNA splicing, then co-founding Biogen, and later Alnylam: one scientist's path through two eras of biotech.{{< /video >}}

{{< video id="beNfIxRSrFA" title="George Church on Building Biotech Companies" who="Nucleate Virtual Summit 2025" >}}A prolific academic founder on how companies get started from research.{{< /video >}}

For students, [Nucleate](https://nucleate.org) is one on-ramp. It is a student-led, nonprofit community whose flagship Activator program supports academic founding teams for six months, without taking equity. I serve on the executive board of Nucleate Michigan, have been helping organize a new chapter at Ohio State, and in May 2026 hosted Nucleate Michigan's Activator Demo Day in Columbus. What I value most about it is that it puts trainees in the same room as founders, investors, and operators early enough to learn which questions to ask.

{{< video id="WLKaAAXGVL0" title="Meet the Founders: Nucleate Activator 2022" who="Nucleate" >}}Student and postdoc founders on what it was like to start companies out of their labs.{{< /video >}}

Physician-scientists bring something specific to this ecosystem. We know which unmet needs are real at the bedside, which biomarkers clinicians trust, and how a drug would actually be prescribed, administered, and paid for. Many RNA programs fail commercially because those details were treated as somebody else's problem.

## Some closing thoughts {#closing}

The RNA medicine business has followed a recognizable arc: a beautiful idea, a long and expensive struggle with chemistry and delivery, a period when most of the industry gave up, and then a payoff large enough to reshape how big pharma invests. The companies that won were not the ones with the best initial idea. They were the ones that kept solving the unglamorous problem everyone else had abandoned.

A few convictions:

- **Delivery is destiny.** The next decade of RNA medicines will be defined by which tissues beyond the liver, brain, and eye become reachable. The heart is high on my list.
- **Durability is a product feature.** A twice-yearly or one-time therapy changes adherence, pricing, and the competitive landscape.
- **Human genetics de-risks targets.** The best RNA programs start with a natural experiment in people.
- **The hardest problems are increasingly commercial.** Pricing for common diseases, workflows in primary care, and business models for one-patient medicines are now the bottlenecks as much as the science.

## Essential resources {#resources}

### Papers and primary sources {#essential-papers}

<ol class="refs">
<li>Zamecnik PC, Stephenson ML. Inhibition of Rous sarcoma virus replication and cell transformation by a specific oligodeoxynucleotide. <em>PNAS</em> 1978. <a href="https://pubmed.ncbi.nlm.nih.gov/75545/">PubMed</a></li>
<li>Fire A, et al. Potent and specific genetic interference by double-stranded RNA in <em>Caenorhabditis elegans</em>. <em>Nature</em> 1998. <a href="https://pubmed.ncbi.nlm.nih.gov/9486653/">PubMed</a></li>
<li>Karikó K, et al. Suppression of RNA recognition by Toll-like receptors: the impact of nucleoside modification. <em>Immunity</em> 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/16111635/">PubMed</a></li>
<li>Nair JK, et al. Multivalent N-acetylgalactosamine-conjugated siRNA localizes in hepatocytes and elicits robust RNAi-mediated gene silencing. <em>J Am Chem Soc</em> 2014. <a href="https://pubmed.ncbi.nlm.nih.gov/25434769/">PubMed</a></li>
<li>Finkel RS, et al. Nusinersen versus sham control in infantile-onset spinal muscular atrophy. <em>N Engl J Med</em> 2017. <a href="https://pubmed.ncbi.nlm.nih.gov/29091570/">PubMed</a></li>
<li>Adams D, et al. Patisiran, an RNAi therapeutic, for hereditary transthyretin amyloidosis. <em>N Engl J Med</em> 2018. <a href="https://pubmed.ncbi.nlm.nih.gov/29972753/">PubMed</a></li>
<li>Kim J, et al. Patient-customized oligonucleotide therapy for a rare genetic disease. <em>N Engl J Med</em> 2019. <a href="https://pubmed.ncbi.nlm.nih.gov/31597037/">PubMed</a></li>
<li>Ray KK, et al. Two phase 3 trials of inclisiran in patients with elevated LDL cholesterol. <em>N Engl J Med</em> 2020. <a href="https://pubmed.ncbi.nlm.nih.gov/32187462/">PubMed</a></li>
<li>Gillmore JD, et al. CRISPR-Cas9 in vivo gene editing for transthyretin amyloidosis. <em>N Engl J Med</em> 2021. <a href="https://pubmed.ncbi.nlm.nih.gov/34215024/">PubMed</a></li>
<li>Musunuru K, et al. Patient-specific in vivo gene editing to treat a rare genetic disease. <em>N Engl J Med</em> 2025. <a href="https://pubmed.ncbi.nlm.nih.gov/40373211/">PubMed</a></li>
</ol>

### Where to learn more

- **Books:** Katalin Karikó's memoir *Breaking Through* (2023); Gregory Zuckerman's *A Shot to Save the World* (2021), on the vaccine race; Walter Isaacson's *The Code Breaker* (2021), on CRISPR.
- **Primary data:** the FDA's [Novel Drug Approvals](https://www.fda.gov/drugs/development-approval-process-drugs/novel-drug-approvals-fda) lists, company annual reports on [SEC EDGAR](https://www.sec.gov/edgar/search/), and [ClinicalTrials.gov](https://clinicaltrials.gov/) for pipelines.
- **Community:** the [Oligonucleotide Therapeutics Society](https://www.oligotherapeutics.org/) and, for students and postdocs who want to build, [Nucleate](https://nucleate.org).
- **Science background:** my [RNA biology guide](/rna-biology/) covers the mechanisms behind every modality on this page.

## Citation {#citation}

<div class="cite-box">Rabolli CP. RNA Therapeutics: The Business of Programmable Medicine. charlesrabolli.com, 2026. https://charlesrabolli.com/rna-therapeutics/</div>

The text and original figures are © Charles P. Rabolli. Videos are embedded from their original publishers. This page is educational. It is not investment, legal, or medical advice, and mentions of companies are not endorsements.
