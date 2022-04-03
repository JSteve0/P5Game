class Player extends NPC {
  constructor(x, y, width, height, speed, img) {
    super(x, y, width, height, speed, speed, img);
    this.g = 0.1;
  }

  display() {
    rect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.dy
  }
  
  moveLeft() {
    this.x -= this.dx;
  }

  moveRight() {
    this.x += this.dx;
  }

  moveUp() {
    this.y -= this.dy;
  }

  moveDown() {
    this.y += this.dy;
  }
}