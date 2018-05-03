# Notes on Using Docker for Web Development
These are my notes while going through Pluralsight course: "Docker for Web Developers"

## Why use docker as a developer?

1. What is Docker?
 - lightweight, open, secure, platform
 - simplify building, shipping, running, apps
 - shipping **container** system for code... standardize shipping containers
 - runs natively on linux or windows server
 - on mac, use a VM
 - relies on images and containers; an image is used to build a container (ex: Ubuntu with Node.js and Application Code)... think of this as the blueprint to determine what is going into the container; a container is created by using an image... it runs your application.
 - an **image** is a read-only template composed of layered filesystems used to share common files and create Docker container instances.
 - a **container** is an isolated and secured shipping container created from an image that can be run, started, stopped, moved, and deleted.
 - runs natively on Ubuntu and Windows server... on Mac, use a VM
 - Docker ships as a "Docker client", runs on top on OS, communicates with Docker Engine/Daemon
 - Docker VS VM: everything is a copy in a new VM, while docker containers share the host OS's resources (kernel, etc.)

2. Docker Benefits (for Web Developers) 
 2.1 accelerate developer onboarding
    - create easier way to setup environments for each new developer or designer machines... by using images and containers
 2.2 eliminate app conflicts
    - 
 2.3 environment consistency (no more "it works on my local")
    - 
