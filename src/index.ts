/// <reference path="types/phaser.d.ts" />
import Phaser from "phaser";
import PlayScene from "./scenes/playScene";
import EndScene from "./scenes/endScene";

// game config
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  parent: 'app',
  scene:[PlayScene,EndScene]
}

// dom style init
const dom = document.getElementById('app');
dom.style.height = config.height + 'px';
dom.style.width = config.width + 'px';

// auto fit function
function changeBoxSize() {
  const winH = document.body.clientHeight;
  const winW = document.body.clientWidth;
  let size;
  if(winH / winW >= config.height / config .width) {
    size = winW / config.width;
  }else{
    size = winH / config.height;
  }
  dom.style.transform = 'scale(' + size + ')'
}

// create size change listener 
window.onresize = function () {
  changeBoxSize();
}
changeBoxSize();

// create game
const game = new Phaser.Game(config)
