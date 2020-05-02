let angle = 0;
let img;
let cam;

function preload() {
  img = loadImage("Kik.jpg");
}

function setup() {
  createCanvas(1200, 900, WEBGL);
}



function draw() {

  background(175);

  push();
  rectMode(CENTER);
  noStroke()
  fill(0, 0, 255);

  rotateX(angle);
  //rotateY(angle);
  rotateZ(angle);

  texture(img);
  sphere(200);

  pop();

  //texture(img);
  //translate(0, 160);
  //rotateX(HALF_PI);
  //plane(700, 900);

  angle += 0.05;

}