function intro() {
  
}


function outro() {
  
}

function pause() {
  
}

class Scene {
  constructor () { }

  intro () {
    
  }

  playing () {
    player.display();
    for (let i = 0; i < blocks.length; i++) {
      physicsCollision(player, blocks[i])
      blocks[i].display();
    }
    player.update();
  }

  outro () {
    
  }
}