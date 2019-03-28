
# Installation
---
* Before you install and run the Golem app please read and accept our [**Disclaimer and User Interaction Guidelines**](https://golem.network/disclaimer/). 
* **[Minimum Requirements to Run Golem](Products/Brass-Beta/Installation?id=minimum-requirements-to-run-golem)**
* **[Port Forwarding](Products/Brass-Beta/Installation?id=port-forwarding)**
* **[Acquiring GNT and ETH for transactions](Products/Brass-Beta/Installation?id=acquiring-gnt-and-eth)**
* For Windows users, Virtualization VT-X/AMD-v needs to be enabled in BIOS or your VMware settings. You can find instructions on enabling VT-X in BIOS **[here](https://golem.network/documentation/how-to-enable-vt-x-in-bios/)**
---

#### Minimum requirements to run Golem:

?> We support 
**Windows 10**, **OS X Sierra** and higher, and **Ubuntu 16.04 LTS.**

In general we recommend a processor with multiple cores and lots of RAM. At minimum, you can run Golem with:
* **2 GB RAM**
* **2 cores**
* **20 GB HDD**
* **public IP or ability to forward ports or router with UPnP activated**

For more demanding renders like the **[Production Benchmark](https://www.blender.org/download/demo-files/)** you will need at least:
* **16 GB RAM**
* **6 cores**

After initial tests we do not yet have a model for the "optimal" machine. This is where **you come in as a Beta user**. Try Golem with your machine and give us feedback on your experience.
 As the network grows there could be a way to determine which configurations perform better than others. Right now, our main focus it building a strong network. Over time, the computing standards will become more refined. 

> The best rule of thumb right now is "the more power you are willing to spare, the more tasks you will be able to compute".


#### Port forwarding
If you don't have a public ip or your router doesn't support UPnP, you need to forward ports **40102, 40103 and 3282** to your machine from your router for Golem to accept tasks. Refer **[https://bitcoin.org/en/full-node#enabling-connections](https://bitcoin.org/en/full-node#enabling-connections)** for port forwarding instructions but use above ports instead. You may also need to open the ports through your firewall. For router specific instructions on how to forward your ports go to **[https://portforward.com/](https://portforward.com/)**
To check if your ports are forwarded correctly you can use **[www.canyouseeme.org](http://www.canyouseeme.org/)**

?> **Note:** If port forwarding does not work, you may need to call your ISP to change settings on your router to allow nodes to connect.

Once you have forwarded your ports you are ready to install Golem.  

#### Password
!> You cannot reset your password if you lose it. No password recovery exists for the app right now. You will be able to print your password during onboarding process, or save it as a .PDF file so you can store it in safe and secure place. 


#### Acquiring GNT and ETH

As a Requestor you will also need some GNT and a small amount of ETH (0.005 should be a good start) to pay for computing power on the network. If you are going to participate as a Provider you will need a small amount of ETH for withdrawals. Golem is built on the Ethereum Network. Their blockchain facilitates secure transactions between our users. We chose a decentralized model for our app and marketplace because of the security and scalability it will allow. GNT is the medium of exchange for Providers and Requestors, ETH pays for transaction fees on the Ethereum Blockchain.

* If you already have GNT and ETH you can skip this part of the tutorial.
* If you are knowledgeable on cryptocurrencies and just need to be pointed in the right direction see below.
* If you are completely new to cryptocurrencies and the basics of holding and transacting them please do some research before making any transactions on Golem: **[https://hackernoon.com/a-10-minute-guide-to-buy-sell-store-cryptocurrencies-d7d06c384998](https://hackernoon.com/a-10-minute-guide-to-buy-sell-store-cryptocurrencies-d7d06c384998)**.

You can acquire ETH through almost any cryptocurrency exchange. The most popular way to acquire ETH now is through Coinbase and GDAX.

#### Installing Golem

Please follow the instructions for your OS to install Golem:

* **[Installation on Windows 10](Products/Brass-Beta/Installation?id=windows-quick-install)**
* **[Installation on Mac](Products/Brass-Beta/Installation?id=macos-quick-install)**
* **[Installation on Ubuntu](Products/Brass-Beta/Installation?id=ubuntu-quick-install)**


Once you have successfully downloaded and installed Golem on your OS, run the app and then check to see if your ports are forwarded correctly on [canyouseeme.org](http://www.canyouseeme.org/). You must be running the Golem app in order to check ports **40102, 40103 and 3282** as Golem will listen them after fully started.

If you find that your ports are not correctly forwarded please revisit your router instructions to enable port forwarding. In some rare cases you may need to contact your ISP to enable port forwarding.

When Golem is up and you are able to connect to nodes, you can adjust your settings and start submitting or receiving tasks to compute!


## Windows - quick install

---
<iframe width="100%" height="315px" src="https://www.youtube.com/embed/LSI-QLnhuvI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Instructions below were based on screenshots from Golem version 0.19.0.

1. Download latest installer from [this site](https://github.com/golemfactory/golem/releases)

2. Launch installer
![installer](/img/installation-windows/01-install-icon.jpg)


3. The installer will extract all necessary files for prerequisites and will launch itself
![installer](/img/installation-windows/02-extracting-files.jpg)


4. Click "next"
![installer](/img/installation-windows/03-setup-wizard.jpg)


5. Make sure Microsoft Visual C++ 2015 is checked and click "next"
![installer](/img/installation-windows/04-prerequisites.jpg)


7. Allow (by clicking "yes") Microsoft Visual C++ to make changes on your device to be sure that Golem could work properly
![installer](/img/installation-windows/05-redist-allow.jpg)


8. If you’re upgrading from versions prior to 0.19.x, be aware that Brass Golem Beta 0.19+ uses **Docker for Windows**. Docker for Windows comes with a new type of virtualization support: Hyper-V (Windows Server Virtualization) in place of the old Docker Toolbox. This virtualization change should provide a more stable environment for Golem nodes, but it does not come without difficulties. 

  If you are a **Windows 10 Home** user you will **not be able to install Hyper-V** as it's not supported. Fortunately, we have kept Docker Toolbox support in this case. The only downside is, that you will have to install Docker Toolbox manually from now on, as it's no longer part of the install package.

  !> Please be aware that **if you are using any other virtualization software** (for eg. Docker Toolbox, VMware), **do not install Hyper-V** as this could potentially impact performance. If you encounter any problems with Hyper-V you can still uninstall it, and try to run Golem with Docker Toolbox.

  ##### Docker for Windows (Hyper-V)

  - Click `Yes` and follow installation instructions. 

  ?>After internal testing we have found out that leaving **Docker Toolbox** on Windows during installation of Hyper-V **should not cause any issues with Golem**, and thus uninstalling it should not be mandatory by any means. There might be cases tough where after such process Docker Toolbox is going to be treated as a preferred virtualization by Windows machine. So if you are a user who uses virtualization only with Golem then uninstall Docker Toolbox and run Golem again.

  ##### Docker Toolbox

  If you are upgrading from previous version of Golem on Windows 10 Home eddition you will not need to install Docker Toolbox, as it was allready installed during previous installations.

  If this is clean install on Windows 10 Home (or you decide to go with Docker Toolbox) after installation of [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) please open your `Windows Power Shell` as an administrator and paste scripts provided below:

  *Those scripts will provide fixes to native Docker Toolbox software and allow Golem to work properly in this environment*
  ```bash
  C:\windows\System32\InfDefaultInstall.exe "C:\Program Files\Oracle\VirtualBox\drivers\vboxdrv\VBoxDrv.inf"
  Set-ItemProperty HKLM:\system\currentcontrolset\services\vboxdrv -Name ImagePath -Value "\??\C:\Program Files\Oracle\VirtualBox\drivers\vboxdrv\VBoxDrv.sys"
  Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\VBoxDrv" -Name "DelayedAutostart" -Value 1 -Type DWORD
  Start-Service vboxdrv
  ```

  ?>**After installation of Docker Toolbox restart your machine and then run Golem.**

![installer](/img/installation-windows/06-hyper-v.jpg)


9. Golem Setup Wizard will launch
![installer](/img/installation-windows/07-golem-wizard.jpg)


12. Accept License Agreement
![installer](/img/installation-windows/08-setup-terms.jpg)


13. Select location
![installer](/img/installation-windows/09-select-location.jpg)


14. Choose what kind of Golem Dapp shortcuts you want to have
![installer](/img/installation-windows/10-shortcuts.jpg)


15. Click "Install" to begin installation
![installer](/img/installation-windows/11-ready-to-install.jpg)


16. Allow Golem to make changes on your device
![installer](/img/installation-windows/12-allow-golem-to-make-changes.jpg)


17. Golem will install on your computer
![installer](/img/installation-windows/13-installing.jpg)


18. Click "finish"
![installer](/img/installation-windows/14-compliting-wizard.jpg)


19. Restart computer
![installer](/img/installation-windows/15-restart-computer.jpg)

---

### Windows - upgrade {docsify-ignore}
Currently there is no in app uprgade avaliable. You need to download newest installer, and follow installation steps.

?> If you are upgrading from previous version of Golem on Windows 10 Home eddition you will not need to install Docker Toolbox, as it was allready installed during previous installations.

---

## Windows - installation from source 

#### Pre-requisites
To run golem from source on Windows you need to have:

- [Git](https://git-scm.com/download/)
- [Python 3.6 x64](https://www.python.org/ftp/python/3.6.2/python-3.6.2-amd64.exe)
- [pywin32 221 x64 py3.6](https://sourceforge.net/projects/pywin32/files/pywin32/Build%20221/pywin32-221.win-amd64-py3.6.exe/download)
- [VisualStudio Express 2017 x64](https://www.visualstudio.com/vs/visual-studio-express/)
- [Rust x64 Stable msvc](https://forge.rust-lang.org/other-installation-methods.html)
- [Latest golem version](https://golem-releases.cdn.golem.network/)
 - __OR__: Manually install and configure the dependencies

#### Git
[Git](https://git-scm.com/download/)

Download the installer and run it

#### Validate install:
Command:  
```bash
git --version
```
Result:
```bash
git version <version you downloaded>
```
?> Most versions should work for this guide, we recommend the latest.

#### Python 3.6 x64
[Python 3.6 x64](https://www.python.org/ftp/python/3.6.4/python-3.6.4-amd64.exe)

Download the installer and run it, make sure to add to path in the installer options or [manually](https://www.google.nl/search?q=add+folder+to+path+windows+10) after install.
> [!TIP|style:callout]
> At the last stage of the installation you can disable the PATH length, this is not required but a nice comfort feature to select

#### Validate install:
Command:  
```bash
python --version
```
Result:
```bash
python 3.6.4
```
?> Note that `3.6` is what we are looking for, higher patch numbers should be fine.

#### Pywin32
[pywin32 221 x64 py3.6](https://sourceforge.net/projects/pywin32/files/pywin32/Build%20221/pywin32-221.win-amd64-py3.6.exe/download)

Download the installer and run it, make sure to select the python folder you just installed ( python 3.6 ).

#### Validate install:
Verify the file `Lib\site-packages\pywin32.version.txt` exists inside your python installation folder ( from python.exe )

#### Visual studio
[VisualStudio Express 2017 x64](https://www.visualstudio.com/vs/visual-studio-express/)

Download the installer and run it, you need at least these options for golem to work:
?> Note some of the options are under the menu "Individual Components"

- Desktop development with C++
- Additional components:
 - C++ Toolset v141
 - MSbuild
 - Windows SDK 10.0.15063 for Desktop

 After this is one you need to check if msbuild is available in your PATH.
 If it is not please [add it](https://www.google.nl/search?q=add+folder+to+path+windows+10), by default it is:
```
C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin
```
Versions can be higher, please check your Visual Studio install folder and adjust accordingly.


#### Validate install:
Command:
```bash
msbuild /version
```
Result:
```bash
Microsoft (R) Build Engine version 15.5.180.51428 for .NET Framework
Copyright (C) Microsoft Corporation. All rights reserved.

15.5.180.51428
```

#### Rust x64 Stable
[Rust x64 Stable msvc](https://forge.rust-lang.org/other-installation-methods.html)

Download the installer ( rustup-init.exe ) and run it, make sure to add to path in the installer options or [manually](https://www.google.nl/search?q=add+folder+to+path+windows+10) after install.

For rust and python to find each other you also need to add `<Python36 install location>\libs` to the environment variable `LIB`.
?> Restart all open cmd and powershell windows for this change to take effect.

#### Validate install:
Command:  
```bash
rustup --version
```
Result:
```bash
<Version you downloaded>
```

#### Golem Installer
[Golem installer latest version](https://golem-releases.cdn.golem.network/)

For the last bits of the setup you can use the golem installer to set it up.
This includes:

##### With Hyper-V

- Enable the Windows feature Hyper-V
- Configure docker
 - Create windows share user
 - Create windows shares for docker in golem data dir
 - Create windows firewall rule to access share from docker network
 - Add current user to Hyper-V Administrators
- Install OpenSSL
- Install golem-electron
- Install hyperg
- Install docker binaries

##### With Docker Toolbox

- Make sure that Hyper-V is not installed (Windows 10 Pro only). Uninstall if present.
- Install Golem, saying no to Hyper-V (restart not required)
- Install Docker Toolbox (restart not required)
- Run the scripts:

    *Those scripts will provide fixes to native Docker Toolbox software and allow Golem to work properly in this environment*
  ```bash
  C:\windows\System32\InfDefaultInstall.exe "C:\Program Files\Oracle\VirtualBox\drivers\vboxdrv\VBoxDrv.inf"
  Set-ItemProperty HKLM:\system\currentcontrolset\services\vboxdrv -Name ImagePath -Value "\??\C:\Program Files\Oracle\VirtualBox\drivers\vboxdrv\VBoxDrv.sys"
  Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\VBoxDrv" -Name "DelayedAutostart" -Value 1 -Type DWORD
  Start-Service vboxdrv
  ```
- Install OpenSSL
- Install golem-electron
- Install hyperg
- Restart your computer

#### No installer alternative
When you installed the golem application you can skip this chapter, move on to [First time setup](Products/Brass-Beta/Installation?id=first-time-setup)

#### Enable Hyper-V *(skip for Docker Toolbox)*
Go to your "[Windows features](https://www.google.nl/search?q=change+windows+features)" and enable Hyper-V. Restart your machine after the configuration has been applied

#### Configure docker *(skip for Docker Toolbox)*

Before you can configure docker you need the [Git](Products/Brass-Beta/Installation?id=git).
Please clone the source directory now and then continue with this step.

In an administrator PowerShell go to the golem source directory and run:
```bash
powershell.exe -ExecutionPolicy RemoteSigned -File .\scripts\docker\prepare-docker-for-windows.ps1 ".\scripts\docker\" "$env:LocalAppData" "$env:UserName"
```

?> After docker is configured you need to re-log into windows.

#### Install OpenSSL
[OpenSSL libraries 1.0.1u x64](https://github.com/golemfactory/golem/tree/develop/Installer/Installer_Win/deps/OpenSSL)

Download `libeay32.dll` and `ssleay32.dll` these files and move them to a known location, e.g. `C:\GolemResources`.
**Prepend** `C:\GolemResources` to your `PATH` environment variable. You will have to restart your running command line windows for this change to take effect.

#### Validate install:
Command:
```bash
where.exe libeay32.dll
where.exe ssleay32.dll
```
Result:
```bash
C:\GolemResources\libeay32.dll
C:\GolemResources\ssleay32.dll
```

#### Install golem-electron

[Electron binaries(win-unpacked)](Products/Brass-Beta/Electron?id=installation)

Follow the same steps as for OpenSSL above, can be the same or a new folder.

#### Validate install:
Command:
```bash
golem --version
```
Result:
```bash
<Version you downloaded>
```

#### Install hyperg
[hyperg binaries(hyperg)](https://github.com/mfranciszkiewicz/golem-hyperdrive/releases/)

Follow the same steps as for OpenSSL above, can be the same or a new folder.
?> The downloaded package contains a folder. Extract only `hyperg.exe` and siblings.

#### Validate install:
Command:
```bash
hyperg --version
```
Result:
```bash
<version you downloaded>
```
#### Install Docker binaries

**Hyper-V**

[Docker for Windows Installer.exe](https://docs.docker.com/docker-for-windows/release-notes/)
Hit 'Download' under the title of docker for windows 18.06.1

?> You only need `docker.exe` and `docker-machine.exe` to use golem. You can extract them from the docker installer.
Use 7zip to unpack the `.exe` and then unpack the `.text` file inside, the binaries you need are in `artifacts\resources\bin`

Follow the same steps as for OpenSSL above, can be the same or a new folder.

---

**Docker Toolbox**

[Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/)
Hit `Get Docker Toolbox for Windows` and follow installation steps.

After Docker Toolbox will be installed, please open your `Windows Power Shell` as an administrator and paste scripts provided below:

*Those scripts will provide fixes to native Docker Toolbox software and allow Golem to work properly in this environment*
  ```bash
  C:\windows\System32\InfDefaultInstall.exe "C:\Program Files\Oracle\VirtualBox\drivers\vboxdrv\VBoxDrv.inf"
  Set-ItemProperty HKLM:\system\currentcontrolset\services\vboxdrv -Name ImagePath -Value "\??\C:\Program Files\Oracle\VirtualBox\drivers\vboxdrv\VBoxDrv.sys"
  Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\VBoxDrv" -Name "DelayedAutostart" -Value 1 -Type DWORD
  Start-Service vboxdrv
  ```

---

#### Validate install:
Command:
```bash
docker --version
docker-machine --version
```
Result:
```bash
Docker version <version you downloaded>
docker-machine.exe version <version you downloaded>
```

#### Install Visual c++ 2015 x64
[vc_redist.x64.exe](https://www.microsoft.com/en-us/download/details.aspx?id=48145)

Download the x64 version and run the installer.

#### First time setup
To setup the source folder you have to:

- git clone
- msbuild
- create docker machine
- create venv (optional)
- load docker env
- load venv (optional)
- install requirements
- run setup.py

#### Git clone (once)

Go to your projects / sources folder and run:

```bash
git clone https://github.com/golemfactory/golem
cd golem
```

?> Note if you did NOT use the installer and have NOT done the [docker configuration](Products/Brass-Beta/Installation?id=golem-installer) yet, now is a good time

#### msbuild (once)

While inside the golem source folder, run:

```bash
msbuild apps\rendering\resources\taskcollector\taskcollector.sln /p:Configuration=Release /p:Platform=x64
```
When errors occur something went wrong with your visual studio install. Try following the [pre-requisite guide](Products/Brass-Beta/Installation?id=visual-studio) again.


#### Create docker machine (once)

While inside the golem source folder, run:

!> Do not run this command as administrator, your user needs ownership of the machine. If this command fails then go back to the `Configure docker` step.

---

**Hyper-V**

```bash
docker-machine -D create --driver hyperv --hyperv-boot2docker-url https://github.com/golemfactory/boot2docker/releases/download/v18.06.1-ce%2Bdvn-v0.35/boot2docker.iso --hyperv-virtual-switch "Default Switch" --hyperv-cpu-count 1 --hyperv-memory 1024 --hyperv-disk-size 5000 golem
```
?> "Default switch" is for english machines only, check your hyper-v switch name if it gives an error.

---

**Docker Toolbox**
```bash
docker-machine -D create --driver virtualbox golem
```

---

#### create venv (opt, once)

To create a separate `venv` for golem to run in you can run:
```bash
python -m venv .venv
```
This will create an environment in the folder `.venv`, you can change the name.

#### load docker env (reboot)

```bash
docker-machine env golem
```
Execute the last command that was printed, without the first comment characters

#### load venv (opt, reboot)

```bash
.\.venv\Scripts\activate
```

#### After git branch change

##### install requirements

```bash
pip install -r requirements.txt
pip install -r requirements-win.txt
```

?> The first time you install the requirements it could be setuptools is outdated. When you get an error try to run
```bash
pip install setuptools --upgrade
```

#### setup.py develop
```bash
python setup.py develop
```

#### Running the app
##### Simple command
```bash
python golemapp.py
```

#### Useful arguments
- --log-level
- --mainnet
- --password
- --accept-terms
- --concent

---

## MacOS - quick install

---
<iframe width="100%" height="315px" src="https://www.youtube.com/embed/TAozKguVoCc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

1. First, you have to install Homebrew, a package manager for macOS. Press <kbd>&#8984;</kbd> Command + <kbd>&#9251;</kbd> Space on your keybord and type terminal. Hit <kbd>&#8996;</kbd> Enter and paste command lines provided below:
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```

2. Afterwards, run the following script in the terminal:
```bash
brew tap caskroom/cask
brew tap golemfactory/golem
brew cask install golem
```
3. Since 0.18.0 uses Docker for Mac, the first step is to make sure that all previous Docker instances are removed from your machine. Open terminal and type:
```bash
docker-machine rm golem
brew uninstall --ignore-dependencies docker docker-machine docker-machine-driver-xhyve
```

Docker for Mac will be installed alongside Golem. Make sure to accept Docker installation requirements when prompted. 

?> Remember! Before you run Golem be sure to run Docker for Mac. Hit <kbd>&#8984;</kbd> Command + <kbd>&#9251;</kbd> Space, type Docker and press <kbd>&#8996;</kbd> Enter. Make sure that Docker is running properly. If you encounter any issues with the Docker for Mac please follow Docker [instructions](https://docs.docker.com/docker-for-mac/troubleshoot/#docker-knowledge-hub)

---

### Mac Os - upgrade {docsify-ignore}
Press <kbd>&#8984;</kbd> Command + <kbd>&#9251;</kbd> Space on your keybord and type terminal. Hit <kbd>&#8996;</kbd> Enter and paste command lines provided below:

```bash
brew update
brew upgrade golem
brew cask upgrade golem
brew unlink golem
brew link golem
brew unlink hyperg
brew link hyperg
```

### MacOs - reinstall {docsify-ignore}
Press <kbd>&#8984;</kbd> Command + <kbd>&#9251;</kbd> Space on your keybord and type terminal. Hit <kbd>&#8996;</kbd> Enter and paste command lines provided below:

```bash
brew tap golemfactory/golem
brew reinstall golem
brew cask reinstall golem
```

### MacOs - remove {docsify-ignore}
Press <kbd>&#8984;</kbd> Command + <kbd>&#9251;</kbd> Space on your keybord and type terminal. Hit <kbd>&#8996;</kbd> Enter and paste command lines provided below:

```bash
brew cask uninstall golem-mainnet-launcher 
brew cask uninstall golem
brew uninstall golem
```

---

## MacOS - installation from source 

#### Get the code

Clone the repo
```bash
  git clone https://github.com/golemfactory/golem.git
```

?>Command line developer tools are required and may be proposed by macOS.
When required, just follow the instructions.

#### Setup your system

##### Install dependencies - MacOS Sierra and higher

1. Install Homebrew `https://brew.sh`, if required:
```bash
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Install Python 3 with `brew`:
```bash
  brew unlink python
  brew install https://raw.githubusercontent.com/Homebrew/homebrew-core/f2a764ef944b1080be64bd88dca9a1d80130c558/Formula/python.rb
  brew switch python 3.6.5_1
```

3. Update pip, setuptools, and wheel:
```bash
  pip3 install --upgrade pip setuptools wheel
```

4. Install software, drivers and libraries with `brew`:  
```bash
  brew tap caskroom/cask
  brew cask install docker
  brew install openexr
  brew install freeimage
  brew install gmp
  brew install golemfactory/hyperg/hyperg
  brew install ethereum/ethereum/ethereum
```

5. Pull docker images from [source](https://stackoverflow.com/a/44719239/3805131).
Launch the **Docker** app. Click next. It will ask for privileged access. Confirm. A whale icon should appear in the top bar. Click on it and wait for "Docker is running" to appear and after that:
```bash
docker image pull golemfactory/base:1.2
docker image pull golemfactory/blender:1.4
```

6. Install the `rust` language compiler
Go to [rust-lang.org](https://www.rust-lang.org/tools/install) and choose your preferred installation method.
Or, alternatively, just go with the default:
```bash
curl https://sh.rustup.rs -sSf | sh
```

#### Prepare stuff for development - prepare virtual environment

1. Install virtualenv
```bash
  pip3 install virtualenv
```

2. Create a virtual environment
```bash
  virtualenv venv
```

3. Switch to the virtual environment and test whether Python 3 has been activated
```bash
  source venv/bin/activate
  which python
  python --version
```

#### Prepare stuff for development - install requirements

1. Install requirements for development
```bash
  pip install -r requirements.txt
```

2. Install requirements for testing
```bash
  pip install -r requirements-test.txt
```

#### Prepare stuff for development - run Docker for Mac

1. First, `setup.py`
```bash
  python setup.py develop
```

2. Second, `golemapp.py`
```bash
  python golemapp.py
```

**That's it!**

** If you want to install GUI please follow [this instructions](Products/Brass-Beta/Electron?id=installation)**  

---

## Ubuntu - quick install

---
#### Installing Golem on Ubuntu
<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/OPpB3C15S4A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---

#### Installing Golem on Ubuntu server
<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/yP5SQq5mfR8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---

The officially supported release is 16.04 at the moment.

1. Download and run installation script:
`wget https://raw.githubusercontent.com/golemfactory/golem/develop/Installer/Installer_Linux/install.sh`

2. Make sure that script can be executed
`chmod +x install.sh`

3. Launch script
`./install.sh`

4. You might be asked for root password

5. If any dependencies needs to be installed, you will be asked if you want to install them. We strongly recommend to agree.

6. When the script terminates, the program, along with dependencies, will be installed. All you need to do is to restart your PC.

6. To make sure you can run golem without >`sudo` run >`$ sudo usermod -aG docker $USER` Warning: The docker group grants privileges equivalent to the root user. For details on how this impacts security in your system, look up: Docker Daemon Attack Surface.


#### Enable GPU support

##### Prerequisites

1. **Ubuntu (18.04)**
2. **Nvidia GPU**
3. **Nvidia proprietary driver version 396+**

##### Installation

1. `wget https://raw.githubusercontent.com/golemfactory/golem/develop/Installer/Installer_Linux/install.sh`
2. `chmod +x install.sh`
3. `./install.sh --deps-only`

Run Golem normally and it will build the required docker images if the prerequisites have been satisfied.

---

### Ubuntu - upgrade {docsify-ignore}
Currently there is no in app uprgade avaliable. You need to download newest installer, and follow installation steps.

---

## Ubuntu - installation from source

#### System setup

#### 1. Install additional libraries
```bash
sudo apt install openssl python3-dev libffi-dev pkg-config libjpeg-dev \
    libopenexr-dev libssl-dev autoconf libgmp-dev \
    libfreeimage-dev libtool python3-netifaces python3-psutil build-essential \
    python3-pip rustc cargo
```

#### 2. Install Docker

Follow the instructions for [Docker CE installation](https://docs.docker.com/install/linux/docker-ce/ubuntu/).

To enable access to Docker engine on your machine, add yourself to `docker` group:

```bash
sudo usermod -a -G docker $USER
```

and restart the system for changes to take effect.

##### _3. Optional: Install Python virtualenv_

Steps 4., 5. and 6. use pip and Python to install dependencies and set up your development environment.
By default, the system installation of Python is used, installing all of Golem's dependencies in a system-wide manner.
Using a Python virtual environment allows you to create an isolated Python installation which will be used specifically with Golem.

For more details on Python virtual envs take a look [here](https://docs.python-guide.org/dev/virtualenvs/).

**3a.** Install `virtualenv` and `virtualenvwrapper`:

   ```bash
   sudo pip3 install virtualenv virtualenvwrapper
   source /usr/local/bin/virtualenvwrapper.sh
   ```
   The script `virtualenvwrapper.sh` provides additional commands that we'll use below.

**3b.** Create a virtual env:

   ```bash
   mkvirtualenv --python=$(which python3) golem-env
   ```
   This creates `~/.virtualenvs/golem-env`.
   At this point `(golem-env)` should appear at the beginning of your prompt.
   If you need to enable the virtual env manually just type:
   ```bash
   workon golem-env
   ```

#### 4. Install additional Python libraries
This step needs to be run from the Golem source directory.

```
pip3 install -r requirements.txt
```

In case the installation fails with a `403 Client Error: SSL is required` error, you need to re-install pip with `pip3 install --upgrade pip`.

#### 5. Run setup
This step needs to be run from the Golem source directory.

```
python3 setup.py develop --prefix=$HOME/.local
```

#### _6. Optional: Install test dependencies_
In order to run unit and integration tests you need to install test-specific dependencies.
This step needs to be run from the Golem source directory.

```
pip3 install --user -r requirements-test.txt
```

If you run into import problems, e.g. `ImportError: cannot import name keccak`, run:
  - `sudo apt-get remove python-crypto`
  - `sudo pip install --upgrade pycryptodome`

#### 7. Install HyperG

  **7a.** Downloading binaries

  Download the latest Linux release [here](https://github.com/mfranciszkiewicz/golem-hyperdrive/releases).
  Extract the archive to a directory of your choosing, for example:
  ```bash
  tar xzf hyperg_0.2.10_linux-x64.tar.gz $HOME/.local/bin/
  ```

  **7b.** Adding HyperG to PATH

  HyperG needs to be available on your system's PATH. Considering the example above, the directory `$HOME/.local/bin` should already be included in PATH (this depends on your Ubuntu version, you can run `echo $PATH` to verify).

  If your HyperG directory is not included in PATH, you need to add it manually. For example, this can be done by adding the below line to `$HOME/.profile` (this assumes you're using `bash` as your shell, which is the default on Ubuntu):

```bash
export PATH="$PATH:<path_to_your_hyperg_directory>"
```

#### Done!
You are now ready to run Golem!
To do so, either start the [Golem Electron app](https://github.com/golemfactory/golem-electron) or start Golem manually from its source directory:

```bash
./golemapp.py
```

For information on how to interact with Golem from the CLI, please take a look at [this page](Projects/Brass-Beta/Command-line-interface).
