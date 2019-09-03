# Creating a subnet of nodes

In order to have a subnet of nodes you have to install the latest Golem version. Please follow [this instructions](/Products/Brass-Beta/Installation.md).
You will also need to get familiar with [Golem command line interface](/Products/Brass-Beta/Command-line-interface.md).

For compability, Golem nodes can connect **only** if they have **same `protocol_id`**.
This restriction can be used to create a subnet of nodes. You can create subnet of nodes via CLI or by edditing config file. 

?> It is important to launch nodes in order: `node_A` then `node_B`

--- 

#### 1. via CLI arguments

##### Creating a subnet of nodes on two machines

1) run `node_A` (a Requestor) with:

```bash
golemapp --password=your_password --accept-terms --protocol_id=102938
```

2) run `node_B` (a Provider) with:

```bash
golemapp --password=your_password --accept-terms --peer=<ip of node_A>:40102 --protocol_id=102938
```

Since the `protocol_id` is restricted, nodes cannot connect to default (hardcoded) seed, so we need to add `--peer`. Both nodes need to be on testnet or both on mainnet.

##### Creating a subnet of nodes on same machine

1) run `node_A` (a Requestor) with

```bash
golemapp --password=your_password --accept-terms --datadir=/path/to/datadir1 --rpc-address=localhost:61001 --protocol_id=102938
```
?> On MacOs your `--datadir` should be created in `$HOME/Library/Application\ Support/datadir1`

When launching both golem instances on the same local machine we need to add two more args for `node_B` (a Provider):

```bash
 golemapp --password=your_password --accept-terms --datadir=/path/to/datadir2 --rpc-address=localhost:61002 --peer=localhost:40102 --protocol_id=102938
```

?> On MacOs your `--datadir` should be created in `$HOME/Library/Application\ Support/datadir2`

first to choose new RPC port for `node_B` (default is `61000`), and second to create separate data directory for it. Obviously we can supply `127.0.0.1` as `node_A` ip address then.

If you wish to add a third node, lets say another Provider you should then:

```bash
golemapp --password=your_password --accept-terms --datadir=/path/to/datadir3 --rpc-address=localhost:61003 --peer=localhost:40102 --protocol_id=102938
```

---

#### 2. via editing config file

1. Edit `app_cfg.ini` of `node_B`

```bash
...
seed host = <IP of node_A>
rpc port = 61011 # change when both nodes on same machine
...
```
2. run `node_A` with `--protocol_id=12345` 
3. than run `node_B` with same `--protocol_id=12345`

#### Checking if nodes are running properly

You should observe in logs on `node_A`:

```bash
INFO     [golemapp                           ] Protocol Version: 12345-testnet
...
INFO     [golem.client                       ] Golem is listening on ports: P2P=40102, Task=40103, Hyperdrive=3282
```


When launching `node_B`, the ports `40102`, `40103` are already used by `node_A`, thus `node_B` will take next ones:

```bash
INFO     [golemapp                           ] Protocol Version: 12345-testnet
...
INFO     [golem.client                       ] Golem is listening on ports: P2P=40104, Task=40105, Hyperdrive=3282
```

Thus, it is important to launch nodes in order: `node_A` then `node_B` - according to the config file.

You can check if nodes are connected by executing:

?> Running `golemcli` should include additional `—port 61001 -I -d $HOME/Library/Application\ Support/datadir1`

`golemcli network show` 

on `node_A`. This should print out:

```bash
ip           port  id                                   name           version
---------  ------  -----------------------------------  -------------  ----------------------
127.0.0.1   52112  55097f28ee2d7c55...36a1cd03594aeb2f  node_B         0.17.0
```