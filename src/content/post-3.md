---
title: "Python Framework Videotest"
date: "2020-09-22"
draft: false
path: "/blog/Videos"
---

## Short examples of FOM video manipulation
Set up development environment by downloading all dependencies in Anaconda commandpromt and then you are ready to roll.
```js
conda create -n FO2 python=3.6
```

## Default NodeJS server

```js
//last step of the workflow
python demo.py  --config config/dataset_name.yaml --driving_video path/to/driving --source_image path/to/source --checkpoint path/to/checkpoint --relative --adapt_scale

//change png to jpg according to file used
python demo.py  --config config/vox-adv-256.yaml --driving_video driving_video/crop.mp4 --source_image source_image/source.png --checkpoint fom_checkpoints/vox-adv-cpk.pth.tar --relative --adapt_scale
```
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/pGPph6JJcNs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
