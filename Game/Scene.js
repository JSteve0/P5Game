// @Author - Justin

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
        player.score++;
      } 
    }
    for (let i = 0; i < zombies.length; ++i) {
      zombies[i].display();
      if (collides(player, zombies[i])) {
        reset = true;
      } 
    }

    let playerGridX = Math.floor((player.getX() + player.getWidth() * 0.5) / unit);
    let playerGridY = map.length - Math.ceil((canvasHeight - player.getY()) / unit) ;

    //Block based collision detection for player
    for (let row = playerGridY - 1; row <= playerGridY + 3; row++) {
      for (let column = playerGridX - 1; column <= playerGridX + 1; column++) {
        if (row >= 0 && column >= 0 && row < map.length) {
          if (map[row][column] === 2) {
            physicsCollision(player, (column) * unit, canvasHeight - (unit * (map.length - row)), unit, unit)
          }
        }
        //print(row + ", " + column + ", " + map[row][column])
      }
    }
    player.update();
    
  }

  outro () {
    
  }
}