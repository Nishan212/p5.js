// global variables
var objLayer;
var player;

// p5 functions
function setup() {
  createCanvas(windowWidth, windowHeight);

  // setup Layers
  objLayer = new ObjectLayer();

  // setup game objects
  player = new Player(objLayer, "MoveState");
}

function draw() {
  StaticRender();
  FixedUpdate(); // physics
  Update(); // game logic
  LateUpdate(); // after movement
  Render();
}

// user defined functions
function FixedUpdate() {}
function Update() {
  objLayer.Update();
}
function LateUpdate() {}
function StaticRender() {
  background(50);
}
function Render() {
  objLayer.Draw();
}
