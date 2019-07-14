function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  background(0, 0, 0, 0);
  let min = minute();
  let hr = hour();
  let sec = second();
  let arcHeight = windowHeight / 2;
  let arcWidth = windowWidth / 2;

  let arc1 = windowHeight / 2.4;
  let arc2 = windowHeight / 2.75;
  let arc3 = windowHeight / 3.4;

  strokeWeight(windowHeight / 100);
  stroke(26, 215, 234);
  noFill();
  let endOne = map(sec, 0, 60, 0, 360) + 270;
  arc(arcWidth, arcHeight, arc1, arc1, 270, endOne);
  // print(endOne);

  if (endOne > 624 || endOne < 276) {
    arc(arcWidth, arcHeight, arc1, arc1, 270, 629);
  }

  strokeWeight(windowHeight / 60);
  stroke(255, 0, 0);
  noFill();
  let endTwo = map(min, 0, 60, 0, 360) + 270;
  arc(arcWidth, arcHeight, arc2, arc2, 270, endTwo)

  strokeWeight(windowHeight / 40);
  stroke(0, 255, 90);
  noFill();
  let endThree = map(hr % 12, 0, 12, 0, 360) + 270;
  arc(arcWidth, arcHeight, arc3, arc3, 270, endThree);
}
