var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  scangle = map(hr, 0, 60, 0, 360);
  mnangle = map(mn, 0, 0, 0, 0);
  hrangle = map(hr, 0, 0, 0, 0);

  drawSprites();
}