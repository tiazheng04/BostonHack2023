
let pX = 125, pY = 125, spd = 7;

function setup(){
    myCanvas = createCanvas(windowWidth-50, windowHeight-50);
    myCanvas.parent('canvas');
    background(0);
    noStroke();
    fill(10);
    rectMode(CENTER);
}


let backgroundImage;

function preload() {
  // Load the image in the preload function
  backgroundImage = loadImage('mapCropped.png');
}

// function setup() {
//     // Use windowWidth and windowHeight to set the canvas size
//     createCanvas(windowWidth, windowHeight);
//   }
  
  
  // Resize the canvas if the window is resized
//   function windowResized() {
//     resizeCanvas(windowWidth-50, windowHeight-50);
//   }

function draw() {
  // Set the loaded image as the background
  background(backgroundImage);

  // Draw a red rectangle at (pX, pY)
  fill('red');
  rect(pX - 10, pY - 10, 20, 20);


    if (keyIsDown(87)) pY -= spd;
    if (keyIsDown(83)) pY += spd;
    if (keyIsDown(65)) pX -= spd; 
    if (keyIsDown(68)) pX += spd;
    // if (keyIsDown(122)) toggleFullscreen();
        console.log("f11 pressed");

    if (pY > windowHeight-50) pY = windowHeight-50;
    if (pX > windowWidth-50) pX = windowWidth-50;
    if (pY < 20) pY = 20;
    if (pX < 20) pX = 20;

}


// document.addEventListener('keydown', function (event) {
//     // Check if the pressed key is F11 (key code 122)
//     if (event.key === 'F11' || event.keyCode === 122 || event.which === 122) {
//       toggleFullscreen();
//     }
//   });



function keyPressed() {
    if (keyCode===122) {
        console.log("test")

    document.getElementById('defaultCanvas0').style.width = "100vw";
    document.getElementById('defaultCanvas0').style.height = "100vh";

    }
  }

