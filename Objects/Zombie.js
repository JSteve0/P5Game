// @Author - Justin, Kyle

class Zombie extends Sprite {
    
  constructor(x, y, width, height, img, dx, dy) {
    super(x, y, width, height, img, dx, dy);
    this.rightBound = 0;
    this.leftBound = 0;
    this.isRight = true;
  }

  display() {
    this.update()
    image(this.img, this.pos.x, this.pos.y, this.width, this.height);
    this.horizontalBounds();
  }

  update() {
    this.pos.x += this.velocity.x;
    this.pos.y += this.velocity.y;
  }
  
  horizontalBounds() {
    //Left bound || Right bound
    if (this.pos.x < this.leftBound || this.x + this.width > this.rightBound) {
      this.pos.y = -this.velocity.y;
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