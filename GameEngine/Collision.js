//Ass code by me, do not touch!
function collidesTop(object1, x, y, width, height) {
  let centerX = object1.getX() + (object1.getWidth() / 2);
  return (object1.getY() - (object1.getDy() / 4) <= y + height && 
     object1.getY() >= y && 
     centerX - (0.3 * object1.getWidth()) <= x + width && 
     centerX + (0.3 * object1.getWidth()) >= x) 
}

function collidesBottom(object1, x, y, width, height) {
  let centerX = object1.getX() + (object1.getWidth() / 2);
  let bottomY = object1.getY() + object1.getHeight();
  return (bottomY - (object1.getDy() / 2) >= y && 
          bottomY <= y + height && 
          object1.getX() + (0.2 * object1.getWidth()) <= x + width && 
          object1.getX() + object1.getWidth() - (0.2 * object1.getWidth()) >= x && 
          object1.getDy() <= 0) 
}

function collidesRight(object1, x, y, width, height) {
  return (object1.getX() + object1.getWidth() > x && 
          object1.getX() + object1.getWidth() < x + width && 
          object1.getY() + object1.getHeight() - 5 > y && 
          object1.getY() < y + height) 
}

function collidesLeft(object1, x, y, width, height) {
  return (object1.getX() < x + width && 
             object1.getX() > x && 
             object1.getY() + object1.getHeight() - 5 > y && 
             object1.getY() < y + height)
}

function physicsCollision(object1, x, y, width, height) {
  if (collidesRight(object1, x, y, width, height)) {
    object1.setCollidesRight(true);
  } 
  if (collidesLeft(object1, x, y, width, height)) {
    object1.setCollidesLeft(true);
  } 
  if (collidesBottom(object1, x, y, width, height)) {
    if (object1.getY() + object1.getHeight() != y - 1) {
      object1.setY(y - object1.getHeight() + 1);
    }
    object1.setDy(0);
    object1.setFalling(false);
  } 
  
  if (collidesTop(object1, x, y, width, height) && object1.getDy() > 0) {
    object1.setDy(0);
    //object1.setY(y + height);
  }
}

function collides(object1, object2) {
  return (object1.getX() < object2.getX() + object2.getWidth() &&
          object1.getX() + object1.getWidth() > object2.getX() &&
          object1.getY() < object2.getY() + object2.getHeight() &&
          object1.getY() + object1.getHeight() > object2.getY());
}