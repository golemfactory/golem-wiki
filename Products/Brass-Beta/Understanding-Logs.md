# Understanding logs 
#### Basics

As with all applications, when using and/or testing new Golem releases you may run into problems. Whether you are having trouble connecting to the network or you are getting a strange in-app error message it is important to understand all the resources you have available in order to solve problems and properly identify potential bugs. In nearly all cases where you run into trouble using the Golem app, your Golem.log, Hyperg.log, golem_cli.log and Golem.error.log will help you find the root cause and help us find a solution.

?> **Note**  When reaching out to Golem Support always attach your recent logs. This will speed up the troubleshooting process significantly._

Here are log locations for each OS

* **Windows:** *in %LOCALAPPDATA%\golem\golem\default\mainnet\logs*
* **Mac in:** *~/Library/Application Support/golem/default/mainnet/logs*
* **Linux in:** *~/.local/share/golem/default/mainnet/logs*

?> **Note**  For testnet users the logs are located in the rinkeby/logs rather than mainnet/logs folders.
Understanding your Logs

Logs are used to provide insight on background tasks, system processes, errors, and other operations. They are the best place to check when something goes wrong. Below is an overview of Golem’s log messages with definitions and common errors to help you troubleshoot common issues, identify problems, and understand logs in general. Logs rotate every 24hrs.

#### Allowed Log Levels

* **Debug:**  Information that is diagnostically helpful to people more than just developers (IT, sysadmins, etc.).
* **Info:**  Generally useful information to log (service start/stop, configuration assumptions, etc). Info I want to always have available but usually don't care about under normal circumstances. This is my out-of-the-box config level.
* **Warning:** Anything that can potentially cause application oddities, but for which I am automatically recovering. (Such as switching from a primary to backup server, retrying an operation, missing secondary data, etc.) Failing component you can ignore.
* **Error:**  Any error which is fatal to the operation, but not the service or application (can't open a required file, missing data, etc.). These errors will force user (administrator, or direct user) intervention. These are usually reserved (in my apps) for incorrect connection strings, missing services, etc.
* **CRITICAL:** Any error that stops the app from working completely.
