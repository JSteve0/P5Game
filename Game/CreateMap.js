// @Author - Justin

//1 = player 
//2 = block
//3 = coin (music note)
//4 = zombie

//height - (unit * (map.length - row))
//unit = 0.04 * windowWidth; for reference, already defined in script

/**
 * Creates and populates the map with sprites based on the level.
 * @param {Number} level - The level number to initialize the map with.
 */
function createMap(level) {
  for (let row = map[level].length - 1; row >= 0; --row) {
    for (let col = 0; col < map[level][row].length; col++) {
      if (map[level][row][col] === 1) {
        player = new Player (
          col * unit, // x
          canvasHeight - (unit * (map[level].length - row)), // y
          1 * unit, // width
          2 * unit, // height
          johnImg, // display images
          0.15 * unit, // dx
          0 // dy
        );
      }
      else if (map[level][row][col] === 2) {
        blocks.push(
          new Sprite(
            col * unit, // x
            canvasHeight - (unit * (map[level].length - row)), // y
            unit, // width
            unit, // height
            blockImg // display image
          )
        );
      }
      else if (map[level][row][col] === 3) {
        coins.push (
          new Sprite (
            col * unit, // x
            canvasHeight - (unit * (map[level].length - row)), // y
            unit, // width
            unit, // height
            coinImg // display image
          )
        );
      }
      else if (map[level][row][col] === 4) {
        zombies.push(
          new Zombie(
            col * unit, // x
            canvasHeight - (unit * (map[level].length - row)) + 1, // y
            1.5 * unit, // width
            1 * unit, // height
            zombieRightImg, // display image
            1, // dx
            0 // dy
          )
        );
      }
      else if (map[level][row][col] === 5) {
        blocks.push(
          new Sprite(
            col * unit, // x
            canvasHeight - (unit * (map[level].length - row)), // y
            2 * unit, // width
            3 * unit, // height
            jukeboxImg // display image
          )
        );
      }
    }
  }
}