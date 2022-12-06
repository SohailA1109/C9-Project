var box;


function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    background("red")
  }

  if(keyIsDown(LEFT_ARROW)){
    background("orange")
  }

  if(keyIsDown(UP_ARROW)){
    background("yellow")
  }

  if(keyIsDown(DOWN_ARROW)){
    background("cyan")
  }
}



