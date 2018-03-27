Content:
================

  * [Installers](#installers)
    * [Post Setup](#post-setup)
  * [Interface](#interface)
    * [Graphical interface](#graphical-interface)
    * [Command line interface](#command-line-interface)
  * [Running from the source](#running-from-the-source)
  * [Packaging](#packaging)
    * [Building](#building)
    * [Known seeds](#known-seeds)
  * [Advanced topics](#advanced-topics)


# Installers

### macOS
See: https://github.com/golemfactory/golem/wiki/Installation-on-Mac

For more detailed information including troubleshooting, please visit the official `golem` [[Homebrew formula repository|https://github.com/golemfactory/homebrew-golem]].

### Ubuntu
See: https://github.com/golemfactory/golem/wiki/Installation-on-Ubuntu

### Windows
See: https://github.com/golemfactory/golem/wiki/Installation-on-Windows

## Post Setup

If you dont have a public ip, you need to forward ports 40102,40103 and 3282 to your machine from your router for golem to accept tasks.
Refer 
https://bitcoin.org/en/full-node#enabling-connections for port forwarding instructions but use above ports instead.
You may also need to open the ports through your firewall.

# Interface

## Graphical interface

   - **Windows**

      You can launch golem golem from shortcut on your desktop or search it in the _Start_ menu

      [[https://golem.network/img/screens/Untitled.png|alt=gui]]

   - **Linux**

      Launch `golem` command

   - **macOS**

      Type `golem` into Spotlight or select `golem` from _Applications_.

For more info see [[this instruction|https://docs.golem.network]]

## Command line interface

   - **On Windows**

      Open the windows command prompt and type: 

      `golemapp --nogui`

      And wait for Golem to start. Then type (in another console window):

      `golemcli -i`

      to use the command line interface in interactive mode.

   - **On Linux/macOS**

      In terminal write:

      `golemapp --nogui`

      And wait for Golem to start. Then type (in another terminal):

      `golemcli -i`

      to use the command line interface in interactive mode.


# Running from the source

## Installation

### macOS
See: https://github.com/golemfactory/golem/wiki/Installation-from-source-on-macOS

### Ubuntu
See: https://github.com/golemfactory/golem/wiki/Installation-from-source-on-Ubuntu

### Arch Linux (unofficial)
See: https://github.com/golemfactory/golem/wiki/Installation-ArchLinux

### Windows
See: https://github.com/golemfactory/golem/wiki/Installation-from-source-on-Windows

## Running

1. Setup:

  On **Windows**, run the command line as Administrator and type:

  `python3 setup.py develop`

  On **Linux**, type in terminal:

  `sudo python3 setup.py develop`

  In case of **macOS**, run:
  
  `python3 setup.py develop`

2. Executing Golem does not require elevated privileges and can be simply done by typing:

  `golemapp`

  or:

  `python3 golemapp.py`

  On **Windows**, run the foregoing commands in **Docker Quickstart Terminal**.

3. Unit tests require additional packages:

  `pip3 install -r requirements-test.txt`

  To run the tests:

  `python3 setup.py test`

To run more complicated test with imunes follow instruction from 
[here](https://github.com/golemfactory/golem/wiki/Testing-with-IMUNES).


# Packaging

## Building

If you want to create a stand-alone executable package, you may do so for (64-bit) Linux, Windows and macOS. 

For windows, install the requirements using `pip3 install -r requirements-winpackager.txt`. For other systems, make sure you have installed the `pyinstaller` python module.

To build the package:
1) install requirements, as explained in 'Running from the source' section.
2) install pyinstaller `pip3 install git+https://github.com/pyinstaller/pyinstaller.git`

 run:

   ```
   python3 setup.py pyinstaller
   ```

The output file and executables will be located in `$GOLEM/dist`.

## Known seeds: 
   - 188.165.227.180:40102
   - 188.165.227.180:40104
   - 94.23.196.166:40102
   - 94.23.196.166:40104

# Advanced topics
The topics listed below may require a deeper understanding of the operating system, Golem or the underlying components or extra tweaking. They don't usually work out of the box and you are responsible for properly configuring and maintaining topics described. No warranty here!
## systemd integration
See: https://github.com/golemfactory/golem/wiki/systemd-service-template