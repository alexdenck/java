function setup() {
    createCanvas(400, 400);
  background("orange");
  }
  
  function draw() {
  
    stroke("blue");
    fill("bleck");
  
    //console.log(mouseIsPressed);
    
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }