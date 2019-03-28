# Golem Unlimited

---

Golem Unlimited utilizes **trusted** heterogeneous computing resources which are part time idle. It is meant for data center-like setup (e.g., render farms, or desktops within organisation LAN) where network participants trust each other, but it will also support trusted P2P subnetworks (e.g., distributed team machines).

It features the **hub** acting as a requestor and additional worker nodes in the hub’s trusted network acting as **providers**.

Trust within Golem Unlimited subnetwork allows simplifying its design and taking care of only the computation layer. Other components such as economic layers, reputation systems, verification algorithms, and sandboxing (in contrast to the public Golem Network) can be skipped altogether or implemented optionally.

Golem Unlimited joint resources can be used to perform tasks for internal requestor - the hub operator - with no fee. At the same time the hub will be able to expose its subordinate trusted providers to the public [Golem](https://golem.network) Network. In such a setting hub will act as a provider and earn GNTs.  

The latter broadens [Golem](https://golem.network) Network reach, because it currently supports just single machine nodes. With Golem Unlimited it would allow more complex components, such as a whole subnetworks.

---

#### Use cases
So far we have prepared plugins for two use cases:
* Integer factorization
* Mining 

We will open source those plugins soon.

#### Installing and testing

Please bear in mind that Golem Unlimited is in its [Alpha](https://en.wikipedia.org/wiki/Software_release_life_cycle#Alpha) stage.

##### binary
To install you can use the [released](https://github.com/golemfactory/golem-unlimited/releases) Ubuntu `deb` and MacOs `dmg` binary packages.

The detailed steps can be found in our [demo](https://youtu.be/J0LBdg2j6Tk)

##### from source
To run the hub, go to the `gu-hub` subdir and perform
```bash
$ cargo run -- -vv server run
```

To run the provider and connect to your hub at 192.168.1.1 go to `gu-provider` subdir and run
```bash
$ cargo run -- -vv -a 192.168.1.1:61622 server run
```

#### Usage
See our demo for sample usage
<iframe width="100%" height="315" src="https://www.youtube.com/embed/J0LBdg2j6Tk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Both **hub** and **provider** can be configured via CLI. Invoke them with `help` command to see what's possible.

The **hub** comes also with web UI at:
```bash
http://<hub-ip>:61622/app/index.html
```

#### Project layout

*  `gu-actix`: small util crate defining flatten trait for ActixWeb future
*  `gu-base`: implementation of common parts of Provider and Hub servers
*  `gu-ethkey`: Ethereum keys management
*  `gu-event-bus`: event-bus implementation - publish-subscribe communication between components
*  `gu-hardware`: discovery of hardware resources - GPU, disk space, RAM
*  `gu-hub`: binary of Hub server
*  `gu-lan`: mDNS services discovery
*  `gu-net`: network layer of the application
*  `gu-persist`: filesystem, persistent storage of files
*  `gu-provider`: binary of Provider service
*  `gu-webapp`: web application building development tools
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
