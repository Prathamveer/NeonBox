const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    box1 = new Box(820,370,50,50);
    box2 = new Box(910,370,50,50);
    //pig1 = new Pig(810, 350);
    log1 = new Log(830,260,400, PI/2);

    box3 = new Box(770,370,50,50);
    box4 = new Box(870,370,50,50);
   

    //log3 =  new Log(1000,180,300, PI/2);

    box5 = new Box(720,370,50,50);
    box6 = new Box(700,370,50,50);
    box7 = new Box(930,370,50,50);
    box8 = new Box(950,370,50,50);
    box9 = new Box(725,255,50,50);
    box10 = new Box(725,255,50,50);
    box11 = new Box(725,210,50,50);
    box12 = new Box(770,210,50,50);
    box13 = new Box(770,210,50,50);
    pig4 = new Pig(770,210);
    
    box15 = new Box(900,210,50,50);
    box16 = new Box(900,210,50,50);
    box17 = new Box(900,210,50,50);
    box18 = new Box(950,255,50,50);
    box19 = new Box(950,255,50,50);
    box20 = new Box(950,255,50,50);
    //pig3=new Pig();
    //log4 = new Log(920,180,250, PI/7);
    //log5 = new Log(100,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(background)
        background("black");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

        textSize(28)
        fill("blue")
        text("Hit the triangle to score 200" , 20, 200)

    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    //pig1.display();
    //pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig4.display();
    pig4.score();
    //log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    //box14.display();
    box15.display();
    box16.display(); 
    box17.display(); 
    box18.display();
    box19.display();
    box20.display();
    //log4.display();
    //log5.display();

    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg1.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}