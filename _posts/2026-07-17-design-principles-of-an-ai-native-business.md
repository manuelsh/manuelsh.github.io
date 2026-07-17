---
layout: distill
title: "Design principles of an AI-native business"
date: 2026-07-17 09:00:00
description: "A practical framework for designing coherent agentic systems, aimed to increase their effectiveness, governance and security"
categories: AI, generative AI, agents
giscus_comments: true
toc:
  - name: "The problem"
  - name: "Our circumstances: what AI-native really means"
    subsections:
      - name: "What changes in practice"
      - name: "Example: A software company"
  - name: "A set of principles for AI-native companies"
    subsections:
      - name: "Operating-model principles"
      - name: "Reliability principles"
  - name: "Other principles"
  - name: "Conclusion"
  - name: "References"
_styles: |
  d-article .post-date {
    display: block;
    margin-bottom: 1.25rem;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    font-weight: 300;
  }

  d-article h4 {
    text-transform: none;
    letter-spacing: 0;
    font-size: 1rem;
  }

  d-article .article-body {
    display: flow-root;
  }

  d-article .article-body > h1,
  d-article .article-body > h2,
  d-article .article-body > h3 {
    clear: both;
  }

  d-article blockquote.pull-quote {
    position: relative;
    width: auto;
    max-width: none;
    margin: 2rem 0;
    padding: 1.4rem 1.6rem 1.35rem 2.1rem;
    border-left: 4px solid var(--global-theme-color) !important;
    background: var(--global-code-bg-color);
    color: var(--global-text-color);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.45rem;
    font-style: normal;
    line-height: 1.45;
  }

  d-article blockquote.pull-quote::before {
    content: "“";
    position: absolute;
    top: -0.25rem;
    left: 0.45rem;
    color: var(--global-theme-color);
    font-size: 3rem;
    line-height: 1;
  }

  d-article blockquote.pull-quote p {
    margin: 0;
    color: inherit !important;
  }

  d-article .working-definition {
    clear: both;
    width: 100%;
    box-sizing: border-box;
    margin: 1.4rem 0 1.8rem;
    padding: 1rem 1.15rem 1.05rem;
    border: 1px solid var(--global-divider-color);
    border-left: 2px solid var(--global-theme-color);
    border-radius: 4px;
    background: var(--global-code-bg-color);
    background: color-mix(in srgb, var(--global-code-bg-color) 65%, transparent);
    color: var(--global-text-color);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  d-article .working-definition-label {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--global-text-color-light);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  d-article .working-definition p {
    margin: 0;
    color: inherit !important;
  }

  d-article .article-abstract {
    clear: both;
    width: 100%;
    box-sizing: border-box;
    margin: 0 0 2rem;
    padding: 1rem 1.15rem 1.05rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 4px;
    background: var(--global-code-bg-color);
    background: color-mix(in srgb, var(--global-code-bg-color) 40%, transparent);
    color: var(--global-text-color);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  d-article .article-abstract-label {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--global-text-color-light);
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  d-article .article-abstract p {
    margin: 0;
    color: inherit !important;
  }

  d-article #references + ul {
    padding-left: 1.2rem;
  }

  @media (min-width: 900px) {
    d-article blockquote.pull-quote {
      width: 44%;
      max-width: 20rem;
      margin-top: 0.45rem;
      margin-bottom: 1.5rem;
    }

    d-article blockquote.pull-quote.pull-left {
      float: left;
      margin-right: 2rem;
    }

    d-article blockquote.pull-quote.pull-right {
      float: right;
      margin-left: 2rem;
    }
  }

  @media (min-width: 1180px) {
    d-article blockquote.pull-quote.pull-left {
      margin-left: -4.5rem;
    }

    d-article blockquote.pull-quote.pull-right {
      margin-right: -4.5rem;
    }
  }

  @media (max-width: 899px) {
    d-article blockquote.pull-quote {
      padding: 1.25rem 1.1rem 1.2rem 1.7rem;
      font-size: 1.2rem;
    }
  }
---

<div class="article-body" markdown="1">

<span class="post-date">16th July 2026</span>

<section class="article-abstract" aria-label="Abstract">
  <span class="article-abstract-label">Abstract</span>
  <p>Becoming AI-native is not simply a matter of giving employees access to copilots or adding agents to existing workflows. It requires redesigning business processes, technology, governance, and organizational roles around what AI can execute reliably. Drawing on a real transformation project, this article proposes a practical set of principles for designing that operating model. These include establishing reliable context and ownership before deploying agents, making systems queryable, building continuous-improvement loops, measuring quality baselines, and earning autonomy through evals, human oversight, and production monitoring. The article also addresses security, the boundary between deterministic and agentic logic, and the need for canonical sources of truth. Together, these principles provide a starting point for building coherent AI-native systems while managing the organizational transformation required to make them useful, safe, and durable.</p>
</section>

# The problem

I am helping a financial-services company become “AI-native”. I cannot share the name of the company; but many of the design choices we are making are general enough to be useful elsewhere.

The natural temptation is to start by drawing the architecture: ingestion pipelines, databases, agent orchestration, evaluation systems, governance layers… However, before jumping into that we decided to agree on a set of principles that will guide the construction of the whole system.

There are well established [software engineering principles](https://www.computer.org/education/bodies-of-knowledge/software-engineering#overview), used across the industry for many years. There are also established [Machine Learning Operations principles](https://epub.uni-bayreuth.de/id/eprint/7577/1/Machine_Learning_Operations_MLOps_Overview_Definition_and_Architecture.pdf) to [build and scale AI systems](https://research.google/pubs/the-ml-test-score-a-rubric-for-ml-production-readiness-and-technical-debt-reduction/). All these principles remain essential. Agentic systems, however, introduce new design problems: model behavior, context, tools, and human oversight interact in ways those disciplines do not fully cover. [OpenAI](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) and [Anthropic](https://www.anthropic.com/engineering/building-effective-agents) offer some initial guides, but companies still need principles that connect agentic systems to business value, governance, and organizational change.

Principles bring best practices, add coherence, they help decide which components are more important, where complexity and investment is justified, and what risks are acceptable. This is especially important when the system is built and maintained by different teams. In essence, if principles are well aligned, they reduce entropy, add coherence and focus.

<blockquote class="pull-quote pull-left">
  <p>In essence, if principles are well aligned, they reduce entropy, add coherence and focus.</p>
</blockquote>

Principles should also be connected to the goal we are trying to achieve, either business goals, system stability, quality, safety, etc. In this article we focus on principles to build an AI-native company. These go beyond the agentic principles or pattern designs, and they need to address both the engineering and business side of the problem.

Principles presented here should be considered a starting point, I don’t intend to be dogmatic,specially in a nascent topic like AI agents. Principles should be adapted to the system and the circumstances around it, which can vary massively between companies and teams.

Finally, while this article focuses on system design, there is a second major workstream needed: organizational transformation. This includes change management, training, operating model, culture, leadership alignment… Both the engineering track and the organizational transformation track should be managed as one coordinated effort: neither succeeds alone. I hope to share some of my learnings about organizational transformation in AI in a future article.

# Our circumstances: what AI-native really means

The purpose of the project I am working on is to help transform a traditional business into an AI-native one. There are many definitions and interpretations of AI-native, but the one we will use is:

<div class="working-definition" role="note" aria-label="Working definition">
  <span class="working-definition-label">Working definition</span>
  <p>An <strong>AI-native company</strong> is a human-led, AI-operated organization in which every key business process is designed so that AI performs the greatest feasible share of its end-to-end execution.</p>
</div>

This usually implies the redesign of many processes that will now go through an AI layer. AI stops being only a tool (a copilot) and **gradually** becomes part of the company's operating model (an autopilot).

Why would a service business want to become AI-native? If done well, the AI agentic layers should drive measurable improvements in cost, quality or speed, or ideally, in all three (see [The AI-Native Services Playbook](https://www.emcap.com/thoughts/the-ai-native-services-playbook)). If these gains persist at scale, a service business may improve margins by reducing the human effort required per unit of output.

## What changes in practice

AI-native has significant implications for a business. Three things change in practice. First, the company needs to **identify which parts of its key processes AI can perform reliably** (navigate the [jagged frontier](https://www.oneusefulthing.org/p/the-shape-of-ai-jaggedness-bottlenecks)), and test the uncertain parts through feasibility [experiments](https://manuelsh.github.io/blog/2026/pragmatic-evaluation-ai-tooling/). Second, it needs a **technology stack** that provides the right context, tools, evaluation, and controls for those redesigned processes, addressed in this article. Third, it needs to **transform the organization** around them: bring employees in, train them, establish ownership and access controls, and measure both adoption and business outcomes.

Regarding the tech stack, AI-native implies building the following interacting components:

**(1) Context management layer:** mechanisms for capturing, governing and retrieving the information (structured and unstructured) that the agents need, including documents, meeting records, decisions, objectives, operational data…

**(2) Agentic system(s) that perform the company’s core work:** The company’s main processes will be redesigned around AI, drawing on the context layer. This will likely require distinct sets of systems for sales, marketing, customer service, production, and other functions, which need to be interconnected.

Additionally, there are two other components that can enhance the speed of the system transformation and of the company itself:

**(3) Feedback loop**: mechanisms for collecting evidence from evals, human review, and production outcomes, then using it to propose, test and approve improvements.

**(4) Ability to query**: The whole company should become more queryable, inside and across teams. This requires interfaces and access management for both agents and users.

Y Combinator also offers [useful guides](https://www.ycombinator.com/library/OX-the-playbook-for-building-an-ai-native-company) on becoming AI-native. I agree with its emphasis on rapid experimentation, although I would treat token consumption as an activity metric rather than evidence of business value.

## Example: A software company

Let’s imagine a company that produces and maintains software. “AI as a tool” would simply provide all developers with access to AI agents while leaving the development process unchanged. But AI as an operating system (an AI-native company) means redesigning the whole development process so that AI agents perform as much of the work as possible, with the level of human supervision depending on the risk involved and the proven reliability of the AI system.

For this to work, all relevant information needs to become useful context for the agents: the objectives of each team, roadmap, codebase and architecture, engineering principles, previous decisions, what has and has not worked… Based on this context, agents could suggest what to build next, prepare plans, create prototypes, implement approved changes, monitor the results, and feed what they learn back into the system. Anyone with the appropriate permissions should also be able to ask what a team is building, why a decision was made, what risks exist, or what is preventing a release.

The role of the employees would change. Product managers and engineers set objectives, make important trade-offs, approve high-risk decisions, and handle exceptions. A Product Manager could build and validate a prototype without waiting for an engineering team. Engineers could supervise several agents, review their architectural and implementation decisions, and improve the context, tools, and evaluations that determine the quality of their work. Some team rituals may also change: planning meetings, for example, could be prepared by AI. The whole development process with AI would be organized around one question: how do we reduce the distance between an identified need and a solution in production?

<blockquote class="pull-quote pull-right">
  <p>The transformation requires deliberate design, an experimentation mindset, and coordination across the company.</p>
</blockquote>

All of this requires architectural and process decisions that will not emerge simply from bottom-up adoption of AI tools. The transformation requires deliberate design, an experimentation mindset, and coordination across the company. Leadership needs to understand what is possible with AI, decide where AI can act autonomously and where human approval remains necessary, and transform the company so that it can execute this change. The principles in the next section make the main design decisions of that operating model explicit.

# A set of principles for AI-native companies

The principles below fall into two groups. The first are operating-model principles: establish context and ownership before agents, make the company queryable, and build a continuous-improvement loop. The second are reliability principles: measure a baseline, earn autonomy, secure the system, prefer deterministic logic where possible, and establish clear sources of truth.

## Operating-model principles

### Establish context and ownership before agents

#### Why this principle

The company’s agentic layer will be only as good as the context it has. A sophisticated agentic system built on incoherent context will only produce wrong answers. This is why the context layer must be treated as strategic

<blockquote class="pull-quote pull-left">
  <p>The company’s agentic layer will be only as good as the context it has.</p>
</blockquote>

#### What it implies in practice

The first step is to design proper ways of capturing, storing and retrieving context. This means answering questions such as:

- How do we capture and store the content of a meeting?

- How do we store company decisions?

- What about databases with client information?

- How do we give coherence to all of it?

Treating data (the context) as a first-class citizen is strategic, not only because data is an important company asset, but also because the subsequent agentic layer built on top of it will only perform if it has the right context.

It is also important to assign owners to each strategic data asset. I strongly recommend adopting the “data as a product” paradigm: treating data as something designed and maintained for specific consumers and use cases, with explicit ownership, documentation, quality, access controls... This makes the data more reliable and useful for both people and AI agents. This paradigm shift is not trivial in complex organizations with a lot of legacy. That is a matter for [another book](https://www.amazon.com/-/es/Team-Topologies-2nd-Organizing-Technology/dp/1966280009/).

On the data layer one should not become stuck with a company wide program before value is delivered. Do it iteratively, adding value at each step. Start each agentic workflow by establishing the minimum reliable context it needs, with explicit owners, quality expectations, and access controls. Then improve that context as the workflow reveals gaps.

I discuss data further in the “one single source of truth” principle.

### The whole system should be queryable

#### Why this principle

One key feature of an AI-native company is the ability to ask questions across organizational boundaries through agents. To make this trustworthy, answers should show where the information came from, when it was last updated, and where uncertainty or conflicting sources remain. This is critical because it brings clarity and speed.

<blockquote class="pull-quote pull-right">
  <p>One key feature of an AI-native company is the ability to ask questions across organizational boundaries through agents.</p>
</blockquote>

#### What it implies in practice

Every strategic data set (and by strategic I mean: start by the most valuable datasets) should have an owner, documented meaning and interfaces, access control policies, lineage, and measurable expectations for freshness, completeness, accuracy, and availability. Think about a data service level agreement. These measurements could be implemented in the form of evals. Its users, people or agents, should also know when those expectations are not being met.

Again, elements from the “data as a product” paradigm can help a lot here. Data catalogs, data interoperability software and data quality systems are some of the foundations needed.

On top of that, the company needs an agentic layer that can access the right data, speak to other agents, or connect to the right tools. This could be implemented through protocols such as [A2A](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/), through tools exposed via [MCP](https://modelcontextprotocol.io/docs/getting-started/intro), or through other implementation choices. The advice provided in the [OpenAI](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) practical agentic guide about setting up the tools and orchestrating the agents can be very useful.

### Build a continuous-improvement loop

#### Why this principle

An AI-native system should have a loop to improve itself. This is critical because agentic systems will not be perfect from the start, and their quality will depend on how well they learn from evals, human feedback, production behavior and changing business needs.

#### What it implies in practice

This usually requires three general capabilities, which should run parallel to each core agentic system:

1. **Feedback capture**: The system needs to capture and store the results of evals and feedback from humans in the loop.

1. **Improvement workflow**: Which turns captured feedback into proposed changes, for example through pull requests.

1. **Governance**: For review, approval, documentation and user communication.

One possible way to do this is to set up a daily or weekly loop that reviews the feedback, builds a PR, and has that PR reviewed and approved by the system owners and a power user.

My recommendation is to start implementing the feedback loop in smaller subsystems before scaling it to the rest of the system, starting with one where the added value is significant.

## Reliability principles

### Measure a quality baseline before automating a process

#### Why this principle

You will most probably use AI to enhance core processes. Before doing that, my recommendation is to understand the current quality level of the process.

<blockquote class="pull-quote pull-right">
  <p>We want to automate while maintaining or improving the current quality level.</p>
</blockquote>

By _quality level_, I mean a small scorecard that captures main metrics, such as outcome, cost, speed, safety… of the current process, including how these vary across relevant customer and case segments.

This is important, because we want to automate while maintaining or improving the current quality level.

#### What it implies in practice

In practice, this means starting by collecting current quality metrics, or building systems to measure them if they are not available, before automating a process.

AI can provide new ways of doing this. For example, imagine a clinic that wants to automate incoming calls using agents. Before automation, AI can transcribe the current service calls, and LLMs can help judge whether the caller question was resolved, if the answers provided comply with certain criteria, or even whether the emotion of both speakers suggests a good or bad interaction.

This gives the company a baseline against which the new AI-based process can be compared.

### Evals, human-in-the-loop and continuous monitoring come before autonomy

#### Why this principle

Once we have a quality baseline, we should evaluate the results of the new agentic workflows to ensure they are at the desired level.

Autonomy should be earned gradually, not granted to an agent as a whole. A system should not be allowed to take important actions by itself just because it performs well in a demo or in a few selected examples. The system should also lose autonomy when quality degrades or an incident occurs.

<blockquote class="pull-quote pull-left">
  <p>Autonomy should be earned gradually.</p>
</blockquote>

#### What it implies in practice

There are three main ways to do this: evals, human-in-the-loop, and production monitoring.

Evals are ways of measuring the quality of the output of the agentic system or its parts. For example, one can evaluate deterministically whether a document has a certain format or contains specific fields. We can also evaluate whether it contains certain topics or whether the style falls under defined specifications using AI, for example with a classification model or an LLM-as-a-judge.

We should also set error targets for these evals, and have systems that capture the errors and the corresponding inputs so they can serve as feedback loops.

Human-in-the-loop is a common design pattern in agentic systems where a human needs to provide input before the system continues. It is commonly used in critical systems when it is hard to evaluate the quality of the output systematically, or when the team does not trust the system yet.

An example could be an AI agent that writes messages to customers on behalf of a person. That person will most likely want to review the messages, at least until there is enough evidence that the quality is high enough.

As with evals, one should always build a system to capture the feedback given. Did the human accept the proposal? If not, capture the output of the agent, the output of the human after modifications, and, if possible, brief feedback from the human explaining what was wrong.

<blockquote class="pull-quote pull-right">
  <p>Quality should be continuously observed and improved, not only before launch.</p>
</blockquote>

Production monitoring complements evals and human review once the system is running. Some failures only appear in real usage: unexpected inputs, changes in user behavior, tool failures, latency issues, cost increases, or quality degradation over time.

For this reason, agentic workflows should be monitored with both technical and business metrics, such as success rate, escalation rate, user satisfaction, cost per task, latency, or downstream business impact.

Quality should be continuously observed and improved, not only before launch.

### Security: avoid the lethal trifecta

#### Why this principle

The [lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), a term coined by Simon Willison, occurs when an agentic system can:

1. Access private data, such as passwords or confidential information.

2. Use tools that expose agents to untrusted content, such as emails or webpages.

3. Send information externally, for example via email or by publishing on a social network.

LLMs follow written instructions. If these instructions are placed in content that is processed by LLMs (such as text in an image, hidden text on a website, or instructions embedded in an email) the model may follow those instructions and exfiltrate confidential information, if it has access to both the information and a way to send it out.

This can happen whenever an agent reads your email, summarizes a website, or processes an image, video or audio file.

#### What it implies in practice

Security must be part of the architecture from the beginning, not something added at the end. Some possible architectural implications are:

<blockquote class="pull-quote pull-left">
  <p>Security must be part of the architecture from the beginning, not something added at the end.</p>
</blockquote>

- agents should have the minimum access required for their task;

- sensitive data access should be separated from untrusted content processing when possible;

- external actions should be constrained, reviewed or audited;

- critical operations should require human approval;

- tools should be designed so that untrusted content cannot easily control privileged actions;

- prompt injection should be treated as a design problem, not only as a model behavior problem.

I summarized some useful design patterns [in this article](https://manuelsh.github.io/blog/2026/summary-design-patterns-secure-ai-agents/).

### Prioritize deterministic logic versus agentic judgement

#### Why this principle

When building AI systems, one can give AI agents tasks that could be done by deterministic logic, that is, by a simple algorithm. For tasks with explicit rules, using an LLM usually increases cost and latency, reduces predictability, and makes testing harder because outputs are probabilistic and may vary across runs or model versions.

Not every task needs an LLM.

#### What it implies in practice

A good architecture should make the boundary between deterministic logic and agentic judgement explicit.

Deterministic logic should be used for things such as permissions, schema validation, numerical calculations, mandatory fields, basic eligibility rules, and other cases where ordinary code is cheaper, faster and easier to test.

LLMs and agents are most useful when the task contains ambiguity: interpreting documents, identifying weak signals, comparing strategic fit, summarizing evidence, or proposing a course of action.

For example, if we want to build a system that recommends a small set of options to every user, it may be tempting to take an LLM, provide some data about the user and the available options, and prompt it to recommend the best one.

As a first version, this may work. But it will suffer from speed, cost, unpredictability and lack of control. A better option may be to design a useful heuristic, use an AI model to infer user characteristics, or train a smaller machine learning model. There is a whole world beyond LLMs.

### Enforce a single source of truth for each type of information

#### Why this principle

When building with AI, generating content becomes very easy. If one is careless, system documentation can quickly become duplicated.

Even in a single repository, agents may generate files like README.md, AGENTS.md or CONTRIBUTING.md, all containing information about the repository. If you do not have clear guidelines for what information goes into which file, or if you do not establish a principle of a single source of truth, duplication will appear. Over time, duplicated information may become incoherent and cause long-term problems, because it will be the wrong context for both humans and agents.

<blockquote class="pull-quote pull-right">
  <p>Over time, duplicated information may become incoherent and cause long-term problems, because it will be the wrong context for both humans and agents.</p>
</blockquote>

#### What it implies in practice

For every important type of information, there should be a defined canonical location.

This applies not only to software development, but also to running the company. Company decisions, data definitions, business rules, documentation, architectural choices, and operational procedures should have clear places where the authoritative version lives.

Derived representations may exist, but the system should know where the source of truth is, how it is refreshed, and who owns it.

As part of the self-improvement loops, an architectural decision could be to have agents that review whether information is duplicated and, when they find duplicated or contradictory information, actively recommend the necessary changes.

# Other principles

These AI-native principles complement established engineering and MLOps practices. Also, there are many other agentic best practices in the materials (referenced before, from [OpenAI](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) and [Anthropic](https://www.anthropic.com/engineering/building-effective-agents)) which should be part of the building principles. They address very relevant topics such as model selection, tools, guardrails, agent orchestration, etc. and are essential. They also give a very important recommendation: start small, validate with real users, and grow capabilities over time, including the right foundations.

# Conclusion

<blockquote class="pull-quote pull-left">
  <p>Success in these types of projects relies on having the capacity to transform your company.</p>
</blockquote>

An AI-native company requires the coexistence of several layers: the context layer (based on data), the self-improvement loop layer (agentic), the queryable layer (agentic), and on top of that the layer of agents that performs the business activities. Without a deliberate design and governance, this coexistence may not be “peaceful”, and there is a risk that more harm than good is done.

In fact, new agentic layers are being built in many companies. One must acknowledge that this is a learning path, and what works today may not work even in six months. So we shouldn’t be dogmatic about principles or design, and even less about specific tools, but let’s have a starting point that we can iterate from.

Finally, system design is only one part of becoming AI-native. The other is organizational transformation: aligning leadership, roles, incentives, skills, governance, and ways of working so the technology can produce durable value. The central lesson is that the engineering and transformation tracks must be designed together, because neither succeeds alone.

# References

- Bek, J. (2026, March 5). _Services: The new software_. Sequoia Capital. [https://sequoiacap.com/article/services-the-new-software/](https://sequoiacap.com/article/services-the-new-software/)

- Beurer-Kellner, L., Buesser, B., Creţu, A.-M., Debenedetti, E., Dobos, D., Fabian, D., Fischer, M., Froelicher, D., Grosse, K., Naeff, D., Ozoani, E., Paverd, A., Tramèr, F., & Volhejn, V. (2025). _Design patterns for securing LLM agents against prompt injections_ [Preprint]. arXiv. [https://doi.org/10.48550/arXiv.2506.08837](https://doi.org/10.48550/arXiv.2506.08837)

- Breck, E., Cai, S., Nielsen, E., Salib, M., & Sculley, D. (2017). The ML test score: A rubric for ML production readiness and technical debt reduction. In _2017 IEEE International Conference on Big Data (Big Data)_ (pp. 1123–1132). IEEE. [https://doi.org/10.1109/BigData.2017.8258038](https://doi.org/10.1109/BigData.2017.8258038)

- Debenedetti, E., Shumailov, I., Fan, T., Hayes, J., Carlini, N., Fabian, D., Kern, C., Shi, C., Terzis, A., & Tramèr, F. (2025). _Defeating prompt injections by design_ [Preprint]. arXiv. [https://doi.org/10.48550/arXiv.2503.18813](https://doi.org/10.48550/arXiv.2503.18813)

- Dehghani, Z. (2020, December 3). _Data mesh principles and logical architecture_. MartinFowler.com. [https://martinfowler.com/articles/data-mesh-principles.html](https://martinfowler.com/articles/data-mesh-principles.html)

- Hu, D. (2026, April 24). _The playbook for building an AI native company_ [Video]. Y Combinator. [https://www.ycombinator.com/library/OX-the-playbook-for-building-an-ai-native-company](https://www.ycombinator.com/library/OX-the-playbook-for-building-an-ai-native-company)

- IEEE Computer Society. (n.d.). _Software Engineering Body of Knowledge (SWEBOK)_. [https://www.computer.org/education/bodies-of-knowledge/software-engineering](https://www.computer.org/education/bodies-of-knowledge/software-engineering)

- Kreuzberger, D., Kühl, N., & Hirschl, S. (2023). Machine learning operations (MLOps): Overview, definition, and architecture. _IEEE Access, 11_, 31866–31879. [https://doi.org/10.1109/ACCESS.2023.3262138](https://doi.org/10.1109/ACCESS.2023.3262138)

- Metzeler, F., Krawina, M., Jenkins, P., & Hillenbrand, P. (2026, June 11). _The seven operating truths of AI-native companies_. McKinsey & Company. [https://www.mckinsey.com/capabilities/business-building/our-insights/the-seven-operating-truths-of-ai-native-companies](https://www.mckinsey.com/capabilities/business-building/our-insights/the-seven-operating-truths-of-ai-native-companies)

- Microsoft. (2025, April 23). _2025: The year the Frontier Firm is born_. [https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born](https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born)

- Model Context Protocol. (n.d.). _What is the Model Context Protocol (MCP)?_ Retrieved July 15, 2026, from [https://modelcontextprotocol.io/docs/getting-started/intro](https://modelcontextprotocol.io/docs/getting-started/intro)

- Mollick, Ethan. (2025, Dec 20). _The Shape of AI: Jaggedness, Bottlenecks and Salients_. [https://www.oneusefulthing.org/p/the-shape-of-ai-jaggedness-bottlenecks](https://www.oneusefulthing.org/p/the-shape-of-ai-jaggedness-bottlenecks)

- OpenAI. (n.d.). _A practical guide to building agents_. [https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)

- Sánchez Hernández, M. (2026, June 21). _A summary of design patterns to secure AI agents_. [https://manuelsh.github.io/blog/2026/summary-design-patterns-secure-ai-agents/](https://manuelsh.github.io/blog/2026/summary-design-patterns-secure-ai-agents/)

- Sánchez Hernández, M. (2026, March 9). _A Pragmatic Evaluation of Software Engineering AI Tooling_. [https://manuelsh.github.io/blog/2026/pragmatic-evaluation-ai-tooling/](https://manuelsh.github.io/blog/2026/pragmatic-evaluation-ai-tooling/)

- Saper, J., Siniscalco, L., Nahar, R., Sial, K., & The Emergence Team. (2026, March 30). _The AI-native services playbook_. Emergence Capital. [https://www.emcap.com/thoughts/the-ai-native-services-playbook](https://www.emcap.com/thoughts/the-ai-native-services-playbook)

- Schluntz, E., & Zhang, B. (2024, December 19). _Building effective agents_. Anthropic. [https://www.anthropic.com/engineering/building-effective-agents](https://www.anthropic.com/engineering/building-effective-agents)

- Skelton, M., & Pais, M. (2025). _Team topologies: Organizing business and technology for fast flow of value_ (2nd ed.). IT Revolution. [https://itrevolution.com/product/team-topologies-second-edition/](https://itrevolution.com/product/team-topologies-second-edition/)

- Surapaneni, R., Jha, M., Vakoc, M., & Segal, T. (2025, April 9). _Announcing the Agent2Agent Protocol (A2A)_. Google Developers Blog. [https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)

- Tabassi, E. (2023). _Artificial intelligence risk management framework (AI RMF 1.0)_ (NIST AI 100-1). National Institute of Standards and Technology. [https://doi.org/10.6028/NIST.AI.100-1](https://doi.org/10.6028/NIST.AI.100-1)

- Willison, S. (2025, June 16). _The lethal trifecta for AI agents: Private data, untrusted content, and external communication_. Simon Willison’s Weblog. [https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)

</div>
