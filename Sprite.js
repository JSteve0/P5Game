class Sprite {
  constructor(x, y, width, height, img = null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
  }

  display() {
    image(this.img, this.x, this.y, this.width, this.height);
  }
  
  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setSize(width, height = width) {
    this.width = width;
    this.height = height;
  }
}