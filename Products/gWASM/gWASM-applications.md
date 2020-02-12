### Introduction to gWASM applications

We use a standalone [SpiderMonkey](Products/gWASM/Sandboxing) runtime to run WASM binaries. Because of this, applications must be compiled with the Emscripten compiler or compiled to Emscripten target.

A gWASM application typically consists of:
- A client program
- A WASM binary

**Client**

The client is a user interface run locally which does not need to be compiled to WebAssembly. Its responsibility is to handle creating gWASM tasks in Golem. If you've read [this section](Products/gWASM/gWASM-tasks) then you are already familiar with the structure of a gWASM task. The client's role is to automate the process of creating such tasks, as well as communicate with the a Golem node acting as the task requestor within the network.

**WASM binary**

WASM binaries contain the actual application's logic and are executed by providers within the Golem network. A WASM binary includes the actual WASM executable (.wasm file), as well as its JavaScript glue code (.js file). Both files are compilation results when using Emscripten. When computing a task, the binary (along with its input) is transferred to the provider's machine and executed by the WASM engine.

A full working example of a gWASM app is [g-flite](Products/gWASM/Sample-application).

?> Until very recently, people mainly associated WebAssembly with web browsers. This trend is changing rapidly thanks to standardisation efforts in the form of WebAssembly System Interface **(or [WASI](https://hacks.mozilla.org/2019/03/standardizing-wasi-a-webassembly-system-interface/)) which will essentially allow WebAssembly to be run on the server**. gWASM is a nod in that direction, taking **WASM from the browser environment and enabling server-side computations**. This implies that gWASM will not run in a web browser but on different Golem Nodes. Note that while gWASM is currently not WASI compatible, we are actively participating in WASI’s development together with Mozilla Foundation, and when it’s tagged stable (currently, still experimental), we will make gWASM WASI compatible as well.

---

#### Deterministic computations

**Our goal is to make computations fully deterministic.** This way we can verify the results' correctness via byte-to-byte comparison. The same computations repeated on various machines should always generate the same results. In our solution, we use redundant computations in order to enable verification of results.

**WebAssembly** is a deterministic machine, but in some points it needs more consideration. **WebAssembly is single-threaded by design**, therefore issues such as synchronisation and order of execution do not play a role here. Floating-point operations are strict and deterministic with one exception - dealing with NaN values. We currently do not provide any way of allowing to enable/disable it. However, we do strive to enforce it at the Golem's app level meaning that gWASM will, for now, only be available on x86_64 architectures. We are aware of other solutions which enforce deterministic floats and hence NaNs at the software level. However, we have decided not to go that route at the moment, as these solutions have a major negative performance impact. 

Date and time operations are mocked, you should not rely on them. Currently you cannot access external devices (e.g. GPUs) which are sources of indeterminism. The sandbox emulates pseudo-random numbers generation. **Every node draws the same sequence of pseudo-random numbers.**


---

### gWASM runner

We have built [gwasm-runner](https://github.com/golemfactory/gwasm-runner) to facilitate development of gWASM apps. It includes three components:

- **gWASM dispatcher API** a minimalistic API with just three operations for creating gWASM runner compatible apps.
- **a WebAssembly sandbox** for running **WASM code locally**,
- **basic communication** with either a **Golem network** node or a **Golem Unlimited** hub,

#### gWASM dispatcher API
?>  It is a minimalistic interface which resembles the map-reduce paradigm. In essence: **if you can tailor your app to this API, you can run it on gWASM using `gwasm-runner`!** To integrate with the runner, an application must implement three callbacks:

1. **`split` - divide the problem into subproblems.**
2. **`execute` - performs computation for all subproblems independently.**
3. **`merge` - collect all computation results and formulate final result.**

> Please note that the `split` and `merge` phases will run locally, on the requestor's machine, while `execute` might be run remotely on the provider machines (in both `Unlimited` and `Brass` mode) or locally also on requestors' machine (in `Local` mode - for testing purposes). The code for these callbacks must be contained within the WASM binary.

Here is the [gwasm-dispatcher crate source code](https://github.com/golemfactory/gwasm-runner/blob/master/gwasm-dispatcher/src/lib.rs) which contains this API.

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
[Final result](#final-result). The example is going to be presented in the Rust programming
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
a context argument, [`SplitContext`](https://golemfactory.github.io/gwasm-runner/gwasm_dispatcher/trait.SplitContext.html). Within this argument, you can interface with
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

?> Having generated gWASM tasks we now need to provide a "worker" function which, 
in our case, will calculate a sum of each task's elements. The logic that performs this action
is represented by an `execute` function of our API, and its signature can be summarised
as follows:

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
of input `Task`s with their corresponding `TaskResult`s. 

You can think of `args` as the owned (for consumption) version of command line arguments (they are primarily accesible within `split` function via [`SplitContext`](https://golemfactory.github.io/gwasm-runner/gwasm_dispatcher/trait.SplitContext.html)). It is here only for completeness, for when `merge` also needs access to them.

The `results` vector is much more interesting for us at this stage.
Its structure is as follows: for each generated `Task` from the [Split](#split) step,
we have a matching `TaskResult` calculated within the [Merge](#merge) step.

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

The `dispatcher` module is the core of our `gwasm-dispatcher` crate and ties all 3 stages of the gWASM app.

Putting everything together, we get the following `main.rs` file for our
"hello world!" app:

```rust
// main.rs
use gwasm_dispatcher::{dispatcher, SplitContext};

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

> Don't forget to add `gwasm-dispather` as a dependency in your `Cargo.toml`:

```toml
// Cargo.toml
[dependencies]
gwasm-dispatcher = "0.1.0"
```

#### Building the example

Demonstration on how you can compile your example application to WASM so that it can be executed using `gwasm-runner` is in our [Quick start guide](Products/gWASM/Quick-start)
