# Roadmap

## Current status

---

#### Brass Beta
[**Brass Golem**](https://blog.golemproject.net/ready--set--launch-/) launch in 2018 and progressed up to version [0.22.1](https://github.com/golemfactory/golem/releases/tag/0.22.1).

---

#### Clay Beta
[**Clay Golem**](Products/Clay-Beta/), the second roadmap milestone, has now been released.  We introduced this new milestone in gradual improvements into Brass Golem, adding Clay functionalities, and making the software more robust progressively. Users can [install the software](Products/Clay-Beta/Installation) on a variety of platforms and [participate in both using it on mainnet or testing](/Products/Clay-Beta/Testing). [**Clay Golem**](/Products/Clay-Beta/Understanding-Beta) provides CGI rendering for Blender, gWASM application building, and interacts with the new Task API.

---

#### Unlimited
Part of the Golem team is focused strictly on developing [**Golem Unlimited**](Products/Unlimited/Basic-Usage). This product utilizes trusted heterogeneous computing resources which are part time idle. Unlimited is meant for data center-like setups (e.g., render farms, or desktops within organisation LAN) where network participants trust each other, however additionally supportingt trusted P2P subnetworks (e.g., distributed team machines). The goal of Golem Unlimited is manyfold. First of all, it seeks to broaden the Golem Network reach. Each Golem Unlimited instance will be a separate subnetwork, which can be shared in the Golem network as a single provider. Secondly, these subnetworks may also be utilized by the business running them — for internal purposes only. We aim to provide a seamless experience regarding the set-up, use, and new integrations.

---


## Golem milestones

### Brass Golem {docsify-ignore}
> ...these are created to fulfill one goal, set at the time of their creation, and wait with absolute patience until activated to perform this task.

**Brass Golem** is where we are at the moment with our proof-of-concept, at a Beta stage, both mainnet and testnet available. This current version of Golem is only focused on rendering in Blender, and although it will be useful to CGI artists, we consider CGI rendering to be a proof of concept primarily, and also a training ground. Our team understands that Blender CGI rendering will not create enough turnover to cover the work in the project, however we are proud to have launched the first decentralized compute power marketplace.

List of proposed  functionalities:
* [x] Basic Task Definition Scheme
* [x] Basic Application Registry - first version of Ethereum-based Application Registry which allows to save tasks defined with basic task definition scheme
* [x] IPFS integration for coordinating task data and content delivery, e.g. deliver files needed to compute a task, deliver the results back to the requester
* [x] Docker environment with Golem-provided images for sandboxing the computations
* [x] Local verification: a probabilistic verification system based on the calculation of a fraction of the task on the requestor’s machine
* [x] Basic UI and CLI
* [x] Basic reputation system
* [x] Implementation of Blender and LuxRender tasks *LuxRender was defered due to small user base*
* [x] Concent Service

Current version: [0.22.1](https://golem-releases.cdn.golem.network/)

### Clay Golem {docsify-ignore}
> There is a chance (...) that a Clay Golem will be possessed by a chaotic evil spirit. If this happens control is lost and the Golem attacks the closest living creature.

**Clay Golem** is under development. We are introducing this new milestone in gradual improvements into **Brass Golem**, adding Clay functionalities, and making the software more robust progressively.

Clay Golem introduces a significant progress leap from the Brass milestone. Clay Golem will introduce the Task API and the Application Registry, shaping Golem into a multi-purpose, generalized distributed computation solution. Developers will be able to build integrations with Golem. This feature, however, may come at the cost of compromised stability and security, so the version should be considered an experiment for early adopters and tech enthusiasts to prototype their new ideas and solutions on.

* [ ] Basic Task API: an interface that allows a user to define simple tasks
* [x] GPU support
* [ ] Initial Transaction Framework Model with hard-coded payments schemes
* [ ] Redundant verification: a verification scheme based on the comparison of redundant computation results
* [ ] Basic subtask delegation: a mechanism for more fine grained subtasks distribution (e.g. can be used to help with creation of an ad-hoc proxy delegating tasks in a more efficient manner)
* [ ] Basic tutorials for software developers
* [ ]  Support for virtual machines as a sandbox for computation
* [ ]  Set of extended tutorials for developers explaining how to implement their own tasks for Golem network
* [ ]  Example computational chemistry use case implementation
* [ ]  Example machine learning use case implementation


### Stone Golem {docsify-ignore}
> Stone Golems do not revoke their creators control like (...) Clay Golems.

Stone Golem will add more security and stability, but also enhance the functionalities implemented in Clay. An advanced version of the Task API will be introduced. The Application Registry will be complemented by the Certification Mechanism that will create a community-driven trust network for applications. Also, the Transaction Framework will create an environment that will allow Golem to be used in SaaS models.

* [ ] Full Task API: an interface that allows users to define tasks
* [ ] Application Registry: where developers publish applications ready to run on Golem
* [ ] Transaction Framework that allows a choice of remuneration models for task templates
* [ ] Basic Certification support for Software: a mechanism that allows users to whitelist and blacklist applications, building a decentralized trust network
* [ ] Support for SaaS: the possibility to add support for proprietary software which can be used in tasks. Payments for task creators should also be implemented in the application
* [ ] Application Registry and Transaction Framework tutorials for developers
* [ ]  SaaS tasks examples - example use cases that show developers how to create tasks available in a SaaS model

### Iron Golem {docsify-ignore}
> Iron Golems are made of iron and are among the strongest type of Golem. They never revoke the control of the wizard that created them.

We envision Iron as a deeply tested Golem that gives more freedom to developers, allowing them to create applications that use an Internet connection or applications that run outside the sandbox. Iron Golem should be robust, highly resistant to attacks, stable and scalable. However, the decision to accept higher-risk applications will still belong to the providers renting their computing power. Iron will also introduce various tools for developers that will make application creation more seamless. Additionally, the Golem Standard Library will be implemented.

* [ ] External data link: enables Golem to use resources and interface with software outside of the Golem network
* [ ] Host-direct mode: a trusted mode for explicitly whitelisted applications or invulnerable environments, where Golem runs computation outside the Docker/VM
* [ ] Certification support for Environments:
* [ ]  Network Status Dashboard: public website displaying basic stats about Golem network
* [ ] Additional security mechanism: tasks that uses public data link or host-direct mode are particularly challenging for security. Additional means may be necessary to make running those tasks safer for providers (eg. central audit oracles, agreements contracts or code-execution observers may be implemented)
* [ ] Golem web client: a web interface for Golem nodes as an alternative to the native GUI / console interface
* [ ] Golem Developer Toolkit: a set of diagnostic and test tools to make creation process of applications for Golem even easier
* [ ] Reputation system: reputation protocol that allows the node to effectively supervise network behaviour
* [ ] Advanced transaction system: a system that automatically tries to match requestors with providers in a way that is most profitable to all participants
* [ ] Golem Developer Toolkit tutorial
* [ ] Provider dashboard: providing stats, graphs and more advanced settings management for providers
* [ ] libp2p integration: changes in p2p and network protocols using new version of libp2p
* [ ] MapReduce and topological sorting of tasks: add the next abstraction layer, allowing users to define more generic tasks that are interdependent
* [ ] Golem Standard Library (GSL): language agnostic functionality providing access to the low level core components required to interact with Golem from within a programming language. Special attention will be paid to I/O functions exposed to task and subtask related functionalities. Each supported programming language will have bindings to the GSL. These bindings will serve as a means of extending the default standard library of the language in question (custom extensions provided by developers of programming languages will also be possible). With GLS an automatic task definition, independent from the operating system, will be possible. GSL will allow users to create Golem applications using different programming languages, which shall significantly increase the number of potential use cases and simplify task creation process
* [ ] GSL tutorial for developers


### Connected repositories {docsify-ignore}
* [Ethereum Payments for Golem](https://github.com/imapp-pl/ethereum-payments): The Ethereum payment module for Golem
* [Micropayments Whitepaper](https://github.com/golemfactory/golem-micropayments-whitepaper): A whitepaper about micropayments for Golem
