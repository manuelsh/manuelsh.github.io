---
layout: page
title: TheorIA Dataset
description: Open dataset of theoretical physics results for language-model reasoning
timeframe: Apr 2025-present
role: Founder and maintainer
img: https://avatars.githubusercontent.com/u/208175287?v=4
importance: 1
category: contributions
selected: true
order: 1
github: https://github.com/theoria-dataset/theoria-dataset
---

[TheorIA](https://theoria-dataset.github.io/theoria-dataset/) is an open dataset of theoretical physics results and derivations, designed both to help students understand physics from first principles and to support language-model reasoning in physics.

The project started from a practical question: if we want AI systems to reason better in technical domains, we need data that preserves the steps, notation, assumptions, and conceptual dependencies of real scientific work. Papers and PDFs are valuable, but they are a poor format for training, evaluation, search, and systematic reuse.

As we built the dataset, we also realised it could be useful beyond AI. TheorIA can help anyone who wants to understand physics from fundamental principles, because each result is connected to earlier mathematical definitions, physical assumptions, observations, and derived results. That kind of structured map is hard to find today. Even on Wikipedia, it is often difficult to follow a clear derivation, distinguish what is fundamental from what is derived, and see how different ideas depend on each other. This is why we also built a front end for exploring the dataset.

TheorIA represents each physics result as a structured JSON entry. Its goal is to make equations, derivations, symbols, assumptions, context, and domain classifications explicit enough to be searched, checked, reused, and reasoned over.

## What the dataset contains

- One JSON file per physics result, so entries can be reviewed and versioned independently.
- Step-by-step derivations in [AsciiMath](https://asciimath.org/), written for both human reading and programmatic validation. AsciiMath was prefered over LaTeX as it is easier to read in the JSON selected format.
- A centralized [assumption database](https://theoria-dataset.github.io/theoria-dataset/assumptions.html) that keeps terminology and physical conditions consistent across entries.
- Cross-entry dependencies, historical context, and arXiv-style domain tags.
- Automatically generated notebooks for interactive exploration and verification.
- A CC-BY 4.0 license so the dataset can be reused in research, teaching, and model development.

The project is still early, and the current emphasis is on increasing coverage, reducing contribution friction, and turning AI-generated drafts into expert-reviewed reference material.

## Why TheorIA

Physics is rich in structured knowledge, but much of it is locked inside prose, PDFs, notation conventions, and implicit assumptions. TheorIA is an attempt to make that knowledge more directly useful for people, language models, symbolic-reasoning benchmarks, teaching material, and reproducible scientific references.

The near-term roadmap is to expand the dataset, improve validation, make contribution easier for physicists who do not want to work directly with JSON, and use the entries to test whether language models can derive symbolic physics results correctly.

## Links

- [TheorIA live dataset](https://theoria-dataset.github.io/theoria-dataset/)
- [GitHub repository](https://github.com/theoria-dataset/theoria-dataset)
- [Launching TheorIA: A Machine-Readable Atlas of Theoretical Physics](/blog/2025/launching-theoria-a-ML-dataset/)
- [Datasets for advancing Theoretical Physics and AI](/blog/2025/datasets-for-advancing-Theoretical-Physics/)
