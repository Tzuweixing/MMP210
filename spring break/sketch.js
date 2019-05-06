let chosen;
let rectWidth;
let img;
let img1;
let  img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let video;
let playing = false;


function setup() {
    var cnv= createCanvas(910,800);
    cnv.parent('content');
  createCanvas(800, 800);
  noStroke();
  background(230);
    img=loadImage('image/IMG_2645.jpg');
    img1=loadImage('image/girl boy fireworks.jpg');
    img2=loadImage('image/IMG_20190320_194009.jpg');
    img3=loadImage('image/e27bcd15-a463-4286-8743-1e4d808920a.jpg');
    img4=loadImage('image/flight.jpg');
    video = createVideo(['video/5a94a3297a284842a4705e1785398dbe.mov']);
    video.size(100, 100)
    video.x=0;
    video.y = 0;
    img5=loadImage('image/IMG_0557.jpg');
    img6=loadImage('image/Distracted-Boyfriend.jpg');
    img7=loadImage('image/IMG_20181123_11461.jpg');
   
}

function draw() {
    if (playing){
        image(video, 0,0);
        vidLoad();
    }
    else{video.hide();
        video.pause();}
}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(230);
  } else {
    if(key=='a'){
        fill(0);
        
        image(img, 0 ,0, width, height);
        fill(255,255,255);
        textSize(50);
        text('Girl meet Boy', 10, 50);
        
        //background(img);
    }
//      else{
//          fill(0);
//          
//      }
      else if(key=='b'){
          fill(0);
          image(img1, 0 ,0, width, height);
           fill(255,255,255);
        textSize(50);
        text('Girl Falls In Love', 10, 50);
      }
//      else{
//          fill(0);
//          //background(img1);
//      }
      else if(key=='c'){
          fill(0);
          image(img2, 0 ,0, width, height);
          
      }
//      else{
//          fill(0);
//          //background(img2);
//      }
      else if(key=='d'){
          fill(0);
          image(img3, 0 ,0, width, height);
      }
//      else{
//          fill(0);
//          //background(img3);
//      }
      else if(key=='e'){
          //fill(0);
              push();
    translate(width/2, height/2);
    rotate(HALF_PI);
    image(img4, -width/2 ,-height/2, width, height);
         
    pop();
            fill(255,255,255);
        textSize(50);
        text('Girl Follow Boy To Spain', 10, 50);
      }
//      else{
//          fill(0);
//          //background(img4);
//      }
      else if(key=='g'){
          fill(0);
          image(img5, 0 ,0, width, height);
            fill(255,255,255);
        textSize(50);
        text('They Date In Spain', 10, 50);
      }
//      else{
//          fill(0);
//          //background(img5);
//      }
      else if(key=='f'){
          fill(0);
          background(255);
          
          playing = true;
      }
//      else{
//          fill(0);
//          //background(img6);
//      }
      else if(key=='h'){
          fill(0);
          image(img6, 0 ,0, width, height);
            fill(0);
        textSize(50);
        text('Boy Does Not Love Girl', 10, 50);
//          playing = 
      }
      else if(key=='i'){
          fill(0);
          image(img7,0,0, width, height);
            fill(255,255,255);
        textSize(50);
        text('Girl Heart Broken', 10, 50);
      }
      else{
          fill(0);

          //background(img7);
      }
      if (key != 'f'){
          playing = false;
          video.stop();
          console.log("pause");
      }
  }
}

function vidLoad() {
  video.loop();
  video.volume(0);
}
