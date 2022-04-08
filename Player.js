class Player extends NPC {
  constructor(x, y, width, height, speed, img) {
    super(x, y, width, height, speed, 0, img);
    this.isFalling = true
    this.g = 0.004 * height;
    this.jumpHeight = 0.1 * height;
    this.collidesRight = false;
    this.collidesLeft = false;
    this.startJumpCounter = 2;
    this.jumpCount = this.startJumpCounter;
  }

  display() {
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.y -= this.dy;
    if (this.isFalling) {
      this.dy -= this.g
    } else {
      this.dy = 0;
      this.jumpCount = this.startJumpCounter;
    }
  }
  
  moveLeft() {
    this.x -= this.dx;
  }

  moveRight() {
    this.x += this.dx;
  }

  moveUp() {
    if (this.jumpCount > 0) {
      this.isFalling = true;
      if (this.dy < 0) this.dy = 0;
      this.dy = this.jumpHeight;
      this.jumpCount--;
    }
  }

  moveDown() {
    //this.y += this.dy;
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