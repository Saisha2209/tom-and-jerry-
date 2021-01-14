var back,backImage;
var cat, catImage;
var mousee, mouseImage,mouse2,mouse3;
var cat2,cat3
function preload() {
    //load the images here
    backImage=loadImage("garden.png");
mouseImage=loadAnimation("jerryThree.png","jerryTwo.png");
catImage=loadAnimation("tomTwo.png","tomThree.png")
mouse2=loadAnimation("jerryOne.png");
mouse3=loadAnimation("jerryFour.png")
cat2=loadAnimation("tomFour.png")
cat3=loadAnimation("tomOne.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back=createSprite(500,400,1000,800)
    back.addImage("background",backImage)
mousee=createSprite(200,600,20,20)
mousee.addAnimation("mouseRunning",mouse2)
mousee.scale=0.2
mousee.addAnimation("mouseTease",mouseImage)
mousee.addAnimation("a",mouse3)
cat=createSprite(700,600,20,20);
cat.addAnimation("cat",cat2);
cat.addAnimation("cat22",catImage)
cat.addAnimation("c",cat3)
cat.scale=0.2
cat.velocityX=World.mouseX
cat.velocityY=World.mouseY
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed()
    drawSprites();
   // if (keyDown("LEFT_ARROW")){
     //   cat.changeAnimation(catImage)
    //}
 if (isTouching(cat,mousee)){
     cat.velocityX=0;
     cat.changeAnimation("c",cat3)
     mousee.changeAnimation("a",mouse3)
 }
    
    if (keyPressed()){
        cat.velocityX=-5
        cat.changeAnimation("cat22",catImage);
        mousee.changeAnimation("mouseTease",mouseImage)
    }
    cat.debug=true;
    mousee.debug=true;
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
    return true;
   /* cat.velocityX=-5
    cat.changeAnimation("cat22",catImage);
    mousee.changeAnimation("mouseTease",mouseImage)*/
}
  //For moving and changing animation write code here


}
function  isTouching(a,b){
  if (a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2 ){
        return true;
    }else{
        return false
    }
}

