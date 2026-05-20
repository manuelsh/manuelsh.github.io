---
layout: page
title: Hugging Face Transformers Contribution
description: Dynamic image-resolution support for vision-language models
timeframe: Aug-Sep 2024
role: Open-source contributor
img: assets/img/projects/hugging-face-logo.svg
importance: 7
category: work
selected: true
order: 5
github: https://github.com/huggingface/transformers
---

Contributed to [Hugging Face Transformers](https://github.com/huggingface/transformers), one of the core open-source libraries for modern machine learning and language-model workflows.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/hugging-face-logo.svg" title="Hugging Face logo" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

[CLIP](https://openai.com/index/clip/) (_Contrastive Language–Image Pre-training_) was introduced by OpenAI in 2021 as a vision-language model trained to align images and text in a shared embedding space. This made it possible to perform flexible image-understanding tasks such as zero-shot classification, image-text retrieval, semantic image search, tagging, filtering, and multimodal ranking.

CLIP was highly influential at release, competitive on many benchmarks, and made available with public code and pretrained weights. This helped CLIP, and later CLIP-like models, become widely adopted across research and industry.

Today, CLIP-family models are used at scale across the AI ecosystem. Public examples include large-scale dataset curation efforts such as [LAION-5B](https://laion.ai/blog/large-openclip/), which contains around 5.8 billion CLIP-filtered image-text pairs, and we also [used it](https://medium.com/adevinta-tech-blog/foundation-models-a-new-vision-for-e-commerce-76904a3066e8) in the marketplaces of Adevinta, implemented by our Computer Vision team, called [Cognition](https://medium.com/leboncoin-tech-blog/how-to-choose-the-best-image-embeddings-for-your-e-commerce-business-8006f17b495a).

Examples of real-world use cases include:

- **Semantic image search and visual search**  
  Images and text can be encoded into the same vector space, allowing users to search images using natural language queries such as “red leather sofa” or “flowy skirt with floral pattern”. This is directly relevant to e-commerce, classifieds, media libraries, and creative tools. See this example of [cross-modal search for e-commerce](https://www.anyscale.com/blog/cross-modal-search-for-e-commerce-building-and-scaling-a-cross-modal-image-retrieval-app).

- **Zero-shot image classification and tagging**  
  Images can be classified by comparing them against text labels such as “a photo of a dog” or “a photo of a car”, without training a dedicated classifier for every category. This was one of the core capabilities demonstrated in the original [CLIP release](https://openai.com/index/clip/).

- **Dataset filtering and curation**  
  CLIP-style models can be used to score and filter large collections of image-text pairs, helping build cleaner datasets for training vision-language and generative models. [LAION-5B](https://laion.ai/blog/large-openclip/) is a public example at multi-billion scale.

- **Text-to-image generation**  
  OpenAI used CLIP to rerank DALL·E samples, improving the alignment between generated images and text prompts. Later text-to-image systems, including Stable Diffusion and SDXL-style pipelines, also use CLIP or OpenCLIP-style text encoders for prompt conditioning. See OpenAI’s [DALL·E release](https://openai.com/index/dall-e/).

- **Foundation for multimodal LLMs**  
  CLIP-like visual encoders have been important in the evolution of multimodal language models. For example, [LLaVA](https://llava-vl.github.io/) connects a pretrained CLIP visual encoder to a large language model, enabling instruction-following over images.

## CLIP in the Transformers library

My contribution improved support for flexible image resolutions in CLIP-style vision-language models. At the time, several models assumed a fixed input image size, because their learned positional embeddings were tied to the image grid used during pretraining. This made it difficult to run them on higher-resolution or non-default image sizes without errors or manual changes.

The work added positional-embedding interpolation across eight related model implementations:

- `altclip`
- `bridgetower`
- `chinese_clip`
- `clip`
- `clipseg`
- `git`
- `kosmos_2`
- `x_clip`

The core change was to add and propagate an `interpolate_pos_encoding` option through the relevant vision-model APIs. When enabled, the model interpolates the pretrained 2D positional embeddings to match the new image grid, allowing the same pretrained model to process images at different resolutions. The change also included regression and inference tests across the affected models.

The pull request touched 16 Python files across model implementations and tests, was merged into the main Transformers codebase, and was listed as a **Significant community contribution** in the [Transformers v4.46.0 release notes](https://github.com/huggingface/transformers/releases/tag/v4.46.0).

I enjoyed not only improving widely used open-source models, but also working directly with a large, production-grade ML codebase.

## Links

- [Transformers v4.46.0 release](https://github.com/huggingface/transformers/releases/tag/v4.46.0)
- [Pull request #32600](https://github.com/huggingface/transformers/pull/32600)
- [Hugging Face Transformers repository](https://github.com/huggingface/transformers)
- [Code, Chaos, and Collaboration: The humans behind the visual search feature](https://medium.com/leboncoin-tech-blog/code-chaos-and-collaboration-the-humans-behind-the-visual-search-feature-12eee042c47e)
