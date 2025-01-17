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

    Architecture of an agent as proposed by Meta. Source: Active Training: Building Agentic Apps with Llama 3.2 and Llama Stack. Neurips 2024.

</div>

CONTINUE HERE CONTINUE HERE CONTINUE HERE CONTINUE HERE CONTINUE HERE CONTINUE HERE

# Building and improving Large Language Models

One of the standout topics at NeurIPS this year was the process of building and improving Large Language Models. A particularly noteworthy presentation was given by the AllenAI team, who provided a detailed overview of the end-to-end process of building an LLM. From data acquisition to post-training, they shared many insights and tips. This topic is so rich that it deserves a summary of its own, which you can find [here](https://manuelsh.github.io/blog/2025/NIPS-building-llm-workshop/).

## Are we running out of data?

Many speakers touched on the topic of data scarcity. Kyle Lo from AllenAI mentioned that we are not running out of data, but of _open_ data. Ilya Sutskever, in his remarks upon receiving the “Test of Time Award” for his paper, described data as the “fossil fuel of AI,” noting that while compute continues to grow, data is not growing at the same pace. He suggested that we should be looking at “synthetic data,” inference time compute, and agents as potential solutions.

This was challenged by

This is a very important topic and opinions are diverse. I think is worth to look at the data that we have around the topic:

- [Kyle Lo](https://kyleclo.com/), from Allen AI, mentioned that we are running out of _open_ data. I think this is fairly obvious (but still worth mentioning), as once you crawl all internet, then one needs to find new sources.
- Ilya Sustkever, in his remarks when he received the “Test of Time Award” for his paper, mentioned that data is not growing as needed, “is the fossil fuel of AI”, while compute continues to grow. Hence we should be looking at “synthetic data”, inference time compute (versus training time, think about the o1 model) and, again, agents.
- \[Mention the guy who changes hair color and his answe\]
- \[Finish with epoch ai\]

  - The folks from Allen AI described in many practical details their process to build their multi billion parameter and multi trillion data tokens LLM, [OLMO](https://allenai.org/olmo) and [Tulu](https://allenai.org/tulu). They went through the whole process end to end, from data acquisition to post training. Many tips were shared. See a [summary here](https://manuelsh.github.io/blog/2025/NIPS-building-llm-workshop/).
  - Some interesting trends were present on many of these talks, including:
    - Seems that we are running out of “open” data, and a lot of effort is spent now in tapping other sources of data. Synthetic data generation is also a big topic, many claiming that can be helpful to improve models, including rather old techniques such as [Constitutional AI](https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback), where a model will generate new outputs on controversial (or potentially harmful) topics, will rate them based on a written set of rules (“constitution”), and then will retrain them with the highest rated ones.
    - Reinforcement Learning with Human Feedback (or RLHF), which is the method to make a language model a chatbot, has been substituted or supplemented by many other methods, like DPO, which is significantly easier and performs at a similar level.
    - The Transformer architecture has some interesting alternatives: like [Mamba](https://arxiv.org/abs/2312.00752) or [xLSTM](https://arxiv.org/abs/2405.04517) (presented by Hochreiter, creator of the LSTM architecture, which admitted that is very similar to Mamba: “architectures converge”). They are more efficient at inference, as the computing doesn't grow quadratically with the number of input tokens, while they can parallelize the prediction of the next token in the training, like the Transformer does, instead of sequentially like previous architectures (RNN, LSTM…).

- # Measuring the performance of foundation models is also a topic that requires almost a chapter by itself.
  - ARC
  - Microsoft
- Special mention to Fei Fei presentation
- Presentation on security and main idea
- Drama
- inference time versus training time
-
- Very cool workshop on representation learning where they have evidence about “different neural networks, trained different, including human neural networks, converge towards the same way of representing the world”.

- Practical applications: folks of Shopify
- ML Safety
