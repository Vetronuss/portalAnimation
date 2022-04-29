function setup() {
  squareCanvas();
}

function draw() {
  
  
  background(1)
  stroke(255)
  fill(255)
  text("Fps:" + getFps(),10,10)
  e()
  
  
  
  
}

function e()
{
  translate(width/2,height/2)
  
  for (var i = 0; i < 100; i+=3){
    ring(frameCount/2+i);
  }
}

//noiseReplacement
function nois(x,y,z)
{
  var low = min(x,y,z)
  x+=abs(low);
  y+=abs(low);
  z+=abs(low);
  return noise(x,y,z);
}

function ring(n)
{
  
  noiseSeed(1)
  stroke(98,228,228,50)
  strokeWeight(1)
  noFill();
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = color(57,234,255);
  beginShape();
  
  for (var i = 0; i < TWO_PI; i+=TWO_PI/20)
  {
    var a = createVector(cos(i)*100,sin(i)*100)
    curveVertex(cos(i)*100*((nois(a.x/90,a.y/90,n/50)+1)),sin(i)*100*((nois(a.x/90,a.y/90,n/50)+1)))
  }
  endShape(CLOSE);
}