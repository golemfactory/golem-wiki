
## Docker Errors on MacOS
Since 0.18.0 Golem uses Docker for Mac, the first step is to make sure that all previous Docker instances are removed from your machine. Open terminal, press <kbd>&#8984;</kbd> Command + <kbd>&#9251;</kbd> Space on your keybord and type terminal. Hit <kbd>&#8996;</kbd> Enter and paste command lines provided below:

```bash
bash_docker-machine rm golem 
brew uninstall --ignore-dependencies docker docker-machine docker-machine-driver-xhyve
```

upgrade Golem:

```bash
brew update 
brew upgrade golem 
brew cask upgrade golem
```

Remember! Before you run Golem be sure to run Docker for Mac. <kbd>&#8984;</kbd> Command + <kbd>&#9251;</kbd> Space, type Docker and hit <kbd>&#8996;</kbd> enter. Make sure that Docker is running properly. If you encounter any issues with the Docker for Mac please follow official [Docker for Mac instructions](https://docs.docker.com/docker-for-mac)

---

## Docker Errors on Windows 10

In order for Golem to work it needs to create a Docker VM, this allows for computations to be completed in an isolated environement from the **Requestor** and **Provider host** machines. Below you will see a list of common Docker Errors from Golem.log files, along with some troubleshooting tips.

If you cannot find your golem.log file, check here for instructions on [log locations](Products/Brass-Beta/Understanding-Logs).

---

### Errors with Hyper-V

---

##### Symptoms
**Environment:** Windows, using Hyper-V (not Docker Toolbox)

When adding a task this error message pops up:
![mount-error](/img/docker-errors/mount_error.png)

Logs:
```bash
2019-01-04 17:37:07 CRITICAL twisted                             Unhandled error in Deferred:
2019-01-04 17:37:07 CRITICAL twisted                             
Exception: 500 Server Error: Internal Server Error ("error while mounting volume '': VolumeDriver.Mount: exit status 255")
```

##### Possible causes

##### 1. SMB Port unreachable

##### Diagnosis
This should be checked earlier when Golem is starting and reported in logs:
```bash
ERROR    [golem.docker.hypervisor.hyperv     ] Port 445 unreachable. Please check firewall settings.
```

To double check, [make sure the Golem VM is running](#how-to-make-sure-golem-vm-is-running) and type the following command in PowerShell:
```bash
docker-machine.exe --native-ssh ssh golem "if nc -z -w 1 $env:COMPUTERNAME 445 ; then echo OK ; else echo Error ; fi"
```
If the port is reachable the command output will say `OK`, otherwise it will say `Error`.  
If you're using cmd instead of PowerShell just replace `$env:COMPUTERNAME` with `%COMPUTERNAME%` in the command.

##### Solution
If you're using only the default Windows firewall (Windows Defender):
1. Go to Windows Defender settings in control panel.
1. Open "Advanced settings".
1. Click "Incoming rules".
1. Find "Golem SMB" rule on the list.
    * If it's not there => open PowerShell as administrator and run the following command:
    ```bash
    New-NetFirewallRule -DisplayName "Golem SMB" -Name "GOLEM-SMB" `
     -Direction Inbound -LocalPort 445 -Protocol TCP `
     -RemoteAddress 172.16.0.0/12 -LocalAddress 172.16.0.0/12 `
     -Program System -Action Allow
    ```
    * If it's there => check if it's enabled. If not just click "Enable" in the actions menu on the right.
1. You should be done!

If you're using custom, third-party firewall: we won't help you. Find out how to open ports in your firewall's documentation. Port 445 should be open for incoming TCP connections from 172.16.0.0/12 subnetwork (don't worry, this is just virtual subnetwork for VMs, you're not opening your port to the world).

---

#### 2. golem-docker user not present, or improperly configured
Open user management (`lusrmgr.msc` in terminal) and make sure there is a user named `golem-docker`.  
Then right-click the user name, choose "Properties" and make sure they look like this:

![golem-docker-user](/img/docker-errors/golem_docker_user.png)

If the "Password never expires" checkbox isn't selected, check it and save. That should be it.

***

#### 3. Golem's "ComputerRes" directory not shared

Run `Get-SmbShare` in PowerShell. In the output there should be entries with Golem data directories:
```
...
C37A161EDD52B4F2C7C59E6144A47595 *         c:\users\golem\appdata\local\golem\golem\default\rinkeby\computerres
DDE5B5B8924D95D303468DB8048F07A9 *         c:\users\golem\appdata\local\golem\golem\default\mainnet\computerres
...
```
Note: *If you're not using the default Golem data directory paths could be different.*  
If you don't see anything like this in the output that means shares need to be created. Golem should do this automatically on startup. Just click "Yes" to allow it.

![allow-powershell](/img/docker-errors/allow_powershell.png)


!>In case the above dialog box doesn't appear, or despite clicking "Yes" shares are not created, please report to the Golem team for help.

***

#### 4. Wrong permissions
1. Go to your Golem data directory.
1. Right-click "ComputerRes" folder and select "Properties".
1. Go to "Security" tab and click "Advanced" button.
1. Open "Permissions" tab and make sure "golem-docker" user has full control for subfolders and files:
    ![folder-permissions](/img/docker-errors/folder_permissions.png)

1. Open "Share" tab and make sure "golem-docker" user has full control:
    ![share-permissions](/img/docker-errors/share_permissions.png)
1. You're done.

---

#### 5. Other causes
We are aware that there are more possible causes of mount errors than the ones listed above. However, they were not yet properly analyzed and mitigated. To obtain more diagnostic information ("exit status 255" isn't very informative, is it?) you can look into VM's kernel logs. In order to do that run the following command in terminal right after the error occurs (before just [make sure that the VM is still running](#how-to-make-sure-golem-vm-is-running)):
```bash
docker-machine --native-ssh ssh golem dmesg
```

---

### Errors with Docker Toolbox

*If you are upgrading from previous version of Golem on Windows 10 Home eddition you will not need to install Docker Toolbox, as it was allready installed during previous installations.*

If this is clean install on Windows 10 Home (or you decide to go with Docker Toolbox) after installation of [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) please open your `Windows Power Shell` as an administrator and paste scripts provided below:

*Those scripts will provide fixes to native Docker Toolbox software and allow Golem to work properly in this environment*
```bash
C:\windows\System32\InfDefaultInstall.exe "C:\Program Files\Oracle\VirtualBox\drivers\vboxdrv\VBoxDrv.inf"
Set-ItemProperty HKLM:\system\currentcontrolset\services\vboxdrv -Name ImagePath -Value "\??\C:\Program Files\Oracle\VirtualBox\drivers\vboxdrv\VBoxDrv.sys"
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\VBoxDrv" -Name "DelayedAutostart" -Value 1 -Type DWORD
Start-Service vboxdrv
```

?>**After installation of Docker Toolbox restart your machine and then run Golem.**

#### Error Creating Docker VM

```bash
ERROR golem.docker.manager b"VirtualBox: error creating VM 'golem': Command '['docker-machine', 'create', '--driver', 'virtualbox', 'golem']' returned non-zero exit status 3."
```

```bash
WARNING golem.docker.manager b'DockerMachine: failed to env the VM: Command '['docker-machine', 'env', '--shell', 'cmd', 'golem']'
```

If you see either of these two errors in your `golem.log` file, then follow these troubleshooting steps:

- Shutdown the Golem App

-  Open Docker Quickstart Terminal (You can find it in your programs or as an icon on your desktop)

-  Run the following commands in Docker Quickstart Terminal one at a time:

	*This command shows if docker is running any errors. It is good to run this command before and after running any of the following docker commands to see if the error is solved.*
	```bash
docker-machine ls
``` 

	*This will restart docker’s golem instance.*
	```bash
docker-machine restart golem
``` 

	*This will remove the docker container.*
	```bash
docker-machine rm golem
``` 


Outside of the Docker Quickstart Terminal you can remove `.docker C:\Users\%USER%\.docker\machine\machines\golem`

You can search for this directory in your Windows search bar and remove it. This will force remove the docker machine from the docker directory. Then run the following command in Docker Quickstart Terminal:

```bash 
docker-machine create golem --driver virtualbox
```

This will create and engage the necessary drivers for your docker machine

* Now you can restart Golem and test.


#### Docker Directory Error

```bash
WARNING golem.docker.task_thread Task stderr:/usr/bin/python: can't open file '/golem/work/job.py': [Errno 2] No such file or directory
```

If you receive this error in your golem.log file, then the directory for the docker and data drive is not using the same hard drive as your Golem app. You just need to move your docker directory to the same hard drive as your Golem directory.

#### Further Troubleshooting

If you run the docker recovery commands and still recieve errors, you can rerun the commands with the debug flag to get more information.

The first one is `docker-machine -D ls` this will show your active machines and errors if there are any, specific errors can be googled or searched in docker's github for more troubleshooting options. You can also send your debug return errors to [chat](https://chat.golem.network) or contact@golem.network

If `docker-machine ls` shows normal you can try re-creating the machine. Make sure golem is off during these command.


`docker-machine -D rm golem`

**run Golem**

After running these command if any errors show in the debug return, then you can search for the specific error or contact us for further troubleshooting options. If you receive no errors, you can run `docker-machine ls` again, then if no errors show you can try to run golem again.

---

### How to make sure Golem VM is running
There are numerous ways to do this. The easiest way to check if VM is ready is to run the following command in terminal:

```bash
docker-machine ls
```

There should be `golem` machine listed in the command's output with state `Running`:

```bash
NAME    ACTIVE   DRIVER       STATE     URL                        SWARM   DOCKER        ERRORS
golem   -        hyperv       Running   tcp://192.168.4.107:2376           v18.06.1-ce
```

If it's not running use this command to start it:

```bash
docker-machine --native-ssh start golem
```

If you continue to see errors, then the debug flag (-D) should reveal the problem.

---

## Other Common Errors

#### Outdated Hyperg Version

```bash
Outdated hyperg version
```

```bash
 Hyperg is not available
```

```bash
 Cannot connect to hyperg
```

##### MacOs
- open terminal and type: 
```bash
brew upgrade golem
```

##### Windows 
- download the latest Golem installer from **[here](https://github.com/golemfactory/golem/releases)** and run it again.

---

#### Geth

```bash
Error connecting geth
```

There seems to be a problem with our servers. Please try a custom geth url or wait for few minutes and give it another try.

---

#### Sync

```bash
Chain sync error
```

```bash
Error syncing Golem
```

There are issues with ethereum network right now, and values in your wallet can be bit out of date.  

---

#### Running and stopping
 
```bash
Error starting Golem
```

```bash
Error stopping Golem
```

```bash
Error terminating Golem
```

Those errors should be followed with particular issues that caused them along with links to solutions on how to solve them.

---

## Port Forwarding Connection Errors
In order to connect to other Nodes on th Golem Network, your router needs to support UPnP or you need to forward ports **40102**, **40103**, and **3282** manually. Forwarding ports manually requires setting a static IP as well. The process of forwarding ports varies based on your router model. For router specific instructions on how to forward your ports go to **[https://portforward.com/](https://portforward.com/)**, then follow the instructions.

Once you have forwarded your ports try to connect to Golem. If you still cannot connect check your **[golem.log](https://golem.network/documentation/15-understanding-logs/)** for the following errors.

---

#### Port Forwarding Errors


```bash
WARNING golem.network.upnp IGD: discovery error: no devices discovered
```

This error means that your router does not support UPnP. To fix you must:

* Enable UPnP on your router or, if this option is not available, manually forward your ports
* Adjust your Firewall settings to enable incoming connections
* Call your ISP if issues persist, they sometimes block ports even if they are manually forwarded


```bash
ERROR golem.monitor Port reachability check error
```

This error means that your ports are not forwarded or Golem monitor is down. Check the following to fix:

* While running the Golem app check canyouseeme.org for ports 40102, 40103, and 3282, if they are closed then follow the standard troubleshooting steps below.


* Enable UPnP on your router or, if this option is not available, manually forward your ports
* Adjust your Firewall settings to enable incoming connections
* Call your ISP if issues persist, they sometimes block ports even if they are manually forwarded



```bash
'Adding task '49a0ca82-3d13-11e8-8f53-0f2bb4087adb'
support=<SupportStatus ok ({})>'

'Cannot connect to task ff848eb4-3cc2-11e8-8137-81970898e71f owner'

'Removing task ff848eb4-3cc2-11e8-8137-81970898e71f from task list'

'Task ff848eb4-3cc2-11e8-8137-81970898e71f request rejected: Connection
failed'
```
```bash
Resource handshake error: [...]
Error downloading resources [...]
```

This error means that hyperg is not connecting. Hyperg uses port 3282. Handshake errors can occur even if you have your ports forwarded, but the other node does not. To check if the error is coming from your end do the following:

* Run the command `golemcli network status` in your Terminal or Command Prompt. If it returns a timeout or `error for port 3282` then the problem is on your machine.
* Make sure you have manually forwarded port 3282 on your router
* Adjust your Firewall settings to enable incoming connections
* Call your ISP if issues persist, they sometimes block ports even if they are manually forwarded


#### All ports are blocked

* All ports on your router in the range 40102-60102 are blocked
* `start-port` and `end-port` settings might have been modified on your router

In both cases please check your router settings and make sure that none of ports mentioned above are blocked. 

---

## Enabling Virtualization in BIOS
?> **Note:** Required for Windows Users

Enabling processor virtualization using the BIOS is actually quite simple. Most modern computers should have this option, so there is a good chance that yours has it to. And it will take only few minutes to set it up.

To boot into BIOS, you will need to restart your computer, so make sure that all of your work is saved in the apps you are currently using, and all of them are closed. Restart your computer, and you will see the BIOS screen before the Windows loading screen. You will need to hit the activator key, which in most cases is F2, F5, or F12. 

You should see a very basic screen with a blue background and limited list of options to choose from. Most commonly those are Boot, Power Management, Advanced BIOS etc. Search for options that mention virtualization. It should be under Processor, Advanced CPU config. If you don’t see virtualization just click through each menu item and try to find it within your options. Look for terms like Virtualization Extensions, **Intel VT-x** or **VT-x**. If you find it you should be able to toggle it **on/off** or e**nabled/disabled** by pressing Enter <kbd>&#8996;</kbd>.

After you are sure that you have enabled virtualization save your settings and quit BIOS. Your computer will restart with its virtualization option enabled in normal mode. 









