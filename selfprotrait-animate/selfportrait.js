function setup () {
    var cnv= createCanvas(710,400);
    cnv.parent('content');
}
function draw(){
    background(119,119,119);
    translate(width/2,height/2);
    fill(255,192,203);
    ellipse(0,0,300,280);
    fill(247, 120, 161);
    ellipse(0,0,90,60);
    fill(255);
    push();
    

    translate(-20,-3);
    fill(255,192,203);
    ellipse(0,0,20,20);
    pop();
    push();
    
    translate(20,-3);
    fill(255,192,203);
    ellipse(0,0,20,20);
    pop(); 
    

    
    
    translate(-50,-50);
    fill(0);
    ellipse(0,0,30,30);
    pop();
    push();
    
    translate(100,-1);
    fill(0);
    ellipse(0,0,30,30);
    fill(0);
    pop();
    
   
    
    translate(-250,-70);
   let x1 = map(mouseX,20, width, 50, 80);
   curve(285,x1,290,175,310,175,315,x1);
    
    pop();
    push();
    
    
    translate(-50,-90);
    fill(247, 120, 161);
    
    triangle(400, 100, 440, 100, 460, 150);
  pop();
    push();
    
    translate(-200,-90);
    fill(247, 120, 161);
    triangle(450, 100, 400, 150, 410, 100);
    pop();
    push();
    

    translate(380,200);
     rotate(45);
    fill(247, 120, 161);
   ellipse(map(mouseX,0,width,-4,4),0,68,58);
    translate(-9,3);
    stroke(0);
    fill(255,192,203);
    arc(map(mouseX,0,width,-4,4),0, 50, 50,  HALF_PI,2*PI/2);
    
    pop();
   
    push();
    translate(220,200);
     rotate(100);
    fill(247, 120, 161);
    ellipse(map(mouseX,0,width,4,-4),0,68,58);
    translate(9,3);
    fill(255,192,203);
    arc(map(mouseX,0,width,4,-4),0, 50, 50,0,PI/2);
    translate(200,-150);
    fill(247, 120, 161);
    arc(map(mouseX,0,width,4,-5),0,60,60,PI,4*PI/3,open);
    translate(6,-10);
    fill(247, 120, 161);
    arc(map(mouseX,0,width,4,-5),0,50,50,7*PI/6,5*PI/3,open);
    translate(-16,-7);
    fill(247, 120, 161);
     ellipse(map(mouseX,0,width,4,-4),0,20,20);
    pop();
    

    
   
    
}


