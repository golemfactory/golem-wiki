# Golem Unlimited

---

Golem Unlimited utilizes **trusted** heterogeneous computing resources which are part time idle. It is meant for data center-like setup (e.g., render farms, or desktops within organisation LAN) where network participants trust each other, but it will also support trusted P2P subnetworks (e.g., distributed team machines).

It features the **hub** acting as a requestor and additional worker nodes in the hub’s trusted network acting as **providers**.

Trust within Golem Unlimited subnetwork allows simplifying its design and taking care of only the computation layer. Other components such as economic layers, reputation systems, verification algorithms, and sandboxing (in contrast to the public Golem Network) can be skipped altogether or implemented optionally.

Golem Unlimited joint resources can be used to perform tasks for internal requestor - the hub operator - with no fee. At the same time the hub will be able to expose its subordinate trusted providers to the public [Golem](https://golem.network) Network. In such a setting hub will act as a provider and earn GNTs.  

The latter broadens [Golem](https://golem.network) Network reach, because it currently supports just single machine nodes. With Golem Unlimited it would allow more complex components, such as a whole subnetworks.

Golem Unlimited offers three execution environments:
- host direct -- which does not provide any sandboxing, and requires application integrator to prepare binaries for every operating system
- docker -- integrator needs to prepare single docker image with application
- gWASM -- integrator needs to compile desired app to WASM target and conform to gWASM format

---

#### Use cases
The most current integration for Golem Unlimited is [gwasm-runner](https://github.com/golemfactory/gwasm-runner/) which utilize gWASM execution environment and provides simplistic API that resembles map-reduce paradigm. It enables developers to easily implement simple applications and run them on top of the Golem Unlimited and also on [Brass Golem 0.21 and later](https://blog.golemproject.net/brass-golem-beta-0-21-0-hello-mainnet-gwasm/).

There are more integrations being prepared (outside Golem Unlimited team by with our support).
To list a few:
* [gumpi](https://github.com/golemfactory/gumpi) - [MPI](https://en.wikipedia.org/wiki/Message_Passing_Interface) implemented on top of Golem Unlimited, utilising docker execution environment
* [Hoard Compiler](https://github.com/hoardexchange/HoardCompiler) - Distributed C++ compiler
for Visual Studio 2017 and 2019, which supports host direct mode only for Windows 10.

Initially we have prepared plugins for two use cases that are currently deprecated:
* [Integer factorization](https://github.com/golemfactory/gu-int-factorization) - a "Hello
World" for Golem Unlimited 
* Mining - just to showcase the Golem Unlimited, not a industry grade minig solution 

Here you can watch a short demo for the above two: https://youtu.be/J0LBdg2j6Tk
They are not maitained any more.

#### Installing and testing

Please bear in mind that Golem Unlimited is in its [Alpha](https://en.wikipedia.org/wiki/Software_release_life_cycle#Alpha) stage.

## Hub
Currently we support Hub only on Ubuntu 16.04 LTS and later.

To install Hub you can use the [released](https://github.com/golemfactory/golem-unlimited/releases) Ubuntu `deb`.

### from source
To run Hub on other OS Plaforms refer the [Hub README](gu-hub).

## Provider

To install Provider you can use the [released](https://github.com/golemfactory/golem-unlimited/releases) MacOs `dmg`, Windows `msi` or Ubuntu `deb` packages.

### from source
See the [Provider README](gu-provider) for build instructions.

# Usage

Both [hub](gu-hub) and [provider](gu-provider) can be configured via CLI. Invoke them with `help`
command to see what's possible.

The [hub](gu-hub) comes also with web UI at:
```
http://<hub-ip>:61622/app/index.html
```

#### Project layout
*  `ethkey`: Ethereum keys management
*  `gu-actix`: small util crate defining flatten trait for ActixWeb future
*  `gu-base`: implementation of common parts of Provider and Hub servers
*  `gu-event-bus`: event-bus implementation - publish-subscribe communication between components
*  `gu-hardware`: discovery of hardware resources - GPU, disk space, RAM
*  `gu-hub`: binary of Hub server
*  `gu-lan`: mDNS services discovery
*  `gu-net`: network layer of the application
*  `gu-persist`: filesystem, persistent storage of files
*  `gu-provider`: binary of Provider service
*  `gu-envman-api`: data structures used in communication with execution enviroment component on provider side

---

### Contributing to Unlimited

---

#### How can I send feedback? 
Please add a new issue to the [repository](https://github.com/golemfactory/golem-unlimited/issues). 

If you add information about an error, please append as much information as possible, try to add screenshots and attach your logs to the issue. You also can send your detailed comments to [contact@golem.network](mailto:contact@golem.network).

#### Feedback categories

1. `[ERR]` Information about errors and bugs
2. `[UX]` Opinions about user experience
3. `[FUNC]` Suggestions about functionalities

#### Pull Requests

Even tiny pull requests (e.g., one char typos in a doc) are greatly appreciated.

Before making a large change, it is usually a good idea to first open an issue describing the change to solicit feedback and guidance.
