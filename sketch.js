/***********************************************************************************
	Mood States
	by Sherry Lam

	Overview:
  This is a series of mood drawings with a splash and instructions page.

------------------------------------------------------------------------------------
	Notes:



***********************************************************************************/

// Array of images
var images = [];

// Array of strings
var strings = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

var lineHeight;

var size = 32;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/one.png');
  images[1] = loadImage('assets/two.png');
  images[2] = loadImage('assets/three.png');
  images[3] = loadImage('assets/four.png');
  images[4] = loadImage('assets/five.png');
  images[5] = loadImage('assets/splash.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(size);
  textFont("Fredoka One");

  // set to one for startup
  drawFunction = drawSplash;

  loadStringArray();
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(186, 219, 209);

  if ((keyIsPressed) && (keyCode === 32)) {
    textSize(size * 4);
    lineHeight = 150;
  }
  else {
    textSize(size);
    lineHeight = 50;
  }

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawSplash() will draw the image at index 5 from the array
drawSplash = function() {
  text("Welcome to Sherry's Mood Drawings!!!", width/2, 150);
  image(images[5], width/2, height/2);
  text("Click anywhere to get to the next page", width/2, height - 150);
}

//-- drawInstruction() will draw the text from the string array
drawInstruction = function() {
  fill(0);
  for( let i = 0 ; i < strings.length; i++) {
      text( strings[i], width/2, 200 + (i * lineHeight) )
  }
}

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
  image(images[0], width/2, height/2);

  fill(94,62,22);
  text("H U N G R Y", width - mouseX, height - mouseY);

  instruction();
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
  image(images[1], width/2, height/2);

  fill(3, 35, 40);
  text("L A Z Y", width - mouseX, height - mouseY);

  instruction();
}

//-- drawOne() will draw the image at index 2 from the array
drawThree = function() {
  image(images[2], width/2, height/2);

  fill(207, 120, 6);
  text("S I L L Y", width - mouseX, height - mouseY);

  instruction();
}

//-- drawOne() will draw the image at index 3 from the array
drawFour = function() {
  image(images[3], width/2, height/2);

  fill(105, 100, 93);
  text("N E R V O U S", width - mouseX, height - mouseY);

  instruction();
}

//-- drawOne() will draw the image at index 4 from the array
drawFive = function() {
  image(images[4], width/2, height/2);

  fill(60);
  text("C O O L", width - mouseX, height - mouseY);

  instruction();
}


//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( drawFunction === drawSplash ) {
    return;
  }

  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }

  else if( key === 's' ) {
    drawFunction = drawSplash;
  }

  else if( key === 'i' ) {
    drawFunction = drawInstruction;
  }
}

function mousePressed() {
  // change state if we are in splash screen and instruction page
  if( drawFunction === drawSplash ) {
    drawFunction = drawInstruction;
  }
  else if( drawFunction === drawInstruction ) {
    drawFunction = drawOne;
  }
}

function loadStringArray() {
  strings[0] = "Instructions";
  strings[1] = "-------------";
  strings[2] = "Press any number [1]-[5] to see my mood drawings.";
  strings[3] = "Press [s] to go back to the splash page.";
  strings[4] = "Press [i] to go back to this instruction page.";
  strings[5] = "Press [SPACE] to make the text large.";
}

function instruction() {
  textSize(24);
  text("Press [i] to go back to instruction page.", width - 300, 50);
}