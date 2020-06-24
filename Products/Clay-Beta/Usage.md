
## How do I get started


We are happy to help. First off, it is important to know all the support resources you have at your disposal when setting up and running Golem. Feel free to check out the installation tutorial videos for your OS:
* [Mac Install Video](https://www.youtube.com/watch?v=TAozKguVoCc)
* [Windows 10 Install Video](https://www.youtube.com/watch?v=LSI-QLnhuvI)
* [Ubuntu Install Video](https://www.youtube.com/watch?v=OPpB3C15S4A)
* [Ubuntu Server Install Video](https://www.youtube.com/watch?v=yP5SQq5mfR8)

If you don't have a public IP, your router doesn't support UPnP, you need to forward ports 40102, 40103 and 3282 to your machine from your router for Golem to accept tasks. Refer to **[bitcoin.org](https://bitcoin.org/en/full-node#enabling-connections)**. For port forwarding instructions but use above ports instead. You may also need to open the ports through your firewall. For router specific instructions on how to forward your ports go to **[portforward.com](https://portforward.com/)**. To check if your ports are forwarded correctly you can use **[canyouseeme.org](www.canyouseeme.org)**
Once you have successfully installed golem you can set the amount of computing power you want to share, and wait for tasks to come in.
If you have any problems while setting up Golem feel free to reach out to us on **[chat.golem.network](https://chat.golem.network/home)**.


 ---


## Basic Overview
#### Network

![installer](/img/usage/overview1.jpg)
1. Access help docs and App Settings
2. Switch between Network and Task views
3. Access your wallet
4. View transactions in History
5. Access Advanced Resource Allocation settings
6. Adjust the amount of computing power you wish to share
7. View your connection status (nodes, errors, etc)
8. Start and Stop Golem - Connect/Disconnect to/from the network


?> **Note**
You must stop Golem to set or change your computing power settings, network trust, price thresholds, and other settings.


#### Wallet
![installer](/img/usage/wallet_view.jpg)

In the **collapsed wallet view** you can check your GNT/ETH balance along with its estimated USD value. The basic value display is restricted to 0.0000, but when you click in the balance, you will be able to check the exact amount that you currently have.
You can also expand the wallet in order to get access to withdrawals and deposits account options. If you want to learn more go to the Depositing and Withdrawing Tokens section.

Remember that **on the testnet there are no withdraws**, and there is no address to top up your account provided.
Remember while on mainnet that once you send any tokens to the provided address there is no option to cancel it.
If you have requested a task you may not be able to withdraw some ETH that was locked for security and transaction costs until the payment is made. It won’t take longer than 24 hours.

#### Resources
![installer](/img/usage/resources_view.jpg)

The Resources view shows a slider where you can easily set the amount of computing power you want to share with Requestors.
The slider goes from 0 to 100, least power to most power. **At 100 Golem will still leave at least 1 core of your processor unused so you can continue to use your machine for personal tasks**. The more computing power you share, the more likely you are to get assigned a task from the network as your computer will be completing tasks at a faster rate.
When submitting tasks to the network **as a Requestor**, it is important to **share enough computing power to allow the local render test to verify your task**. If you cannot complete the local render test, you will not be able to submit a task.


**Advanced**

The Advanced view allows you set a more precise allocation of your computing power. You can adjust individual controls of CPU, RAM, and Disk Space.

?> Note: You must stop Golem to set or change your computing power settings.



#### History
![installer](/img/usage/hiostory_view.jpg)

The **History view** allows you to view both amounts spent and earned when sharing computing power and submitting tasks. The price shown is the price per subtask completed. We use batch transactions to minimize the cost of transactions, so if you use Golem as a Provider you may wait for transfers for a maximum of 24h.


#### Tasks
![installer](/img/usage/task_view.jpg)

In the **Tasks tab** you can submit a task by dragging and dropping your Blender files into the app. You can also add folders including required assets. In this view you can:

* Access your wallet
* Submit a task
* Monitor progress of your tasks
* View completed tasks
* Toggle the task preview option
* Open more detailed preview window
* Access help docs and App Settings

**Submit a task**

On the bottom left corner you will see a status icon: If it show a green circle with the message “Golem is Ready!” you can submit a task, or wait around for a task to be assigned to you. For more go to the Submitting a Task section
Monitor progress of your task.
You can keep track of time that it takes to compute your task. If you want to know more about timeout settings please read [Task and Subtask Timeouts](Products/Clay-Beta/Being-a-Requestor?id=task-and-subtask-timeouts) section.

**View completed tasks**

You can easily go through all the tasks that completed with success. You can delete completed tasks to make room for others, this does not delete the final product which is saved to your desired file location, it merely cleans up the UI. Clicking the arrow icon to the right on a task will take you to the Task settings.

**Toggle the task preview option**

On the bottom right corner of the this view you can toggle a switch to show a preview of your render.

**Open more detailed preview window**

If your task had a significant number of frames we highly recommend you use more detailed preview window to see all the computing and finished subtasks.
** **

## Introduction to GNT and ETH
##### GNT

GNT or Golem Network Token is needed to pay for computations on the network and is the currency that drives our marketplace. As a Requestor, you set a bid for an amount of GNT you are willing to pay to have your task completed. As a Provider, you earn GNT by computing tasks for Requestors. You can set your minimum and maximum price thresholds in your settings.

##### ETH

Golem uses the Ethereum blockchain to facilitate fast and secure payments between Requestors and Providers. ETH is the native currency of Ethereum and is used to pay for transaction fees on the network. Only a small amount is needed to complete a transaction. Almost all Applications built on the Ethereum blockchain pay for transactions using ETH.

---

#### Depositing and Withdrawing Tokens from Golem

![installer](/img/usage/wallet_withdraw_view.jpg)

##### Basics

In order to participate in the Golem network as a Requestor, you will need some amount of GNT and ETH. If you are going to participate as a Provider you will need a small amount of ETH for withdrawals. If you have GNT and/or ETH stored in an external wallet, all you need to do is send your tokens to the public key of your Golem wallet. The exact location of the in-app wallet keys are inside the app directories under */keys/keystore.json*.

!> **Warning** Do not use your Golem Wallet outside of the app. You should not use Golem’s wallet outside the Golem app. Trying to perform any operations on your address with external applications like MEW or other wallets may cause errors and you may be required to install a clean Golem app from scratch. You won’t lose your funds, you will still be able to withdraw them from your address to external applications.

##### Depositing
Click the arrow to the right of your token balances display to expand your wallet settings.

From here you can copy the public key listed where it says “Your Address”. Send GNT and/or ETH to this address using your personal wallet or exchange service. Remember that in order to perform computations in the network you will need some small amount of ETH (0.005 ETH is a good start).

##### Withdrawing
Click the arrow to the right of your token balances display to expand your wallet settings.

Click the “withdraw” button underneath the token balance from which you wish to withdraw. Choose the amount of GNT or ETH you wish to withdraw and enter the public key of the personal wallet or exchange to which you wish to withdraw your tokens.

Click “Apply”.

#### Basics of Acquiring and Using GNT/ETH
##### Resources

**[https://hackernoon.com](https://hackernoon.com/a-10-minute-guide-to-buy-sell-store-cryptocurrencies-d7d06c384998)**

**[https://support.mycrypto.com](https://support.mycrypto.com/getting-started/getting-back-to-basics-tips-for-newbies.html)**
** **

## Node connection
![installer](/img/usage/node_connection.jpg)

The peers list you see reflects the nodes connected in the bottom left corner of the app. You continually ping these peers and they ping you back to ensure your node is ready to receive work. You are not limited to these 10 nodes for recieving tasks. Whenever a task is submitted by any requestor on the network, you have a chance of receiving it. You can increase this number in CLI or config file. Increasing this number will not increase your chance of recieving a task. You can change the **`opt_peer_num`** in the config file or using CLI.
** **
## Settings

#### Golem Settings allow you to:
![installer](/img/usage/node_stats.jpg)

1. Change and adjust your node settings
2. View your node statistics
3. Create and modify your node's Access Control List
4. Set your node name and check your node ID
5. View your account QR code
6. Access performance and benchmark settings
7. Set your prices
8. Change Concent Service settings (turn Concent Service on and off)
9. Set network trust
10. Change the default location of output files
11. Set custom Geth
12. Check the node's peers list


?> **Note** You can increase the size of the app vertically to see Settings options more clearly!

#### Node settings

This tab allows you to change your node settings.

#### Node statistics
![installer](/img/usage/node-statistics.jpg)

View your node's statistics. In the **Reasons for not supporting tasks** view you can hover over each item to learn why your node has failed computing tasks and what you can do to prevent these failures from happening (e.g. switch on the Concent Service).

#### Access Control List

**Open mode** (default) allows you to ban nodes from interacting with your node. Open mode works like a regular blacklist. In this mode, you select nodes from the ones you have previously interacted with (**All known seeds**). To be able to connect with the node which was previously added to your blacklist, you have to remove it from there first. Only after unlocking the node you will be able to interact with it both as a requestor and a provider.
In **Restricted mode**, you create your own network of trusted nodes. Here you have to manually provide the *node ID* of all the nodes you want to connect to. This mode will exclude you from the rest of the network.

#### Node Name & Node ID

Hover over your Node Name beneath your profile picture, until you see a “pencil” icon. Click to edit. This is shown along with your Node ID, so your node can be identified during computation.
Your Node ID is a long HEX number used to identify you in the network. It is a unique identifier that cannot be changed. This is necessary for your node to connect to other nodes for computation, and for troubleshooting if any issues arise.

#### Performance
![installer](/img/usage/settings_view_performace.jpg)

Here you can see how efficient your machine is for computing specific tasks. You can increase those values by giving more resources to your machine in the Network view > Resources.
If you are a Requestor these values will, in future product releases, be used to estimate real deadlines for your tasks and if you are a Provider they will be used to decide if your machine is powerful enough to compute any given task.
Here you can calculate your machines performance benchmarks in 3 categories:

* CPU
* Blender CPU
* Blender GPU

Each app will run a local benchmark, with the same setting on each category and give you a score based on quickly the benchmark completes. Current apps available are blender, luxrender (testnet only)
The score is not updated based on performance on the network, only when re-calculated.

* Blender benchmark is just rendering BMW scene:  **[blender.org/download/demo-files/](https://www.blender.org/download/demo-files/)**
* And here is the formula **[(magic_const / time_spent)](https://github.com/golemfactory/golem/blob/develop/apps/core/benchmark/benchmarkrunner.py#L71)**


?> **Note**
Click the calculate button to get a clearer understanding of your machine’s capabilities.

**Performance slider** With performance slider (at the bottom of Performance tab) you are able to choose how powerful nodes are going to compute your tasks. This functionality will filter out all providers that do not meet your minimal performance requirements. If you do not want to filter any nodes from your requests just leave the slider at "0" - it will disable this function. After performing local benchmarks you'll see where in performance range your node is placed.

#### Price
![installer](/img/usage/settings_view_price.jpg)

Here you can set the minimum price you will accept as a Provider and the maximum price you will pay per subtask as a Requestor.
This is where you determine your place in the market. The lower your Provider price, the more likely it is that you will be chosen for tasks, but you will make less GNT per subtask. The converse will happen if your Provider price is higher.
If you have a powerful machine and can compute tasks efficiently you can make more money as a Provider.
For task specific pricing instructions go to our [Pricing Best Practices](/Products/Clay-Beta/Being-a-Requestor?id=pricing-best-practices) section.
If your Requestor maximum is set very low, then you will only get the assigned the lowest price Providers. It is not always the case the low cost = low power machine, but low power machines could cause timeouts which could result in you paying more to get your task completed. A higher Requestor maximum will give you more access to more expensive Providers, which are likely to have more powerful and efficient machines than low price Providers.
The default settings are:

* **Provider minimum:** 0.1 GNT/hr
* **Requestor maximum:** 1 GNT/hr

#### Network Trust
![installer](/img/usage/settings_view_networktrust.jpg)

When you navigate to Network Trust you will see a slider and a switch between Providing and Requesting.

* **Switch to Requesting:** The slider can be set from 0 to 100. A low trust setting (closer to 0) will result in more of your tasks being computed by both low performing and high performing Requestors. A high trust setting (closer to 100) will result in fewer nodes being chosen for computation, with only high performing nodes being considered.
* **Switch to Providing:** The slider can be set from 0 to 100. A low trust setting (closer to 0) will result in more task being assigned to you from both lower performing and higher performing Requestors. A high trust setting (closer to 100) will result in fewer tasks being assigned to you from more high performing Requestors.


?> **Note**
Setting trust to 100 will mean that you will only work with nodes with which you have already successfully collaborated with in the past, so this is not recommended when you first start and have yet to compute or request a task.

For Clay Beta, every user’s node starts with the same neutral reputation. Network Trust will become more important as the network grows and node reputations are established through consistent and accurate computations/transactions. As nodes begin to request and compute tasks, the reputation score changes. Reputation is determined by the speed, accuracy and frequency of computations from Providers and the consistency of Requestors. For example, if a Requestor submits a task and then cancels the computation halfway through, leaving providers without a task to compute, the Requestor’s reputation will be negatively impacted.

#### Default File Location
![installer](/img/usage/settings_view_filelocation.jpg)

Here you can define the default output folder where the returned results of your tasks will be saved. You are able to change this location on a task by task basis, but this allows you to set the default.

#### Custom Geth
![installer](/img/usage/settings_view_customgeth.jpg)

?> **Note** This is an advanced setting for users more comfortable with the technical aspects of Blockchain dApps.

Some users prefer to use a custom Geth node on their local network to decrease latency.
When you run your own Geth node you can use these options to replace our public nodes with your node.
There are options to start geth from golem on the current machine on a certain port, or fill in a remote address with the location of your geth server.

** **
## Concent service

![installer](/img/usage/concent_intro.jpg)

#### Brief overview
Concent is Golem’s network service, which aims to improve the integrity and security of the marketplace. Concent Service is not obligatory and Golem will work without it. If you are a provider, Concent Service will make sure that you are paid for the computational power you have used to perform assigned computations. If on the other hand, you act as a requestor, Concent Service will ensure that such payments are enforced only for correct results. In the ideal interaction, in which the providers and requestors behave according to the protocol and respond positively to any messages, the Concent Service does not intervene.

>You can think of the Concent Service like an arbitrator or mediator in a dispute between actors in the network. If something wrong happens, the affected party can seek mediation from the Concent Service and the service will intervene on their behalf to resolve the issue.

![installer](/img/usage/concent_setup.jpg)

#### Requirements
To use the Concent Service, you will need to:
* accept Concent Service terms & conditions
* have some **GNT (used for the actual deposit)** and a small amount of **ETH (used for gas)** available on your account to submit a deposit to the Concent Service.

#### How does it work?
The flow of funds to the Concent Service is represented in the form of Deposits. To increase fairness in the network, you may opt-in to pledge a small amount of your funds to the Concent Service as a promise of ethical behavior in the network. Other Golem nodes may verify the presence of such a deposit and be more eager to work with you, knowing that there’s an objective party they can turn to in case their partner misbehaves.

>Concent Service will ensure that users are paid for the work they do in the network - and - that the results that they get are correctly verified. All history of fund transfers with the Concent Service will be visible in the Deposits tab of your payments history.

**All transactions in Concent Service are done on users behalf, so besides turning it on, there is no other action required. However Concent Service will require both GNT and ETH in order to create the deposit.**

#### When will Concent Service intervene?

**1. Enforcing reports on the completion of a task.**

If you act as a provider and your node cannot establish a connection with the requestor through the usual peer-to-peer communication channel to report the successful completion of their assigned task, it will seek assistance from the Concent Service in relaying that information back to the requestor, and more importantly, acknowledgment that the message was received can later be used to seek payment for the provided service.

**2. Enforcing results download.**

In case problems arise while downloading results from providers, a requestor node will reach out to the Concent Service which in turn will ask the provider to upload their results to the Concent Node. Once the upload finishes, Concent will verify its integrity and make the results available for download by the requestor so the computation task’s flow may resume.

On the other hand, should the Concent itself fail to acquire the results, it will provide the requestor with a proof of this failure which the requestor may later use, should the provider still seek payment for the task afterward.

**3. Force acceptance of the results.**

If for any reason, some time after the results are delivered to the requestor (either through normal communications - or - through Concent’s mediation in the scenarios above), the provider doesn’t receive a response regarding the result of verification, they will again use the Concent Service to acquire a verdict.

Normally, the Concent Service will ask the requestor to provide the verdict and if it is provided - whether it’s an acceptance or rejection of the results - that verdict is then relayed back to the provider.

It may happen that the requestor will go offline before they communicate their decision. In this use case, Concent Service will automatically assume acceptance of the results and will pay the provider on the requestor’s behalf using the requestor’s deposit.

**4. Additional verification.**

Should the requestor reject the provider’s computation result, an honest provider will obviously want to verify that decision with an objective party. Since verification is computationally expensive to the Concent Service, to prevent abuse of the service, in order to trigger this use case, the provider must submit their own deposit to the Concent Service.

After the Concent Service ensures that both parties have the required deposits and that the original resources package from the requestor and the result package from the provider are both uploaded with their integrity is intact, the Concent Service will run its own verification of the results and thus check if the rejection was justified.

Should the Concent Service decide that the results of this computation were wrongly rejected, it will force payment from the requestor to the provider by transferring the adequate amount from the requestor’s deposit while at the same time using the same deposit to cover their own verification fee.

On the other hand, if the Concent’s own verification results in a failure, the Concent Service will be forced to cover the verification fee using the provider’s deposit.

**5. Force payment.**

Every node that acts in the network as a requestor has the appropriate time to make the payment for tasks they commission to providers. Once this time expires, providers may ask the Concent Service to force payment for such tasks using the requestors deposits.

In this situation, Concent Service will search the Ethereum blockchain to see if indeed the payment for said tasks hadn’t been made directly and will only use the deposit if it fails to identify matching transactions.

**Mentioned above are current Concent Service use cases. They will expand in time, and all new implemented use cases will be described here in the documentation.**

#### Can I request tasks without Concent Service?
Yes, you can, but we strongly encourage you to use it to improve fairness in the network. Even when you are using Golem with Concent Service, you will be able to commision tasks without Concent Service, as there is an opt-out option implemented for each task in a task creation process.

#### Is Concent service free?
If your node is not manifesting malicious behavior in the network, the only cost you will be charged with is transaction fees between you and the Concent Service. Payments from Deposit are going to be distributed through providers and requestors in regular amount.

#### Why is Deposit amount higher than the cost of task?
The deposit is maintained to ensure that you have enough funds to cover the potential claims related to the tasks you request in the network. The cost of tasks is not changing. The amount of the first deposit transfer to the Concent Service will be four times higher than the price of your task. Future deposit transfers will be based on the total cost of your jobs and the amount of funds in the deposit. Providers using Concent Service will check if requestors have no less than twice the amount of funds in their deposit for covering a task payment. Knowing that, Requestors will update their deposit to match this requirement before requesting a new task.

#### I can afford a task, but not a Deposit
If you have enough tokens on your account to create a task you will have an option to either: top up your account with the required amount to continue with Concent Service or compute this particular task without the Concent Service.

#### How do I stop Concent Service?
![installer](/img/usage/concent_settings.jpg)

You can easily find opt-out switch in Concent Service tab in Golem GUI settings tab. Just turn it off, and confirm that you don’t want to use it anymore.

You can also stop the Concent Service without unlocking your deposit which may reduce future deposit creation transaction fee if you would like to use the service in the future. In this case, reusing the Concent Service will not cost you any additional fees.

#### Can I withdraw my tokens from the Deposit?
![installer](/img/usage/concent_disable.jpg)

Yes, you can. If you decide that you don't want to use the Concent Service anymore or maybe you decide to leave the Golem Network altogether, you can stop the Concent Service and later withdraw all of your tokens from your GNT account to external wallet.

There’s a caveat though - to mitigate possible attacks where a party would submit a deposit only for the moment of task submission to withdraw it a short while later, all deposits are time-locked. At the moment you disable the Concent Service in your Golem client, the deposited funds are put in a “pending withdrawal” status and need to wait 48 hours until they’re actually transferred back to the originating wallet.

Unless of course, the user re-enables the Concent Service in their client before that time passes - in which case the deposit is locked again and a subsequent action to disable the Concent Service once more will start the 48-hour waiting period anew.

#### How much can I save by not unlocking my deposit?
The whole process of withdrawing and recreating the deposit may cost up to 200k of gas (for 10 Gwei and ETH price \$100 it would be \$0.2)

Also after turning Concent Service off when the deposited funds are in a 48h “pending withdrawal” time period, you will be able to relock your funds. Relocking the deposit may cost up to 80k of gas (for 10 Gwei and ETH price \$100 it would be \$0.08).

#### What will happen with my tasks in the network when I turn Concent Service off?
All tasks in the network that you have commissioned while the Concent Service was enabled will be treated as such and act accordingly and the aforementioned time-locking of deposits will ensure that any payments using deposits can still happen before the task’s timeout elapses. All future tasks will be created without Concent Service though until Concent Service is explicitly enabled once again.

#### I have stopped Concent Service, but I don't see GNT in my wallet!
![installer](/img/usage/concent_noGNT.jpg)

Transaction to and from Concent Service can take some time, so please be patient, as we can assure you that all of your tokens will be transferred from the Deposit to your GNT account.

Additionally, as mentioned earlier, all deposits are time-locked and the transfers from the deposit to the user’s wallet are scheduled only after a specific time after the Concent is disabled in the user’s Golem client.

If the delay is higher than 48 hours, it probably means that at the moment there are too many transactions in Ethereum. You can read more about possible delay reasons [here](Products/Clay-Beta/Acting-as-Provider?id=awaiting-transactions)

** **
## Backup

#### Backing Up Your Golem Wallet

?> **Important**  Backing up your wallet does not mean that you will be able to easily reuse the wallet with the new app instance. It means that you will be able to recover your funds with use of external entities like **[mycrypto](https://www.mycrypto.com/)**.
If you want to make a backup with reuse of the current ethereum address **[please backup whole golem app](Products/Clay-Beta/Usage?id=backing-up-your-golem-app)** and store files in a safe place.
Your Golem wallet stores GNT and ETH for use on the network. We highly recommend that you backup your wallet when you begin to use your Golem app. That way if your computer crashes and you cannot recover your files, you have the keys to your wallet to recover your funds.

###### Finding Your Wallet Keys

Your wallet keys can be found in your app directory. The locations of the app directories for each supported OS are below:
* **Windows:** *%LOCALAPPDATA%\golem\golem\default\mainnet (or \rinkeby for testnet)*
* **MacOS:** *~/Library/Application Support/golem/default/mainnet (or /rinkeby for testnet)*
* **Linux:** *~/.local/share/golem/default/mainnet (or /rinkeby for testnet)*

These directories contain everything associated with your Golem account and the app itself. The exact location of the wallet keys are inside those directories under:
*/transaction_system/wallet.json*
Copy your keys from that file directory onto a piece of paper and store in a safe place. You can also back these files up to another hard drive if you wish, but the safest way to store this data is to write it down (just remember where you put it!).

#### Backing Up Your Golem App
##### App backup

We recommend backing up your Golem app after installing. This will allow you to restore your Golem node if your machine crashes and you need to install your node on another computer without starting from scratch with your reputation.
The default folder locations will be used, if you use a custom data-dir the same steps apply from that folder. We will only focus on the mainnet settings and keys, replace the mainnet folder with rinkeby to target the testnet settings.
The default data directory can be found in */golem/*, the location of *USER_DATA* differs per OS:

* **Windows:** *%LOCALAPPDATA%\golem\golem\*
* **Mac Os:** *~/Library/Application Support/golem*
* **Linux:** *~/.local/share/golem/*

On windows *%LOCALAPPDATA%* is by default: *C:\Users\username\AppData\Local\*
From this data directory you want to include in your backup:
* **Ethereum keys:** *default/mainnet/transaction_system & default/mainnet/keys/keystore.json*
* **GUI settings:** config.json (for Linux *home\.config\golem\config.json)*
* **Golem settings:**
	- *default/mainnet/app_cfg.ini*
	- *default/mainnet/environments.ini*
	- *default/mainnet/golem.db*

?> **Note:** If you want to exclude local temp/render files from your backup you can exclude *~/Library/Application Support/golem/cache* from your backup procedure. You can also exclude your hyperg folder but you must be logged out of the Golem app to do so.

##### Restoring your backup

To restore your settings and keys, move all the files back to the original locations mentioned above before running golem. Please note: In the current version it is not supported to restore the backup on another OS, or another user account, use this at own risk.
