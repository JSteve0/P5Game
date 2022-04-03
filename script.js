//Frostbyt3 Game

//Vars
keys = [];

let s;

//Setup objects, window, and vars
function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Sprite(1, 1, 50, 50);
}

function draw() {
  background('black');
  stroke('red');
  fill('red')
  s.display();
}