keys = [];

function processKeys() {
  if (gameState == INTRO) {
    if (keys["A".charCodeAt(0)]) {
      player.moveLeft();
      camera.moveLeft(player.getX(), player.getDx());
    }
    if (keys["D".charCodeAt(0)]) {
      player.moveRight();
      camera.moveRight(player.getX(), player.getDx());
    }
    if (keys["W".charCodeAt(0)]) {
      player.moveUp();
      //camera.moveUp(player.getDy());
    }
    if (keys["S".charCodeAt(0)]) {
      player.moveDown();
      //camera.moveDown(-player.getDy());
    }
  } 
  else if (gameState == PLAYING) {
    
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