
# Ubuntu - install from source instructions

## Getting the code

Clone the repo

```
git clone https://github.com/golemfactory/golem.git
```

## System setup

### Ubuntu

**Dependencies**

1a. Install additional libraries:  
```
sudo apt install openssl python3-dev libffi-dev pkg-config libjpeg-dev \
    libopenexr-dev libssl-dev autoconf libgmp-dev \
    libfreeimage-dev libtool python3-netifaces python3-psutil build-essential \
    python3-pip docker.io
```
To enable docker usage add yourself to `docker` group

```
sudo usermod -a -G docker $USER
```

and restart the system for changes to take effect.


1b. Install additional python libraries:  

```
pip3 install -r requirements.txt
```
or for local installation only

```
pip3 install --user -r requirements.txt
```


In case the installation fails with a `403 Client Error: SSL is required` error, you need to re-install pip with `pip3 install --upgrade pip`.

1c. Run setup via
```
python3 setup.py develop --prefix=$HOME/.local
```

2. To run tests install additional libraries:
```
sudo apt-get install libyaml-dev mock
pip3 install pytest pycodestyle freezegun
```

If you run into import problems, e.g. `ImportError: cannot import name keccak`, run:
  - `sudo apt-get remove python-crypto`
  - `sudo pip install --upgrade pycryptodome`

**Build taskcollector**

1. Install FreeImage (version 3.17.0 or newer):
  - from source:
    - download source code from [this site](https://sourceforge.net/projects/freeimage/files/Source%20Distribution/3.17.0/FreeImage3170.zip/download?use_mirror=excellmedia).
    - `unzip <free_image_archive>`
    - `cd FreeImage`
    - `make`
    - `sudo make install`
    - `make clean`
2. Build taskcollector:
  - `cd apps/rendering/resources/taskcollector`
  - `make`

### Ubuntu: Alternative method using virtualenv

The alternative method replaces original step - 1b.

Details regarding virtualenv and virtualenvwrapper are  covered in [here](http://docs.python-guide.org/en/latest/dev/virtualenvs/).

*1.* Install `virtualenv` and `virtualenvwrapper`:

   ```
   $ pip3 install virtualenv virtualenvwrapper
   $ source /usr/local/bin/virtualenvwrapper.sh
   ```
   
   The script `virtualenvwrapper.sh` provides additional commands that we'll use below.

*2.* Create a virtual env:

   ```
   $ mkvirtualenv --python=$(which python3) golem-env
   ```
   This creates `~/.virtualenvs/golem-env`.
   At this point `(golem-env)` should appear at the beginning of your prompt. Cool!
   If you need to enable the virtual env, just type:
   ```
   $ workon golem-env
   ```

*3.* Install dependencies in the virtual env using `pip`

   ```
   (golem-env)$ pip install -r requirements.txt
   ```

   The following versions got installed on my system (ubuntu 16.04):

   ```
   Successfully installed 
   OpenEXR-1.2.0 Pillow-3.0.0 PyOpenSSL-16.1.0 PyYAML-3.12 Twisted-16.4.0 appdirs-1.4.0 
   autobahn-0.16.0 base58-0.2.3 bitcoin-1.1.42 cbor2-3.0.1 certifi-2016.8.31 cffi-1.8.2 
   click-6.6 coverage-4.2 cryptography-1.5 devp2p-0.8.0 dill-0.2.5 docker-py-1.7.2 
   enum34-1.1.6 ethereum-1.5.2 ethereum-client-utils-0.3.2 ethereum-rpc-client-0.4.4 
   gevent-1.1.2 greenlet-0.4.10 idna-2.1 ipaddress-1.0.16 jsonpickle-0.9.3 multihash-0.1.1 
   ndg-httpsclient-0.4.2 netifaces-0.10.4 ovh-0.4.5 pbkdf2-1.3 peewee-2.8.3 pluggy-0.3.1 
   psutil-4.3.1 py-1.4.31 pyasn1-0.1.9 pycparser-2.14 pycryptodome-3.4 pyelliptic-1.5.7 
   pyethash-0.1.27 pysha3-0.3 pystun-0.1.0 pyvbox-1.0.0 qt4reactor-1.6 repoze.lru-0.6 
   requests-2.8.1 rlp-0.4.6 scrypt-0.7.1 secp256k1-0.12.1 six-1.10.0 tinyrpc-0.5 tox-2.3.1 
   txaio-2.5.1 virtualenv-15.0.3 weakreflist-0.3.1 websocket-client-0.37.0 zope.interface-4.3.2
   ```

*4.* Run `setup.py`

   ```
   (golem-env)$ python setup.py develop
   ```

*5.* install [HyperG](https://github.com/mfranciszkiewicz/golem-hyperdrive/releases).

*6.* Run `golemapp`

   ```
   (golem-env)$ golemapp
   ```

**That's it!**

Useful links:

* http://docs.python-guide.org/en/latest/dev/virtualenvs/
* http://virtualenvwrapper.readthedocs.org/en/latest/command_ref.html