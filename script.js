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

let currentLevel = 0;
let numCoins;
let screenText = "";

let levelEditor = false;

function preload() {
  //Intializes image vars
  blockImg = loadImage('Images/block.png');
  coinImg = loadImage('Images/music_note.gif');
  jukeboxImg = loadImage('Images/jukebox_blueDisk.png');
  
  johnImg.set("Idle", loadImage('Images/john_standing.gif'));
  johnImg.set("Run", loadImage('Images/john_run.gif'));
  johnImg.set("Jump", loadImage('Images/john_jump.png'));
  
  //zombieRightImg = loadImage('Images/zombie_right.gif');
  zombieRightImg = loadImage('Images/slime_right.gif');
  //zombieLeftImg = loadImage('Images/zombie_left.gif');

  //slimeImg = loadImage('Images/slime_left.gif');

  backgroundImg = loadImage('Images/background.jpg');

  reset = false;
}

//Setup objects, window, vars, html
function setup() {
  windowXRatio = 16;
  windowYRatio = 8;

  //noCursor();

  let cnv;

  if ((windowYRatio / windowXRatio) * windowWidth > windowHeight) {
    canvasWidth = (windowXRatio / windowYRatio) * windowHeight;
    canvasHeight = windowHeight;
    unit = 0.0325 * canvasWidth;
    cnv = createCanvas(canvasWidth, canvasHeight);
  } else {
    canvasWidth = windowWidth;
    canvasHeight = (windowYRatio / windowXRatio) * windowWidth
    unit = 0.0325 * canvasWidth;
    cnv = createCanvas(canvasWidth, canvasHeight);
  }
  
  frameRate(60);

  if (!levelEditor) {
    //Defined in Map.js
    createMap(currentLevel);
  
    numCoins = coins.length;
  
    frame_Rate = 0;
  
    //Defined in Camera.js
    g_camera = new Camera();
  
    //HTML shit
    let settings = createDiv('').size(0.5 * canvasWidth, 0.5 * canvasHeight).position(0.5 * canvasWidth + cnv.elt.getBoundingClientRect().left, cnv.elt.getBoundingClientRect().top + (0.25 * canvasHeight)).class('popup');
    let settingsSpan = createSpan(
      '<h1 class=\'settings-title\'>Settings'
      + '<hr>')
      .class('popuptext').position(0, 0);
    frameRateCheckBox = createCheckbox('show framerate', false).class('check-box');
    godModeCheckBox = createCheckbox('godmode', false).class('check-box');
    hitBoxesCheckBox = createCheckbox('hitboxes', false).class('check-box');
    settingsSpan.parent(settings);
    settingsSpan.elt.style.visibility = 'hidden';
    frameRateCheckBox.parent(settingsSpan);
    godModeCheckBox.parent(settingsSpan);
    hitBoxesCheckBox.parent(settingsSpan);
    let settingsSpanButton = createSpan('settings').class("material-icons md-48").position(cnv.elt.getBoundingClientRect().left, cnv.elt.getBoundingClientRect().top + canvasHeight - 48);
    print(settingsSpan)
    settingsSpanButton.mouseClicked(function () {
      settingsSpan.elt.style.visibility === 'hidden'
        ? settingsSpan.elt.style.visibility = 'visible'
        : settingsSpan.elt.style.visibility = 'hidden'
    });
  
    //settingsSpan.elt.style.visibility = 'hidden';
  
    //Defined in Scene.js
    scene = new Scene();
    screenText = "Collect all the note blocks to go to the next level";
    setTimeout(function () {
      screenText = ""
    }, 3000);
  } else {
    cameraX = 0;
    cameraY = 0;
    sc = 1;
    map.push([]);
    for (let i = 0; i < 100; i++) {
      map[map.length-1].push([]);
      for (let j = 0; j < 100; j++) {
        map[map.length-1][i][j] = 0;
      }
    }
    window.addEventListener("wheel", function(e) {
      if (e.deltaY > 0) {
        sc *= 0.95;
      } else {
        sc *= 1.05;
      }
    });
    editMode = 2;
  }
}

function draw() {
  background('black');

  if (!levelEditor) {
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
    textFont('Roboto');
    stroke('white');
    strokeWeight(0);
    fill('white')
  
    if (frameRateCheckBox.checked()) {
      if (frameCount % 60 == 0) frame_Rate = frameRate();
      text(Number((frame_Rate).toFixed(2)), 0, size);
    }
  
    text(player.score + "/" + numCoins, canvasWidth - textWidth(player.score + "/" + numCoins) - 0, size);
  
    strokeWeight(0);
    textAlign("center");
    text(screenText, canvasWidth * 0.5, canvasHeight * 0.2);
    
    pop();
  
    if (reset) {
      screenText = "Dont Die";
      resetMap();
      createMap(currentLevel);
      setTimeout(function () {
        screenText = ""
      }, 3000);
      reset = false;
    }
  
    if (player.score === numCoins) {
      resetMap();
      if (currentLevel < map.length - 1) {
        currentLevel++;
      }
      screenText = "Level: " + (currentLevel + 1);
      createMap(currentLevel);
      numCoins = coins.length;
      setTimeout(function () {
        screenText = ""
      }, 3000);
    }
  } else {
    translate(cameraX, cameraY);
    scale(sc);
    rect(0, 0, unit * 100, unit * 100);
    for (let i = 0; i < 100; i++) {
      line(i * unit, 0, i * unit, unit * 100);
    }
    for (let i = 0; i < 100; i++) {
      line(0, i * unit, unit * 100, i * unit);
    }
    for (let i = 0; i < blocks.length; ++i) {
      blocks[i].display();
    }
    for (let i = 0; i < coins.length; ++i) {
      coins[i].display();
    }
    for (let i = 0; i < zombies.length; ++i) {
      zombies[i].display();
    }
    processKeys();
  }
}

function resetMap() {
  player = {};
  blocks = [];
  coins = [];
  zombies = [];
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