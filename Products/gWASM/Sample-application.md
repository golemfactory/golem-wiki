# Sample application - g-flite

`g-flite` is a command-line utility which lets you run [flite](http://www.festvox.org/flite/) text-to-speech app on Golem Network.

![g_flite GIF demo](http://i.imgur.com/Ji1CdCN.gif)

?> Note that `g-flite` currently requires that you have a [Golem instance](https://docs.golem.network/#/Products/Clay-Beta/Installation) running on the same machine. If you'd like to use `g-flite` on mainnet your Golem node's version must be `0.21` or higher.

`g-flite` is our demo application and an **end-to-end, ready to use Golem integration**. Most of the implementation details (such as creating Golem tasks and collecting results) are covered by the client, which exposes a user-friendly API. You can use `g-flite` and its source code to familiarise yourself with how gWASM-enabled applications can be implemented.


### Installation

You can grab a precompiled version of the program for each OS: Linux, Mac, and Windows, from [here](https://github.com/golemfactory/g-flite/releases).


### Building from source

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


### Usage

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


#### Issues

This program is still very much a work-in-progress, so if you find (and you most likely will) any bugs, please submit them [in our issue tracker](https://github.com/golemfactory/g-flite/issues/new).


#### License

Licensed under [GNU General Public License v3.0](https://github.com/golemfactory/g-flite/blob/master/LICENSE) with the exception of `flite` WASM binary which is licensed under [BSD-like License](https://github.com/golemfactory/g-flite/blob/master/LICENSE.flite).

---

#### How to run g-flite

1. Open terminal and check if your Golem node is up.

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

The name of the output file `golem.wav` is arbitrary. Note that `g_flite` is CLI program.

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
