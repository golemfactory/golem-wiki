# gWASM

?> Any code that can be compiled to WASM, can be distributed on Golem Network. gWASM allows you to run WebAssembly  binaries on providers’ machines by turning WASM into a container for server-side parallel computations.

There are two flows in which one can interact with gWASM:

##### 1. Decentralized backend for your apps

With gWASM, it is easy to create a decentralized application supported by the gWASM backend. You can also integrate existing applications and services by moving computationally expensive parts to the Golem platform.
If you want to give it a try check [how to compile gWASM application](Products/Brass-Beta/gWASM?id=how-to-compile-gwasm-application) and take a look our [sample application - g-flite](Products/Brass-Beta/gWASM?id=sample-application-g-flite) as a reference of your own app.

##### 2. Run your code in a decentralized network

gWASM is an easy-to-use platform for distributed and parallel computations. Convert your code to a WebAssembly binary and execute it in a decentralized manner - within the Golem Network. If you want to give it a try, learn how to [Create gWASM tasks in Golem](Products/Brass-Beta/gWASM?id=creating-gwasm-tasks-in-golem)


?> In our gWASM integration, your data and WASM binary is transferred to the remote machine and executed. The target machine is secured by the in-sandbox execution. The binary is portable and compatible with various OS and environments since it is executed by a runtime engine rather than natively. The solution is designed to run large number of computations in parallel in order to profit from Golem Network capabilities.

---

#### Quick links

?> Before you start building gWASM apps please download and install [Brass Golem](https://docs.golem.network/#/Products/Brass-Beta/Installation) as it is required to run in the background during gWASM computations

* [Quick start - testing gWASM locally](Products/Brass-Beta/gWASM?id=quick-start-testing-gwasm-locally)
* Learn [how to build gWASM application](Products/Brass-Beta/gWASM?id=building-gwasm-applications)
* [gwasm-runner](Products/Brass-Beta/gWASM?id=gwasm-runner) is a project with a single goal: making developing new gWASM apps as simple as possible
* Learn how to [Create gWASM tasks in Golem](Products/Brass-Beta/gWASM?id=creating-gwasm-tasks-in-golem)
* Check our [sample application - g-flite](Products/Brass-Beta/gWASM?id=sample-application-g-flite) as a reference of your own app
* And learn [how to run g-flite](Products/Brass-Beta/gWASM?id=how-to-run-g-flite) - the simplest way to play around with gWASM if you are not a developer

---

#### Feedback

If you would like to share your thoughts about **gWASM** please fill out this **[short survey](https://forms.gle/7Kury1nuLNe3Wf656)**. It will help us make your experience better. 

---

### Quick start - testing gWASM locally

In this quick tutorial you will

* Install latest release of Golem
* Run two nodes on the same machine (one being a Requestor, and second one being Provider) 
* Run simple `hello world` task

---

#### 1. Install Golem 

[Follow installation instructions](/Products/Brass-Beta/Installation.md). Remember that it is required to run in the background during gWASM computations.

#### 2. Create a subnet of nodes

Open up your terminal or command line and follow the steps below:

##### 2a. run `node_A` (a Requestor) with:

```bash
golemapp --password=your_password --accept-terms --datadir=/path/to/datadir1 --rpc-address=localhost:61001 --protocol_id=102938
```
?> On MacOs your `--datadir` should be created in `$HOME/Library/Application\ Support/datadir1`

##### 2b. Add two more args when starting `node_B` (a Provider):

```bash
 golemapp --password=your_password --accept-terms --datadir=/path/to/datadir2 --rpc-address=localhost:61002 --peer=localhost:40102 --protocol_id=102938
```

?> On MacOs your `--datadir` should be created in `$HOME/Library/Application\ Support/datadir2`

first to choose new RPC port for `node_B` (default is `61000`), and second to create separate data directory for it. Obviously we can supply `127.0.0.1` as `node_A` ip address then.

If you wish to add a third node, lets say another Provider you should then:

```bash
golemapp --password=your_password --accept-terms --datadir=/path/to/datadir3 --rpc-address=localhost:61003 --peer=localhost:40102 --protocol_id=102938
```

##### 2c. Check if nodes are running properly

You should observe in logs on `node_A`:

```bash
INFO     [golemapp                           ] Protocol Version: 12345-testnet
...
INFO     [golem.client                       ] Golem is listening on ports: P2P=40102, Task=40103, Hyperdrive=3282
```


When launching `node_B`, the ports `40102`, `40103` are already used by `node_A`, thus `node_B` will take next ones:

```bash
INFO     [golemapp                           ] Protocol Version: 12345-testnet
...
INFO     [golem.client                       ] Golem is listening on ports: P2P=40104, Task=40105, Hyperdrive=3282
```

Thus, it is important to launch nodes in order: `node_A` then `node_B` - according to the config file.

You can check if nodes are connected by executing:

?> Running `golemcli` should include additional `—port 61001 -I -d $HOME/Library/Application\ Support/datadir1`

`golemcli network show` 

on `node_A`. This should print out:

```bash
ip           port  id                                   name           version
---------  ------  -----------------------------------  -------------  ----------------------
127.0.0.1   52112  55097f28ee2d7c55...36a1cd03594aeb2f  node_B         0.17.0
```

##### 3. Run gWASM task

Download the directory `https://github.com/golemfactory/wasm-store/tree/master/hello`. The easiest way is to download the [zipped repository](https://github.com/golemfactory/wasm-store/archive/lglen/sha1solver.zip) or clone the repository  with `git`

```bash
git clone https://github.com/golemfactory/wasm-store.git
```

Then enter `hello` directory.

4. Edit `task.json` file and update it.

```json
        "input_dir": "/your/path/to/input/dir",
        "output_dir": "/your/path/to/output/dir",
```

5. Send task to one of your Golem nodes.

```bash
golemcli tasks create task.json
```

If you specified the datadir, add it to the command

```bash
golemcli tasks create task.json --datadir=/path/to/your/datadir
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


### Creating gWASM tasks in Golem

If you want to run your WASM application (.wasm file and .js file), you can create tasks connecting directly to your Golem node. No additional client, like g-flite, is required. This is pretty straightforward. 

> Again, be sure that you are not violating any licenses or property rights: you take legal responsibility for your actions. It is absolutely fine if you use open source software or your own code.


#### Task preparation

The following section describes steps necessary to prepare and create a gWASM task on Golem.


#### Program compilation

First, you have to compile the code you want to run to WebAssembly using **Emscripten+JavaScript** backend. The instructions on how to do that can be found [here](Products/Brass-Beta/gWASM?id=_1-create-and-cross-compile-simple-program).


#### Subtask division

The task is manually divided into subtasks. Each subtask runs the same program, but gets (possibly) different input and execution arguments, and produces (possibly) different output.


#### Input/output

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


#### Task JSON

To create the task, its JSON definition has to be created. The non-task-specific fields that **have** to be present are:

* `type` is always `wasm`.
* `name` is arbitrary.
* `bid` is price in GNT per hour for computation. It is maximal possible price and actual price is usually less than this. You pay only for the computation time - as we apply usage market for gWASM. In testnet the value is irrelevant.
* `subtask_timeout` is arbitrary and does not affect payment value in gWASM. It should be reasonable long.
* `timeout` is a task timeout. It should be at least two times `subtask_timeout`.


#### Task options

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
  

#### Example

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

#### Creating the task

To create the task, run the following:

```bash
golemcli tasks create path/to/the/task_definition.json
```

---


#### How to send gWASM task

1. Open terminal and check if your Golem node is up (It is required to have it running in the background).

```bash
golemcli
```

If the command is not recognized, then please check your Golem installation and system settings. See [this](https://docs.golem.network/#/Products/Brass-Beta/Installation) documentation for installation and settings instructions and [this](https://docs.golem.network/#/Products/Brass-Beta/Command-line-interface) for CLI instructions.

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


#### How to run your own gWASM task

You can run task from source or already cross-compiled to WASM. If you have run task already cross-compiled to WASM, make sure the compilation followed [guidelines](Products/Brass-Beta/gWASM?id=how-to-cross-compile-c-program-step-by-step). Use cases in [gWASM-store](https://github.com/golemfactory/wasm-store) are eligible. In that case skip the point 2  (Emscripten SDK requirement and cross-compilation)

1. Create your working directory and enter it.

2. Follow the instructions in [How to cross-compile C program](Products/Brass-Beta/gWASM?id=how-to-cross-compile-C-program).

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

If the command is not recognized, then please check your Golem installation and system settings. See [this](https://docs.golem.network/#/Products/Brass-Beta/Installation) documentation for installation and settings instructions and [this](https://docs.golem.network/#/Products/Brass-Beta/Command-line-interface) for CLI instructions.

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

---

### Introduction to gWASM applications

We use a standalone [SpiderMonkey](Products/Brass-Beta/gWASM?id=sandboxing) runtime to run WASM binaries. Because of this, applications must be compiled with the Emscripten compiler or compiled to Emscripten target.

A gWASM application typically consists of:
- A client program
- A WASM binary

**Client**

The client is a user interface run locally which does not need to be compiled to WebAssembly. Its responsibility is to handle creating gWASM tasks in Golem. If you've read [this section](Products/Brass-Beta/gWASM?id=creating-gwasm-tasks-in-golem) then you are already familiar with the structure of a gWASM task. The client's role is to automate the process of creating such tasks, as well as communicate with the a Golem node acting as the task requestor within the network.

**WASM binary**

WASM binaries contain the actual application's logic and are executed by providers within the Golem network. A WASM binary includes the actual WASM executable (.wasm file), as well as its JavaScript glue code (.js file). Both files are compilation results when using Emscripten. When computing a task, the binary (along with its input) is transferred to the provider's machine and executed by the WASM engine.

A full working example of a gWASM app is [g-flite](Products/Brass-Beta/gWASM?id=sample-application-g-flite).

?> Until very recently, people mainly associated WebAssembly with web browsers. This trend is changing rapidly thanks to standardisation efforts in the form of WebAssembly System Interface **(or [WASI](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/)) which will essentially allow WebAssembly to be run on the server**. gWASM is a nod in that direction, taking **WASM from the browser environment and enabling server-side computations**. This implies that gWASM will not run in a web browser but on different Golem Nodes. Note that while gWASM is currently not WASI compatible, we are actively participating in WASI’s development together with Mozilla Foundation, and when it’s tagged stable (currently, still experimental), we will make gWASM WASI compatible as well.

---

#### Deterministic computations

**Our goal is to make computations fully deterministic.** This way we can verify the results' correctness via byte-to-byte comparison. The same computations repeated on various machines should always generate the same results. In our solution, we use redundant computations in order to enable verification of results.

**WebAssembly** is a deterministic machine, but in some points it needs more consideration. **WebAssembly is single-threaded by design**, therefore issues such as synchronisation and order of execution do not play a role here. Floating-point operations are strict and deterministic with one exception - dealing with NaN values. We currently do not provide any way of allowing to enable/disable it. However, we do strive to enforce it at the Golem's app level meaning that gWASM will, for now, only be available on x86_64 architectures. We are aware of other solutions which enforce deterministic floats and hence NaNs at the software level. However, we have decided not to go that route at the moment, as these solutions have a major negative performance impact. 

Date and time operations are mocked, you should not rely on them. Currently you cannot access external devices (e.g. GPUs) which are sources of indeterminism. The sandbox emulates pseudo-random numbers generation. **Every node draws the same sequence of pseudo-random numbers.**


---

### gWASM runner

[gwasm-runner](https://github.com/golemfactory/gwasm-runner) is a project with a single goal: making developing new gWASM apps as simple as possible. It includes three components:

- **a WebAssembly sandbox** for running **WASM code locally**,
- **basic communication** with either a **Golem network** node or a **Golem Unlimited** hub,
- **an API** used to define how to split work into smaller chunks and how these chunks should later be merged.

#### Runner API
?>  **The runner API resembles the map-reduce paradigm**. It provides a simple interface for creating gWASM apps. In essence: **if you can tailor your app to this API, you can run it on gWASM using `gwasm-runner`!** To integrate with the runner, an application must implement three callbacks:

1. **`split` - defines how we the computation can be parallelised, i.e. how it can be split into multiple subtasks.**
2. **`execute` - performs computation on a single chunk of data as prepared in the split phase.**
3. **`merge` - gathers and merges the computation results from the execute phase.**

> Please note that the `split` and `merge` phases will run locally, on the requestor's machine, while `execute` will run on the providers' machines. The code for these callbacks must be contained within the WASM binary for the application.

### gWASM runner - example

The best way to present an API is by way of example. **For the "hello world!" example**,
we'll try something really simple. Namely, we will try and sum integers in the range
of `1..100` inclusive, but we will split the task into `10` subtasks, or gWASM tasks.
So how do we do this? We proceed in stages in conformance with the runner API:
  1. **we split the input array of `100` integers into `10` subarrays such that `[1,...,10]`,
     `[11,...,20]`, `...`, `[91,...,100]`.**
  2. **for each subarray, we calculate the sum of elements; for instance, `sum([1,...,10]) = 55`.**
  3. **finally, we combine all intermediate sums into one final sum, our final value.**

Before we dig in, please note that you can see the fully assembled example in
[Final result](#final-result). The example is going to presented in the Rust programming
language. Firstly, just for convenience, let's introduce two
helper "types" (or type aliases in Rust's terminology):

```rust
type Task = Vec<u64>;
type TaskResult = u64;
```

Here, as you've probably already guessed, `Task = Vec<u64>` represents the gWASM task, so
a subarray of integers we will sum to generate the `TaskResult`, i.e., a `u64` value.

#### Split

`split` function is responsible for splitting the input problem into subproblems, or gWASM
tasks. Its signature can be summarised as follows:

```rust
fn split(ctx: &mut dyn SplitContext) -> Vec<(Task,)>;
```

Firstly, note that, as expected, `split` is required to generate a vector of tasks.
There is one technicality here we need to get our heads round. The API is constructed
in such a way that `split` returns a `Vec` of tuples. Hence, if we have only one
return value as is in this case, we need to wrap it up in a one-element tuple, so
`Vec<(Task,)>`. Furthermore, you've also probably noticed that `split` accepts
a context argument, `SplitContext`. Within this argument, you can interface with
the invoker of your gWASM app with `gwasm-runner` and receive and parse any
passed in command line arguments.

Now, back to our example. Our implementation of `split` needs to generate a vector
of `10` `Task`s. Let's do this then!

```rust
fn split(_ctx: &mut dyn SplitContext) -> Vec<(Task,)> {
    const NUM_SUBTASKS: usize = 10;              // number of gWASM tasks we'll generate
    let arr: Vec<u64> = (1..=100).collect();     // this is our input vector of 100 integers
    let mut tasks: Vec<(Task,)> = Vec::new();    // note the one-element tuple
    for chunk in arr.chunks(NUM_SUBTASKS) {      // split the input into chunks, 10 integers each
        let task: Task = chunk.to_vec();         // convert chunk into Task
        tasks.push((task,));                     // save each task
    }
    tasks
}
```

#### Execute

?> Having generated gWASM tasks, we now need to provide a method to generate a sum
of each task's elements. The logic that performs this action is represented by
an `execute` function of our API, and it's signature can be summarised as follows:

```rust
fn execute(task: Task) -> (TaskResult,);
```

Just like in `split`'s case, `execute` is subject to the same technicality. That is,
the API is constructed in such a way that `execute` returns a tuple. Hence, if we have
only one return value as is in this case, we need to wrap it up in a one-element tuple.

`execute` function is actually where all the Golem magic happens. Every `Task` passed
into the `execute` function is distributed over GU cluster (when `gwasm-runner`
is used with the GU as the backend), or over the Golem network (when `gwasm-runner` is
used with the Brass as the backend). More on that later.

All that's left now is to fill in `execute` with the summing logic, so let's do just that!

```rust
fn execute(task: Task) -> (TaskResult,) {
    let task_result: u64 = task.into_iter().sum(); // this is the sum of our sub-problem
    (task_result,)                                 // note the one-element tuple like for `split`
}
```

#### Merge

?> Finally, we need to merge the intermediate sums into the final sum, and hence, the
solution to our problem. This is done in the `merge` function:

```rust
fn merge(args: &Vec<String>, results: Vec<((Task,), (TaskResult,))>);
```

`merge` function takes two arguments: `args` vector of `String`s, and `results` vector
of input `Task`s as well as the generated `TaskResult`s. You can think of `args` as
the owned (for consumption) version of `SplitContext` you saw in `split` function.
We will not dig deeper into the purpose of `args` at this time, and we refer the interested
Reader to our [gwasm-api docs](https://golemfactory.github.io/gwasm-rust-api/gwasm_api/index.html).
`results` vector is more interesting for us at this stage.
Its structure is as follows: for each generated `Task` in the [Split](#split) step,
we have a matching generated `TaskResult` in the [Merge](#merge) step.

Armed with this knowledge, we can finish our app with the `merge` logic, so let's do it!

```rust
fn merge(_args: &Vec<String>, results: Vec<((Task,), (TaskResult,))>) {
    let task_results: Vec<TaskResult> = results.into_iter().map(|(_, (result,))| result).collect(); // extract intermediate sums
    let final_sum: u64 = task_results.into_iter().sum();                                            // merge sums into final sum
    let expected: u64 = (1..=100).sum();                                                            // calculate the sum directly
    assert_eq!(final_sum, expected, "the sums should be equal")                                     // check that both solutions match
}
```

#### Final result

?> Finally, we can put all of this together into one final `main` function:

```rust
fn main() {
    dispatcher::run(split, execute, merge).unwrap()
}
```

Here, `dispatcher` is part of our `gwasm-api` is essentially speaking, it
ties all 3 stages together.

Putting everything together, we get the following `main.rs` file for our
"hello world!" app:

```rust
// main.rs
use gwasm_api::{dispatcher, SplitContext};

fn main() {
    dispatcher::run(split, execute, merge).unwrap()
}

type Task = Vec<u64>;
type TaskResult = u64;

fn split(_ctx: &mut dyn SplitContext) -> Vec<(Task,)> {
    const NUM_SUBTASKS: usize = 10;
    let arr: Vec<u64> = (1..=100).collect();
    let mut tasks: Vec<(Task,)> = Vec::new();
    for chunk in arr.chunks(NUM_SUBTASKS) {
        let task: Task = chunk.to_vec();
        tasks.push((task,));
    }
    tasks
}

fn execute(task: Task) -> (TaskResult,) {
    let task_result: u64 = task.into_iter().sum();
    (task_result,)
}

fn merge(_args: &Vec<String>, results: Vec<((Task,), (TaskResult,))>) {
    let task_results: Vec<TaskResult> = results.into_iter().map(|(_, (result,))| result).collect();
    let final_sum: u64 = task_results.into_iter().sum();
    let expected: u64 = (1..=100).sum();
    assert_eq!(final_sum, expected, "the sums should be equal")
}
```

> Don't forget to add `gwasm-api` as a dependency in your `Cargo.toml`:

```toml
// Cargo.toml
[dependencies]
gwasm-api = { git="https://github.com/golemfactory/gwasm-runner.git" }
```

#### Building the example

We're now going to demonstrate how you can compile your example application to WASM so that it can be executed using `gwasm-runner`. Please follow these steps:

1. **Install [rustup](https://rustup.rs).**
2. **Install the [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html).**
3. **Add the WASM compilation target for Rust. To do so, run the below command once you have install `rustup`:**

```bash
rustup target add wasm32-unknown-emscripten
```

4. **Go to the example project's root directory (where its `Cargo.toml` file is located) and build it by running:**

```bash
cargo rustc --target=wasm32-unknown-emscripten -- -C link-args="-s BINARYEN_ASYNC_COMPILATION=0"
```

The flag `--target` specifies the target platform we want to compile to. The arguments which come after `--` will be passed directly to the compiler. In our case, we disable the async compilation feature of Emscripten. This is necessary if we'd like to execute our app on the Golem network, since the WASM sandbox used in the Golem client currently does not support that feature. This is a temporary situation and we expect this limitation to be lifted in the future releases of Golem.

Also, please note that you will need to have the Emscripten SDK environment set up in the shell from which you're running `cargo rustc`. This is mentioned in the SDK's [installation instructions](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions).

#### Running the example
Once your application is compiled to WASM, you can run it using `gwasm-runner`!
To do so, you can grab one of the pre-built binary releases of the runner from the [releases page on GitHub](https://github.com/golemfactory/gwasm-runner/releases). Alternatively, you can build the program from source by following the building instructions from the [readme](https://github.com/golemfactory/gwasm-runner#gwasm-runner).

The below examples make the following assumptions:
- the commands are run from the example project's root directory,
- the project has been already compiled, meaning there's a `target` directory in the project's root,
- `gwasm-runner` is available on your system's `PATH`.

You can run the application in three different ways: locally on your machine, in the Golem network or within a Golem Unlimited cluster.

**Running locally**

To run the application locally (e.g. for testing purposes), issue the below command:

```bash
gwasm-runner target/wasm32-unknown-emscripten/debug/hello_world.wasm
```

**Running on Golem network**

To execute the application in the Golem network, add the `backend` flag like below:

```bash
gwasm-runner target/wasm32-unknown-emscripten/debug/hello_world.wasm --backend=Brass
```

In order for this to work, you'll need a Golem node (version 0.21+) running locally on your machine. The default settings used by the Brass runner are listed below:

```json
{
    "data_dir": "/home/user/.local/share/golem/default",
    "address": "127.0.0.1:61000",
    "bid": 1.0,
    "name": "gwasm-task",
    "net": "testnet",
    "subtask_timeout": "00:10:00",
    "task_timeout": "00:30:00"
}
```

To change the default values (e.g. when the datadir for your local Golem instance is located somewhere else) a JSON configuration file needs to be created. Under Linux, this file should be placed under: `~/.config/g-wasm-runner/brass/config.json`. You can copy the above JSON object, modify the fields' values and put it into that file. The runner will print its currently used configuration upon start-up.

**Running on Golem Unlimited**

To run your app in a Golem Unlimited cluster, issue the following command:
```bash
gwasm-runner target/wasm32-unknown-emscripten/debug/hello_world.wasm --backend=gu://<ip_address>
```

You will need to substitute the `ip_address` with the address of the GU hub you are connected to.

---


### Sample application - g-flite

`g-flite` is a command-line utility which lets you run [flite](http://www.festvox.org/flite/) text-to-speech app on Golem Network.

![g_flite GIF demo](http://i.imgur.com/Ji1CdCN.gif)

?> Note that `g-flite` currently requires that you have a [Golem instance](Products/Brass-Beta/Installation) running on the same machine. If you'd like to use `g-flite` on mainnet your Golem node's version must be `0.21` or higher.

`g-flite` is our demo application and an **end-to-end, ready to use Golem integration**. Most of the implementation details (such as creating Golem tasks and collecting results) are covered by the client, which exposes a user-friendly API. You can use `g-flite` and its source code to familiarise yourself with how gWASM-enabled applications can be implemented.


##### Installation

You can grab a precompiled version of the program for each OS: Linux, Mac, and Windows, from [here](https://github.com/golemfactory/g-flite/releases).


##### Building from source

If you wish however, you can also build the program from source. To do this, you'll first need to clone the repo.

```bash
git clone --depth 50 https://github.com/golemfactory/g-flite
cd g-flite
```

Afterwards, you need to ensure you have Rust installed in version at least `1.34.0`. A good place to get your hands on the latest Rust is [rustup website](https://rustup.rs/).

With Rust installed on your OS, you then need to simply run from within `g-flite` dir

```bash
cargo build
```

for debug version, or

```bash
cargo build --release
```

for release version. Your program can then be found in

```bash
g-flite/target/debug/g_flite
```

for debug version, or

```bash
g-flite/target/release/g_flite
```

for release version.


##### Usage

Typical usage should not differ much or at all from how you would use the original `flite` app

```bash
g_flite some_text_input.txt some_speech_output.wav
```

Note that it is required to specify the name of the output file. All of this assumes that you
have your Golem installed using the default settings

| Setting     | Default value                 |
| ----------- | ----------------------------- |
| datadir     | `APP_DATA_DIR/golem/default` |
| RPC address | 127.0.0.1                     |
| RPC port    | 61000                         |

`APP_DATA_DIR` is platform specific:
* on Linux will usually refer to `HOME/.local/share/<project_path>`
* on Mac will usually refer to `HOME/Library/Application Support/<project_path>`
* on Windows will usually refer to `{FOLDERID_LocalAppData}/<project_path>/data`

If any of the above information is not correct for your Golem configuration, you can adjust them directly in the command-line as follows

```bash
g_flite --address 127.0.0.1 --port 61000 --datadir /abs/path/to/golem/datadir some_text_input.txt some_speech_output.wav
```

Finally, by default `g-flite` will split your input text into 6 subtasks and compute them on Golem Network. You can also adjust this option in the command-line as follows

```bash
g_flite --subtasks 2 some_text_input.txt some_speech_output.wav
```

All of this information can also be extracted from the command-line with the `-h` or `--help` flags

```bash
g_flite -h

g_flite 0.1.0
Golem RnD Team <contact@golem.network>
flite, a text-to-speech program, distributed over Golem network

USAGE:
    g_flite [FLAGS] [OPTIONS] <TEXTFILE> <WAVFILE>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information
    -v, --verbose    Turns verbose logging on

OPTIONS:
        --address <ADDRESS>    Sets RPC address to Golem instance
        --datadir <DATADIR>    Sets path to Golem datadir
        --port <PORT>          Sets RPC port to Golem instance
        --subtasks <NUM>       Sets number of Golem subtasks

ARGS:
    <TEXTFILE>    Input text file
    <WAVFILE>     Output WAV file
```


##### Issues

This program is still very much a work-in-progress, so if you find (and you most likely will) any bugs, please submit them [in our issue tracker](https://github.com/golemfactory/g-flite/issues/new).


##### License

Licensed under [GNU General Public License v3.0](https://github.com/golemfactory/g-flite/blob/master/LICENSE) with the exception of `flite` WASM binary which is licensed under [BSD-like License](https://github.com/golemfactory/g-flite/blob/master/LICENSE.flite).

---

#### How to run g-flite

1. Open terminal and check if your Golem node is up.

```bash
golemcli
```

If the command is not recognized, then please check your Golem installation and system settings. See [this](https://docs.golem.network/#/Products/Brass-Beta/Installation) documentation for installation and settings instructions and [this](https://docs.golem.network/#/Products/Brass-Beta/Command-line-interface) for CLI instructions.

If your Golem working directory is not default, then you need to point `datadir` as follows.

```bash
golemcli --datadir=/path/to/your/datadir
```

2. Test if you are connected to testnet, not mainnet. Run the command.

```bash
golemcli debug rpc golem.mainnet
```

The answer should be `False`.

3. Go to [releases page](https://github.com/golemfactory/g-flite/releases) and get binaries for your OS. Unpack it.

4. Get the text file you want to read. Any text file in English. Lets say it is `golem.txt`, and paste it into your `g-flite` folder. 

5. In your terminal/command line `cd` into the `g-flite` directory.

6. Run the command:

**For Mac os and Linux**

```bash
./g_flite --subtasks 2 golem.txt golem.wav
```

**For Windows**

```bash
g_flite.exe --subtasks 2 golem.txt golem.wav
```

The name of the output file `golem.wav` is arbitrary. Note that `g_flite` is CLI program. For more information see [this](Products/Brass-Beta/gWASM?id=sample-application).

6. After command completes, the output file `golem.wav` should be available and you can test it.

---

#### How to run a gWASM app using gwasm-runner

1. Go to the gwasm-runner [releases page](https://github.com/golemfactory/gwasm-runner/releases) and get the latest binary for your OS.

2. Go to the mandelbrot [releases page](https://github.com/golemfactory/mandelbrot/releases) and get the latest package. Unzip the package.

3. In your terminal, go to the directory containing the gwasm-runner binary from step 3. and issue the below command:

```bash
./gwasm-runner <path to mandelbrot.wasm file> -- 1000 1000 4
```

Substitute the mandelbrot.wasm path with the path to the file you downloaded in step 4. Please note that the mandelbrot .wasm and .js files need to be in the same directory.

4. Once the program finishes successfully, the output will be available in the directory where the gwasm-runner binary is placed. By default, the name of the output file is: `out.png`.

The above instructions refer to running the application locally on your machine (for testing purposes). If you'd like to use the Golem network or Golem Unlimited for your computations, please refer to [this section](#running-the-example).

---

### Building gWASM applications

#### Why integrate with gWASM?
Applications and services, both new and existing ones, can greatly benefit from gWASM. It grants them access to an external computing platform which can be used to improve performance by offloading and parallelising computations. The integrating applications are not limited in design when making use of gWASM (however, the offloaded computations must be executable within a WebAssembly sandbox).

#### How to integrate with gWASM?
Integrating applications with gWASM is not very different from [creating gWASM tasks](Products/Brass-Beta/gWASM?id=creating-gwasm-tasks-in-golem). The idea is to automate the whole process, so the application creates and controls tasks in Golem. The benefit of Golem is its support for massive parallel computations. But there is no universal way to parallelize arbitrary computation. Therefore, it is the application's job to define a way for splitting the work into subtasks, similar to the map-reduce pattern.

There is more than one approach to integrating your applications with gWASM. While it's possible to build an integration from scratch, we've prepared helper libraries and example applications to make the process easier for developers.

The simplest way of creating gWASM applications is using [gwasm-runner](Products/Brass-Beta/gWASM?id=gwasm-runner) as a framework. The runner offers a simple API for defining how a task should be split and merged, along with integrations with the Golem network and Golem Unlimited working out of the box.

For applications which require more custom logic or cannot be easily ported to use `gwasm-runner` there is also[gwasm-rust-api](https://github.com/golemfactory/gwasm-rust-api) - a lower level adapter for communicating with a Golem instance running locally. Lastly, you can also write your own integration code communicating with a Golem node via RPC.

#### g-flite design

This section is focused on the design. Its intention is to demonstrate how to integrate with gWASM. For information on g-flite itself see [this](Products/Brass-Beta/gWASM?id=sample-application-g-flite).

![g-flite design](/img/gwasm/g-flite-design.png)

It is clear that there are two main components. First one is flite cross-compiled to WebAssembly. It serves as backend and is executed on providers' remote machines. Second one is the client. It is written in Rust. It serves as user interface and connects to Golem Node in order to send Golem tasks.

* The client is the user interface. It is also responsible for splitting input data into chunks for subtasks and combining subtasks results into one result. There is no general way of splitting and combining data, they are use case specific. For that reason it is placed in the client.

* Golem adapter creates, manages and completes Golem tasks. It creates `task.json` file, creates input folder and connects to Golem Node. It contains `golem-rpc-api` library that handles sole communication with Golem Node.

* Golem Node exposes RPC interface that is used for communication. It has to be local for the client.

* WASM flite program is flite program cross-compiled to WebAssembly. It is executed remotely by providers' Golem Nodes. Communication between requestor's Golem Node and providers' Golem Nodes is handled by Golem Network. Moreover, a provider's Golem Node manages execution of WASM flite program and sends results back to the requestor's Golem Node.

Remark: WASM flite program is not stored at requestor's Golem Node before the task is dispatched. The client sends WASM flite binaries along with the task and then it is executed at provider's machine.

#### How to build custom gWASM application

1. Write backend logic of your application. Supported languages are C and Rust for now. 

2. Cross-compile backend component in compliance with gWASM requirements.

3. Test it by sending gWASM task to testnet Golem.

4. Develop Golem adapter, very similar to g-flite's Golem adapter but obviously with different API.

5. Develop a client component / user interface that invokes Golem adapter.

Remark. Defining Golem adapter API is very important part of gWASM application.

#### How to integrate an application with gWASM

This section is a very brief guidelines how to integrate existing application with gWASM. It is very hard to say which application are eligible. For sure you need to have source code and not every programming language is supported - is able to be cross-compiled to WebAssembly. Optionally, you can rewrite selected parts in C or Rust and cross-compile them.

1. Decompose the application and consider which component is responsible for heavy computations. Files access is permitted but network access, GPU access, IPC, searching volumes etc are denied.

2. Cross-compile this component in compliance with gWASM requirements.

3. Test it by sending gWASM task to testnet Golem.

4. Develop Golem adapter, very similar to g-flite's Golem adapter but obviously with different API. API should imitate original components API. Asynchronous calls are preferable due to Golem tasks' nature.

5. Combine Golem adapter with the rest of the application. And gWASM application is ready to go.

![integrating app with gWASM](/img/gwasm/integrating-app-with-gWASM.png)

Remark. Accessing Golem requires Golem specific parameters like `subtask_timeout` or `bid`. You need to add such configuration to the application. 


---

### How to compile gWASM application

Many applications can be compiled to WASM. It is hard to say if a specific code is eligible. That may depend on used syscalls. Sometimes compilation requires some tweaks. If your application just reads data, makes computations and writes results, it is highly likely that it can be compiled to WASM. It is required to install emscripten. Note that WebAssembly is evolving very fast and it is expected to be more adaptive in time. It is also possible to compile Rust source code directly to WASM. See [this](Products/Brass-Beta/gWASM?id=how-to-cross-compile-c-program-step-by-step) for detailed instructions on cross-compiling of C and Rust code. Note that gWASM applications are executed in the [sandbox](Products/Brass-Beta/gWASM?id=sandboxing) and compilation must comply to its requirements.

> Be sure that you are not violating any licenses or property rights, you take legal responsibility for your actions and it is absolutely fine if you use open source software or your own code.

---

#### Limitations

* All supported applications need to be single threaded. 

* Forks, IPC calls and synchronization are not allowed. It is convenient to run multiple instances of an application on multi core CPU.

* You cannot rely on time and date operations. They are mocked for the sake of determinism.

* All computations are limited to CPU, you cannot access to GPU.

* You cannot rely on randomness in order to generate cryptography or secrets. Moreover, in order to preserve determinism in the future, we will strive at providing the same source of entropy to all providers involved in verification of a WASM task. This way, the task will have access to real entropy and the determinism on providers’ machines will be preserved.

* All files are mapped to RAM memory. So having input and output files size in total greater than a few GB is not supported. 

* gWASM is still under development. At the moment it is available for testnet only. We do not guarantee proper verification and settlement.

---


#### Cross compilation

Let us create a simple `hello world` style program which will read in some text from `in.txt` text file, read your name from the command line, and save the resultant text in `out.txt`. We'll demonstrate how to cross-compile apps to Wasm for use in Golem in two languages of choice: C and Rust.


#### C/C++

```C
#include <stdio.h>

int main(int argc, char** argv) {
  char* name = argc >= 2 ? argv[1] : "anonymous";
  size_t len = 0;
  char* line = NULL;
  ssize_t read;
  
  FILE* f_in = fopen("in.txt", "r");
  FILE* f_out = fopen("out.txt", "w");
  
  while ((read = getline(&line, &len, f_in)) != -1)
      fprintf(f_out, "%s\n", line);
  
  fprintf(f_out, "%s\n", name);
  
  fclose(f_out);
  fclose(f_in);
  
  return 0;
}
```

There is one important thing to notice here. The sandbox communicates the results of computation by reading and writing to files. Thus, every Wasm program is required to at the very least create an output file. If your code does not include file manipulation in its main body, then the Emscripten compiler, by default, will not initialise JavaScript `FS` library, and will trip the sandbox. This will also be true
for programs cross-compiled [from Rust](Products/Brass-Beta/gWASM?id=_12-rust).

Now, we can try and compile the program with Emscripten. In order to do that you need Emscripten SDK installed on your system. For instructions on how to do it, see [here](https://emscripten.org/docs/getting_started/downloads.html).

```
emcc -o simple.js -s BINARYEN_ASYNC_COMPILATION=0 simple.c
```

Emscripten will then produce two files: `simple.js` and `simple.wasm`. The produced JavaScript file acts as glue code and sets up all of
the rudimentary syscalls in JavaScript such as `MemFS` (in-memory filesystem), etc., while the `simple.wasm` is our C program cross-compiled to Wasm.

Note here the compiler flag `-s BINARYEN_ASYNC_COMPILATION=0`. By default, the Emscripten compiler enables async IO lib when cross-compiling to Wasm which we currently do not support.
Therefore, in order to alleviate the problem, make sure to always cross-compile with `-s BINARYEN_ASYNC_COMPILATION=0` flag.


#### Rust

With Rust, firstly go ahead and create a new binary with `cargo`

```rust
cargo new --bin simple
```

Then go ahead and paste the following to `simple/src/main.rs`
file

```rust
use std::env;
use std::fs;
use std::io::{self, Read, Write};

fn main() -> io::Result<()> {
    let args = env::args().collect::<Vec<String>>();
    let name = args.get(1).map_or("anonymous".to_owned(), |x| x.clone());

    let mut in_file = fs::File::open("in.txt")?;
    let mut contents = String::new();
    in_file.read_to_string(&mut contents)?;

    let mut out_file = fs::File::create("out.txt")?;
    out_file.write_all(&contents.as_bytes())?;
    out_file.write_all(&name.as_bytes())?;

    Ok(())
}
```

As was the case with [C program](Products/Brass-Beta/gWASM?id=_11-cc), it is important to notice here that the sandbox communicates the results of computation by reading and writing to files. Thus, every Wasm program is required to at the very least create an output file. If your code does not include file manipulation in its main body, then the Emscripten compiler, by default, will not initialise JavaScript `FS` library, and will trip the sandbox.

In order to cross-compile Rust to Wasm compatible with Golem's sandbox, firstly we need to install the required target which is `wasm32-unknown-emscripten`. The easiest way of doing so, as well as generally managing your Rust installations, is to use [rustup](https://rustup.rs/)

```rust
rustup target add wasm32-unknown-emscripten
```

Note that cross-compiling Rust to this target still requires that you have Emscripten SDK installed on your system. For instructions on how to do it, see [here](https://emscripten.org/docs/getting_started/downloads.html).

Now, we can compile our Rust program to Wasm. Make sure you are in the root of your Rust crate, i.e., at the top of `simple` if you didn't change the name of your crate, and run

```rust
cargo rustc --target=wasm32-unknown-emscripten --release -- \
  -C link-args="-s BINARYEN_ASYNC_COMPILATION=0"
```

If everything went OK, you should now see two files:

`simple.js` and `simple.wasm` in `simple/target/wasm32-unknown-emscripten/release`.

Just like in [C program](Products/Brass-Beta/gWASM?id=_11-cc)'s case, the produced JavaScript file acts as glue code and sets up all of the rudimentary syscalls in JavaScript such as `MemFS` (in-memory filesystem), etc., while the `simple.wasm` is our Rust program cross-compiled to Wasm.

Again, note here the compiler flag `-s BINARYEN_ASYNC_COMPILATION=0` passed as additional compiler flags to `rustc`. By default, when building for target `wasm32-unknown-emscripten` with `rustc` the compiler will cross-compile with default Emscripten compiler flags which require async IO lib when cross-compiling to Wasm which we currently do not support. Therefore, in order to alleviate the problem, make sure to always cross-compile with `-s BINARYEN_ASYNC_COMPILATION=0` flag.


#### How to cross-compile C program - step by step

?> Step by step instructions of how to cross-compule C program to WASM and send it to Golem.

1. Test if Emscripten SDK is installed. Open terminal and execute

```bash
emcc --version
```

If it is not installed, follow the instructions from [here](https://emscripten.org/docs/getting_started/downloads.html).

2. Create simple program `hello.c`

```C
#include <stdio.h>

int main(int argc, char** argv) {
  char* name = argc >= 2 ? argv[1] : "anonymous";

  FILE* f_out = fopen("out.txt", "w");

  fprintf(f_out, "hello %s!\n", name);

  fclose(f_out);

  return 0;
}
```

3. Do cross-compilation with `emcc`

```bash
emcc -o hello.js -s BINARYEN_ASYNC_COMPILATION=0 hello.c
```

4. You should get outcome files `hello.js` and `hello.wasm`


---

### gWASM-store

?> First of all, we provided a catalog of ready to use gWASM applications (like [gflite](Products/Brass-Beta/gWASM?id=g-flite-)). If you feel that your application is worth to be shared, you can contribute to that also. The goal for this catalog is to kick off the adoption and help new users to get familiar with it fast. All apps are self contained but requires to run Golem node locally. Please see the description to the specific application to know how to use it.

**gWASM-store is a curated list of precompiled Wasm binaries of programs that are known to successfully work with [Wasm sandbox](https://github.com/golemfactory/sp-wasm) in [Golem](https://github.com/golemfactory/golem).**

The list includes applications located directly in [this repo](https://github.com/golemfactory/wasm-store), as well as links that point to external sources.

The applications can either be in a raw, Wasm format, or (preferably) they can be augmented with a GUI/CLI for the user's convenience.
Using raw Wasm binaries implies that the user has to be able to prepare the corresponding `task.json` and the required folder structure themselves, and be able to directly connect with their Golem client (e.g., via the use of the [Golem CLI](Products/Brass-Beta/Command-line-interface)). Therefore, as such, this approach requires some technical knowledge of the Golem's internals.
See [here](Products/Brass-Beta/gWASM?id=creating-gwasm-tasks-in-golem) to learn how to launch a Wasm task in Golem.

The applications augmented with a GUI/CLI are naturally more user friendly, because they handle communication with Golem node. Having said that, there currently is no generic way of preparing such a GUI/CLI. There are some examples however. See the [g-flite](Products/Brass-Beta/gWASM?id=g-flite) app for instance.

The list of applications with GUI/CLI:

* [g-flite](https://github.com/golemfactory/g-flite) - text-to-speech

The list of raw applications:
* [7-zip](https://github.com/golemfactory/wasm-store/tree/master/7-zip) - 7-zip archiver
* [dcraw](https://github.com/golemfactory/wasm-store/tree/master/dcraw) - raw image to tiff/ppm
* [flite](https://github.com/golemfactory/wasm-store/tree/master/flite) - text-to-speech
* [Minimal Hamiltonian Path](https://github.com/golemfactory/wasm-store/tree/master/MinimalHamiltonianPath) - searches for minimal Hamiltonian path in weighted directed graphs


#### Cloning the repo

When cloning the repo, remember to set up [git-lfs](https://git-lfs.github.com) for this repo on your machine. Usually, this can be accomplished as follows:

```bash
git clone https://github.com/golemfactory/wasm-store
cd wasm-store
git lfs install
git lfs pull
```


#### Contributing

We welcome contributions in the form of links to precompiled Wasm binaries of other programs. If you would like to submit such a link, do not hesitate to open a new PR. Your repo should contain **README** file and license. If it is a raw Wasm binary, it should follow the guidelines below.

For apps augmented with GUI/CLI, the requirements are more relaxed and not set in stone, with the only must-have: good user experience.


#### Directories structure

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

#### How to use gWASM-store

1. Visit the github page with [gWASM-store](https://github.com/golemfactory/wasm-store).

2. The easiest way is to download the [zipped repository](https://github.com/golemfactory/wasm-store/archive/lglen/sha1solver.zip) or clone the repository  with `git`

```
git clone https://github.com/golemfactory/wasm-store.git
```

3. Open terminal and check if your Golem node is up.

```bash
golemcli
```

If the command is not recognized, then please check your Golem installation and system settings. See [this](https://docs.golem.network/#/Products/Brass-Beta/Installation) documentation for installation and settings instructions and [this](https://docs.golem.network/#/Products/Brass-Beta/Command-line-interface) for CLI instructions.

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

[gWASM-store](https://github.com/golemfactory/wasm-store) contains use cases located in this repository and links to other use cases. If you want to run [g-flite](https://github.com/golemfactory/g-flite) see the section [How to run g-flite](https://docs.golem.network/#/Products/Brass-Beta/gWASM?id=how-to-run-g-flite). If you want to follow the link to external repository, it is no need to download gWASM-store repository as stated in the point 2, rather the external repository.


---

### Sandboxing

We developed the sandbox and **every gWASM application is run within the sandbox on a provider’s machine**. It brings security for providers and allows for better control over execution without sacrificing the performance. This is written in Rust and is available for all common OS. We ship it with Golem client, so users-providers do not need to take any additional steps. For the purpose of tests and development, it is possible to run it locally without Golem client. See below for instructions. The sandbox **includes embedded SpriderMonkey from Mozilla** as the runtime for WASM. Remember that **only Emscripten compiled binaries are supported**.


#### SpiderMonkey-based WebAssembly Sandbox

<!-- [![Build Status]][travis] [![Rustc 1.33]][rustc] [![License]][license]

[Build Status]: https://travis-ci.org/golemfactory/sp-wasm.svg?branch=master
[travis]: http://travis-ci.org/golemfactory/sp-wasm
[Rustc 1.33]: https://img.shields.io/badge/rustc-1.33+-lightgray.svg
[rustc]: https://blog.rust-lang.org/2019/02/28/Rust-1.33.0.html
[License]: https://img.shields.io/github/license/golemfactory/sp-wasm.svg 
[license]: https://www.gnu.org/licenses/gpl-3.0.en.html -->

?> A WebAssembly sandbox using standalone SpiderMonkey engine. For `v8` version, see [golemfactory/v8-wasm](https://github.com/golemfactory/v8-wasm).

<!-- This WebAssembly sandbox is used in current development version of Golem: [golem/apps/wasm](https://github.com/golemfactory/golem/tree/develop/apps/wasm).
If you would like to launch a gWASM task in Golem, see [here](https://docs.golem.network/#/About/Use-Cases?id=wasm).

- [SpiderMonkey-based WebAssembly Sandbox](#spidermonkey-based-webassembly-sandbox)
  - [Quick start guide](#quick-start-guide)
    - [1. Create and cross-compile simple program](#1-create-and-cross-compile-simple-program)
      - [1.1 C/C++](#11-cc)
      - [1.2 Rust](#12-rust)
    - [2. Create input and output dirs and files](#2-create-input-and-output-dirs-and-files)
    - [3. Run!](#3-run)
  - [Build instructions](#build-instructions)
    - [Using Docker (recommended)](#using-docker-recommended)
    - [Natively on Linux](#natively-on-linux)
    - [Natively on other OSes](#natively-on-other-oses)
  - [CLI arguments explained](#cli-arguments-explained)
  - [Caveats](#caveats)
  - [Wasm store](#wasm-store)
  - [Contributing](#contributing)
  - [License](#license) -->

#### Quick start guide

This guide assumes you have successfully built the `wasm-sandbox` binary; for build instructions, see section [Build instructions](Products/Brass-Beta/gWASM?id=build-instructions) below. If you are running Linux, then you can also use the prebuilt binaries from [here](https://github.com/golemfactory/sp-wasm/releases).


##### 1. Check instructions on how to create and cross-compile simple program [here](Products/Brass-Beta/gWASM?sample-application---g-flite&id=cross-compilation)


##### 2. Create input and output dirs and files

The sandbox will require us to specify input and output paths together with output filenames to create, and any additional arguments (see [CLI arguments explained](#cli-arguments-explained) section below for detailed specification of the required arguments). Suppose we have the following file structure locally

```
  |-- in/
  |    |
  |    |-- in.txt
  |
  |-- out/
```

Paste the following text in the `in.txt` file

```
// in.txt
You are running Wasm!
```


##### 3. Run!

After you have successfully run all of the above steps up to now, you should have the following file structure locally

```
  |-- simple.js
  |-- simple.wasm
  |
  |-- in/
  |    |
  |    |-- in.txt
  |
  |-- out/
```

We can now run our Wasm binary inside the sandbox

1. using Docker (if you've followed [Using Docker (recommended)](Products/Brass-Beta/gWASM?id=using-docker-recommended) build instructions)

```
docker run --mount type=bind,source=$PWD,target=/workdir --workdir /workdir \
            wasm-sandbox:latest -I in/ -O out/ -j simple.js -w simple.wasm \
            -o out.txt -- "<your_name>"
```

2. natively (if you're using the prebuilt binaries, or you've built natively following
   [Natively on Linux](#natively-on-linux) build instructions)

```
$ wasm-sandbox -I in/ -O out/ -j simple.js -w simple.wasm \
               -o out.txt -- "<your_name>"
```

Here, `-I` maps the input dir with *all* its contents (files and subdirs) directly to the root `/` in `MemFS`. The output files, on the other hand, will be saved in `out/` local dir. The names of the expected output files have to match those specified with `-o` flags. Thus, in this case, our Wasm bin is expected to create an output file `/out.txt` in `MemFS` which will then be saved in `out/out.txt` locally.

After you execute Wasm bin in the sandbox, `out.txt` should be
created in `out/` dir

```
  |-- simple.js
  |-- simple.wasm
  |
  |-- in/
  |    |
  |    |-- in.txt
  |
  |-- out/
  |    |
  |    |-- out.txt
```

with the contents similar to the following

```
// out.txt
You are running Wasm!
<your_name>
```


#### Build instructions


##### Using Docker (recommended)
To build using Docker, simply run

```bash
$ ./build.sh
```

If you are running Windows, then you can invoke the command in the shell script manually in the command line as follows

```bash
docker build -t wasm-sandbox:latest .
```


##### Natively on Linux

To build natively on Linux, you need to follow the installation instructions of [servo/rust-mozjs](https://github.com/servo/rust-mozjs) and [servo/mozjs](https://github.com/servo/mozjs). The latter is Mozilla's Servo's SpiderMonkey fork and low-level Rust bindings, and as such, requires C/C++ compiler and Autoconf 2.13. See [servo/mozjs/README.md](https://github.com/servo/mozjs) for detailed building instructions.

After following the aforementioned instructions, to build the sandbox, run

```bash
cargo build
```

If you would like to build with SpiderMonkey's debug symbols and extensive logging, run instead

```bash
cargo build --features "debugmozjs"
```


##### Natively on other OSes

We currently do not offer any support for building the sandbox natively on other OSes.


##### CLI arguments explained

```
wasm-sandbox -I <input-dir> -O <output-dir> -j <wasm-js> -w <wasm> -o <output-file>... -- <args>...
```

where

* `-I` path to the input dir
* `-O` path to the output dir
* `-j` path to the Emscripten JS glue script
* `-w` path to the Emscripten WASM binary
* `-o` paths to expected output files
* `--` anything after this will be passed to the WASM binary as arguments

By default, basic logging is enabled. If you would like to enable more comprehensive logging, export
the following variable

```
RUST_LOG=debug
```


#### Caveats

* If you were following the [Quick start guide](Products/Brass-Beta/gWASM?id=quick-start-guide) you already know that every Wasm bin needs to be cross-compiled by Emscripten with `-s BINARYEN_ASYNC_COMPILATION=0` flag in order to turn off the use of async IO which we currently don't support.

* Sometimes, if the binary you are cross-compiling is of substantial size, you might encounter a `asm2wasm` validation error stating that there is not enough memory assigned to Wasm. In this case, you can circumvent the problem by adding `-s TOTAL_MEMORY=value` flag. The value has to be an integer multiple of 1 Wasm memory page which is currently set at `65,536` bytes.

* When running your Wasm binary you encounter an `OOM` error at runtime, it usually means that the sandbox has run out-of-memory. To alleviate the problem, recompile your program with `-s ALLOW_MEMORY_GROWTH=1`.

* Emscripten, by default, doesn't support `/dev/(u)random` emulation targets different than either browser or `nodejs`. Therefore, we have added basic emulation of the random device that is *fully* deterministic. For details, see [#5](https://github.com/golemfactory/sp-wasm/pull/5).


#### Contributing to sp-wasm

We welcome all issues and pull requests!

When submitting a pull request, please make sure to run unit tests:

```bash
cargo test
```

and integration tests:

```bash
cargo build && ./target/debug/sp-wasm-tests
```


#### License

Licensed under [GNU General Public License v3.0](https://github.com/golemfactory/sp-wasm/blob/master/LICENSE).


---

### Verification scheme

When requesting computation in external sources, the results should be verified whether they are correct. 

In gWASM we adopted an approach similar to BOINC. Each subtask is sent to two providers. If the results match, then they are considered correct and providers are paid. If not, then third provider - arbiter - computes again this subtask. Its result is compared to the previous and matching two are paid. For more information you can read our blogpost [here](https://blog.golemproject.net/gwasm-verification/). This verification scheme we call Verification by Redundancy - VbR.

Comparing results itself is a challenge. We ensured that computations in our [sandbox](https://docs.golem.network/#/Products/Brass-Beta/gWASM?id=sandboxing) are deterministic. It limits the usage in some cases but it allows for byte-to-byte comparison.

When you request a task with some subtasks, be aware that there will be two times more jobs/computations. When you list subtasks for a given job in CLI, you will find two times more results. Its is because of VbR.

