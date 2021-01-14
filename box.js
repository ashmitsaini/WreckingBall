class Box {
    constructor(x, y) {
      var options = {
          'isStatic': false,
          'friction': 0.3,
          'restitution': 0.8,
          'density': 0.5 
  
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("limegreen");
      fill(255, 255, 255);
      rect(0, 0, 50, 50);
      pop();
    }
  };