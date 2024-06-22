let foto1;
let foto2;
let foto3;
let foto4;
let foto5;
let font;
function preload(){
  foto1 = loadImage("logo.png")
  foto2 = loadImage("gabriele.jpg")
  foto3 = loadImage("matti.jpg")
  foto4 = loadImage("francesco 5.jpg")
  foto5 = loadImage("davide 7.jpg")
  font = loadFont("BAUHS93.TTF")
}

let mic;
function setup() {
  createCanvas(400,400);
  mic = new p5.AudioIn();
  mic.start();
  rectMode(CENTER);
  angleMode(DEGREES);
  frameRate(10);
}

function draw() {
  background(0);
  
  let d = dist(mouseX,mouseY,width/2,height/2) //距离
  let s = (400-0.1*d)/400 //和距离比例，越远，越小
  let a = map(d,0,400,1,0.8) //1-0.9是映射范围：既d的值，即鼠标到眼球中心的距离
      // map是映射，即等比例放缩，有一一对应的点,值越小，放缩越大
  let offsetX = map(mouseX,0,width,-10,10)
  let offsetY = map(mouseY,0,height,-10,10)
  let c = width*0.002

 push()
 //左上眼球
 let cer1_x = width/5
 let cer1_y = height/4
 //背景
 push()
  noFill()
  stroke(160,216,239)
  strokeWeight(2)
  translate(cer1_x,cer1_y)
  rotate(frameCount*10)
  rect(0,0,100*c)
  rotate(-2*frameCount*10)
  rect(0,0,80*c)
 pop()
  // 眼白
  noStroke()
  fill(255,179,186)
  ellipse(cer1_x,cer1_y,100*a*c)
  // 眼球
  fill(0)
  ellipse(cer1_x+offsetX,cer1_y+offsetY,30*c,30*a*c)
  //闭眼
  if(mouseIsPressed){
    fill(122,65,113)
    ellipse(cer1_x,cer1_y,100*a*c)
  }

  //中间眼球
  let cer2_x = width/2
  let cer2_y = height-height/5
  //背景
 push()
  noFill()
  stroke(208,217,103)
  strokeWeight(2)
  translate(cer2_x,cer2_y)
  rotate(frameCount*10)
  rect(0,0,100*c)
  rotate(-2*frameCount*10)
  rect(0,0,80*c)
 pop()
   // 眼白
   noStroke()
   fill(160,216,239)
   ellipse(cer2_x,cer2_y,100*a*c)
   // 眼球
   fill(0)
   ellipse(cer2_x+offsetX,cer2_y+offsetY,30*c,30*a*c)
   //闭眼
   if(mouseIsPressed){
     fill(122,65,113)
     ellipse(cer2_x,cer2_y,100*a*c)
   }

 //右上眼球
 let cer3_x = width-width/5
 let cer3_y = height/4
 //背景
 push()
  noFill()
  stroke(255,179,186)
  strokeWeight(2)
  translate(cer3_x,cer3_y)
  rotate(frameCount*10)
  rect(0,0,100*c)
  rotate(-2*frameCount*10)
  rect(0,0,80*c)
 pop()
  // 眼白
  noStroke()
  fill(208,217,103)
  ellipse(cer3_x,cer3_y,100*a*c)
  // 眼球
  fill(0)
  ellipse(cer3_x+offsetX,cer3_y+offsetY,30*c,30*a*c)
  //闭眼
  if(mouseIsPressed){
    fill(122,65,113)
    ellipse(cer3_x,cer3_y,100*a*c)
  }
pop()

//------------------------------------------------------------------------

  //文字
  push()
  let testo = "LIMES"
  let testo_x = width/2
  let testo_y = height/2
  let testo_size = 100*width*0.002
  fill(255,234,0)
  
  textSize(testo_size)
  textAlign(CENTER)
  textFont(font)
  //text(testo,testo_x,testo_y)

  let text_width = textWidth(testo)
  let points = font.textToPoints(
    testo,testo_x,testo_y,testo_size,
    {sampleFactor:0.2}
  )

  translate(-text_width/2,0)
  fill(255,234,0)
  stroke(0)
  strokeWeight(2)
  for (let p of points){
    rectMode(CENTER)
    push()
    translate(p.x,p.y)
    ellipse(0,0,30,20)
    pop()
  }
pop()

//-------------------------------------------------------------------------
  //LOGO
  imageMode(CENTER)
  tint(135,238,248,100*mic.getLevel()*60)
  image(foto1,width/2,height/6,40*width*0.004,40*width*0.004)

  //左边照片
  push()
  frameRate(3)
  imageMode(CENTER)
  noTint()
  let img1 = random([foto2,foto4])
  image(img1,width/5,height-height/5,60*width*0.005,40*width*0.005)
  //if(mouseIsPressed){
  //  image(foto4,width/5,height-height/5,60*width*0.005,40*width*0.005)
  //}
pop()

  //右边照片
  push()
  frameRate(3)
  imageMode(CENTER)
  noTint()
  let img2 = random([foto3,foto5])
  image(img2,width-width/5,height-height/5,60*width*0.005,40*width*0.005)
  //if(mouseIsPressed){
  //  image(foto5,width-width/5,height-height/5,60*width*0.005,40*width*0.005)
  //}
  pop()
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight)
}