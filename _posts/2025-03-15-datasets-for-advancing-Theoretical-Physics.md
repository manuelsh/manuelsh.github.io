---
layout: distill
title: Datasets for advancing Theoretical Physics and AI
date: 2025-04-13 09:00:00
description: A review of existing datasets and gaps in physics and machine learning.
tags: AI, Enterprise, Machine Learning, Business
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
  - name: Existing Datasets
    subsections:
      - name: Theoretical Physics (Knowledge & Simulations)
      - name: Experimental Physics
      - name: Mathematics for Physics
      - name: Multimodal Physics Data
  - name: "Gap Analysis: Missing or Underrepresented Data"
  - name: Bridging the Data Gap in Theoretical Physics
#     subsections:
#     - name:
---

# Datasets for advancing Theoretical Physics and AI

<span style="color: grey; font-weight: 300; font-size: 0.9em;">Published on: April 13, 2025</span>

The history of recent developments in deep learning shows the crucial role played by curated datasets. For example, Fei-Fei Li and her collaborators dramatically reshaped computer vision with the creation of [ImageNet](https://arxiv.org/abs/1409.0575), a large-scale, labeled image collection. This sparked the start of the deep learning revolution. Similarly, datasets like CIFAR-10 and MNIST have provided foundational benchmarks essential for algorithmic progress.

Despite these advances in machine learning, theoretical physics still lacks comprehensive, standardized datasets. Developing high-quality datasets specifically tailored for theoretical physics could accelerate progress both in AI—by enabling more powerful models—and in physics itself, by establishing common benchmarks for training and evaluating physics-related models.

In this post, I start by looking to the current existing physics related datasets by domain, data type, level of content and availability. Then I try to identify current existing gaps and propose new dataset creations.

## Existing Datasets

### Theoretical Physics (Knowledge & Simulations)

This includes textual corpora of theory papers, equation datasets, and simulation data of theoretical models.

| Dataset / Source                                  | Domain & Content                                                                                                                                                                                                                                                               | Type                               | Level              | Availability                                                                                                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ArXiv Physics Corpus**                          | All physics subfields (theory & experiment) – 1.2M+ research papers ([PhysBERT: A Text Embedding Model for Physics Scientific Literature](https://arxiv.org/html/2408.09574v1#:~:text=converts%20text%20into%20dense%20vector,tuning%20for%20specific%20physics%20subdomains)) | Text (papers, PDFs)                | Frontier research  | [Open-access](https://www.kaggle.com/datasets/Cornell-University/arxiv) (arXiv)                                                                             |
| **Physics Journals (e.g. APS)**                   | Broad physics research literature (peer-reviewed journals)                                                                                                                                                                                                                     | Text (papers)                      | Frontier research  | Restricted (subscription)                                                                                                                                   |
| **Feynman Symbolic Regression Dataset**           | Classical physics formulas (from Feynman Lectures, etc.) – 100+ laws                                                                                                                                                                                                           | Symbolic equations \+ numeric data | Undergrad–Graduate | [Open](https://web.archive.org/web/20250319094015/https://space.mit.edu/home/tegmark/aifeynman.html) ([research](https://arxiv.org/pdf/1905.11481) dataset) |
| **Kreuzer–Skarke Calabi–Yau DB**                  | String theory – 473,800,776 reflexive 4D polytopes (Calabi–Yau manifolds) ([Group-invariant machine learning on the Kreuzer-Skarke dataset](https://www.sciencedirect.com/science/article/pii/S0370269324005549#:~:text=Group,Yau%20threefolds))                               | Structured (geometric data)        | Frontier research  | [Open](http://hep.itp.tuwien.ac.at/~kreuzer/CY/) (online database)                                                                                          |
| **Lattice QCD Configurations**                    | Quantum Field Theory (lattice QCD) – gauge field samples, correlation functions                                                                                                                                                                                                | Numeric (lattice data)             | Frontier research  | Partially open ([example](https://www.jldg.org/ildg-data/))                                                                                                 |
| **SXS Waveforms** (Simulating eXtreme Spacetimes) | General Relativity – Numerical relativity waveforms of binary black holes ([SXS Gravitational Waveform Database](https://data.black-holes.org/waveforms/index.html#:~:text=This%20repository%20contains%20all%20publicly,than%20Lev1%2C%20and%20so%20on))                      | Numerical time-series              | Frontier research  | [Open](https://data.black-holes.org/simulations/index.html) (public catalog)                                                                                |

### Experimental Physics

Datasets from experiments and simulations that test physical theories, often used to train ML models to detect patterns or surrogate models for experiments.

| Dataset / Source                           | Domain & Content                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Type                                     | Level              | Availability                                                                                                                               |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **CERN Open Data (LHC)**                   | High-energy physics – Petabytes of LHC collision data (ATLAS, CMS, etc.)                                                                                                                                                                                                                                                                                                                                                                                                     | Numerical (events, detector readings)    | Frontier research  | [Open-access](https://opendata.cern.ch/#:~:text=Explore%20more%20than%20five%20petabytes,open%20data%20from%20particle%20physics) (portal) |
| **HEP ML Datasets** (HIGGS, HEPMASS, etc.) | Particle physics – Simulated collision events labeled as Higgs vs. background                                                                                                                                                                                                                                                                                                                                                                                                | Numerical (tabular features)             | Graduate/Research  | [Open](https://mlphysics.ics.uci.edu/#:~:text=HIGGS%20dataset) (UCI/Zenodo)                                                                |
| **LIGO/Virgo GWOSC**                       | Gravitational waves – Time-series signals from interferometers (event strain data)                                                                                                                                                                                                                                                                                                                                                                                           | Numerical (time-series)                  | Frontier research  | [Open](https://gwosc.org/eventapi/) (GWOSC portal)                                                                                         |
| **Quantum Optics Experiments**             | Quantum optics – e.g. single-photon interference, trapped-ion measurements                                                                                                                                                                                                                                                                                                                                                                                                   | Numeric (experimental logs, time-series) | Graduate/Research  | Limited open (lab repositories, e.g. [QDataSet](https://github.com/eperrier/QDataSet))                                                     |
| **Fluid Dynamics/CFD Simulations**         | Classical mechanics – CFD simulation outputs (e.g. flow fields, turbulence)                                                                                                                                                                                                                                                                                                                                                                                                  | Numerical (grids, images)                | Graduate/Research  | Partially open (benchmarks, e.g. NASA CFD data)                                                                                            |
| **Graph Network Simulations**              | Multi-body physics – Synthetic trajectories for n-body, fluids, rigid bodies ([Physics Simulation With Graph Neural Networks Targeting Mobile \- Mobile, Graphics, and Gaming blog \- Arm Community blogs \- Arm Community](https://community.arm.com/arm-community-blogs/b/mobile-graphics-and-gaming-blog/posts/physics-simulation-graph-neural-networks-targeting-mobile#:~:text=%E2%80%9CLearning%20to%20Simulate%E2%80%9D%20also%20presents,term%20interaction%20data)) | Numeric (graph-based, trajectories)      | Undergrad–Graduate | [Partially open](https://hal.science/hal-03806092/document) (code to generate; DeepMind GNS data)                                          |

### Mathematics for Physics

Datasets of mathematical problems, proofs, and symbolic computations relevant to physics problem-solving and theory.

| Dataset / Source                       | Domain & Content                                                                                                                                                                                                                                | Type                      | Level                  | Availability                                                                                                           |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **MATH Dataset** (Hendrycks et al.)    | 12,500 competition math problems with step-by-step solutions ([\[2103.03874\] Measuring Mathematical Problem Solving With the MATH Dataset](https://arxiv.org/abs/2103.03874#:~:text=,though%20we%20are%20able%20to))                           | Text (problem ⇒ solution) | Undergrad (contest)    | [Open](https://github.com/hendrycks/math) (public dataset)                                                             |
| **PhysQA**                             | 1,008 physics word problems (mechanics, etc.) with annotated solutions                                                                                                                                                                          | Text (word problems Q\&A) | High school            | [Open](https://paperswithcode.com/dataset/phy-q) (research dataset)                                                    |
| **GPT-4 Physics Q\&A (Camel Physics)** | 20,000 physics problem–solution pairs generated by GPT-4 ([camel-ai/physics · Datasets at Hugging Face](https://huggingface.co/datasets/camel-ai/physics#:~:text=Dataset%20Summary))                                                            | Text (QA, synthetic)      | Undergrad–Grad (mixed) | Open (Hugging Face)                                                                                                    |
| **Formal Theorem Libraries**           | Proofs and theorems ([Isabelle](https://isabelle.in.tum.de/), [Lean](https://leanprover-community.github.io/), [Coq libraries](https://github.com/uhub/awesome-coq)) – e.g. analysis, algebra used in physics                                   | Formal text (logic)       | Graduate–Research      | Open (MIT/BSD licenses)                                                                                                |
| **Symbolic Integration & ODE Sets**    | Large sets of integrals and differential equations for symbolic solving (e.g. 27M integration pairs)                                                                                                                                            | Symbolic (expressions)    | Undergrad–Grad         | Open (research, [SIRD](https://github.com/mfbalin/SIRD-Symbolic-Integration-Rules-Dataset?tab=readme-ov-file) dataset) |
| **PINN Benchmark (PINNacle)**          | 20+ distinct physics PDEs (heat eq., Navier-Stokes, etc.) with solution data for PINNs ([PINNacle: A Comprehensive Benchmark of Physics-Informed Neural ...](https://arxiv.org/abs/2306.08827#:~:text=,fluid%20dynamics%2C%20biology%2C%20and)) | Numerical (PDE solutions) | Undergrad–Grad         | [Open](https://github.com/i207M/PINNacle) (benchmark dataset)                                                          |

### Multimodal Physics Data

Combining text, equations, and visuals.

- **MM-PhyQA (Multimodal Physics QA):** High-school physics questions each with multiple related images and diagrams ([MM-PhyQA: Multimodal Physics Question-Answering With Multi-Image CoT Prompting](https://arxiv.org/html/2404.08704v1#:~:text=While%20Large%20Language%20Models%20,for%20questions%20consisting%20of%20multimodal)). _Type:_ Text \+ images; _Level:_ High school; _Availability:_ Open (research).

- **Physics StackExchange Q\&A:** Community Q\&A with conceptual explanations (text, some diagrams). _Type:_ Text (informal); _Level:_ Undergraduate+; _Availability:_ Open (CC license).

- **Laboratory Video/Imagery:** E.g. cloud chamber images, astronomical images with annotations. _Type:_ Visual \+ metadata; _Level:_ Graduate; _Availability:_ Partially open (scattered repositories).

The tables above show that many **open-access datasets** exist, especially for high-energy physics, mathematical problems, and certain simulations. Also note **commercial/restricted datasets** like proprietary textbook problem banks, paywalled journal corpora, or private experimental data (e.g. active experimental runs not yet released).

Datasets have been used to train a variety of AI models: large language models (using text corpora of physics papers and Q\&A), graph neural networks (using simulation or detector data structured as graphs), symbolic regression models (using formula datasets like Feynman), and physics-informed neural networks (using synthetic PDE solution datasets).

## Gap Analysis: Missing or Underrepresented Data

Despite the above resources, I believe that several important gaps remain:

- We lack large, **well-annotated datasets of physics problems** at advanced graduate level, with step-by-step solutions. Existing collections like MATH or PhysQA cover contests or high-school problems, but few cover the multi-step derivations typical in university physics courses (e.g. electromagnetism, quantum mechanics problem sets) with detailed solutions.
- There is an **absence of curated datasets of theoretical physics knowledge** beyond raw text in papers. For example, there is no database of all important equations/derivations in quantum field theory or general relativity with context, proofs, etc. Similarly, while formal math libraries exist, they rarely cover _physics-specific_ theorems or derivations (e.g. proofs of Noether’s theorem, derivations of field equations…).
- Niche but important domains like **string theory, quantum gravity, or high-dimensional theoretical constructs are underrepresented** in accessible data. For instance, the Kreuzer–Skarke dataset (Calabi–Yau spaces) exists but lacks labels connecting to physical phenomenology.
- Physics understanding often requires linking equations, diagrams, and natural language. **Few datasets integrate multiple modalities** – for example, pairing physics textbook figures or experimental plots with explanatory text and underlying equations. The lack of such unified multimodal datasets means AI struggles with tasks like interpreting a diagram alongside text or deriving equations from experimental graphs.
- There is a gap in **datasets that directly connect experimental data with theoretical predictions** in a structured way. While experimental data (like LHC events or LIGO signals) exist, they are not commonly packaged with the corresponding simulated or theoretical model outputs for the same conditions. This makes it difficult for AI to learn how theory parameters influence data and vice versa. A benchmark that pairs raw experimental data with the expected outcomes from theory (or simulation) is largely missing.

Each of these gaps points to an opportunity for new dataset creation.

## Bridging the Data Gap in Theoretical Physics

The datasets reviewed illustrate both the progress made and the potential for advancing theoretical physics. Filling the identified gaps could catalyze breakthroughs. Just as ImageNet revolutionized computer vision, well-crafted physics datasets could similarly drive transformative developments in physics and AI.

I think the task is clear: Physicists and data scientists need to collaborate to create accessible, comprehensive datasets addressing these gaps. Such datasets will not only enhance AI's capability to understand and predict physics but also foster innovation, potentially accelerating the frontiers of science itself.
