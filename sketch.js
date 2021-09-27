var START=0;
var SPACESHIP=1;
var NEXT=2;
var NEXT2=3;
var MISSILE=4;
var PLAYY=5;
var SECONDCHANCE=6;
var THIRDCHANCE=7;
var END=8;
var gameState=START;

var NORMAL=0;
var PLAY=1;
var ALERT=2;
var gameState2=NORMAL;

var NORMAL1=1;
var BULLET1=2;
var BULLET2=3;
var MISSILE1=4;
var MISSILE2=5;
var gameState3=NORMAL1;

var NORMAL2=0;
var ADVANTAGE=1;
var NOMISSILES=2;
var gameState4=NORMAL2;

var NORMAL3=0;
var SMOKE=1;
var gameState5=NORMAL3;

var NORMAL4=0;
var ADVANTAGE2=1;
var gameState6=NORMAL4;

var planeImg,plane;
var spaceImg,space;
var bulletGroup,missileImg;
var obstacle;
var lives,lives2,lives3,livesImg;
var live=0;
var score=0;
var blast;
var score2=0;
var rbd,lbd;
var missile1=10;
var score3=0;
var score4=0;
var score5=0;
var score6=0;

function preload(){
  planeImg=loadAnimation("images/fighterPlane2.jpg");

  plane2Img=loadAnimation("images/fighterPlane.jpg");

  plane1Img=loadImage("images/spaceCraft.png");

  spaceImg=loadImage("images/spaceImg.png");

  missileImg=loadAnimation("images/missile2.png");

  missileImg2=loadAnimation("images/missile.png");

  missile2Img=loadAnimation("images/missiles.png");

  missile3Img=loadAnimation("images/missiles2.png");
  
  obstacleImg=loadAnimation("images/asteroid1.png","images/asteroid2.png","images/asteroid3.png","images/asteroid4.png","images/asteroid5.png","images/asteroid6.png","images/asteroid7.png","images/asteroid8.png","images/asteroid9.png","images/asteroid10.png","images/asteroid11.png","images/asteroid12.png","images/asteroid13.png","images/asteroid14.png")

  livesImg=loadImage("images/lives.png");

  blast=loadSound("sounds/blast sound2.wav");

  rewardImg=loadImage("images/clock.png");

  nextImg=loadImage("images/next.png");

  backImg=loadImage("images/back.png");

  goodJobImg=loadImage("images/goodjob.png");

  wowImg=loadImage("images/wow.png");

  bullets1Img=loadImage("images/box.jpg");

  bgImg=loadImage("images/bg.png");

  AlertImg=loadImage("images/alert.png");

  restartImg=loadImage("images/restart.png");

  alertSound=loadSound("sounds/sound3.wav");

  smokeImg=loadAnimation("images/smoke.png");

  click=loadSound("sounds/click.wav");
}

function setup() {
  createCanvas(850,750);

  rbd=createSprite(10,375,10,750);
  rbd.visible=false;

  lbd=createSprite(845,375,10,750);
  lbd.visible=false;

  space=createSprite(300,-100,10,10);
  space.addImage(spaceImg);
  space.scale=2.2;
  space.velocityY=(8 + 0.2*score/5);

  plane=createSprite(425,900,10,10);
  plane.velocityY=-8;
  plane.addAnimation("running",planeImg);
  plane.scale=0.2;

  invisibleGround=createSprite(375,800,800,5);
  invisibleGround.visible=false;

  select_message=Math.round(random(1,4));

  missile=createSprite(765,50,10,10);
  missile.addAnimation("running",missileImg);
  missile.scale=0.4;
  missile.visible=false;

//write code for making three lives
  lives=createSprite(20,30,10,10);
  lives.addImage(livesImg);
  lives.scale=0.04;

  lives2=createSprite(70,30,10,10);
  lives2.addImage(livesImg);
  lives2.scale=0.04;

  lives3=createSprite(120,30,10,10);
  lives3.addImage(livesImg);
  lives3.scale=0.04;

  restart=createSprite(435,600,10,10);
  restart.addImage(restartImg);
  restart.scale=0.1;
  restart.visible=false;

  next=createSprite(750,650,10,10);
  next.addImage(nextImg);
  next.scale=0.15;
  next.visible=false;

  back=createSprite(100,650,10,10);
  back.addImage(backImg);
  back.scale=0.15;
  back.visible=false;

  goodJob=createSprite(425,375,10,10);
  goodJob.addImage(goodJobImg);
  goodJob.scale=0.2;
  goodJob.visible=false;

  wow=createSprite(425,450,10,10);
  wow.addImage(wowImg);
  wow.scale=0.2;
  wow.visible=false;


  bg=createSprite(175,450,10,10);
  bg.addImage(bgImg);
  bg.scale=1.1;
  bg.visible=false;

  spaceship1=createSprite(225,450,10,10);
  spaceship1.addImage(plane1Img);
  spaceship1.scale=0.2;
  
  spaceship2=createSprite(625,450,10,10);
  spaceship2.addAnimation('running',planeImg);
  spaceship2.scale=0.8;

  missile2=createSprite(225,450,10,10);
  missile2.addAnimation("running",missileImg);
  missile2.scale=2.5;
  missile2.visible=false;
  
  missile3=createSprite(625,450,10,10);
  missile3.addAnimation("running",missile2Img);
  missile3.scale=0.7;
  missile3.visible=false;

  Alert=createSprite(425,300,10,10);
  Alert.addImage(AlertImg);
  Alert.scale=0.4;
  Alert.visible=false;


  bulletGroup=new Group();

  obstacleGroup=new Group();

  rewardGroup=new Group();

  bullets1Group=new Group();

  smokeGroup=new Group();

  live=0;

  score=0;

  score2=0;

}

function draw() {
  background(0);
    score3 = score3 + Math.round(getFrameRate()/60);

  //gameState START
  if(gameState===START){ 
    Alert.visible=false;
    plane.visible=false;
    space.visible=false;
    missile.visible=false;
    back.visible=false;
    spaceship1.visible=false;
    spaceship2.visible=false;
    plane.velocityY=0;
    space.velocityY=0;
    next.visible=true;

    if(mousePressedOver(next)){
      click.play();
      gameState=SPACESHIP;
    }
  }

  //gameState SPACESHIP
  if(gameState===SPACESHIP){  
    Alert.visible=false;
    score2 = score2 + Math.round(getFrameRate()/60);
    spaceship2.addAnimation("running",planeImg);
    bg.visible=false;
    back.visible=false;
    missile2.visible=false;
    missile3.visible=false;
    spaceship1.visible=true;
    spaceship2.visible=true;
    missile.visible=false;
    space.visible=true;
    next.visible=false;

    if(score2>3){
      back.visible=true;
      if(mousePressedOver(back)){
        click.play();
        gameState=START;
      }
    }
  

    if(mousePressedOver(spaceship1)){
      click.play();
      bg.x=225;
      bg.visible=true;
      plane.addAnimation("running",plane1Img);
      plane.scale=0.2;
      plane.setCollider("rectangle",0,0,450,800);
      gameState=NEXT;
    }

    if(mousePressedOver(spaceship2)){
      click.play();
      bg.visible=true;
      bg.x=625;
      plane.addAnimation("running",planeImg);
      plane.scale=0.8;
      plane.setCollider("rectangle",0,0,150,150);
      spaceship2.addAnimation("running",plane2Img);
      gameState=NEXT;
    }
  }

  //gameState NEXT
  if(gameState===NEXT){ 
    Alert.visible=false;
    spaceship1.visible=true;
    spaceship2.visible=true;
    back.visible=true;
    missile.visible=false;
    next.visible=true;

    if(mousePressedOver(back)){
      click.play();
      score2=0;
      gameState=SPACESHIP;
    }

    if(mousePressedOver(next)){
      click.play();
      score2=0;
      gameState=MISSILE;
    }
  }

  if(gameState===MISSILE){  
    Alert.visible=false;    
    missile2.addAnimation("running",missileImg);
    missile3.addAnimation("running",missile2Img);
    score2 = score2 + Math.round(getFrameRate()/60);
    bg.visible=false;
    spaceship1.visible=false;
    spaceship2.visible=false;
    next.visible=false;
    back.visible=false;
    missile.visible=false;
    missile2.visible=true;
    missile3.visible=true;

  if(score2>3){
    back.visible=true;

    if(mousePressedOver(back)){
      click.play();
      score2=0;
      gameState=SPACESHIP;
    }
  }

    if(mousePressedOver(missile2)){
      click.play();
      missile.visible=true;
      missile.addAnimation("running",missileImg);
      missile.scale=1.8;

      score2=0;
      bg.visible=true;
      bg.x=225;
      gameState3=BULLET1;
      missile2.addAnimation("running", missileImg2);
      gameState=NEXT2;
    }

    if(mousePressedOver(missile3)){
      click.play();
      missile.visible=true;
      missile.addAnimation("running",missile2Img);
      missile.scale=0.4;

      score2=0;
      bg.visible=true;
      bg.x=625;
      gameState3=BULLET2;
      missile3.addAnimation("running",missile3Img);
      gameState=NEXT2;
    }
  }

  if(gameState===NEXT2){    
    Alert.visible=false;  
    score2 = score2 + Math.round(getFrameRate()/60);
    missile2.visible=true;
    missile3.visible=true;
    next.visible=true;
    back.visible=false;

  if(score2>3){
    back.visible=true;

    if(mousePressedOver(back)){
      click.play();
      score2=0;
      gameState=MISSILE;
    }
  }

    if(mousePressedOver(next)){
      click.play();
      score2=0;
      missile2.visible=false;
      missile3.visible=false;
      next.visible=false;
      bg.visible=false;
      gameState=PLAYY;
    }
  }

  if(obstacleGroup.isTouching(invisibleGround)){
    live++
    gameState2=NORMAL;
    alertSound.play();
    obstacleGroup.destroyEach();
  }

  if(live===1){
    gameState=SECONDCHANCE;
    live++

  }

  if(gameState===PLAYY){      
    Alert.visible=false;
    back.visible=false;
    restart.visible=false;

if(gameState3===BULLET1){ 
  Alert.visible=false;
  
  if(missile1===0){
    gameState4=NOMISSILES;
     gameState3=MISSILE1;
     
  }
}
 
if(gameState3===BULLET2){ 
  Alert.visible=false;
  
  if(missile1===0){
    gameState4=NOMISSILES;
     gameState3=MISSILE2;
     
  }
}

  if(missile1===3){
    gameState2=ALERT;
  }

    plane.collide(rbd);
    plane.collide(lbd);

    if(rewardGroup.isTouching(plane)){
      score2=0;
      select_message=Math.round(random(1,4));
      gameState4=ADVANTAGE;
    }

    if(bullets1Group.isTouching(plane)){
      score2=0;
      missile1=10;
      select_message=Math.round(random(1,4));
      gameState6=ADVANTAGE2;
    }

    if(live===3){
      gameState=THIRDCHANCE;
      live++

    }

    if(live===5){
      gameState=END;

    }

    plane.visible=true;
    space.visible=true;
    
    plane.velocityY=-8;

     if(plane.y<=660){
    plane.velocityY=0;
  }

  if(space.y>1000){
    space.y=-115;
    space.velocityY=(8 + 0.2*score/5);
  }

  if(keyDown(RIGHT_ARROW)){
    plane.x=plane.x+10;
  }

  if(keyDown(LEFT_ARROW)){
    plane.x=plane.x-10;
  }

  if(bulletGroup.isTouching(obstacleGroup)){
    gameState5=SMOKE;
    score=score+5;
    score3=0;
    bulletGroup.destroyEach();

    blast.play();

  }

  if(gameState5===SMOKE){
    smokeGroup.setVelocityYEach(0);
    smokeGroup.setVisibleEach(true);

    
    if(score3===0){
      smokeGroup.setScaleEach(0.2);
      obstacleGroup.destroyEach();

    }
    else if(score3===1){
      smokeGroup.setScaleEach(0.4);
    }
    else if(score3==24){
      smokeGroup.setScaleEach(0.6);
    }
    else if(score3===3){
      smokeGroup.setScaleEach(0.8);
    }
    else if(score3===4){
      smokeGroup.setScaleEach(0.9);
    }
    else if(score3===8){
      smokeGroup.setScaleEach(1);
      smokeGroup.destroyEach();
      gameState5=NORMAL3;
    }
  }
  
  if(obstacleGroup.isTouching(plane)){
    alertSound.play();
    live++
    gameState2=NORMAL;
    blast.play();
    obstacleGroup.destroyEach();
  }

  obstacleGroup.setVelocityYEach((8 + 0.2*score/5));
  space.velocityY=(8 + 0.2*score/5);


  Obstacle();
  
  bullets();

  Reward();

  if(gameState3===BULLET1){
  if (keyWentDown("space"))
  {
      var temp_bullet = createbullet();
      temp_bullet.addAnimation("running",missileImg);
      temp_bullet.scale=1;
      temp_bullet.y = plane.y-80;
      temp_bullet.x=plane.x;
      temp_bullet.velocityY =-15;
      temp_bullet.lifetime=100;
    
      missile1=missile1-1;
  }
}

if(gameState3===BULLET2){
  if (keyWentDown("space"))
  {
      var temp_bullet = createbullet();
      temp_bullet.addAnimation("running",missile2Img);
      temp_bullet.scale=0.5;
      temp_bullet.y = plane.y-80;
      temp_bullet.x=plane.x;
      temp_bullet.velocityY =-15;
      temp_bullet.lifetime=100;

      missile1=missile1-1;
  }
}

  }
  
  if(gameState4===ADVANTAGE){   

    if(missile1===3){
      gameState2=ALERT;
    }

    obstacleGroup.setVelocityYEach(5);
    smokeGroup.setVelocityYEach(5);
    space.velocityY=8;
    rewardGroup.destroyEach();

    
    if(select_message==1){
      score5 = score5 + Math.round(getFrameRate()/60);
      goodJob.visible=true;
    } 
    else if(select_message==2){
      score5 = score5 + Math.round(getFrameRate()/60);
      wow.visible=true;
    }
    else if(select_message==3){
      score5 = score5 + Math.round(getFrameRate()/60);
    }
    else if(select_message==4){
      score5 = score5 + Math.round(getFrameRate()/60);
    }

    if(score5>=25){
      goodJob.visible=false;
      wow.visible=false;

    }

    if(score5>=300){
      score5=0;
      gameState4=NORMAL2;

    }

    if(missile1===0){
      gameState4=NOMISSILES;
    }
    
    
  }

  if(gameState6===ADVANTAGE2){  


    
  if(gameState3==MISSILE1){
    if(missile1===10){
      gameState3=BULLET1;
    }
  }
    
  if(gameState3===MISSILE2){
    if(missile1===10){
      gameState3=BULLET2;
    }
  }

    if(missile1===3){
      gameState2=ALERT;
    }

    bullets1Group.destroyEach();

    if(select_message==1){
      score6 = score6 + Math.round(getFrameRate()/60);
      goodJob.visible=true;
    } 
    else if(select_message==2){
      score6 = score6 + Math.round(getFrameRate()/60);
      wow.visible=true;
    }
    else if(select_message==3){
      score6 = score6 + Math.round(getFrameRate()/60);
    }
    else if(select_message==4){
      score6 = score6 + Math.round(getFrameRate()/60);
    }
    
      if(score6>=25){
        goodJob.visible=false;
        wow.visible=false;
        score6=0;
        gameState6=NORMAL4;
      }
      
      
    }
  

  if(gameState2===ALERT){
    Alert.visible=true;
    score4 = score4 + Math.round(getFrameRate()/60);

    if(score4===1){
      alertSound.play();

    }


    if(score4===50){
      alertSound.play();

    }
    if(score4===100){
      alertSound.play();

    }
    if(score4===150){
      alertSound.play();

    }
    if(score4===200){
      alertSound.play();

    }
    if(score4===250){
      alertSound.play();

    }
    if(score4===300){
      alertSound.play();

    }
    if(score4===350){
      alertSound.play();

    }
    if(score4===400){
      alertSound.play();

    }
    if(score4===450){
      alertSound.play();

    }

    if(score4===500){
      alertSound.play();

    }
    if(score4===550){
      alertSound.play();

    }
    if(score4===600){
      alertSound.play();

    }

    if(score4===650){
      alertSound.play();

    }

    if(score4===700){
      alertSound.play();

    }

    if(score4===750){
      alertSound.play();

    }

    if(score4===800){
      alertSound.play();

    }

    if(score4===850){
      alertSound.play();

    }

    
    if(score4===10){
      Alert.visible=true;
      alertSound.play();

    }
    
    if(score4>=20){
      Alert.visible=false;
    }
    
    if(score4>=30){
      Alert.visible=true;
    }
    
    if(score4>=40){
      Alert.visible=false;
    }
    
    if(score4>=50){
      Alert.visible=true;
    }
    
    if(score4>=60){
      Alert.visible=false;
    }
    
    if(score4>=70){
      Alert.visible=true;
    }
   
    if(score4>=80){
      Alert.visible=false;
    }
    
    if(score4>=90){
      Alert.visible=true;
    }
    
    if(score4>=100){
      Alert.visible=false;
    }
    if(score4>=110){
      Alert.visible=true;
    }
    
    if(score4>=120){
      Alert.visible=false;
    }
    
    if(score4>=130){
      Alert.visible=true;
    }
    
    if(score4>=140){
      Alert.visible=false;
    }
    
    if(score4>=150){
      Alert.visible=true;
    }
    
    if(score4>=160){
      Alert.visible=false;
    }
    
    if(score4>=170){
      Alert.visible=true;
    }
    
    if(score4>=180){
      Alert.visible=false;
    }
    
    if(score4>=190){
      Alert.visible=true;
    }
    
    if(score4>=200){
      Alert.visible=false;
    }
    
    if(score4>=210){
      Alert.visible=true;
    }
    
    if(score4>=220){
      Alert.visible=false;
    }
    
    if(score4>=230){
      Alert.visible=true;
    }
    
    if(score4>=240){
      Alert.visible=false;
    }
    
    if(score4>=250){
      Alert.visible=true;
    }
    
    if(score4>=260){
      Alert.visible=false;
    }
    
    if(score4>=270){
      Alert.visible=true;
    }
    
    if(score4>=280){
      Alert.visible=false;
    }
    
    if(score4>=290){
      Alert.visible=true;
    }
    
    if(score4>=300){
      Alert.visible=false;
    }
    
    if(score4>=310){
      Alert.visible=true;
    }
    
    if(score4>=320){
      Alert.visible=false;
    }
    
    if(score4>=330){
      Alert.visible=true;
    }
    
    if(score4>=340){
      Alert.visible=false;
    }
    
    if(score4>=350){
      Alert.visible=true;
    }
    
    if(score4>=360){
      Alert.visible=false;
    }
    
    if(score4>=370){
      Alert.visible=true;
    }
    
    if(score4>=380){
      Alert.visible=false;
    }
    
    if(score4>=390){
      Alert.visible=true;
    }
    
    if(score4>=400){
      Alert.visible=false;
    }
    
    if(score4>=410){
      Alert.visible=true;
    }
    
    if(score4>=420){
      Alert.visible=false;
    }
    
    if(score4>=430){
      Alert.visible=true;
    }
    
    if(score4>=440){
      Alert.visible=false;
    }
    
    if(score4>=450){
      Alert.visible=true;
    }
    
    if(score4>=460){
      Alert.visible=false;
    }
    
    if(score4>=470){
      Alert.visible=true;
    }
    
    if(score4>=480){
      Alert.visible=false;
    }
    
    if(score4>=490){
      Alert.visible=true;
    }
    
    if(score4>=500){
      Alert.visible=false;
    }
    
    if(score4>=510){
      Alert.visible=true;
    }
    
    if(score4>=520){
      Alert.visible=false;
    }
    
    if(score4>=530){
      Alert.visible=true;
    }
    
    if(score4>=540){
      Alert.visible=false;
    }
    
    if(score4>=550){
      Alert.visible=true;
    }
    
    if(score4>=560){
      Alert.visible=false;
    }
    
    if(score4>=570){
      Alert.visible=true;
    }
    
    if(score4>=580){
      Alert.visible=false;
    }
    
    if(score4>=590){
      Alert.visible=true;
    }
    
    if(score4>=600){
      Alert.visible=false;
    }
    
    if(score4>=610){
      Alert.visible=true;
    }
    
    if(score4>=620){
      Alert.visible=false;
    }
    
    if(score4>=630){
      Alert.visible=true;
    }
    
    if(score4>=640){
      Alert.visible=false;
    }
    
    if(score4>=650){
      Alert.visible=true;
    }
    
    if(score4>=660){
      Alert.visible=false;
    }
    
    if(score4>=670){
      Alert.visible=true;
    }
    
    if(score4>=680){
      Alert.visible=false;
    }
    
    if(score4>=690){
      Alert.visible=true;
    }
    
    if(score4>=700){
      Alert.visible=false;
    }
    
    if(score4>=710){
      Alert.visible=true;
    }
    
    if(score4>=720){
      Alert.visible=false;
    }
    
    if(score4>=730){
      Alert.visible=true;
    }
    
    if(score4>=740){
      Alert.visible=false;
    }
    
    if(score4>=750){
      Alert.visible=true;
    }
    
    if(score4>=760){
      Alert.visible=false;
    }
    
    if(score4>=770){
      Alert.visible=true;
    }
    
    if(score4>=780){
      Alert.visible=false;
    }
    
    if(score4>=790){
      Alert.visible=true;
    }
    
    if(score4>=800){
      Alert.visible=false;
    }
    
    if(score4>=810){
      Alert.visible=true;
    }
    
    if(score4>=820){
      Alert.visible=false;
    }
    
    if(score4>=830){
      Alert.visible=true;
    }
    
    if(score4>=840){
      Alert.visible=false;
    }
    
    if(score4>=850){
      Alert.visible=true;
    }
    
    if(missile1===0){
      gameState4=NOMISSILES;
    }
    
    if(missile1===10){
      score4=0;
      Alert.visible=false;
      gameState2=NORMAL;
      gameState4=NORMAL2;
    }

    if(gameState3===MISSILE1){
      if(bullets1Group.isTouching(plane)){
        score2=0;
        missile1=10;
        select_message=Math.round(random(1,4));
        gameState6=ADVANTAGE2;
      }

      if(gameState4===NOMISSILES){
        ALERT.visible=true;

      }
  }

  if(gameState3===MISSILE2){
    if(bullets1Group.isTouching(plane)){
      score2=0;
      missile1=10;
      select_message=Math.round(random(1,4));
      gameState6=ADVANTAGE2;
    }

    if(gameState4===NOMISSILES){
      ALERT.visible=true;

    }
  }

  }

  if(gameState===SECONDCHANCE){
    score2=0;
    score3=0;
    score4=0;
    score5=0;
    score6=0;
    
    smokeGroup.setVisibleEach(false);
    gameState4=NORMAL2;
    gameState2=NORMAL;
    Alert.visible=false;
    goodJob.visible=false;
    wow.visible=false;
    rewardGroup.destroyEach();
    bullets1Group.destroyEach();
    lives3.visible=false;
    plane.visible=true;
    obstacleGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityYEach(0);
    space.velocityY=0;

    if(keyDown("c")){
      gameState=PLAYY;

    if(gameState3===MISSILE1){
      missile.addAnimation("running",missileImg);
      gameState3=BULLET1;
    }

    if(gameState3===MISSILE2){
      missile.addAnimation("running",missile2Img);
      gameState3=BULLET2;
    }

      missile1=10;
    }
  }

  if(gameState===THIRDCHANCE){
    score2=0;
    score3=0;
    score4=0;
    score5=0;
    score6=0;
    
    smokeGroup.setVisibleEach(false);
    gameState4=NORMAL2;
    gameState2=NORMAL;
    Alert.visible=false;
    goodJob.visible=false;
    wow.visible=false;
    rewardGroup.destroyEach();
    bullets1Group.destroyEach();
    lives2.visible=false;
    plane.visible=false;
    obstacleGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityYEach(0);
    space.velocityY=0;
    if(keyDown("c")){
      gameState=PLAYY;
      if(gameState3===MISSILE1){
        missile.addAnimation("running",missileImg);
        gameState3=BULLET1;
      }
  
      if(gameState3===MISSILE2){
        missile.addAnimation("running",missile2Img);
        gameState3=BULLET2;
      }

      missile1=10;
    }
  }

 
if(gameState===END){
  score2=0;
  score3=0;
  score4=0;
  score5=0;
  score6=0;
  
  smokeGroup.setVisibleEach(false);
  gameState4=NORMAL2;
  gameState2=NORMAL;
  Alert.visible=false;
  goodJob.visible=false;
  wow.visible=false;
  rewardGroup.destroyEach();
  bullets1Group.destroyEach();
  lives.visible=false;
  plane.visible=false;
  restart.visible=true;
  obstacleGroup.destroyEach();
  space.velocityY=0;
  if(mousePressedOver(restart)){
    click.play();
    missile1=10;
    live=0;
    gameState=START;
    score=0;
    lives.visible=true;
    lives2.visible=true;
    lives3.visible=true;
    restart.visible=false;
    
  }
}

  drawSprites();

  fill("blue");
  textSize(30);
  text("Score:"+score,10,80)

  text(": "+missile1,785,50);
  
  if(gameState===START){

    fill("red");
    textSize(20);
    text("You are the astronaut, you are in the mission.",215,100);
    text("Which is known as 'Save the Earth'. You need to destroy the asteroids.",100,150);
    text("Press Space button to launch the missile to destroy the asteroid",120,200);
    text("when you go on mission.",320,250);
    text("You got three chance to save the Earth.",250,300);
    text("You have limited Missiles. After some times you will get extra missiles and you",80,350);
    text("have to collect that missiles.........",320,400);
    fill("yellow");
    text("Tip:- ",270,650);
    fill("white");
    text("Try to be in the centre......",320,650);
    fill("blue");
    textSize(30);
    text("NEXT",710,730)
  }

  if(gameState===SPACESHIP){
    fill("red");
    textSize(60);
    text("Choose Your Spaceship",115,200);

    fill("blue");
    textSize(30);
    text("BACK",50,730)
  }

  if(gameState===NEXT){
    fill("red");
    textSize(60);
    text("Choose Your Spaceship",115,200);
    fill("blue");
    textSize(30);
    text("NEXT",710,730)

    fill("blue");
    textSize(30);
    text("BACK",50,730)
  }

  if(gameState===MISSILE){
    fill("red");
    textSize(60);
    text("Choose Your missile",150,200);

    fill("blue");
    textSize(30);
    text("BACK",50,730);
  }

  if(gameState===NEXT2){
    fill("red");
    textSize(60);
    text("Choose Your missile",150,200);
    fill("blue");
    textSize(30);
    text("PLAY",710,730)

    fill("blue");
    textSize(30);
    text("BACK",50,730)
  }

  if(gameState===SECONDCHANCE){
    fill("red");
    textSize(20);
    text("You had lost your first chance but you have second chance to win the game.",90,350);
    text("Press C button to get second chance.",280,400);

  }

  if(gameState===THIRDCHANCE){
    fill("blue");
    textSize(20);
    text("Oops, you had lost your second chance now you have only last chance to save the",60,350);
    text("game.",375,400);
    text("Press again C button to get your last chance.",210,450);
    
  }

  if(gameState2===ALERT && missile1>=1){
    fill("red");
    textSize(40);
    text("you have less missiles.",225,500);
  }

  if(gameState4===NOMISSILES){
    fill("red");
    textSize(40);
    text("No more missiles",290,500);
  }

  if(gameState===END){
    fill("red");
    textSize(40);
    text("GAMEOVER",330,200);
    fill("lightgreen");
    textSize(20);
    text("Oops, you had lost your last chance also. You can't save the Earth",125,280);
    text("But, you had played good",325,330);
    text("Better luck next time",345,380);
    if(score<10){
      fill("red");
      textSize(40);
      text("your score: "+score,270,450);
    }

    if(score>10){
      fill("green");
      textSize(40);
      text("your score: "+score,270,450);
    }
  
  }

}

function createbullet()
{        
       bullet=createSprite(200, 250, 100, 100);
       bullet.scale=0.1;
       bulletGroup.add(bullet);
       return bullet;
}

function Obstacle(){
  if(frameCount%150===0){
    obstacle=createSprite(random(50,800),50,10,10);
    //obstacle.debug=true;
    obstacle.setCollider("circle",0,0,260)
    obstacle.addAnimation("running",obstacleImg);
    obstacle.scale=0.2;
    obstacle.velocityY=(5 + 0.001*score/5);
    obstacle.lifetime=(170 + 10*score/5);
    obstacleGroup.add(obstacle);


    var smoke=createSprite(100,10,10,10);
    smoke.addAnimation("running",smokeImg);
    smoke.scale=1;
    smoke.y=obstacle.y;
    smoke.x=obstacle.x;
    smoke.velocityY=(8 + 0.2*score/5);
    smoke.visible=false;
    smokeGroup.add(smoke);


  }
}

function Reward(){
  if(frameCount % 1200===0){
    reward=createSprite(random(50,800),0,10,10);
    //reward.debug=true;
    reward.setCollider("circle",0,0,250);
    reward.addImage(rewardImg);
    reward.scale=0.2;
    reward.velocityY=10;
    reward.lifetime=80
    rewardGroup.add(reward);
  }
}

function bullets(){
  if(frameCount % 800===0){
    bullets1=createSprite(random(50,800),0,10,10);
    bullets1.addImage(bullets1Img);
    bullets1.scale=0.5;
    bullets1.velocityY=10;
    bullets1.lifetime=80
    bullets1Group.add(bullets1);
  }
}