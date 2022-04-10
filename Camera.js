class Camera {
  constructor() {
    this.pos = createVector(0, 0);
    this.leftBound = 0.2 * windowWidth;
    this.rightBound = 0.8 * windowWidth;
  }

  update() {
    translate(this.pos.x, this.pos.y);
  }
  
  moveLeft(x, dx) {
    if (x < this.leftBound) {
      //this.x += dx;
    }
    this.pos.x += dx;
  }
  
  moveRight(x, dx) {
    if (x > this.rightBound) {
      //this.x -= dx;
    }
    this.pos.x -= dx;
  }

  moveUp(dy) {
    //this.y += dy
  }
  
  moveDown(dy) {
    //this.y += dy
  }
}