## Preparing your .blend file

#### Checklist

* Golem recognizes if you are using a .blend and automatically assigns your task to the correct software.
If you are rendering heavy tasks on Golem please make sure that you share/provide Golem with RAM (more than 8GB may be needed) to properly verify a task.
* Golem supports official Blender engine - Cycles Render (currently we do not provide support for Eevee) and uses settings from your .blend file.  
* Scene files should be saved in .blend format - version 2.8
* If you are going to use additional assets you should include the main .blend file next to the assets folder. Also make sure that inside the scene all paths are correctly linked and that you use relative paths.
* Please be sure to include all the assets before uploading a task to Golem.
* Ensure that your scene does not have any random objects. You can turn off “random” in your scene or prebake elements if needed before adding them to Golem and attach cache files to the assets folder.
* You should also use prebaking in case of having physical simulation in your scene (like fire, water, complicated glass, Volumetric lighting...) and attach cache files to the assets folder accordingly.
* We do not support compositing directly in this current Golem version.
* If you are using FreeStyle brush modifiers that have randomly distributed values your scene may be rejected on verification.
* Remember that we are here to help you, so if you are not sure about something just ask us on our Rocket Chat at chat.golem.network or by email at contact@golem.network


#### Blender plugins and add-ons

We have tested most popular Blender plugins to check which of them are working well with Golem and which you should avoid. We will examine current issues alongside other Blender plugins trying to provide full support. Below you will find a list of plugins that are supported alongside those who are troublesome. If you would like to see other plugins tested, or you have issues with plugins that you use, please let us know on our Rocket Chat at chat.golem.network or by email at contact@golem.network.

#### Supported plugins

**Gaffer**<br>
Status: supported<br>
Gaffer is a Blender add-on that helps you light your scenes by presenting all the right settings in convenient panels for quick access and experimentation.<br>
[plugin website](https://www.blendermarket.com/products/gaffer-light-manager)

**Pro-Lighting Studio**<br>
Status: supported (Rarely minor issues with light temperature can be observed)<br>
Pro-Lighting Studio is a Blender addon that helps you produce gorgeous results, with dozens of interesting lighting suggestions for your model.<br>
[plugin website](https://www.blendermarket.com/products/pro-lighting-studio)

**Pro-Lighting: Skies**<br>
Status: supported (Rarely minor issues with light temperature can be observed)<br>
Pro-Lighting: Skies contains a collection of 80 HDR skies that were captured by professional photographers around the world. Includes sunny, cloudy, overcast, morning, sunset, nighttime and evening skies.<br>
[plugin website](https://www.blendermarket.com/products/pro-lighting-skies)

**Realistic Nature Asset Pack**<br>
Status: supported (including files as resources are required).<br>
19 different nature models to quickly add realistic nature to any render!<br>
[plugin website](https://www.blendermarket.com/products/realistic-nature-asset-pack)

**The Grass Essentials**<br>
Status: supported<br>
The Grass Essentials is a pack of grass models and particle systems, that you can quickly import to any scene to have beautiful grass.<br>
[plugin website](https://www.blendermarket.com/products/the-grass-essentials)

#### Supported add-ons

**ArchiMesh**<br>
Status: supported <br>
This tool is specially designed to generate architecture elements<br>

**Denoiser**<br>
Status: supported<br>
It fixes issues with noise and light drops. Works as a part of Cycles rendering process and makes it faster.<br>

**Shadow catcher**<br>
Status: supported<br>
It allows you to create transparent objects that receive shadows from other objects.<br>

**Holdout**<br>
Status: supported<br>
The holdout shader creates a “hole” in the image with zero alpha transparency, which is useful for compositing<br>


#### Not supported

**Decal machine**<br>
Status: there are visible differences in output scenes<br>
A set of tools to simplify and automate working with mesh-based decals, which  in turn facilitates quick design thinking, iteration, and exploration<br>
[plugin website](https://www.blendermarket.com/products/DECALmachine)
** **

## Submitting a Task
![installer](/img/usage/add_task.jpg)
####  Three Ways to Add a Task via GUI

1. For individual users, there are two ways to add tasks to the Golem desktop app, via the Add Task button (circle with a “+” sign) on the main toolbar which allows the user to select a file through the system chooser or via drag and drop. Both single files or folders can be added.

2. To add a task via the system chooser, click the Add Task icon, select your file or folder and your task will be added to Golem (after you have filled out the Task Settings).
To add a file via drag and drop, simply drag a file (or multiple files inside a folder, in case of tasks with multiple resources) onto the Task view, and the task will be added.

?> **Note**: On Windows users can add a folder with files using the add task button and single files with drag & drop, On OS X users can add a file and folder in both, On Linux users can add a single file with drag & drop, On Ubuntu users can add a folder with drag & drop and add task button.

3. **You can also create a task via [CLI](/Products/Clay-Beta/Command-line-interface?id=task-create-create-a-task-from-file-note-no-client-side-validation-is-performed-yet-this-will-change-in-the-future) from a `.json` file.**

#### Task Settings
![installer](/img/usage/task_settings.jpg)

Your Task Settings and computing time will vary depending on the complexity of your Blender file, but there are some basic principles to understand and general guidelines to use when submitting a task to the network. Below is a breakdown of all you see on the Task Settings screen.

#### Local Render Test

Before Golem can assign your task to other nodes, your machine must first complete a local render test. Golem prompts your machine to render a single low resolution frame of your file to determine if it is a valid blender file. This is integral to our verification process and must be completed to ensure the accuracy of computations.
You will see a small window with an icon showing the status of your local render test. Once the test is completed, you can finish up the rest of the required settings.

During local render test there might be errors:
* **Requested CPU is not available:** If you are rendering heavy tasks on Golem please make sure that in **Network Tab** you share with Golem enough CPU to properly verify a task.
* **Out of memory:** If you are rendering heavy tasks on Golem please make sure that in **Network Tab** you provide Golem enough RAM (more than 8GB may be needed) to properly verify a task.


#### Render Settings

This section includes all render specific settings:

* **Preset:** A dropdown menu where you can choose from saved settings that fit your workflow. This is great for users who render the same or similar files more often.
* **Resolution:** Standard HD dimensions are 1920 x 1080 but you can set whatever dimensions fit your needs in this section.
* **Frame Range:** Define frames to render. You can separate frame numbers with ;, eg. 1;4;7 will define frame 1, 4 and 7. You can also define frames ranges with -, eg. 1-4 will define frame 1, 2, 3 and 4. Finally, you can also define every x-th frame with ,, eg. 1-10,2 will define frames 1, 3, 5, 7 and 9. So defining frames to render as 1-4;7;10-30,5 will render frames with numbers: 1, 2, 3, 4, 7, 10, 15, 20, 25, 30.
* **Format:** This determines the output format of your render frames. Blender supported formats are PNG and EXR.
* **Output to:** Choose your output file path. This is where your render frames will be saved. This will override your default file location in your App Settings.



?> **Note:** At this point you can save your settings as a preset. If your files use Cycles, there will be an option to set how many Samples you want instead of Frames. This will be implemented in future releases._

#### Task and Subtask Timeouts
![installer](/img/usage/task_settings_bottom.jpg)

Task and Subtask timeouts are the most important settings when submitting a task. So be sure to carefully consider the size and complexity of your blender file when setting timeouts.

* **Task Timeout:** Determines how long you are willing to wait for your task to be computed. This setting should be much higher than your subtask timeout and significantly higher than you expect your render to take. If you render takes 4 hours on your personal machine, then set your Task timeout to 8-10hrs. It is likely that your render will take less time, but you need to be safe since you are paying for the render and you do not want to accidently timeout before the render is completed if your personal connection is slow or if network traffic is low.
* **Subtask Amount:** Tells the system how many subtasks to break a task into. Generally if you are rendering a number of frames you should set subtasks to the same number.
* **Subtask Timeout:** Determines the timeout threshold of every individual subtask. This setting should be significantly lower than your overall task timeout. You can use the following formula to determine a starting point for your subtask timeouts:
    - Overall Task Timeout / Subtask Amount + 1 hr
    - 10hr Overall Task Timeout / 5 subtasks + 1 hr = 3hr subtask timeout

If you set your subtask timeout too high, you can get stuck with a weak node trying to compute your subtask which could lead to network performance issues. If your subtask timeout is too low, then you run the risk of even high powered nodes not finishing your task.

?> **Note:** If your task times out halfway through, you will still pay for subtasks computed. If you are rendering an animation rather than a still image, it is best to have your subtask amount match your frame amount. This means that if a timeout occurs, but some of your subtasks were still computed, you can re-submit the task with the previously completed subtasks removed to avoid rendering them twice (and paying for them twice).

From: **[https://en.wikibooks.org/wiki/Blender_3D](https://en.wikibooks.org/wiki/Blender_3D:_Noob_to_Pro/Basic_Animation/Rendering)**

> Animation rendering can take a while. Consider a short animation sequence of, say 10 seconds at 25 frames per second—250 frames. If a single frame takes 10 seconds to render, then the whole sequence will take about 40 minutes. If a single frame takes a minute, then the whole animation will need over 4 hours to render. And it gets worse the longer the movie is. And so it goes.

This is why Golem exists, to save you time while rendering.
Once your settings are complete you can set your price.

#### File Guidelines

* You cannot submit a file that is IP protected, this includes rendering copyrighted material without the license to do so.
* Pre-Baking must be completed on any files which require it before rendering with Golem
* Using the Particle System to create randomly generated objects (ie. trees, fire, snow) may not work with Golem. You must pre-bake the file and attach the added elements to your task
* If your machine is not powerful enough to create the local test render, you will not be able to submit your task


## Pricing Best Practices

![installer](/img/usage/task_settings_price.jpg)
#### The formula for calculating the estimated cost of a task

?> **Note:** When you start the computation of your task the funds for this particular task will be "Locked" in your wallet (You can check the locked amount in expanded wallet window). During the task computation, you may notice that your GNT balance has increased. It happens because providers' bids for the computation are usually lower than the bid of your task.

>subtask amount x GNT/h x Subtask timeout settings in hourly increments

**Examples:**

* 5 substasks x 0.5 GNT/hr x 30mins Subtask Timeout = 1.25 GNT
    - 5 x 0.5 x (30/60) = 1.25
* 10 subtasks x 1 GNT/hr x 1hr Subtask Timeout = 10 GNT_
    - 10 x 1 x 1 = 10

?>**Note:** If your settings result in a number with long decimal, Golem will round to the nearest 100th.

* 3 substasks x 0.5 GNT/hr x 12mins 30sec Substask Timeout = 0.31 GNT
    - 3 x 0.5 x (12.5/60) = 0.3125 rounded down to 0.31
* 5 subtasks x 0.5 GNT/hr x 15mins 30sec Subtask Timeout = 0.65 GNT
    - 5 x 0.5 GNT/hr x (15.5/60) = 0.645833333~ rounded up to 0.65


Since price is directly tied to your subtask timeouts, it is important to test your typical workflow a few times in our beta app to determine the best settings for the lowest price.


## Task computations

#### Tasks on GPU vs CPU
Every scene is prepared for a different use case. This issue may be caused by your scene tile size settings. Optimal tile resolution for GPU is 512x512.
The maximum amount of individual textures is limited to 88 byte-image textures (PNG, JPEG, ..) and 5 float-image textures (OpenEXR, 16 bit TIFF, ..) on GTX 4xx/5xx cards. Newer cards do not have this limitation.

#### Rendering hefty scenes on GPU

Usually, GPU rendering is much faster than CPU rendering, but there are use cases where GPU lacks in memory. Note that, for example, 8k, 4k, 2k and 1k image textures take up respectively 256MB, 64MB, 16MB and 4MB of memory. If you have noticed any issues with GPU rendering please let us know on our #blendersupport chat channel or send an email to contact@golemproject.net including your scene specifications and task settings.

#### Your task is stuck
- Make sure you have the latest versions of both Golem and Blender installed
- Check if you can see your node on [Golem statistics page](https://stats.golem.network/show) *If you have checked that you want to send your statistics to monitor during first start of the app*
- Test for open ports 3282, 40102 and 40103 with an external tool like [Canyouseeme](https://canyouseeme.org) (app must be running)
- Adjust your Network Trust settings to accept more incoming nodes
- Check your task settings to see if you set high enough task and subtask timeouts, if not, retest with higher timeout thresholds
- Test a smaller blender file to see if it renders: [Golem Logo Demo](https://golem.timjones.id.au/)
- Check for errors in your logs found here
- If you still cannot render a task send the following to contact@golem.network:
  - A screenshot or description of your task settings and network trust settings
  - Your Golem.log and Hyperg.log files
  - The name and size of the blender file you were attempting to render
