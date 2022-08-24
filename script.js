// Frostbyt3 Game

// @Author - Justin, Kyle

// Global vars

let blocks = [];

let coins = [];

let objects = [];

let zombies = [];

let enemies = new Map();
enemies.set("Zombies", zombies);

//Using map data structure
let johnImg = new Map();

let INTRO = 0;
let PLAYING = 1;
let OUTRO = 2;
let PAUSE = 3;

let gameState = PLAYING;

function preload() {
  //Intializes image vars
  blockImg = loadImage('Images/block.png');
  coinImg = loadImage('Images/music_note.gif');
  
  johnImg.set("Idle", loadImage('Images/john_standing.gif'));
  johnImg.set("Run", loadImage('Images/john_run.gif'));
  johnImg.set("Jump", loadImage('Images/john_jump.png'));
  
  zombieRightImg = loadImage('Images/zombie_right.gif');
  zombieLeftImg = loadImage('Images/zombie_left.gif');

  backgroundImg = loadImage('Images/background.jpg');

  reset = false;
}

//Setup objects, window, and vars
function setup() {
  let windowXRatio = 16;
  let windowYRatio = 8;

  //noCursor();

  if ((windowYRatio / windowXRatio) * windowWidth > windowHeight) {
    canvasWidth = (windowXRatio / windowYRatio) * windowHeight;
    canvasHeight = windowHeight;
    unit = 0.0325 * canvasWidth;
    createCanvas(canvasWidth, canvasHeight);
  } else {
    canvasWidth = windowWidth;
    canvasHeight = (windowYRatio / windowXRatio) * windowWidth
    unit = 0.0325 * canvasWidth;
    createCanvas(canvasWidth, canvasHeight);
  }
  
  frameRate(60);

  //Defined in Map.js
  createMap();

  numCoins = coins.length;

  frame_Rate = 0;

  //Defined in Camera.js
  g_camera = new Camera();

  //Defined in Scene.js
  scene = new Scene();
}

function draw() {
  background('black');
  
  //Update Scene
  push();
  g_camera.update(player.getX(), player.getY());

  push();
  image(backgroundImg, 0, -84.5 * unit, 100 * unit, 99.5 * unit);
  pop();

  player.resetPhysics();
  
  //Draw Scene 
  if (gameState === INTRO) {
    scene.intro();
  } else if (gameState === PLAYING) {
    scene.playing();
  } else if (gameState === OUTTRO) {
    scene.outro();
  } else if (gameState === PAUSE) {
    scene.pause();
  }


  //Process keys, defined in ProcessKeys.js
  processKeys();
  pop();

  //Diplay frameRate and update every second
  push();

  let size = canvasHeight * 0.05;
  textSize(size);
  
  if (frameCount % 60 == 0) frame_Rate = frameRate();
  text(Number((frame_Rate).toFixed(2)), 0, size);

  text(player.score + "/" + numCoins, canvasWidth - textWidth(player.score + "/" + numCoins) - 0, size);
  
  pop();

  if (reset) {
    player = {};
    blocks = [];
    coins = [];
    zombies = [];
    createMap();
    reset = false;
  }
}

function windowResized() {
  if ((windowYRatio / windowXRatio) * windowWidth > windowHeight) {
    canvasWidth = (windowXRatio / windowYRatio) * windowHeight;
    canvasHeight = windowHeight;
    unit = 0.0325 * canvasWidth;
    resizeCanvas(canvasWidth, canvasHeight);
  } else {
    canvasWidth = windowWidth;
    canvasHeight = (windowYRatio / windowXRatio) * windowWidth
    unit = 0.0325 * canvasWidth;
    resizeCanvas(canvasWidth, canvasHeight);
  }
}