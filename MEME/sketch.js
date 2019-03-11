//let bg;

let img;
let cx = 100;
let cy = 100;
let cx2=50;
let cy2=50;
let cx3=20;
let cy3=20;
let r, g, b;
function setup () {
    background(255);
//    bg = loadImage('image/102635.jpg');
   var cnv = createCanvas(720,400);
   cnv.parent('content');
    img =loadImage('image/Untitled-1.png');
   
   noStroke(); 
    noFill();
    r= random(225);
    g=random(225);
    b=random(225);
    
}
function draw(){
    
    push();
    background(r,g,b,10);
    translate(200,-200);
    let x1 = map(mouseX,20, width, 50, 80);
    image(img, x1, height / 2, img.width / 2, img.height / 2);
   pop();
    
    push();
  
    translate(-81,-100);
   fill(r,g,b,900);
  arc(width/3, height/2, cx, cy, PI, 1.8*PI);
    translate(81,1);
    
    arc(width/3, height/2, cx, cy, 1.2*PI ,2*PI);
    
    beginShape();
    noStroke();
    translate(110,162);
    fill(r,g,b,900);
vertex(89,8);
vertex(179, 38.8);
vertex(85, 110);
vertex(-2, 37.5);
   endShape(CLOSE);
    pop();
    
    push();
     translate(50,-40);
   fill(r,g,b,900);
  arc(width/3, height/2, cx2, cy2, PI, 1.8*PI);
    pop();
    
    translate(90,-40);
     fill(r,g,b,900);
    arc(width/3, height/2, cx2, cy2, 1.2*PI ,2*PI);
    
    push();
     beginShape();
    noStroke();
    translate(130,178);
    fill(r,g,b,900);
vertex(89,8);
vertex(135.9, 19.6);
vertex(89, 80);
vertex(44.8,20.7);
   endShape(CLOSE);
    pop();
    
    push();
    translate(20,40);
   fill(r,g,b,900);
  arc(width/3, height/2, cx3, cy3, PI, 1.8*PI);
    pop();
    
    push();
    translate(35,40);
     fill(r,g,b,900);
    arc(width/3, height/2, cx3, cy3, 1.2*PI ,2*PI);
    pop();
    
    push();
    beginShape();
    noStroke();
    translate(178,225);
    fill(r,g,b,900);
vertex(89,8);
vertex(107, 14.7);
vertex(89, 40);
vertex(72,14);
   endShape(CLOSE);
    pop();
}
function mousePressed(){
    let d = dist(mouseX,mouseY, 360,200);
    if(d<100);{
        r= random(225);
    g=random(225);
    b=random(225);
    }
}
//    function keyPressed() {
//  var keyIndex = -1;
//  if (key >= 'a' && key <= 'z') {
//    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
//  }
//  if (keyIndex == -1) {
//    // If it's not a letter key, clear the screen
//    background(img);
//  } else { 
//   
//    if(key=='a'){
//        fill(255,0,0);
//    }
//    else{
//        fill(255,255,255,0);
//        background(img);
//    }
//      if(key=='b'){
//          fill(247, 120, 161);
//          
//      }
//      else{
//         fill(255,255,255,0);
//        background(img);
//      }
//  }
//}
//   
