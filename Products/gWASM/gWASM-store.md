# gWASM-store

?> First of all, we provided a catalog of ready to use gWASM applications (like [gflite](Products/gWASM/Sample-application)). If you feel that your application is worth to be shared, you can contribute to that also. The goal for this catalog is to kick off the adoption and help new users to get familiar with it fast. All apps are self contained but requires to run Golem node locally. Please see the description to the specific application to know how to use it.

**gWASM-store is a curated list of precompiled Wasm binaries of programs that are known to successfully work with [Wasm sandbox](https://github.com/golemfactory/sp-wasm) in [Golem](https://github.com/golemfactory/golem).**

The list includes applications located directly in [this repo](https://github.com/golemfactory/wasm-store), as well as links that point to external sources.

The applications can either be in a raw, Wasm format, or (preferably) they can be augmented with a GUI/CLI for the user's convenience.
Using raw Wasm binaries implies that the user has to be able to prepare the corresponding `task.json` and the required folder structure themselves, and be able to directly connect with their Golem client (e.g., via the use of the [Golem CLI](Products/Clay-Beta/Command-line-interface)). Therefore, as such, this approach requires some technical knowledge of the Golem's internals.
See [here](Products/gWASM/gWASM-tasks) to learn how to launch a Wasm task in Golem.

The applications augmented with a GUI/CLI are naturally more user friendly, because they handle communication with Golem node. Having said that, there currently is no generic way of preparing such a GUI/CLI. There are some examples however. See the [g-flite](Products/gWASM/Sample-application) app for instance.

The list of applications with GUI/CLI:

* [g-flite](https://github.com/golemfactory/g-flite) - text-to-speech

The list of raw applications:
* [7-zip](https://github.com/golemfactory/wasm-store/tree/master/7-zip) - 7-zip archiver
* [dcraw](https://github.com/golemfactory/wasm-store/tree/master/dcraw) - raw image to tiff/ppm
* [flite](https://github.com/golemfactory/wasm-store/tree/master/flite) - text-to-speech
* [Minimal Hamiltonian Path](https://github.com/golemfactory/wasm-store/tree/master/MinimalHamiltonianPath) - searches for minimal Hamiltonian path in weighted directed graphs


### Cloning the repo

When cloning the repo, remember to set up [git-lfs](https://git-lfs.github.com) for this repo on your machine. Usually, this can be accomplished as follows:

```bash
git clone https://github.com/golemfactory/wasm-store
cd wasm-store
git lfs install
git lfs pull
```


### Contributing

We welcome contributions in the form of links to precompiled Wasm binaries of other programs. If you would like to submit such a link, do not hesitate to open a new PR. Your repo should contain **README** file and license. If it is a raw Wasm binary, it should follow the guidelines below.

For apps augmented with GUI/CLI, the requirements are more relaxed and not set in stone, with the only must-have: good user experience.


### Directories structure

When contributing an application in a raw Wasm format, please make sure that the submitted link adheres to the structure expected by Wasm task in Golem. That is, we're looking for dir structure similar to the following

```bash
.
|-- task.json
|-- README.md
|-- LICENSE
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

where the `task.json` would consist of

```json
{
    "type": "wasm",
    "name": "program",
    "bid":  1,
    "subtask_timeout": "00:10:00",
    "timeout": "00:10:00",
    "options": {
        "js_name": "program.js",
        "wasm_name": "program.wasm",
        "input_dir": "<abs_path_to_the_repo>/input_dir",
        "output_dir": "<abs_path_to_the_repo>/output_dir",
        "__comment":"there are two subtasks, but there will be four jobs for the verification purpose (VbR)",
        "subtasks": {
            "subtask1": {
                "exec_args": ["arg1_1", "arg1_2"],
                "output_file_paths": ["output_file_1_1", "output_file_1_2"]
            },
            "subtask2": {
                "exec_args": ["arg2_1", "arg2_2"],
                "output_file_paths": ["output_file_2_1", "output_file_2_2"]
            }
        }
    }
}
```
For an example, see how [7-zip](https://github.com/golemfactory/wasm-store/tree/master/7-zip) is set up in [this repo](https://github.com/golemfactory/wasm-store).

Of course, if anything is unclear or you find some inconsistencies, please do submit a new issue and we'll make sure it's sorted asap.

---

### How to use gWASM-store

1. Visit the github page with [gWASM-store](https://github.com/golemfactory/wasm-store).

2. The easiest way is to download the [zipped repository](https://github.com/golemfactory/wasm-store/archive/lglen/sha1solver.zip) or clone the repository  with `git`

```
git clone https://github.com/golemfactory/wasm-store.git
```

3. Open terminal and check if your Golem node is up.

```bash
golemcli
```

If the command is not recognized, then please check your Golem installation and system settings. See [this](https://docs.golem.network/#/Products/Clay-Beta/Installation) documentation for installation and settings instructions and [this](https://docs.golem.network/#/Products/Clay-Beta/Command-line-interface) for CLI instructions.

If your Golem working directory is not default, then you need to point `datadir` as follows.

```bash
golemcli --datadir=/path/to/your/datadir
```

4. Test if you are connected to testnet, not mainnet. Run the command.

```bash
golemcli debug rpc golem.mainnet
```

The answer should be `False`.

5. Choose the use case. For instance `hello`. Follow the instructions in the appriopriate `README` file in the use case directory. Prepare `in` directory and `task.json` file and run the task in Golem.

##### Remark

[gWASM-store](https://github.com/golemfactory/wasm-store) contains use cases located in this repository and links to other use cases. If you want to run [g-flite](https://github.com/golemfactory/g-flite) see the section [How to run g-flite](https://docs.golem.network/#/Products/gWASM/Sample-application?id=how-to-run-g-flite). If you want to follow the link to external repository, it is no need to download gWASM-store repository as stated in the point 2, rather the external repository.
