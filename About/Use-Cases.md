
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

## Wasm

The WebAssembly task is capable of running arbitrary code compiled to
WebAssembly with Emscripten backend on Golem. Under the hood, the task uses
the [WebAssembly Sandbox](https://github.com/golemfactory/sp-wasm).

#### Task preparation
The following section describes steps necessary to prepare and create a Wasm
task on Golem.

#### Program compilation
First, you have to compile the code you want to run to WebAssembly using Emscripteny+JavaScript
backend. The instructions on how to do that can be found
[here](https://github.com/golemfactory/sp-wasm).

#### Subtask division
The task is manually divided into subtasks. Each subtask runs the same program,
but gets (possibly) different input and execution arguments,
and produces (possibly) different output.

#### Input/output
The compiled programs have to read their input from files and write their
output to files.

A directory has to be created for the program and its input. The JavaScript and WebAssembly
files produced by *Emscripten* have to be placed directly inside this directory. Then, 
for each subtask, a subdirectory named the same as the subtask has to be created inside the
input directory. Everything the program has to access for a particular subtask has
to be placed inside its input subdirectory.

Another directory has to be created for program output. The output files specified
in `output_file_paths` for each subtask will be copied to a subdirectory named the
same as the subtask inside the output directory.

The final (example) directory structure should look like this:

```bash
.
|-- input_dir
|   |-- program.js
|   |-- program.wasm
|   |-- subtask1
|   |   |-- input_file_1_1
|   |   `-- input_file_1_2
|   `-- subtask2
|       |-- input_file_2_1
|       `-- input_file_2_2
`-- output_dir
    |-- subtask1
    |   |-- output_file_1_1
    |   `-- output_file_1_2
    `-- subtask2
        |-- output_file_2_1
        `-- output_file_2_2
```

#### Task JSON

To create the task, its JSON definition has to be created. The non-task-specific
fields that **have** to be present are:

* `type`: has to be `wasm`
* `name`
* `bid`
* `timeout`
* `subtask_timeout`
* `options`: defined below

#### Task options
The following options have to be specified for the WebAssembly task:

* `js_name`: The name of the JavaScript file produced by *Emscripten*. The file
should be inside the input directory (specified below).
* `wasm_name`: The name of the WebAssembly file produced by *Emscripten*. The 
file should be inside the input directory (specified below).
* `input_dir`: The path to the input directory containing the JavaScript and
WebAssembly program files and the input subdirectories for each subtask. For each
subtask, its input subdirectory will be mapped to `/` (which is also the *CWD*) inside
the program's virtual filesystem.
* `output_dir`: The path to the output directory where for each subtask, the output
files specified in `output_file_paths` will be copied to a subdirectory named the 
same as the subtask.
* `subtasks`: A dictionary containing the options for each subtask. The keys should
be the subtask names, the values should be dictionaries with fields specified below:
  * `exec_args`: The execution arguments that will be passed to the program for this
  subtask.
  * `output_file_paths`: The paths to the files the program is expected to produce
  for this subtask. Each file specified here will be copied from the program's
  virtual filesystem to the output subdirectory for this subtask. If any of the
  files are missing, the subtask will fail.
  
#### Example
An example WASM task JSON:
```json
{
    "type": "wasm", 
    "name": "wasm", 
    "bid":  1,
    "subtask_timeout": "00:10:00",
    "timeout": "00:10:00",
    "options": {
        "js_name": "test.js",
        "wasm_name": "test.wasm",
        "input_dir": "/home/user/test_in",
        "output_dir": "/home/user/test_out",
        "subtasks": {
            "subtask1": {
                "exec_args": ["arg1", "arg2"],
                "output_file_paths": ["out.txt"]
            },
            "subtask2": {
                "exec_args": ["arg3", "arg4"],
                "output_file_paths": ["out.txt"]
            }
        }
    }
}
```

#### Creating the task
To create the task, run the following:

```bash
golemcli tasks create path/to/the/task_definition.json
```

#### Wasm store
In order to simplify the on-boarding process for Wasm in Golem, we have prepared a special repo on Github which
contains a curated list of precompiled Wasm binaries that are known to run fine in Golem. The repo can be accessed [here](https://github.com/golemfactory/wasm-store).
