

var mon;
var mon_img;

var son;
var son_img;
var back
var mother, mother_img;
var flag = false
var flag1 = false
var ranX
var ranY
 
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28

function preload(){
  mother_img = loadImage("mother.png");
  mon_img = loadAnimation("1_mon.png","2_mon.png","3_mon.png");
  son_img = loadAnimation("boy two.png","boy one.png");
  back = loadImage("fig_01.png")
}

function setup() {
  createCanvas(1000,600);
  mother = createSprite(498,255, 50, 50);
  mother.addImage("mother",mother_img);
  mother.scale = 0.17
  mon = createSprite(940,520, 50, 50);
  mon.addAnimation("mon",mon_img);
  mon.scale = 0.6
  frameRate(10)
  son = createSprite(30,150, 20, 20);
  son.addAnimation("son",son_img);
  son.scale = 0.7

 

  a1 = createSprite(10,-90, 10, 370)
  a2 = createSprite(130,210, 350,10 )
  a3 = createSprite(296,155, 10, 130)
  a4 = createSprite(225, 100, 160, 10)
  a5 = createSprite(480, 588,1050, 10)
  a6 = createSprite(992,230, 10, 460)
  a7 = createSprite(530,10, 1050, 10)
  a8 = createSprite(10, 400, 10, 390)
  a9 = createSprite(570,40, 10,370)
  a10 = createSprite(500,215, 150,10)
  a11 = createSprite(430,155, 10, 140)
  a12 = createSprite(780,200, 150, 10)
  a13 = createSprite(708,300, 10, 400)
  a14 = createSprite(780,395, 150, 10)
  //
  a15 = createSprite(498,298, 150,10)
  a16 = createSprite(570,440, 10,290 )
  a17 = createSprite(848,493, 10, 200)
  a18 = createSprite(916,105, 150, 10)
  a19 = createSprite(916, 300,150, 10)
  a20 = createSprite(150,150, 10, 100)
  a21 = createSprite(80,100, 150, 10)
  //a22 = createSprite(10, 400, 10, 390)
  //a23 = createSprite(570,40, 10,370)
  //a24 = createSprite(500,215, 150,10)
  //a25 = createSprite(430,155, 10, 140)
  //a26 = createSprite(780,200, 150, 10)
  //a27 = createSprite(708,300, 10, 400)
  //a28 = createSprite(780,395, 150, 10)
   //son.debug = true
   //mon.debug = true
   //mother.debug = true
   son.setCollider("circle",0,0,40)
   mon.setCollider("rectangle",0,20,50,100)
   mother.setCollider("circle",0,0,200)
  }
function draw() {
  background(back);  //187,63,63
  textSize(20)
  fill("black");
  text(mouseX +","+ mouseY,100,50)
  textSize(30)
  fill("darkblue");
  /*strokeWeight(10)
  stroke("red")
  text("GHOST RUNNER",380,40)*/
  
  a1.shapeColor="black"
  a2.shapeColor="black"
  a3.shapeColor="black"
  a4.shapeColor="black"
  a5.shapeColor="black"
  a6.shapeColor="black"
  a7.shapeColor="black"
  a8.shapeColor="black"
  a8.shapeColor="black"
  a9.shapeColor="black"
  a10.shapeColor="black"
  a11.shapeColor="black"
  a12.shapeColor="black"
  a13.shapeColor="black"
  a14.shapeColor="black"
  a15.shapeColor="black"
  a16.shapeColor="black"
  a17.shapeColor="black"
  a18.shapeColor="black"
  a19.shapeColor="black"
  a20.shapeColor="red"
  a21.shapeColor="red"

  if(keyDown(UP_ARROW)){
      son.y = son.y - 10
  }
  if(keyDown(DOWN_ARROW)){
    son.y = son.y + 10
}
if(keyDown(LEFT_ARROW)){
  son.x = son.x - 10
}
if(keyDown(RIGHT_ARROW)){
  son.x = son.x + 10
}
if(flag===false){
  text("😢",son.x+15,son.y-7)
}
if(son.isTouching(mother)){
  flag = true

}
if(flag===true){
  mother.scale = 0.1
mother.y  =son.y-50
mother.x = son.x
text("😐",son.x+15,son.y-7)
}

if(flag1 === false){
mon.velocityY = -5
}

if(mon.x === 940 && mon.y=== 320 || mon.x === 870 && (mon.y >= 123 && mon.y <= 128 )|| mon.x === 826 && (mon.y >= 28 && mon.y <= 33 )){
  mon.velocityY = 0
  mon.velocityX = -5
}

if(mon.x === 826 && (mon.y >= 218 && mon.y <= 223)){
  mon.velocityY = 0
  mon.velocityX = 5
}

if((mon.x > 590 && mon.x < 620) && (mon.y >= 28 && mon.y <= 33)){
  flag1 = true
  mon.velocityY = 5
  mon.velocityX = 0
}

console.log(mon.x + "," + mon.y)
son.collide(a1);
son.collide(a2);
son.collide(a3);
son.collide(a4);
son.collide(a5);
son.collide(a6);
son.collide(a7);
son.collide(a8);
son.collide(a9);
son.collide(a10);
son.collide(a11);
son.collide(a12);
son.collide(a13);
son.collide(a14);
son.collide(a15);
son.collide(a16);
son.collide(a17);
son.collide(a18);
son.collide(a19);


mon.collide(a1);
mon.collide(a2);
mon.collide(a3);
mon.collide(a4);
mon.collide(a5);
mon.collide(a6);
mon.collide(a7);
mon.collide(a8);
mon.collide(a9);
mon.collide(a10);
mon.collide(a11);
mon.collide(a12);
mon.collide(a13);
mon.collide(a14);
mon.collide(a15);
mon.collide(a16);
mon.collide(a17);
mon.collide(a18);
mon.collide(a19);
mon.collide(a20);
mon.collide(a21);


  drawSprites();
}


  



