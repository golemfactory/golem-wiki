# Payments {docsify-ignore}
Golem is a generalized global marketplace for computing power. By the diverse nature of the applications that can be integrated into Golem, we might encounter varied remuneration models. A one-size-fits-all payment system for Golem, would therefore not apply, and Golem will not impose any payment systems to application authors.
Developers integrating applications with Golem have the freedom to decide which transaction model is to be implemented, as long as it is compliant with Golem's Transaction Framework. The Transaction Framework is a set of requirements, some of them may include:


* **Entry in the Application Registry**
* **Use of open source and/or deterministic environment, such as EVM**
* **Community approval or rating of transaction model**
* **The use of GNT (Golem Network Token) for remunerating software and resource providers. The transaction framework is built on the Ethereum Network, due to the flexibility of the network for implementing advanced and trustless schemes
Some of the transaction framework components include:**
	* Diverse payout schemes such as nanopayments, batching
	* Off-chain payment channels
	* Custom receipts
	* Payment to software developer
	* Per-unit use of software (per-node, per-hour, etc.)

More sophisticated components are possible to be introduced into the transaction model design - in order to meet specific goals not related to payments. An example of a component might be: Requestor Escrow for tasks where a higher level of commitment is required (high price because of specialized hardware or long running subtasks); the requestor may create a two-party escrow account and require providers to take part in it.
Other possible components:
* **Provider deposit: the requestor may require to be in control of some amount of time locked GNT**
* **Requestor deposit: the provider may accept tasks only from requestors who are in control of some amount of time locked GNT**
* **Registration of a task as an anchor for a TrueBit-style conflict resolution fallback mechanism**

#### Golem Network Token
GNT is used to pay for rented computing power on the network. For more information about how GNT fits into the network, see our [blog post](https://blog.golemproject.net/the-economics-of-the-golem-network-token/) on the Economics of the Golem Network Token

#### Can I deposit and withdraw real GNT and ETH during the Beta test?
Clay Golem is on the mainnet, using real GNT and ETH. Meaning you can use the app to earn money and pay for computations. Users are in charge of making conscious choices when setting prices and depositing GNT or ETH for their use in the app. On chain transactions are not reversible.
Make sure to get accustomed to Golem on testnet before you decide to switch to mainnet. This way, you can gradually get accustomed to the application’s functionality and learn how to properly configure your tasks.

#### Where to Purchase GNT
While we do not endorse or work with any exchanges directly, you can find a list of exchanges that offer GNT at [Coingecko](https://www.coingecko.com/) or [Coinpaprica](https://coinpaprika.com/)

What wallet should I use to store GNT?
The two most popular wallets used to store Golem Network Tokens are:
* [Metamask](https://metamask.io/)
* [Mycrypto](https://mycrypto.com/)

?>For your own safety always check the correct link and the SSL while using any wallets.

Be sure to read and follow all of the wallet’s safety instructions before sending GNT to your new wallet. There are a lot of phishing scams out there, and if you are not careful, you can easily compromise your wallet security. If you follow their instructions carefully, you’ll be good to go.

For more wallet suggestions from our users go to our chat and post your question in the [#wallets](https://chat.golem.network) room.

---

# Clay Golem Marketplace

The main interest in every market is how much services cost and how much the user can earn. There are no price regulations or a single global source of information regarding supply and demand in Golem's distributed marketplace. Prices are agreed between requestors and providers independently.

>Golem aims to be similar to real-life economies where prices changes according to supply and demand changes. We adopt a tenders pattern: providers bid for a task and requestor choose the best offers.

**Price strategies and selection functions are automated** and we provide default algorithms. The user does not need to set every single price or make micro decisions. The actual price is unknown for the users until an agreement is made. A provider's bid cannot be not less than its minimal price and a requestor's cost cannot be not greater than its maximal price. Users need to set theirs minimal price as a provider or, in the requestors’ case, the maximum price, and check the payments history afterwards.

For a comprehensive, low level explanation on the Brass Golem Marketplace read the technical paper [here](About/Knowledge-base?id=brass-golem-marketplace)
