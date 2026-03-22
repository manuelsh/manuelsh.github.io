---
layout: distill
title: "A Pragmatic Evaluation of Software Engineering AI Tooling"
date: 2026-03-09 09:00:00
description: How we evaluated Claude Code, Cursor, and GitHub Copilot across 77 engineers and 165 real tasks to determine productivity impact
tags: AI, software-engineering, productivity, evaluation
categories: AI, machine learning, software development
giscus_comments: true
authors:
  - name: Manuel Sánchez Hernández
    affiliations:
      name: Adevinta
  - name: Ramón Salvadó Ferrero
    affiliations:
      name: Adevinta
toc:
  - name: In a nutshell
  - name: Motivation
  - name: Designing our AI software engineering pilot
    subsections:
      - name: The task tracker, a log for each individual task
      - name: On the productivity metric
  - name: Results
    subsections:
      - name: Our baseline before the pilot
      - name: Quantitative results
      - name: Qualitative results
  - name: Discussion
    subsections:
      - name: Why these results
        subsections:
          - name: The default configuration of the tools and their pricing model
          - name: Preferred IDEs
  - name: After the pilot
  - name: Bibliography
  - name: Appendices
    subsections:
      - name: "Appendix 1: Complete list of attributes in the task tracker and definitions"
      - name: "Appendix 2: Sources of error in our productivity proxy metric and mitigation"
---

<span style="color: grey; font-weight: 300; font-size: 0.9em;">March 9th, 2026</span>

_Originally published on [Adevinta Tech Blog](https://adevinta.com/techblog/a-pragmatic-evaluation-of-software-engineering-ai-tooling/)_

**Personal note:** This article reflects the outcome of a pilot that we ran in Adevinta in June 2025 to evaluate various AI software engineering tools. The findings, previously unpublished, were somewhat unexpected, as Claude Code was not widely favored by engineers at the time.
**Contributors to the pilot:** Albert Puigsech Galicia, Mario Viñas Ruiz, Francesca Lorenzoni, Diego Duchowney, Ferran Grau
> # How to interpret the results
>
> This was a pragmatic, decision-oriented pilot, done with real work across our teams. Results are directional and internally valid to Adevinta codebases and workflows. Limitations and Design Trade-offs: Our results are based on assessment of experienced software engineers on how long a task should last, which can be subjective. Tools were assigned to teams to minimize disruption, so results reflect real adoption contexts rather than randomized trials. Our sample size is limited, we add confidence intervals in our data. The study lasted only 1 month, hence long term effects are not measured. Pilot was done in May-June 2025, with the state of tools at that point in time. All tools have evolved since then.

# In a nutshell {#in-a-nutshell}

We evaluated three coding AI assistants: Cursor, Claude Code and Github Copilot, with 77 software engineers over 165 real work tasks and four weeks to understand which AI assistant delivers meaningful, cost-effective impact in Adevinta’s environment. The objective of the pilot was to make a decision about which AI tool to deploy; it had to be pragmatic, limited in scope and time, and hence is not an academic study. Data is grounded in Adevinta codebases and workflows.

However, we believe our study is still relevant if the results are interpreted directionally, especially as there is a lack of published results in enterprise settings. In the absence of reliable metrics, in an area where there is so much noise, hype and evolution, we believe that it is important for a company like Adevinta to evaluate first hand different AI tools before making a decision.

Our main findings were: Claude Code demonstrated the strongest performance across all metrics, showing the largest productivity boost, highest completion rate, and highest user rating. Cursor provided moderate but meaningful gains, with a solid completion rate but not as good user sentiment. Github Copilot, which was the tool most engineers had access to already, showed small, almost negligible productivity gains, the lowest completion rate, and the lowest rating.

The reasons for this difference relies on: (1) The default configuration of Claude Code (which at the time of the pilot worked with a "pay as you go" pricing model) makes it automatically select which model should be used for each prompt, while for Cursor and Github Copilot (flat monthly rate) more powerful models need to be manually selected. Claude Code selected the most powerful models 60 times more than the other tools. (2) Claude Code is easier for users to start with, we observed how inexperienced users get value out of it, while Cursor has a steeper learning curve. We actually observed that medium experienced users with Cursor can reap a productivity similar to Claude Code. (3) Cursor, which is an IDE based on VSCode, and Github Copilot, a plugin that works for IntelliJ and VSCode but not XCode, created a temporary learning curve for IntelliJ or XCode users, which may also influence our metrics.

With the data gathered we estimated that Claude Code had the best ROI and integrates best within Adevinta workflows. Deploying this tool in our over 2,000 software engineers is a first step towards increasing productivity through AI coding assistants while we work on other fronts, such as automated metrics, training, software engineering workflow integration… We also plan to do periodic evaluations, similar to the one done in this pilot, of different software engineering tools to adjust our strategy.

# Motivation {#motivation}

Generative AI coding assistants are promising double-digit productivity gains for developers. For a company like [Adevinta](http://google.com/search?q=adevinta&oq=adevinta&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YxwEY0QMYgAQyBwgCEAAYgAQyBwgDEAAYgAQyDQgEEC4YrwEYxwEYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxOTc5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8) with thousands of software engineers across brands such as Leboncoin, mobile.de, Kleinanzeigen or Marktplaats, even single-digit improvements translate into millions of euros of capacity a year.

At the same time, the AI software engineering tooling ecosystem is changing very rapidly, with new tools coming every quarter, promising large productivity gains and sometimes disappointing for its inconsistent performance. The amount of hype seems to increase at the same pace, with leaders in the industry claiming the end of human software engineers at the end of 2025\.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/ai-tooling-header.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    The number of AI Software Engineering tools is growing rapidly with time. Source: authors.
</div>

Contributing to this noise is the [jagged frontier](https://www.hbs.edu/faculty/Pages/item.aspx?num=64700): no one knows in which type of tasks AI models will perform or fail, unless you test it yourself. We were quite conscious about that, since our teams have been building and deploying AI models for over a decade, with over 250 use cases currently delivering value.

Additionally, Adevinta has already integrated AI coding tools like Github Copilot. While initial engineer feedback was largely positive, we couldn't conclusively link these tools to productivity gains. Informal tests with other Software Engineering AI tools also yielded inconclusive results.

In summary, due to the potential of these new wave of AI tools, the absence of reliable metrics, the amount of marketing hype, the importance of software engineering to Adevinta, the high growth of the ecosystem and the jagged frontier, we opted to conduct our own pilot program. We believe that first hand experience with the most advanced tooling was required to decide on the best path forward.

# Designing our AI software engineering pilot {#designing-our-ai-software-engineering-pilot}

In May and June 2025 we ran a structured evaluation of GitHub Copilot, Cursor and Claude Code, with the aim to answer which assistant delivers the most value in our real-world codebases. We shortlisted these three tools because they were industry leaders at the time and had received positive feedback from many informal tests run by our engineers.

Our pilot lasted four weeks, with 77 engineers of 14 different teams and four marketplaces, working on real tasks from their team’s backlog. All teams were product teams, each responsible for a part of Adevinta’s marketplaces, and made up of various engineering roles such as backend, frontend, platform…

Each team was assigned to one of the three AI tools for the whole period. Before the pilot started we made sure that every engineer received an onboarding training on their AI tool by subject matter experts. We also held weekly sessions where they could ask questions, and there were support online channels with experts on each tool available.

Pilot data was gathered from various sources, including two surveys (pre- and post-pilot), three focus groups, four meetings with the team leaders, cost information and telemetry from the AI tools, and information for each individual task performed by the engineers. In total we were able to track 165 tasks during the pilot, which were added to a table, the "task tracker".

For a summary of the design of the pilot, see the following table:

| Aspect               | Design choice                                                                                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Participants**     | 77 software engineers, 14 cross-functional product squads (back- and front-end, data & mobile developers)                                                                                             |
| **Duration**         | 4 weeks, during May-June 2025                                                                                                                                                                         |
| **Tools**            | Github Copilot, Cursor and Claude Code                                                                                                                                                                |
| **Task mix**         | Bug-fixing, refactoring, feature development, migrations, documentation, planning, tooling creation, each flagged with their corresponding area: backend, frontend, Android, iOs, infra or full-stack |
| **Metrics captured** | Estimated-vs-actual cycle time, task outcome, PR size & comments, survey ratings, API usage and costs                                                                                                 |

## The task tracker, a log for each individual task {#the-task-tracker-a-log-for-each-individual-task}

We conducted sessions with team’s managers to align on how to best measure the impact of AI. Even if there were different metrics already available (some teams tracked DORA metrics) they were not consistent across teams and marketplaces, hence we agreed that the best was to manually track them for this pilot. In fact, several software engineer productivity tracking tools resort to doing polls to track AI productivity.

A key artifact we employed was our "task tracker", a table where task details were collected. These tasks were pre-existing in the teams' backlogs, integrated into their plans, and not specifically chosen for the pilot. For each task, information was collected both before it started and after it was completed.

### _Ex ante_ tracking {#ex-ante-tracking}

Before beginning each task, engineers will inform about the following details:

- **Task description:** A brief overview of the task.
- **Engineer's experience:** The engineer's current level of experience with the AI tool, which may evolve throughout the pilot.
- **Task characteristics:** Such as its type (e.g., "feature development," "bug fixing," "refactoring") and the area it pertains to (e.g., "backend," "frontend," "infrastructure").
- **Estimated cycle time without AI:** The engineer's time estimation for the task without the help of AI, crucial for productivity assessment.
- **Expected Pull Request revisions:** To gauge the quality of committed code.

### _Ex post_ tracking {#ex-post-tracking}

Once the task was completed, engineers were required to add the following information:

- **Actual cycle time:** Recorded time from when the task starts until it is completed.
- **Actual number of Pull Requests** to finish the task.
- **Task outcome:** This indicated the AI tool's contribution, categorized as:
  - "Completed, fully done by AI", which we convert to 100%.
  - "Completed, partially done by AI", which we convert to 50%.
  - "Completed manually, AI not able to help", 0%.
- **Engineer's rating of AI tool helpfulness:** A score from 1 to 5, with 5 being the highest rating.

Engineers received definitions and guidance for each attribute in the task tracker, with weekly meetings held to address any questions. A comprehensive list and further details are available in Appendix 1\.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/tracking-table.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    An example of a task tracker for one team, already filled. Columns with black header was completed “ex ante” and with green, “ex post”. Source: authors.
</div>

## On the productivity metric {#on-the-productivity-metric}

From the task tracker, we calculated a productivity proxy, or percentage of time saved, by comparing the actual cycle time to the estimated cycle time without AI, using the following formula:

$$
P_{tool} = 1 - \frac{\sum_{i} A_{i}}{\sum_{i} E_{i}}
$$

Where $$_{tool}$$ is the productivity of the tool, $$\sum_i A_i$$ is the summation of the actual times for all tasks of the tool, and $$\sum_i E_i$$ is the summation of the estimated times without AI for all tasks in the tool. By using this formula, longer tasks will naturally weigh more. We also determined a 95% confidence interval.  
In the Appendix 2 we analyze different sources of errors for the metric and how they were mitigated.

# Results {#results}

## Our baseline before the pilot {#our-baseline-before-the-pilot}

Before starting the pilot, we surveyed our population of 77 engineers to have a better understanding of the adoption of AI tooling. With 70 answers, the most notable results are summarized in the table below:

| Engineers using AI tools daily | 47.1% |
| -----------------------------: | :---- |
|            Used Github Copilot | 62.9% |
|                    Used Cursor | 27.1% |
|               Used Claude Code | 8.6%  |
|  Time in coding activities (%) | 66.8% |

Almost half of the engineers already use AI tools daily, with Github Copilot the most used tool, as it was already available within Adevinta for all engineers, followed by Cursor and Claude Code.

We also asked them to estimate how much time they spend in coding activities out of all their time, resulting in 67% of their time. This result surprised us, as in many other sources the average is between 25% and 40% (Kumar 2025, Meyer 2019, IDC report 2024).

We also asked what development environments they use, and the results are in the chart below. More than half of the users used IntelliJ, with VSCode the second choice. This is relevant as each one of the tools tested work differently across environments, and becomes an important factor in the results of the pilot.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/ai-tooling-ide-distribution.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Development environment distribution among the 77 participating engineers.
</div>

## Quantitative results {#quantitative-results}

This is a summary of the main metrics we tracked:

- **Claude Code** showed the highest directional gains across measured metrics in this dataset, with the largest productivity boost (\~43% vs estimated time), higher completion rate (74%) and higher user rating (4.2).
- **Cursor** provided moderate, but meaningful gains (\~24%), solid completion rate (59%) but user sentiment (3.6) was not as good.
- **Github Copilot**, which was the tool most engineers had access to already (could be considered our control leg), shows small, almost negligible productivity gains (\~1%), lowest completion rate (44%) and lowest rating (2.8).

These results were relevant to our decision-making, and some were actually very different from our initial assumptions.

In the following table and violin plot we provide more information:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/ai-tooling-results-table.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Comparative results showing productivity percentages, completion rates, and user ratings for each AI tool.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/ai-tooling-violin-plot.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Statistical distribution of productivity results across the three AI coding assistants.
</div>

This distribution of the plot shows that, for many tasks, the productivity of Cursor and Claude Code are very high. It is however a set of tasks that drag the performance of Cursor down in comparison to Claude Code. We analyze this further in the discussion section.

Some additional results from the pilot were:

1. **_Refactoring_** **and _Code Migration_ were the tasks types where all tools seem to perform best. (**\~40% and 49% productivity respectively), while others like _Feature Development_ or _Bug Fixing_ did not perform so well. The exception is Claude Code, the only tool that showed increased productivity within _Feature Development_, the most commonly executed task (\~26% productivity and \~68% completion). This was expected: tasks with more dependencies like _Feature Development_ which usually depends on other teams or people besides the software engineer (e.g. to grant accesses, to validate certain steps, etc) or on external tools will be underestimated (optimism bias) while tasks where the engineer has more control, such as refactoring or migrations, engineers can work with high autonomy, making estimations less prone to biases.
2. **_Frontend_** **tasks seem to have the larger productivity boost on aggregate.** When we look at tool level, Claude seemed to perform well in _Backend_, _Frontend_ and _Android_ tasks, while Cursor and Github showed shortcomings in _Backend_ tasks.
3. **_Intermediate-level_** **users extract 11x more benefit than first-time.** Intermediate % productivity is \~47% while first time users is 4%. But that gap does not exist with Claude Code (this is covered later in this article).
4. **_Large_** **(\>3 days) and _medium_ (\>1) tasks got the most benefit** (\~30% and 24% productivity respectively)**, especially for Claude and Cursor**, vs. \~12% for _small_ tasks. This was contrary to our initial expectations.

## Qualitative results {#qualitative-results}

One important result from the focus groups and comments collected from the polls was about how well the tools integrated with the different IDE’s and workflows of the software engineers. In particular, according to many comments, the integration of Claude Code into Adevinta development workflow was easy, as it didn’t require changing or learning a new IDE. In contrast, to use Cursor, many engineers that were used to IntelliJ (63% of total) or XCode (16%) needed to learn about its usage, as Cursor is a fork of VSCode. Users found Github Copilot easier to start due to its availability as a plugin for both VSCode and IntelliJ.

Additionally, we observed the following:

- Some users of Claude Code mentioned that they were able to parallelize their work on two tasks simultaneously, potentially boosting productivity beyond initial test measurements.
- AI tooling allowed engineers to prioritize important but non-urgent maintenance tasks, the kind that are often deprioritized due to their complexity or perceived effort.
- During the focus group done after the pilot, engineers that had Github Copilot assigned mentioned that the productivity result of \~1% did not reflect their experience, and that the tool actually was very helpful for them. In several comments in the post survey they also mention that the tool is helpful, providing a very positive experience.
- Many users did not want to use Claude Code in the beginning, they were skeptical about the fact that it was only available via CLI without IDE integration, but then after using it they were pleased with the quality of the results.

# Discussion {#discussion}

## Why these results {#why-these-results}

Results seem to show that Claude Code outperforms other AI tools in many metrics: our productivity proxy metric, user experience and average AI completion rate. This outcome was unexpected for us, but further analysis revealed several factors that likely contributed to it:

### The default configuration of the tools and their pricing model {#the-default-configuration-of-the-tools-and-their-pricing-model}

At the time of the pilot (June 2025\) Cursor and Github Copilot had a flat rate close to 40$ per user and month, while Claude Code consumption model was a "pay as you go". Our 10 users with the highest consumption spent $202 in Claude Code during the month.

By default, Claude Code will select which model to use depending on the complexity of the task while for Cursor and Github Copilot selects the less powerful models by default. The user could change that and they sometimes did (for Cursor they were called _Max models_, which may incur extra cost after some usage), more so when they became more experienced with the tool.

We observed that the amount of tokens consumed by Claude Code on these models was 60 times larger than the other two tools, which also explains the highest performance.

### Preferred IDEs {#preferred-ides}

Over 50% of our engineers used IntelliJ and XCode, while Cursor is a fork of VSCode and Github Copilot, being a plugin, works for both IntelliJ and VSCode but not for XCode. Users needed to learn another IDE that they were not familiar with, which we believe also reduced their effectiveness during the pilot. This was commented by some engineers in the focus groups and the post-survey. This learning is something temporary, and we believed it also had some weight on the difference in productivity by level of experience with the AI tool.

# After the pilot {#after-the-pilot}

The pilot challenged our initial assumptions, and we adapted our marketplace’s strategy ([Mobile](https://www.mobile.de/), [Leboncoin](https://www.leboncoin.fr/), [Marktplaats](https://www.marktplaats.nl/), [Kleinanzeigen](https://www.kleinanzeigen.de/) and [Subito](https://www.subito.it/)). We plan to continue evaluating different tools with similar pilots as the one presented in this article, and evolve our approach accordingly.

Building the capability to independently and rapidly evaluate, first hand, emerging AI tooling and generate reliable, evidence based results is ultimately more valuable than identifying a short term winner. As the AI landscape evolves at high speed, with a significant noise-to-signal ratio and often unreliable public benchmarks, developing this internal evaluation muscle is a key long-term advantage.

Increasing the speed of our software engineers, however, requires more than just deploying a tool, that is why we are working on several other fronts: automated metrics, training, integrating the tool across the whole engineering workflow... We hope we can share results about this soon.

# Bibliography {#bibliography}

Kumar, S., Goel, D., Zimmermann, T., Houck, B., Ashok, B., & Bansal, C. (2025). Time Warp: The Gap Between Developers’ Ideal vs Actual Workweeks in an AI-Driven Era. arXiv preprint arXiv:2502.15287. Retrieved from [https://arxiv.org/abs/2502.15287](https://arxiv.org/abs/2502.15287)

Meyer, A. N., Barr, E. T., Bird, C., & Zimmermann, T. (2019). Today was a Good Day: The Daily Life of Software Developers. IEEE Transactions on Software Engineering. Microsoft Research preprint available at: [https://www.microsoft.com/en-us/research/wp-content/uploads/2019/04/devtime-preprint-TSE19.pdf](https://www.microsoft.com/en-us/research/wp-content/uploads/2019/04/devtime-preprint-TSE19.pdf)

IDC. (2024). How Do Software Developers Spend Their Time? IDC Report (as summarized in InfoWorld). [https://my.idc.com/getdoc.jsp?containerId=US53204725](https://my.idc.com/getdoc.jsp?containerId=US53204725)

Dell'Acqua, Fabrizio, Edward McFowland III, Ethan Mollick, Hila Lifshitz-Assaf, Katherine C. Kellogg, Saran Rajendran, Lisa Krayer, François Candelon, and Karim R. Lakhani. ["Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality."](https://www.hbs.edu/faculty/Pages/download.aspx?name=24-013.pdf) Harvard Business School Working Paper, No. 24-013, September 2023\.

# Appendices {#appendices}

## Appendix 1: Complete list of attributes in the task tracker and definitions {#appendix-1:-complete-list-of-attributes-in-the-task-tracker-and-definitions}

The following table represents the data that was consolidated in our task tracker. Some information was added before the task started and some it finished.

### Before the task started {#before-the-task-started}

| Field                                  | Definition                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Task ID**                            | Unique identifier from our issue tracking system                                                                                                                                                                                                                                                                                                                                     |
| **Task Description**                   | Brief, clear description of what the task involves                                                                                                                                                                                                                                                                                                                                   |
| **Engineer Name**                      | Name of the person accountable for the task                                                                                                                                                                                                                                                                                                                                          |
| **Experience with the AI Coding Tool** | Level of experience of the engineer accountable for the task, which will likely change after 1-2 weeks. _First time_ means the user is understanding how it works, with very little experience. _Intermediate_ means that the user understands and has used the main features, and is comfortable with them. _Expert_ is someone that can provide tips and best practices to others. |
| **AI Tool Used**                       | AI tool that was used for the task: _GitHub Copilot, Cursor, or Claude Code_. Note that teams (and hence engineers) were assigned to one of the tool during the whole period.                                                                                                                                                                                                        |
| **Task Type**                          | Type of task among the following categories: _Bug Fixing, Refactoring, Feature Development, Code Migration, Documentation, Tooling_ or _Other_                                                                                                                                                                                                                                       |
| **Task difficulty**                    | Indicate how challenging the task is: _Small, Medium_ or _Large_                                                                                                                                                                                                                                                                                                                     |
| **Area**                               | Specify which functional area the task is mostly about among the following options: _Backend, Frontend, Android, IOS, Infra, Fullstack_ and _Other_                                                                                                                                                                                                                                  |
| **Estimated Time Without AI (days)**   | Engineer estimation of the task cycle time without AI assistant, e.g. by comparing to similar tasks, using Three-Point-Estimation, or the experience of the engineer.                                                                                                                                                                                                                |
| **Estimated \# PR revisions**          | How many reviews the engineer expects the PR would typically require, e.g., tasks with low complexity would only require 1 review, whereas high complexity tasks may require several reviews.                                                                                                                                                                                        |
| **Confidence in estimate**             | How confident the engineer is in the time estimates. Values were _Low, Medium_ or _High._                                                                                                                                                                                                                                                                                            |

### After the task finished {#after-the-task-finished}

| Field                          | Definition                                                                                                                                                                                                      |
| :----------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actual Time with AI (days)** | Actual time taken to complete the task using the AI assistant in days                                                                                                                                           |
| **Actual \# PR revisions**     | How many revisions were actually needed before PR approval                                                                                                                                                      |
| **Task Outcome**               | Indicates if task was (1) _Completed, fully done by AI_, (2) _Completed, partially done with AI,_ (3) _Completed manually, AI not able to help,_ (4) _Not completed, due to external factors not related to AI_ |
| **Rate the help of AI tool**   | Rating of the usefulness of AI tooling for this task, from 1 being the lowest to 5                                                                                                                              |
| **Link to the Pull Request**   | Link to the Pull Request for the task                                                                                                                                                                           |
| **Optional comments**          | Any notable observations about the AI's performance or limitations for this task                                                                                                                                |

## Appendix 2: Sources of error in our productivity proxy metric and mitigation {#appendix-2:-sources-of-error-in-our-productivity-proxy-metric-and-mitigation}

Our method offers a pragmatic approach to measuring productivity gains from AI tooling. However, several sources of error could affect the validity of this metric. Below, we outline these potential biases and describe the steps taken to mitigate them.

### Estimation bias {#estimation-bias}

People often underestimate task durations ([planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy?utm_source=chatgpt.com)) either due to optimism bias or because estimates do not include unexpected eventualities that produce delays. This can inflate the apparent productivity gain when actual times are longer. Conversely, some estimates may be done conservatively, making the tool look less effective than it is.This effect can be mitigated by adding a control group.

In fact, as we had Github Copilot deployed already in the company before the pilot and adopted by 63% of the population, using a control group without SWE AI tooling would mean to actually stop it for some users of teams. Instead of that, we decided to take Github Copilot as part of the tooling to compare and one can consider this group as the control group.

### Noise from non-coding work {#noise-from-non-coding-work}

The "actual time" logged may include overhead unrelated to code writing (e.g. waiting for code reviews, access permissions, builds, or clarifications). These delays distort the metric since they are not influenced by the AI assistant.

At the same time, these delays are also included in the time estimations and the real time, which should reduce the effect of this factor.

### Task heterogeneity {#task-heterogeneity}

Different task types (e.g. bug-fixing vs. code refactoring) vary widely in predictability and in how much AI can help. Averaging them together risks masking the fact that tools may excel in one category but underperform in others.

We present the stratified results by task type and area in Appendix 4\. We observe that, for all tools, the most common task types are _Feature Development, Code Refactoring_ and _Bug Fixing._ We see that _Bug Fixing_ is actually less present in Claude Code, with only 2 tasks, which could possibly impact the result. We see however that _Bug Fixing_ had a positive impact in Cursor, increasing its metrics.

### Differences in team composition {#differences-in-team-composition}

Senior vs. junior developers estimate differently and use tools differently. Some may benefit more from AI (e.g. juniors for boilerplate, seniors for exploring alternatives). To reduce the effect of this factor, we assigned the tools by teams, which by design have a mix of roles and seniority.

### Weighting by task duration {#weighting-by-task-duration}

Weighting long tasks more heavily can skew the average. A single large task with an unusual length could dominate the results, even if smaller tasks consistently showed steady benefits.

In the following table we represent the same data after removing the 5% longest tasks (in their predicted time). All these tasks actually were from Cursor, had an average estimated duration of 7.6 days. We see how the results remain, directionally, in the same way as the original results.

| AI Tool Used   | % of productivity 95% confidence range | \# of tasks | Average AI Completion Rate | Average Rating | Average estimated time without AI (days) |
| :------------- | :------------------------------------: | :---------: | :------------------------: | :------------: | :--------------------------------------: |
| Claude Code    |              42.5 \- 44.5              |     44      |            74%             |      4.2       |                   1.3                    |
| Cursor         |              23.5 \- 24.6              |     59      |            60%             |      3.6       |                   1.4                    |
| GitHub Copilot |               0.5 \- 2.7               |     54      |            44%             |      2.8       |                   1.1                    |
| Grand Total    |              21.2 \- 21.5              |     157     |            58%             |      3.5       |                   1.3                    |

We also include the average estimated time without AI in days for each tool after removing the 5% longest task, and show that they are quite similar, with a variation of 0.3 days between the shortest (Github Copilot) and the longest (Cursor).
