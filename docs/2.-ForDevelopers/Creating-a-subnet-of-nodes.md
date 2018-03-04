# Creating a subnet of nodes

For compability, Golems' nodes can connect if they have the same the 'protocol_id'.

During tests, it is useful to apply a 'mask' which will create a subnet of nodes.
To do so, the node_A and node_B need to be run im a following manner:

## Way No1

1) Since the 'protocol_id' is restricted, nodes cannot connect to default (hardcoded) seed.
Edit the config files 


app_cfg.ini of node_A 
```
...
start port = 40102
...
```

app_cfg.ini of node_B
```
...
seed port = 40102
seed host = <ip of node_A>
...
```

2) run the golem's node_A with command line argumend `--protocol_id=12345`
3) run the golem's node_B with command line argumend `--protocol_id=12345`


Note: 
When launching 2 instances of golem on the same local machine replace the <ip of node_A> with 127.0.0.1

Then, you shall observe in logs on node_A:

```
INFO     [twisted                            ] ProtocolFactory starting on 40102 
INFO     [twisted                            ] Starting factory <golem.network.transport.network.ProtocolFactory object at 0x7fbf5594efd0> 
INFO     [twisted                            ] ProtocolFactory starting on 40103 
```
When launching node_B, the ports 40102, 40103 are already used by node_A, thus node_B will take next ones:
```
INFO     [twisted                            ] ProtocolFactory starting on 40104 
INFO     [twisted                            ] Starting factory <golem.network.transport.network.ProtocolFactory object at 0x7fb19a8b34a8> 
INFO     [twisted                            ] ProtocolFactory starting on 40105 
```
Thus, it is important to launch nodes in order: node_A then node_B - according to the config file.

## Alternative, Way No2

1) run the golem's node_A with command line argumend:

 `--protocol_id=12345`

2) run the golem's node_B with command line argumend:

 `--protocol_id=12345 --peer=127.0.0.1:40102 --rpc-address=127.0.0.1:61011`