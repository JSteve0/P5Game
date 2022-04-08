//Frostbyt3 Game

//Global vars

let blocks = [];

let unit;

let player;

let camera;

let scene;

let objects = [];

let blockImage;

let INTRO = 0;
let PLAYING = 1;
let OUTRO = 2;
let PAUSE = 3;

let gameState = PLAYING;

function preload() {
  //Intializes image vars
  blockImage = loadImage('Images/Block.png');
}

//Setup objects, window, and vars
function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(60);
  
  unit = 0.04 * windowWidth;
  
  createMap();

  camera = new Camera();
  
  scene = new Scene();
}

function draw() {
  background('grey');
  
  //Update Scene
  translate(camera.getX(), camera.getY());

  player.setFalling(true);
  player.setCollidesRight(false);
  player.setCollidesLeft(false);
  
  //Draw Scene 
  if (gameState === INTRO) {
    intro();
  } else if (gameState === PLAYING) {
    scene.playing();
  } else if (gameState === OUTTRO) {
    outro();
  } else if (gameState === PAUSE) {
    pause();
  }

  //Process keys
  processKeys();
}

