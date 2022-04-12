

//Keybuffer array
keys = [];

//Runs once per frame and processes keys that are currently held down. 
function processKeys() {
  if (gameState == INTRO) {

  } 
    
  else if (gameState == PLAYING) {
    //Move playler and camera left
    if ((keys["A".charCodeAt(0)] || keys[LEFT_ARROW]) && !player.getCollidesLeft()) {
      player.moveLeft();
      g_camera.moveLeft(player.getX(), player.getDx());
    }
    //Move player and camera right
    if ((keys["D".charCodeAt(0)] || keys[RIGHT_ARROW]) && !player.getCollidesRight()) {
      player.moveRight();
      g_camera.moveRight(player.getX(), player.getDx());
    }
    //Set size to .5 blocks (width) by 1 blocks (height), preserves ratio
    if (keys["0".charCodeAt(0)]) {
      player.setHeight(unit);
      player.setWidth(unit * 0.5);
    }
    //Set size to 1 blocks by 2 blocks, preserves ratio
    if (keys["1".charCodeAt(0)]) {
      player.setHeight(2 * unit);
      player.setWidth(unit * 1);
    }
    //Set size to 1.5 blocks by 3 blocks, preserves ratio
    if (keys["2".charCodeAt(0)]) {
      player.setHeight(3 * unit);
      player.setWidth(unit * 1.5);
    }
    //Set size to 2 blocks by 4 blocks, preserves ratio
    if (keys["3".charCodeAt(0)]) {
      player.setHeight(4 * unit);
      player.setWidth(unit * 2);
    }
    //Increase speed by one
    if (keys["4".charCodeAt(0)]) {
      player.setDx(player.getDx() + 1);
    }
    //Decrease speed by one
    if (keys["5".charCodeAt(0)]) {
      player.setDx(player.getDx() - 1);
    }
    //F6, ends loop/pauses
    if (keys[117]) {
      noLoop()
    }
  }
    
  else if (gameState == OUTRO) {

  }

  mouse();
}

//Processes a single press.
function mousePressed() {
  //Make player jump and move camera up if click 
  //  is above center of screen.
  if (mouseY < canvasHeight / 2) {
    player.jump();
    g_camera.moveUp(player.getDy());
  }
}

//Processes mouse input continously
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

//Runs when a key is released
function keyReleasedOnce() {
  if (gameState == INTRO) {

  } 
  else if (gameState == PLAYING) {
    
  }
  else if (gameState == OUTRO) {

  }
}

//Runs when a key is pressed once
function keyTypedOnce() {
  if (gameState == INTRO) {
    
  } 
  else if (gameState == PLAYING) {
    if ((keys["W".charCodeAt(0)] || keys[UP_ARROW])) {
      player.jump();
      g_camera.moveUp(player.getY());
    }
  }
  else if (gameState == OUTRO) {
    
  }
}

//Key Buffer, do not change.

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