# Node.js Project Setup in Typescript

This project gives you and idea about how we can write node.js application using typescript and how we can use MongoDB in it. I also implemented logger for logging our apps log.

---
## Requirements

Node.js and MongoDb must be installed on your machine for development.


### Node
- #### Node installa tion on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.14.1

    $ npm --version
    6.13.4

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/PulkitAgg/nodejs-typescript-starterkit.git
    $ cd nodejs-typescript-starterkit
    $ npm install

## Configure app

- Create `.env` file in your root directory and add all key that present in .env-sample file.


## Running the project

    $ npm run start:dev

## Simple build for production

    $ npm run build

## Features
- Typescript enabled code.
- ESLint is also enabled.
- Script for checking and fixing es lint error.
- Environment setup
- Logger Setup


#### Note:
- Feel free to raise an issue if you find any.
- Feel free to raise an pull request if you solve any issue.
- You may give star to my repo if you like it.
- You can also contribute this project after forking my repo.