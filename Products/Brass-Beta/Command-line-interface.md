### Using the command line interface
*Date*: 2019-09-02, *Version*: 0.1.9

`golemcli` requires a running Golem node to work. To start Golem in headless mode, type:
- for the packaged version:
  
  testnet: `golemapp` mainnet: `golemapp --mainnet`
- when running from source:
  
  testnet: `python golemapp.py` mainnet: `python golemapp.py --mainnet`

---

### Command Line Arguments 

Run `golemcli` wo arguments to see top-level usage information:

```
golemcli 0.1.9
Golem Factory <contact@golem.network>

USAGE:
    golemcli [FLAGS] [OPTIONS] [SUBCOMMAND]

FLAGS:
    -i, --interactive    Enter interactive mode
        --json           Return results in JSON format
    -h, --help           Prints help information
    -y, --assume-yes     Answer `YES` to any prompt without an user action

OPTIONS:
    -d, --datadir <data_dir>       Golem node's data dir
    -n, --net <net>                
    -a, --address <rpc_address>    Golem node's RPC address
    -p, --port <rpc_port>          Golem node's RPC port

SUBCOMMANDS:
    account      Manage account
    status       Display general status
    incomes      Display incomes
    payments     Display payments
    network      Manage network
    settings     Manage settings
    res          Manage provider resources
    tasks        Manage tasks
    test_task    Manage testing tasks
    acl          Manage peer access control lists
    envs         Manage environments
    concent      Concent Service
    cache        Manage disc cache
    debug        Debug RPC
    terms        Show and accept terms of use
    shutdown     Quit after finishing ongoing tasks
    help         Prints this message or the help of the given subcommand(s)
```

?> All further samples are presenting output from interactive mode `golemcli -i`

---

### Account

##### Account subcommands

```
USAGE:
    account [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    info        Display account & financial info
    withdraw    Withdraw GNT/ETH (withdrawals are not available for the testnet)
    unlock      Unlock account, will prompt for your password
    help        Prints this message or the help of the given subcommand(s)
```

---

###### `account info` - Displays account & financial info

###### account info example:

```
Golem_ID: f19b1796bd67599fdf56a49b055db0be1f3db74a48cf66d6cf738bec1c4bb1557dcdc80d2ae485704cb87b5a657ce8df738b0a123655fc5fc9319809ca9aa726
node_name: jamuszyn1
requestor_reputation: 0
provider_reputation: 0
finances:
  eth_address: 0xDE333C68F700ccc28309853d2faBCbAD646D34ab
  eth_available: 0.018922262 ETH
  eth_locked: 0 ETH
  gnt_available: 1639.622686836567415499 GNT
  gnt_locked: 0 GNT
  gnt_unadopted: 0 GNT
  deposit_balance:
    status: locked
    timelock: "0"
    balance: 358.00000000000000002 GNT
```

---


###### `account withdraw` - Withdraw GNT/ETH (withdrawals are not available for the testnet)

To make a withdraw you will have to specify: 
- `<destination>` - ethereum address
- `<amount>` - number of tokens you wish to withdraw from your account 
- `<currency>` - if you wish to withdraw GNT/ETH
- `[gas_price]` - provide an amount for a gas price (in ETH)

##### account withdraw example

`account withdraw 0xDE333C68F700ccc28309853d2faBCbAD646D34ab 30 GNT 0.003`

---

###### `account unlock` - Unlock account, will prompt for your password

?> It will ask you for your password in case you have not unlocked it yet, or confirm that your account is already unlocked

---

### Status

Prints status of your node. For eg.

```
General                                                Account                     
     Process State:             running                     ETH address:               0xDE333C68F700ccc28309853d2faBCbAD646D34ab 
     Components Status:                                     GNT available:             1640 GNT 
       docker:                  Docker is available         ETH available:             0.018922262 ETH 
       hyperdrive:              Connected to hyperg                                     
       client:                  Connecting to network       Provider Status                   
       hypervisor:              Docker VM is available      Subtasks accepted (in session):  0 
     Golem version:             0.20.1                      Subtasks rejected (in session):  0 
     Node name:                 jamuszyn1                   Subtasks failed (in session):    0 
     Network:                   testnet                     Subtasks computed (in session):  0 
     Disk usage:                7.3M                        Tasks in network (in session):   2 
                                                            Pending payments:                0 GNT 
     Network                                                Provider state:                  Idle 
     Connection:                ONLINE                                                        
     Port statuses:                                         Requestor status                        
       40102:                   open                        all computed subtasks / all subtasks:  0/0 
       3282:                    open                                                                
       40103:                   open                     
     Nodes online:              10                       

```

---

### Incomes

###### Incomes subcommands

```
incomes 0.1.9
Golem Factory <contact@golem.network>
Display incomes

USAGE:
    incomes [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

OPTIONS:
        --sort <sort_by>    Sort payments [possible values: payer, status, value]

SUBCOMMANDS:
    all          Display all incomes
    awaiting     Display awaiting incomes
    confirmed    Display confirmed incomes
    help         Prints this message or the help of the given subcommand(s)
```

---

###### `incomes all` - Display all incomes (prints table with all income transactions with their statuses and amounts) 

###### Incomes all example:

```
┌──────────────────────────────────────────────┬─────────────┬────────────────────────────┐
│  payer                                       │  status     │  value                     │
├──────────────────────────────────────────────┼─────────────┼────────────────────────────┤
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.003055555555555556 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.265305555555555556 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.003055555555555556 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.015333333333333334 GNT  │
│  0xde2922bc3cadc586b32641da75eebcd63ac061f4  │  confirmed  │  0.018694444444444445 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.003055555555555556 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.011138888888888889 GNT  │
...
│  0xde2922bc3cadc586b32641da75eebcd63ac061f4  │  confirmed  │  0.036951377709513395 GNT  │
│  0xae70978e5ccb8a86757f6e0f149eec8eb76ffbea  │  confirmed  │  0.1 GNT                   │
│  0xae70978e5ccb8a86757f6e0f149eec8eb76ffbea  │  confirmed  │  0.1 GNT                   │
│  0xae70978e5ccb8a86757f6e0f149eec8eb76ffbea  │  confirmed  │  0.11832545070158456 GNT   │
│  0xc419974fc35a3e52878eafb4c919fda753596949  │  confirmed  │  0.018694444444444445 GNT  │
│  0xc419974fc35a3e52878eafb4c919fda753596949  │  confirmed  │  0.010888888888888889 GNT  │
│  0xc419974fc35a3e52878eafb4c919fda753596949  │  confirmed  │  0.029543803670130487 GNT  │
│                                              │             │                            │
│                                              │             │                            │
│                                              │  total      │  3.202872169770807144 GNT  │
└──────────────────────────────────────────────┴─────────────┴────────────────────────────┘
```

---

###### `incomes awaiting` - Display awaiting incomes (filters all transactions and prints only awaiting incomes)

###### Incomes awaiting example:

```
┌─────────┬──────────┬─────────┐
│  payer  │  status  │  value  │
├─────────┼──────────┼─────────┤
│         │          │         │
│         │          │         │
│         │          │         │
│         │  total   │  0 GNT  │
└─────────┴──────────┴─────────┘

```

---

###### `incomes confirmed` - Display confirmed incomes (filters all transactions and prints only confirmed incomes)

###### Incomes confirmed example:

```
┌──────────────────────────────────────────────┬─────────────┬────────────────────────────┐
│  payer                                       │  status     │  value                     │
├──────────────────────────────────────────────┼─────────────┼────────────────────────────┤
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.003055555555555556 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.265305555555555556 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.003055555555555556 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.015333333333333334 GNT  │
│  0xde2922bc3cadc586b32641da75eebcd63ac061f4  │  confirmed  │  0.018694444444444445 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.003055555555555556 GNT  │
│  0xae363e38792c8e3d2778c1d4e6c90a664c084588  │  confirmed  │  0.011138888888888889 GNT  │
...
│  0xde2922bc3cadc586b32641da75eebcd63ac061f4  │  confirmed  │  0.036951377709513395 GNT  │
│  0xae70978e5ccb8a86757f6e0f149eec8eb76ffbea  │  confirmed  │  0.1 GNT                   │
│  0xae70978e5ccb8a86757f6e0f149eec8eb76ffbea  │  confirmed  │  0.1 GNT                   │
│  0xae70978e5ccb8a86757f6e0f149eec8eb76ffbea  │  confirmed  │  0.11832545070158456 GNT   │
│  0xc419974fc35a3e52878eafb4c919fda753596949  │  confirmed  │  0.018694444444444445 GNT  │
│  0xc419974fc35a3e52878eafb4c919fda753596949  │  confirmed  │  0.010888888888888889 GNT  │
│  0xc419974fc35a3e52878eafb4c919fda753596949  │  confirmed  │  0.029543803670130487 GNT  │
│                                              │             │                            │
│                                              │             │                            │
│                                              │  total      │  3.202872169770807144 GNT  │
└──────────────────────────────────────────────┴─────────────┴────────────────────────────┘
```

---

###### `incomes help` - Prints this message or the help of the given subcommand(s)
---


### Payments

###### Payments subcommands

```
payments 0.1.9
Golem Factory <contact@golem.network>
Display payments

USAGE:
    payments [FLAGS] [OPTIONS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

OPTIONS:
        --sort <sort_by>    Sort payments [possible values: subtask, payee, status, value,
                            fee]

SUBCOMMANDS:
    all          Display all payments
    awaiting     Display awaiting payments
    confirmed    Display confirmed payments
    help         Prints this message or the help of the given subcommand(s)
```

---

###### `payments all` - Display all payments (prints table with all income transactions with their statuses and amounts) 

###### Payments all example:

```
┌────────────────────────────────────────┬──────────────────────────────────────────────┬─────────────┬────────────────────────────┬──────────────────────┐
│  subtask                               │  payee                                       │  status     │  value                     │  fee                 │
├────────────────────────────────────────┼──────────────────────────────────────────────┼─────────────┼────────────────────────────┼──────────────────────┤
│  1e27b3ae-b3a5-11e9-8f62-f19b1796bd67  │  0xf1394254cf8345a4ac623c587635f402a21d27fa  │  confirmed  │  0.016666666666666667 GNT  │  0.000011827875 ETH  │
│  1234e0d0-b3a5-11e9-ac69-f19b1796bd67  │  0x930ce23a075eb032b5313a8dfa6324990b70c6bb  │  confirmed  │  0.018183724687066376 GNT  │  0.000011827875 ETH  │
│  1240ceae-b3a5-11e9-9664-f19b1796bd67  │  0xdfc9afa85dd1e81083b2fb6f467c30ef9b69f75e  │  confirmed  │  0.01834770777203436 GNT   │  0.000011827875 ETH  │
│  12e13846-b3a5-11e9-96b5-f19b1796bd67  │  0x2ee350b08626268bbe2b88ae32b0d6df2e53bea9  │  confirmed  │  0.083333333333333334 GNT  │  0.000011827875 ETH  │
│  1317d2d2-b3a5-11e9-aa93-f19b1796bd67  │  0xfd99c8ca3a3283c0dc7d756daeb5e083a8efb0ad  │  confirmed  │  0.083333333333333334 GNT  │  0.000011827875 ETH  │
│  126979ba-b3a5-11e9-bd78-f19b1796bd67  │  0x5c7a7df516f927e6d09b6b2e9ced13ddd6d8ab5a  │  confirmed  │  0.01850990192876787 GNT   │  0.000011827875 ETH  │
│  1289a7a8-b3a5-11e9-90aa-f19b1796bd67  │  0xc7455f356752da88d9fde1829e56a5a61043fb5a  │  confirmed  │  0.018511757888784139 GNT  │  0.000011827875 ETH  │
│  12b135d8-b3a5-11e9-86da-f19b1796bd67  │  0xf1394254cf8345a4ac623c587635f402a21d27fa  │  confirmed  │  0.023270034353621512 GNT  │  0.000011827875 ETH  │
│  1a49ee28-a4a5-11e9-badd-f19b1796bd67  │  0xd945b8e8dcbe9439cb4b2092e5b575ea425951a5  │  confirmed  │  0.016666666666666667 GNT  │  0.000010619375 ETH  │
│  1a496b68-a4a5-11e9-916a-f19b1796bd67  │  0xcf9f0a732e952c997e33b70d10b1446e11336c5f  │  confirmed  │  0.016666666666666667 GNT  │  0.000010619375 ETH  │
...
│  42b4caf6-36b7-11e9-843c-f19b1796bd67  │  0x2ee350b08626268bbe2b88ae32b0d6df2e53bea9  │  confirmed  │  0.052753808845427667 GNT  │  0.000002605675 ETH  │
│  42874810-36b7-11e9-bb0c-f19b1796bd67  │  0xd6f684c5cfa440d07756ea530c832620b6972fd0  │  confirmed  │  0.010571556268134177 GNT  │  0.000002605675 ETH  │
│  427f3b18-36b7-11e9-90c6-f19b1796bd67  │  0xb66446857e3aec80918b839944c3b2993704f69d  │  confirmed  │  0.010566739827392324 GNT  │  0.000002605675 ETH  │
│  429ce558-36b7-11e9-a6b2-f19b1796bd67  │  0xc2f3a948bb615a3348c4abfe6aca09e6856faa5c  │  confirmed  │  0.010654676666404716 GNT  │  0.000002605675 ETH  │
│  428cea4a-36b7-11e9-ad8d-f19b1796bd67  │  0xe467b792fdef812ab540fd3bad3e8f7953f37673  │  confirmed  │  0.010576486708210554 GNT  │  0.000002605675 ETH  │
│                                        │                                              │             │                            │                      │
│                                        │                                              │             │                            │                      │
│                                        │                                              │  total      │  2.495887498886674385 GNT  │  0.000397636 ETH     │
└────────────────────────────────────────┴──────────────────────────────────────────────┴─────────────┴────────────────────────────┴──────────────────────┘

```

---

###### `payments awaiting` - Display awaiting payments (filters all transactions and prints only awaiting payments)

###### Payments awaiting example:

```bash
┌───────────┬─────────┬──────────┬─────────┬─────────┐
│  subtask  │  payee  │  status  │  value  │  fee    │
├───────────┼─────────┼──────────┼─────────┼─────────┤
│           │         │          │         │         │
│           │         │          │         │         │
│           │         │          │         │         │
│           │         │  total   │  0 GNT  │  0 ETH  │
└───────────┴─────────┴──────────┴─────────┴─────────┘

```

---

###### `payments confirmed` - Display confirmed payments (filters all transactions and prints only confirmed payments)

###### Payments confirmed example:

```
┌────────────────────────────────────────┬──────────────────────────────────────────────┬─────────────┬────────────────────────────┬──────────────────────┐
│  subtask                               │  payee                                       │  status     │  value                     │  fee                 │
├────────────────────────────────────────┼──────────────────────────────────────────────┼─────────────┼────────────────────────────┼──────────────────────┤
│  1e27b3ae-b3a5-11e9-8f62-f19b1796bd67  │  0xf1394254cf8345a4ac623c587635f402a21d27fa  │  confirmed  │  0.016666666666666667 GNT  │  0.000011827875 ETH  │
│  1234e0d0-b3a5-11e9-ac69-f19b1796bd67  │  0x930ce23a075eb032b5313a8dfa6324990b70c6bb  │  confirmed  │  0.018183724687066376 GNT  │  0.000011827875 ETH  │
│  1240ceae-b3a5-11e9-9664-f19b1796bd67  │  0xdfc9afa85dd1e81083b2fb6f467c30ef9b69f75e  │  confirmed  │  0.01834770777203436 GNT   │  0.000011827875 ETH  │
│  12e13846-b3a5-11e9-96b5-f19b1796bd67  │  0x2ee350b08626268bbe2b88ae32b0d6df2e53bea9  │  confirmed  │  0.083333333333333334 GNT  │  0.000011827875 ETH  │
│  1317d2d2-b3a5-11e9-aa93-f19b1796bd67  │  0xfd99c8ca3a3283c0dc7d756daeb5e083a8efb0ad  │  confirmed  │  0.083333333333333334 GNT  │  0.000011827875 ETH  │
│  126979ba-b3a5-11e9-bd78-f19b1796bd67  │  0x5c7a7df516f927e6d09b6b2e9ced13ddd6d8ab5a  │  confirmed  │  0.01850990192876787 GNT   │  0.000011827875 ETH  │
│  1289a7a8-b3a5-11e9-90aa-f19b1796bd67  │  0xc7455f356752da88d9fde1829e56a5a61043fb5a  │  confirmed  │  0.018511757888784139 GNT  │  0.000011827875 ETH  │
│  12b135d8-b3a5-11e9-86da-f19b1796bd67  │  0xf1394254cf8345a4ac623c587635f402a21d27fa  │  confirmed  │  0.023270034353621512 GNT  │  0.000011827875 ETH  │
│  1a49ee28-a4a5-11e9-badd-f19b1796bd67  │  0xd945b8e8dcbe9439cb4b2092e5b575ea425951a5  │  confirmed  │  0.016666666666666667 GNT  │  0.000010619375 ETH  │
│  1a496b68-a4a5-11e9-916a-f19b1796bd67  │  0xcf9f0a732e952c997e33b70d10b1446e11336c5f  │  confirmed  │  0.016666666666666667 GNT  │  0.000010619375 ETH  │
...
│  42b4caf6-36b7-11e9-843c-f19b1796bd67  │  0x2ee350b08626268bbe2b88ae32b0d6df2e53bea9  │  confirmed  │  0.052753808845427667 GNT  │  0.000002605675 ETH  │
│  42874810-36b7-11e9-bb0c-f19b1796bd67  │  0xd6f684c5cfa440d07756ea530c832620b6972fd0  │  confirmed  │  0.010571556268134177 GNT  │  0.000002605675 ETH  │
│  427f3b18-36b7-11e9-90c6-f19b1796bd67  │  0xb66446857e3aec80918b839944c3b2993704f69d  │  confirmed  │  0.010566739827392324 GNT  │  0.000002605675 ETH  │
│  429ce558-36b7-11e9-a6b2-f19b1796bd67  │  0xc2f3a948bb615a3348c4abfe6aca09e6856faa5c  │  confirmed  │  0.010654676666404716 GNT  │  0.000002605675 ETH  │
│  428cea4a-36b7-11e9-ad8d-f19b1796bd67  │  0xe467b792fdef812ab540fd3bad3e8f7953f37673  │  confirmed  │  0.010576486708210554 GNT  │  0.000002605675 ETH  │
│                                        │                                              │             │                            │                      │
│                                        │                                              │             │                            │                      │
│                                        │                                              │  total      │  2.495887498886674385 GNT  │  0.000397636 ETH     │
└────────────────────────────────────────┴──────────────────────────────────────────────┴─────────────┴────────────────────────────┴──────────────────────┘

```

---

###### `payments help` - Prints this message or the help of the given subcommand(s)
---

### Network

###### Network subcommands

```
network 0.1.9
Golem Factory <contact@golem.network>
Manage network

USAGE:
    network [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    status     Show client status
    show       Show connected nodes
    dht        Show known nodes
    connect    Connect to a node
    help       Prints this message or the help of the given subcommand(s)
```

---

###### `network status` - Show client status (Prints states of ports and connection)

###### Network status example

`Port(s) 40102: open, 40103: open, 3282: open. Connected`

---

###### `network show` - Show connected nodes (Prints table of all currently connected nodes)

###### Network show example

```
┌──────────────────┬─────────┬───────────────────────────────────────┬────────────────────────────────┐
│  ip              │  port   │  id                                   │  name                          │
├──────────────────┼─────────┼───────────────────────────────────────┼────────────────────────────────┤
│  94.23.196.166   │  40104  │  dc430a0b853e2ae9...03bbc0e42b18e876  │  Drohlum compute               │
│  35.198.71.45    │  40102  │  626b3ec66cadf733...78e88ee09e8da6e4  │  testnet-gf-devel-1 git        │
│  35.198.119.10   │  40102  │  cde73fb1b26ae227...c33cfafbe5261156  │  testnet-gf-devel-0 git        │
│  35.190.194.220  │  40102  │  bea9d6588636d368...ba2c096ff572885f  │  testnet-gf-compute-0 compute  │
│  35.187.161.156  │  40102  │  64a65d61616ad426...3a7a6fc1434be343  │  testnet-gf-compute-2 compute  │
│  35.205.37.180   │  40102  │  1aee30cd0128b384...c69f73ce89d6cae4  │  testnet-gf-compute-1 compute  │
│  35.198.173.21   │  40102  │  e314b570c56eb449...c4dea5242d93ff19  │  testnet-gf-devel-2 git        │
│  139.99.157.15   │  40104  │  d2ee023cd8cc2d75...080f11472118bff4  │  vps148216 compute             │
│  63.35.176.187   │  40108  │  fc2d085d87669e69...4555090f0e289c83  │                                │
└──────────────────┴─────────┴───────────────────────────────────────┴────────────────────────────────┘
```

---

###### Network dht - Show known nodes (Prints a table of all known seed)

###### Network dht example

```
┌───────────────────┬─────────┬───────────────────────────────────────┬────────────────────────────────┐
│  ip               │  port   │  id                                   │  name                          │
├───────────────────┼─────────┼───────────────────────────────────────┼────────────────────────────────┤
│  65.94.64.11      │  40102  │  14d6a52aa119f84f...f34ab126d07ccfda  │                                │
│  5.226.70.18      │  40102  │  1f686a1375ca52e7...e44a51c8cd106a9c  │  Rhino                         │
│  2.4.27.205       │  40102  │  32092efcaa0ef8c4...1ff4d9c3eea0b3b4  │  nodeK                         │
│  85.240.5.60      │  40102  │  347b3a5b8080a2b3...1efd9781b3471727  │                                │
│  24.53.150.48     │  40102  │  372ddc1344b01758...346bc0a62bc9187b  │                                │
│  23.252.62.110    │  40102  │  3c6cd7040c0e08e7...12dd12cd46fe8221  │                                │
│  89.163.148.82    │  40102  │  49bc25b4fde6d23d...bdf00e17fc753620  │                                │
│  79.185.76.178    │  40102  │  4fe220d425711b3f...55db87a3e9fb34b3  │                                │
│  109.220.72.53    │  40102  │  2fd8239f5f7d7d14...4cb8c3d2c2d117c7  │                                │
...
│  35.198.119.10    │  40102  │  cde73fb1b26ae227...c33cfafbe5261156  │  testnet-gf-devel-0 git        │
│  139.99.157.15    │  40104  │  d2ee023cd8cc2d75...080f11472118bff4  │  vps148216 compute             │
│  35.190.194.220   │  40102  │  bea9d6588636d368...ba2c096ff572885f  │  testnet-gf-compute-0 compute  │
│  35.198.71.45     │  40102  │  626b3ec66cadf733...78e88ee09e8da6e4  │  testnet-gf-devel-1 git        │
│  35.205.37.180    │  40102  │  1aee30cd0128b384...c69f73ce89d6cae4  │  testnet-gf-compute-1 compute  │
│  35.198.173.21    │  40102  │  e314b570c56eb449...c4dea5242d93ff19  │  testnet-gf-devel-2 git        │
│  35.187.161.156   │  40102  │  64a65d61616ad426...3a7a6fc1434be343  │  testnet-gf-compute-2 compute  │
│  63.35.176.187    │  40108  │  fc2d085d87669e69...4555090f0e289c83  │                                │
└───────────────────┴─────────┴───────────────────────────────────────┴────────────────────────────────┘
```

---

###### `network connect` - Connect to a node

To connect to a particular node in the network you should include: 
- `<ip>` - IP address of a node you wish to connect to
- `<port>` - Provide a port with which you wish to connect to (you can use one of 3 Golem default ports)


##### Network connect example

`network connect 94.23.196.166 40104`

---

###### `network help` - Prints this message or the help of the given subcommand(s)

---

### Settings

###### Settings positional arguments

```
settings 0.1.9
Golem Factory <contact@golem.network>
Manage settings

USAGE:
    settings [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    show    Show current settings
    set     Change settings
    help    Prints this message or the help of the given subcommand(s)

```

---

###### `settings show` - Show current settings (Prints current node settings)

###### Settings show example

```
┌───────────────────────────────────────────────────────────────────────┬─────────────┬─────────────────────────┐
│  description [name]                                                   │  value      │  type                   │
├───────────────────────────────────────────────────────────────────────┼─────────────┼─────────────────────────┤
│                                                                       │             │                         │
│  General                                                              │             │                         │
│                                                                       │             │                         │
│  Node name [node_name]                                                │  jamuszyn1  │  str                    │
│  Accept tasks [accept_tasks]                                          │  true       │  bool                   │
│  Interval between task requests [getting_tasks_interval]              │  4          │  float [s]              │
│  Interval between peer requests [getting_peers_interval]              │  4          │  float [s]              │
│  Task session timeout [task_session_timeout]                          │  900        │  float [s]              │
│  P2P session timeout [p2p_session_timeout]                            │  240        │  float [s]              │
│  Use IPv6 [use_ipv6]                                                  │  false      │  bool                   │
│  Use UPnP for port forwarding. [use_upnp]                             │  true       │  bool                   │
│  Number of peers to keep [opt_peer_num]                               │  10         │  int > 0                │
│  Send ping messages to peers [send_pings]                             │  true       │  bool                   │
│  Interval between ping messages [pings_interval]                      │  120        │  int > 0                │
│  Enable error reporting with talkback service [enable_talkback]       │  true       │  bool                   │
│  Enable reporting to golem monitor service. [enable_monitor]          │  true       │  bool                   │
│  Enable resources cleaning [cleaning_enabled]                         │  false      │  bool                   │
│                                                                       │             │                         │
│  Requestor                                                            │             │                         │
│                                                                       │             │                         │
│  Minimal provider trust [computing_trust]                             │  0          │  - 1.0 <= float <= 1.0  │
│  Max GNT/h price (requestor) [max_price]                              │  1          │  decimal [GNT]          │
│                                                                       │             │                         │
│  Provider                                                             │             │                         │
│                                                                       │             │                         │
│  Minimal requestor trust [requesting_trust]                           │  0          │  - 1.0 <= float <= 1.0  │
│  Min GNT/h price (provider) [min_price]                               │  0.1        │  decimal [GNT]          │
│  Maximal resource size [max_resource_size]                            │  25061172   │  float [kB]             │
│  Max memory size [max_memory_size]                                    │  12582912   │  int >= 1048576 [kB]    │
│  Number of CPU cores to use [num_cores]                               │  1          │  int >= 1               │
│  Interval between request task from network. [task_request_interval]  │  5          │  float                  │
└───────────────────────────────────────────────────────────────────────┴─────────────┴─────────────────────────┘
```

---

###### `settings set` - Change settings

In order change a particular setting you should include: 
- `<key>` - for eg. `node_name`
- `<value>` - new value, for eg. `a new node name`

###### Settings set example

`settings set node_name jamuszyn`

---

###### `settings help` - Prints this message or the help of the given subcommand(s)

---

### Res(ources)

###### Res subcommands

```
res 0.1.9
Golem Factory <contact@golem.network>
Manage provider resources

USAGE:
    res [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    show      Display shared resources info
    update    Change your provider resources
    help      Prints this message or the help of the given subcommand(s)
```

---

###### `res show` - Display shared resources info (Prints current settings for shared computation resources of your node)

###### Res show example

```
┌───────────────┬────────────┬───────────┬─────────────┬──────────────┐
│               │  active    │  pending  │  min        │  max         │
├───────────────┼────────────┼───────────┼─────────────┼──────────────┤
│  cpu_cores    │  1         │           │  1          │  3           │
│  disk [kB]    │  25061172  │           │  1048576.0  │  27097812.0  │
│  memory [kB]  │  12582912  │           │  1048576    │  12582912    │
└───────────────┴────────────┴───────────┴─────────────┴──────────────┘
```

---

###### `res update` - Change your provider resources

In order change your provider resources you should include `--cores`, `--disk` or `--memory`: 

```
res-update 0.1.9
Golem Factory <contact@golem.network>
Change your provider resources

USAGE:
    res update [FLAGS] [OPTIONS]

FLAGS:
        --json     Return results in JSON format
        --apply    
    -h, --help     Prints help information

OPTIONS:
        --cores <cpu_cores>    
        --disk <disk>          
        --memory <memory>      
```

###### Resources update example

`res update --cores 2`

---

### Tasks

###### Tasks subcommands

```
tasks 0.1.9
Golem Factory <contact@golem.network>
Manage tasks

USAGE:
    tasks [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    show         Lists current tasks + task_id show task details
    list         Lists current tasks
    template     Dump a task template
    create       Create a task from file. Note: no client-side validation is performed yet. This will change in the
                 future
    restart      Restart a task
    abort        Abort a task
    delete       Delete a task
    dump         Dump an existing task
    purge        Deletes all tasks
    stats        Show statistics for tasks
    subtasks     Show sub-tasks
    unsupport    Show statistics of all unsupported subtasks
    help         Prints this message or the help of the given subcommand(s)
```

---

###### `tasks show` - Lists current tasks + task_id show task details

###### Tasks show example

```
┌────────────────────────────────────────┬───────┬──────────────────┬───────────┬──────────────┐
│  id                                    │  ETA  │  subtasks_count  │  status   │  completion  │
├────────────────────────────────────────┼───────┼──────────────────┼───────────┼──────────────┤
│  9378ddd8-cb18-11e9-930a-f19b1796bd67  │       │  15              │  Timeout  │  0.0 %       │
└────────────────────────────────────────┴───────┴──────────────────┴───────────┴──────────────┘
```

and `tasks show 9378ddd8-cb18-11e9-930a-f19b1796bd67`

```
id: 9378ddd8-cb18-11e9-930a-f19b1796bd67
status: Timeout
time_remaining: ~
subtasks_count: 15
progress: 0.0
cost: ~
fee: ~
estimated_cost: "1491666666666666675"
estimated_fee: "840000000000000"
options:
  frame_count: 1
  output_path: /Users/jacekmuszynski/Documents/golem-header-test_2019-08-30_13-23-22
  format: PNG
  resolution:
    - 9600
    - 600
  frames: "1"
  compositing: false
  samples: 0
name: golem-header-test
compute_on: cpu
subtask_timeout: "0:05:58"
last_updated: 1567165403.158887
type: Blender
preview: /Users/jacekmuszynski/Library/Application Support/golem/default/rinkeby/ComputerRes/9378ddd8-cb18-11e9-930a-f19b1796bd67/tmp/current_preview.PNG
bid: 1.0
resources:
  - /Users/jacekmuszynski/Documents/golem-header.blend
timeout: "0:20:00"
time_started: 1567164202.7359629
concent_enabled: true
```

---

###### `tasks list` - Lists current tasks

###### Tasks list example

```
┌────────────────────────────────────────┬───────┬──────────────────┬───────────┬──────────────┐
│  id                                    │  ETA  │  subtasks_count  │  status   │  completion  │
├────────────────────────────────────────┼───────┼──────────────────┼───────────┼──────────────┤
│  9378ddd8-cb18-11e9-930a-f19b1796bd67  │       │  15              │  Timeout  │  0.0 %       │
└────────────────────────────────────────┴───────┴──────────────────┴───────────┴──────────────┘
```

---

###### `task create` - Create a task from file. Note: no client-side validation is performed yet. This will change in the future

In order to create a task you should define a path to your task .json file so:
`tasks create Documents/golem-task.json`

Create a task from file, this is a json file, example file:

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

If there are more than one blend files in resources, you can add: 

```python
    "main_scene_file": "/home/path/to/main_scene_file.blend",
```

To compute on gpu add:

```python
    "compute_on": "gpu",
```

###### `tasks create -n --dry run` - Standard dry run of a task. Checks tasks without commissioning it to the network. 

---

###### `tasks restart` - Restart a task

To restart a task you should provide:
- `task_id`

Example of a task restart command:
`tasks restart 9378ddd8-cb18-11e9-930a-f19b1796bd67` 

?> You can copy `task_id` from `tasks show` table

---

###### `tasks abort` - Abort a task

To abort a task you should provide:
- `task_id`

Example of a task abort command:
`task abort 9378ddd8-cb18-11e9-930a-f19b1796bd67`

?> You can copy `task_id` from `tasks show` table

---

###### `tasks delete` - Delete a task

To delete a task you should provide:
- `task_id`

Example of a task delete command:
`task delete 9378ddd8-cb18-11e9-930a-f19b1796bd67`

?> You can copy `task_id` from `tasks show` table

---

###### `tasks abort` - Dump a task

To dump a task you should provide additional [FLAG]:
- `task_id`

Example of a task dump command:
`task dump 9378ddd8-cb18-11e9-930a-f19b1796bd67`

Example of a task dump:

```json
{
  "id": "9378ddd8-cb18-11e9-930a-f19b1796bd67",
  "status": "Timeout",
  "time_remaining": null,
  "subtasks_count": 15,
  "progress": 0.0,
  "cost": null,
  "fee": null,
  "estimated_cost": "1491666666666666675",
  "estimated_fee": "840000000000000",
  "timeout": "0:20:00",
  "bid": 1.0,
  "name": "golem-header-test",
  "subtask_timeout": "0:05:58",
  "resources": [
    "/Users/jacekmuszynski/Documents/golem-header.blend"
  ],
  "preview": "/Users/jacekmuszynski/Library/Application Support/golem/default/rinkeby/ComputerRes/9378ddd8-cb18-11e9-930a-f19b1796bd67/tmp/current_preview.PNG",
  "last_updated": 1567165403.158887,
  "type": "Blender",
  "options": {
    "frame_count": 1,
    "output_path": "/Users/jacekmuszynski/Documents/golem-header-test_2019-08-30_13-23-22",
    "format": "PNG",
    "resolution": [
      9600,
      600
    ],
    "frames": "1",
    "compositing": false,
    "samples": 0
  },
  "concent_enabled": true,
  "time_started": 1567164202.7359629,
  "compute_on": "cpu"
}

```

---

###### `tasks purge` - Deletes all tasks

This command will clear all tasks from the `tasks show` list

---

###### `tasks stats` - Show statistics for tasks

###### Tasks stats example

```
┌──────────────────┬──────────┬───────────┬───────────────────────────────────────────────────────┐
│                  │  global  │  session  │  config                                               │
├──────────────────┼──────────┼───────────┼───────────────────────────────────────────────────────┤
│  provider state  │          │           │  {"status":"Idle","subtask":null,"environment":null}  │
│  in network      │  2       │           │                                                       │
│  supported       │  2       │           │                                                       │
│  accepted        │  1       │  0        │                                                       │
│  computed        │  6       │  0        │                                                       │
│  rejected        │  0       │  0        │                                                       │
│  failed          │  0       │  0        │                                                       │
│  timedout        │  0       │  0        │                                                       │
└──────────────────┴──────────┴───────────┴───────────────────────────────────────────────────────┘
```

---

###### `tasks subtasks` - Show sub-tasks

###### Subtasks subcommands

```
tasks-subtasks 0.1.9
Golem Factory <contact@golem.network>
Show sub-tasks

USAGE:
    tasks subtasks [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    help       Prints this message or the help of the given subcommand(s)
    list       Lists subtasks in given task
    restart    Restart given subtasks from a task
    show       Show sub-tasks
```

?> All subcommands for `tasks subtasks` work the same as for the `tasks` command. So if you wish to restart particular subtask you should remember about additional [FLAGS]: `tasks subtasks restart [FLAGS] <task_id> [subtask_ids]`.

---

###### `tasks unsupport` - Show statistics of all unsupported subtasks

###### Tasks unsupport example

```
┌───────────────────────────────────┬───────────────┬─────────────────────┐
│  reason                           │  no of tasks  │  avg for all tasks  │
├───────────────────────────────────┼───────────────┼─────────────────────┤
│  environment_missing              │  0            │                     │
│  environment_unsupported          │  0            │                     │
│  environment_not_accepting_tasks  │  0            │                     │
│  environment_not_secure           │  0            │                     │
│  environment_misconfigured        │  0            │                     │
│  max_price                        │  0            │                     │
│  app_version                      │  0            │                     │
│  deny_list                        │  0            │                     │
│  requesting_trust                 │  0            │                     │
│  cannot_perform_network_request   │  0            │                     │
│  mask_mismatch                    │  0            │                     │
│  concent_required                 │  0            │                     │
└───────────────────────────────────┴───────────────┴─────────────────────┘
```

---

###### `tasks help` - Prints this message or the help of the given subcommand(s)

---

### Test task

Test task works the same as the `task` create, but it will not send your task to the main network - it will compute this task on your local machine.

###### `test_task` subcommands

```
test_task 0.1.9
Golem Factory <contact@golem.network>
Manage testing tasks

USAGE:
    test_task [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    run         Run testing task. It accepts a file like 'tasks create'.
    template    Dump a task template
    status      Show test_task status
    abort       Abort a task. It will delete a task details
    help        Prints this message or the help of the given subcommand(s)
```

---

### ACL - Access Control List

?> ACL allows you to **ban nodes from interacting with your node** and also **create your own network of trusted nodes**

###### ACL subcommands

```
acl 0.1.9
Golem Factory <contact@golem.network>
Manage peer access control lists

USAGE:
    acl [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    list     Show current access list status
    setup    Creates new acl list with given configuration.
    allow    Allows interaction with given nodes. Removes from blacklist or adds to whitelist.
    deny     Deny interaction with given nodes. Adds for blacklist or removes from whitelist.
    help     Prints this message or the help of the given subcommand(s)
```

---

###### `acl list` - Show current Access Control List status

---

###### `acl setup` - Creates new acl list with given configuration

###### `acl setup` subcommands

```
acl-setup 0.1.9
Golem Factory <contact@golem.network>
Creates new acl list with given configuration.

USAGE:
    acl setup [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    all-except     Reset ACL to all nodes are allowed except listed.
    only-listed    Reset ACL to only listed nodes are allowed.
    help           Prints this message or the help of the given subcommand(s)
```

---

###### `acl allow` - Allows interaction with given nodes. Removes from blacklist or adds to whitelist.

```
acl-allow 0.1.9
Golem Factory <contact@golem.network>
Allows interaction with given nodes. Removes from blacklist or adds to whitelist.

USAGE:
    acl allow [FLAGS] <node>...

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

OPTIONS:


ARGS:
    <node>...    GOLEM node id. it can be pattern in form <prefix>...<suffix>

```

---

###### `acl deny` -  Deny interaction with given nodes. Adds to blacklist or removes from whitelist.

```
acl-deny 0.1.9
Golem Factory <contact@golem.network>
Deny interaction with given nodes. Adds for blacklist or removes from whitelist.

USAGE:
    acl deny [FLAGS] [OPTIONS] <node>...

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

OPTIONS:
    -s, --for-secs <for_secs>    Sets temporaty rule for given number of seconds.

ARGS:
    <node>...    GOLEM node id. it can be pattern in form <prefix>...<suffix>
```

---

### Envs

?> With this command you manage your node environments, like **BLENDER**, **BLENDER_NVGPU**, **WASM** and **glambda**

```
envs 0.1.9
Golem Factory <contact@golem.network>
Manage environments

USAGE:
    envs [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    show             Show environments
    enable           Enable environment
    disable          Disable environment
    recount          Recount performance for an environment
    perf_mult        Prints current performance multiplier
    perf_mult_set    Sets performance multiplier
    help             Prints this message or the help of the given subcommand(s)
```

---

###### `envs show` - Show environments

```
┌─────────────────┬─────────────┬──────────┬──────────────────────┬─────────────────────┬───────────────────────────────────────────────────────────┐
│  name           │  supported  │  active  │  performance         │  min accept. perf.  │  description                                              │
├─────────────────┼─────────────┼──────────┼──────────────────────┼─────────────────────┼───────────────────────────────────────────────────────────┤
│  BLENDER        │  true       │  true    │  133.01216936085748  │  900.0              │  Blender (www.blender.org)                                │
│  BLENDER_NVGPU  │  false      │  true    │  0.0                 │  900.0              │  Blender + NVIDIA GPU (www.blender.org)                   │
│  DUMMYPOW       │  true       │  true    │  1869.191065254729   │  900.0              │  Dummy task (example app calculating proof-of-work hash)  │
│  WASM           │  true       │  true    │  1296.239786361542   │  900.0              │  WASM Sandbox                                             │
│  glambda        │  true       │  true    │  811.1121661294131   │  900.0              │  GLambda PoC                                              │
└─────────────────┴─────────────┴──────────┴──────────────────────┴─────────────────────┴───────────────────────────────────────────────────────────┘
```

---

###### `envs enable` - Enable environment

To enable particular environment you should provide:
`name` - name of your environment, for eg. `BLENDER`

command for enabling an environment should look like this:
`envs enable BLENDER`
after that you will see `envs show` with updated envs setup

---

###### `envs disable` - Disable environment

In order to disable particular environment you should provide:
`name` - name of your environment, for eg. `BLENDER`

Command for disable an environment should look like this:
`envs disable BLENDER`
after that you will see `envs show` with updated envs setup

---

###### `envs recount` - Recount performance for an environment

In order to recount particular environment you shouldn provide:
`name` - name of your environment, for eg. `BLENDER`

command for recount an environment should look like this:
`envs recount BLENDER`
after that you will see `envs show` with updated envs setup

--- 

###### `envs perf_mult` - Prints current performance multiplier

```
minimal performance multiplier is: 3
```
So in this case this node will commision tasks to nodes that have at least 3 times higher benchmarks score than he has

---

###### `envs perf_mult_set` - Sets performance multiplier

To set multiplier for commissioning tasks to more powerful nodes you should provide additional:
`multiplier`
Command for setting a multiplier should look like this:
`envs perf_mult_set 6`

---

### Concent

?> Using Concent Service you promise ethical behavior in the network by pledging a small amount of your funds as a Deposit. Concent Service intervenes only when there is a sign of malicious behavior between the nodes, so you can think of it as a an arbitrator or mediator in a dispute. All transactions in Concent Service are done on users behalf, so besides turning it on, there is no other action required. However Concent Service will require both GNT and ETH in order to create the deposit. 

With this command you are able to turn **Concent Service** **on** and **off**, check deposit balance and accept or decline its terms of use. 

```
concent 0.1.9
Golem Factory <contact@golem.network>
Concent Service

USAGE:
    concent [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    status     Shows Concent Service status
    on         Turns Concent Service on
    off        Turns Concent Service off
    deposit    Display deposit status
    terms      Terms of Use
    help       Prints this message or the help of the given subcommand(s)
```

---

### Cache

?> Manage disc cache

```
cache 0.1.9
Golem Factory <contact@golem.network>
Manage disc cache

USAGE:
    cache [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    show     Show information on used resources
    clear    Clear provider and requestor cache files
    help     Prints this message or the help of the given subcommand(s)
```

---

### Wallet

?> Wallet operations 

```
wallet 0.3.0
Golem Factory <contact@golem.network>
Wallet operations

USAGE:
    wallet [FLAGS] <SUBCOMMAND>

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

SUBCOMMANDS:
    show    Show payments
    help    Prints this message or the help of the given subcommand(s)
```

###### `wallet show` - Display all incomes (by default prints table with all income transactions with their statuses and amounts) 

###### Wallet show example:

```
┌────────────────┬─────────────┬─────────────────────────────┬─────────────┬───────────┐
│  type          │  status     │  amount                     │  fee (ETH)  │  task_id  │
├────────────────┼─────────────┼─────────────────────────────┼─────────────┼───────────┤
│  task_payment  │  overdue    │  +0 GNT                     │  0 ETH      │           │
...
│  task_payment  │  confirmed  │  +0.014621102509523771 GNT  │  0 ETH      │           │
│  task_payment  │  confirmed  │  +0.175055555555555556 GNT  │  0 ETH      │           │
│  task_payment  │  confirmed  │  +0.035055555555555556 GNT  │  0 ETH      │           │
│  task_payment  │  confirmed  │  +0.035055555555555556 GNT  │  0 ETH      │           │
│  task_payment  │  confirmed  │  +0.005095359097787075 GNT  │  0 ETH      │           │
│  task_payment  │  confirmed  │  +0.006861111111111112 GNT  │  0 ETH      │           │
└────────────────┴─────────────┴─────────────────────────────┴─────────────┴───────────┘
```

###### `wallet show --help` - Display additional wallet show commands

```
USAGE:
    wallet show [FLAGS] [OPTIONS] [page]

FLAGS:
        --json    Return results in JSON format
    -h, --help    Prints help information

OPTIONS:
        --direction <direction>              Operation direction [possible values: incoming, outgoing]
        --operation-type <operation_type>    Operation type [possible values: transfer, deposit_transfer,
                                             task_payment, deposit_payment]
        --per-page <per_page>                How many records per page

ARGS:
    <page>    
```

`wallet show --direction outgoing` example:

```
┌────────────────┬─────────────┬─────────────────────────────┬─────────────────────┬────────────────────────────────────────┐
│  type          │  status     │  amount                     │  fee (ETH)          │  task_id                               │
├────────────────┼─────────────┼─────────────────────────────┼─────────────────────┼────────────────────────────────────────┤
│  task_payment  │  confirmed  │  -0.011994975363026472 GNT  │  0.00001230603 ETH  │  28d64c64-e91c-11e9-84ac-4035c2a052f0  │
│  task_payment  │  confirmed  │  -0.012036930358726568 GNT  │  0.00001230603 ETH  │  28d64c64-e91c-11e9-84ac-4035c2a052f0  │
...
│  task_payment  │  confirmed  │  -0.009944444444444445 GNT  │  0.00001230603 ETH  │  28d64c64-e91c-11e9-84ac-4035c2a052f0  │
│  task_payment  │  confirmed  │  -0.011961928322119616 GNT  │  0.00001230603 ETH  │  28d64c64-e91c-11e9-84ac-4035c2a052f0  │
│  task_payment  │  confirmed  │  -0.009944444444444445 GNT  │  0.00001230603 ETH  │  28d64c64-e91c-11e9-84ac-4035c2a052f0  │
│  task_payment  │  confirmed  │  -0.009944444444444445 GNT  │  0.00001230603 ETH  │  28d64c64-e91c-11e9-84ac-4035c2a052f0  │
└────────────────┴─────────────┴─────────────────────────────┴─────────────────────┴────────────────────────────────────────┘
```

?> Wallet show will soon replace `golemcli incomes` and `golemcli payments`

---

### Shutdown

?> Quit after finishing ongoing tasks

