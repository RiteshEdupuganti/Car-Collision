var car,wall;
var speed,weight,deformation;
function setup()
{
    createCanvas(1600,1000);

    var car = createSprite(100,500,30,30);
    var wall = createSprite(1500,500,20,800,);

    var speed = random(50,90);
    var weight = random(400,1500);

    car.velocityX = speed;

    deformation = 0.5 * weight * speed * speed/22500;
}

function draw() 
{
    
    background(255);

    if(car.isTouching(wall)) 
    {
        if(deformation > 180) 
        {
         car.shapeColor = color(255,0,0);
        }

        if(deformation < 180 && deformation > 100)
        {
         car.shapeColor = color(230,230,0);
        }

        if(deformation > 100)
        {
         car.shapeColor = color(0,255,0);
        }
    }
}