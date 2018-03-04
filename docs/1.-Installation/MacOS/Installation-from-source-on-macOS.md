## Get the code

Clone the repo

```
  git clone https://github.com/golemfactory/golem.git
```

Command line developer tools are required and may be proposed by macOS.
When required, just follow the instructions.

## Setup your system

### Mac OS X 10.10 (Yosemite) or later

**Install dependencies**

1. Install Homebrew `https://brew.sh`, if required:
```
  /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Install the latest Python 3 with `brew`:
```
  brew install python3
```

3. Update pip, setuptools, and wheel:
```
  pip3 install --upgrade pip setuptools wheel
```

4. Install software, drivers and libraries with `brew`:  
```
  brew install docker
  brew cask install docker
  brew install docker-machine
  brew install openexr
  brew install freeimage
  brew install gmp
  brew install golemfactory/hyperg/hyperg
  brew install ethereum/ethereum/ethereum
  brew install xhyve
  brew install docker-machine-driver-xhyve
```

5. `docker-machine-driver-xhyve` driver requires superuser privileges to access the hypervisor. To
enable, execute:
```
  sudo chown root:wheel /usr/local/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
  sudo chmod u+s /usr/local/opt/docker-machine-driver-xhyve/bin/docker-machine-driver-xhyve
```

6. pull docker images

source: https://stackoverflow.com/a/44719239/3805131

Launch the **Docker** app. Click next. It will ask for privileged access. Confirm. A whale icon should appear in the top bar. Click it and wait for "Docker is running" to appear and after that:

```
docker image pull golemfactory/base:1.2
docker image pull golemfactory/blender:1.3
```

## Prepare stuff for development

**Prepare virtual environment**

1. Install virtualenv
```
  pip3 install virtualenv
```

2. Create a virtual environment
```
  virtualenv venv
```

3. Switch to the virtual environment and test whether Python 3 has been activated
```
  source venv/bin/activate
  which python
  python --version
```

**Install requirements**

1. Install requirements for development

```
  pip install -r requirements.txt
```

2. Install requirements for testing

```
  pip install -r requirements-test.txt
```

**Create and run docker machine**

1. Create docker machine using xhyve driver

```
  docker-machine create  --driver xhyve --xhyve-virtio-9p --xhyve-cpu-count 1 --xhyve-memory-size 2596 golem
  docker-machine start golem  
  eval $(docker-machine env golem)
```

2. Start docker machine, if required (when your macOS was restarted)

```
  docker-machine start golem
```

3. Check whether machine is active (`*` active, `-` inactive)

```
  docker-machine ls
```

4. Make machine active

```
  eval $(docker-machine env golem)
```

5. Considering there is a problem, restart docker machine

```
  docker-machine restart golem
```

## Run

1. First, `setup.py`

```
  python setup.py develop
```

2. Second, `golemapp.py`

```
  python golemapp.py
```

**That's it!**
