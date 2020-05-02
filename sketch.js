let angle = 0;
let img;
let img2;
let img3;
let cam;

function preload() {
  img = loadImage("Kik.jpg");
  img2 = loadImage("Kik2.jpg");
  img3 = loadImage("Kik3.jpg");
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
  rotateY(angle * 0.5);
  //rotateZ(angle);

  texture(img);
  sphere(200);
  texture(img2);
  translate(0, 160);
  plane(2000, 2000);

  pop();

  angle += 0.05;

}