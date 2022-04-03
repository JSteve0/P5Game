class NPC extends Sprite {
  constructor(x, y, width, height, dx, dy, img = null) {
    super(x, y, width, height)
    this.dx = dx;
    this.dy = dy;
  }

  //Updates position then draws the object.
  display() {
    this.update();
    rect(this.x, this.y, this.width, this.height);
  }

  //Updates current position based on current velocity.
  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

  getDx() {
    return this.dx;
  }

  getDy() {
    return this.dy;
  }
  
  setSpeed(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }
}