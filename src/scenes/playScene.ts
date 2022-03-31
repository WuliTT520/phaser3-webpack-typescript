import Phaser from "phaser";
import logoImg from "../assets/logo.png"

export default class PlayScene extends Phaser.Scene{
  player: any;
  cursorKeys: any;
  
  constructor() {
    super({key:"PlayScene"})
  }

  preload() {
    this.load.image('logo', logoImg);
  } 
  
  create() {
    this.player = this.add.sprite(400, 150, 'logo');
    this.cursorKeys = this.input.keyboard.addKeys('W,S,A,D');
  }

  update() {
    if(this.cursorKeys.W.isDown){
      this.player.y--;  
    }
    if(this.cursorKeys.S.isDown){
      this.player.y++;
    }
    if(this.cursorKeys.A.isDown){
      this.player.x--;
    }
    if(this.cursorKeys.D.isDown){
      this.player.x++;
    }
    if(this.player.x > 1000 && this.player.y > 1000){
      this.scene.sleep();
      this.scene.start('EndScene')
    }
  }

}