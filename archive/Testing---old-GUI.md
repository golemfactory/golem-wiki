# What can you test aka how does the app work 
## First steps
After you successfully installed the Golem App, you will be prompted to enter your node name. You can change it later so don't worry much about it, but you have to set it to a non-empty string. We encourage to choose your Slack login, so we will be able to easily identify your node.

Now you should see something similar to ![](https://camo.githubusercontent.com/a9cbd29596e2e0f69898bf7af109b77ff198ca7a/687474703a2f2f676f6c656d70726f6a6563742e6e65742f696d672f676f6c656d737461727473637265656e73686f742e706e67).

The icons on the left are the main app menu. Currently you are in a `Task` submenu. White area in the center is where your tasks will appear when you add some, on the right there is a bunch of information about a specific task when you select it.

### Command line interface

Type `help` to list available commands and their descriptions. For example, to gain some knowledge on available Golem's settings, enter:

`settings -h`

Note that most commands also have sub-commands and optional flags, just like 
`settings show --provider`. To clear that up, type:

`settings show -h`

Set a new node name with a command:

`settings set node_name <new_name>`

## Settings
Click `Preferences` on the left. The three tabs on the top of the window are different settings groups. Let's start with the `General` tab:
   1. `Seed address` and `Seed port` are data you need to provide if you want to connect to a specific machine, i.e. your second PC. By default Golem on start connects to one of our computers to enter the network, so you usually don't need to change anything here.
   2. `Node name` is the name you were asked to type on the first start, here is where you can change it.

Click the <kbd>Show more</kbd> button on the bottom to display more (mostly highly advanced) options. The default values are reasonable and should be OK, so if you don't want to change them there is no need to do so, however we encourage you to experiment with them. Like most of the UI elements, the properties' names have tooltips - they should give you an idea on what are the meanings of them.

Now click the `Provider` tab. In general, these are options controlling the proccess of choosing and computing other Golems' tasks. You can set here your financial expectations, maximal resources size, maximal RAM usage, number of CPU cores to use and minimal trust level of a requestor to accept their tasks. Again, the default values of technical parameters should be fine.
The estimated performances are measurement of your PC's effectiveness and are dependent on the above settings like RAM and number of cores. You can recount them at any moment if you want to. 
The `Don't accept any tasks` checkbox seems quite clear: just check it if you don't want to compute other persons' tasks.

The `Requestor` tab is simple and consists of only two fields analogical to the ones present in the `Provider`.

**Important!** Note that settings are saved after clicking the `Change` button. If you forget to accept your changes, they won't take place.

### Command line interface
You can manage node's settings with these 2 commands:
- `settings show` - displays node's settings
- `settings set <name> <new_value>` - updates a setting `<name>` with a `<new_value>`

## Status
Here you can view the current state of the network and information about tasks you computed or tried to compute. Also, by clicking the <kbd>Show disk usage</kbd> button, you can manage data stored on your PC. A good idea is to go there from time to time and erase the data since it won't be deleted automatically (but do not do this while computing some tasks/accepting your tasks).

### Command line interface
Useful network commands:
- `network show` - shows connected peers
- `network status` - displays node's network and computing status
- `network connect <ip_address> <tcp_port>` - connects to a specified node in the network

Disk resource management:
- `res show` - shows the amount of disk space used by resources
- `res clear --provider` - clears computing resources

## Account
In this submenu you can check your financial history and account balance. Also Ethereum address, node name and Golem ID (a long HEX number used to identify you in the network) are displayed along with your reputation (how trustworthy other nodes find you).

### Command line interface
- `account` - displays account information
- `payments` - shows a list of payments made
- `incomes` - shows a list of recently received payments

## New task
The main functionality of the Golem app is computing tasks (both as a requestor and a provider). You are automatically accepting others' tasks (if you didn't check the `Don't accept any tasks` option in settings) - being a provider is that simple. 

To become a requestor, try to render something - add a random Blender or Luxrender task (if you are not a 3D artist you can find example scene files on the Internet - search for *.lxs for LuxRender files and *.blend for Blender) with reasonable parameters and see if it's working. To add a new task: 
   1. Click `New Task` on the left.
   2. Choose appropriate renderer (Blender or LuxRender).
   3. Set path to a .blend or .lxs file in the `Main scene file`. You can click <kbd>...</kbd> to choose a file from your machine. 
   4. If your scene needs some additional data, for instance textures, select the right files or directories after clicking <kbd>Add</kbd>.
   5. Set `Output format` and `Output file`. You can click <kbd>...</kbd> to define path to a new file on your machine. 
   6. Experiment with other options. Keep in mind that if you set a too short timeout value, the task won't be finished in time. Generally is better to set too long timeout than too short. Also, if you set `max price` to low people may not want to render it. Pessimistic cost is calculated as a number of subtasks * subtask timeout (in hours) * price.
   7. Be careful with enabling compositing (or: don't enable it if you are not sure what you are doing). When you split a frame into several subtasks, some of Blender postprocessing functions can give different results than when applied to a whole image.
   8. When you're ready click <kbd>Test task</kbd> and wait until the test is finished. Be patient: it can take a while dependending on the scene's complexity. After testing the number of resources can increase by one - it's OK (means the scene file was added to resources list)
   9. If the test was successful you can click <kbd>Create task</kbd>. 
   10. Click `Tasks` on the left side of the app, mark the new task and click <kbd>Start task</kbd> there. 
   11. Wait for the results.

Optionally you can save a task on your disk and load it later.

### Command line interface
To load a task from a file, enter:

`tasks load "<full_path_to_file>"`

which will test and automatically start that particular task. If your task has been previously tested in GUI, you can skip the testing phase with the `--skip-test` flag. 

For more information on task management, type `tasks -h`.
