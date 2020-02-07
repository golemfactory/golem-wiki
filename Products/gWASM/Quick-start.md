# Quick start - testing gWASM locally

?> This tutorial is based on our Devcon5 gWASM workshops `hello world!` example. If you would like to set up your own Golem Unlimited cluster then follow instructions at [devcon5 worksops page](https://devcon.golem.network)

In this quick tutorial you will

1. **Install Rustlang (*stable version 1.38.0*) and emscripten (*1.28.45-fastcomp*)**
2. **Download latest gWASM runner (Command line tool for running gWasm compatible apps locally, via Golem Unlimited or via Brass Golem.)**
3. **Run simple `hello world` task**


---

### 1. Prerequisites

Make sure that you have **Rustlang** and **emscripten** installed on your machine. 

**2.1.** [Rust](https://www.rust-lang.org/tools/install) - **stable version 1.38** 

open up your console/terminal and paste:

**2.1.1. Installation:**

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

**2.1.2. Toolchain version:**

```bash
rustup toolchain add 1.38.0
``` 

*In order to change toolchain for your directory:*

```bash
rustup override set 1.38.0
```

**2.2.** [emscripten](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions) - **with 1.38.0-fastcomp backend**

To install get the emsdk repo:
```bash
git clone https://github.com/emscripten-core/emsdk.git
```

Enter that directory:
```bash
cd emsdk
```

Fetch the latest version of the emsdk:
```bash
git pull
```

Download and install the latest SDK tools:
```bash
./emsdk install latest
```

Make sure to **get a specific version using the fastcomp backend**:
```bash
./emsdk install 1.38.45-fastcomp
```

Make the `1.38.45-fastcomp` "active" for the current user:
```bash
./emsdk activate 1.38.45-fastcomp
```

Activate PATH and other environment virables in the current terminal
```bash
source ./emsdk_env.sh
```


!> For **Windows** users! If you encounter any issues with **emscripten** on Windows we do recommend downloading **WSL** [Windows Subsystem for Linux](https://docs.microsoft.com/pl-pl/windows/wsl/install-win10) and following with the Linux instructions.


----

### 2. Setup Development Environment

**gWASM runner** introduces minimalistic [gwasm dispatcher API](https://golemfactory.github.io/gwasm-runner/gwasm_dispatcher/index.html) that resembles map-reduce paradigm.
This API with only three operations:

1. `split` - divide the problem into subproblems.
2. `execute` - performs computation for all subproblems independently.
3. `merge` - collect all computation results and formulate final result.

enables developers to easily implement applications and run them on top of the [Golem Unlimited](https://github.com/golemfactory/golem-unlimited) and also on [Brass Golem 0.21 and later](https://blog.golemproject.net/brass-golem-beta-0-21-0-hello-mainnet-gwasm/).

?> For Unix systems (or bash owners: default MacOs and Linux) **install gWASM runner** with:

```bash
curl -sSf https://golemfactory.github.io/gwasm-runner/runner-update.sh |  bash
```

?> Or download **gWASM runner binary** for your OS:


[gWASM runner for Windows](https://github.com/golemfactory/gwasm-runner/releases/download/0.3.1/gwasm-runner-win64-0.3.1.zip)


[gWASM runner for MacOs](https://github.com/golemfactory/gwasm-runner/releases/download/0.3.1/gwasm-runner-macos-0.3.1.tar.gz)


[gWASM runner for Linux](https://github.com/golemfactory/gwasm-runner/releases/download/0.3.1/gwasm-runner-linux-0.3.1.tar.gz)



---

Secondly, some of the exercises will produce some file output, so it might be useful to
create a local scratch directory and map it to a specific internal directory:

```
mkdir gwasm-tutorial-workspace
```

**CD into created directory and you should be ready to go!**

Remember to set 

```bash
rustup override set 1.38.0
``` 

and

```bash
rustup target add wasm32-unknown-emscripten
```

for this directory.

---

### 3. Hello World! example

Before tackling some more interesting problems with gWasm, let's first get acquainted with
the `gwasm-api`, the API which we'll use to interface our apps with gWasm. Essentially
speaking, if you can tailor your app to this API, you can run it on gWasm using our
`gwasm-runner` tool! So, without further gilding the lily, let's crack on!

The best way to present an API is by way of example. For the "hello world!" example,
we'll try something really simple. Namely, we will try and sum integers in the range
of `1..100` inclusive, but we will split the task into `10` subtasks, or gWasm tasks.
So how do we do this? We proceed in stages which we'll describe below in more detail:
  1. we split the input array of `100` integers into `10` subarrays such that `[1,...,10]`,
     `[11,...,20]`, `...`, `[91,...,100]`
  2. for each subarray, we calculate the sum of elements; for instance, `sum([1,...,10]) = 55`
  3. finally, we combine all intermediate sums into one final sum, our final value

#### 3.1. Clone hello-gwasm-runner

You can do so by cloning [hello-gwasm-runner] on Github.

[hello-gwasm-runner]: https://github.com/golemfactory/hello-gwasm-runner

#### 3.2. Build

Let's try and build our "hello world!" app.


#### Standalone

You can get the full source code of the app
from the [github/golemfactory/hello-gwasm-runner](https://github.com/golemfactory/hello-gwasm-runner) repo. Then, you can build it using standard
`cargo build` command

```
cargo build --release
```

!> If you have issues with `build` make sure that you have **Python2** in your PATH as `python2`

You should then be able to find the build artifacts in `target/wasm32-unknown-emscripten/release`

```
ls target/wasm32-unknown-emscripten/release
```

### 3.3. Run!

In order to execute our cool "hello world!" app, we'll use `gwasm-runner`, and we'll run it using two backends: locally (using your own machine), and on the Golem Brass Beta:

##### Run locally

```
gwasm-runner target/wasm32-unknown-emscripten/release/hello_world.wasm
```

##### Run on Golem Brass Beta

In order to do so, you have to have **Golem Brass Beta** Installed on your machine. [Follow installation instructions](https://docs.golem.network/#/Products/Brass-Beta/Installation). 

> Remember that it is required to run Golem instance in the background during gWASM computations.

When creating a task in the Golem network, there are some more parameters which can be defined. For example, we want to be able to specify how much we're willing to pay for the computation or what the timeout for a task should be. These Golem-specific parameters can be defined in a configuration file which will be used by the runner. By default, these values are the following:

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

?> To change the default values (e.g. the datadir for your local Golem instance) you need to manually create a JSON file under: `$HOME/.config/g-wasm-runner/brass/config.json` for Linux and `$HOME/Library/Application\ Support/g-wasm-runner/brass/config.json`. You can copy the above JSON object, and modify what you need. On Windows will usually refer to `{FOLDERID_LocalAppData}/g-wasm-runner/brass` The runner will print its currently used configuration upon start-up.


```
gwasm-runner --backend Brass -- target/wasm32-unknown-emscripten/release/hello_world.wasm
```

### Dig dipper into gWASM runner

If you would like to know more about the gWASM runner dive into [gWASM applications section](Products/gWASM/gWASM-applications?id=introduction-to-gwasm-applications) where we [show gWASM runner example](/Products/gWASM/gWASM-applications?id=gwasm-runner) you have just compiled and computed. 