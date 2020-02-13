# Quick start - testing gWASM locally

?> This tutorial is based on our Devcon5 gWASM workshops `hello world!` example. If you would like to set up your own Golem Unlimited cluster then follow instructions at [devcon5 workshops page](https://devcon.golem.network).

In this quick tutorial you will:

1. **Install Rust (*stable version 1.38.0*) and emscripten (*1.38.45-fastcomp*)**
2. **Download latest gWASM runner (Command line tool for running gWASM compatible apps locally, via Golem Unlimited or via Brass Golem)**
3. **Run a simple `hello world` task**


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

**2.2.** [emscripten](https://emscripten.org/docs/getting_started/downloads.html#installation-instructions) - **with 1.38.45-fastcomp backend**

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

<!-- Download and install the latest SDK tools:
```bash
./emsdk install latest
``` -->

Make sure to **get a specific version using the fastcomp backend**:
```bash
./emsdk install 1.38.45-fastcomp
```

Make the `1.38.45-fastcomp` "active" for the current user:
```bash
./emsdk activate 1.38.45-fastcomp
```

Activate emscripten environment variables in the current terminal:
```bash
source ./emsdk_env.sh
```


!> For **Windows** users! If you encounter any issues with **emscripten** on Windows we do recommend downloading **WSL** [Windows Subsystem for Linux](https://docs.microsoft.com/pl-pl/windows/wsl/install-win10) and following with the Linux instructions.


----

### 2. Setup Development Environment

**gWASM runner** introduces the minimalistic [gWASM dispatcher API](https://golemfactory.github.io/gwasm-runner/gwasm_dispatcher/index.html) that resembles map-reduce paradigm.
This API consists of only three operations:

1. `split` - divides the problem into subproblems.
2. `execute` - performs computation for all subproblems independently.
3. `merge` - collects all computation results and formulate final result.

gWASM runner enables developers to easily implement applications and run them on top of [Golem Unlimited](https://github.com/golemfactory/golem-unlimited) and also on [Brass Golem 0.21 and later](Products/Brass-Beta/Installation).

?> For Unix systems (or bash owners: default MacOS and Linux) **install gWASM runner** with:

```bash
curl -sSf https://golemfactory.github.io/gwasm-runner/runner-update.sh | bash
```

?> Or download **gWASM runner binary** for your OS:


[gWASM runner for Windows](https://github.com/golemfactory/gwasm-runner/releases/download/0.3.1/gwasm-runner-win64-0.3.1.zip)


[gWASM runner for MacOs](https://github.com/golemfactory/gwasm-runner/releases/download/0.3.1/gwasm-runner-macos-0.3.1.tar.gz)


[gWASM runner for Linux](https://github.com/golemfactory/gwasm-runner/releases/download/0.3.1/gwasm-runner-linux-0.3.1.tar.gz)



---

It might be useful to create a local scratch directory:

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

Before tackling some more interesting problems with gWASM, let's first get acquainted with
the `gwasm-api`, the API which we'll use to interface our apps with gWASM. Essentially
speaking, if you can tailor your app to this API, you can run it on gWASM using our
`gwasm-runner` tool! So, without further gilding the lily, let's crack on!

The best way to present an API is by way of example. For the "Hello world!" example,
we'll try something really simple. Namely, we will try and sum integers in the range
of `1..100` inclusive, but we will split the task into `10` subtasks, or gWASM tasks.
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

Now you can build it using standard `cargo build` command

```
cargo build --release
```

!> In case of compilation failing with the error `linker emcc not found` make sure you have emscripten SDK environment variables set in your shell. If you already went through the prerequisites section then it's likely you simply need to re-activate the emscripten SDK variables. To do so, source the script from the emscripten SDK directory:

```bash
source ./emsdk_env.sh
```

!> If you have further issues with `build`, make sure that you have **Python2** in your PATH as `python2`.

Once the build is finished you can find the artifacts in `target/wasm32-unknown-emscripten/release`. 

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

With your Golem node running, run the below command to compute your task on the Golem network:

```bash
gwasm-runner --backend=Brass target/wasm32-unknown-emscripten/release/hello_world.wasm
```

That's it!

?> Should you need to change the default configuration for the runner (e.g. whether to use Ethereum's mainnet or testnet), there is an option to use a configuration file. By default, the following values are used when creating a Golem task:

```json
{
    "data_dir": "/home/user/.local/share/golem/default",
    "address": "127.0.0.1:61000",
    "budget": 1.0,
    "name": "gwasm-task",
    "net": "testnet",
    "subtask_timeout": "00:10:00",
    "task_timeout": "00:30:00"
}
```

?> To override the default values you will need to create your own, local configuration file. The path to the file depends on your operating system, here are examples for each platform:
- Linux: `$HOME/.config/g-wasm-runner/brass/config.json` 
- MacOS: `$HOME/Library/Application Support/g-wasm-runner/brass/config.json`
- Windows: `C:\Users\<USER_NAME>\AppData\Roaming\Golem Factory\g-wasm-runner\brass\config.json`

As for the contents, you can copy the JSON object shown above and modify its fields as required. The runner will print its currently used configuration upon start-up.


### Dig deeper into gWASM runner

If you would like to know more about the gWASM runner dive into [gWASM applications section](Products/gWASM/gWASM-applications?id=introduction-to-gwasm-applications) where we [show gWASM runner example](/Products/gWASM/gWASM-applications?id=gwasm-runner) you have just compiled and computed. 
