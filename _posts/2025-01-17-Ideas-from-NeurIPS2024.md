---
layout: distill
title: Ideas from NeurIPS 2024
date: 2025-01-17 12:00:00
description: NeurIPS 2024, the largest AI research conference, provides a glimpse into the next frontiers. Here are some of the most exciting ideas from the conference.
tags: LLM, NeurIPS
categories: NeurIPS, LLM
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
giscus_comments: true
toc:
  - name: Agents, the next frontier
    subsections:
      - name: Conquering human user interfaces
      - name: Other useful resources about Agents
  - name: Building and improving Large Language Models
    subsections:
      - name: Are we running out of data?

    # - name:
    #     subsections:
    #     - name:
---

[NeurIPS](https://neurips.cc/Conferences/2024) is widely considered _the_ major AI research conference. With over 16,000 participants, 56 workshops, countless parallel tracks, and a staggering 3,650 posters, it’s not just an event—it’s an intellectual marathon. This year 2024, Vancouver, Canada, hosted it, and during six packed days, it offered a privileged vantage point into the state of the art in the field and their current challenges. While it’s impossible to capture its vast scope in a single post, here’s a glimpse of the most exciting ideas that stood out to me.

I will divide it into xxx main themes: [[[put them  here]]]

# Agents, the next frontier

Many researchers agree that to bring intelligent systems to the next level we need to focus on “Agents”, instead of just models (such as LLMs). This was mentioned by Ilya Sutskever in his presentations and there were many interesting presentations on the topic, including showcases of agentic libraries, like [Autogen](https://www.microsoft.com/en-us/research/project/autogen/), presented by Microsoft, and [Llama Stack](https://github.com/meta-llama/llama-stack), by the folks of Meta.

## Conquering human user interfaces

Very promising the [OmniParser method](https://microsoft.github.io/OmniParser/), also from Microsoft, which can be used to build agents able to interact with a screen or browser. In a future where our interactions with the digital world are intermediated by AI agents, they should be able to interact with the content as we do, using keyboard, mouse or tapping in a screen to navigate through user interfaces.

For example, as I have tested myself, giving the LLM the control of the mouse and keyboard and the ability to use a browser (easily done by asking the LLM to build code with [Selenium](https://www.selenium.dev/) or similar libraries), if you ask it to do certain tasks, like book a flight, fails miserably, with accuracies around 16% in the ScreenSpot benchmark.

But if the model is supplemented with the input coming from Omniparser, this accuracy jumps to 73% on the same dataset. Though this increase is very significant, it has already been surpassed [by other models](https://paperswithcode.com/sota/natural-language-visual-grounding-on), which means that in less than one year, we will likely see AI operating seamlessly with the UI of our phones or computers as humans do.

<div class="row mt-3">

    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/omniparser_example.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>

</div>
<div class="caption">

    Example of the output of Omniparser from a screenshot with Google Slides.

</div>

## Other useful resources about Agents

The folks of Meta showed how to build agents with their [Llama Stack](https://github.com/meta-llama/llama-stack), providing also a great [notebook with many relevant examples](https://colab.research.google.com/drive/1F2ksmkoGQPa4pzRjMOE6BXWeOxWFIW6n#scrollTo=K4AvfUAJZOeS), which includes RAG evaluation with LLM as a judge.

A couple of highlights were their agentic proposed architecture where a central executor orchestrates everything, as shown in the image below. Just follow the numbers in order to better understand it.

<div class="row mt-3">

    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/Meta_agentic_archirecture_proposal.JPG" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>

</div>
<div class="caption">

    Architecture of an agent as proposed by Meta.
    Source: Active Training: Building Agentic Apps with Llama 3.2 and Llama Stack. Neurips 2024.

</div>

They also provided some hints on which model size to use for different tasks. I found the following table quite useful.

<div class="row mt-3">

    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/Meta_model_sizes_and_usages_table.JPG" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>

</div>
<div class="caption">

    Table showing the model sizes and their usages as proposed by Meta.
    Source: Active Training: Building Agentic Apps with Llama 3.2 and Llama Stack. Neurips 2024.

</div>

# Building and improving Large Language Models

One of the standout topics at NeurIPS this year was the process of building and improving Large Language Models. A particularly noteworthy presentation was given by the AllenAI team, who provided a detailed overview of the end-to-end process of building an LLM. From data acquisition to post-training, they shared many insights and tips. This topic is so rich that it deserves a summary of its own, which you can find [here](https://manuelsh.github.io/blog/2025/NIPS-building-llm-workshop/).

## Are we running out of data?

Many speakers touched on the topic of data scarcity. Kyle Lo from AllenAI mentioned that we are not running out of data, but of _open_ data. Ilya Sutskever, in his remarks upon receiving the “Test of Time Award” for his paper, described data as the “fossil fuel of AI,” noting that while compute continues to grow, data is not growing at the same pace. He suggested that we should be looking at “synthetic data,” inference time compute, and agents as potential solutions.


This was challenged by Jason Weston (vibrant multi-colored hair today), who pointed out that significant portion of the training of LLMs in frontier companies relies on "closed data," which they possess and are generating in substantial quantities. He expressed skepticism about the severity of the data scarcity issue, suggesting that Ilya's perspective might be influenced by his recent departure from OpenAI and the resulting loss of access to that data.

It is worth mentioning the work of Epoch AI on precisely this topic. In their [Will We Run Out of Data?](https://epoch.ai/blog/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data) paper they project that human public text, estimated in 300 trillion tokens, will be fully utilized between 2026 and 2032, or earlier (see chart below). 

<div class="row mt-3">

    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/epoch-ai-data-utilization.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>

</div>
<div class="caption">
    Source: Epoch AI, June 2024
</div>

Epoch AI focus here on textual data. However, a significant portion of data exists in other formats, such as images, audio, and video, which can also be used for training. While computational power grows exponentially and data increases at a linear rate, advancements in algorithms and methods continue to become more efficient. Furthermore, alternatives like self-distillation (model generates data and trains with it), [Constitutional AI](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback), synthetic data, and private datasets reduce this open data reliance. For all these reasons I don't think data will be a blocker for the next years.

Finally, consider that the most intelligent entities we know, humans, process an estimated 50-100 terabytes of raw data annually (through all our senses) with brain that consumes only ~20 Watts. This sets a benchmark on the efficiency of intelligence.

## Architectures and RL methods

It's clear that other alternatives to the Transformer architecture are standing out, such us [Mamba](https://arxiv.org/abs/2312.00752) or [xLSTM](https://arxiv.org/abs/2405.04517). These architectures are more efficient at inference, as the computing doesn't grow quadratically with the number of input tokens, while they can parallelize the prediction of the next token in the training, like the Transformer does, instead of sequentially like previous architectures (RNN, LSTM…). xLSTM was presented by Hochreiter, creator of the LSTM architecture, which admitted that is very similar to Mamba: “architectures converge”. However, although they were mentioned many times, they are not clear winners yet.

Also, Reinforcement Learning with Human Feedback (or RLHF), which is the method used by OpenAI ChatGPT to make a language model a chatbot, is being substituted or supplemented by many other methods, like DPO, which is significantly easier and performs at a similar level. More details in my summary on [Opening the LLM pipeline](https://manuelsh.github.io/blog/2025/NIPS-building-llm-workshop/).


# Measuring the performance of foundation models

Although benchmarking models is part of building models, this topic is so relevant that requires its own section. Benchmarking is important for several reasons: to understand how good a model is but also to build more intelligent models.

## Benchmarks to advance AI

Intelligence definition is ellusive, that is why those benchmarks that are easy for humans but hard for AI models are very relevant. One of them is [ARC](https://arcprize.org/), which requires the ML model to solve a series of puzzles, each one with a different logic, like the one shown below.

[[[[[ADD EXAMPLE!!!]]]]]

The performance of humansin the ARC test is very high, around 90% accuracy, while at the time of Neurips 2024 the best model was at 53%. Interestingly, less than a week after François Chollet presentation in NeurIPS, OpenAI announced that their [new o3 model](https://community.openai.com/t/day-12-of-shipmas-new-frontier-models-o3-and-o3-mini-announcement/1061818) is able to reach to 76% in ARC. A great example of how quickly the field moves!

[Melanie Mitchell](https://melaniemitchell.me/), from the Santa Fe Institute, also showed during a [[[[tutorial/workshop/presentation on....]]]] how current state of the art LLM  fail when performing some trivial modifications on benchmarks. She mentioned an example of the insightful paper [Reasoning or Reciting?](https://arxiv.org/pdf/2307.02477) where in a Python code benchmark, which GPT4 can do very well, just by introducing a simple change in the way the language work ("now lists index start with 1 and not zero) the model fails misserably. See the chart below. This provides a good glimpse on how far are our current best transformer models to be considered AGI.

[[[put image from paper]]]

In reality, building "easy for humans, hard for AI" kind of benchmarks are key to the development of more intelligent models. Indeed, as Fei Fei pointed out in her inspiring presentation, building the ImageNet benchmark was key for the rebirth of neural networks in 2012, and the newly coined term "Deep Learning".

## EUREKA: A comprehensive framework to evaluate LLMs

The folks from Microsoft presented a comprehensive and open source framework to evaluate multimodal and language models called [Eureka](https://www.microsoft.com/en-us/research/blog/eureka-evaluating-and-understanding-progress-in-ai/), which assesses the performance of models across several dimensions. Some of the main conclussions of their evaluation of 14 large foundation models are:
- Models like Claude 3.5 Sonnet, GPT-4o 2024-05-13, and Llama 3.1 405B show distinct strengths in specific tasks but are not universally superior across all benchmarks.
This highlights the need for task-specific analysis rather than assuming a model's overall superiority.
- Current AI models struggle significantly with multimodal tasks, particularly those requiring detailed image understanding and spatial reasoning. For example, all models perform poorly on Object Detection.
In the folllowing chart you can see the results. They are quite insightful!

[[[put image from paper]]]

# Representation learning

- Very cool workshop on representation learning where they have evidence about “different neural networks, trained different, including human neural networks, converge towards the same way of representing the world”.

# AI Safety

Main idea: we can get all the benefits of AI without the risks by not doing agents but special purpose models.

# Practical applications

Presentation of Shopify

# Drama

- Women that insulted Chinese
- Price to the main paper with guy that ....
