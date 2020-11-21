//keycodes: pink = Enter, blue = Esc, black = a, yellow = 'start' bij arcade, geen idee wat op toetsenbord

//TO DO: comments

var lvl1 = {}
var lvl2 = {}
var lvl3 = {}
var lvl4 = {}
var lvl5 = {}
//levels worden gedefinieerd in levelsSetup()

function setup() {
  bg = loadImage('gamebackground.jpg') //onze prachtige achtergrond!
  createCanvas(900, 600);
  levelsSetup();
  character1 = new character(10); //x
  cloud = new clouds(100, 50, 450, 50, 400, 150, 300, 50, 8);
  cloud2 = new clouds(650, 50, 1000, 50, 950, 150, 850, 50, 8);
  
  lv = 0;
  dead = false;
  won = false;
  
  collectedCoins = 0;
  prevCollected = 0;
  
  levens = 3;
  readyToPlay = false;
  start = false;
}

function levelsSetup(){
  lvl1 = {
    grounds : [new ground(30, 180, 0, 570), //h,w,x,y
             new ground(30, 360, 270, 570),
             new ground(30, 240, 330, 540),
             new ground(30, 120, 390, 510),
             new ground(30, 60, 420, 480),
             new ground(30, 120, 270, 360),
             new ground(30, 120, 510, 360),
             new ground(30, 120, 390, 240),
             new ground(30, 180, 720, 570)],
    coins : [new coin(150,540),new coin(443,210),new coin(800,150)],
    guns: []}
  lvl2 = {
    grounds : [new ground(30, 180, 0, 570), //h,w,x,y
              new ground(30, 90, 150, 450), 
              new ground(30,90,30,360), 
              new ground(30,90,150,270), 
              new ground(30,90,30,180),
              new ground(30,90,150,90),
              new ground(510,60,300,90),
              new ground(30,90,450,120),
              new ground(30,90,360,240),
              new ground(30,90,450,360),
              new ground(30,90,360,480),
              new ground(30,60,420,570),
              new ground(510,60,540,90),
              new ground(390,30,630,210),
              new ground(30,180,720,570),
              new ground(30,30,870,300),
              new ground(30,60,840,430),],
    coins : [new coin(445,540),new coin(50,150),new coin(640,180),new coin(800,90)],
    guns: []}
  lvl3 = {
    grounds : [new ground(30, 180, 0, 570), //h,w,x,y
                    new ground(30, 120, 120, 510),
                    new ground(30, 120, 270, 390),
                    new ground(60, 60, 360, 540),
                    new ground(30, 90, 480, 480),
                    new ground(30, 120, 520, 360),
                    new ground(30, 360, 150, 240),
                    new ground(30, 180, 240, 150),
                    new ground(30, 30, 690, 150),
                    new ground(30, 30, 720, 180),
                    new ground(30, 60, 750, 210),
                    new ground(30, 30, 810, 180),
                    new ground(90, 30, 840, 90),
                    new ground(30, 30, 810, 60),
                    new ground(30, 60, 750, 30),
                    new ground(30, 30, 720, 60),
                    new ground(30, 180, 720, 570)],
    coins : [new coin(385,510), new coin(325,120), new coin(775,180)],
    guns : [new shooter(799,420,2,-10,-15)]}
  lvl4 = {
    grounds : [new ground(30,120,0,570),
              new ground(120,30,180,480),
              new ground(210,30,270,390),
              new ground(300,30,360,300),
              new ground(30,60,420,570),
              new ground(30,60,540,510),
              new ground(30,60,480,390),
              new ground(30,60,600,300),
              new ground(30,120,480,180),
              new ground(30,120,270,120),
              new ground(30,120,90,180),
              new ground(30,120,780,570)], //h,w,x,y
    coins : [new coin(565,480),new coin(355,90), new coin(40,240)],
    guns : [new shooter(799,150,3,-12,-5),new shooter(799,330,1,-6,405)]    
  }
  lvl5 = {
    grounds : [
      new ground(30,120,0,570,false, 2,0,0,900,0,0),
      new ground(30,120,180,350,true,0,2,0,0,350,540),
      new ground(30,120,390,340,false,0,-2,0,0,145,50),
      new ground(30,120,620,480,true,-2,0,390,900,0,0),
      new ground(30,120,780,240,true,2,0,550,900,0,0),
      new ground(30,120,550,120,true,-2,0,550,900,0,0),
      new ground(30,120,780,570,false,0,2,0,0,0,600)
    ],
    coins : [new coin(200, 140), new coin(625,10), new coin(450,450)],
    guns : [new shooter(799,370,3,-12,-5), new shooter(799,90,1,-10,-5)],
  }
}

function draw() { //regelt dat de goede schermen te zien zijn die geen levels zijn (levelReg regelt de levels)
  background(bg);
  if(!dead && !won){
    if(lv==0 && start == false){menu()}
    else if(lv == 0 && start == true){intro()}
    else{
      levelReg();
    }
    
    fill(255);
    stroke(250);
    strokeWeight(1)
    textFont('Monospace')
    textSize(20)
    text('coins: ' + collectedCoins + '   lives: ' + levens,20,25)
  } else if(won == true){win();}
  else {gameOver();}
}

function play(){
  cloud.display();
  cloud2.display();
  displayLevel(currentlevel);
  character1.move(currentlevel.grounds);
}

function resetGame(){ //opnieuw beginnen
  character1.xpos = 10
  character1.ypos = height -30-character1.height
  lv = 1;
  dead = false;
  won = false;
  collectedCoins = 0;
  prevCollected = 0;
  levens = 3;
  readyToPlay = true;
  start = true;
}

function levelReg(){ //houdt bij bij welk level je bent en of je nog een intro wel of niet moet zien, zodat je de goede schermen te zien krijgt
  if(lv == 1){
    currentlevel = lvl1;
    if(!readyToPlay){
      introLevel1();
    } else{play();}
  } else if(lv == 2){
    currentlevel = lvl2;
    readyToPlay = true;
    play();
  } else if(lv == 3){
    currentlevel = lvl3;
    if(!readyToPlay){
      introLevel3();
    } else{play();}
  } else if(lv == 4){
      currentlevel = lvl4;
      readyToPlay = true;
      play();
  } else if(lv == 5){
    currentlevel = lvl5;
    if(!readyToPlay){
      introLevel5();
    } else{play();}
  } else{won = true;}
    
  if(character1.xpos + character1.width >= 890 && character1.ypos > 500 && currentlevel.coins.length == collectedCoins-prevCollected){ //level is compleet!
      lv++;
      character1.xpos = 10
      prevCollected = collectedCoins
      readyToPlay = false;
    } else if(character1.xpos + character1.width >= 890 && character1.ypos > 500){ //we willen meer goud
      fill(255)
      stroke(250)
      strokeWeight(1)
      textFont('Monospace')
      textSize(20)
      text('Collect all',700,475)
      text('coins to',720,500)
      text('complete',720,525)
      text('this level!',700,550)
    }
}

function introLevel1(){
  noStroke()
  fill(251, 218, 247);
  rect(60,60,780,480,50);
  fill(188, 1, 255);
  textFont('Monospace')
  stroke(50);
  strokeWeight(1);
  textSize(35);
  text("LEVEL 1 <3", 350, 140)
  fill(0);
  textSize(25);
  text("Use the joystick to move left and right.", 155, 190)
  text("Move the joystick upwards to jump.", 200, 230)
  text("When you are in the air,", 270, 270)
  text("you can move the joystick downwards", 200, 295)
  text("to accelerate.", 340, 320)
  text("When hit by a bullet, or falling down a ditch,", 120, 360)
  text("you will lose a life. When you have lost all", 130, 385)
  text("three of your lives, you will lose all your", 130, 410)
  text("coins and will have to start all over again.", 125, 435)
  fill(0);
  textSize(20);
  text("-- press the pink button to continue -- ",220,500)
  if(keyIsDown(13)){
    readyToPlay = true;
  }
}

function introLevel3(){
  noStroke()
  fill(251, 218, 247);
  rect(60,60,780,480,50);
  fill(188, 1, 255);  
  textFont('Monospace');
  stroke(50);
  strokeWeight(1);
  textSize(35);
  text("LEVEL 3 <3", 350, 140)
  textSize(25);
  fill(0);
  text("Oh oh! You have encoutered a hunter!", 180, 230)
  text("You must move carefully and avoid the bullets,", 110, 255)
  text("or you will not make it home!", 230, 280)
  text("Remember that when you are in the air,", 210, 350)
  text("you can move the joystick downwards", 200, 375)
  text("to accelerate.", 340, 400)
  fill(0);
  textSize(20);
  text("-- press the pink button to continue -- ",220,500)
  if(keyIsDown(13)){
    readyToPlay = true;
  }
}

function introLevel5(){
  noStroke()
  fill(251, 218, 247);
  rect(60,60,780,480,50);
  fill(188, 1, 255);  
  textFont('Monospace');
  stroke(50);
  strokeWeight(1);
  textSize(35);
  text("LEVEL 5 <3", 350, 140)
  textSize(25);
  fill(0);
  text("Watch out!", 385, 230)
  text("The big cars and boots of the hunters", 180, 255)
  text("have made the earth shake! But if you", 180, 280)
  text("jump precisely, it may just help you get along", 150, 305)
  fill(0);
  textSize(20);
  text("-- press the pink button to continue -- ",220,500)
  if(keyIsDown(13)){
    readyToPlay = true;
  }
}

function intro(){
  noStroke()
  fill(251, 218, 247);
  rect(60,60,780,480,50);
  fill(0);
  textFont('Monospace')
  stroke(50);
  strokeWeight(1);
  textSize(20);
  text('This morning, you went out on a hike through the fields one', 90, 100)
  text('last time before hunting season opens and you and your family', 85, 130)
  text('will be forced to steer clear of all you favorite fields.', 110, 160)
  
  text('But, oh no! When arriving home, you discover a hole in', 125, 210)
  text('the pocket where you keep your golden coins!', 190, 240)
  
  text('You lost all of your money, which you and your family need', 100, 300)
  text('to get through the winter. Your only option is', 170, 330)
  text('to risk your life and get back out on the hunting fields', 100, 360)
  text('to retrieve your lost coins', 240, 390)
  
  text("-- press the black button to continue -- ",200,480)
  if(keyIsDown(65)){
    lv = 1
  }
}

function menu(){
  character1.displayRight()
  noStroke()
  fill(251, 218, 247);
  rect(60,60,780,480,50);
  textFont('Monospace')
  stroke(185,97,169);
  strokeWeight(3)
  textSize(80)
  fill(188, 1, 255); 
  text('Peter Rabbit',165,180);
  text('and',375,248);
  text('the lost coins',145,315);
  stroke(50);
  fill(0);
  strokeWeight(1);
  textSize(20);
  text('programmed by Femke Wenneker',80,480);
  text('designed by Zazi Nieuwenhuijs',80, 510);
  text("-- press the pink button to start the game --",180,420);
  if(keyIsDown(13)){
    start = true;
  }
}

function win(){ //:)
  noStroke()
  fill(251, 218, 247);
  rect(60,60,780,480,50);
  fill(188, 1, 255); 
  textFont('Monospace')
  stroke(50);
  strokeWeight(1);
  textSize(80);
  text('YOU WON!◕‿◕', 170, 170)
  strokeWeight(1)
  fill(0)
  textSize(20)
  text("Good job! You have retrieved all your coins and have", 140, 240)
  text("made it back home safely! Now you and your family ", 160, 265)
  text("will be able to make ends meet this winter, and you", 150, 290)
  text("will have plenty of food and blankets to have a", 170, 315)
  text("wonderfull Christmas!", 340, 340)
  text("-- press the pink button to try again --",205,420)
  text("-- press the black button to return to the main menu --", 130,450)
  text("-- to exit the game entirely, press", 245,480)
  text("the blue and the yellow button simultaneously --", 175, 500)
  if(keyIsDown(13)){
    resetGame()
  }
  if(keyIsDown(65)){
    setup()
  }
}

function gameOver(){ //:(
  noStroke()
  fill(251, 218, 247)
  rect(60,60,780,480,50)
  fill(188, 1, 255); 
  textFont('Monospace')
  stroke(50);
  strokeWeight(1);
  textSize(80);
  text('GAME OVER ಥ_ಥ',120,200);
  fill(0)
  textSize(30);
  strokeWeight(1)
  text('coins collected: ' + collectedCoins,230,270)
  text('levels completed: ' + (lv - 1),212,300)
  textSize(20);
  text("-- press the pink button to try again --",205,400)
  text("-- press the black button to return to the main menu --", 130,440)
  text("-- to exit the game entirely, press", 245,480)
  text("the blue and the yellow button simultaneously --", 175, 500)
  if(keyIsDown(13)){
    resetGame()
  }
  if(keyIsDown(65)){
    setup()
  }
}

function displayLevel(level){
  var c; var g; var u;
  var co = level.coins.length;
  var gr = level.grounds.length;
  var gu = level.guns.length;
    for(c = 0; c < co; c++){
      level.coin = level.coins[c];
      level.coin.display()
      level.coin.pickUpLine(character1)
    }
    for(g = 0; g < gr; g++){
      level.ground = level.grounds[g];
      level.ground.display();
    }
    for(u = 0; u < gu; u++){
      level.gun = level.guns[u];
      level.gun.display();
    }
  }