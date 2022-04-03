class Zombie extends NPC {
    
  constructor(x, y, width, height, dx, dy, img = null) {
    super(x, y, width, height, dx, dy, img);
    this.rightBound = windowWidth;
    this.leftBound = 0;
    this.isRight = true;
  }

  display() {
    this.update()
    rect(this.x, this.y, this.width, this.height);
    this.horizontalBounds();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
  }
  
  horizontalBounds() {
    //Left bound || Right bound
    if (this.x < this.leftBound || this.x + this.width > this.rightBound) {
      this.dx = -this.dx;
    }
  }

  changeDirection() {
    if (this.x < this.rightBound) {
      this.horizontalBounds();
//    if (this.currentImg != this.img2) {
//      this.currentImg = this.img2;
//    }
    }  
    else if (this.x > this.leftBound){
      this.horizontalBounds();
//    if (this.currentImg != this.img) {
//      this.currentImg = this.img;
//    }
    } 
  }
}