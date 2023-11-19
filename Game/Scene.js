// @Author - Justin

class Scene {
  constructor () {}

  intro () {
    
  }

  playing () {
    
    player.display();

    blocks.forEach(block =>
      block.display()
    );

    for (let i = 0; i < coins.length; ++i) {
      coins[i].display();
      if (collides(player, coins[i])) {
        coins.splice(i, 1);
        --i;
        player.score++;
      } 
    }

    // Zombie Logic
    for (let i = 0; i < zombies.length; ++i) {
      zombies[i].display();

      let zombieGridX = Math.floor((zombies[i].getX() + zombies[i].getWidth() * 0.5) / unit);
      let zombieGridY = map[currentLevel].length - Math.ceil((canvasHeight - zombies[i].getY() - 2) / unit);

      // Flip zombie and change direction if it hits a block
      if (zombies[i].isRight && (map[currentLevel][zombieGridY][zombieGridX+1] === 2 || map[currentLevel][zombieGridY+1][zombieGridX] !== 2)) {
        zombies[i].isRight = false;
        zombies[i].velocity.x = -zombies[i].velocity.x;
      } else if (!zombies[i].isRight && (map[currentLevel][zombieGridY][zombieGridX-1] === 2 || map[currentLevel][zombieGridY+1][zombieGridX] !== 2)) {
        zombies[i].isRight = true;
        zombies[i].velocity.x = -zombies[i].velocity.x;
      }

      if (!godModeCheckBox.checked() && collides(player, zombies[i]) ) {
        //Do this instead of function because it must happen at end of main loop or bad things happen 😔
        reset = true;
      } 
    }

    let playerGridX = Math.floor((player.getX() + player.getWidth() * 0.5) / unit);
    let playerGridY = map[currentLevel].length - Math.ceil((canvasHeight - player.getY()) / unit);

    //Block based collision detection for player
    for (let row = playerGridY - 1; row <= playerGridY + 3; row++) {
      for (let column = playerGridX - 1; column <= playerGridX + 1; column++) {
        if (row >= 0 && column >= 0 && row < map[currentLevel].length) {
          if (map[currentLevel][row][column] === 2) {
            physicsCollision(player, (column) * unit, canvasHeight - (unit * (map[currentLevel].length - row)), unit, unit)
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