// @Author - Justin, Kyle

class Zombie extends Sprite {
    
  constructor(x, y, width, height, img, dx, dy) {
    super(x, y, width, height, img, dx, dy);
    this.rightBound = x + 3 * unit;
    this.leftBound = x - 3 * unit;
    this.isRight = true;
  }

  display() {
    super.update();
    //this.checkBounds();
    push();

    noFill();
    strokeWeight(3);
    stroke('red');
    if (!levelEditor) {
      if (!this.isRight) {
        //Flip image and adjust position accordingly.
        scale(-1, 1);
        image(this.img, -this.pos.x - this.width, this.pos.y, this.width, this.height);
        if (hitBoxesCheckBox.checked()) {
          rect(-this.pos.x - this.width, this.pos.y, this.width, this.height);
        }
      } else {
        image(this.img, this.pos.x, this.pos.y, this.width, this.height);
        if (hitBoxesCheckBox.checked()) {
          rect(this.pos.x, this.pos.y, this.width, this.height);
        }
      }
    } else {
      image(this.img, this.pos.x, this.pos.y, this.width, this.height);
    }

    pop();
  }
  
  checkBounds() {
    //Left bound || Right bound
    if ((this.pos.x < this.leftBound && !this.isRight) || (this.pos.x + this.width > this.rightBound && this.isRight)) {
      this.velocity.x = -this.velocity.x;
      this.isRight = !this.isRight;
    }
  }
}