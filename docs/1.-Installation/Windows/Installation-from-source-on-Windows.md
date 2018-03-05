
# Windows - install from source instructions


Please note that these instructions are for the **64-bit** version of [Python 3.6](https://www.python.org/ftp/python/3.6.2/python-3.6.2-amd64.exe).

1. OpenSSL libraries (64-bit)

  - Download and extract [OpenSSL libraries](https://indy.fulgan.com/SSL/openssl-1.0.1u-x64_86-win64.zip) to a known location, e.g. `C:\OpenSSL`.
  - **Prepend** `C:\OpenSSL` to your `PATH` environment variable. You will have to restart your running command line windows for this change to take effect.


2. Python packages

  - Download and execute the installer for [pywin32](https://sourceforge.net/projects/pywin32/files/pywin32/Build%20221/pywin32-221.win-amd64-py3.6.exe/download).
  - Using command line, go to Golem's project directory and type:

  ```
pip install -r requirements.txt
pip install -r requirements-win.txt
```

**Build taskcollector**

1. Open project in VisualStudio:
  - If you don't have installed VS download it for free from [[this site|https://www.visualstudio.com/vs/visual-studio-express/]]
2. Open `taskcollector.sln`
3. Set build type as _Release_
  - In case of error `Error MSB8020 The build tools for v120 (Platform Toolset = 'v120') cannot be found. To build using the v120 build tools, please install v120 build tools.` right click on solution and in _General_ change _Platform Toolset_ to **Visual Studio 2015 (v140)**
  - In case of error `Error LNK1181 cannot open input file '\FreeImage.lib` download package from [[this site|https://sourceforge.net/projects/freeimage/files/Binary%20Distribution/3.17.0/FreeImage3170Win32Win64.zip/download?use_mirror=vorboss]] and extract `FreeImage.lib` to `<golem dir>\apps\rendering\resources\taskcollector\FreeImage\Release` and `FreeImage.dll` to the `<golem dir>\apps\rendering\resources\taskcollector\Release` folder.
__NOTE__ use 64bit libraries
4. Build the project

**That's it!**
