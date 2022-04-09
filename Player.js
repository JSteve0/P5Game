let IDLE = 0;
let JUMP = 1;

class Player extends NPC {
  
  constructor(x, y, width, height, speed, img) {
    super(x, y, width, height, speed, 0, img);
    this.isFalling = true;
    this.isRight = true;
    this.g = 0.004 * height;
    this.jumpHeight = 0.1 * height;
    this.collidesRight = false;
    this.collidesLeft = false;
    this.startJumpCounter = 20;
    this.jumpCount = this.startJumpCounter;
    this.playerImage = this.img[0];
  }
  
  display() {
    //rint(this.isFalling);
    //print(this.isRight)
    push()
    if (!this.isRight) {
      scale(-1, 1)
      image(this.playerImage, -this.x - this.width, this.y, this.width, this.height);
    } else {
      image(this.playerImage, this.x, this.y, this.width, this.height);
    }
    pop()
  }

  update() {
    //Always update y based on dy.
    this.y -= this.dy;
    //If falling change dy by g and change image to falling image.
    if (this.isFalling) {
      this.dy -= this.g
      this.playerImage = this.img[JUMP];
    } 
    //Else set dy to 0, reset jump counter, and set image to idle.
    else {
      this.dy = 0;
      this.jumpCount = this.startJumpCounter;
      this.playerImage = this.img[IDLE];
    }
  }
  
  moveLeft() {
    this.isRight = false;
    this.x -= this.dx;
  }

  moveRight() {
    this.isRight = true;
    this.x += this.dx;
  }

  jump() {
    if (this.jumpCount > 0) {
      this.isFalling = true;
      if (this.dy < 0) this.dy = 0;
      this.dy = this.jumpHeight;
      this.jumpCount--;
    }
  }

  setFalling(bool) {
    this.isFalling = bool;
  }

  getFalling() {
    return this.isFalling;
  }

  setCollidesRight(bool) {
    this.collidesRight = bool;
  }

  getCollidesRight() {
    return this.collidesRight;
  }

  setCollidesLeft(bool) {
    this.collidesLeft = bool;
  }

  getCollidesLeft() {
    return this.collidesLeft;
  }

  
}