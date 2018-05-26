# Node Development, the Docker Way
Original gist [**here**](https://gist.github.com/ayoayco/e1817aa6180f7325b52f17a132f9a388).

This started out as a gist but evovled into a longer note...

Let's go through the process of starting a node.js app, the docker way.

## Requirements / Steps:
1. Install Docker - installation process [here](https://docs.docker.com)
2. Insall node.js & npm
3. Setup node app. In this example, we create an express app:
    1. `npm i -g express express-generator`
    2. `express MyExpressApp`
    3. `cd MyExpressApp`
    4. `npm install`
4. Finally, run the Docker command in this gist: `docker run -p 8080:3000 -v %cd%:/var/www -w "/var/www" node npm start`
5. Check if working: browse the running Docker's IP plus port or `https://localhost:8080`

## Important NOTES:
1. The gist works on Windows Command Prompt, if you are working on Mac / Linux / PowerShell, change %cd% to $(pwd)
2. if you don't have the Node docker image in your local yet, the command will need an Internet connection to pull this image from Docker hub. If there is no Internet connection, there may be an error

## Up Next:
1. Create a Docker File ? :)

