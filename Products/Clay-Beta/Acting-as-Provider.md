## Introduction

##### Providers
Users who want to rent out their idle computing power can decide what fraction of resources they are willing to use in Golem, set their desired earnings and wait for tasks to be assigned to their machines. That's it!

##### Benefits
**Best, market-driven pricing** Users determine prices, creating healthy competition. Our decentralized market allows participants to take advantage of prices that are significantly lower compared to traditional render farms.

**Share your computing power and earn**. Joining the marketplace is as easy as installing the Golem app. Users have full control over their involvement and potential earnings.

**Industry Leading Community Support**
Speak to our team directly via Chat, Email, and Social Media. We encourage feedback of all types from our users. [Help Documentation and FAQs](/Products/Clay-Beta/Understanding-Beta).

!> **Make sure you trust the developer before whitelisting their repository!**
By default only apps verified and uploaded by the Golem Factory to our docker repository are whitelisted.
Before whitelisting any other repository, make sure you trust the developer. Any apps they upload in the future will compute on your machine, also when they lose control over their docker repository account. In order to provide for other developers apps, you will need to whitelist the "provider prerequisite" docker hub repository.

?> You can find official repository those apps here: [golemfactoryapps](https://hub.docker.com/u/golemfactoryapps/?page=1)

!> IF YOU DON'T KNOW WHAT YOU ARE DOING OR IF YOU DON'T KNOW THE DEVELOPER DON'T WHITELIST ANY ADDITIONAL REPOSITORIES



## Charges

##### GNT and ETH
You do not need any GNT or ETH to get started as a Provider. As you accumulate GNT you will eventually want to make a withdrawal, so will need a small amount of ETH to pay for gas at that time.

##### Basics
We recommend providers not to change their default settings. Over time as Requestor traffic grows there will be more benchmarks for pricing. As long as the provider price is below the Requestor Maximum, and below the amount set for their specific task, your node has an equal chance of being chosen for the task.

The default settings are:

> sProvider minimum: 0.1 GNT/hr Requestor maximum: 1 GNT/hr

##  Receiving tasks
![installer](/img/usage/settings_view_price.jpg)

Golem is still in BETA and the network still needs time to grow. Requestor traffic is currently lower than Provider traffic. This could you mean that you have to wait several hours for tasks to come in. As the network grows and our business development strategies bring more Requestors to the network, you will see tasks coming in more often.
![installer](/img/usage/canyouseeme.jpg)
If you can see your ports are open on canyouseeme.org while running the app and you have no docker errors, then all you need to do is turn on Golem and wait for tasks to come in!


##  GPU and CPU usage
![installer](/img/usage/CPU_GPU.jpg)

?> For the time being, we support Nvidia within a Linux environment.

#### Enable GPU support

##### Prerequisites

1. **Ubuntu (18.04)**
2. **Nvidia GPU**
3. **Nvidia proprietary driver version 396+**

##### Installation

1. `wget https://raw.githubusercontent.com/golemfactory/golem/develop/Installer/Installer_Linux/install.sh`
2. `chmod +x install.sh`
3. `./install.sh`

Run Golem normally and it will build the required docker images if the prerequisites have been satisfied.

##### GPU in Golem network
Right now Golem supports Nvidia cards with CUDA. You can check the current list of GPU-s over here developer.nvidia.com. Unfortunately, there is no support of AMD graphics cards, but we are going to work on OpenCL in the future.

For the time being, we are only able to support Nvidia within a Linux environment, but this is only the GPU support MVP. After extensive testing to make sure that this environment is free of bugs, we are going to focus our research power on Windows and Mac solutions. It is not our focus at the moment, as there is no GPU docker support for both of those systems and it requires additional research.

##### Selecting the amount of GPU resources in Golem
For now, there is no option to set the number of shared resources with GPU so it is possible that it will take up to 100% of your graphics card during computation. Of course, resources are shared between Golem and other tasks, so if you want to make the most out of Golem keep the card processes free of tasks. We hope that Nvidia will enable the option of setting the amount of resources in their drivers in the future.

##### Slower computer performance when computing on GPU
At the moment you are not able to set the amount of shared GPU power so it will take 100% of your card when computing. If you have additional (for eg. integrated) cards available in your system you can set it to cover the needs of other tasks.

?> **Note:**
We will implement the option to run multiple Nvidia cards on Linux in the near future, so check our blog regularly.

##### Allocating RAM and CPU to the Golem network
Golem allocates at most 75% of your RAM usage to make sure that the rest of your computer is working correctly while heavy computation are taking place in the background. So that's perfectly normal.


## Awaiting transactions
Transactions can be awaiting for up to 30 days per our Terms and Conditions, but it rarely takes that long.

Transactions that are awaiting could be due to the other node not verifying the task yet, it could be offline at the moment for example. It also has to do with the timing of batch transactions. GNT is sent to multiple nodes in batches to save users on Gas price. Some batches leave sooner than others. An imperfect but useful analogy would be like a train that waits for a certain number of passengers before it leaves. Network speed and the amount of transactions can change the time GNT is "awaiting". A payment could be rejected if the node went offline at a critical time during verification. In this case, that transaction is likely lost.

Our [Concent](/Products/Clay-Beta/Usage?id=concent-service) service to reduce the risk. Howver, please keep in mind that because of the Beta stage and probabilistic methods of verification the risk cannot be elimineted completly. In this case, the transaction could still be waiting for the node to verify the work completed, IE, download the task.

![installer](/img/usage/hiostory_view_timeout.jpg)

#### I don't see GNT on Etherscan

The GNT you are seeing in the Clay Golem is in our wrapper, GNTB ("B" stands for batching transactions). To facilitate batch transfers and more secure transactions going forward, we use GNTB for transfers then it is converted to GNT automatically for your use. If you want to view your GNTB balance, you can check out the smart contract and search for your address in the "Balance of" query section. Etherscan doesn't automatically detect GNTB transfer because batchTransfer doesn't emit ERC20 compliant Transfer event. So Golem can show non zero balance and etherscan will show no activity on the account. One can go to the [GNTB contract](https://etherscan.io/token/0xa7dfb33234098c66fde44907e918dad70a3f211c#readContract) and in the "read smart contract" tab put their address to query for the balance - it will be non zero. And after that etherscan may pick up and start showing token balance in the account view.
You may also find the batching contract address in the Clay Beta visual interface in the account details. 
Your tokens will be converted to GNT eventually and you will be able to withdraw it from your app.


## Timeouts and errors

As a Provider, you just need to ensure you are sharing enough computing power on the network. Since that is a limited resource and the complexity of the tasks vary, there will still be timeouts. You can also make sure your connection is good to the best of your ability so you do not lose contact with nodes will computing for them.

#### Disk usage

It may happen then while running the Golem node for longer periods and computing a lot of tasks Golem will take a lot of your disk space. If you see that `~/Library/Application Support/golem/default/mainnet/ComputerRes` folder is getting too much of gigabytes open terminal/console and type `golemcli --mainnet res clear --provider` for the mainnet version. If on testnet then type `golemcli --testnet res clear --provider`.
