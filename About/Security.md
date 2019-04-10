#### Trusted computations

Golem is a network of heterogeneous computational resources that can be used by both requestors and providers.
Right now Golem does not support private data. Provider nodes usually need direct access to the data being computed, that needs to be decrypted at a point. Currently there is no single silver bullet approach that could provide fully secure and trusted computations in decentralized networks. 
Golem is exploring many approaches and fields to tackle this, one of them being Trusted Execution Environments (TEEs). We are collaborating with other companies and teams to look for production-ready possibilities for the use of Intel SGX technology to increase guarantees regarding data and computation integrity, as well as confidentiality.

>A Trusted Execution Environment (TEE) is a secure area inside a main processor. It runs in parallel of the operating system, in an isolated environment. It guarantees that the code and data loaded in the TEE are protected with respect to confidentiality and integrity.

#### Intel SGX

Intel’s SGX technology enables requestors to compute their tasks in a trustworthy manner, in untrusted hosts machines through separated enclaves into which only requestor has access to.

> In this scenario the requestor:
> - has the certainty that all their files will be carried out without tampering 
> - their output data will not be altered
> - only they can see the plain text input and output data

> Provider:
> - is protected from malicious binaries

*Integrating Intel's SGX with Golem via Graphene will provide security up to Intel's guarantees*

#### SGX + Graphene integration 

**Graphene is a Library OS for Unmodified Applications, featuring SGX Support**

>Golem believes Graphene will play a key role in the decentralized ecosystem, where data integrity, confidentiality, and security are cornerstones to the robust development of infrastructure and applications. Driving Graphene and ensuring its usability on a broad variety of use cases are part of Golem's commitment towards the advancement of the ecosystem.

SGX’s (through Graphene) integration with Golem will provide an additional security layer, however it will not be mandatory for the users. The providers with Intel processors supporting SGX will have the option to participate in receiving SGX tasks, but this will not limit them in computing other tasks in the network. The requestors, on the other hand, will have the option to choose if they would like to compute their tasks through nodes providing SGX security. As for the price of the computations itself, we have discovered that computations with SGX take more time than those without it, so this would be a reason for them being more expensive. However, we can not confirm that this will be the case, as this is still a new technology that will change/improve over time. By the nature of our open marketplace, we can’t  make predictions for providers setting their prices higher, upon getting more offers due to SGX support, which is a possibility.

Learn more on projects website: [Graphene project](https://grapheneproject.io/)

---

##### Graphene-ng demo part 1
Golem is proud to introduce the demo for the Graphene-ng framework PoC, for Intel SGX execution

<iframe width="100%" height="315px" src="https://www.youtube.com/embed/JJyE3Iajd9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

##### Graphene-ng demo part 2 - Insights
The details about our product Graphene-ng, an execution framework for Intel SGX enclaves

<iframe width="100%" height="315px" src="https://www.youtube.com/embed/ZKMFNvWoPdY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

#### DDoS, botnet attacks through Golem? 
Computations take place in isolated environments, so it is discarded that Golem can be used for DDoS or Botnet attacks. 
Special tasks that may have access to external data might be considered, but they won't be executed on machines if the provider doesn't deliberately agree to this.

#### What data do I share with Golem?
We do not store or share any personal data, we only use traceback error data to help improve the app. Because of this, it is important to write down your password and keys and store them in a safe place.

Upon opting-in to send us performance data during Golem start-up, any errors that occur in your Golem instance will be automatically sent to our dev team so they can improve the product in later releases. However, your private data will always remain private. A live feed of traceback errors is being created so we can identify bugs faster and speed up the development of new features.

To opt-out on sending error messages, you can simply uncheck the icon that says "I want to help Golem by sending my statistics anonymously." If you checked the icon on your first initial setup and changed your mind, you can run golem through the CLI with the `--nomonitor flag` to turn off error reporting.

#### Considerations   
Experimental technology is exposed to attacks by the nature of its unpredictability. Golem is being designed to be robust against attacks - but no warranties can be made.

**Our key security elements will be:**

* Computations in isolated environments with minimal privileges and lack of external network connectivity (Graphene)
* Well-known safety cryptography based on elliptic curves
* Signed and encrypted messages inside the Golem network ensuring authenticity, which protects against man-in-the-middle attacks and passive data collection
* Reputation system helping to detect malicious nodes and mitigate them. Reputation metrics evaluation assists in secure, efficient and correct task routing
* Whitelist and blacklist mechanisms allowing providers to build trust networks and run only applications prepared by trusted developers
* Together, the application registry and transaction framework mitigate Sybil and whitewashing attacks by providing an disincentive to participate in any form of misuse, introducing an economic and computational cost to participation, and providing a metric for reputation in order to maintain optimal connectivity
* The Ethereum integration and transaction framework makes custom payment-based security mechanisms possible, eg. escrows, deposits, insurance and audit proofs
* Security audits are conducted for every release, performed by external contractors, and internal QA.
