---
title: "RNA: From Messenger to Medicine"
layout: longform
weight: 10
eyebrow: "A field guide · RNA biology"
subtitle: "How a molecule once treated as a disposable copy turned out to catalyze reactions, regulate genes, carry chemical marks, and become a drug. Written by someone who spent a PhD studying one of those marks in the heart."
description: "A long-form, illustrated guide to RNA biology, from the discovery of messenger RNA to the epitranscriptome, RNA therapeutics, and machine learning, by Charles P. Rabolli."
cardText: "Seventy years of RNA in seven parts, from the discovery of the messenger to splicing, microRNAs, the m⁶A epitranscriptome, my own work on RNA methylation in the heart, RNA drugs, and what machine learning can and can't yet do with RNA."
parts: "7 parts"
card: "svg/rna-card.svg"
thumbnail: "/img/charles.jpg"
scripts: ["js/drach.js"]
---

## Introduction {#introduction}

<p class="intro">For most of my training, RNA was the middle child of molecular biology. DNA got the double helix and the genome projects. Proteins got the enzymes, the receptors, and most of the drugs. RNA was the photocopy that carried instructions from one to the other and then got thrown away.</p>

That picture has collapsed over the last fifty years, and I happened to spend my PhD in one of the places it is collapsing fastest. RNA turns out to be a catalyst; the ribosome, the machine that builds every protein in your body, does its central chemistry with RNA, not protein. It is a regulator: tiny RNAs tune the output of most human genes. It is a guide, steering enzymes like Cas9 to exact addresses in the genome. And it is chemically decorated. More than 150 distinct modifications have been catalogued on RNA, and some of them, like the methyl group my PhD focused on, change what happens to the message that carries them.

RNA is also now a drug class. In the space of a few years we went from arguing about whether RNA medicines would ever work to giving them to hundreds of millions of people. One of the most important technical tricks behind the mRNA vaccines was a *chemical modification of RNA*, the same kind of mark that fills the field I trained in.

This page is my attempt to tell that story the way I wish someone had told it to me as a first-year graduate student: historically, with the experiments that changed people's minds, with figures that make the mechanisms concrete, and with honest notes about what we still don't know. I've added two kinds of asides. **From my bench** boxes connect a topic to experiments I've done. **At the bedside** boxes connect it to patients, because the clinical half of my MD/PhD keeps reminding me that the reason to understand RNA is that RNA is now something we measure and prescribe.

It is long. The table of contents on the right will keep your place.

{{< fig chart="rna-timeline" class="wide" >}}**The RNA timeline.** Selected milestones from the discovery of messenger RNA to RNA-guided gene editing in a single patient. Crimson markers indicate work later recognized with a Nobel Prize. The pace is uneven: long quiet stretches, then decades that rewrote the textbook.{{< /fig >}}

### Start here: a viewing path {#watchlist}

If you'd rather watch than read first, these are the videos I'd queue up, in order. Each one also appears in context further down the page.

{{< watchlist >}}
1. [Animation: The Central Dogma](#part-i) (Nature Video). The textbook flow, beautifully animated.
2. [DNA animation, 2002–2014](#introduction-video) (Drew Berry and Etsuko Uno, WEHI). Real molecular structures in motion; transcription and translation at the scale they actually happen.
3. [RNA Splicing: What is a Gene?](#split-genes) (Phillip Sharp, iBiology). The co-discoverer of splicing on why it changed the definition of a gene.
4. [Discovering Ribozymes](#ribozymes) (Tom Cech, iBiology). The experiment that showed RNA can be an enzyme.
5. [RNA interference](#rnai) (Nature Video). How double-stranded RNA silences a gene.
6. [Nobel lecture: Victor Ambros](#microrna) (2024). The first microRNA, told by the person who found it.
7. [Direct RNA sequencing](#finding-the-marks) (Oxford Nanopore). The technology I used to read modifications on native heart RNA.
8. [Nobel lecture: Katalin Karikó](#mrna-vaccines) (2023). Decades of work on modified mRNA, and the clinical payoff.
{{< /watchlist >}}

<span id="introduction-video"></span>

{{< video id="7Hk9jct2ozY" title="DNA animation (2002–2014)" who="Drew Berry & Etsuko Uno · WEHI" >}}Molecular animation built from real structural data. Watch for RNA polymerase unzipping DNA, the messenger threading out, and the ribosome reading it.{{< /video >}}

## Part I: The Messenger (1953–1966) {#part-i}

### A problem of geography

By 1953 it was clear that genes were made of DNA and that DNA lived in the nucleus. Proteins, however, were made in the cytoplasm, on particles rich in RNA that would later be called ribosomes. Something had to carry the information across. In 1958, Francis Crick put the problem in its most famous form. He proposed that information flows from nucleic acid to protein and never back, and that small "adaptor" molecules must match each amino acid to its spot on a nucleic acid template ([Crick, 1958](https://pubmed.ncbi.nlm.nih.gov/13580867/)). He called the first idea the *central dogma*, a word choice he later admitted he didn't fully understand.

The obvious candidate for the go-between was the ribosome's own RNA. That turned out to be wrong, and the correction is one of the great experiments in biology.

### An unstable intermediate (1961)

In 1961, two papers in the same issue of *Nature* showed that the ribosome is a general-purpose reading machine, and that the instructions arrive on a separate, short-lived RNA. Sydney Brenner, François Jacob, and Matthew Meselson grew bacteria on heavy isotopes so that their existing ribosomes were dense, moved them to light medium as they infected them with a virus, and showed that new viral RNA attached to the old, heavy ribosomes. The ribosomes were generic; the instructions arrived on a new, unstable RNA ([Brenner, Jacob & Meselson, 1961](https://pubmed.ncbi.nlm.nih.gov/20446365/); [Gros et al., 1961](https://pubmed.ncbi.nlm.nih.gov/13708983/)). Jacob and Monod gave the molecule its name, *messenger RNA*, in their landmark paper on gene regulation the same year ([Jacob & Monod, 1961](https://pubmed.ncbi.nlm.nih.gov/13718526/)).

The word "unstable" matters. From the beginning, mRNA was defined partly by the fact that it is destroyed. A cell can change what it makes quickly because it is constantly degrading old messages and replacing them. Much of the rest of this page is about the machinery that decides how long each message lives.

{{< video id="J3HVVi2k2No" title="Animation: The Central Dogma" who="Nature Video" >}}A short, clear animation of transcription and translation, worth watching before Part II complicates the picture.{{< /video >}}

### Cracking the code (1961–1966)

Also in 1961, Marshall Nirenberg and Heinrich Matthaei added a synthetic RNA made only of uracil, poly(U), to a cell-free extract and got back a protein made only of phenylalanine ([Nirenberg & Matthaei, 1961](https://pubmed.ncbi.nlm.nih.gov/14479932/)). UUU meant phenylalanine. Over the next five years, Nirenberg's group, Har Gobind Khorana's synthetic RNAs, and Robert Holley's sequencing of the first transfer RNA ([Holley et al., 1965](https://pubmed.ncbi.nlm.nih.gov/14263761/)) worked out all 64 codons. The three shared the 1968 Nobel Prize.

Holley's tRNA was Crick's adaptor made real. It is worth noting, given where this page is going, that his sequence was studded with unusual, chemically modified bases. Modifications were in the story from the very first RNA ever sequenced.

### What a cell's RNA is made of

If you extract all the RNA from a mammalian cell, almost none of it is messenger. Most of it is ribosomal RNA. The messages that encode every protein are a few percent of the mass, and that is part of why mRNA was hard to find and study for so long.

{{< fig chart="rna-composition" >}}**Most RNA is not messenger RNA.** Approximate composition of total RNA in a typical mammalian cell. mRNA is a small, fast-turning-over fraction; ribosomal RNA dominates by mass. The proportions vary by cell type and growth state.{{< /fig >}}

## Part II: The Message Is Edited (1970–1986) {#part-ii}

The 1960s gave RNA a clean job description. The next two decades kept finding things it wasn't supposed to do.

### Reverse transcription breaks the arrow (1970)

In 1970, Howard Temin and Satoshi Mizutani, and independently David Baltimore, found an enzyme in RNA tumor viruses that copies RNA back into DNA ([Temin & Mizutani, 1970](https://pubmed.ncbi.nlm.nih.gov/4316301/); [Baltimore, 1970](https://pubmed.ncbi.nlm.nih.gov/4316300/)). Information could flow backward. Reverse transcriptase became the reason HIV can hide in our genomes, and also one of the most useful tools in molecular biology. Every RT-qPCR assay, every RNA-seq library, and every COVID test started with it.

{{< fig svg="svg/rna-dogma.svg" >}}**The central dogma, revised.** The arrows Crick drew still hold for most genes. But RNA also flows back into DNA, replicates itself in many viruses, and does jobs the 1958 statement never imagined: catalyst, regulator, guide, carrier of chemical marks, and medicine.{{< /fig >}}

### Caps, tails, and a methyl group nobody could explain (1974–1975)

In the early 1970s, biochemists studying eukaryotic mRNA found that it was dressed in ways bacterial mRNA wasn't. It carried a long tail of adenosines at the 3′ end. In 1975 several labs showed that it began with an unusual inverted, methylated guanosine "cap" at the 5′ end. Both turned out to be essential: the cap recruits the ribosome and protects the message, and the tail, together with the proteins that bind it, controls how long the message survives.

In 1974, two groups found something stranger: methyl groups on adenosines *inside* the message, not just at its ends ([Desrosiers, Friderici & Rottman, 1974](https://pubmed.ncbi.nlm.nih.gov/4372599/); Perry & Kelley, 1974). The modification was N<sup>6</sup>-methyladenosine, now called m<sup>6</sup>A. It was abundant, roughly a few marks per message on average, and it sat in a preferred sequence context. Nobody knew what it did. For nearly four decades it stayed a footnote, mostly because there was no way to find *which* adenosines carried it. Part IV is about what happened when that changed.

### Split genes (1977) {#split-genes}

In 1977, Phillip Sharp's group at MIT and Richard Roberts's group at Cold Spring Harbor independently looked at adenovirus mRNAs bound to their DNA under the electron microscope. The RNA didn't line up with the DNA in one continuous stretch. It bound in pieces, and the DNA in between looped out ([Berget, Moore & Sharp, 1977](https://pubmed.ncbi.nlm.nih.gov/269380/); [Chow et al., 1977](https://pubmed.ncbi.nlm.nih.gov/902310/)). Genes were split. The cell transcribes the whole thing and then cuts out the intervening sequences, *introns*, and splices the coding pieces, *exons*, back together.

Splicing turned out to be a source of variety, not just housekeeping. By choosing which exons to include, one gene can make several proteins. In humans, more than 90% of multi-exon genes produce more than one isoform. A large share of disease-causing variants act by breaking splicing, which is why splicing comes back in Part VI (as a drug target) and Part VII (as a machine-learning problem).

{{< fig svg="svg/rna-splicing.svg" >}}**Splicing.** Introns, bounded by conserved GU…AG ends, are removed by the spliceosome. Including or skipping an exon creates different mRNA isoforms, and therefore different proteins, from a single gene.{{< /fig >}}

{{< video id="_V9xEI6dpjw" title="RNA Splicing: What is a Gene?" who="Phillip A. Sharp · iBiology" >}}Sharp describes the experiments that revealed split genes and why they forced a new definition of a gene.{{< /video >}}

{{< fig svg="svg/rna-anatomy.svg" >}}**Anatomy of a mature mRNA.** Each region is a regulatory surface. The cap and 5′ UTR govern how translation starts, the coding sequence carries the protein recipe, and the 3′ UTR is a landing strip for microRNAs and RNA-binding proteins. m<sup>6</sup>A clusters around the stop codon.{{< /fig >}}

### RNA that acts like an enzyme (1982–1983) {#ribozymes}

Tom Cech was studying how a ribosomal RNA intron is spliced out in *Tetrahymena*, a single-celled pond organism. He kept looking for the protein that did the splicing, and the reaction kept happening without one. In 1982 his lab showed that the intron excises itself ([Kruger et al., 1982](https://pubmed.ncbi.nlm.nih.gov/6297745/)). A year later Sidney Altman's lab showed that the RNA subunit of RNase P, an enzyme that trims tRNA, is the catalyst on its own ([Guerrier-Takada et al., 1983](https://pubmed.ncbi.nlm.nih.gov/6197186/)). RNA could be an enzyme: a *ribozyme*. Cech and Altman shared the 1989 Nobel Prize in Chemistry.

{{< video id="WAChisSiW3o" title="Discovering Ribozymes" who="Tom Cech · iBiology" >}}A first-person account of the experiments that showed RNA can catalyze chemistry, including the controls that convinced a skeptical field.{{< /video >}}

### The RNA world (1986)

If RNA can both store information and catalyze reactions, maybe early life used RNA for both, and DNA and proteins came later as specialized upgrades. Walter Gilbert gave this idea its name, "the RNA world", in a short 1986 essay ([Gilbert, 1986](https://doi.org/10.1038/319618a0)). The strongest evidence for it arrived in 2000, when atomic structures of the large ribosomal subunit showed that the site where peptide bonds form contains no protein at all ([Ban et al., 2000](https://pubmed.ncbi.nlm.nih.gov/10937989/); [Nissen et al., 2000](https://pubmed.ncbi.nlm.nih.gov/10937990/)). The ribosome, the oldest and most central machine in every cell, is a ribozyme.

{{< callout type="key" title="Why this matters for medicine" >}}
Most antibiotics that target the ribosome (aminoglycosides, macrolides, tetracyclines, linezolid) bind ribosomal RNA, not ribosomal protein. Some resistance mechanisms work by chemically modifying that RNA, for example methylating a single adenosine in the 23S rRNA so macrolides can no longer bind. RNA modification has been a clinical problem for decades; we just didn't use the word "epitranscriptome."
{{< /callout >}}

## Part III: The Regulators (1991–2012) {#part-iii}

### A tiny RNA in a worm (1993) {#microrna}

In 1993 Victor Ambros's lab cloned *lin-4*, a gene that controls developmental timing in the worm *C. elegans*. It didn't encode a protein. It made a 22-nucleotide RNA that was partly complementary to sequences in the 3′ UTR of another gene, *lin-14*. Gary Ruvkun's lab, studying *lin-14*, showed that this pairing switched *lin-14* protein production down. The two papers appeared back to back in *Cell* ([Lee, Feinbaum & Ambros, 1993](https://pubmed.ncbi.nlm.nih.gov/8252621/); [Wightman, Ha & Ruvkun, 1993](https://pubmed.ncbi.nlm.nih.gov/8252622/)).

For seven years it looked like a worm curiosity. Then in 2000, a second small regulatory RNA, *let-7*, was found ([Reinhart et al., 2000](https://pubmed.ncbi.nlm.nih.gov/10706289/)), and it turned out to be conserved from worms to flies to humans ([Pasquinelli et al., 2000](https://pubmed.ncbi.nlm.nih.gov/11081512/)). Within a year, labs had found hundreds of these *microRNAs*. We now know they act on more than half of human protein-coding genes. A microRNA loaded into an Argonaute protein pairs with a target mRNA, usually through a short "seed" sequence, and represses translation and speeds up decay. The effect on any one target is modest; the effect across networks is large. Ambros and Ruvkun received the 2024 Nobel Prize.

{{< video id="047z0vbvJ5c" title="Nobel Prize lecture: Victor Ambros" who="Nobel Prize · 2024" >}}Ambros on the "marvelous unfolding story" of microRNAs, from a single worm mutant to a pervasive layer of gene regulation.{{< /video >}}

### RNA interference (1998) {#rnai}

In 1998, Andrew Fire, Craig Mello, and colleagues tested a puzzling observation: injecting antisense RNA into worms silenced genes, but so did the "control" sense RNA. They showed the active ingredient was double-stranded RNA, which silenced the matching gene far more potently than either strand alone ([Fire et al., 1998](https://pubmed.ncbi.nlm.nih.gov/9486653/)). The cell chops long double-stranded RNA into short pieces and uses them as guides to find and destroy matching messages. That is RNA interference. The Nobel came only eight years later, in 2006, one of the fastest in the prize's history.

There was a catch for mammals: long double-stranded RNA triggers an antiviral interferon response. In 2001 Thomas Tuschl's lab showed that you could skip that problem by delivering pre-made 21-nucleotide duplexes, *small interfering RNAs* or siRNAs ([Elbashir et al., 2001](https://pubmed.ncbi.nlm.nih.gov/11373684/)). Overnight, every lab could knock down any gene. I used siRNAs throughout my PhD to test what happens to cardiomyocytes when a specific m<sup>6</sup>A reader is lost. Seventeen years after Tuschl's paper, the same chemistry became an approved drug (Part VI).

{{< video id="cK-OGB1_ELE" title="RNA interference (RNAi)" who="Nature Video" >}}How Dicer and the RISC complex turn double-stranded RNA into a sequence-specific silencing machine.{{< /video >}}

### The noncoding genome

Only about 1–2% of the human genome codes for protein, yet most of it is transcribed into RNA at some level in some cell. Some of that RNA clearly matters. *XIST*, discovered in 1991, is a long noncoding RNA that coats one X chromosome in female cells and silences it ([Brown et al., 1991](https://pubmed.ncbi.nlm.nih.gov/1985261/)). Thousands of other long noncoding RNAs have since been catalogued. How many of them have functions, rather than being transcriptional noise, is still one of the more heated debates in the field, and I think healthy skepticism is warranted until a specific RNA has been tested genetically.

### RNA as a guide: CRISPR (2012)

Bacteria defend themselves against viruses by storing snippets of viral DNA in their genomes and transcribing them into guide RNAs. In 2012, Martin Jinek, Emmanuelle Charpentier, Jennifer Doudna, and colleagues showed that the Cas9 nuclease could be programmed with an engineered guide RNA to cut any DNA sequence you chose ([Jinek et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22745249/)). CRISPR is usually told as a DNA story. It is just as much an RNA story: the targeting information is carried by RNA, and, as Part VI describes, the first personalized in vivo base-editing therapy was delivered as RNA too.

## Part IV: The Epitranscriptome (2011–present) {#part-iv}

This is the part of the story I lived inside, so I'll slow down.

### Rediscovering m<sup>6</sup>A (2011–2012) {#rediscovering-m6a}

Two things brought m<sup>6</sup>A back from obscurity. The first was a surprise from human genetics. Variants in the gene *FTO* were among the strongest common genetic risk factors for obesity found by genome-wide association studies ([Frayling et al., 2007](https://pubmed.ncbi.nlm.nih.gov/17434869/)). In 2011, Chuan He's lab showed that the FTO protein removes the methyl group from m<sup>6</sup>A ([Jia et al., 2011](https://pubmed.ncbi.nlm.nih.gov/22002720/)). If the mark could be erased, it might be dynamic, like the reversible marks on DNA and histones. A new word started circulating: the *epitranscriptome*.

The second was a method. In 2012, two groups independently used an antibody against m<sup>6</sup>A to pull down methylated RNA fragments and sequence them ([Dominissini et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22575960/); [Meyer et al., 2012](https://pubmed.ncbi.nlm.nih.gov/22608085/)). For the first time we could see m<sup>6</sup>A across the transcriptome: more than 12,000 sites in over 7,000 human genes in one study, and methylated mRNAs from 7,676 genes in the other. The marks were not randomly scattered. They clustered around the stop codon and in long internal exons, and sat within a consensus sequence called DRACH.

{{< fig svg="svg/rna-m6a-topology.svg" >}}**Where m<sup>6</sup>A sits.** A schematic metagene of the pattern reported in the first transcriptome-wide maps. m<sup>6</sup>A density is low in the 5′ UTR, rises through the coding sequence, peaks just after the stop codon, and tails off through the 3′ UTR. Later work showed why: exon junction complexes, deposited during splicing, block methylation near splice junctions, so marks survive mainly in long exons ([Uzonyi et al., 2023](https://pubmed.ncbi.nlm.nih.gov/36599352/); [Yang et al., 2022](https://pubmed.ncbi.nlm.nih.gov/36550132/)).{{< /fig >}}

{{< fig chart="m6a-pubmed" >}}**A field ignites.** PubMed records per year mentioning m<sup>6</sup>A or N<sup>6</sup>-methyladenosine in the title or abstract, alongside records using the word "epitranscriptome." Counts include all uses of the abbreviation, so the early years contain some unrelated hits. The inflection follows the 2011–2012 papers almost exactly. Data queried from PubMed E-utilities in October 2026.{{< /fig >}}

### Writers, erasers, and readers

Over the following years the cast of characters filled in. The vocabulary borrowed from chromatin biology is useful, so I'll use it, with a caveat below.

**Writers** add the mark. The catalytic engine is METTL3, first identified as a protein called MT-A70 in 1997 ([Bokar et al., 1997](https://pubmed.ncbi.nlm.nih.gov/9409616/)). It works in a complex with METTL14, which acts as an RNA-binding scaffold, plus WTAP and several adaptors that position the complex ([Liu et al., 2014](https://pubmed.ncbi.nlm.nih.gov/24316715/)). Most m<sup>6</sup>A is laid down on nascent RNA in the nucleus while it is being transcribed, and much of it sits in final exons ([Ke et al., 2015](https://pubmed.ncbi.nlm.nih.gov/26404942/); [Ke et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28637692/)).

**Erasers** remove it. FTO and ALKBH5 ([Zheng et al., 2013](https://pubmed.ncbi.nlm.nih.gov/23177736/)) are demethylases, although FTO turned out to prefer a related mark at the cap, m<sup>6</sup>A<sub>m</sub> ([Mauer et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28002401/)). How much routine erasing of internal m<sup>6</sup>A actually happens in most cells is debated.

**Readers** bind the mark and decide what it means. In the nucleus, YTHDC1 influences splicing ([Xiao et al., 2016](https://pubmed.ncbi.nlm.nih.gov/26876937/)) and export ([Roundtree et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28984244/)). In the cytoplasm, the three YTHDF proteins are the main readers. Early studies assigned them separate jobs: YTHDF2 sends messages to decay ([Wang et al., 2014](https://pubmed.ncbi.nlm.nih.gov/24284625/)), YTHDF1 promotes translation ([Wang et al., 2015](https://pubmed.ncbi.nlm.nih.gov/26046440/)), and YTHDF3 cooperates with both ([Shi et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28106072/); [Li et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28106076/)). Other proteins, such as the IGF2BPs, read m<sup>6</sup>A and stabilize their targets ([Huang et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29476152/)).

{{< fig svg="svg/rna-m6a-machinery.svg" >}}**The m<sup>6</sup>A machinery.** The METTL3–METTL14 complex writes m<sup>6</sup>A on nascent RNA, mostly at DRACH motifs. Erasers can remove it. Readers in the nucleus and cytoplasm translate the mark into effects on splicing, export, decay, translation, and stability.{{< /fig >}}

### What m<sup>6</sup>A actually does: a field arguing in good faith {#what-m6a-does}

The tidy division of labor among the YTHDF readers did not survive contact with more careful experiments. In 2020, Sara Zaccara and Samie Jaffrey showed that in human cells the three YTHDF proteins bind the same methylated messages, and that their dominant shared effect is to promote degradation. The effect became obvious only when all three were removed at once ([Zaccara & Jaffrey, 2020](https://pubmed.ncbi.nlm.nih.gov/32492408/)). In this "unified model", m<sup>6</sup>A is mostly a mark that says *this message can be degraded faster*, and the more marks a message has, the stronger the effect.

I find the unified model compelling as a default, and it has made the field more rigorous. But tissues are not HeLa cells. Specialized cells express the readers at different levels, and under stress they reprogram translation in ways that a cancer cell line in a dish doesn't. In heart and skeletal muscle, our lab and others have seen phenotypes from deleting individual readers that the redundancy model would not predict (Part V). My honest reading of the evidence is that m<sup>6</sup>A's dominant default effect is on mRNA turnover, and that tissue-specific contexts can layer translational effects on top. That is the kind of question that only gets settled by better measurement, which brings us to methods.

{{< callout type="caution" >}}
A lot of published m<sup>6</sup>A biology rests on overexpressing or knocking down a writer, eraser, or reader and then measuring a phenotype. That is a reasonable first step, but these proteins have many targets and some have functions independent of m<sup>6</sup>A. The strongest papers connect a phenotype to a *specific* methylated site and show that mutating that site recapitulates the effect. When you read an m<sup>6</sup>A paper, look for that link.
{{< /callout >}}

### Finding the marks {#finding-the-marks}

You cannot sequence a methyl group with standard short-read methods; reverse transcriptase reads m<sup>6</sup>A as an ordinary A. Every m<sup>6</sup>A method is a trick to make the mark visible.

- **Antibody enrichment (MeRIP-seq / m<sup>6</sup>A-seq, 2012).** Fragment the RNA, pull down the pieces an antibody recognizes, and sequence them. It finds *regions* about 100–200 nucleotides wide, and it inherits the antibody's quirks.
- **Crosslinking (miCLIP, 2015).** UV-crosslink the antibody to the RNA so reverse transcription leaves a mutation or truncation at the modified base, giving single-nucleotide positions ([Linder et al., 2015](https://pubmed.ncbi.nlm.nih.gov/26121403/)).
- **Chemistry (GLORI, 2022).** Convert every *unmethylated* A to inosine, which sequences as G, while m<sup>6</sup>A is protected and stays A. Like bisulfite sequencing for DNA methylation, this gives the *fraction* of molecules modified at each site ([Liu et al., 2023](https://pubmed.ncbi.nlm.nih.gov/36302990/)).
- **Nanopore direct RNA sequencing (2018–).** Thread native RNA molecules, modifications and all, through a protein pore and record the ionic current ([Garalde et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29334379/)). A methylated base perturbs the current, and machine-learning models trained on known sites learn to recognize the shift (Part VII).

{{< fig svg="svg/rna-methods.svg" >}}**Four ways to see a methyl group.** Antibody methods were the field's workhorse but report regions and relative enrichment. Chemical methods like GLORI give absolute stoichiometry. Nanopore direct RNA sequencing reads individual full-length molecules, at the cost of depending on trained models to call modifications.{{< /fig >}}

{{< callout type="bench" title="Reading m6A on native heart RNA" >}}
For our 2024 *Circulation* study, we used nanopore direct RNA sequencing on adult cardiomyocytes from mice with and without METTL3, in collaboration with Christoph Dieterich's group in Heidelberg ([Rabolli et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38620081/)). Comparing the two let us call *METTL3-dependent* sites rather than everything a model flags as possibly modified. The most interesting result was positional: whether a message's m<sup>6</sup>A sat in the coding sequence or the 3′ UTR tracked with different effects on protein output, and the analysis pointed to mitochondrial metabolism genes as key targets. The lesson I took away was methodological. With single-molecule data, *where* the mark sits stops being a footnote and becomes the variable you can test.
{{< /callout >}}

{{< video id="tfbPlRUewKM" title="Direct RNA" who="Oxford Nanopore Technologies" >}}A short explainer on sequencing native RNA strands end to end, which is what makes it possible to see modifications and full-length isoforms on the same molecule.{{< /video >}}

Because the DRACH consensus is so short, a natural first question is *how many candidate sites does a message have?* Try it below with a random sequence or paste in a real transcript. The punchline is that DRACH is everywhere, and the motif alone can't tell you which adenosines are actually methylated.

{{< interactive name="drach" >}}

### Beyond m<sup>6</sup>A

m<sup>6</sup>A is the most abundant internal mark on mRNA, but it is one of more than 150 chemically distinct RNA modifications catalogued in the MODOMICS database ([Boccaletto et al., 2022](https://pubmed.ncbi.nlm.nih.gov/34893873/)). Pseudouridine (Ψ) is the most abundant modification across all RNA. Inosine, made by ADAR enzymes from adenosine, recodes messages and helps the innate immune system tell self RNA from viral RNA. tRNAs are the most heavily decorated molecules in the cell, often carrying more than a dozen modifications each, and those marks tune decoding speed and accuracy.

The tools to map most of these marks, in most tissues, at single-molecule resolution, do not exist yet. In 2023 I took part in a National Academies of Sciences, Engineering, and Medicine ideation challenge on exactly this problem. Our team's proposal for a unified epitranscriptomics consortium became one of three commissioned papers in the Academies' 2024 consensus report, *[Charting a Future for Sequencing RNA and Its Modifications](https://doi.org/10.17226/27165)*. The report argues for something like a Human Genome Project for RNA modifications: shared standards, reference materials, and the technology to read every mark on every molecule. I think that is the right ambition.

## Part V: RNA in the Heart {#part-v}

### Why the heart is an RNA organ

Adult cardiomyocytes, the muscle cells that make the heart beat, barely divide. In humans, roughly one percent are replaced per year in early adulthood, and less with age ([Bergmann et al., 2009](https://pubmed.ncbi.nlm.nih.gov/19342590/)). Some of my earliest research, as an undergraduate fellow at Mass General and then as a Fulbright Scholar in Trieste, was on how to coax more of that renewal ([Vujic et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29695718/)). Because cardiomyocytes can't easily make more of themselves, the heart adapts to stress, such as high blood pressure, a narrowed valve, or pregnancy, by making each cell bigger. That growth, *hypertrophy*, is a massive reprogramming of protein synthesis. It can be adaptive, as in an athlete, or the first step toward heart failure.

A cell that has to change its proteome quickly without dividing is a cell that relies heavily on post-transcriptional control: which messages get translated, how efficiently, and for how long. That made the heart an obvious place to ask what m<sup>6</sup>A does in a living organ.

### METTL3 and cardiac growth

The lab I joined, Federica Accornero's, had already shown that METTL3 is both necessary and sufficient for a normal hypertrophic response. Cardiomyocytes without METTL3 couldn't grow when stimulated, extra METTL3 was enough to drive compensated growth, and mice lacking cardiac METTL3 developed heart failure with age and stress ([Dorn et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30586742/)). In the same issue of *Circulation*, another group reported that the eraser FTO falls in failing hearts and that restoring it improved function after injury ([Mathiyalagan et al., 2019](https://pubmed.ncbi.nlm.nih.gov/29997116/)). Together these made the case that m<sup>6</sup>A is part of how the heart responds to stress. They also left open the questions my PhD took on: *which* messages, read by *which* readers, and with what consequences beyond the heart itself.

{{< fig svg="svg/rna-heart.svg" >}}**Three findings from my PhD.** (1) Single-molecule maps showed that the position of METTL3-dependent m<sup>6</sup>A tracks with protein output. (2) Cardiac METTL3 shapes whole-body metabolism on a Western diet, in part by stabilizing *FGF1* mRNA, a heart-to-fat signal. (3) The reader YTHDF3 drives stress-induced protein synthesis and cardiomyocyte growth.{{< /fig >}}

### A heart-to-fat signal

The result that surprised me most came from asking whether cardiac m<sup>6</sup>A matters for the *rest of the body*. We fed mice a high-fat, high-carbohydrate "Western" diet and found that the m<sup>6</sup>A landscape on cardiac mRNA changed. Mice whose cardiomyocytes lacked METTL3 were protected from the diet's harmful effects. Mice with extra cardiac METTL3 gained more weight, accumulated more fat, and became more glucose intolerant. Using nanopore sequencing, mass spectrometry, and protein arrays in parallel, we traced part of the effect to circulating factors made by the heart, including FGF1, whose mRNA is stabilized by m<sup>6</sup>A ([Rabolli et al., 2025, *JCI Insight*](https://pubmed.ncbi.nlm.nih.gov/40272887/)).

We usually think of the heart as a pump that responds to metabolism. This work suggests it also helps *set* systemic metabolism, and that an RNA modification is part of the wiring.

{{< callout type="bench" title="What a metabolic phenotype takes" >}}
This project needed every tool I had: inducible cardiomyocyte-specific knockouts and transgenics, months of diet studies, echocardiography, treadmill VO<sub>2</sub> max testing, glucose and insulin tolerance tests, EchoMRI body composition, nanopore sequencing, mass spectrometry, and a lot of R. My biggest lesson from it is that interorgan signals are easy to propose and hard to prove. You have to show that the signal comes from the organ you think it does, that it reaches the target tissue, and that it is necessary for the effect, and each of those steps needs its own experiment.
{{< /callout >}}

### Readers in the heart

If METTL3 writes the mark, who reads it in cardiomyocytes? Our lab's answer so far is that each YTHDF protein has a phenotype in muscle. Loss of YTHDF2 caused adverse cardiac remodeling, partly through an m<sup>6</sup>A-modified message encoding the junctional protein Myzap ([Golubeva et al., 2023](https://pubmed.ncbi.nlm.nih.gov/37791304/)). YTHDF2 also governs skeletal muscle size through targeted control of proteostasis ([Gilbert et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38467649/)). YTHDF1 turned out to be needed for cardiac homeostasis ([Golubeva et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38768805/)).

My F30 fellowship project was YTHDF3. Mice lacking YTHDF3 in cardiomyocytes had *less* pathological remodeling after pressure overload, which we created surgically by constricting the aorta. Mechanistically, YTHDF3 controlled the global burst of protein synthesis that accompanies stress and set cardiomyocyte size ([Rabolli et al., 2025, *RNA*](https://pubmed.ncbi.nlm.nih.gov/40216557/)). That makes YTHDF3 inhibition a potential cardioprotective strategy. The paper was the subject of an invited commentary in the same journal ([Costantino & Paneni, 2025](https://pubmed.ncbi.nlm.nih.gov/40316421/)). Federica and I also wrote about where the field is headed in a short piece for the *European Heart Journal* called "Cardiac cryptographers" ([Rabolli & Accornero, 2024](https://pubmed.ncbi.nlm.nih.gov/38339963/)).

### Beyond m<sup>6</sup>A: tRNA and translational fidelity

The other RNA I spent time on is tRNA, Crick's adaptor. Before a tRNA can deliver an amino acid, an aminoacyl-tRNA synthetase has to load the right one, and some synthetases proofread their work. In a study led by my labmate Anindhya Das, we found that the synthetase-associated protein AIMP3 is essential in cardiomyocytes. Without it, methionyl-tRNA synthetase can no longer edit away the toxic amino acid homocysteine. Homocysteine accumulates, leading to oxidative stress, protein aggregation, mitochondrial dysfunction, and lethal cardiomyopathy ([Das et al., 2025](https://pubmed.ncbi.nlm.nih.gov/40562875/)). It's a reminder that the accuracy of translation is itself a cardiac vulnerability.

## Part VI: RNA as Medicine {#part-vi}

Every regulatory principle in Parts II–IV has become a drug. If you can predict how an RNA pairs, you can design a molecule that binds it; if you know how a cell degrades messages, you can recruit that machinery to a target of your choice. (For the business side of this story, including how these companies were built, financed, and priced, see my [RNA therapeutics](/rna-therapeutics/) guide.)

{{< fig chart="rna-medicines" class="wide" >}}**RNA becomes a drug class.** Selected U.S. approvals and firsts for antisense oligonucleotides, siRNAs, mRNA, and RNA-guided editing. After a slow start (one antisense drug in 1998, then little for nearly two decades), chemistry and delivery improvements produced a steady stream of approvals.{{< /fig >}}

### Antisense: reading the message back

Antisense oligonucleotides (ASOs) are short, chemically modified, single-stranded nucleic acids that pair with a target RNA. The first approved, fomivirsen in 1998, was injected into the eye to treat cytomegalovirus retinitis. The field then spent nearly twenty years on chemistry: backbone and sugar modifications that make oligos stable, less immunogenic, and better at reaching tissues.

The breakthrough that made me take RNA drugs seriously was nusinersen for spinal muscular atrophy. SMA is caused by loss of the *SMN1* gene. A nearly identical backup gene, *SMN2*, mostly skips exon 7 during splicing and makes unstable protein. Nusinersen binds an intronic splicing silencer in *SMN2* and shifts splicing toward exon 7 inclusion. In infants with SMA, it improved motor milestones and survival ([Finkel et al., 2017](https://pubmed.ncbi.nlm.nih.gov/29091570/)). A drug that fixes a splicing decision is Part II of this page, turned into therapy.

### RNAi grows up

Getting siRNAs to the right tissue took fifteen years. Patisiran, approved in 2018 for hereditary transthyretin amyloidosis, packaged siRNA in lipid nanoparticles that the liver takes up ([Adams et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29972753/)). The next generation attached siRNAs to GalNAc, a sugar that binds a receptor found almost only on liver cells, so the drug could be injected under the skin.

{{< callout type="bedside" title="A cholesterol drug given twice a year" >}}
Inclisiran is a GalNAc-conjugated siRNA that silences *PCSK9* in the liver, raising LDL-receptor levels and lowering LDL cholesterol. In two phase 3 trials, it lowered LDL cholesterol by about half compared with placebo ([Ray et al., 2020](https://pubmed.ncbi.nlm.nih.gov/32187462/)). After two loading doses, it is given every six months in clinic. For patients who struggle with daily pills, that schedule is the point. Cardiovascular outcome trials are ongoing. Lp(a), angiotensinogen, and other cardiovascular targets are being pursued with the same chemistry, which makes RNA silencing one of the most active areas in preventive cardiology.
{{< /callout >}}

### mRNA and the modification that made the vaccines {#mrna-vaccines}

The idea of delivering mRNA as a drug is old. The obstacle was that cells treat foreign RNA as a sign of viral infection. Injected mRNA triggered innate immune sensors, caused inflammation, and was translated poorly. In 2005, Katalin Karikó, Drew Weissman, and colleagues showed that RNA containing modified nucleosides, including pseudouridine, 5-methylcytidine, and m<sup>6</sup>A, largely evaded those sensors ([Karikó et al., 2005](https://pubmed.ncbi.nlm.nih.gov/16111635/)). In 2008 they showed that pseudouridine-containing mRNA was also translated more efficiently ([Karikó et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18797453/)). Combined with lipid nanoparticle delivery, modified mRNA became the platform behind the COVID-19 vaccines, authorized in December 2020. Karikó and Weissman received the 2023 Nobel Prize.

It's worth pausing on this: it is the largest clinical application of RNA modification biology to date. The most consequential thing anyone has done with the epitranscriptome so far was to *use* modifications to make a message look like self.

{{< video id="gPdUnYjvWxo" title="Nobel Prize lecture: Katalin Karikó" who="Nobel Prize · 2023" >}}Karikó's account of decades of work on therapeutic mRNA, including the modified-nucleoside experiments and what made them work.{{< /video >}}

### RNA-guided editing reaches a single patient

In 2025, a team at the Children's Hospital of Philadelphia and Penn described treating an infant with severe carbamoyl-phosphate synthetase 1 (CPS1) deficiency using a base editor built for his specific mutation. The editor was delivered as mRNA, together with its guide RNA, in lipid nanoparticles. It went from diagnosis to infusion in about six months ([Musunuru et al., 2025](https://pubmed.ncbi.nlm.nih.gov/40373211/)). After the infusions he tolerated more dietary protein and needed less nitrogen-scavenging medication. Follow-up is still short. But it showed that the RNA toolkit described on this page, mRNA, guide RNA, and nanoparticle delivery, can be assembled into a bespoke medicine on a clinical timeline.

### Drugging the epitranscriptome

If m<sup>6</sup>A writers drive disease, they should be druggable. In 2021, a first-in-class METTL3 inhibitor, STM2457, slowed acute myeloid leukemia in mouse models, where leukemia cells appear to depend on METTL3 ([Yankova et al., 2021](https://pubmed.ncbi.nlm.nih.gov/33902106/)). A related compound entered first-in-human trials in 2022. Whether m<sup>6</sup>A-targeting drugs will be safe enough is an open question, given how broadly METTL3 acts; the cardiac phenotypes in Part V are one reason to watch heart function closely in those trials. Our YTHDF3 results suggest that reader-level targeting might be a more selective route in the heart.

{{< callout type="bedside" title="RNA in the pathology lab" >}}
Pathologists measure RNA every day, often without calling it RNA biology. *In situ* hybridization for EBV-encoded small RNAs (EBER) identifies Epstein–Barr virus in lymphomas and carcinomas. RNA *in situ* hybridization for kappa and lambda light-chain mRNA helps show that a plasma-cell or B-cell population is clonal. HPV E6/E7 mRNA ISH helps classify head and neck cancers. Targeted RNA sequencing detects gene fusions that define sarcomas and leukemias and guide targeted therapy. And multigene RNA-expression assays help decide which patients with early breast cancer benefit from chemotherapy. RNA is already a diagnostic analyte; the epitranscriptome may eventually be one too.
{{< /callout >}}

## Part VII: RNA Meets Machine Learning {#part-vii}

RNA is a natural fit for machine learning. It is a sequence, with structure and chemistry layered on top, and modern sequencing produces enormous amounts of it. Here is where I think the methods have been transformative, and where I think the hype has outrun the evidence.

| Problem | What goes in | Representative model | My read |
|---|---|---|---|
| Will this variant break splicing? | DNA sequence (10 kb of context) | SpliceAI (2019) | Transformative; used routinely in clinical variant interpretation |
| Is this base modified? | Nanopore current signal | m6Anet (2022) and successors | Now standard; accuracy depends on training data |
| What shape does this RNA fold into? | RNA sequence, plus partners | AlphaFold 3 (2024) | Real progress; RNA remains much harder than protein |
| What mRNA sequence should we manufacture? | Target protein sequence | LinearDesign (2023) | Practical gains in stability and expression |
| What happens to a cell if I perturb a gene? | Single-cell transcriptomes | Geneformer (2023), scGPT (2024) | Promising representations; benchmarks humbling |

### Reading splicing from sequence

SpliceAI is a deep residual network that takes a long stretch of pre-mRNA sequence and predicts, for each position, whether it is a splice donor, a splice acceptor, or neither ([Jaganathan et al., 2019](https://pubmed.ncbi.nlm.nih.gov/30661751/)). Because it learned splicing from the genome itself, it can score what a new variant does to splicing, including "cryptic" splice sites deep in introns that older tools missed. It has become a routine part of clinical variant interpretation. When a geneticist or molecular pathologist asks whether a variant of uncertain significance might act through splicing, SpliceAI is often the first thing they check.

### Hearing a methyl group

Nanopore direct RNA sequencing produces a raw current signal for each molecule, and turning that into modification calls is a machine-learning problem. The training labels are awkward. Experiments like miCLIP or GLORI tell you that *some fraction* of molecules at a site are methylated, but not which individual reads. m6Anet handled this with *multiple instance learning*: treat each site as a "bag" of reads, know only the bag-level label, and let the model learn which reads drive it ([Hendra et al., 2022](https://pubmed.ncbi.nlm.nih.gov/36357692/)).

If that framing sounds familiar from computational pathology, it should. It is the same idea used to diagnose a gigapixel whole-slide image from a single slide-level label, treating the slide as a bag of tissue tiles. I write about that in detail on my [computational pathology](/computational-pathology/#part-v) page.

### Folding RNA

AlphaFold transformed protein structure prediction. AlphaFold 3 extended the approach to complexes containing nucleic acids, ligands, and modified residues ([Abramson et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38718835/)). For RNA, the gains are real but smaller than for protein. The main reason is data: there are vastly fewer experimentally solved RNA structures than protein structures, and RNA is more flexible, often adopting several conformations. I expect progress here to be paced by new structural data at least as much as by new architectures.

### Designing the message

For an mRNA medicine, the same protein can be encoded by an astronomical number of synonymous sequences, which differ in stability, structure, and how efficiently they are translated. LinearDesign borrowed an algorithm from computational linguistics to search that space efficiently, jointly optimizing structural stability and codon usage. Designed vaccine mRNAs were more stable and produced substantially higher antibody responses in mice ([Zhang et al., 2023](https://pubmed.ncbi.nlm.nih.gov/37130545/)). This is a good example of machine learning, or here, clever optimization, doing quiet, valuable engineering work.

### Language models of cells, and a sobering benchmark

The most ambitious efforts treat single-cell RNA profiles like sentences and pretrain transformer "foundation models" on tens of millions of cells. Geneformer used in silico perturbation to nominate candidate therapeutic targets for cardiomyopathy, some of which held up in cell models ([Theodoris et al., 2023](https://pubmed.ncbi.nlm.nih.gov/37258680/)). scGPT showed broad transfer across tasks ([Cui et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38409223/)). But when researchers compared several such models with deliberately simple linear baselines at predicting how cells respond to genetic perturbations, none of the deep models outperformed the baselines ([Ahlmann-Eltze, Huber & Anders, 2025](https://pubmed.ncbi.nlm.nih.gov/40759747/)).

{{< pullquote >}}My takeaway is not that foundation models in biology are hype. It is that biology needs the same thing medicine does: strong baselines, honest benchmarks, and validation on the question you actually care about.{{< /pullquote >}}

## Some closing thoughts {#closing}

When I started graduate school, I thought of m<sup>6</sup>A as a niche topic in a niche field. I now think of it as a good lens on how biology actually works. Information is never just stored and read. It is chemically annotated, edited, localized, and degraded, and the cell's real decisions often happen in those layers.

Three convictions have stuck with me from this work:

- **Measurement drives understanding.** m<sup>6</sup>A sat unexplained for 37 years until a method made it visible. Many of the debates in the field today are really measurement problems, and single-molecule technologies are starting to resolve them.
- **Context matters.** Rules learned in one cell line need to be retested in tissues. The heart, with its non-dividing cells and its enormous demand for protein synthesis, keeps teaching me that.
- **The distance between mechanism and medicine is shrinking.** Splicing became nusinersen. RNA interference became inclisiran. Modified nucleosides became the most widely given vaccine platform in history. I expect the epitranscriptome to follow, first as a source of biomarkers and eventually of drugs.

That last point is why I'm training to be a physician-scientist. The best way I know to shrink that distance is to stand on both sides of it.

## Essential resources {#resources}

### Essential papers {#essential-papers}

<ol class="refs">
<li>Brenner S, Jacob F, Meselson M. An unstable intermediate carrying information from genes to ribosomes for protein synthesis. <em>Nature</em> 1961. <a href="https://pubmed.ncbi.nlm.nih.gov/20446365/">PubMed</a></li>
<li>Nirenberg MW, Matthaei JH. The dependence of cell-free protein synthesis in <em>E. coli</em> upon naturally occurring or synthetic polyribonucleotides. <em>PNAS</em> 1961. <a href="https://pubmed.ncbi.nlm.nih.gov/14479932/">PubMed</a></li>
<li>Desrosiers R, Friderici K, Rottman F. Identification of methylated nucleosides in messenger RNA from Novikoff hepatoma cells. <em>PNAS</em> 1974. <a href="https://pubmed.ncbi.nlm.nih.gov/4372599/">PubMed</a></li>
<li>Berget SM, Moore C, Sharp PA. Spliced segments at the 5′ terminus of adenovirus 2 late mRNA. <em>PNAS</em> 1977. <a href="https://pubmed.ncbi.nlm.nih.gov/269380/">PubMed</a></li>
<li>Kruger K, et al. Self-splicing RNA: autoexcision and autocyclization of the ribosomal RNA intervening sequence of <em>Tetrahymena</em>. <em>Cell</em> 1982. <a href="https://pubmed.ncbi.nlm.nih.gov/6297745/">PubMed</a></li>
<li>Lee RC, Feinbaum RL, Ambros V. The <em>C. elegans</em> heterochronic gene <em>lin-4</em> encodes small RNAs with antisense complementarity to <em>lin-14</em>. <em>Cell</em> 1993. <a href="https://pubmed.ncbi.nlm.nih.gov/8252621/">PubMed</a></li>
<li>Fire A, et al. Potent and specific genetic interference by double-stranded RNA in <em>Caenorhabditis elegans</em>. <em>Nature</em> 1998. <a href="https://pubmed.ncbi.nlm.nih.gov/9486653/">PubMed</a></li>
<li>Jia G, et al. N6-methyladenosine in nuclear RNA is a major substrate of the obesity-associated FTO. <em>Nat Chem Biol</em> 2011. <a href="https://pubmed.ncbi.nlm.nih.gov/22002720/">PubMed</a></li>
<li>Dominissini D, et al. Topology of the human and mouse m6A RNA methylomes revealed by m6A-seq. <em>Nature</em> 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/22575960/">PubMed</a></li>
<li>Meyer KD, et al. Comprehensive analysis of mRNA methylation reveals enrichment in 3′ UTRs and near stop codons. <em>Cell</em> 2012. <a href="https://pubmed.ncbi.nlm.nih.gov/22608085/">PubMed</a></li>
<li>Zaccara S, Jaffrey SR. A unified model for the function of YTHDF proteins in regulating m6A-modified mRNA. <em>Cell</em> 2020. <a href="https://pubmed.ncbi.nlm.nih.gov/32492408/">PubMed</a></li>
<li>Garalde DR, et al. Highly parallel direct RNA sequencing on an array of nanopores. <em>Nat Methods</em> 2018. <a href="https://pubmed.ncbi.nlm.nih.gov/29334379/">PubMed</a></li>
<li>Karikó K, et al. Suppression of RNA recognition by Toll-like receptors: the impact of nucleoside modification and the evolutionary origin of RNA. <em>Immunity</em> 2005. <a href="https://pubmed.ncbi.nlm.nih.gov/16111635/">PubMed</a></li>
<li>Dorn LE, et al. The N6-methyladenosine mRNA methylase METTL3 controls cardiac homeostasis and hypertrophy. <em>Circulation</em> 2019. <a href="https://pubmed.ncbi.nlm.nih.gov/30586742/">PubMed</a></li>
<li>Jaganathan K, et al. Predicting splicing from primary sequence with deep learning. <em>Cell</em> 2019. <a href="https://pubmed.ncbi.nlm.nih.gov/30661751/">PubMed</a></li>
<li>National Academies of Sciences, Engineering, and Medicine. <em>Charting a Future for Sequencing RNA and Its Modifications: A New Era for Biology and Medicine.</em> 2024. <a href="https://doi.org/10.17226/27165">doi</a></li>
</ol>

### Where to learn more

- **Textbook:** *Molecular Biology of the Cell* (Alberts et al.), chapters on RNA processing and translation, is still the clearest starting point.
- **Databases:** [MODOMICS](https://genesilico.pl/modomics/) for RNA modifications; [RNAcentral](https://rnacentral.org/) for noncoding RNAs; [miRBase](https://www.mirbase.org/) for microRNAs.
- **Talks:** [iBiology](https://www.ibiology.org/) has first-person lectures from many of the people named on this page, and the [Nobel Prize lectures](https://www.nobelprize.org/) for 1989, 1993, 2006, 2023, and 2024 are all RNA stories.
- **My own work:** the [publications page](/publications/) lists the papers behind Part V, with links.

## Citation {#citation}

If this page is useful in your teaching or writing, please cite it as:

<div class="cite-box">Rabolli CP. RNA: From Messenger to Medicine. charlesrabolli.com. https://charlesrabolli.com/rna-biology/</div>

The text and original figures are © Charles P. Rabolli. Videos are embedded from their original publishers and remain their property. This page is educational and not medical advice.
