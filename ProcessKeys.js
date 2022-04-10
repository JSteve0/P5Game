keys = [];

function processKeys() {
  if (gameState == INTRO) {

  } 
  else if (gameState == PLAYING) {
    if ((keys["A".charCodeAt(0)] || keys[LEFT_ARROW]) && !player.getCollidesLeft()) {
      player.moveLeft();
      g_camera.moveLeft(player.getX(), player.getDx());
    }
    if ((keys["D".charCodeAt(0)] || keys[RIGHT_ARROW]) && !player.getCollidesRight()) {
      player.moveRight();
      g_camera.moveRight(player.getX(), player.getDx());
    }
  }
  else if (gameState == OUTRO) {

  }

  mouse();
}

function mousePressed() {
  if (mouseY < canvasHeight / 2) {
    player.jump();
    g_camera.moveUp(player.getDy());
  }
}

function mouse() {
  if (mouseIsPressed) {
    if (mouseX < canvasWidth / 2 && !player.getCollidesLeft()) {
      player.moveLeft();
      g_camera.moveLeft(player.getX(), player.getDx());
    }
    else if (mouseX > canvasWidth / 2 && !player.getCollidesRight()) {
      player.moveRight();
      g_camera.moveRight(player.getX(), player.getDx());
    } 
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
      player.jump();
      g_camera.moveUp(player.getDy());
    }
  }
  else if (gameState == OUTRO) {
    
  }
}

//Key Buffer, do not change.
//ima change it

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