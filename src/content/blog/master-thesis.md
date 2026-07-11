---
title: "How Semantic Watermark Robustness generalizes across Generative Models - Master Thesis"
description: ""
pubDate: 'Jun 8 2025'
heroImage: '/assets/posts/master-thesis.png'
tags: [Machine Learning, Deep Learning, Generative AI, Diffusion Models, Python, PyTorch]
---


"[How Semantic Watermark Robustness generalizes across Generative Models](https://github.com/magicmagnus/ma-thesis)", Final Grade 1.0

The advancement of generative AI models and the widespread presence of synthetic images create a need for reliable methods to distinguish between real and generated content. Semantic watermarking offers a solution by embedding invisible signals directly during image generation. However, prior evaluations have focused only on watermark- ing Stable Diffusion models, leaving newer architectures unexplored. In this work, we address this gap by evaluating watermark robustness on Flux.1, a state-of-the-art flow matching model with a fundamentally different architecture. To enable this comparison, we develop a novel inversion technique for flow matching models and adapt four existing watermarking methods to this model. We also propose GRIDS, a novel hybrid watermark- ing approach that combines the advantages of existing methods while mitigating their weaknesses. Our large-scale evaluation across nine attack scenarios reveals that while watermarking remains feasible on newer models, their architectural design limits inver- sion, leading to reduced robustness. Among all methods, GRIDS consistently performs best, demonstrating the potential of hybrid approaches. Our findings highlight that, as watermark performance is influenced by model architecture, future watermarking approaches must evolve in parallel with the improvement of generative models.


![Process of semantic watermarking for diffusion models.](/assets/posts/tr-pipe.svg)