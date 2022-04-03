//Frostbyt3 Game

//Vars

let block = [];

let unit;

let player;

let camera;

let x = 0;
let y = 0;

let blockImage;

let INTRO = 0;
let PLAYING = 1;
let OUTTRO = 2;
let PAUSE = 3;

let gameState = INTRO;

function preload() {
  //Intializes image vars
  blockImage = loadImage('Images/Block.png');
}

//Setup objects, window, and vars
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  unit = 0.04 * windowWidth;
  
  zombie1 = new Zombie(windowWidth * 0.5, windowHeight * 0.5, 0.025 * windowWidth, 0.025 * windowWidth, 0, 0);
  for (let i = 0; i < 10 * (windowWidth / unit); i++) {
    block[i] = new Sprite(i * unit, windowHeight - unit, unit, unit, blockImage);
  }
  
  player = new Player(5 * unit, windowHeight - 2.9 * unit, 1 * unit, 2 * unit, 0.2 * unit);

  camera = new Camera();
}

function draw() {
  translate(camera.getX(), camera.getY());
  background('grey');
  stroke('black');
  fill('red')
  
  //s.display();
  for (let i = 0; i < block.length; i++) {
    block[i].display();
  }

  player.display();
  
  if (gameState == INTRO) {
    
  }
  else if (gameState == PLAYING) {
    
  }
  else if (gameState == OUTTRO) {
    
  }
  else if (gameState == PAUSE) {
    
  }
  else {
    console.log("bug");
  }

  processKeys();
}

