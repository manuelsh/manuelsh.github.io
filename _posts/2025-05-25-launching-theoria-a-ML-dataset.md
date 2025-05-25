---
layout: distill
title: "Launching TheorIA: A Machine-Readable Atlas of Theoretical Physics"
date: 2025-05-25 09:00:00
description: If we want AI models to reason about physics, we first need to give them physics they can actually read.
categories: Machine Learning
# thumbnail: assets/img/9.jpg
# giscus_comments: false
# authors:
#   - name: Manuel Sánchez Hernández
#     url: "https://manuelsh.github.io/"
#     affiliations:
#       name: -------------
#       url: "-------------"
# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
giscus_comments: true
toc:
  - name: Why bother?
  - name: TheorIA is a work in progress
  - name: A quick tour
  - name: Call for collaborators
  - name: Final thoughts
#     subsections:
#     - name:
---

<span style="color: grey; font-weight: 300; font-size: 0.9em;">25th May 2025</span>

We are launching [TheorIA Dataset](https://theoria-dataset.github.io/theoria-dataset/index.html) (Theoretical Physics Intelligent Anthology), a growing collection of physics equations, step-by-step derivations and plain-language explanations, fully written as self-contained JSON. It fills a gap identified in my earlier post [Datasets for advancing Theoretical Physics & AI](https://manuelsh.github.io/blog/2025/datasets-for-advancing-Theoretical-Physics/), namely, the absence of curated, machine-readable data that goes beyond raw PDFs.

We are trying to make something robust and with high-quality: built-in CI validation, explicit assumptions, programmatic proofs (SymPy), and arXiv-style domain tags to keep every entry reproducible and searchable.

We currently have 15 entries, many written with AI, but some already curated by physicists, but we need hundreds. Your favourite derivation is probably still missing.

All code and content is open source under the CC-BY 4.0 license on [GitHub](https://github.com/TheorIA-org/TheorIA). Pull requests are welcome!

## Why bother?

ImageNet rewired computer-vision research. In NLP, the Pile, C4 and friends did the same. Theoretical physics, on the other hand, still asks language models to learn Maxwell’s equations by going through paper PDFs.

TheorIA is an attempt to raise the bar:

| Pain point                        | TheorIA’s answer                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| Equations are locked inside prose | Each equation is a first-class JSON object, plus symbol table and AsciiMath rendering |
| Derivations are opaque            | Straightforward step-by-step derivations with automated verification with SymPy       |
| Reproducibility headaches         | CI in Github validates all PRs against schema and proofs before merge                 |

## TheorIA is a work in progress

Many of the entries you’ll find in TheorIA are currently in draft form, built with the help of AI tooling to bootstrap content at scale. Hence, they often contain typos, notation inconsistencies or even subtle mathematical errors. If they were perfect, this dataset would not be useful for training models.

This is a feature, not a bug: by crowd-sourcing expert review and inviting physicists, mathematicians and educators to correct each derivation, we hope to rapidly turn these drafts into rock-solid reference materials. Your contributions will ensure that TheorIA remains both rigorous and reliable. We will very clearly mark the entries that are still not ready for use.

## A quick tour

For now, we have built a simple [web viewer to explore the dataset](https://theoria-dataset.github.io/theoria-dataset/index.html), including each entry, which makes it easy to spot typos.

The [main repository](https://github.com/TheorIA-org/TheorIA) is on GitHub, and you can see an example of a raw entry here, the [Lorentz transformations](https://github.com/theoria-dataset/theoria-dataset/blob/main/entries/lorentz_transformations.json). We also have a comprehensive [contributing guide](https://github.com/theoria-dataset/theoria-dataset/blob/main/CONTRIBUTING.md).

If you are not a software developer but you want to contribute by correcting or adding an entry, just follow the guidelines, create a json and add it as an [issue](https://github.com/theoria-dataset/theoria-dataset/issues) in the repo. Remember to add your name or/and ORCID to the entry author field!

## Roadmap

The project is still early, and it requires significant work to make it useful and meaningful. You can follow the status in the [TheorIA project board](https://github.com/users/theoria-dataset/projects/1/views/1).

The general steps we have in mind are:

1. Build some critical mass: Have 100 AI generated entries (I expect them to have many errors, from the ones generated already) and at least 20 curaated by physicists.
2. Test LLMs performance with the curated examples and compare their output.
3. Reduce contributors friction: Have an easy way for users to modify or add entries to the dataset, from a user-friendly web interface.
4. Automate output formats. Provide “one-click” scripts (JSON→LaTeX/Markdown/API) so adopters can plug TheorIA into documentation, teaching materials or model workflows without a learning curve.
5. Once we have enough entries, deliver a demo. Fine-tune an LLM on the dataset and publicly compare its derivation-explanation quality against baselines.

## Call for collaborators

We’re especially looking for:

- **Physicists or students** to review or add entries.
- **Toolsmiths** to build visualisers, dataset converters or training scripts.

## Final thoughts

I hope that TheorIA will graduate from “neat GitHub repo” to a reference for physicists, educators and AI researchers. Join us in turning raw drafts into high-quality derivations, and let’s build the data foundation that physics and AI have been waiting for.
