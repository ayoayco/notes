# Node Development, the Docker Way
Original gist [**here**](https://gist.github.com/ayoayco/e1817aa6180f7325b52f17a132f9a388).

This started out as a gist but evovled into a longer note...

Let's go through the process of starting a node.js app, the docker way.

## Requirements / Steps:
1. Docker - installation process [here](https://docs.docker.com)
1. node.js & npm
5. setup node app
    1. For an express app run:
        1. `npm i -g express express-generator`
        2. `express MyExpressApp`
    2. For an Angular app, run:
        1. `npm i -g @angular/cli`
        2. `ng new MyAngularApp`
        3. In the gist, change the port setup from `3000` to `4200`, because this is the default port that angular-cli runs on.
6. Go to the created directory (i.e., `cd MyExpressApp` or `cd MyAngularApp`)
7. Finally, run the Docker command in this gist: `docker run -p 8080:3000 -v %cd%:/var/www -w "/var/www" node npm start`
8. Check if working: browse the running Docker: http://localhost:8080 

## Important NOTES:
1. The gist works on Windows Command Prompt, if you are working on Mac / Linux / PowerShell, change %cd% to $(pwd)
2. If you are working on and Angular App, you have to change the port setup from `3000` to `4200`, because this is the default port that angular-cli runs on.
3. if you don't have the Node docker image in your local yet, the command will need an Internet connection to pull this image from Docker hub. If there is no Internet connection, there may be an error

## Up Next:
1. Create a Docker File ? :)
