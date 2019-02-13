function setup () {
    var cnv= createCanvas(710,400);
    cnv.parent('content');
//    img=loadImage('IMG_7954.jpg');
}

function draw(){
    background(119,119,119);
//    Image(img,0,,0,width,height);
    translate(width/2,height/2);
    fill(255,200,160);
    ellipse(0,0,100,140);
    fill(255);
    push();
    translate(-20,-15);
    ellipse(0,0,15,10);
    fill(0);
    ellipse(0,0,8,8);
    pop();
    push();
    translate(20,-15);
    ellipse(0,0,15,10);
    fill(0);
    ellipse(0,0,8,8);
    pop();
    translate(1,-1);
    ellipse(0,0,8,10);
    push();
    pop();
    translate(-300,-150);
   curve(285,130,290,175,310,175,315,130);
    pop();
    push();
    translate(-55,-70);
    fill('#483D8B');
  arc(width/2, height/2, 100, 100, PI+.3, -.4, OPEN);
    pop();
    push();
    translate(190,90);
    strokeWeight(3);
    line(30, 26, 155, 20);
    pop();
    translate(247,146);
        fill(255,200,160);
    ellipse(0,0,16,25);
   
    pop();
    push();
     translate(104,-1);
        fill(255,200,160);
    ellipse(0,0,16,25);
    
    pop();
    ppush();
    

   


}