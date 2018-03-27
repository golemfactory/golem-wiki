# How to start testing 

Follow installation instructions from [[this site|https://github.com/golemfactory/golem/wiki/Installation#running-from-package]]

**Check instruction for the new Electron-based Gui [here](https://docs.golem.network/)**

For Alpha tests we really need users with open ports and public IP or forwarded ports. Golem instance uses by default three ports 3282, 40102 and 40103.
If you don't have public IP then please follow the instruction from [Bitcoin enabling connections section](https://bitcoin.org/en/full-node#enabling-connections), but for those three ports instead of 8333, 18333.


# What kind of comments do we expect?

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

# Miscellaneous
**Testing tweaks**

Creating a subnet of nodes [here](https://github.com/golemfactory/golem/wiki/Creating-a-subnet-of-nodes)


# How can you send us your comments? 
Add a new issue to the repository or write a comment on [Rocket Chat](chat.golem.network). Add an annotation "[ERR]", "[UX]" or "[FUNC]" (see description above). If you add information about an error, please append as much information as possible, try to add screenshots and attach your logs to the issue. You can send your detailed comments to [contact@golem.network](mailto:contact@golem.network) with all the above information and attachments.

# Where are the logs?
_From version 0.10.0 and up_

The logs are located in the `logs` folder inside the Golem data directory. The default values can be found below, you can set your own using the `-d` argument when starting `golemapp`.

By default, the log files are located at:
- windows in `%LOCALAPPDATA%\golem\golem\default\logs`
- mac in `~/Library/Application\ Support/golem/default/logs`
- linux in `~/.local/share/golem/default/logs`

