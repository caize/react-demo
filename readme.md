# Patient / Doctor App

## Project Contents

### app

This contains the source code for the client application.  

### server

This contains the source code for the express rest endpoints.

### node_modules 

External development dependencies imported using npm. This directory is not included in the repository, but is generated locally using the `npm install` command.

### package.json

There is a json file, `package.json` at the top level of the project that lists third-party dependencies for running
the application locally, along with build scripts and other meta data.

### webpack.config.js

This is the config file for the webpack.


## Getting the app to run locally 

### Pre-Reqs

- [Node.js](http://nodejs.org/ "Node.js") and the Node Package Manager (npm): To run the development web server and build tasks.

### Getting Set Up

1. Run `npm install` to install all dependencies for the front end and server. 

2. Run `npm run start-server` to start the express rest services.

3. Run `npm run start-web` to start start the webpack-dev-server.

4. Login with a test user listed in ./server/models/users.js.   All users have a password as Password123