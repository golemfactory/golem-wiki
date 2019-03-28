To ensure stable releases we started freezing the python modules on set versions after version 0.14.0.

This works by using `requirements_to-freeze.txt` with unlocked versions, and `requirements.txt` with locked versions.

After a set interval, for instance just after a release, we can upgrade all packages

# How to add a package
You add your package to `requiremets_to-freeze.txt` as you `pip install`'ed it, no version is preferred.
When it is installed run `pip freeze` and copy the line of your new package alphabetically sorted into `requirements.txt`.

This works the same for `-win` and `-build`.

We do not run `pip freeze > requirements.txt` here because it needs a clean venv, thus much more time.

# How to upgrade all packages
To upgrade all frozen packages to the latest ( allowed ) versions:
1. create and activate a new/clean venv
2. ```pip install -r requirements_to-freeze.txt --upgrade```
3. `pip freeze > requirements.txt`
4. add the first line of the _to-freeze.txt to the newly generated .txt file
5. check if no strange changes appeared in git before you test, commit and push

Repeat this process for `requirements-build.txt` and `requirements-win.txt`. Each needs its own clean venv.