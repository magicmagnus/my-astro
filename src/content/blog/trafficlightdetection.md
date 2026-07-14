---
title: "Traffic Light Detection - Computer Vision Project" 
description: ''
pubDate: 'Mar 15 2024'
heroImage: '/assets/posts/final_prediction.png'
tags: [Machine Learning, Deep Learning, CNNs, Python, PyTorch]
---

<h3> <a href="https://github.com/FridtjofS/TrafficLightDetection">GitHub Repo</a></h3>


For the course "Bildverarbeitung, Maschinelles Lernen und Computer Vision", I have been part of a project to detect traffic lights in images and videos as well as the state of the traffic light (red, red-yellow, yellow, green, off), to be used in driver-assistance systems and autonomous vehicles. The code is available on [GitHub](https://github.com/FridtjofS/TrafficLightDetection).

<br />

We split our pipeline into multiple separate steps, my contribution to the project was the implementation of the traffic light State Detection model using a custom ResNet architecture, implemented in PyTorch. The model was trained on our self-annotated data from the [DTLD dataset provided by driveU](https://www.uni-ulm.de/in/iui-drive-u/projekte/driveu-traffic-light-dataset/). The final model achieved an accuracy of 97.7% on the test set.