
import processing.serial.*;

Serial myPort;

int potState;
int potState2;


int buttonState;

int[] inputVars = {0, 0, 0, 0};

PImage img;
int cx = 100;
int cy = 100;
int cx2=50;
int cy2=50;
int cx3=20;
int cy3=20;
int  r,g,b;



void setup () {
    background(r,g,b);

    size(720,400);
   //cnv.parent('');
    img =loadImage("image/Untitled-1.png");
   
   noStroke(); 
    
   
    
   println(Serial.list()); //print serial devices (remember to count from 0)

  myPort = new Serial(this, Serial.list()[0], 9600);
  //make sure the baudrate matches arduino

  myPort.bufferUntil('\n'); // don't generate a serialEvent() unless you get a newline character
    
}

void draw(){
  int potMotion = int(map(inputVars[0], 0, 1023, 0, height));
  
   int potMotion2 = int(map(inputVars[1], 0, 1023, 0, width));
 
    //println(inputVars);
    push();
    //background(r,g,b,10);
    background(129,24,7);
    if (inputVars[2] == 1)//1 is second because acount as 0
  {
    println("test");
    fill(color(int(random(255)),int(random(255)),int(random(255))));
    r=int(random(255));
   b= int(random(255));
   g =int(random(255));

  }

  else{

    fill(255);//buttomm not push random is white

  }
    translate(potMotion2, potMotion);
    //rect(0,0,map(inputVars[0], 0, 1023, 0, width), map(inputVars[0], 0, 1023, 0, width));
    translate(200,-205);
    
    image(img, 10, height / 2, img.width / 2, img.height / 2);
   pop();
    
   
    translate(potMotion2, potMotion);
   push();
    translate(-81,-100);
    
   fill(r,g,b,900);
   //fill(129,24,7);
   
   
  arc(width/3, height/2, cx, cy, PI, 1.8*PI);

    translate(81,1);
    
    
    arc(width/3, height/2, cx, cy, 1.2*PI ,2*PI);
    
    beginShape();
    noStroke();
    
    translate(110,162);
    
    fill(r,g,b,900);
    //fill(129,24,7);
    
vertex(89,8);
vertex(179, 38.8);
vertex(85, 110);
vertex(-2, 37.5);
   endShape(CLOSE);
    pop();
    
   push();
   
     translate(50,-40);
     
   fill(r,g,b,900);
  //fill(129,24,7);
  arc(width/3, height/2, cx2, cy2, PI, 1.8*PI);
    pop();
 
    ;
    translate(90,-40);
    
     fill(r,g,b,900);
     //fill(129,24,7);
     
    arc(width/3, height/2, cx2, cy2, 1.2*PI ,2*PI);

    push();
     beginShape();
    noStroke();
   
    translate(130,178);
   
    fill(r,g,b,900);
    //fill(129,24,7);
vertex(89,8);
vertex(135.9, 19.6);
vertex(89, 80);
vertex(44.8,20.7);
   endShape(CLOSE);
    pop();
    
    push();
   
    translate(20,40);
   
   fill(r,g,b,900);
   //fill(129,24,7);

  arc(width/3, height/2, cx3, cy3, PI, 1.8*PI);
   pop();
    
   push();
   
    translate(35,40);
    
     fill(r,g,b,900);
     //fill(129,24,7);
     
    arc(width/3, height/2, cx3, cy3, 1.2*PI ,2*PI);
    pop();
    
    push();
    beginShape();
    noStroke();
    //translate(potMotion, potMotion);
    translate(178,225);
    fill(r,g,b,900);
    //fill(129,24,7);
    
vertex(89,8);
vertex(107, 14.7);
vertex(89, 40);
vertex(72,14);
   endShape(CLOSE);
    pop();
    
    
}

void serialEvent (Serial myPort) {

  String inString = myPort.readStringUntil('\n'); //read until new line (Serial.println on Arduino)

  if (inString != null)//means instring is not know is not there
  {

    inString = trim(inString); // trim off whitespace

    inputVars = int(split(inString, '&')); // break string into an array and change strings to ints 

}
}
