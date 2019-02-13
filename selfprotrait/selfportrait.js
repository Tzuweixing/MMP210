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
//    fill(0);
//    ellipse(0,0,8,8);
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
   curve(285,130,290,175,310,175,315,130);
    pop();
    push();
    
    translate(-50,-90);
    fill(247, 120, 161);
    triangle(400, 100, 440, 100, 460, 150,);
    pop();
    push();
    
    translate(-200,-90);
    fill(247, 120, 161);
    triangle(450, 100, 400, 150, 410, 100);
    pop();
    
    
//    translate(-80,-150);
//    ellipse(0,0,40,40);
//    pop();
//    push();
//    
//    translate(80,-150);
//    ellipse(0,0,40,40);
//    pop();
//    push();
//      
    
}