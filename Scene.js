
class Scene {
  constructor () {}

  intro () {
    
  }

  playing () {
    
    player.display();
    for (let i = 0; i < blocks.length; ++i) {
      physicsCollision(player, blocks[i])
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
    player.update();
    
  }

  outro () {
    
  }
}