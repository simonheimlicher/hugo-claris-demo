---
# clarisdebug: true
# supertitle: Theme component
title: Render meta images
subtitle: Render images from meta data
image:
  feature:
    - src: images/river_2x3
      variant: default
      alt: Photo of a meandering river
      title: Rendered 2x3 image
      position: center 60%
      credits: "Photo by Pexels User: https://www.pexels.com/photo/river-in-rage-20008219/"
    - src: images/river_16x9
      alt: Photo of a meandering river
      title: Rendered 16x9 image
      position: center 50%
      credits: "Photo by Pexels User: https://www.pexels.com/photo/river-in-rage-20008219/"
    - src: images/river_9x16
      alt: Photo of a meandering river
      title: Rendered 9x16 image
      position: center 50%
      credits: "Photo by Pexels User: https://www.pexels.com/photo/river-in-rage-20008219/"
    - src: images/river_1x1
      alt: Photo of a meandering river
      title: Rendered 1x1 image
      position: center 50%
      credits: "Photo by Pexels User: https://www.pexels.com/photo/river-in-rage-20008219/"
  excerpt:
    alt: Screenshot of a featured image
    src: images/responsive-feature-image
    title: Rendered image
weight: 500
keywords:
- render image
- meta
- image
- hugo
- theme
- claris
date: 2024-02-13 
# ## Kind: `feature` variant: `default` version: `default`

# {{< claris/render-meta-images kind=feature variant=default version=default >}}
---

## Kind: `feature` variant: `default`

{{< claris/render-meta-images kind=feature variant=default aspect=9x16 >}}

## Kind: `excerpt` variant: `default`

{{< claris/render-meta-images kind=excerpt variant=default >}}
