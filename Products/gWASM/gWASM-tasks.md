# Creating gWASM tasks in Golem

If you want to run your WASM application (.wasm file and .js file), you can create tasks connecting directly to your Golem node. No additional client, like g-flite, is required. This is pretty straightforward.

> Again, be sure that you are not violating any licenses or property rights: you take legal responsibility for your actions. It is absolutely fine if you use open source software or your own code.


### Task preparation

The following section describes steps necessary to prepare and create a gWASM task on Golem.


### Program compilation

First, you have to compile the code you want to run to WebAssembly using **Emscripten+JavaScript** backend. The instructions on how to do that can be found [here](Products/gWASM/Building-gWASM-applications?id=how-to-compile-gwasm-application).


### Subtask division

The task is manually divided into subtasks. Each subtask runs the same program, but gets (possibly) different input and execution arguments, and produces (possibly) different output.


### Input/output

The compiled programs have to read their input from files and write their output to files.

A directory has to be created for the program and its input. The JavaScript and WebAssembly files produced by *Emscripten* have to be placed directly inside this directory. Then, for each subtask, a subdirectory named the same as the subtask has to be created inside the input directory. Everything the program has to access for a particular subtask has to be placed inside its input subdirectory.

Another directory has to be created for program output. The output files specified in `output_file_paths` for each subtask will be copied to a subdirectory named the same as the subtask inside the output directory.

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


### Task JSON

To create the task, its JSON definition has to be created. The non-task-specific fields that **have** to be present are:

* `type` is always `wasm`.
* `name` is arbitrary.
* `bid` is the price in GNT per hour for computation. It is a maximal possible price that you are willing to pay the provider. The actual price may be less than your bid as, because of the marketplace mechanism implemented in Golem, providers compete against each other which results in lower prices.  In testnet the value is irrelevant.
With gWASM, we have implemented verification by redundancy. This means that each subtask will be sent to two different providers and their computation results will be compared. This implies that you will pay for twice as many subtasks as you specified in the task definition. You can read more about this on our [blog post](https://blog.golemproject.net/gwasm-verification/).
* `subtask_timeout` is arbitrary and does not affect payment value in gWASM. It should be reasonable long.
* `timeout` is a task timeout. It should be at least two times `subtask_timeout`.


### Task options

The following options have to be specified for the WebAssembly task:

* `js_name`: The name of the JavaScript file produced by *Emscripten*. The file should be inside the input directory (specified below) `input_dir`.

* `wasm_name`: The name of the WebAssembly file produced by *Emscripten*. The file should be inside the input directory (specified below) `input_dir`.

* `input_dir`: The path to the input directory containing the JavaScript and WebAssembly program files and the input subdirectories for each subtask. For each
subtask, its input subdirectory will be mapped to `/` (which is also the *CWD*) inside the program's virtual filesystem. The subtasks files are to be open in read-only mode.

* `output_dir`: The path to the output directory where for each subtask, the output files specified in `output_file_paths` will be copied to a subdirectory named the
same as the subtask. It is an existing directory. Can be empty. If it is not empty, then the files are overridden.

* `subtasks`: A dictionary containing the options for each subtask. The number of elements reflects the number of subtasks. The keys should be the subtask names, the values should be dictionaries with fields specified below:

  * `subtask1` - names of subtasks are arbitrary.

    * `exec_args`: The execution arguments that will be passed to the program for this subtask.

    * `output_file_paths`: The paths to the files the program is expected to produce for this subtask. Each file specified here will be copied from the program's virtual filesystem to the output subdirectory for this subtask. If any of the files are missing, the subtask will fail.


### Example

Create a task from file, this is a json WASM example file:

```json
{
    "type": "wasm",
    "name": "test",
    "bid":  1,
    "subtask_timeout": "00:10:00",
    "timeout": "00:10:00",
    "options": {
        "js_name": "test.js",
        "wasm_name": "test.wasm",
        "input_dir": "/home/user/test_in",
        "output_dir": "/home/user/test_out",
        "__comment":"there are two subtasks, but there will be four jobs for the verification purpose (VbR)",
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

### Creating the task

To create the task, run the following:

```bash
golemcli tasks create path/to/the/task_definition.json
```

---


### How to send gWASM task

1. Open terminal and check if your Golem node is up (It is required to have it running in the background).

```bash
golemcli
```

If the command is not recognized, then please check your Golem installation and system settings. See [this](https://docs.golem.network/#/Products/Clay-Beta/Installation) documentation for installation and settings instructions and [this](https://docs.golem.network/#/Products/Clay-Beta/Command-line-interface) for CLI instructions.

If your Golem working directory is not default, then you need to point `datadir` as follows.

```bash
golemcli --datadir=/path/to/your/datadir
```

2. Test if you are connected to testnet, not mainnet. Run the command.

```bash
golemcli debug rpc golem.mainnet
```

The answer should be `False`.

3. Download the directory `https://github.com/golemfactory/wasm-store/tree/master/hello`. The easiest way is to download the [zipped repository](https://github.com/golemfactory/wasm-store/archive/lglen/sha1solver.zip) or clone the repository  with `git`

```bash
git clone https://github.com/golemfactory/wasm-store.git
```

Then enter `hello` directory.

4. Edit `task.json` file and update it.

```json
        "input_dir": "/your/path/to/input/dir",
        "output_dir": "/your/path/to/output/dir",
```

5. Send task to Golem.

```bash
golemcli tasks create task.json
```

6. You can track the task progress by executing the following command.

```bash
golemcli tasks show
```

7. When it is done, check the result - the `out.txt` file.

```bash
cat out/subtask1/out.txt
```

The content should be

```bash
hello world!
```

---


### How to run your own gWASM task

You can run task from source or already cross-compiled to WASM. If you have run task already cross-compiled to WASM, make sure the compilation followed [guidelines](Products/gWASM/Building-gWASM-applications?id=how-to-cross-compile-c-program-step-by-step). Use cases in [gWASM-store](https://github.com/golemfactory/wasm-store) are eligible. In that case skip the point 2  (Emscripten SDK requirement and cross-compilation)

1. Create your working directory and enter it.

2. Follow the instructions in [How to cross-compile C program](Products/gWASM/Building-gWASM-applications?id=cc).

3. Create `in` directory.

```bash
mkdir in
```

Copy binaries to `in` directory

```bash
cp hello.js in/
cp hello.wasm in/
```

Create output directory also.

```bash
mkdir out
```
Leave it empty.

4. Create subtask's input directory

```bash
mkdir in/subtask1
```

The `hello` sample program does not use files so leave the directory empty. In case you want more subtasks, create more directories, but do not forget to add them to `task.json`.

5. Open terminal and check if your Golem node is up.

```bash
golemcli
```

If the command is not recognized, then please check your Golem installation and system settings. See [this](https://docs.golem.network/#/Products/Clay-Beta/Installation) documentation for installation and settings instructions and [this](https://docs.golem.network/#/Products/Clay-Beta/Command-line-interface) for CLI instructions.

If your Golem working directory is not default, then you need to point `datadir` as follows.

```bash
golemcli --datadir=/path/to/your/datadir
```

6. Test if you are connected to testnet, not mainnet. Run the command.

```bash
golemcli debug rpc golem.mainnet
```
The answer should be `False`.

7. Create the file `task.json`.

```json
{
    "type": "wasm",
    "name": "hello",
    "bid":  "1",
    "subtask_timeout": "00:10:00",
    "timeout": "00:10:00",
    "options": {
        "js_name": "hello.js",
        "wasm_name": "hello.wasm",
        "input_dir": "/path/to/your/working/directory/hello/in",
        "output_dir": "/path/to/your/working/directory/hello/out",
        "__comment":"there is one subtask, but there will be two jobs for the verification purpose (VbR)",
        "subtasks": {
            "subtask1": {
                "exec_args": ["world"],
                "output_file_paths": ["out.txt"]
            }
        }
    }
}
```

Make sure that you updated fields `input_dir` and `output_dir`.

8. Send the task Golem.

```bash
golemcli tasks create task.json
```

If you specified the datadir, add it to the command

```bash
golemcli tasks create task.json --datadir=/path/to/your/datadir
```

9. You can track the task progress by executing the following command.

```bash
golemcli tasks show
```

10. When it is done, check the result - the `out.txt` file.

```bash
cat out/subtask1/out.txt
```

The content should be

```bash
hello world!
```
