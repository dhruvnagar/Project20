// Here we are making var
// Data here cannot be changed
var car;
var wall;

var speed;
var speed_2;
var speed_3;
var speed_4;
var weight;


function setup() {

  // Here we have created our Canvas
  createCanvas(1600,400);

  // Set random values
  speed = random(6,9);
  speed_2 = random(5,8);
  speed_3 = random(4,7);
  speed_4 = random(5,9);
  weight = random(400,1500);

  // Here create all the sprites on the Canvas
  // Give a different velocity to each car & keep the wall stable
  
  car_1 = createSprite(100, 300, 50, 20);
  car_1.velocityX = speed;
  wall_1 = createSprite(700, 300, 20, 50);
  wall_1.velocityX = 0;

  car_2 = createSprite(100, 200, 50, 20);
  car_2.velocityX = speed_2;
  wall_2 = createSprite(700, 200, 20, 50);
  wall_2.velocityX = 0;

  car_3 = createSprite(100, 350, 50, 20);
  car_3.velocityX = speed_3;

  wall_3 = createSprite(700, 350, 20, 50);
  wall_3.velocityX = 0;

  car_4 = createSprite(100, 250, 50, 20);
  car_4.velocityX = speed_4;
  wall_4 = createSprite(700, 250, 20, 50);
  wall_4.velocityX = 0;

  // Give color to your all sprites

  car_1.shapeeeColor = "red";
  wall_1.shapeeeColor = "brown";

  car_2.shapeeeColor = "blue";
  wall_2.shapeeeColor = "brown";

  car_3.shapeeeColor = "yellow";
  wall_3.shapeeeColor = "brown";

  car_4.shapeeeColor = "violet";
  wall_4.shapeeeColor = "brown";

}

function draw() {

  background(255,255,255);  

  // Stop the cars after they gets colided with the wall

  if (car_1.isTouching(wall_1)) {

  car_1.velocityX = 0;
  car_1.shapeeeColor = "blue";
  wall_1.shapeeeColor = "black";

  }

  if (car_2.isTouching(wall_2)) {

  car_2.velocityX = 0;
  car_2.shapeeeColor = "pink";
  wall_2.shapeeeColor = "black";

  }

  if (car_3.isTouching(wall_3)) {

  car_3.velocityX = 0;
  car_3.shapeeeColor = "red";
  wall_3.shapeeeColor = "black";
    
  }

  if (car_4.isTouching(wall_4)) {

    car_4.velocityX = 0;
    car_4.shapeeeColor = "yellow";
    wall_4.shapeeeColor = "black";

  }
   
  if (wall-car <(car+wall)/2) {

  var Deformation = (0.5 * weight * speed * speed) / 22500;
  if (Deformation>180) {
    car_1.shapeColor=color(255,0,0);
    car_2.shapeColor=color(255,0,0);
    car_3.shapeColor=color(255,0,0);
    car_4.shapeColor=color(255,0,0);

  }

  if (Deformation<180 && Deformation>100) {
    car_1.shapeColor=color(230,230,0); 
    car_2.shapeColor=color(230,230,0);
    car_3.shapeColor=color(230,230,0);
    car_4.shapeColor=color(230,230,0);
  }

  if (Deformation<100) {
     car_1.shapeColor=color(0,255,0);
     car_2.shapeColor=color(0,255,0);
     car_3.shapeColor=color(0,255,0);
     car_4.shapeColor=color(0,255,0);
  }
}

  
  drawSprites();


}
