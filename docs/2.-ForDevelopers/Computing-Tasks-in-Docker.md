# Computing Tasks in Docker

Various bits of information on the implementation of Docker-based tasks in Golem (a **Docker-based task** is a task that is computed in a Docker container).

**This is work in progress**

## Overview of the implementation

Most of the new code resides in the package `golem.docker`. The most interesting class there is `golem.docker.job.DockerJob` which wraps Python Docker API calls for convenient use in Golem. Example use:

```python
with DockerJob(DockerImage("golem/blender"), task_script_src, task_params,
               resources_dir, work_dir, output_dir) as job:
    job.start()
    exit_code = job.wait()
    job.dump_logs(stdout_file="stdout.log")
```

The above code will 

* create a new Docker container based on the image `golem/blender:latest`;
* mount the host directories `resources_dir`, `work_dir`, `output_dir` as `/golem/resources`, `/golem/work` and `/golem/output`, respectively, in the container;
* save the string `task_script_src` as `/golem/work/job.py`;
* execute the command `/usr/bin/python /golem/work/job.py` in the container (with `/golem/work` as the working dir);
* wait for the container to exit;
* save the output of the command to file `stdout.log` on the host;
* remove the container.

GNR specific Docker support is implemented by patching existing class hierarchy with a few Docker-specific fields and methods.

* `golem.task.taskbase.TaskHeader`
There is a new field `docker_images` which holds a list of `DockerImages`. The idea is that any of these images has to be present in order to compute the task. Usually the list will be singleton, for example will contain just `golem/blender`.


**To be continued...**

## How to build required Docker images

So far there are three images:

* `Dockerfile.base` for building the base image `golem/base` based on `debian/jessie`
* `Dockerfile.blender` for building the Blender image `golem/blender` based on `golem/base`
* `Dockerfile.luxrender` for building the LuxRendef image `golem/luxrender` based on `golem/base`

To build, go to the golem root dir and execute, for `<image>` in `{"base", "blender", "luxrender"}`:
```
$ docker build -t golem/<image> -f scripts/Dockerfile.<image> .
```

Note that `Dockerfile.luxrender` downloads the luxrender binary distribution from imapp's repo 
`https://github.com/imapp-pl/golem-binary-dependencies`.

## How to prepare a Docker-based task

Right now the GUI does not support Docker-based tasks. The workflow for producing a Docker-based Blender task definition file is as follows:

1. Create and save a Blender task definition file in GUI. Suppose the file is `blendertask.gt`.
2. Run `scripts/pickle2json.py blendertask.gt blendertask.json` to convert the `.gt` file to JSON format.
3. Run `scripts/blender2docker.py blendertask.json docker-blendertask.json` to add Docker-specific data to the task definition file. This step does the following:

  * Adds the default Docker image `golem/blender` to the list of images required to compute the task.
  * Replaces the environment object with an instance of `BlenderDockerEnvironment`.
  * Changes the value of `main_program_file` from `<path-to-script-folder>/blendertask.py` `<path-to-script-folder>/docker_blendertask.py`.

The resulting file `docker-blendertask.json` may now be submitted for computation in Golem:

```
$ python gnr/node.py --task docker-blendertask.py
```

## How to monitor Docker computations

Standard output and error streams of the process running in the container may be redirected to Golem logs.
For this, set the logging level for the logger `golem.task.docker.job.container` to `DEBUG`:
```
[loggers]
keys=container,...

[logger_container]
level=DEBUG
qualname=golem.task.docker.job.container
propagate=0
```
I suspect that for performance reasons this should probably be turned on only during development.




