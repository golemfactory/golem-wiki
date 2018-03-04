## About Blender

From Blender [website](https://www.blender.org/):

> Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation. 

Golem is supporting rendering images and frames from .blend files using Blender. 

## Splitting into subtask

1) If there is only one image to render.
We're using a "crop to window" mechanism to define only a part of a picture that should be rendered in this subtask.  

2) If there are as many frames as total tasks

Each frame is a different subtask. 

3) If there are more frames than total tasks

Each subtask contains a few frames.

4) If there are less frames than total tasks

Each subtask contains a part of one frame ("crop to window" is used). 

## Collecting results

After receiving all parts of rendered images, the requestor's node brings them together and creates the final image / frames. Frames are saved in the "output file" directory and are named like the output file with the added frame numbers, ie. if user defines the output file to be 
`/home/golem/img/my_img.EXR` than the first frame will be saved in `/home/golem/img/my_img0001.EXR`, fourth in `/home/golem/img/my_img0004.EXR`, etc.


## Verification

User may choose simple verification, then the correctness of the computation is not checked (only image size and type is checked). Alternatively she may choose advanced verification, then a random, small part of the image is rendered locally and compared with the received result. This method is more secure but also slower. 

## Task specific options guide

* Main scene file: click "..." button on the right to choose .blend file. If a scene is using external resources, textures, etc. and they are not built into .blend file then you should add them using the "Add" button. Make sure that your scene is using only [relative paths](https://docs.blender.org/manual/en/dev/data_system/files/relative_paths.html), otherwise your task won't compute properly. 

* Frames: if checkbox is not checked than only the first frame will be rendered. If you want to render a specific frame or set of frames, check checkbox and write the numbers of frames that should be rendered. You may use short notation, eg.: "1-4, 10-20;2" will render frames 1, 2, 3, 4, 10, 12, 14, 16, 18, 20. 