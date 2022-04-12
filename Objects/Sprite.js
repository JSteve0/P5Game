class Sprite {
  
  constructor(x, y, width, height, img, dx = 0, dy = 0) {
    //Position
    this.pos = createVector(x, y);
    
    //Size
    this.width = width;
    this.height = height;
    
    //Speed 
    this.velocity = createVector(dx, dy);
    
    //Display
    this.img = img;
  }

  display() {
    this.update();
    image(this.img, this.pos.x, this.pos.y, this.width, this.height);
  }

  update() {
    this.pos.x += this.velocity.y;
    this.pos.y += this.velocity.y
  }

  /***********************/
  /* Setters and Getters */
  /***********************/
  
  getX() {
    return this.pos.x;
  }

  getY() {
    return this.pos.y;
  }

  setX(x) {
    this.pos.x = x;
  }

  setY(y) {
    this.pos.y = y;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  setWidth(w) {
    return this.width = w;
  }

  setHeight(h) {
    return this.height = h;
  }

  getDx() {
    return this.velocity.x;
  }

  getDy() {
    return this.velocity.y;
  }

  setPosition(x, y) {
    this.setX(x);
    this.setY(y);
  }

  setDx(dx) {
    this.velocity.x = dx;
  }
  
  setDy(dy) {
    this.velocity.y = dy;
  }
  
  setVelocity(dx, dy) {
    this.setDx(dx);
    this.setDy(dy);
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }
  
}