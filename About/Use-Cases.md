
# Use cases

The first and most illustrative use case of Golem is CGI rendering. Other technically similar use cases to implement are scientific, engineering, statistical and financial tasks which need extensive computing and are (technically) feasible to distribute. Check our [blog post](https://blog.golemproject.net/choose-your-own-golem/) to learn more about potential uses. 
Golem Factory will not explore and develop all possible use cases, but focus on delivering a task API, Golem Standard Library for developers to integrate any software with the Golem Network. Many use cases will need proprietary software, either existing or designed specially for Golem. To facilitate the use of both open and proprietary software, we will introduce the Application Registry to enable any requestor to use Golem-ready software. If the software is proprietary, then the requestor will be able to use it in a software-as-a-service model. This way Golem will act not only as a market for computing power, but also as a distribution channel for software creators.

---

#### Use Case Pipeline

##### Benefits
Golem is on the forefront distributed computing technology development and has been making groundbreaking strides in network security, P2P networking, blockchain and decentralized marketplace mechanisms. Golem provides software providers with more than access to computing resources and a built-in audience. We strongly encourage other developers to team up with us and work together on integrating various software solutions with Golem. For the most promising use-case proposals, our team is poised to jumpstart a cooperation through:

> A comprehensive review of your project’s potential to integrate with Golem
> Technical cooperation on the integration with Golem
> Technical cooperation on the integration with Golem assistance in setting up a plan to monetize your software using Golem, including licensing models financial support and mentorship for projects in initial phases
> Larger financial contributions for the later stages of cooperation 
> Joint marketing activities for those integrations launched into production

##### Requirements
While there is great flexibility in how you can choose to develop your ideas with Golem, the best use-cases generally meet the following guidelines:

**MUST HAVES**
- Ability to run vast parts of a computing task in parallel without the need to often synchronize results.
- Small or moderate size (below 1 GB, preferably below 300 MB) of inputs & outputs, so computation takes significantly more time than sending data. Outputs tend to be the most computationally expensive.

**NICE-TO-HAVE**
- Non-sensitive Deterministic result of computations or a simple algorithm to verify whether the result of computations is correct.
- A working product with an established userbase.

If you are not sure whether or not your idea would be a good fit for Golem, reach out to us and tell us more about what you plan to achieve. We are always excited to discuss new ideas with our users and potential partners.

The Golem Project is open source and was founded on a culture of collaboration and the free exchange of ideas. Reach out to contact@golem.network.

---

## Blender

From Blender [website](https://www.blender.org/):

> Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation. 

Golem supports images and frames rendering from .blend files using Blender. 

#### Splitting into subtask

1) If there is only one image to render.
We're using a "crop to window" mechanism to define only a part of a picture that should be rendered in this subtask.  

2) If there are as many frames as total tasks

Each frame is a different subtask. 

3) If there are more frames than total tasks

Each subtask contains a few frames.

4) If there are less frames than total tasks

Each subtask contains a part of one frame ("crop to window" is used). 

#### Collecting results

After receiving all parts of rendered images, the requestor's node brings them together and creates the final image / frames. Frames are saved in the "output file" directory and are named like the output file with the added frame numbers, ie. if user defines the output file to be 
`/home/golem/img/my_img.EXR` than the first frame will be saved in `/home/golem/img/my_img0001.EXR`, fourth in `/home/golem/img/my_img0004.EXR`, etc.


#### Verification

The user may choose simple verification, however the correctness of the computation will not be checked (only image size and type is checked). Alternatively they may choose advanced verification, then a random, small part of the image is rendered locally and compared with the received result. This method is more secure but also slower.

#### Task specific options guide

* Main scene file: click "..." button on the right to choose .blend file. If a scene is using external resources, textures, etc. and they are not built into .blend file then you should add them using the "Add" button. Make sure that your scene is using only [relative paths](https://docs.blender.org/manual/en/dev/data_system/files/relative_paths.html), otherwise your task won't compute properly. 

* Frames: if checkbox is not checked than only the first frame will be rendered. If you want to render a specific frame or set of frames, check checkbox and write the numbers of frames that should be rendered. You may use short notation, eg.: "1-4; 10-20,2" will render frames 1, 2, 3, 4, 10, 12, 14, 16, 18, 20. 

---

## gWASM

In 0.21.0 [Brass Beta](Products/Brass-Beta/Installation) release we provided Golem-WASM integration available on mainnet, called [**gWASM**](Products/Brass-Beta/gWASM).

?> It is possible to compile many applications as WebAssembly binaries and run them in a secure and portable manner. To read more on WebAssembly, you can start with [this](https://webassembly.org/), however, note that there are many fantastic sources for beginners on the internet also.

In our [**gWASM**](Products/Brass-Beta/gWASM) integration, your data and **WASM** binary is transferred to the remote machine and executed. The target machine is secured by the in-sandbox execution. The binary is portable and compatible with various OS and environments since it is executed by a runtime engine rather than natively. The solution is designed to run large number of computations in parallel in order to profit from Golem Network capabilities.

#### Disclaimer
This is still a work in progress. The codebase and functionality may change frequently. We do our best to keep the documentation up to date and keep you informed. Please report back to us any issues that you may encounter. 

#### Support
We are also open and look forward to your suggestions and experience to make our software better. You can message us on [gWASM channel](https://chat.golem.network/channel/gwasm) on our chat or write us an email to contact@golem.network entitled gWASM.

The WebAssembly task is capable of running arbitrary code compiled to
WebAssembly with Emscripten backend on Golem. Under the hood, the task uses
the [WebAssembly Sandbox](https://github.com/golemfactory/sp-wasm).

#### Usage 

There are two ways to use gWASM.
* If you wrote your own algorithm, have custom computation or do tests, then you can create gWASM task yourself and send it directly to **Golem Network**. 
* You can create an applicatin with gWASM backend as computation engine. You need to provide a client that serves as user interface and is responsible for creating gWASM tasks and managing them. End users of the application are not burden with technical details as your application seamlessly integrates with gWASM. The same way it is possible to integrate existing application with gWASM.

To read more about how to send **gWASM** task or how to integrate apps with **gWASM** head over [**here**](Products/Brass-Beta/gWASM)
