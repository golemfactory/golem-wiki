#### What is Golem Network?

Golem is a decentralized computation network, a new way of distributing redundant computing power to those who are in need of it, on-demand. It creates a peer-to-peer network where users join on an equal basis to buy and sell computation, splitting up complicated tasks into smaller subtasks in the network. In Golem there’s no central authority and no user is more or less important than another.

#### How are your going to verify computations?
There will be different methods depending on the task type. In the future, a user who adds a new task can implement a new verification method that suits them. Possible solutions may involve: simple correctness: checking of the result, eg. proof-of-work, redundant computation: ie. a few providers compute same part of the task and their results are compared, computing small, random part of the task and comparing this part with the result sent by the provider, ie. comparing the color of few random pixels in rendered picture, analysis of output logs. See our [blog post](https://blog.golemproject.net/more-twain-less-cheating/) for more info on our verification ideas

#### Why are you making it decentralized?
With decentralization, it will be possible to achieve full scalability without expanding and maintaining our own network and server infrastructure; the solution will also be free from single points of failure and resistant to attempts to disable and censor the network.

#### Why are you using Ethereum?
We are building the transaction framework on top of Ethereum. Ethereum gives us expressive power, which is much-needed when implementing advanced, trustless schemes. Check our [blog post](https://blog.golemproject.net/why-ethereum/) to learn more.

#### Can Golem be copied?
The Golem software is open-source and as such it can be forked by other parties. Golem forks may will emerge over time for either for specialised or general purposes. Golem's core business will remain unaffected by this. Golem business model strongly favors larger networks over smaller networks, so the first and largest network will always be preferable over the smaller networks.

> Golem Network delivers is infrastructure, open for any project, software, dapp, community etc. willing to use it.

Any individual or organisation interested in building a decentralized solution (or a decentralized marketplace) will be able to use Golem as a platform. Consequently, developers will not be interested in “copying” Golem, given they are provided the features they require. Requestors are free to choose where to buy computing power based on price and functionality. We consider Amazon Web Services, Google Cloud and other cloud providers as competitors, being our aim to provide similar functionalities at significantly lower prices.

#### Fairness in the network
The most important is facilitating a direct connection and a quick network that allows nodes to get tasks assigned to them as quickly as possible. It's a FIFO system. A competition layer is added where the nodes with the best price / benchmark / reputation will be favored by the requestors, based on their requirements. During the growth of the network, diverse methods will be tested and implemented to give the control to the users and ensure a healthy, fair, network.

#### Golem vs supercomputers
Supercomputers use fast low latency links between processors to exchange information about states of computation really (really) fast. Golem is being created to function in a different environment - medium to high latency connections. Golem is solving different sets of tasks at a fraction of the price.

#### Are you using some external solutions / libraries?
We're using modified version of Dat Project (https://datproject.org/) called HyperG for resource distribution and Docker (https://www.docker.com/) containers as computational environments.


#### What are the optimal settings for my machine to run Golem?

In general we recommend a processor with multiple cores and lots of RAM. At minimum, you can run Golem with:

* 2 GB RAM
* 2 cores
* 20 GB HDD
* public IP or ability to forward ports

For more demanding renders like the Production Benchmark (https://www.blender.org/download/demo-files/) you will need at least:

* 16 GB RAM
* 6 cores

Nvidia single core GPUS on Linux environment are supported as well, please make sure to have the software up to date.

We do not have a standard for the "optimal" Golem machine. As the network grows there could be a way to determine which configurations perform better than others, and steadily, computing standards will become more refined. At the moment, you can follow the rule of thumb: "the more power you are willing to spare, the more tasks you will receive".

#### How can one integrate with Golem?

If you’re a developer and want to add your code to Golem, the simplest way is to use WebAssembly (WASM). See the [gWASM section](/Products/gWASM/About) of the documentation to learn more. The good news about WASM is that you can easily compile the code that is written in other languages. So if you have code written in C/C++/RUST, you can compile each to the WebAssembly binary and use it with Golem the same way you’d normally use WebAssembly code. If you don’t want to write anything in those languages or you want to do something more complicated, the Task API allows more versatility and is available on mainnet since the [Clay Golem](https://blog.golemproject.net/clay-golem-rises/) release.

#### What is gWASM?

[gWASM](/Products/gWASM/About) stands for WebAssembly on Golem. It is intended to be a bridge between applications and extensible infrastructure. It gives your applications or services easy access to external and decentralized computational power. This access happens in an elastic manner, meaning that you rent as much infrastructure as you need and when you need it.

#### What is the Task API?

Recently, [we introduced](https://blog.golemproject.net/the-shiny-new-task-api-fleshed-out/) the new Task API. The Task API is a python library containing a programming interface and utility functions. Updates created by requestors should be able to answer a short list of RPC calls. You can read more about these calls in the [Task API documentation](https://taskapi.docs.golem.network/).

#### What data do I share with Golem?

It depends on you. You can use Golem app fully anonymously if you wish to. If this is the case, then during the first start of the app during the onboarding process, make sure to uncheck the icons that reads "I want to help Golem by sending my statistics." and "I want to help Golem by sending my logs.". If on the other hand, you would like to helps us improve the app, sending this data will helps us a lot with identifying the most common issues in the app. We use both traceback error and monitor data to help improve the app. We will automatically send any errors that occur in your Golem instance to our dev team so they can improve the product in later releases. We are creating a live feed of traceback errors so we can identify bugs quicker and speed up development on new features.

If you at any point change your mind, you can run golem trough the [CLI](/Products/Clay-Beta/Command-line-interface) and then `terms` type `n` both to `Enable monitor` and `Enable talkback`.

You can find out more in our [privacy policy](https://golem.network/privacy/)

#### How is data protected and kept private on Golem Network?

For providers, the solution is relatively easy using Sandboxing. You can read about this more in the [Sandboxing section](/Products/gWASM/Sandboxing) of the documentation.
The more interesting part of the question is ‘how are we going to protect the data you send as a requestor?’. In the classical scenario where you’re sending you data to the cloud, you’re not getting any protection. It’s essentially a trusted setup between the requestor and providers, an option which is also possible in Golem using Golem Unlimited.

#### How much money can I expect to make with Golem?

It is too early to give estimates like this, but you can refer to our [blog post](https://medium.com/golem-project/why-should-render-farms-be-afraid-of-golem-3dd1b9e70f47) to understand better how we fit in the market and what financial and technical advantages we offer.

As we grow, tasks in the network will multiply, and the providers will start making more GNT.

#### Why do I need GNT and ETH?

- GNT:

GNT or Golem Network Token is needed to pay for computations on the network and is the currency that drives our marketplace. As a Requestor, you set a bid for an amount of GNT you are willing to pay to have your task completed. As a Provider, you earn GNT by computing tasks for Requestors. You can set your minimum and maximum price thresholds in your settings.

- ETH:

Golem uses the Ethereum blockchain to facilitate fast and secure payments between requestors and providers. ETH is the native currency of Ethereum and is used to pay for transaction fees on the network. Only a small amount is needed to complete a transaction. All Applications built on the Ethereum blockchain pay for transactions using ETH.

#### Feature Requests

To help get more visibility for your request feel free to send us more details to contact@golem.network. We are always looking to improve our app and your feedback is appreciated.

Please include in your message:
* Screenshots
* Use Case
* Pain points of existing system

If your issue is severe and disrupting your workflow within the Golem App, you can report it here as well: https://github.com/golemfactory/golem/issues


#### What do I do if something goes wrong?

In case you have any error while running Golem you should:

* Make sure you have the [latest version](https://golem-releases.cdn.golem.network/) installed

* Make sure your ports are forwarded properly or have a router that supports uPNP

* [Check your logs](/Products/Clay-Beta/Testing?id=where-are-the-logs), copy any Error or Critical message you find and search for them on our Github. This will help you find any related issues, open bugs, or troubleshooting tips

* [Check our troubleshooting doc](/Products/Clay-Beta/Issues-&-Troubleshooting) for related errors and fixes

* Reach out to us on [Golem Chat](chat.golem.network) with a detailed description of the issue

* Send a detailed description of the issues along with attached log files to contact@golem.network

* If believe you have discovered a bug in the system or a missing critical feature, you can [create an issue on GitHub](https://github.com/golemfactory/golem/issues). Please provide relevant log entries, screenshots, and detailed descriptions of expected vs. actual app behavior. Please provide relevant log entries, screenshots, and detailed descriptions of expected vs. actual app behavior. For more instruction on reporting issues [check here](/Products/Clay-Beta/Testing?id=what-kind-of-comments-do-we-expect)


#### Does Golem Factory invest in other businesses? ICOs?

We do not invest in ICOs, nor we speculateETH or other cryptocurrencies. In cases where a project’s technology overlaps with Golem, or which would make good use cases for Golem, we might invest time and resources in cooperation for mutual benefit.

Golem chooses to cooperate with the ecosystem by working together with others, rather than investing capital.


#### What is the purpose of Golem Network Token?

GNT is used to pay for rented computing power on the network. For more information about how GNT fits into the network, see our blog post on the [Economics of the Golem Network Token](https://blog.golemproject.net/the-economics-of-the-golem-network-token/)

#### Can I deposit and withdraw real GNT and ETH during the Beta stage?

Yes, Golem has been deployed into the Ethereum Mainnet in April 2018.
Make sure your Golem App is on mainnet to do so, and proceed only after learning how to do this properly.
We recommend you first using our testnet version to familiarize yourself with the app, before going to mainnet. Please remember transactions in the blockchain are irreversible and the Golem team cannot help if the wrong transaction is made.


#### Where to Purchase GNT

While we do not endorse or work with any exchanges directly, you can find a list of exchanges that offer GNT here:

[coingecko.com/en/coins/golem](https://www.coingecko.com/en/coins/golem)
[coinpaprika.com/coin/gnt-golem](https://coinpaprika.com/coin/gnt-golem/)

#### What wallet should I use to store GNT?

The two most popular wallets used to store Golem are:

* https://mycrypto.com
* https://metamask.io

Be sure to read and follow the wallets safety instructions before sending your GNT to your new wallet. There are a lot of phishing scams out there, and if you are not careful, you can easily compromise your wallet security. If you follow their instructions carefully you should have no problem.

For more wallet suggestions from our users go to our [chat](https://chat.golem.network).

#### "I sent my tokens to the wrong address and my GNT is gone"

As mentioned, transactions on the blockchain are irreversible. Moreover, we do not work directly with any exchanges or facilitate transactions of GNT from Wallets to Exchanges or vice versa. For that reason we cannot help you get your tokens back or reverse the transaction. Transactions on the blockchain are irreversible.

These are some suggestions that might help bring clarity to your issue:

* Search for the transaction on etherscan.io, you only need to enter your public key/address in the “search” option
* You can use your public key
* Gather information from etherscan (wallet address, transaction ID, hashes, etc.) and send to your exchange’ support team
* If the support team is off-duty (we try to cover as many time-zones as possible, but weekends are less active). Please post on the exchanges’ subreddit to get assistance from other users.

Golem Factory is solely dedicated to the improvement of the software. The GNT token is an important part of our ecosystem but as any other token, it operates on a free market. Golem Factory cannot provide assistance or assume any responsibility for  transactions between independent investors and 3rd party exchanges, or any event relating GNT87 happening outside of the Golem Software.

#### What does the future and endgame look like for Golem?

In order to allow for a future where censorship resistance and privacy is available for everyone, we need to build networks to stimulate such freedoms. What we want to build at Golem is the tool that can connect computers borderless-ly across the world, and without the risk of censorship.

#### How does Golem Unlimited fit in the Golem Network ecosystem?

[Golem Unlimited](Products/Unlimited/Basic-Usage) allows users to create an internal trusted network of computers with one of them, called the Hub being in charge. The Hub is a requestor and other computers in the company join it as providers. It is meant for data center-like setup (e.g., render farms, or desktops within organization LAN) where network participants trust each other, but it will also support trusted P2P subnetworks (e.g., distributed team machines).

#### How is GPU integration coming along with MacOS and Windows?

There’s difficulty with exposing GPU to Docker containers on Windows and MacOS. GPU support is technically possible on both these operating systems, although we would need to tailor some new computation environments for those operating systems and make sure that the behaviour is consistent between them. As we continue to rely exclusively on Docker it’s not possible to use GPU with Golem on Windows and MacOS.

#### What is the ERC20 migration and how will it take place?

This refers to us migrating GNT to be a fully ERC20 compliant token. We’ve been working with ETHWorks on finding the best approach for this task.

#### How will GNT’s migration to the ERC20 standard benefit users?

Working together with ETHWorks and audit firms, our goal is to make sure that the passage to ERC20 allows the (new)GNT to be able to adapt to various matters: for instance, to be used for [layer 2 scaling solutions](https://blog.golemproject.net/scaling-golem-research-on-scalability-alternatives-update/), or Universal Logins, gassless transactions, among others. Right now, doing gassless transactions with the current GNT is cumbersome, and there are many solutions in the market that would be a great fit if GNT was ERC20.
An added (big) benefit for migrating towards ERC20, is to leverage DeFi tools and protocols, especially DEXes. Providing the first (ERC20) GNT liquidity pools for Uniswap and other similar projects is something that’s definitely in our plans for a long time.

As we continue the work & research, we may come up with more ideas that go beyond this, but our main focus remains on giving our users the chance to improve their Golem experience, trade without KYC (if they want to) - while we simultaneously look into all the DeFi ecosystem, and see if we can have the chance of using the token in other platforms.


#### Why didn’t GNT start out as an ERC20 compliant token?

It’s important to keep in mind that relative to the Ethereum space, GNT is quite an old token. When we implemented the GNT contract, the ERC20 standard was in its infancy, and we wanted to limit the exposure to risks stemming from it being at such an early stage. This is why we decided to limit the core GNT implementation to only the necessary ERC20 operations to make it transferable. Migrating GNT to be a fully ERC20 compliant token should open new opportunities to the token users, for example, DeFi (i.e. Decentralized EXchanges and liquidity by Uniswap) and potentially GNT becoming collateral for MCD (Maker’s Multicollateral DAI).
