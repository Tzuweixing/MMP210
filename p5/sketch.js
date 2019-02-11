
let xspacing = 10; // change distance between each horizontal location
let w; // change width of entire wave
let theta = 0.0; 
let amplitude = 60
.0; // change height of wave
let period = 50.0; // change number of pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave



function setup() {

   createCanvas(1260, 400);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}


    


function draw() {

background(0);
  calcWave();
  renderWave();
}
function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}
function renderWave() {
  noStroke();
  fill(211);
  // change the way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
  }
}
