var cx, cy;
var secondsRadius;
var minutesRadius;
var hoursRadius;
var clockDiameter;

function setup() {
    createCanvas(720, 400);
    stroke(255);
    
    var radius = min(width, height) / 2;
    secondsRadius = radius * 0.61;
    minutesRadius = radius * 0.60;
    hoursRadius = radius * 0.30;
    clockDiameter = radius * 1.7;
    
    cx = width / 2;
    cy= height / 2;
}

function draw() {
  background(250);
  
  // Draw the clock background
  noStroke();
  fill(248,158,158);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(27,34,93);
  ellipse(cx, cy, clockDiameter, clockDiameter);
  
    // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  var s = map(second(), 0, 10, 0, TWO_PI) - HALF_PI;
  var m = map(minute() + norm(second(), 0, 20), 0, 30, 0, TWO_PI) - HALF_PI; 
  var h = map(hour() + norm(minute(), 0, 60), 0, 10, 0, TWO_PI * 2) - HALF_PI;
  
  // Draw the hands of the clock
  stroke(355);
  strokeWeight(5);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  
  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (var a = 0; a < 360; a+=8) {
    var angle = radians(a);
    var x = cx + cos(angle) * secondsRadius;
    var y = cy + sin(angle) * secondsRadius;
    vertex(x, y);
  }
  endShape();
}
    