---
title: What Is Docker And Why Should You Care
date: "2021-04-12T15:33:36Z"
description: "A very simple explaination of Docker."
featuredImage: ./dummy.png
---

<style>
body {
text-align: left
}
</style>

Until last year I was pretty detached from the realm of cloud computing. I was focused on learning the skills required to be a data scientist. My understanding of cloud technologies was not better than a first-year undergraduate course on the subject. To do something about that in Fall 2020 I took a course called "Distributed and Cloud Systems". Glad to say I now have a better understanding and appreciation of cloud technologies. 

Before I took that course I had vague ideas of what Docker might be. Now I know enough to use it in projects. I want to share a bit of what I learned about Docker here along with the resources that I found helpful.

- I found [this](https://www.youtube.com/watch?v=3c-iBn73dDE) youtube video which was a great resource for learning about Docker. 

- [These](https://medium.com/devopslinks/the-missing-introduction-to-containerization-de1fbb73efc5) [two](https://towardsdatascience.com/learn-enough-docker-to-be-useful-b7ba70caeb4b) articles on Medium.

# An intuition
A **container is a package**. This package is made of the application (being developed) along with all the necessary **dependencies and configurations**. This package is **portable** just like any other [artifact](https://softwareengineering.stackexchange.com/a/106474) created during development. Just like code lives in a repository (like GitHub, which may be public or private), containers (images) live in a **container repository** (like DockerHub, which may be public or private). This **packaging and portability** offered by containers make development and deployment much more efficient. Let's look at how this is possible.

# How containers improve the development process. 
In the past without containers, each developer would have to install, configure and run the necessary binaries for local application development. Different versions of the local OS and dependencies give rise to a lot of variability in setting up the local development environment. This variability leads to complexity and more room for errors. 

Container technology **eliminates this complexity**. A container serves as an **isolated OS or a stand-alone environment**. This enables developers across the team to simply download and run the packaged container for the application they are working on. Now each developer has a local development environment (along with all the necessary configurations and dependencies) that is **consistent** across the team. 

Containers significantly **reduce the friction** to set up a local environment and get started on development. Containers also make it possible to run multiple different versions of the same application at the same time **without conflict**. Each version runs in its isolated container.

# How containers improve the deployment process. 
Again, in the past without containers, the development team produces artifacts that include instructions for set-up and configurations on the server. Then the operations team follows these instructions to set up and configure directly on the host server in production. Many issues can arise from this approach, but here are two major time-consuming issues.

* Misunderstanding between teams. 

    The development team communicates (usually via text documents) set-up instructions to the operations team. The nature of human communication can lead to inefficient back and forth before the desired application set-up is on the production server.

* Dependency version conflict. 

    Several configurations and dependencies exist directly on the same production server. For example, in the case of two different services deployed on the same server, a conflict can arise if the two services require different versions of a dependency. We want to run multiple services on the same server to maximize throughput. Yet the potential for conflict on a production server used in this manner is high.


Containers can eliminate these issues and make the deployment process much more efficient. 
* The misunderstanding between teams is eliminated because the need to communicate or explain a configuration is non-existent.
The initial packaged application produced by the development team can be directly handed over to the operations team. That container can be deployed directly on the production server. 

* With containers, each application/service is running in its isolated environment. This eliminates conflicts because no application-specific set-up is required directly on the host server. All application-specific requirements live within the container. The only requirement for containers to run on the host server is to set up a container run-time environment on the server (that can run multiple containers).

These are a few reasons why containers can improve the experience of developing software which makes it a technology worth learning about.  

> *To summarize in one sentence, a container is a packaged application (along with the necessary dependencies and configurations) that is portable and which improves the development and deployment experience.*

