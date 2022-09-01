//@Author - Justin

//Keybuffer array
keys = [];

//Runs once per frame and processes keys that are currently held down. 
function processKeys() {
  if (!levelEditor) {
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

  } else {
    if ((keys["A".charCodeAt(0)] || keys[LEFT_ARROW])) {
      cameraX += 3;
    }
    //Move player and camera right
    if ((keys["D".charCodeAt(0)] || keys[RIGHT_ARROW])) {
      cameraX -= 3;
    }
    if ((keys["S".charCodeAt(0)] || keys[DOWN_ARROW])) {
      cameraY -= 3;
    }
    //Move player and camera right
    if ((keys["W".charCodeAt(0)] || keys[UP_ARROW])) {
      cameraY += 3;
    }
    if (keys["0".charCodeAt(0)]) {
      editMode = 0;
    }
    if (keys["1".charCodeAt(0)]) {
      editMode = 1;
    }
    if (keys["2".charCodeAt(0)]) {
      editMode = 2;
    }
    if (keys["3".charCodeAt(0)]) {
      editMode = 3;
    }
    if (keys["4".charCodeAt(0)]) {
      editMode = 4;
    }
    if (keys[" ".charCodeAt(0)]) {
      let output = "[\n";
      for (let row = 0; row < 100; row++) {
        output += "\t["
        for (let column = 0; column < 100; column++) {
          if (column != 99) {
            output += map[map.length-1][row][column] + ",";
          } else {
            output += map[map.length-1][row][column]
          }
        }
        if (row != 99) {
          output +=  '],\n'
        }
      }
      output += "]\n]"
      print(output)
    }
  }
  mouse();
}

//Processes a single press.
function mousePressed() {
  //Make player jump and move camera up if click 
  //  is above center of screen.
  if (!levelEditor) {
    if (mouseY < canvasHeight / 2) {
      player.jump();
      g_camera.moveUp(player.getDy());
    }
  } 
}

//Processes mouse input continously
function mouse() {
  if (!levelEditor) {
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
  } else {
    if (mouseIsPressed) {
      console.clear()
      print(mouseX - cameraX)
      print(mouseY - cameraY)
      print(Math.floor((mouseX - cameraX) / unit) * sc);
      print(Math.floor((mouseY - cameraY) / unit) * sc);
      let column = Math.floor(((mouseX - cameraX) / unit) * (1 / sc));
      let row = Math.floor(((mouseY - cameraY) / unit) * (1 / sc));
      if (row >= 0 && row < 100 && column >= 0 && column < 100) {
        if (editMode == 1) {
          map[map.length-1][row][column] = 1;
          if (map[level][row][col] === 1) {
            player = new Player (
              column * unit, // x
              row * unit, // y
              1 * unit, // width
              2 * unit, // height
              johnImg, // display images
              0.15 * unit, // dx
              0 // dy
            );
          }
        }
        else if (editMode == 2) {
          map[map.length-1][row][column] = 2;
          blocks.push(
            new Sprite(
              column * unit, // x
              row * unit, // y
              1 * unit, // width
              1 * unit, // height
              blockImg // display image
            )
          );
        } else if (editMode == 3) {
          map[map.length-1][row][column] = 3;
          coins.push (
            new Sprite (
              column * unit, // x
              row * unit, // y
              unit, // width 
              unit, // height
              coinImg // display image
            )
          );
        } else if (editMode == 4) {
          map[map.length-1][row][column] = 4;
          zombies.push(
            new Zombie(
              column * unit, // x
              row * unit, // y
              1.5 * unit, // width
              1 * unit, // height
              zombieRightImg, // display image
              0, // dx 
              0 // dy
            )
          );
        }
      }
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
  if (!levelEditor) {
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