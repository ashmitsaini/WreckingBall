class Rope {
    constructor(bodyA, pointB) {
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          length: 400,
          stiffness: 1.2
      }
      this.pointB = pointB
      this.bodyA = bodyA;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
    display(){
      push();
      stroke("gray");
      strokeWeight(2);
      line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y);
      pop();
    }
  };