#### How to start testing 

Follow installation instructions from [this site](Products/Brass-Beta/Installation)

**Check instruction for the new Electron-based Gui [here](Products/Brass-Beta/Electron)**

For Beta tests we really need users with open ports and public IP or forwarded ports.
If you don't have a public ip, your router doesn't support UPnP, you need to forward ports **40102, 40103 and 3282** to your machine from your router for Golem to accept tasks. Refer **[https://bitcoin.org/en/full-node#enabling-connections](https://bitcoin.org/en/full-node#enabling-connections)** for port forwarding instructions but use above ports instead. You may also need to open the ports through your firewall. For router specific instructions on how to forward your ports go to **[https://portforward.com/](https://portforward.com/)**
To check if your ports are forwarded correctly you can use **[www.canyouseeme.org](http://www.canyouseeme.org/)**

?> **Note:** If port forwarding does not work, you may need to call your ISP to change settings on your router to allow nodes to connect.

#### What kind of comments do we expect?

1. "[ERR]" Information about errors and bugs
   - Did you encounter any problems? 
   - Did any errors occur?
   - Did the application crash or stop working? 
2. "[UX]" Opinions about user experience
   - Are some elements of the interface unintuitive or inconvenient? 
   - Is the application behaving as you expected? 
3. "[FUNC]" Suggestions about functionalities
   - Which core functionalities is the app lacking? 
   - What would you add? 




?> **Note** You can use template and see what we are expect:

## Description

**Golem Version**:

**Golem-Messages version** (leave empty if unsure):

**Electron version** (if used):

**OS** [e.g. Windows 10 Pro]:

**Branch** (if launched from source):

**Mainnet/Testnet**:

**Priority label is set to the lowest by default. To setup higher priority please change the label**
_P0 label is set for Severity-Critical/Effort-easy
P1 label is set  for Severity-Critical/Effort-hard
P2 label is set for Severity-Low/ Effort-easy
P3 label is set for Severity-Low/Effort-hard_

**Description of the issue**:

_A clear and concise description of what went wrong, in which component, when and where._

**Actual result**:

_What is the observed behavior and/or result in this issue_

**Screenshots**:

_If applicable, add screenshots to help explain your problem._

## Steps To Reproduce
_Short description of steps to reproduce the behavior:_
e.g.
1. Launch the app with '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected behavior
_(What is the expected behavior and/or result in this scenario)_

## Logs and any additional context
_(Any additional information that could help to resolve the issue, which systems were checked to reproduce the issue)_
_Please upload your logs if possible_

## Proposed Solution?
_(Optional: What could be a solution for that issue)_




#### Miscellaneous
**Testing tweaks**
TODO: check if still is valid
Creating a subnet of nodes [here](/Contributing/Creating-a-subnet-of-nodes)

#### How can you send us your comments? 
Add a new issue to the repository or write a comment on [Rocket Chat](http://chat.golem.network). Add an annotation "[ERR]", "[UX]" or "[FUNC]" (see description above). If you add information about an error, please append as much information as possible, try to add screenshots and attach your logs to the issue. You can send your detailed comments to [contact@golem.network](mailto:contact@golem.network) with all the above information and attachments.

#### Where are the logs?
**From version 0.14.0 and up**

You can also open logs containing folred directly from GUI
![open-logs](/img/usage/open-logs.jpg)

The logs are located in the *logs* folder inside the Golem data directory. The default values can be found below, you can set your own using the `-d` argument when starting `golemapp`.
Logs for mainnet and testnet are stored seperately, replace *mainnet* with *rinkeby* to find the test logs

By default, the log files are located at:
- **Windows** *%LOCALAPPDATA%\golem\golem\default\mainnet\logs*
- **Mac** *~/Library/Application\ Support/golem/default/mainnet/logs*
- **Linux** *~/.local/share/golem/default/mainnet/logs*

?> **Note** For testnet users the logs are located in the rinkeby/logs rather than mainnet/logs folders.

