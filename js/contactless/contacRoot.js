
function setup() {
   var canvas= createCanvas(1900, 1000);
   canvas.parent('root');
   background(0);
}


function touchMoved() {
   noFill();
   stroke(255);
   ellipse(mouseX, mouseY,30,30);
   // prevent default
   return false;
}

function mousePressed() {
   clear();
   background(0); 
}
function deviceShaken() {
   clear();
   background(0);
}
