---
title: "Faketastisch - Few-Shot LLM prompting for humorous parody generation" 
description: ''
pubDate: 'May 15 2025'
heroImage: '/assets/posts/cover-faketastisch.png'
tags: [Machine Learning, Deep Learning, Generative AI, LLMs, Hugging Face]
---




### Try it out here: [https://faketastisch.netlify.app](https://faketastisch.netlify.app)

#### Code: [Github Repository](https://github.com/magicmagnus/sauphemismus_react)


This project started out back in the "pre-ChatGPT era" of 2021 and has evolved over time, but the core idea remains the same: If we prompt an LLM with only a list of facts and no other system prompt, it will do its best to respond with a new fact that closely matches the previous facts in length, tone and overall meaning. Back when LLMs weren't as refined as they are now, these facts were mostly wrong, so the idea quickly became to use these often nonsensical answers for humorous and parody purposes.

Choosing different lists of examples instead of facts lead to a selection of "themes" for these parody generations. Combined with writing a full React website with included Part-of-Speech tagging and automated fetching of matching images, this leads to:

**[Faketastisch](https://faketastisch.netlify.app/faketastisch)**: 
parody of popular german site [Faktastisch](https://www.instagram.com/faktastisch), produces true-ish sounding facts of questionable accuracy.
<div style="display:grid;grid-template-columns: repeat(3, 1fr);gap:1rem;;max-width:600px;margin:auto;">
  <img src="/assets/fact5.png" alt="fact 5" style="max-height:220px;object-fit:contain;">
  <img src="/assets/fact1.png" alt="fact 1" style="max-height:220px;object-fit:contain;">
  <img src="/assets/fact2.png" alt="fact 2" style="max-height:220px;object-fit:contain;">
  <img src="/assets/fact3.png" alt="fact 3" style="max-height:220px;object-fit:contain;">
  <img src="/assets/fact4.png" alt="fact 4" style="max-height:220px;object-fit:contain;">
  <img src="/assets/fact6.png" alt="fact 6" style="max-height:220px;object-fit:contain;">
</div>

<br />

**[Sprichworte](https://faketastisch.netlify.app/sprichworte)**: generates (mostly) new proverbs
<div style="display:grid;grid-template-columns: repeat(3, 1fr);gap:1rem;;max-width:600px;margin:auto;">
  <img src="/assets/sp3.png" alt="fact 3" style="max-height:220px;object-fit:contain;">
  <img src="/assets/sp6.png" alt="fact 3" style="max-height:220px;object-fit:contain;">
  <img src="/assets/sp4.png" alt="fact 1" style="max-height:220px;object-fit:contain;">
  <img src="/assets/sp7.png" alt="fact 1" style="max-height:220px;object-fit:contain;">
  <img src="/assets/sp8.png" alt="fact 2" style="max-height:220px;object-fit:contain;">
  <img src="/assets/sp9.png" alt="fact 2" style="max-height:220px;object-fit:contain;">
  
</div>

<br /> 

**[justGPTthings](https://faketastisch.netlify.app/justgptthings)**: parody of the popular-in-2012 [justgirlythings](https://www.instagram.com/justgirlythings/) meme format
<div style="display:grid;grid-template-columns: repeat(3, 1fr);gap:1rem;;max-width:600px;margin:auto;">
  <img src="/assets/jt1.jpg" alt="fact 2" style="max-height:220px;object-fit:contain;">
  <img src="/assets/jt2.jpg" alt="fact 1" style="max-height:220px;object-fit:contain;">
  <img src="/assets/jt3.jpg" alt="fact 3" style="max-height:220px;object-fit:contain;">
  <img src="/assets/jt4.jpg" alt="fact 2" style="max-height:220px;object-fit:contain;">
  <img src="/assets/jt5.jpg" alt="fact 1" style="max-height:220px;object-fit:contain;">
  <img src="/assets/jt6.jpg" alt="fact 3" style="max-height:220px;object-fit:contain;">
</div>


<br />

**[Sauphemismus](https://faketastisch.netlify.app/sauphemismus)**: generates new euphemisms for having a few drinks



**[Ausreden](https://faketastisch.netlify.app/ausreden)**: generates new excuses for being late or not coming



and more, including [Bible quotes](https://faketastisch.netlify.app/bibelzitate), a [mushroom identifier](https://faketastisch.netlify.app/pilzfinder) and a [chess move generator](https://faketastisch.netlify.app/chessgpt)




While originally intended to be used for entertainment, these generations also highlight the tendency of LLMs to hallucinate and make up facts.

Originally we used Huggingface Inference API to prompt [GPT-J-6B](https://github.com/kingoflolz/mesh-transformer-jax), but this model quickly got discontinued when the world wanted newer, bigger, better models thanks to the rise of ChatGPT. Sadly, a big part of what made these early generations so fun was the lack of refinement and alignment of these earlier LLMs. Now, the project uses a version of [Llama 3](https://huggingface.co/DiscoResearch/Llama3-German-8B).

