function setup() {
  createCanvas(1536, 663, P2D);
  angleMode(DEGREES);
}

function draw() {
  clear();
  background(0, 0, 0, 0);
  let min = minute();
  let hr = hour();
  let sec = second();
  let arcHeight = height / 2;
  let arcWidth = width / 2;

  strokeWeight(8);
  stroke(26, 215, 234);
  noFill();
  let endOne = map(sec, 0, 60, 0, 360) + 270;
  arc(arcWidth, arcHeight, 300, 300, 270, endOne);

  strokeWeight(13);
  stroke(255, 0, 0);
  noFill();
  let endTwo = map(min, 0, 60, 0, 360) + 270;
  arc(arcWidth, arcHeight, 260, 260, 270, endTwo)

  strokeWeight(20);
  stroke(0, 255, 90);
  noFill();
  let endThree = map(hr % 12, 0, 12, 0, 360) + 270;
  arc(arcWidth, arcHeight, 208, 208, 270, endThree);
}