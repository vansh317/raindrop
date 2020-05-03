

var drops=[]




function setup() {
  createCanvas(400,400);
speed=random(5,5.5)
drop=new Drop(random(50,350),20,5,20,speed)
}
function draw() {
  background("grey"); 

var i=0;
  if(frameCount%100===0){
rain();
  }
 // drawSprites();*/
 for(i=0;i<drops.length;i++)
{
  
}
drawSprites();
}


function rain() {
  var x=0;
  for (var i = 0; i <= width / 30; i++) {
     drop = new Drop(x);
    
    drops.push(drop);
    console.log(drops)
    x += 30;
  }
}

