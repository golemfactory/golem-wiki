# Golem Milestones


## [Brass Golem](https://github.com/golemfactory/golem/milestone/11) 
> ...these are created to fulfill one goal, set at the time of their creation, and wait with absolute patience until activated to perform this task.

Brass Golem is where we are at the moment with our proof-of-concept, in alpha testing now. This current version of Golem is only focused on rendering in Blender and LuxRender, and although it will be useful to CGI artists, we consider CGI rendering to be a proof of concept primarily, and also a training ground. Brass Golem should be frozen within 6 months after crowdfunding and a full battery of tests will be administered. Even though we do not expect that Blender CGI rendering will create enough turnover to justify all the work we have put into the project, this will be the first decentralized compute market.

List of proposed  functionalities:
* Basic Task Definition Scheme;
* Basic Application Registry - first version of Ethereum-based Application Registry which allows to save tasks defined with basic task definition scheme;
* IPFS integration for coordinating task data and content delivery, e.g. deliver files needed to compute a task, deliver the results back to the requester;
* Docker environment with Golem-provided images for sandboxing the computations;
* Local verification: a probabilistic verification system based on the calculation of a fraction of the task on the requestor’s machine;
* Basic UI and CLI;
* Basic reputation system; 
* Implementation of Blender and LuxRender tasks.

Next version: [0.4] (https://github.com/golemfactory/golem/milestones/Brass%200.4) 

## [Clay Golem](https://github.com/imapp-pl/golem/milestone/8)
> There is a chance (...) that a Clay Golem will be possessed by a chaotic evil spirit. If this happens control is lost and the Golem attacks the closest living creature.

Clay Golem is a big leap from the Brass milestone. Clay Golem will introduce the Task API and the Application Registry, which together are going to make Golem a multi-purpose, generalized distributed computation solution. Developers will have the means to integrate with Golem. This advance, however, may come at the cost of compromised stability and security, so this version should be considered an experiment for early adopters and tech enthusiast to prototype their new ideas and solutions on Clay.

* Basic Task API: an interface that allows a user to define simple tasks;
* Initial Transaction Framework Model with hard-coded payments schemes;; 
* Redundant verification: a verification scheme based on the comparison of redundant computation results;
* Basic subtask delegation: a mechanism for more fine grained subtasks distribution (e.g. can be used to help with creation of an ad-hoc proxy delegating tasks in a more efficient manner);
* Basic tutorials for software developers;
* (+) Support for virtual machines as a sandbox for computation;
* (+) Set of extended tutorials for developers explaining how to implement their own tasks for Golem network;
* (+) Example computational chemistry use case implementation;
* (++) Example machine learning use case implementation.


## [Stone Golem](https://github.com/golemfactory/golem/milestone/9)
> Stone Golems do not revoke their creators control like (...) Clay Golems.

Stone Golem will add more security and stability, but also enhance the functionalities implemented in Clay. An advanced version of the Task API will be introduced. The Application Registry will be complemented by the Certification Mechanism that will create a community-driven trust network for applications. Also, the Transaction Framework will create an environment that will allow Golem to be used in a SaaS model.

* Full Task API: an interface that allows users to define tasks;
* Application Registry: where developers publish applications ready to run on Golem;
* Transaction Framework that allows a choice of remuneration models for task templates;
* Basic Certification support for Software: a mechanism that allows users to whitelist and blacklist applications, building a decentralized trust network;
* Support for SaaS: the possibility to add support for proprietary software which can be used in tasks. Payments for task creators should also be implemented in the application;
* Application Registry and Transaction Framework tutorials for developers;
* (+) SaaS tasks examples - example use cases that show developers how to create tasks available in a SaaS model;

## [Iron Golem](https://github.com/golemfactory/golem/milestone/10)
> Iron Golems are made of iron and are among the strongest type of Golem. They never revoke the control of the wizard that created them.

Iron is a deeply tested Golem that gives more freedom to developers, allowing them to create applications that use an Internet connection or applications that run outside the sandbox. Of course, the decision to accept higher-risk applications will still belong to the providers renting their computing power. Iron Golem should be robust, highly resistant to attacks, stable and scalable. Iron will also introduce various tools for developers that will make application creation far easier. Finally, the Golem Standard Library will be implemented.

* (+) External data link: enables Golem to use resources and interface with software outside of the Golem network;
* (+) Host-direct mode: a trusted mode for explicitly whitelisted applications or invulnerable environments, where Golem runs computation outside the Docker/VM;
* (+) Certification support for Environments: 
* (+) Network Status Dashboard: public website displaying basic stats about Golem network;
* (+) Additional security mechanism: tasks that uses public data link or host-direct mode are particularly challenging for security. Additional means may be necessary to make running those tasks safer for providers (eg. central audit oracles, agreements contracts or code-execution observers may be implemented);
* (+) Golem web client: a web interface for Golem nodes as an alternative to the native GUI / console interface;
* (++) Golem Developer Toolkit: a set of diagnostic and test tools to make creation process of applications for Golem even easier;
* (++) Reputation system: reputation protocol that allows the node to effectively supervise network behaviour; 
* (++) Advanced transaction system: a system that automatically tries to match requestors with providers in a way that is most profitable to all participants;
* (++) Golem Developer Toolkit tutorial
* (++) Provider dashboard: providing stats, graphs and more advanced settings management for providers;
* (+++) devp2p integration: changes in p2p and network protocols using new version of devp2p;
* (+++) MapReduce and topological sorting of tasks: add the next abstraction layer, allowing users to define more generic tasks that are interdependent;
* (+++) Golem Standard Library (GSL): language agnostic functionality providing access to the low level core components required to interact with Golem from within a programming language. Special attention will be paid to I/O functions exposed to task and subtask related functionalities. Each supported programming language will have bindings to the GSL. These bindings will serve as a means of extending the default standard library of the language in question (custom extensions provided by developers of programming languages will also be possible). With GLS an automatic task definition, independent from the operating system, will be possible. GSL will allow users to create Golem applications using different programming languages, which shall significantly increase the number of potential use cases and simplify task creation process;
* (+++) GSL tutorial for developers.
