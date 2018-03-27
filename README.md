# Golem Wiki

Wiki is available here:
https://golemfactory.github.io/golem-wiki/

## Tutorial

Tutorial will show you how to serve a wiki webpage using mkdocs at you local machine (Ubuntu) and test your changes.

First, it is safe to isolate your enviroment.

Install virtual enviroment: 
```
$ pip3 install virtualenv virtualenvwrapper
$ source /usr/local/bin/virtualenvwrapper.sh
```
You can lookup your pythons' distributions using `$ whereis python` or just pick the default one...

```$ mkvirtualenv --python=$(which python3) golem-docs-env```

To activate `$ workon golem-docs-env`, to deactive enter `$ deactivate`

Clone the repo and install dependencies:

```
(golem-docs-env) $ git clone https://github.com/golemfactory/golem-wiki.git
(golem-docs-env) $ pip install -r requirements.txt
```

Run server on you local machine:

```(golem-docs-env) $ mkdocs serve```

To deploy:

```(golem-docs-env) $ mkdocs gh-deploy```

More questions? Visit original documentation: http://www.mkdocs.org/

#### Common issues
It may be required to install the following: `$ apt-get install python3.6-dev`
