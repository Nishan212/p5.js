function Player(layer, startState = "IdleState") {
  // instance variables
  this.color = color(100, 200, 54, 76);
  this.ww = 50;
  this.hh = 75;
  this.xx = 100;
  this.yy = 100;

  this.state = startState;

  this.visible = true;
  this.updateCheck = true;

  // Add to layer
  layer.children.push(this);

  // Instance functions
  this.Draw = function () {
    if (this.visible) {
      fill(this.color);
      noStroke();
      rect(this.xx, this.yy, this.ww, this.hh);
    }
  };

  this.Update = function () {
    if (this.updateCheck) {
      this[this.state]();
    }
  };

  this.MoveState = function () {
    this.xx++;
  };

  this.IdleState = function () {};
}
