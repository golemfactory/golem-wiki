# Golem

<!-- [![Buildbot](https://buildbot.lwan.ws/img/MN1w5S/buildpackage_linux)](https://buildbot.golem.network/buildbot/#/builders/buildpackage_linux)
[![Buildbot](https://shield.lwan.ws/img/MN1w5S/buildpackage_macOS)](https://buildbot.golem.network/buildbot/#/builders/buildpackage_macOS)
[![Buildbot](https://shield.lwan.ws/img/MN1w5S/buildpackage_windows)](https://buildbot.golem.network/buildbot/#/builders/buildpackage_windows)
[![codecov](https://codecov.io/gh/golemfactory/golem/branch/develop/graph/badge.svg)](https://codecov.io/gh/golemfactory/golem) -->

?> Golem is a decentralized marketplace for computing power. It consists of a network of nodes that implement the Golem network protocol. We provide the default implementation of such a node in the form of the Golem daemon, called yagna.

The nodes in the network can act as providers or requestors. Both the requestor and the provider share the same implementation of the Golem daemon.
The diagram above shows the architecture of the network. For the sake of simplicity, it shows just one requestor and one provider.


---

## Products

### Yagna (the current implementation of the Golem)

* [SDK documentation](https://handbook.golem.network)

### Clay Beta

!> **WARNING:** Clay Golem is no longer supported. To read the documentation for the New Network (Yagna), please head to the [Golem SDK documentation](https://handbook.golem.network)

* Installing Golem Clay beta on [Windows 10](Products/Clay-Beta/Installation?id=windows-quick-install)
* Installing Golem Clay beta on [MacOs](Products/Clay-Beta/Installation?id=macos-quick-install)
* Installing Golem Clay beta on [Ubuntu](Products/Clay-Beta/Installation?id=ubuntu-quick-install)

#### Usage & troubleshoothing

The most common problems are described in [Common issues & troubleshooting](Products/Clay-Beta/Issues-&-Troubleshooting) section

>[!WARNING|style:callout]
Golem Project is work in progress. The current version is a Beta stage -  named Clay Golem Beta - and it's not fully secure. 
>Check [this list of issues](https://github.com/golemfactory/golem/labels/security) for more details. 
>Make sure to understand all risks before installing the software.

Benchmarks:
* General: [Minilight](http://www.hxa.name/minilight) by Harrison Ainsworth / HXA7241 and Juraj Sukop.
* Blender: [scene-BMW](https://www.blender.org/download/demo-files/).
---

### gWASM

!> **WARNING:** Clay Golem is no longer supported. To read the documentation for the New Network (Yagna), please head to the [Golem SDK documentation](https://handbook.golem.network)

?> Any code that can be compiled to WASM, can be distributed on Golem Network. gWASM allows you to run WebAssembly binaries on providers’ machines by turning WASM into a container for server-side parallel computations.

* [Quick start - testing gWASM locally](Products/gWASM/Quick-start)
* [gwasm-runner](Products/gWASM/gWASM-applications?id=gwasm-runner) is a project with a single goal: making developing new gWASM apps as simple as possible
* Learn how to [Create gWASM tasks in Golem](Products/gWASM/gWASM-tasks)
* Learn [how to build gWASM application](Products/gWASM/Building-gWASM-applications)
* Check our [sample application - g-flite](Products/gWASM/Sample-application) as a reference of your own app if you are a Developer. It is also **the simplest way to play around with gWASM if you are not a developer**

---

### task API

!> **WARNING:** Clay Golem is no longer supported. To read the documentation for the New Network (Yagna), please head to the [Golem SDK documentation](https://handbook.golem.network)

The Task API is a python library containing a programming interface and utility functions. When using this library for their project, developers can build apps and have them easily run on Golem.

* Check our [Task API documentation](https://taskapi.docs.golem.network/)

---

### Contact  

[Chat](https://chat.golem.network)

[Twitter](https://twitter.com/golemproject)

[Reddit](https://www.reddit.com/r/GolemProject/)

email contact@golem.network

---

#### Other links

[Website](https://golem.network)

[Facebook](https://www.facebook.com/golemproject)

[Blog](https://blog.golemproject.net/)

---

### Job offers

All current job offers can be found [here](https://golem.network/careers/)
