//Ass code by me, do not touch!
function collidesTop(object1, object2) {
  let centerX = object1.getX() + (object1.getWidth() / 2);
  return (object1.getY() <= object2.getY() + object2.getHeight() && 
     object1.getY() >= object2.getY() && 
     centerX <= object2.getX() + object2.getWidth() && 
     centerX >= object2.getX()) 
}

function collidesBottom(object1, object2) {
  let centerX = object1.getX() + (object1.getWidth() / 2);
  let bottomY = object1.getY() + object1.getHeight();
  return (bottomY >= object2.getY() && 
          bottomY <= object2.getY() + object2.getHeight() && 
          object1.getX() + (0.2 * object1.getWidth()) <= object2.getX() + object2.getWidth() && 
          object1.getX() + object1.getWidth() - (0.2 * object1.getWidth()) >= object2.getX() && 
          object1.getDy() <= 0) 
}

function collidesRight(object1, object2) {
  return (object1.getX() + object1.getWidth() > object2.getX() && 
          object1.getX() + object1.getWidth() < object2.getX() + object2.getWidth() && 
          object1.getY() + object1.getHeight() - 3 > object2.getY() && 
          object1.getY() < object2.getY() + object2.getHeight()) 
}

function collidesLeft(object1, object2) {
  return (object1.getX() < object2.getX() + object2.getWidth() && 
             object1.getX() > object2.getX() && 
             object1.getY() + object1.getHeight() - 3 > object2.getY() && 
             object1.getY() < object2.getY() + object2.getHeight())
}

function physicsCollision(object1, object2) {
  if (collidesRight(object1, object2)) {
    object1.setCollidesRight(true);
  } 
  if (collidesLeft(object1, object2)) {
    object1.setCollidesLeft(true);
  } 
  if (collidesBottom(object1, object2)) {
    if (object1.getY() + object1.getHeight() != object2.getY()) {
      object1.setY(object2.getY() - object1.getHeight() + 2);
      //if (object1.getIsRight()) {
        
      //}
    }
    object1.setFalling(false);
  } 
  
  if (collidesTop(object1, object2) && object1.getDy() > 0) {
    object1.setDy(-1);
    object1.setY(object2.getY() + object2.getHeight());
  }
}

function collides(object1, object2) {
  return (object1.getX() < object2.getX() + object2.getWidth() &&
          object1.getX() + object1.getWidth() > object2.getX() &&
          object1.getY() < object2.getY() + object2.getHeight() &&
          object1.getY() + object1.getHeight() > object2.getY());
}