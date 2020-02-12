# Sandboxing

We developed the sandbox and **every gWASM application is run within the sandbox on a provider’s machine**. It brings security for providers and allows for better control over execution without sacrificing the performance. This is written in Rust and is available for all common OS. We ship it with Golem client, so users-providers do not need to take any additional steps. For the purpose of tests and development, it is possible to run it locally without Golem client. See below for instructions. The sandbox **includes embedded SpriderMonkey from Mozilla** as the runtime for WASM. Remember that **only Emscripten compiled binaries are supported**.


#### SpiderMonkey-based WebAssembly Sandbox

?> A WebAssembly sandbox using standalone SpiderMonkey engine. For `v8` version, see [golemfactory/v8-wasm](https://github.com/golemfactory/v8-wasm).

### Quick start guide

This guide assumes you have successfully built the `wasm-sandbox` binary; for build instructions, see section [Build instructions](Products/Brass-Beta/gWASM?id=build-instructions) below. If you are running Linux, then you can also use the prebuilt binaries from [here](https://github.com/golemfactory/sp-wasm/releases).


#### 1. [Check instructions on how to create and cross-compile simple program](Products/gWASM/Building-gWASM-applications?id=how-to-compile-gwasm-application)


#### 2. Create input and output dirs and files

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


#### 3. Run!

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

1. using Docker (if you've followed [Using Docker (recommended)](Products/gWASM/Sandboxing?id=using-docker-recommended) build instructions)

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


### Build instructions


#### Using Docker (recommended)

To build using Docker, simply run

```bash
$ ./build.sh
```

If you are running Windows, then you can invoke the command in the shell script manually in the command line as follows

```bash
docker build -t wasm-sandbox:latest .
```


#### Natively on Linux

?> **NOTE: Building the sandbox from source requires rustc 1.38.0 due to fastcomp backend compability for `wasm32-unknown-emscripten` target, and other changes that are incompatible with SpiderMonkey Rust wrappers.**
To build natively on Linux, first install rustc `1.38.0` toolchain

```bash
rustup toolchain add 1.38.0
```
Next, you need to follow the installation instructions of [servo/rust-mozjs](https://github.com/servo/rust-mozjs) and [servo/mozjs](https://github.com/servo/mozjs). The latter is Mozilla's Servo's SpiderMonkey fork and low-level Rust bindings, and as such, requires C/C++ compiler and Autoconf 2.13. See [servo/mozjs/README.md](https://github.com/servo/mozjs) for detailed building instructions.


After following the aforementioned instructions, to build the sandbox, run

```bash
cargo +1.38.0 build
```

If you would like to build with SpiderMonkey's debug symbols and extensive logging, run instead

```bash
cargo build +1.38.0 --features "debugmozjs"
```


#### Natively on other OSes

We currently do not offer any support for building the sandbox natively on other OSes.


#### CLI arguments explained

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

* If you were following the [Quick start guide](#quick-start-guide) you already know that every Wasm bin needs to be cross-compiled by Emscripten with `-s BINARYEN_ASYNC_COMPILATION=0` flag in order to turn off the use of async IO which we currently don't support.

* Building the sandbox from source requires rustc 1.38.0 due to fastcomp backend compability for `wasm32-unknown-emscripten` target, and other changes that are incompatible with SpiderMonkey Rust wrappers.

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

