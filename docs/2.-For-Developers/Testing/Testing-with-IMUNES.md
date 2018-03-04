# Testing with IMUNES

## Prerequisites

### Docker

Nodes simulated by IMUNES are run as docker containers, so you need to install docker. 
These instructions were tested with version 1.9.1 of docker. Docker installation instructions (for Ubuntu) are [[here|https://docs.docker.com/engine/installation/ubuntulinux/]]


### Docker images

The next step is to build the docker image that will run at the simulated nodes. There's a script that performs that step, using Dockerfiles in `tests/imunes`:
```
$ cd $GOLEM
$ tests/imunes/build-images.sh
```
_Note_ This script should be run on "clean" repository, this mean there should be no files added by user, especially files without read privileges.

Note that this script has to be run from the main `$GOLEM` dir.
The script uses two docker files from `$GOLEM/tests/imunes`:
* `Dockerfile.blender` is used to build the image `imapp/blender`; this is essentially the docker file for `ikester/blender`, but based on (`FROM`) `imunes/vroot` instead of `ubuntu:trusty`. 
* `Dockerfile.gnr` is used to build the final image `imapp/gnr`, based on `imapp/blender`. 

If everything up to this point went well, the command `docker images` should list `imunes/vroot`, `imapp/blender` and `imapp/gnr`.


### IMUNES (imapp version)

You'll need the imapp version of IMUNES which differs slightly from the original:
```
$ git clone git@github.com:imapp-pl/imunes.git
```
To install IMUNES (by default to `/usr/local/bin` and `/usr/local/lib/imunes`, this can probably be changed by setting the `PREFIX` var in `imunnes/GNUmakefile` but I haven't tested that) invoke:
```
$ cd imunes; sudo make install all
```

IMUNES projects can be displayed and edited in IMUNES GUI as follows:
```
$ imunes $GOLEM/tests/imunes/local.imn
```
Starting, topping and attaching to running simulations requires root privileges. The following command starts the simulation in the background:
```
$ sudo imunes -b $GOLEM/tests/imunes/local.imn
Creating nodes...
100.0%                                          
Creating links...
100.0%                                          
Configuring nodes...
100.0%                                          
Starting services...
Network topology instantiated in 2.374 seconds (4 nodes and 3 links).
Experiment ID = i590c
```
You may now attach to the running simulation by starting IMUNES GUI (`sudo imunes`) and choosing `Experiment->Attach to experiment` from the menu. Once attached, GUI can terminate the experiment (`Experiment->Terminate`). All running experiments can also be quickly terminated by 
```
$ sudo cleanupAll
```


## Running tests with the `imunes.py` script

The default test scenario (and the only one supported so far) is to start an IMUNES simulation using a specified IMUNES project file (`.imn`), and run GNR (ie `python gnr/node.py`) at each simulated machine. One GNR instance starts with a single task. The script then waits until the task is computed in the simulated network. 

This scenario is run by executing the script:
```
$ sudo python $GOLEM/tests/imunes/imunes.py network.imn task.json --requester pc1 --supernode host1 --seed host1
```
The meaning of the arguments is as follows:
* `network.imn` is the IMUNES network topology file; this is the only mandatory argument.
* `task.json` is the file with the task description; if this argument is not specified then Golem nodes will start but no task will be computed.
* `--requester pc1` indicates that the node called `pc1` in the IMUNES project will request task computation; this argument is mandatory iff the task is specified.
* `--supernode host1` means that the node called `host1` will act as a Golem supernode; multiple supernodes may be speficied (or none).
* `--seed host1` means that it will also be used as a seed, i.e. other nodes will connect to it at their startup; multiple seeds may be specified (or none).

This should open few terminal windows, one for each simulated machine, displaying logs of GNR nodes computing the specified task. After the task is completed the terminal windows are closed and the simulation is terminated.

Note that the script has to be run as `root`. This is required to start IMUNES.


### The test task

The task to run in the simulated network is read from a JSON file. The file is copied to `/opt/golem/test-task/task.json` at the the target machine before GNR nodes are started. Absolute paths in the task definition file, which are assumed to refer to files at the host machine, are adjusted so that they point to the files copied to the target machine. For example, the task file may specify `/home/finn/golem/task/scripts/blendertask.py` as the main program file. The script copies the program file to `/opt/golem/test-task/blendertask.py` and updates the path in the task file. Similarly, the scene file `/home/finn/blender/scene.blende` referenced to by the task file will be copied to `/opt/golem/test-task/scene.blend` and the path in the target task file will point to it.

Pickled task definitions may be converted to JSON files using the script at `scripts/pickle2json.py`.


### Log files

Simulated GNR nodes write their log files to `/tmp/imunes/<node-name>/golem.log`, where `<node-name>` is the name of the simulated machine, for example `pc1` or `host2`. These names can be set in the IMUNES GUI. The logs are available even after the simulation ends but are overwritten when the test is restarted.
