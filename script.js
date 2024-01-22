let balls = [];

function setup() {
  createCanvas(400, 400);
  while (balls.length < 7) balls.push({x: random(width), y: random(height), color: color(random(255), random(255), random(255))});
}

function draw() {
  background(220);
  balls.forEach(b => {fill(b.color); ellipse(b.x, b.y, 20)});
}

function keyPressed() {
  if (['W', 'S', 'A', 'D'].includes(key)) {
    balls.forEach(b => b.color = color(random(255), random(255), random(255)));
  }   
}


      
                   
