
class Scene {
  constructor () {}

  intro () {
    
  }

  playing () {
    
    player.display();
    for (let i = 0; i < blocks.length; ++i) {
      blocks[i].display();
    }
    for (let i = 0; i < coins.length; ++i) {
      coins[i].display();
      if (collides(player, coins[i])) {
        coins.splice(i, 1);
        --i;
      } 
    }
    for (let i = 0; i < zombies.length; ++i) {
      zombies[i].display();
      if (collides(player, zombies[i])) {
        zombies.splice(i, 1);
        --i;
      } 
    }

    let playerGridX = Math.floor((player.getX() + player.getWidth() * 0.5) / unit);
    let playerGridY = map.length - Math.ceil((canvasHeight - player.getY()) / unit) ;

    //let playerGridY = Math.floor((canvasHeight / unit) - ((player.getY() + player.getHeight() * 0.5) / unit));
    
    //if (frameCount % 0 == 0) {
      //print("x: " + playerGridX);
      //print("y: " + playerGridY);
      //print("below: " + map[playerGridY][playerGridX]);
      //print("below: " + map[playerGridY][playerGridX]);
    //}
    //push()
    //noFill()
    //rect((playerGridX - 1) * unit, (playerGridY - 2) * unit, unit * 3, unit * 4)
    //rect(playerGridX * unit, (playerGridY + 1) * unit, unit, unit);
    //pop()
    //print("start");
    for (let row = playerGridY - 1; row <= playerGridY + 3; row++) {
      //print(column)let column = playerGridY - 1; column <= playerGridY + 2; column++
      for (let column = playerGridX - 1; column <= playerGridX + 1; column++) {
        //print(map[column][row]);
        if (row >= 0 && column >= 0 && row < map.length) {
          if (map[row][column] === 2) {
            //physicsCollision(player, column * unit, canvasHeight - (unit * (map.length - row)), unit, unit)
            physicsCollision(player, (column) * unit, canvasHeight - (unit * (map.length - row)), unit, unit)
          }
        }
        //print(row + ", " + column + ", " + map[row][column])
      }
    }
    player.update();
    //noLoop()
    
  }

  outro () {
    
  }
}