Log configuration is in file `logging.ini` in `gnr`. 

#### Default settings
Default log name is `golem.log` and it is saved in the same directory as `main.py`. 
Default log level: 
* DEBUG for `golem.pay`
* INFO for `golem` (so also for all `golem.*` logs)
* WARNING for everything else (especially for everything from `gnr`.


#### Time rotation

This file is timed rotating, ie. once a day it is replaced with a new `golem.log` and the old file is saved in `golem.log.<date>` file. Only five last copies are saved. 
If you want to change this settings edit `args` in `handler_fileHandlerWithTimeRot` section. 

#### More than one Golem instance on the same machine

Logs from other golem instances are saved in their `datadir` directories.

#### How to set higher logging level for your part of the code (for developers)

Let's imagine that you want to set DEBUG level for all network logs. 
You should:

1. Open `gnr.logger.ini`

2. Add new key in `[loggers]` section

     `keys: root,golem,pay,net`

3. Create new section for the new logger: 

```bash  
     [logger_net]
     level: DEBUG
     qualname: golem.network
     handlers: fileHandlerWithTimeRot
     
```

Feel free to also change `getLogger(__name__)` in `golem` code to something more general, ie. `getLogger(golem.net)`.