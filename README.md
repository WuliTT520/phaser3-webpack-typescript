# phaser3-webpack-typescript
h5 game porject template by use phaser3 with typescript and uses webpack for bundling
keywords:phaser3 webpack typescript html5 game 
## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm i` | Install project dependencies |
| `npm run dev` | Builds project and open web server and watch for changes |
| `npm run build` | Builds code bundle with production settings |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can change the porject name and version on `package.json`.

run `npm run dev`,will open web server on `http://localhost:8080/` by default

run `npm run build` to build your game (file in `./dist` default)

## Configuring webpack

* Edit the file `webpack.config.js` to edit the development build.
* Edit the file `webpack.config.prod.js` to edit the production build.
