
# Use cases

The first and most illustrative use case of Golem is CGI rendering. Other technically similar use cases to implement are scientific, engineering, statistical and financial tasks which need extensive computing and are (technically) feasible to distribute. Check our [blog post](https://blog.golemproject.net/choose-your-own-golem/) to learn more about potential uses.
Golem Factory will not explore and develop all possible use cases, but focus on delivering a task API, Golem Standard Library for developers to integrate any software with the Golem Network. Many use cases will need proprietary software, either existing or designed specially for Golem. To facilitate the use of both open and proprietary software, we will introduce the Application Registry to enable any requestor to use Golem-ready software. If the software is proprietary, then the requestor will be able to use it in a software-as-a-service model. This way Golem will act not only as a market for computing power, but also as a distribution channel for software creators.

---

## Use Case Pipeline

##### Benefits
Golem is on the forefront distributed computing technology development and has been making groundbreaking strides in network security, P2P networking, blockchain and decentralized marketplace mechanisms. Golem provides software providers with more than access to computing resources and a built-in audience. We strongly encourage other developers to team up with us and work together on integrating various software solutions with Golem. For the most promising use-case proposals, our team is poised to jumpstart a cooperation through:

> A comprehensive review of your project’s potential to integrate with Golem
> Technical cooperation on the integration with Golem
> Technical cooperation on the integration with Golem assistance in setting up a plan to monetize your software using Golem, including licensing models financial support and mentorship for projects in initial phases
> Larger financial contributions for the later stages of cooperation
> Joint marketing activities for those integrations launched into production

##### Requirements
While there is great flexibility in how you can choose to develop your ideas with Golem, the best use-cases generally meet the following guidelines:

**MUST HAVES**
- Ability to run vast parts of a computing task in parallel without the need to often synchronize results.
- Small or moderate size (below 1 GB, preferably below 300 MB) of inputs & outputs, so computation takes significantly more time than sending data. Outputs tend to be the most computationally expensive.

**NICE-TO-HAVE**
- Non-sensitive, deterministic result of computations or a simple algorithm to verify whether the result of computations is correct.
- A working product with an established userbase.

If you are not sure whether or not your idea would be a good fit for Golem, reach out to us and tell us more about what you plan to achieve. We are always excited to discuss new ideas with our users and potential partners.

The Golem Project is open source and was founded on a culture of collaboration and the free exchange of ideas. Reach out to contact@golem.network.

---

## Blender

From Blender [website](https://www.blender.org/):

> Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, even video editing and game creation.

Golem supports images and frames rendering from .blend files using Blender.

---

## gWASM

In 0.21.0 Brass Beta release we provided Golem-WASM integration available on mainnet, called [**gWASM**](Products/gWASM/About).

?> It is possible to compile many applications as WebAssembly binaries and run them in a secure and portable manner. To read more on WebAssembly, you can start with [this](https://webassembly.org/), however, note that there are many fantastic sources for beginners on the internet also.

In our [**gWASM**](Products/gWASM/About) integration, your data and **WASM** binary is transferred to the remote machine and executed. The target machine is secured by the in-sandbox execution. The binary is portable and compatible with various OS and environments since it is executed by a runtime engine rather than natively. The solution is designed to run large number of computations in parallel in order to profit from Golem Network capabilities.

#### Disclaimer
This is still a work in progress. The codebase and functionality may change frequently. We do our best to keep the documentation up to date and keep you informed. Please report back to us any issues that you may encounter.

#### Support
We are also open and look forward to your suggestions and experience to make our software better. You can message us on [gWASM channel](https://chat.golem.network/channel/gwasm) on our chat or write us an email to contact@golem.network entitled gWASM.

The WebAssembly task is capable of running arbitrary code compiled to
WebAssembly with Emscripten backend on Golem. Under the hood, the task uses
the [WebAssembly Sandbox](https://github.com/golemfactory/sp-wasm).

#### Usage

There are two ways to use gWASM.
* If you wrote your own algorithm, have custom computation or do tests, then you can create gWASM task yourself and send it directly to **Golem Network**.
* You can create an applicatin with gWASM backend as computation engine. You need to provide a client that serves as user interface and is responsible for creating gWASM tasks and managing them. End users of the application are not burden with technical details as your application seamlessly integrates with gWASM. The same way it is possible to integrate existing application with gWASM.

To read more about how to send **gWASM** task or how to integrate apps with **gWASM** head over [**here**](Products/gWASM/Quick-start)
