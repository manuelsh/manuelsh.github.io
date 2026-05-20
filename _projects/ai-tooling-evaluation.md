---
layout: page
title: AI Tooling Evaluation
description: Evaluation of software-engineering AI tools
timeframe: May-Jun 2025; published Mar 2026
role: Pilot co-lead and author
img: assets/img/blog_images/ai-tooling-header.jpg
importance: 3
category: work
selected: true
order: 3
---

A [pragmatic evaluation](/blog/2026/pragmatic-evaluation-ai-tooling/) of software-engineering AI tooling to be used by over 1,000 software engineers, focused on measuring productivity in realistic development tasks instead of relying only on demos, vendor claims, or subjective impressions.

The pilot compared GitHub Copilot, Cursor, and Claude Code across real Adevinta software-engineering work. It involved 77 engineers, 14 teams, and 165 tracked tasks over four weeks. The objective was practical: decide which tooling could create meaningful value in real codebases, with real workflows, and with enough measurement discipline to support an enterprise rollout decision.

The pilot allowed us to choose the best tool for Adevinta at the time, several months ahead of the overal concensus.

## Evaluation design

The central artifact to measure was a task tracker. Engineers recorded task characteristics, AI-tool experience level, estimated time without AI, expected PR revisions, actual time with AI, actual PR revisions, task outcome, and perceived usefulness. This made it possible to compare estimated cycle time without AI against actual delivery time with AI, while still capturing qualitative evidence from surveys, focus groups, and manager discussions.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/blog_images/tracking-table.JPG" title="Example task tracker" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

## Results

The directional result was that Claude Code showed the strongest performance in this pilot: higher productivity proxy, higher completion rate, and stronger user rating. Cursor showed meaningful gains, especially for more experienced users. GitHub Copilot, already familiar to many engineers, showed smaller gains in this specific setup.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/blog_images/ai-tooling-results-table.png" title="AI tooling results table" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/blog_images/ai-tooling-violin-plot.png" title="AI tooling distributions" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>

## Links

You can find many more details in the following links:

- [Project write-up](/blog/2026/pragmatic-evaluation-ai-tooling/)
- [Original publication on Adevinta Tech Blog](https://adevinta.com/techblog/a-pragmatic-evaluation-of-software-engineering-ai-tooling/)
