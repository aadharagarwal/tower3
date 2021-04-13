class cube {

  constructor(x, y) {
    var opction = {
      isStatic: false

    }

    this.Abody = Bodies.rectangle(x, y, 30, 40, opction);
    World.add(world, this.Abody)
    this.w = 30
    this.h = 40
    this.vis = 255
  }

  display() {
    if (this.Abody.speed < 3) {

      var angle = this.Abody.angle;
      var pos = this.Abody.position;
      push();
      translate(this.Abody.position.x, this.Abody.position.y);
      rotate(angle);
      rectMode(CENTER)
      rect(0, 0, this.w, this.h)
      pop();
    }
    else {
      World.remove(world, this.Abody)
      push()
      this.vis = this.vis - 5
      //tint(255, this.vis)
      //rect(this.Abody.position.x, this.Abody.position.y, 50, 50)
      pop()
    }

  }}