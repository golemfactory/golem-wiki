#### Using the command line interface

`golemcli` requires a running Golem instance to work. To start Golem in headless mode, type:
- for the packaged version:
  
  testnet: `golemapp` mainnet: `golemapp --mainnet`
- when running from source:
  
  testnet: `python golemapp.py` mainnet: `python golemapp.py --mainnet`

You can now execute the command line interface client in interactive mode:
- for the packaged version:
  
  testnet: `golemcli -i` mainnet: `golemcli --mainnet -i`

- when running from source:
  
  testnet: `python golemcli.py -i` mainnet: `python golemcli.py --mainnet -i`

---

#### Command Line Arguments 

    golemcli.py  
    positional arguments:

    account             Manage account
    concent             Concent Service
    debug               Debug RPC
    envs                Manage environments
    network             Manage network
    incomes             Display incomes
    payments            Display payments
    deposit_payments    Display deposit payments
    res                 Manage resources
    settings            Manage settings
    tasks               Manage tasks
    subtasks            Manage subtasks
    terms               Show and accept terms of use
    test_task           Manage testing tasks
    exit                Exit the interactive shell
    help                Display this help message

optional arguments:
  -h, --help            Display command's help message
  --json                Return results in JSON format

---

#### Environments

`envs show [--sort {name|supported|active|performance|description}]` - Show environments

`envs enable <name>` - Enable environment

`envs disable <name>` - Disable environment

`recount <name>` - Recount performance for an environment

---

#### Network

`network status` - Show client status

`network connect <ip> <port>` - Connect to a node 

`network show [--sort {ip|port|id|name|version}]` - Show connected nodes.

`network dht [--sort {ip|port|id|name|version}]` - Show known nodes.

---

#### Incomes

`incomes [--sort {subtask|payee|status|value|fee}]` - Show incomes

---

#### Payments

`payments [--sort {subtask|payee|status|value|fee}]` - Show payments

---

#### Resources

`res show` - Show information on used resources

`res clear {--provider|--requestor}` - Clear provider or requestor resources

---

#### Settings
Currently only subset of showed settings can be modified, check which with `settings set` without arguments 

`settings set <key> <value>` - Change setting

`settings show {--basic|--requestor|--provider}` - Show current settings

---

#### Tasks

`tasks create <file_name>` - Create a task from file, this is a json file, example file:

```json
{
    "name": "Golem Task",
    "type": "Blender",
    "subtasks_count": 2,
    "options": {
        "frame_count": 1,
        "output_path": "/home/any/Documents",
        "format": "PNG",
        "resolution": [
            800,
            600
        ],
        "frames": "1",
        "compositing": false
    },
    "timeout": "00:60:00",
    "subtask_timeout": "00:30:00",
    "bid": 1.0,
    "resources": [
        "/home/any/blender/benchmark/test_task/cube.blend"
    ]
}
```

If there are more than one blend files in resources, you can add 

```python
    "main_scene_file": "/home/path/to/main_scene_file.blend",
```

To compute on gpu add:

```python
    "compute_on": "gpu",
```


`tasks stats` - Show statistics for tasks

`tasks show [--sort {id|remaining|subtasks|statsus|completion}]` - Show task details

`tasks abort <task_id>` - Abort a task

`tasks subtasks <task_id> [--sort {node|id|remaining|status|completion}]` - Show subtasks

`tasks restart <task_id>` - Restart a task

`tasks delete <task_id>` - Delete a task

---

#### Subtasks

`subtasks restart <subtask_id>`  - Restart a subtask

`subtasks show <subtask_id>` - Show subtask details


