class Camera {
  constructor() {
    this.pos = createVector(10 * unit, -8 * unit);
    this.leftBound = 0.2 * windowWidth;
    this.rightBound = 0.8 * windowWidth;
  }

  update(y) {
    this.pos.y = -y + 15 * unit - (8 * unit);
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

  moveUp(y) {
    this.pos.y = canvasHeight - y
  }
  
  moveDown(y) {
    //this.pos.y += y
  }
}