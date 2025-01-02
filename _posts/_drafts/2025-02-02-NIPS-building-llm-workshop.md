---
layout: distill
title: Opening the LLM pipeline
date: 2025-01-01 12:00:00
description: My notes on a great tutorial at NeurIPS 2024 on how to build a Large Language Model, with many practical tips.
tags: LLM, NeurIPS
categories: NeurIPS
# thumbnail: assets/img/9.jpg
# giscus_comments: false
# authors:
#   - name: Manuel Sánchez Hernández
#     url: "https://manuelsh.github.io/"
#     affiliations:
#       name: Adevinta
#       url: "https://www.adevinta.com/"
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

toc:
  - name: Data preparation
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Model training
  - name: Adaptation
  - name: Conclusions
---

<!-- # Opening the LLM pipeline: summary of a Neurips 2024 tutorial -->

This post summarizes the tutorial ["Opening the Language Model Pipeline: A Tutorial on Data Preparation, Model Training, and Adaptation"](https://neurips.cc/virtual/2024/tutorial/99526) that I attended at NeurIPS 2024, by [Kyle Lo](https://kyleclo.com/), [Akshita Bhagia](https://akshitab.github.io/) and [Nathan Lambert](https://www.natolambert.com/), all from the [Allen Institute for AI](https://allenai.org/). I think some may benefit from the practical tips they shared.

The process to build a Large Language Model is very involved, and the folks from the Allen Institute went through it end to end, providing many details and practical knowledge: from building the dataset to post-training.

The tutorial was divided into three main parts: data preparation, model training, and adaptation. Here I summarize the main takeaways from each part.

## Data preparation

On data acquisition, it’s becoming harder to crawl data. Many websites are opting out or implementing anti crawlers protection. Note that this will create a barrier to enter for new players. As they said: we are not running out of data, we are running out of _open_ data.

They also shared the amount of data that remains once the data is filtered for quality and deduplication: reductions are usually of the order of 65 times.

Some interesting new trend: “data curriculum”, which consists of training the model with trillions of tokens and at the end of it one switches the data with either very high quality sources, specific instructions or synthetic data.

## Model training

Pretraining, the process where you train a LLM on next token prediction with a large amount of text, is currently mostly done with a Transformer architecture, accepting many different configurations that are successful, including many attention mechanisms (e.g. multi head, grouped-query or multi-query).

In terms of scale the approximate good scaling law given by the [Chinchilla paper](https://arxiv.org/abs/2203.15556) (compute budget approximately 6 times the number of parameters by data tokens, and data tokens approx 20 times the number of parameters), although in practice everybody keeps training further.

In terms of costs, the pre-training run of a 7b parameter model and 150B tokens (just above previous budget), will cost approx $10k.

Common positional embeddings today are [rotary positional embeddings](https://arxiv.org/abs/2104.09864) (RoPE) and the [SwiGLU activation](https://arxiv.org/abs/2002.05202v1).

When the loss function spikes punctually, look at your data, probably is a low quality batch that needs to be filtered.

When the loss function starts spiking and diverging, one needs to ensure that the scale of activations and gradients remain roughly the same, and they should scale with model width. Better to use normal initialization and RMSNorm, QK-Norm and change the order of the layer norm. Finally, ensure that the token embedding does not become too small (no weight decay).

Run experiments with smaller models first, to find optimal parameters, decide on data ablations.

Learning rate annealing also helped. Increase first with the first 10B tokens (to 3e-4) then reduce with cosine decay to 5e-5 for the following trillions of tokens and finally reduce to 0 in the last 50B tokens (e.g. with curriculum training).

Use efficient architectures such as Mixture of Experts is makes it aso more efficient.

In terms of distributing the training across GPU’s, the recommendation is to use FSDP. Here there is an [excellent tutorial](https://pytorch.org/tutorials/intermediate/FSDP_tutorial.html). One needs to ensure that the global batch size is not too large.

Use flash attention algorithm as is faster and more memory efficient.

Try to keep your code simple, before using torch.compile.

With large training jobs it’s important to manually do garbage collection at the same time in all processes, as otherwise you can have stalls.

## Adaptation

The talk reminded me of other recent articles which describe the LLM building process (or at least provide some details), such as the very [insightful paper from Apple](https://arxiv.org/pdf/2403.09611) about their MM1 model, or the [one from Meta on Llama 3.1](https://arxiv.org/pdf/2407.21783).

eds to do data ablation, to ensure that the data we train on improves the model.

## Conclusions

The folks from the Allen Institute were very generous in sharing their knowledge, as I think many tips from their practical knowledge may be useful. I hope the video and slides are also shared soon in [the tutorial page](https://neurips.cc/virtual/2024/tutorial/99526).
