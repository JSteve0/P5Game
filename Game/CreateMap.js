// @Author - Justin

//1 = player 
//2 = block
//3 = coin (music note)
//4 = zombie

//height - (unit * (map.length - row))
//unit = 0.04 * windowWidth; for reference, already defined in script

function createMap() {
  for (let row = map.length - 1; row >= 0; --row) {
    for (let col = 0; col < map[row].length; col++) {
      if (map[row][col] === 1) {
        player = new Player (
          col * unit, // x
          canvasHeight - (unit * (map.length - row)), // y
          1 * unit, // width
          2 * unit, // height
          johnImg, // display images
          0.15 * unit, // dx
          0 // dy
        );
      }
      else if (map[row][col] === 2) {
        blocks.push(
          new Sprite(
            col * unit, // x
            canvasHeight - (unit * (map.length - row)), // y
            unit, // width
            unit, // height
            blockImg // display image
          )
        );
      }
      else if (map[row][col] === 3) {
        coins.push (
          new Sprite (
            col * unit, // x
            canvasHeight - (unit * (map.length - row)), // y
            unit, // width 
            unit, // height
            coinImg // display image
          )
        );
      }
      else if (map[row][col] === 4) {
        zombies.push(
          new Zombie(
            col * unit, // x
            canvasHeight - (unit * (map.length - row)), // y
            unit, // width
            2 * unit, // height
            zombieRightImg, // display image
            1, // dx 
            0 // dy
          )
        );
      }
    }
  }
}