# Preparation

It helps to put extracted contents of this dir to shared folder of your virtual machine/MS Windows OS.
https://drive.google.com/open?id=0B0YJ4lLHU6wWLW9uN3p6NzQzRGs
It contains all installers and populated deps directory.

In VM settings/BIOS enable VT-X/AMD-v. It's required by docker. In `vmplayer` `Edit virtual machine settings > Processors > Virtualize VT-x/EPT or AMD-V/RVI`

# Packaging steps

1. Install `python2.7` **32bit** (remember to check "Add python.exe to Path")
1. Install `VirtualBox` **with** python bindings
1. Install `innosetup`
1. Install `VCforPython27`
1. Install `DockerToolbox`
1. Install `vc_redist86.exe` (**v2013** :bangbang:)
1. ~~Restart OS~~
1. Run `cd %VBOX_MSI_INSTALL_PATH%\sdk\install` and `python vboxapisetup.py install` in administrator CMD (Start > "CMD" Ctr-Shift-Enter)
1. Verify that everything worked well by running (in CMD or PowerShell) `python -c "import vboxapi"`
1. Clone golem to `C:\golem`
1. `    cd C:\golem`
    `pip install -r requirements-winpackager.txt`
1. ~~Add `C:\Python27\Lib\site-packages\PyQt5` to system PATH~~
1. ~~Restart OS~~
1. Populate `golem\Installer\Installer_Win\deps` from `deps` archive mentioned in the beginning
1. As a temporary fix for conflicting rlp versions run `pip install web3==3.8.0`
1. ~~Start `Docker`. Running `docker-machine env` might help. It should suggest how to setup your env~~
1. Run `golem\Installer\Installer_Win\install_script.iss` in innosetup
1. `Build > Compile`. If you get `No files found matching "C:\golem\dist\"` try running `python setup.py pyinstaller` in golem dir.
1. Your `setup.exe` should be ready in `golem\Installer\Installer_Win\`