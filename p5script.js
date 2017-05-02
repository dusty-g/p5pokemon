
var count = 0;
var current_img;
var current_img_back;
var images = [];
var right = true;
var Y = 0;
var previousX = 0;
var direction = true;
var fireball = false;
var fire_ball_image;
var fire_count = 1000;
var ball_size = 1;

function setup() {
  createCanvas(720, 400);

  fire_ball_image = loadImage('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRi6P7vmh-BWnurz8EBrJub1doBde8tYZuPVRqwynhNxkzsFTEq');
  var charmander = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"); 
  var charmander_back = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png");
  var charmeleon = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"); 
  var charmeleon_back = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png");
  var charizard = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"); 
  var charizard_back = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png");
  images = [[charmander, charmander_back],[charmeleon, charmeleon_back],[charizard, charizard_back]];
  current_img = charmander;
  current_img_back = charmander_back;
  noCursor(); 
}
function keyTyped(){
        console.log(key)
        if (key === 'a'){
            count++;
            current_img = images[(count)%3][0];
            current_img_back = images[(count)%3][1];
            console.log(count)
            console.log(count%3)
        }
        

    }

function draw() {

    background(color('white'));
    if (fireball){
        if (right){
            image(fire_ball_image, fire_count, Y, fire_ball_image.width*ball_size, fire_ball_image.height*ball_size); fire_count++; 
            if (fire_count > 720){fireball = false;}
    }
    else{image(fire_ball_image, fire_count, Y, fire_ball_image.width*ball_size, fire_ball_image.height*ball_size); fire_count--; if (fire_count < 0){fireball = false;}}
        }



    if (mouseIsPressed){
        if (direction){fire_count = mouseX + 20; right = true; 
        }
        else{fire_count = mouseX - 25; right = false;
        }
        // should use a switch statement here
        if (count % 3 == 0){ball_size = 1}
        else if (count % 3 == 1){ball_size = 1.5}
        else if (count % 3 == 2){ball_size = 2.2}
        console.log(ball_size);
        Y = mouseY;
        fireball = true;
    }
    
    if (direction){
        if (mouseX >= previousX){
        image(current_img_back, mouseX - 50, mouseY - 50)
        previousX = mouseX
    } else{
        direction = false;
        
    }
    }else{
        if (mouseX <= previousX){
        image(current_img, mouseX - 50, mouseY - 50)
        previousX = mouseX
    }else{
        direction = true;
    }
    }



}







