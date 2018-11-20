function setup() {
  createCanvas(300, 300);
  background(255);
}

function draw() {
  smooth();
  noFill();

  for (var i = 0; i < 75; i++) {
    for (var x = 0; x < 350; x += 75) {
      for (var y = 0; y < 350; y += 75) {
        if (keyPressed == true) {
          stroke(random(255), random(255), 255);
        } else {
          stroke(125, 245, 255);
        }
        strokeWeight(4);
        ellipse(x, y, i, i);
      }
    }
  }
}
