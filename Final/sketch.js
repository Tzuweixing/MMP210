let system;
var song, analyzer;
let button;
var amp;
let rms;
let img;
//var n= 0;
var c= 4;
var a;
var r;
var x;
var y;

function preload() {
    soundFormats('mp3');
  song = loadSound('music/Block B - HER.mp3', loaded);
    amp= new p5.Amplitude();
    img= loadImage('image/orange.png');
}

function loaded(){
    button = createButton("play");
    button.mousePressed(togglePlaying);
}

function setup() {
  createCanvas(720, 700);
    angleMode(DEGREES);
    colorMode(HSB);
  system = new ParticleSystem(createVector(width / 2, 30));
    //song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(0);
  system.origin.x = mouseX;
  system.origin.y = mouseY;
  system.addParticle();
  system.run();
    rms = analyzer.getLevel();
    //console.log(rms);
  //fill(127);
  //stroke(0);
    for (let n = 0; n < frameCount;n++){
        console.log(frameCount);
    a =n *137.3;
    r = c *sqrt(n);
    x = r* cos(a) + width/2;
    y= r * sin(a) + height/2;
    fill((a - r) % 255,255,255);
    noStroke();
  ellipse(x,y,100*rms,100*rms);
        //ellipse(x,y, 20,10);
    };

  // Draw an ellipse with size based on volume
    push();
    //image(img, system.origin.x,system.origin.y);
  //ellipse(width / 2, height / 2, map(10 + rms * 200, 10 + rms * 200));
 //arc(50, 50, 80, 80, 0, HALF_PI, CHORD);
    pop();
}

// A simple Particle class
let Particle = function(position) {
    imageMode(CENTER);
    //image(img, system.origin.x,system.origin.y);
  this.acceleration = createVector((width/8-mouseX)/width + random(1),(width/8-mouseY)/height+random(1));
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
    
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(2);
  fill(255, 87, 51, this.lifespan);
    image(img, this.position.x, this.position.y, 10 + rms * 300, 10 + rms * 300);
 // ellipse(this.position.x, this.position.y, 10 + rms * 200, 10 + rms * 200);
   
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
//    console.log(this.origin.x);
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

function togglePlaying(){
    if(!song.isPlaying()){
        song.play();
        song.setVolume(0.3);
   button.html("pause");
        
    }
    else{
        song.stop();
        button.html("play");
    }
}

