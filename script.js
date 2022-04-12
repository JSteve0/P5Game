//Frostbyt3 Game

//Global vars

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

  frame_Rate = 0;

  //Defined in Camera.js
  g_camera = new Camera();

  //Defined in scene.js
  scene = new Scene();
}

function draw() {
  background('grey');

  //Diplay frameRate and update every second
  push()
  translate(0, 0);
  if (frameCount % 60 == 0) frame_Rate = frameRate();
  text(Number((frame_Rate).toFixed(2)), 0, 10);
  pop()
  
  //Update Scene

  g_camera.update(player.getY())
  
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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}