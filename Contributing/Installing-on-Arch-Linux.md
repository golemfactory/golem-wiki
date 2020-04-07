
> [!WARNING|style:callout]
> This is an unofficial guide done some of the Golems. It may be completely, extremely, unbelievably out-of-date.
> Arch Linux is not officially supported. Anyway, if you encounter troubles, feel free to raise an issue.

You have been warned. Proceed on your own risk.

#### Installing through virtualenv

#### Prerequisites
I had all of this installed because of my previous Golem (Python 2) installation.
```bash
pacman -S openexr openssl-1.0 freeimage python-pyqt5 geth
```
New prerequisite was (from AUR):
```bash
pacaur -S libsecp256k1-git
```
Besides, setup Docker: https://wiki.archlinux.org/index.php/Docker
Install HyperG replacement - **simple transfer** (I put it into my virtualenv): https://github.com/golemfactory/simple-transfer/releases

#### Setup the environment
Create a virtualenv.
```bash
virtualenv golem
source golem/bin/activate
```
and download the sources
```bash
git clone ...
```

#### Install the dependencies
We have OpenSSL in Arch Linux but the version of `python-cryptography` (and some other libs) golem uses requires OpenSSL 1.0 (they are not compatible). Thus, we'll need
to compile it separately. Do
```bash
pip download -r requirements.txt
```
to see which version of `cryptography` is needed. In my case it was `1.8.1`, so
I did:
```bash
pip install --global-option=build_ext --global-option="-I/usr/include/openssl-1.0" --global-option="-L/usr/lib/openssl-1.0" cryptography==1.8.1
```
Then do
```bash
pip install -r requirements.txt
```

#### Compile golem
```bash
python setup.py develop
```

#### Final patches
We'll need to patch pyelliptic to use OpenSSL 1.0
```
sed "s%ctypes.util.find_library('crypto')%'/usr/lib/openssl-1.0/libcrypto.so'%" -i "$VIRTUAL_ENV/golem/lib/python3.6/site-packages/pyelliptic/openssl.py"

```

Now you can run golem by `golemapp`

#### Installing through PKGBUILD
Currently not done. Feel free to tweak this abandoned PKGBUILD: https://gist.github.com/marmistrz/6eb261cf2c4ebd31ee369eac05e3d48f
