import Phaser from "phaser";

export default class EndScene extends Phaser.Scene {
  constructor() {
    super({
      key:"EndScene"
    })
  }

  create() {
    console.log("you win!")
  }

}