---
layout: page
title: Platic Transcription Webapp
description: Full-stack transcription product built around OpenAI Whisper
timeframe: 2022-2023
role: Founder and full-stack builder
img: assets/img/projects/platic_main.jpg
importance: 4
category: personal
selected: true
order: 4
github: https://github.com/manuelsh/transcription-webapp
---

[Platic](https://github.com/manuelsh/transcription-webapp/tree/main) was a personal attempt to build an end-to-end webapp for automatic audio transcription. The starting point was simple: OpenAI had just released [Whisper](https://openai.com/index/whisper/), a very strong open-source speech-recognition model, and several web services were charging prices that looked roughly two orders of magnitude higher than the underlying cost of running the model.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/platic_main.jpg" title="Platic transcription webapp" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

Transcription was already a large market, plausibly in the hundreds of millions of euros, and Whisper had changed the cost structure almost overnight. I also knew that the business was probably going to become less attractive over time: if the model was open, the value of a plain transcription service would decline quickly. But that was part of the point. Even if the business was not a durable moat, it was a useful use case to learn how to build a complete web product.

This was before AI coding agents could assemble most of the plumbing for you. I had to learn the stack by building it.

## What I built

The project was not just a model demo. It had most of the pieces that a real paid web application needs:

- Public website and private user area.
- User authentication.
- Audio-file upload and storage.
- Automatic transcription.
- Payment flow with Stripe.
- Free-trial credit for new users.
- Paid file queue and payment-status handling.
- Download and review of finished transcriptions.
- Email notification when a transcription was ready.
- Google Analytics and advertising instrumentation.
- Calls to external APIs and to models I served myself.

The [main repository](https://github.com/manuelsh/transcription-webapp) contains the core webapp elements: frontend components, FastAPI backend, Docker Compose configuration, Nginx, Gunicorn, Certbot, SQLite, Stripe integration, Firebase authentication, S3 integration, and the orchestration needed to run transcription jobs.

The backend exposed the API used by the frontend to upload files, calculate what needed to be paid, create Stripe payment intents, handle Stripe webhooks, retrieve user files, and trigger transcription. The frontend elements were deliberately modular: upload, checkout, sign-in, and file-listing components could be embedded into the website.

## Architecture

The system combined several layers:

- **Frontend:** HTML, CSS, JavaScript, and Materialize components for upload, checkout, sign-in, and user file management.
- **Backend:** Python [FastAPI](https://fastapi.tiangolo.com/) application served with Gunicorn behind Nginx.
- **Infrastructure:** Docker Compose, Certbot, SSL certificates, server configuration, SSH, DNS, and an EC2 machine serving the web/API layer.
- **Storage:** S3 for user files and transcription outputs, plus a first SQLite database for user and file state.
- **Payments:** Stripe checkout/payment intents and webhook handling.
- **Authentication:** Firebase authentication for user sign-in.
- **Inference:** Whisper-based transcription running in GPU-backed jobs, with Lambda functions, Batch-style orchestration, containers, and AWS infrastructure used to process paid or free-trial files.

The architecture was more complex than I expected before starting. A transcription model is only one part of the product. The real system also needs file lifecycle management, user identity, payment state, security, certificates, cost control, retries, user feedback, storage permissions, and the operational discipline to connect all of those pieces without leaking credentials or creating a brittle user journey.

One of the most useful parts of the project was understanding how many valid technology choices exist for every layer, and how often those choices constrain each other. The payment platform affects the checkout flow and backend state machine. The authentication provider affects the frontend and API contract. The database choice affects how quickly you can ship and how painful scaling will be later. The inference architecture affects latency, cost, GPU utilization, and whether the product can be priced sensibly.

## Whisper and GPU inference

The first prototype work around Whisper also connected to a separate [end-to-end voice interface experiment](https://github.com/manuelsh/end-to-end-talkbot), where I used Whisper together with other models to build a multilingual voice chatbot proof of concept. That helped validate how strong Whisper was in practice, including languages such as Spanish and Catalan.

For Platic, the important challenge was not only whether Whisper worked. It was how to serve it economically. Running large models on GPU machines is expensive if they stay idle, but cold-starting GPU capacity creates operational complexity. The project used AWS components such as EC2, S3, Lambda-triggered orchestration, Batch-style job execution, and GPU containers to separate the web/API layer from the heavier transcription workload.

That experience was useful later in a much broader sense. It made concrete the difference between a model demo and a production product: the model can be impressive, but the product lives or dies in the surrounding system.

## Business reality

The product also taught a useful market lesson. Many users tried the free transcription flow, and some came back to repeat it, but very few converted to paid usage. Part of that was my fault: the user experience was still subpar, and every additional step in upload, payment, waiting, and retrieval reduced conversion.

But there was also a market shift happening. The perceived value of transcription was falling quickly. Once users saw that high-quality speech-to-text could be almost free, many expected the service itself to be free as well. The underlying technology had improved so much that it compressed willingness to pay for a simple wrapper around it.

That was one of the main lessons: a technically correct product is not enough. The product needs a strong enough workflow, distribution, trust, UX, and differentiation to survive when the core model becomes cheap and widely available.

## What came out of it

Even if Platic did not become a lasting business, it was a very valuable project. It forced me to build the full path from idea to deployed product: frontend, backend, model inference, cloud infrastructure, payments, authentication, analytics, advertising, storage, SSL, and operational setup.

After going through that once, I extracted the reusable parts into [Spider Webapp Template](https://github.com/manuelsh/spider-webapp-template), a template for future webapps with a server, API framework, SSL certificate management, database, and optional user authentication. The goal was to avoid relearning the same infrastructure decisions every time I wanted to build a serious prototype.

The biggest takeaway was not a single framework or AWS service. It was a better mental model of full-stack product building: every simple-looking webapp is a system of tradeoffs, and the hard part is choosing a coherent set of technologies that can actually work together for the business you are trying to build.

## Links

- [Platic transcription webapp repository](https://github.com/manuelsh/transcription-webapp)
- [Spider Webapp Template](https://github.com/manuelsh/spider-webapp-template)
- [End-to-end Talkbot experiment](https://github.com/manuelsh/end-to-end-talkbot)
- [OpenAI Whisper announcement](https://openai.com/index/whisper/)
