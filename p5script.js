
var count = 0;
var current_img;
var current_img_back;
var images = []
function setup() {
  createCanvas(720, 400);
  var img1 = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"); 
  var img1_back = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png");
  var img2 = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"); 
  var img2_back = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png");
  var img3 = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"); 
  var img3_back = loadImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png");
  images = [[img1, img1_back],[img2, img2_back],[img3, img3_back]];
  current_img = img1;
  current_img_back = img1_back;
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
  // Displays the image at its actual size at point (0,0)
    background(0)

    
    if (mouseIsPressed){
        image(current_img_back, mouseX - 50, mouseY - 50)
    }else{
        image(current_img, mouseX - 50, mouseY - 50)
    }
    }







