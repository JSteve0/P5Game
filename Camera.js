class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.leftBound = 0.2 * windowWidth;
    this.rightBound = 0.8 * windowWidth;
  }

  moveLeft(x, dx) {
    if (x < this.leftBound) {
      //this.x += dx;
    }
    this.x += dx;
  }
  
  moveRight(x, dx) {
    if (x > this.rightBound) {
      //this.x -= dx;
    }
    this.x -= dx;
  }

  moveUp(dy) {
    //this.y += dy
  }
  
  moveDown(dy) {
    //this.y += dy
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y
  }
}