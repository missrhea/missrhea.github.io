---
title: Docker 101
date: "2021-04-18T15:33:36Z"
description: "10 commands to get started with Docker."
---

<style>
h4{
    text-decoration:underline
}
code{
    color:#E9BC3E
}
</style>
# Working with containers

A container provides a file system, configuration files (to set environmental variables), and other run-times/ dependencies to support the application running inside it. The container has its own abstraction of an OS, file system, and environment configuration which is different from that on the host machine. The container also has a port associated with it to allow the outside world to talk with the application running inside. 

A container is created from the corresponding container 'image'. The image is a blueprint of sorts for the container. The images are stored in a repository that may be public (like DockerHub) or private. To run a container you can pull the corresponding image from a container registry like DockerHub.

#### 1. Pull the image from a repository
``` $ docker pull mongo```

This will download the MongoDB image from [DockerHub](https://hub.docker.com/_/mongo) on your local machine.

#### 2. To list all the images present locally
```$ docker images```

At this point, no container is running. To allow my application to connect with a MongoDB Database within the container, the container must be up and running.

#### 3. Download an image and start a container
```$ docker run mongo```

This will pull the container image (if it is not present locally) and start a new container. By adding the -d option to the above command you can free up the terminal and run the container in the background i.e. the detached mode. 

```$ docker run -d mongo ```

#### 4a. To list all the running containers 
```$ docker ps```

#### 4b. To list all the running containers and stopped containers
```$ docker ps -a```

This will display the container ID, port number, status, name, etc for each container. The container ID is a unique alphanumeric string that identifies each container.

#### 5. Start or stop a container using the ID
```$ docker start CONTAINER_ID```

```$ docker stop CONTAINER_ID```

A container provides an isolated environment. This makes it possible to run two versions of the same application in separate containers on the same machine without any conflict. For example, [here](https://hub.docker.com/_/mongo?tab=tags&page=1&ordering=last_updated) on DockerHub I can look at images corresponding to different versions of MongoDB. The version is specified by the tag. If I wanted version 4.2, I have to look for the image with tag 4.2 i.e. 'mongo:4.2'- where '4.2' is the tag. I can pull and run the container with, 

``` $ docker run mongo:4.2```

The two containers with different MongoDB versions will run on the same host without conflict. When you don't specify the tag for an image Docker will pull the most recently updated image.

# Communicating with the application inside a container
A host machine has many 'ports' that can be opened up for applications we want to talk/communicate with. A container also has a port associated with it. We need applications inside containers to communicate with applications outside the container. To enable this the container port needs to be bound to a port on the host. 

Each container must be bound to a different port on the host machine. There will be no conflict as long as each container is bound to a unique port on the host machine. 

#### 6. Binding the container port with a host port
Use the -p option with the run command to specify the port binding. The following command will bind the host's port number 6000 to the container's port number 7489.

```$ docker run -p 6000:7489```

#### 7. Name a container
Use the --name option with the run command. The following command will name the container 'mongo_old'.
```$ docker run -p 6000:7489 --name mongo_old mongo:4.2```

#### 8. Checking logs
Check the logs by specifying the container's ID or name.

```$ docker logs CONTAINER_ID```

```$ docker logs NAME```

#### 9. Run a command inside a container
To enter inside a container specify the container's ID or name.

```$ docker exec -it CONTAINER_ID```

The -it option will allow you to talk with the container in an interactive mode. Any commands we run now will be executed within the container.

To navigate to the root folder inside the container file system.

```$ cd /```

To list the environment variables inside the container.

```$ env```

To check the present working directory.

```$ pwd```

# The Docker network
When more than one container is running on the same host they are all using the Docker runtime. Docker provides an isolated environment so that the containers can talk/communicate with each other using just the container ID or name. There is no need to specify the localhost port number and specific container port number. Since all containers are inside the same Docker network they can communicate directly.

What if an application outside the Docker network wants to communicate with any application inside a container? In this case, the two applications are not in the same network (Docker network). So the external application must connect/bind to the Docker container by specifying the localhost port number and container port number.

#### 10. To list the Docker networks

```$ docker network ls```

Docker creates a default network for running containers, but we can also create a custom network.

```$ docker network create mongo-network```

This creates a network called mongo-network. To assign a container to a network, specify the network with the run command.

``` $ docker run -p 6001:7489 --name mongo --net mongo-network mongo```

and

```$ docker run -p 6000:7489 --name mongo_old --net mongo-network  mongo:4.2```

This will assign the two containers ```mongo``` and ```mongo_old``` to the ```mongo-network``` network. Note the port binding in the two commands. The host port numbers are unique (6000 and 60001) but the individual container port numbers are the same (7489). Yet there is no conflict because the containers run in the same Docker network and can be easily identified by their ID or name.


>These 10 commands are just enough to provide some idea about working with Docker containers. Here are two comprehensive resources that I found useful.
> - [Learn Enough Docker to be Useful](https://towardsdatascience.com/learn-enough-docker-to-be-useful-b7ba70caeb4b)
>    - I was doubtful of the pizza analogy at first, but it made sense as a way of reasoning about the Docker world.
> - [15 Docker Commands You Should Know](https://towardsdatascience.com/15-docker-commands-you-should-know-970ea5203421)
>   - A comprehensive list of Docker commands. 