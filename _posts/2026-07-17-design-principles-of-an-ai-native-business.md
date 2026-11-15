---
layout: distill
title: "Design principles of an AI-native business"
date: 2026-07-17 09:00:00
description: "A practical framework for designing coherent agentic systems, aimed to increase their effectiveness, governance and security"
categories: AI, generative AI, agents
giscus_comments: true
toc:
  - name: "The problem"
  - name: "What AI-native means"
    subsections:
      - name: "Buying or building a harness"
      - name: "A playbook for change"
  - name: "A set of principles for AI-native companies"
    subsections:
      - name: "Operating-model principles"
      - name: "Reliability principles"
  - name: "Other principles"
  - name: "Case study: a software company"
  - name: "Conclusion"
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

  d-article .principles-table {
    clear: both;
    margin: 0.85rem 0 2.25rem;
  }

  d-article .principles-table table {
    margin: 0;
  }

  @media (max-width: 640px) {
    d-article .principles-table table,
    d-article .principles-table tbody,
    d-article .principles-table tr,
    d-article .principles-table td {
      display: block;
      width: 100%;
    }

    d-article .principles-table thead {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
      border: 0;
    }

    d-article .principles-table tr {
      padding: 0.9rem 0 1rem;
      border-top: 1px solid var(--global-divider-color);
    }

    d-article .principles-table tbody tr:last-child {
      border-bottom: 1px solid var(--global-divider-color);
    }

    d-article .principles-table td {
      padding: 0.15rem 0;
      border: 0;
    }

    d-article .principles-table td:first-child {
      color: var(--global-text-color-light);
      font-size: 0.76rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    d-article .principles-table td:nth-child(2) {
      margin: 0.15rem 0 0.3rem;
      font-size: 1.02rem;
      line-height: 1.4;
    }

    d-article .principles-table td:nth-child(3) {
      line-height: 1.55;
    }
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
  <p>Becoming AI-native requires redesigning business processes, technology, governance, and organizational roles around what AI can execute reliably. Drawing on a real transformation project, this article proposes a practical set of principles for designing that operating model. These include establishing reliable context and ownership before deploying agents, making systems queryable, building continuous-improvement loops, measuring quality baselines, and earning autonomy through evals, human oversight, and production monitoring. The article also addresses security, the boundary between deterministic and agentic logic, and the need for canonical sources of truth. Together, these principles provide a starting point for building coherent AI-native systems while managing the organizational transformation required to make them useful, safe, and durable.</p>
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

# What AI-native means

How do we transform an organization to be AI-native?

There are many interpretations of AI-native. The definition we will use is:

<div class="working-definition" role="note" aria-label="Working definition">
  <span class="working-definition-label">Working definition</span>
  <p>An <strong>AI-native company</strong> is an organization in which every key business process is designed so that AI performs the greatest feasible share of its end-to-end execution, while maintaining or improving the process’ performance.</p>
</div>

This usually implies redesigning processes that will now operate through AI, which becomes more than a tool or a copilot; AI is an integral part of the operating model, an autopilot.

If done properly, its agentic layers should improve quality, cost and speed. If done at scale, a business may improve margins by becoming more productive ([Saper et al.](https://www.emcap.com/thoughts/the-ai-native-services-playbook)).

The idea is to automate with AI where it increases the value of the company, not everywhere for its own sake.

The organization remains human-led: people establish objectives, manage exceptions, and decide which actions can be performed autonomously. As discussed later, autonomy should be granted to AI gradually.

This transformation relies on reliable data (context) for each use case, and requires two connected workstreams:

1. The design of business processes and the technical system around them.

2. The organizational transformation, which affects employees and is required to align the whole company in ways of working.

Both workstreams need to progress together to succeed in the transformation.

This article focuses on the first workstream: what should be built and how, using design principles applied in practice. Organizational transformation also requires a combination of bottom-up and top-down actions.

## Buying or building a harness

An agent harness is the application that runs an agent, using an LLM as the “intelligence engine”. Becoming AI-native does not necessarily mean building an agent harness from scratch. For a small company, an existing one such as Claude Cowork or ChatGPT Work may be enough, provided it can access the right context and tools the company needs in a secure way. The starting point should be the business process.

Buying or building is not always a binary decision. A company can adapt an existing harness to its own processes. For example, Claude Cowork can be [customized with skills, connectors and plugins](https://academy.claude.com/tutorials/how-to-customize-plugins-in-cowork) that capture a team's workflows. This extends the existing product rather than requiring the company to build its own application.

A dedicated harness becomes useful when the process requires more control. For example, an agent approving a customer refund requires tighter controls than an agent researching an internal question. Building the harness requires specialized knowledge and more maintenance but allows better control over the verification of task completion, performance, cost and security, including the possibility of having self-improvement loops, which third-party harnesses usually do not include.

If building is the best option, there are many open-source tools available, free to use. For example, the [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) provides the tools, agent loop and context management used by Claude Code. OpenAI, Google ADK or LangGraph are other examples.

## A playbook for change

Becoming AI-native has significant implications for a business. In practice, it implies three changes:

First, the company needs to identify which parts of its key processes can be performed reliably by AI. The frontier of what AI can do is expanding fast, but it is [jagged](https://doi.org/10.1287/orsc.2025.21838): a model may perform a complex task well and fail at another that appears very similar or even simpler. Hence, leaders cannot trust external generic benchmarks and should perform tests first-hand.

Second, the company needs a technology foundation that provides the data, access to tools and evaluations required by the redesigned processes.

Third, it needs to transform the organization around those processes: involve employees, develop or find the required talent, establish ownership, and measure both adoption and business outcomes.

From a system perspective, the proposed framework requires four capabilities:

1. Context management system. This includes mechanisms for capturing, governing, and retrieving the information that agents need: operational data, documents, meeting records, decisions…

2. Core Agentic System for performing the company’s main work. The main processes are redesigned with AI using the context layer. A company will probably need different but interconnected systems for every domain (sales, marketing, customer service…) rather than one universal agent.

3. A feedback system. The system collects data from evaluations, human reviews and business outcomes, and uses this data to propose improvements to the core agentic system described above.

4. Query system. AI agents provide the ability to query the organization across teams. This system allows senior management to directly monitor the whole organization. This requires interfaces and access management for both people and agents.

Data platforms, [Data Mesh](https://martinfowler.com/articles/data-mesh-principles.html) and enablement teams can accelerate this transformation, especially for large and complex organizations.

# A set of principles for AI-native companies

In this section we describe a set of principles to develop these capabilities. These principles are grounded in real experience. They fall into two groups: operating-model principles, which develop these capabilities, and reliability principles, which make the system more robust.

These are especially important when AI agents can access critical company systems, when an error can become critical, or when user and data privacy cannot be compromised.

**Principles at a glance**

<div class="principles-table" markdown="1">

| Principle                                                                   | Summary                                                                                                                              |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Establish strong context and ownership before building agents**                           | Start each workflow with reliable context, explicit owners, quality expectations, and appropriate access controls.                   |
| **Make the whole system queryable**                                    | Enable people and agents to ask questions across organizational boundaries, with clear permissions.                                  |
| **Build a continuous-improvement loop**                                     | Capture eval results, human feedback, and production outcomes, then turn them into reviewable system improvements.                   |
| **Measure a quality baseline before automating a process**                  | Establish outcome, cost, speed, and quality metrics for the current process so automation can be evaluated against real performance. |
| **Put evals, human oversight, and monitoring before giving autonomy** | Grant autonomy gradually, based on evidence, and reduce it when quality degrades or incidents occur.                                 |
| **Security: avoid the lethal trifecta**                                     | Use least privilege, isolate untrusted content, constrain external actions, and require approval for critical operations.            |
| **Prefer deterministic logic where possible**                 | Use conventional code for predictable rules and reserve agents for tasks that genuinely require interpretation or judgement.         |
| **Enforce a single source of truth**           | Define a canonical, owned, and maintained source for each important type of information to prevent duplication and contradictions.   |

</div>

## Operating-model principles

### Establish strong context and ownership before building agents

#### Why this principle

The company’s AI agents will be as good as the context they have. A sophisticated agentic system built on incoherent context will produce incorrect answers. Garbage in, garbage out. The context layer must therefore be prioritized.

#### What it implies in practice

The first step is to design appropriate ways of capturing, storing, and retrieving context, such as the content of meetings, decisions, customer data, etc. This requires governance about where these assets live, for example, where company-wide decisions are stored. Many software companies use architecture decision records (ADRs), which document a decision, the context in which it was made, and its consequences.

#### LLM-maintained wikis

A problem in many organizations and teams is that information is fragmented and spread among documents, emails, tickets, code, etc. This makes it hard to convert into context that can be useful for agents.

One way to tackle this problem is to use AI agents to put order in that mess. The idea is to give access to the raw documentation to an AI agent, e.g. emails, folders, tickets, meeting notes, etc and instruct the agent to build a wiki on a topic, e.g. the sales team, a specific project, or even a person.

An [LLM-maintained wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f), or an LLM-wiki, is a collection of linked pages that agents help keep up to date, to be used as context by other agents later. Using the wiki format, the agent will compile the information, ask questions when there is conflicting information, and keep the wiki updated when new information arrives. For example, after a meeting, an agent could update the relevant project page, including new decisions. During this process the raw documents remain untouched.

The wiki has an index to help people and agents find the pages, while links connect related topics across wiki pages. Instructions define what belongs where and how updates should be reviewed.

It is equally important to assign owners to each strategic data asset. The data-as-a-product paradigm is particularly useful here. Data should be explicitly designed and maintained for specific consumers and use cases, with clear ownership, documentation, quality expectations, access controls, and lifecycle management. This makes it more reliable and useful for both employees and AI agents.

As discussed before, this paradigm shift is not trivial in complex organizations with substantial legacy systems and information. However, a company should not become stuck in a company-wide data programme before delivering any value. The implementation should be iterative. Start each agentic workflow by establishing the minimum reliable context. Then improve that context as the workflow reveals missing or wrong information.

### Build a continuous-improvement loop

#### Why this principle

Agentic systems will not be perfect from the start. Their quality depends on how well they learn from evals, human feedback, production behaviour, and changing business needs. Adding a feedback loop allows the system to improve.

#### What it implies in practice

This usually requires two capabilities running alongside each Core Agentic System:

1. Feedback capture. The system captures and stores evaluation results, agent traces, human feedback such as corrections and accepted or rejected recommendations, tool failures, and production outcomes.

2. An improvement workflow. The evidence can be interpreted by an AI system that proposes changes to the Core Agentic System. These may affect many parts of the system, such as its architecture, context, prompts, etc. These changes, which can be in the form of code to be integrated in production (e.g. a pull request), should be reviewed by a human and deployed. Changes should include documentation updates and communication to users on the improvements made, especially if the user will need to adjust to the workflow.

The loop should initially be implemented in a smaller subsystem where the potential value is significant. Once the company understands how to run the whole feedback loop, the mechanism can be extended to other systems.

### Make the whole system queryable

#### Why this principle

One key feature of an AI-native company is the ability to ask questions across organizational boundaries through agents. This can bring significant clarity and speed to senior management.

To make the answers trustworthy, the system should indicate where the information came from, when it was last updated, and where there is uncertainty or where sources conflict.

#### What it implies in practice

The foundation is the first principle: the quality of the context and the data foundations.

Data catalogues accessible to agents, defined interfaces for retrieving information and communicating with other agents (such as [MCP](https://modelcontextprotocol.io/docs/getting-started/intro) and [A2A](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)), and ways to organize and retrieve unstructured information, such as RAG and the LLM-maintained wikis explained earlier, become very relevant.

#### RAG, embeddings and vector databases

[Retrieval-augmented generation (RAG)](https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html) is a way to give an LLM relevant information as context to answer a question. Instead of relying only on what the model learned during training, using the question of the user, the system searches an external collection of documents, and includes selected passages in the model’s context. The model then uses those passages to give its answer.

A common implementation of a RAG system first divides documents into smaller pieces, called chunks. An AI model converts each chunk into a numeric vector, which encodes aspects of its meaning, called an embedding. The vectors are stored in a searchable index, a vector database, with links to the original text. When a user asks a question, the system first creates an embedding of that question and searches for nearby vectors stored in the embedding database. The corresponding chunks are retrieved and supplied to the LLM.

For example, an employee could ask about the company’s travel policy. The system retrieves the relevant policy passages and gives them to the model so that it can answer and cite the source.

A RAG system can solve a similar problem to that addressed by the LLM wiki, i.e. to provide meaningful context to the LLM. However, it does it by storing and indexing the raw information; it does not process it to get meaningful information.

Agentic queryability is therefore the result of having reliable context, interoperability and permissions.

## Reliability principles

### Measure a quality baseline before automating a process

#### Why this principle

The objective of an AI-first approach is to automate while improving or maintaining the process performance. We don’t want it to deteriorate. Hence, we need to measure a baseline before automating.

#### What it implies in practice

By performance levels, in practice, we mean a scorecard containing the main dimensions of the workflow: outcome, cost, speed, quality… It should also show how performance varies across important customers and segments, because a single average can hide failures.

The company should collect the current performance metrics. To do so, the data principles become very relevant once more, as without them building a simple dashboard can be ineffective.

AI can provide new relevant metrics that were not possible to collect before. Imagine a clinic that wants to automate incoming calls using agents. Before introducing the new system, AI could transcribe existing service calls. AI-based evaluations could help determine whether the caller’s question was resolved, whether the answers complied with the required criteria, and whether the interaction showed signs of customer frustration.

This gives the company a baseline against which the new AI-based process can be compared. It also prevents an automated workflow from being declared successful when in fact it is reducing the service quality.

### Put evals, human oversight, and monitoring before giving autonomy

#### Why this principle

Core Agentic Systems must be reliable. Hence, they need to be monitored as they are gradually given autonomy, to ensure that their results reach the required level.

#### What it implies in practice

Autonomy should be earned gradually. A system should not be allowed to perform important actions because it works well in a controlled demonstration or in a few selected examples.

The system should also lose autonomy when quality deteriorates or an incident occurs.

There are three main mechanisms: evals, human-in-the-loop, and production monitoring.

Some aspects can be evaluated deterministically, such as whether a document follows a required format or contains mandatory fields. Other aspects can be evaluated with AI, for example whether the content covers the required topics or follows a defined style.

Human-in-the-loop is a common agentic pattern in which a person must provide input or approval before the system continues. It is useful when the consequences are material, when quality is difficult to measure systematically, or when there is not yet enough evidence to trust the system.

An agent that writes messages to customers, for example, may initially require the employee responsible for the relationship to review each message. The system should record whether the proposal was accepted. If it was modified, it should capture both the original output and the final human version and, where possible, a short explanation of what was wrong, to be used by the continuous-improvement workflow.

Production monitoring (observability) complements evals and human review once the system is operating. Some failures appear only in real usage: unexpected inputs, changes in user behaviour, tool failures. Hence, when the system is built, production metrics should be made available, together with an incident management system when there is an issue.

#### Incident management systems

An Incident Management System (IMS) helps organizations detect, coordinate, and resolve unexpected disruptions to their services. Incidents may include a website outage, a payment system failure, or a sudden degradation in performance.

An IMS coordinates the entire incident lifecycle: detecting problems, alerting engineers, assessing their severity, and tracking the resolution. Once the service is restored, it supports post-incident analysis to understand what went wrong and prevent similar failures.

Modern IMS platforms integrate with monitoring tools, communication channels, and engineering workflows. Increasingly, AI agents can help investigate incidents and even execute remediation procedures.

Agentic workflows should therefore be monitored through technical and business metrics such as success rate, user satisfaction, cost per task, latency, and downstream business impact.

Quality should be continuously observed and improved during the life of the system.

### Security: avoid the lethal trifecta

#### Why this principle

The [lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/), a term coined by Simon Willison, occurs when an agentic system can simultaneously:

1. Access private data, such as passwords or confidential information.

2. Process untrusted content, such as emails or webpages.

3. Send information externally, for example through email or a social network.

LLMs follow written instructions. If malicious instructions are embedded in content processed by the model, such as hidden text on a website, instructions inside an email, or even text contained in an image, the model may follow them.

If the agent also has access to confidential information and a mechanism for external communication, those instructions may cause it to disclose sensitive data. This can happen when an agent reads email, summarizes a website, or processes an image, video, or audio file.

#### What it implies in practice

Security must be part of the architecture from the beginning. Some of its architectural implications are:

- Agents should have the minimum access required for their task.

- Access to sensitive data should be separated from the processing of untrusted content where possible.

- External actions should be constrained or reviewed.

- Critical operations should require human approval.

- Tools should be designed so that untrusted content cannot easily control privileged actions.

In essence, prompt injection should be treated as an architectural problem, not only as a model-behaviour problem. I discuss related [design patterns for securing AI agents](https://manuelsh.github.io/blog/2026/summary-design-patterns-secure-ai-agents/).

### Prefer deterministic logic where possible

#### Why this principle

AI agents can be given tasks that could also be performed through deterministic logic, i.e. by explicit rules with conventional software.

For tasks with clear rules, using an LLM generally increases cost and latency, reduces predictability, and in consequence makes testing harder. Outputs may vary between runs or change when the underlying model is updated.

#### What it implies in practice

A good architecture should make the boundary between deterministic logic and agentic judgement explicit.

Deterministic logic should normally be used for permissions, schema validation, numerical calculations, mandatory fields, stable eligibility rules, and other cases in which ordinary code is cheaper, faster, and easier to test.

LLMs and agents are most useful when the task contains ambiguity: interpreting documents, identifying signals, comparing evidence, assessing strategic fit, summarizing information, or proposing a course of action.

For example, a system that recommends a small set of options to a user could send all the available information to an LLM and ask it to choose. This may work as a first prototype, but it may suffer from latency, cost and unpredictability.

A better production solution could use some heuristic, or even a machine learning model that infers relevant user characteristics to decide what to recommend. Since LLMs became mainstream, it seems that the community forgot that AI is much more than LLMs.

An AI-native process should use the simplest mechanism.

### Enforce a single source of truth

#### Why this principle

Generative AI makes producing documentation and other content very easy. If not controlled, it can duplicate that content in several places.

Over time, duplicated information may become inconsistent, hence incorrect context for both people and agents.

#### What it implies in practice

Governance becomes paramount. Every important type of information should have a defined canonical location and owner.

This applies not only to software development but also to running the company. Decisions, data definitions, business rules, documentation, and policies should have clear places where their versions live.

Derived representations of these documents may exist, but the system should know where the source of truth is and who owns it. Their provenance, derivation, refresh, and version history should be recorded explicitly.

As a cleaning exercise, the continuous-improvement loop described before could also include agents that look for duplicated or contradictory information and recommend the necessary changes.

# Other principles

These principles complement established software-engineering, data, MLOps, and agent-design practices.

Other principles remain essential: model selection, tool design, guardrails, orchestration, observability, testing, and the management of cost and latency. The practical agent guides published by [OpenAI](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf) and [Anthropic](https://www.anthropic.com/engineering/building-effective-agents) provide useful recommendations in these areas.

One of their most important recommendations is to start small, validate the system with real users, and expand its capabilities over time. The necessary foundations should grow with the use cases, always connected to value creation.

The objective is to improve a business outcome rather than maximize the usage of AI. If a simpler technology produces a better result, the company should use it.

# Case study: a software company

Consider a company that produces and maintains software. That could range from a SaaS company to a digital consulting firm, or even an e-commerce business, where software is still a core part.

Most probably, in such companies software developers already have access to tools that help them write code, such as Claude Code or OpenAI Codex. However, at this stage the additional productivity remains at the individual level, and its impact on the business is probably small. For real impact one needs to “level up” from the individual and think at workflow or team level.

Following our playbook, we would first identify the workflows where automation could bring the most value. In my experience, three workflows are particularly relevant:

1. From product idea to requirements. How does a business need become something a team can build? A product manager could use agents to investigate the problem, prepare requirements and even build a prototype. The output of this step could be a Product Requirements Document, which would make the handover from business to developers clearer.

2. From requirements to production. Agents could turn requirements into an implementation plan (e.g. using requirement driven development). Once the plan is approved by an engineer, the code and tests will be implemented, and prepared for review before going to production. Automated checks can verify requirements, while humans could review depending on “blast radius”, i.e. based on the potential damage to the whole systems in case of an incident, or delegate to an AI agent and read the review.

3. Production monitoring. This workflow covers the monitoring in production and the incident management system. The AI agent will proactively monitor the production system, prepare security and version updates when needed, and when there is an incident, try to find the root cause to help the engineer. In fact, this is a continuous feedback loop agent as described earlier.

Once the workflows are identified, the required data foundation also becomes clear. Relevant context for the agents includes the objectives of each team, the roadmap, requirements, codebase and architecture decisions, engineering principles, and what has and has not worked. Many mature organizations record their architecture decisions systematically under documents called Architecture Decision Record.

Before automating, the company should establish a baseline for each workflow: how long it takes on average and what quality it delivers, which can be measured by failures in deployments or later rework.

Many companies follow an automation pattern based on where the bottleneck is. For software development, the first bottleneck is writing code. Once this is automated, the bottleneck moves to code review and production guardrails, then to setting product requirements and finally to the deployment system.

In all of these automations, autonomy should be provided gradually, once the systems have demonstrated reliable performance and quality.

The role of employees would also change. Product managers could actually build a prototype earlier, doing vibe coding, while engineers could supervise several agents and work on improving the whole workflow. Planning meetings could be prepared by AI. These changes require deliberate decisions, experimentation and coordination across the company.

# Conclusion

The four capabilities work together: reliable data and organizational knowledge provide context; agents and workflows perform business activities; query interfaces make information accessible across appropriate boundaries; and continuous improvement turns evidence into better systems.

System design is only one part of becoming AI-native. The other is organizational transformation: aligning leadership, roles, incentives, skills, governance, and ways of working so that the technology can produce durable value. Both workstreams need to progress together.

</div>
