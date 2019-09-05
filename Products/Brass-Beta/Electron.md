# Golem Electron Application
![Minimum Node Requirement](https://img.shields.io/badge/node-%3E%3D6.14.0-brightgreen.svg)
[![CircleCI](https://circleci.com/gh/golemfactory/golem-electron.svg?style=shield)](https://circleci.com/gh/golemfactory/golem-electron)

The desktop application (Golem's Graphic Interface) using Electron, React and Redux.
</p>

![electron](/img/electron.jpg)

## Development
#### Installation

1. Clone the repo:
```bash
git clone https://github.com/golemfactory/golem-electron
```

2. For Windows users only
- Download **Nodejs** from [their official site](https://nodejs.org/en/download/), and install on your machine.
- Open PowerShell with administrator privileges and paste:
```bash
npm --add-python-to-path='true' install --global --production windows-build-tools
```

3. In a new terminal window go to project main folder and hit:
```bash
npm install
```
or if you wish:
```bash
yarn 
```
That's it!


#### Usage
Start dev server
```bash
npm run start:app
```

Start electron application on testnet (development mode)
```bash
npm run start
```

Start electron application on mainnet (development mode)
```bash
npm run start:mainnet
```

#### Custom flags 

To run golem electron with custom datadir and/or rpc address, pass the same flags and parameters as you do with golem.  i.e.;

```bash
golemapp --datadir /Users/USER/test_datadir --rpc-address 127.0.0.1:60003
```
```bash
npm run start -- --datadir /Users/USER/test_datadir --rpc-address 127.0.0.1:60003
```

*Note: Don't forget to add `--` to `npm run start` before adding your flags.*


#### Debug mode
While using application, you can choose `Debug mode` from the `View` menu or press:

Windows: &nbsp;
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>
<br/>
Mac: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<kbd>⌘ cmd</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>
<br/>
Linux: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>
<br/>
<br/>
Debug mode will be activated. 
<br/>
Now you can restart the application to catch all critical informations from beginning.
<br/>
<br/>
You'll find debug logs in;
<br/>
<br/>

|OS|Path|General Log|Error Log|
|---|---|---|---|
|Windows|`%LOCALAPPDATA%\golem\golem\default\{CURRENT_CHAIN}\logs\`|`gui.log`|`gui-error.log`|
|Mac|`~/Library/Application\ Support/golem/default/{CURRENT_CHAIN}/logs/`|`gui.log`|`gui-error.log`|
|Linux|`~/.local/share/golem/default/{CURRENT_CHAIN}/logs/gui.log/`|`gui.log`|`gui-error.log`|

<br/>
Note: `{CURRENT_CHAIN}` parameter will be `mainnet` if you running golem on mainnet, if you're on testnet it will be `rinkeby` in this case.
<br/><br/>

#### Developer mode
While using application, you can choose `Developer mode` from the `View` menu or press:

Windows: &nbsp;
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>
<br/>
Mac: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<kbd>⌘ cmd</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>
<br/>
Linux: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>D</kbd>
<br/>
<br/>
Developer mode will be activated. 
<br/>
<br/>

You'll find additional information about;
- subtask node list in task details page
- peer list in settings tab
- stats about the application in settings tab
- more detailed tooltip information while hovering subtask borders in preview window 


#### Testing
Run tests
```js
npm run test
npm run test:watch //live
npm run test:coverage //live
```

## Common problems

These are the common problems while building packages. 

### Windows

---
#### Python 2 missing

#### Symptoms
* Sha3 cannot detect Python executable: While running `npm install` an error is returned with information that sha3 cannot find python executable (and points to python3 location).
* Python syntax error: While running `npm install` an error is displayed indicating that python2 script was run using python3 interpreter:
```
gyp ERR! configure error
gyp ERR! stack Error: Command failed: ...\Python36\python.EXE -c import sys; print "%s.%s.%s" % sys.version_info[:3];
gyp ERR! stack   File "<string>", line 1
gyp ERR! stack     import sys; print "%s.%s.%s" % sys.version_info[:3];
gyp ERR! stack                                ^
gyp ERR! stack SyntaxError: invalid syntax
```

#### Description
Web3 packages required python2 version and it has to be added to path.

#### Resolution
- Run terminal with administrator privileges
- Type `npm --add-python-to-path='true' install --global --production windows-build-tools`

#### Found
20 Sep 2018 

---

#### Node-sass 'vendor' directory missing

#### Symptoms
When running `npm run start:app` an error is displayed indicating that `node-sass\vendor` directory is missing:
```
Error: ENOENT: no such file or directory, scandir '...\node_modules\node-sass\vendor'
```

#### Description
Node-sass building is bugged and it needs to be rebuilt.

#### Resolution
Run `npm rebuild` in the main directory.

#### Found
19 Sep 2018

---

#### Scrypt error

#### Symptoms
When running `npm run start` an error message appears mentioning `scrypt` package:
```
App threw an error during load
Error: error: 1114\\?\C:\electron\node_modules\scrypt\build\Release\scrypt.node
    at process.module.(anonymous function) [as dlopen] (ELECTRON_ASAR.js:172:20)
    at Object.Module._extensions..node (module.js:671:18)
    at Object.module.(anonymous function) [as .node] (ELECTRON_ASAR.js:172:20)
    at Module.load (module.js:561:32)
    at tryModuleLoad (module.js:504:12)
    at Function.Module._load (module.js:496:3)
    at Module.require (module.js:586:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (C:\electron\node_modules\scrypt\index.js:3:20)
    at Object.<anonymous> (C:\electron\node_modules\scrypt\index.js:388:3)
```

#### Description
Web3 packages required Windows Build Tools on Windows machines.

#### Resolution
- Run terminal with administrator privileges
- Type `npm --add-python-to-path='true' install --global --production windows-build-tools`
- Re-build packages with `npm rebuild`

Workaround: run production mode (`npm run compile` & `npm run start:prod`) instead of developer mode (`npm run start:app` & `npm run start`)

#### Found
19 Sep 2018

---

