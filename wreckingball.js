class Wreckingball {
    constructor(x, y, d) {
      var options = {
          'isStatic': false,
          'restitution':0.3,
          'friction': 0.5,
          'density': 1.2
      }
      this.x = x;
      this.y = y;
      this.d = d;
      this.body = Bodies.circle(this.x, this.y, this.d/2, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      ellipse(0, 0, this.d, this.d);
      pop();

    }
  };