
let pX = 125, pY = 125, spd = 10;

function setup(){
    createCanvas(960,540);
    background(0);
    noStroke();
    fill(10);
    rectMode(CENTER);
}

function draw(){
    background(0);
    fill('red');
    rect(pX-10,pY-10,20,20);

    if (keyIsDown(87)) pY -= spd;
    if (keyIsDown(83)) pY += spd;
    if (keyIsDown(65)) pX -= spd; 
    if (keyIsDown(68)) pX += spd;

    if (pY > 535) pY = 535;
    if (pX > 955) pX = 955;
    if (pY < 15) pY = 15;
    if (pX < 15) pX = 15;



}
