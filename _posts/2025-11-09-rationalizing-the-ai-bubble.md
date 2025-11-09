---
layout: distill
title: "Rationalizing the AI bubble"
date: 2025-11-09 09:00:00
description: "An analysis of AI bubble through financial data: examining revenue gaps, circular deals, and whether we're heading for a meltdown or just a price correction"
categories: AI, finance, technology, bubble, economics
giscus_comments: true
toc:
  - name: What is being said on the AI bubble
    subsections:
      - name: "The revenue gap: AIs 600 billion dollar question"
      - name: A web of circular deals
      - name: Are we hitting an AI ceiling?
  - name: "A bit of rationality: what is the data saying?"
    subsections:
      - name: No AI ceiling in sight yet
  - name: What the financial data is saying
    subsections:
      - name: Big tech firms will not collapse
      - name: Frontier labs have more risks, but they are comparably small
      - name: High pace of revenue growth
  - name: Big tech stock prices
    subsections:
      - name: Current prices are inflated
      - name: "Scenarios of correction: doesn't look grim"
  - name: "Conclusion: not a meltdown, potentially a price correction"
  - name: "Annex: data sources"
---

<span style="color: grey; font-weight: 300; font-size: 0.9em;">9th November 2025</span>

The history of AI is a history of disappointments, with at least two cycles that started with promising results, large investment pouring in, followed by underdelivery, significant losses and another AI winter.

In these times of inflated expectations for AI, what is different? Are we on the verge of a financial meltdown similar to the subprime crisis or the dot-com bubble? I believe that the data speaks differently. We may encounter a price correction, but not a massive collapse, as many are mentioning.

## What is being said on the AI bubble

The three main claims on the AI bubble are:

(1) there is a gigantic gap between the infrastructure spend and AI revenue, which will not close,

(2) there is a web of circular deals between NVIDIA and the rest of the AI ecosystem that artificially inflates the prices and

(3) there is a ceiling on how much AI models can improve and we are reaching it, which implies a hard limit in the performance of many practical systems built using AI.

Let's take them one by one.

### The revenue gap: AIs 600 billion dollar question

In June 2024 Sequoia Capital published [an article](https://sequoiacap.com/article/ais-600b-question/) where they argue that the AI bubble was reaching a tipping point. Their claim, which is still valid today, was that AI builders are spending on NVIDIA GPU cards an estimated <span>$</span>150 billion per year. This is generating an enormous gap with the realized AI revenue, which is still at the "few tens of billions" level, and should be at <span>$</span>600 billion to justify such an investment.

A similar view comes from Edward Zitron, who in [The Case Against Generative AI](https://www.wheresyoured.at/the-case-against-generative-ai/), claims that everybody (OpenAI, Anthropic, Microsoft, Meta…) is losing money on AI, and this is creating a deeply unstable situation. Not only is there a large gap, but the promise of AI replacing workers is a fudge. It is not happening because models are not good enough.

Additionally, as all companies are investing heavily in AI, their costs are increasing without much in return, neither productivity, nor additional revenue. He cites a relevant [study from MIT](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf) which shows that 95% of companies investing in AI are not getting any value out of it. He even compares this situation to the [subprime crisis](https://www.wheresyoured.at/subprimeai/): the whole tech industry is integrating generative AI technology to either increase their efficiency or to wrap it and sell it (see for example Cursor). This technology is offered at a steep discount to its true cost and is heavily concentrated with two providers that are not sustainable: OpenAI and Anthropic.

In essence, the whole system is currently very unstable, built on promises of a very large amount of profit. And it seems that these profits are not coming yet.

### A web of circular deals

If the previous wasn't large enough, add to that [a web of circular deals](http://bloomberg.com/news/features/2025-10-07/openai-s-nvidia-amd-deals-boost-1-trillion-ai-boom-with-circular-deals) where the main GPU maker, NVIDIA, invests in the LLM providers, mostly OpenAI and xAI, which then sped in buying NVIDIA cards, sometimes through intermediate companies such as Oracle. This not only inflates NVIDIA's revenue but also adds more systemic risk.

The following diagram, from Bloomberg, explains it well:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/nvidia-openai-circular-deals-network.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
Network diagram showing circular investment and purchasing deals between NVIDIA, OpenAI, and the broader AI ecosystem. Source: Bloomberg.
</div>

We can also interpret this chart as NVIDIA investing in the companies that will fuel the AI revolution. And this would not be worrisome if we didn't have the <span>$</span>600 billion question.

### Are we hitting an AI ceiling?

Many sources say that although AI has made rapid progress, there may be a "ceiling" in the performance: scaling the size of the model, or data quality/quantity, or architectural innovation may not be enough to make models better. Hence, there could be a limit in the upside as many companies are betting on exponential AI improvement.

However, models are not reliable enough to substitute humans on many tasks yet. Can AI agents be as good as workers? Can a company substitute people by paying a smaller, but still significant amount to the LLM producers?

Although there seems to be instances of this occurring, it's not happening at a large scale. For example, in the case of coding, where AI is being deployed everywhere to automate parts of the process, programmers are not leaving companies en masse. Moreover, we see some papers with evidence to the contrary: [AI slows coders down](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/).

## A bit of rationality: what is the data saying?

Let's address the last point first, on the performance of the models. Then we will get some insights from the fundamental data.

### No AI ceiling in sight yet

A great resource to look at the evolution of state of the art AI models comes from [METR](https://metr.org/), a non-profit organization that studies AI capabilities and its risks. In their article [Measuring AI Ability to Complete Long Tasks](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/) they measure the length of tasks, in human terms, that AI can complete with 50% and 80% success rate, and how this length evolves with time.

This is well represented in the following chart. The _y_ axis represents the duration that it takes for a human to complete different software engineering tasks, and the _x_ axis represents the release date of different LLMs. See the chart below in log terms, for 50% model success, i.e. model can complete the task successfully 50% of times.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/metr-ai-task-completion-timeline.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
Timeline showing how AI models' ability to complete software engineering tasks has evolved over time. The pattern shows task duration doubling every 7 months. Source: METR.
</div>

They find a consistent pattern: **every 7 months the human task duration doubles.** So if the best models are now automating tasks that take humans an average of 2 hours, in 14 months we expect that the human task duration that will be completed by a model with 50% success is 8 hours. Now, this is at 50%, which is a very low success rate. If the limit is set at 80% success, then the largest human time automated task is of only 26 minutes. Although small, doubling every 7 months will put us in 8 hours in roughly 28 months.

The work of METR is relevant not only because it establishes a predictive rule, but also because it shows that, so far, there is no evidence of an AI ceiling. The exponential growth hasn't flattened.

Additional evidence shows that the AI wall is far away. For example:

- The analysis of bottleneck factors such as electrical power, chip production, data scarcity and latency, done by EPOCH AI, which show that [scaling current models](https://epoch.ai/blog/can-ai-scaling-continue-through-2030) 4x per year will be still feasible at least until 2030 with 2e29 FLOP.
- Technical innovations that improve models without scaling them, such as [new network architectures](https://arxiv.org/abs/2503.07137) like the mixture of experts or [test time scaling](https://arxiv.org/abs/2408.03314), which originated the thinking mode of many models.
- Harder benchmarks are being created and AI models keep improving on them, such as [ARC](https://arcprize.org/) or [Humanity's Last Exam](https://agi.safe.ai/). Creating new benchmarks where AI fails [are essential](https://manuelsh.github.io/blog/2025/datasets-for-advancing-Theoretical-Physics/) for advancing AI.

## What the financial data is saying

It is true that there is a large gap between the revenue generated with AI and the expense. It is true that there is a circular economy. And it is true that the whole thing is betting on exponential revenue growth due to AI. Now, how much leeway to survive do these companies have?

### Big tech firms will not collapse

We can easily find financial data of the Big Tech firms and compare the AI investments during 2025 and current depreciation figures, with the revenue, profits, and debt. We will focus on the companies that are building LLMs, as they are the ones in large need of revenues, and ignore other relevant companies in the ecosystem, such as NVIDIA, Oracle, SoftBank, etc.

For the Big Tech companies, it looks like this (all data in <span>$</span> billions, 12 month trailing, sources in the annex):

|  Company  | AI investment estimation | Depreciation & amortization |  Revenue  | Profit  |  Debt   |
| :-------: | :----------------------: | :-------------------------: | :-------: | :-----: | :-----: |
| Microsoft |            97            |             34              |    282    |   102   |   61    |
| Alphabet  |            85            |             40              |    371    |   116   |   27    |
|  Amazon   |           101            |             59              |    670    |   71    |   51    |
|   Meta    |            69            |             15              |    179    |   72    |   50    |
| **Total** |         **352**          |           **149**           | **1,502** | **361** | **189** |

It's obvious that the AI investment, that will add up to the depreciation in the coming years, is very high, but in all the Big Tech's it's straightforward to see that these expenses don't seem to generate an unrepairable damage: in most cases is below the yearly profit, and possibly can be absorbed by slightly increasing the debt. Hence, in case these companies do not find a way of generating profit with generative AI, they will not collapse, though their share price will suffer a price correction.

### Frontier labs have more risks, but they are comparably small

Let's now look at the private frontier labs. There is not much public data, so we will build the table based on estimations (all data in <span>$</span> billions, 12 month trailing, sources in Annex 1):

|  Company  | AI investment estimation | Estimated revenue | Estimated profit | Estimated debt |
| :-------: | :----------------------: | :---------------: | :--------------: | :------------: |
|  OpenAI   |            7             |        12         |       \-10       |       ?        |
| Anthropic |         10 \- 15         |      5 \- 9       |       \-5        |      2.5       |
|    xAI    |         20 \- 25         |      1 \- 3       |        ?         |       5        |
| **Total** |          37-47           |       18-24       |      \-15?       |     \>7.5?     |

Unsurprisingly, none of them is profitable. However, they are significantly small compared with the Big Tech's, which by the way, have a lot of cash. So, a scenario of consolidation it's a potential outcome if some of the frontier labs struggle.

### High pace of revenue growth

Another important angle we need to explore is the current growth of earnings due to AI. It's not easy to estimate, as most companies do not report that separately, but still, we can get some data. And it looks like this:

|             Company             | 2023  |  2024  | 2025 (latest run-rate) |
| :-----------------------------: | :---: | :----: | :--------------------: |
|           **OpenAI**            | \~2.0 | \~5.5  |          12.0          |
|          **Anthropic**          | \~0.2 | \~1.0  |        5.0-9.0         |
|             **xAI**             |  \~0  | \~0.1  |         \~1.0          |
| **Microsoft – AI coding tools** | \~0.1 | \~0.4  |          N/D           |
|    **Amazon – AWS Bedrock**     |  N/D  |  N/D   |          N/D           |
| **Google – Gemini / Vertex AI** |  N/D  |  N/D   |          N/D           |
|            **Total**            | \~2.3 | \~7.0  |          20.0          |
|         **YoY Growth**          |       | \+204% |         \+285%         |

Known AI revenue, which omits much of Big Tech's data, is growing fast, at \+285% in the last year. Assuming that there is a total of <span>$</span>60 billion AI revenue (which is Ed Zitron [estimate](https://www.wheresyoured.at/the-case-against-generative-ai/#openai-needs-more-than-a-trillion-dollars-500bn-in-operational-expenses-and-at-least-another-625bn-800bn-for-data-centers-and-there-is-not-enough-private-and-venture-capital-to-pay-for-it)), assuming \+100% annual growth over the next few years (ambitious), the <span>$</span>600 billion question will be solved in 4.5 years, 2.5 years if we take the 2024 \+204% rate.

In conclusion, the possibility of one of the Big Tech's collapsing because of their over investment in AI is small. And if one of the comparably smaller frontier labs does, it won't have an important effect in the Big Tech firms. The AI bubble seems more about potential price correction than a full-scale blow-up, like the subprime mortgage crisis.

## Big tech stock prices

### Current prices are inflated

We can check different price ratios to understand if stocks are overvalued, and what current prices imply. We will use the following ratios:

- **P/E (Price-to-Earnings):** Market price divided by net earnings. Shows how much investors pay for each dollar of profit, a gauge of profit-based valuation.

- **P/S (Price-to-Sales):** Market value divided by total revenue. Useful when profits are thin or negative; shows how expensive a company's sales are.

- **P/B (Price-to-Book):** Market value divided by accounting net assets. Indicates how much investors value the company above its tangible book worth. Higher for asset-light, IP-driven firms.

- **EV/EBITDA (Enterprise Value to EBITDA):** Compares total business value (equity \+ debt – cash) to operating cash earnings. Balances profitability with capital structure; key for assessing overall valuation.

And this is how they look:

|  Company  | P/E  | P/S  | P/B  | EV/EBITDA |
| :-------: | :--: | :--: | :--: | :-------: |
| Microsoft | 37.8 | 10.7 | 11.1 |   20.9    |
| Alphabet  |  29  | 9.44 | 9.22 |   22.8    |
|  Amazon   | 36.5 | 3.85 | 8.01 |   18.9    |
|   Meta    | 28.2 | 8.22 | 8.24 |   15.6    |
|  Nvidia   | 53.6 | 29.6 | 50.3 |   49.7    |
|  Oracle   | 56.9 | 12.5 | 30.9 |   32.2    |

We can have an idea if these values are high by looking to their typical values historically, for both the technology sector and for all companies:

|                                 |   P/E   |  P/S   |  P/B   | EV/EBITDA |
| :-----------------------------: | :-----: | :----: | :----: | :-------: |
|      **Technology Sector**      | 25 – 35 | 5 – 10 | 5 – 10 |  15 – 25  |
| **All Companies (S&P 500 avg)** | 15 – 18 | 1 – 3  | 2 – 3  |  8 – 12   |

With these it's easy to see that the major risks are in NVIDIA and Oracle. If we look at the average P/E for the technology we are getting closer to the dot com bubble, at 40, we are getting closer to 2000 levels. See chart below ([source](https://worldperatio.com/sector/sp-500-information-technology/?utm_source=chatgpt.com)).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_images/pe-ratio-historical-chart.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
Historical P/E ratio chart showing technology sector valuations approaching 2000 dot-com bubble levels.
</div>

### Scenarios of correction: doesn't look grim

Let's imagine what could happen if markets become more rational, and they keep current earnings but the ratios of the above companies go to significantly lower values: P/E of x20 and x16. What will happen to the whole S\&P500 index? Let's check it in the following table:

| Company   | S&P 500 weight (%) | Current P/E | Price change @x20 (%) | S&P 500 contrib @x20 (%) | Price change @x16 (%) | S&P 500 contrib @x16 (%) |
| --------- | ------------------ | ----------- | --------------------- | ------------------------ | --------------------- | ------------------------ |
| Microsoft | 6.1                | 37.8        | \-47.1                | \-2.9                    | \-57.7                | \-3.5                    |
| Alphabet  | 5.6                | 29.3        | \-31.7                | \-1.8                    | \-45.4                | \-2.5                    |
| Amazon    | 4.3                | 36.5        | \-45.2                | \-1.9                    | \-56.2                | \-2.4                    |
| Meta      | 2.6                | 22.0        | \-9.1                 | \-0.2                    | \-27.3                | \-0.7                    |
| Nvidia    | 7.6                | 56.1        | \-64.3                | \-4.9                    | \-71.5                | \-5.4                    |
| Oracle    | 1.1                | 54.9        | \-63.6                | \-0.7                    | \-70.9                | \-0.8                    |
| **Total** | **26.9**           | —           | —                     | **\-12.4**               | —                     | **\-15.4**               |

In both scenarios, the correction of the S\&P 500 index, although significant, won't be a disaster: \-12% for the 20x and \-15% for the x16. For context, during Covid the index had a drawdown of \-34% during one month.

## Conclusion: not a meltdown, potentially a price correction

The empiricist and major proponent of the scientific method, Francis Bacon, once said "the truth is the daughter of time, not of authority". This is especially certain in finance. In the long term, the fundamentals of stock, the building blocks of a company's economic reality, will drive its price. Hence, in the short term, each stock price is a collective statement, a collective expectation of the long term reality.

And current prices are telling us that the expectations are high. In fact, this is the expected level of earnings for each company:

|   Company   | Current P/E | Required profit growth to reach P/E=20 (%) |
| :---------: | :---------: | :----------------------------------------: |
|  Microsoft  |    37.8     |                   \+89%                    |
|  Alphabet   |    29.3     |                   \+47%                    |
|   Amazon    |    36.5     |                   \+82%                    |
|    Meta     |    22.0     |                   \+10%                    |
|   Nvidia    |    56.1     |                   \+181%                   |
|   Oracle    |    54.9     |                   \+175%                   |
| **Average** |             |                 **\+97%**                  |

On average, the market is expecting a \+97% profit growth, which is undeniably high. This profit, which is of the order of a few hundred billions, needs to come from either consumers or companies paying more.

Companies outside the Big Tech's are all already adopting AI, increasing their costs, as we have seen, without getting much profit yet. For such a large amount of money to move hands, we need to see that profit, we need to see the increase of productivity or the revenues. But also we need to see that the AI ceiling is not far. The game is in the application layer as much as in the model layer.

## Annex: Data sources

Microsoft FY25 Q4 Earnings Call / Investor Relations — [Press release & webcast](https://www.microsoft.com/en-us/Investor/earnings/FY-2025-Q4/press-release-webcast)

Microsoft FY25 Form 10-K — [SEC filing](https://www.sec.gov/ixviewer/doc?action=display&source=content&source_url=/Archives/edgar/data/789019/000156459025000001/msft-20250630.htm)

Alphabet Q2 2025 Earnings — [Investor relations release](https://abc.xyz/investor/news/2025/q2-2025-earnings/)

Meta FY2024 Results — [Investor relations release](https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Reports-Fourth-Quarter-and-Full-Year-2024-Results/default.aspx)

Meta 2025 Capex Range ($64–72B) — [Investor relations (Q1 2025)](https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Reports-First-Quarter-2025-Results/default.aspx) • [TechCrunch coverage](https://techcrunch.com/2025/07/30/meta-to-spend-up-to-72b-on-ai-infrastructure-in-2025-as-compute-arms-race-escalates/)

S\&P Dow Jones Indices — [S\&P 500 EPS / Index Earnings (xlsx)](https://www.spglobal.com/spdji/en/documents/additional-material/sp-500-eps-est.xlsx)

Yardeni Research — [S\&P 500 & Sector Valuation (Forward P/E, P/S)](https://www.yardeni.com/pub/sp500pe.pdf)

Damodaran Online — [Industry Multiples](https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/pedata.html)

Multpl — [S\&P 500 Price-to-Sales](https://www.multpl.com/s-p-500-price-to-sales)

YCharts — [S\&P 500 Price-to-Sales chart](https://ycharts.com/indicators/sp_500_price_to_sales_ratio)

FinanceCharts — [Homepage / tools & TTM data](https://www.financecharts.com/)

Macrotrends — [Depreciation & Amortization (example: AMZN)](https://www.macrotrends.net/stocks/charts/AMZN/amazon/total-depreciation-amortization-cash-flow)

GuruFocus — [D\&A TTM (example: AMZN)](https://www.gurufocus.com/term/cash-flow-depreciation-depletion-amortization/AMZN)

StockAnalysis — [TTM revenue & profit (example: AMZN)](https://stockanalysis.com/stocks/amzn/revenue/)

CompaniesMarketCap — [Companies ranked by P/E](https://companiesmarketcap.com/top-companies-by-pe-ratio/)

Reuters (AI capex & revenues) — [Microsoft boosts FY25 AI/data-center spend](https://www.reuters.com/technology/microsoft-boots-capital-spending-80-billion-ai-2025-07-23/) • [Alphabet reaffirms \~$75B 2025 capex](https://www.reuters.com/technology/alphabet-ceo-reaffirms-planned-75-billion-capital-spending-2025-2025-04-09/) • [Anthropic hits <span>$</span>3B ARR run-rate](https://www.reuters.com/business/anthropic-hits-3-billion-annualized-revenue-business-demand-ai-2025-05-30/)
