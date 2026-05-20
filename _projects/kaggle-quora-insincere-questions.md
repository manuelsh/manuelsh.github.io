---
layout: page
title: "Kaggle Competition: Quora Insincere Questions"
description: "NLP competition under strict Kaggle kernel constraints, which finished with a Gold Medal"
timeframe: Nov 2018-Feb 2019
role: Competitor
img: assets/img/projects/kaggle-logo.svg
importance: 6
category: contributions
selected: true
order: 6
---

In February 2019 I participated in Kaggle's [Quora Insincere Questions Classification](https://www.kaggle.com/competitions/quora-insincere-questions-classification/overview) competition, earning a gold medal on the private leaderboard and finishing **11th out of 4,037 teams**.

The task was a binary NLP classification problem: given a Quora question, predict whether it was sincere or insincere. Submissions were evaluated using [F1 score](https://en.wikipedia.org/wiki/F1_score), which made thresholding, class imbalance, and false-positive / false-negative tradeoffs very important.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/kaggle-logo.svg" title="Kaggle logo" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Constraints

This was a [Kernels-only competition](https://www.kaggle.com/competitions/quora-insincere-questions-classification/overview#Kernels-FAQ), so the solution was not just about model quality. The full training and prediction pipeline had to run inside Kaggle's execution environment in less than 2 hours with GPU.

The main constraints were:

- Submissions had to be generated from a Kaggle Kernel output.
- Training and prediction had to fit in a single Kernel, including any ensemble.
- GPU Kernels were limited to 2 hours of runtime.
- CPU Kernels were limited to 6 hours of runtime.
- Internet access had to be disabled.
- Multiple data sources were not allowed.
- Custom packages were not allowed.
- External data was not allowed, except for whitelisted pretrained embeddings / models.
- The competition allowed a maximum of 5 submissions per day and up to 2 final submissions for judging.

Those constraints changed the nature of the work. A model that was slightly better but too slow, too large, or too brittle was useless. The hard part was getting a strong model, clean preprocessing, thresholding, and enough experimentation discipline to fit inside a two-hour GPU budget.

## Model path

To arrive to the final model I made over 40 iterations. I started with very simple baselines and then moved toward stronger deep-learning models.

The first logged experiment was a TF-IDF plus gradient-boosting baseline from scikit-learn. It reached `0.434` F1 when the current best score was already around F1 `0.711`, so it was useful mainly as a starting point.

I then tried the state of the art [ULMFiT](https://arxiv.org/abs/1801.06146). That direction quickly exposed the limits of the competition: GPU memory issues, batch-size edge cases, long prediction time, and the impossibility of submitting from AWS or from files generated outside Kaggle. Reducing the backpropagation through time, reducing training size, and tuning the threshold made the approach run, but the best logged ULMFiT result was still only around `0.522`, position `2427`.

The breakthrough came when I switched to a PyTorch RNN classifier inspired by a strong public kernel, then progressively rewrote it into my own implementation. That model used PyTorch with torchtext preprocessing, pretrained word embeddings, K-fold validation, careful threshold selection, and a fold ensemble that had to stay within the Kaggle runtime limit. The first strong version reached about `0.691`, position `851`, and a 5-fold version reached about `0.692`.

From there, the work became a long optimization loop. I tested dropout, L2 regularization, layer normalization, number of folds, folds actually used for training, hidden size, linear layer size, length features, unknown-token features, cyclic learning rates, majority voting, blending, batch sorting, test-set reordering, Gaussian noise in embeddings, profanity features, insincere-word features, language detection, training embeddings in the last epoch, capsule layers, and deeper RNN variants.

Many of those ideas did not help. Some improved cross-validation but failed on the leaderboard. Some were too slow. Some looked promising but overfit. A few were good but could not survive the 2-hour GPU limit. The final candidates were fold-ensemble RNN variants with sorted batching / test reordering, cyclic learning rate, additional lightweight features, and hidden sizes around `60-80`. The two final submissions gave a public leaderboard F1 of `0.707`.

The final private leaderboard result was 11th place.

## How I worked

The model log was the core operating tool. I kept a structured record of experiments with:

- `R`: result, usually F1 and sometimes leaderboard position.
- `O`: observation, such as overfitting, runtime cost, or CV / leaderboard mismatch.
- `W`: what had been done.
- `NS`: next step.
- `b`: benchmark version at that point.

That structure mattered because the search space was large and noisy. It kept the work tied to progress: every experiment had to produce a result, an observation, and a next decision. The log also made failures useful. If a run crashed, ran out of memory, exceeded time, overfit, or produced a lower leaderboard score, it still narrowed the search.

By the end, the log contained at least 48 numbered experiments, many of them with sub-experiments, and Kaggle version identifiers running up to the `v190s`. The work was not a single clever modeling idea; it was a systematic sequence of small steps under tight feedback loops.

Some of the problems I had to work around were very practical:

- ULMFiT ran into GPU memory constraints.
- A batch of size 1 caused a normalization error.
- Some kernels were killed for running too long.
- Several promising variants took 124-181 minutes, which was too close to or beyond the limit.
- Some models had excellent CV scores but poor leaderboard scores.
- Sorting within batches was faster, but had to be handled carefully because it could change evaluation behavior.
- Stage 2 robustness required thinking about larger test data, possible null values, memory cleanup, CUDA memory, and finishing safely within about 95% of the allowed runtime.

## Main learnings

This is the part of the project I remember most: progress came from making the loop faster and more reliable. Better code meant more experiments. More experiments meant better judgement about which ideas were real, which were noise, and which were not worth the runtime.

One of my strongest takeaways was that the bottleneck was not only the model. The [Kaggle data page](https://www.kaggle.com/competitions/quora-insincere-questions-classification/data) itself noted that the ground-truth labels contained noise and were not guaranteed to be perfect. My experience went further: many examples looked poorly labeled, and after a certain point it felt like model iteration was running into the ceiling created by dataset quality.

Quora was paying for a competition to improve model performance, but in my view the more fundamental blocker was upstream: the quality of the labels. In a real company setting, that distinction matters. Sometimes the best next investment is not a more complex architecture, but a better dataset, clearer labeling policy, stronger review loops, and better measurement of label uncertainty.

## Links

- [Kaggle competition overview](https://www.kaggle.com/competitions/quora-insincere-questions-classification/overview)
- [Kaggle private leaderboard](https://www.kaggle.com/competitions/quora-insincere-questions-classification/leaderboard)
- [My Kaggle profile](https://www.kaggle.com/manuelsh)
