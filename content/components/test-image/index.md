---
clarisdebug: true
title: Test image black/white
author: Simon Heimlicher
description: Black and white test image
weight: 500
keywords:
- test image
- black and white
- image
- hugo
- theme
- claris
date: 2024-02-19
---

## Image with 20% relative width, round shape, caption and lightbox

```gohtml
float=left relative-width=20 shape="round" caption="Figure with caption" lightbox=true
```

{{< claris/render-image src="images/test-image_black-white_1920x1080.png" float=left relative-width=20 shape="round" caption="Figure with caption" lightbox=true >}}

## Image with 50% relative width, round shape, caption and lightbox

```gohtml
float=right relative-width=50
```

{{< claris/render-image src="images/test-image_black-white_1920x1080.jpg" float=right relative-width=50 >}}
