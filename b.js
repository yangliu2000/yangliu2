function setup() {
  createCanvas(300, 300);
  background(50);
}

function draw() {
  //cloud
  var a;
  var b;
  var c;
  smooth();
  beginShape();
 a=mouseX;
 b=mouseY;
 c=(mouseX+mouseY)/2;
fill(a, b, c);
vertex(50, 180);
bezierVertex(50, 150, 80, 120, 132, 150);
bezierVertex(150, 115, 210, 135, 200, 160);
bezierVertex(270, 175, 230, 235, 170, 220);
bezierVertex(170, 250, 80, 255, 70, 220);
bezierVertex(20, 240, 25, 170, 50, 180);
endShape();
//moon
fill(255-a, 135-b, 255-c);
beginShape();
vertex(130, 60);
bezierVertex(250, 70, 210, 200, 130, 200);
bezierVertex(150, 190, 200, 115, 130, 60);
endShape();
}
