keys = [];

function processKeys() {
  if (gameState == INTRO) {

  } 
  else if (gameState == PLAYING) {
    if ((keys["A".charCodeAt(0)] || keys[LEFT_ARROW]) && !player.getCollidesLeft()) {
      player.moveLeft();
      camera.moveLeft(player.getX(), player.getDx());
    }
    if ((keys["D".charCodeAt(0)] || keys[RIGHT_ARROW]) && !player.getCollidesRight()) {
      player.moveRight();
      camera.moveRight(player.getX(), player.getDx());
    }
    if (keys["S".charCodeAt(0)] || keys[DOWN_ARROW]) {
      player.moveDown();
      camera.moveDown(-player.getDy());
    }
  }
  else if (gameState == OUTRO) {

  }
}

function keyReleasedOnce() {
  if (gameState == INTRO) {

  } 
  else if (gameState == PLAYING) {
    
  }
  else if (gameState == OUTRO) {

  }
}

function keyTypedOnce() {
  if (gameState == INTRO) {
    
  } 
  else if (gameState == PLAYING) {
    if ((keys["W".charCodeAt(0)] || keys[UP_ARROW])) {
      player.moveUp();
      camera.moveUp(player.getDy());
    }
  }
  else if (gameState == OUTRO) {
    
  }
}

function keyPressed() {
  keys[keyCode] = true;
  keyTypedOnce();
  return false;
}

function keyReleased() {
  keyReleasedOnce();
  keys[keyCode] = false;
  return false;
}