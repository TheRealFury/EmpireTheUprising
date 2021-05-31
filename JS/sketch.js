var money = 1000;
var taxes = 0;
var returns = 0;
var houses = 0;
var hotels = 0;
var factories = 0;
var apartments = 0;
var commodities = 0;
var powerplants = 0;
var totalProperties = 0;
var people = 0;
var level = 1;
var cycles = 0;
var totalCycles = 100;
var stage = "Village";
var name = "Empire";
var Username = "Username";
var gameEnd = 0;
function preload(){
  Data();
  create();
}
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  background('black');
  checkBuy();
  checkSell();
  WriteVal();
  saveReset();
  passCycle();
  drawSprites();
}
