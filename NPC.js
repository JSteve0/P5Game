class NPC extends Sprite {
  constructor(x, y, width, height, dx, dy, img = null) {
    super(x, y, width, height)
    this.dx = dx;
    this.dy = dy;
  }

  update() {
    display();
  }
}