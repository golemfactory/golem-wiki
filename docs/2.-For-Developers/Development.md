# FAQ for developers
## How do I run the linters locally?
Get `lint.sh` from here: https://github.com/marmistrz/lintdiff (the version from golemfactory/golem may be older and missing bugfixes)

Then do
```
./lint.sh <reference-branch>
```
If you want to disable some linters, just comment out the relevant entries in the `commands` and `names` arrays.

Report all bugs here: https://github.com/marmistrz/lintdiff

## How do I add an RPC call?
1. choose a target function in `golem.client.Client`, say: `foo`
2. give a name for it in `golem.rpc.mapping.aliases`. This can be anything
3. create a property in `golem.rpc.mapping.core.CORE_METHOD_MAP`, which matches the name of the functions, so here: `foo`.

## How do I load a task from CLI?
If you have a task preset in `preset.json`, just execute `golemcli tasks create preset.json`. 

## How do I create a JSON task preset?
There are two ways of doing that. 

Firstly, `golemcli tasks template` will dump a minimal template for you. 
If you add another argument, `golemcli tasks template foo.json` will dump it to a file named `foo.json`.
It's really minimal!

Another way is to click out your way through the GUI and then `golemcli tasks dump` or `golemcli tasks dump foo.json`. The semantics of the last argument are the same as in case of `template`.
This will probably have too much information that is needed, on the other hand.

## How do I handle an error as an RPC caller?
You should catch an `autobahn.wamp.ApplicationError` in `sync_wait`:

    try:
        sync_wait(deferred)
    except ApplicationError as err:
        print("Error: {}".format(err))


## How do I create a database migration script?
After you update your models and bump the schema version, simply run 

```
python setup.py migration [--force/-f]
```

That command will generate a new script in `golem.database.schemas`. Please review the file before committing. 

**NOTE:**

If you rename a property / model, `peewee_migrate` will generate a series of `remove_fields` + `add_fields` / `remove_model` + `create_model` calls. 
Please replace those with `rename_table` and `rename_field` accordingly.

Otherwise, your migration script will cause unnecessary data loss.