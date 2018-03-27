## About LuxRender
From LuxRender [website](http://www.luxrender.net/):

> LuxRender is a physically based and unbiased rendering engine. Based on state of the art algorithms, LuxRender simulates the flow of light according to physical equations, thus producing realistic images of photographic quality.

Golem allows users to compute their .lux scenes using LuxRender standalone.

## Splitting into subtasks

A LuxRender task in Golem works differently than other renderers. Instead of rendering part of the image, the whole image is rendered but with a lower quality. Users may define subtask quality by specifying the number of samples per pixel or defining how long rendering should take.

## Collecting results

LuxRender standalone produces files in .flm format, and render results are saved as such. Rendering from an .flm file can be continued. .Flm files can also be merged into one .flm with higher quality. In Golem, received .flm files are merged into one .flm file which is used to generate final image. Rendering is indeterministic so the numbers of samples per pixel in subtasks adds up to the final number of samples per pixel in the final image.

## Verification

It's difficult to verify images from Luxrender because of their non-determinism.
To validate the results, one has to calculate a metric against a reference image. 
No matter which metric we use, there will always be some mismatch because of non-determinism.
To overcome this issue, the requestor's machine renders two sample images and calculates the metric between them. 
Since the result depends on image resolution and quality (sampling rate), we have to formulate a self-adjustable validation mechanism:

```python

    if Metric(sample1, providers_results) < relaxation_coeff * Metric(sample1, sample2)
       validation success
    else 
       validation false

```

## Task specific options 

* Main scene file: click "..." button on the right to choose .lxs file. If the scene is using external resources, textures, etc. you should add them using the "Add" button. Make sure that in your scene you're using only relative paths, otherwise your task won't compute properly. If there is an .flm file with the proper resolution in additional resources then rendering will be continued from the state saved in this file. 

* Subtask stop condition: halt time means that each subtask will be stopped after a specific number of seconds. Halt spp means that each subtask will be stopped after generating a specific number of samples per pixel. States from subtasks will be added, so if you want to generate an image with 2000 samples per pixel, you may split your task into 100 subtasks with a halt spp equal to 20 or into 20 subtasks with a halt spp equal to 100. 
