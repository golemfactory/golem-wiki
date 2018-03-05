# gn_mkdocs

This short tutorial will show you how to serve the webpage at you local machine (Ubuntu) and test your changes.

First, it is safe to isolate your enviroment.

Install virtual enviroment: 
```
$ pip3 install virtualenv virtualenvwrapper
$ source /usr/local/bin/virtualenvwrapper.sh
```
You can lookup your pythons' distributions using `$ whereis python` or just pick the default one...

```$ mkvirtualenv --python=$(which python3) my-mkdocs-env```

To activate `$ workon my-mkdocs-env`, to deactive enter `$ deactivate`

Install dependencies:

```(my-mkdocs-env) $  pip install -r requirements.txt```

Run server on you local machine:

```(my-mkdocs-env) $ mkdocs serve```

To deploy:

```(my-mkdocs-env) $ mkdocs gh-deploy```

More questions? Visit original documentation: http://www.mkdocs.org/

#### Common issues
It may be required to install the following: `$ apt-get install python3.6-dev`
