var s;
var scl = 20; //scale
var food;
var gameOver;
var startGame;
var g;
var start;
var menuFont;
var pressFont;
var score;
var scoreTemp;
var maxScore;
var eatSound;
var failSound;

function preload(){
    menuFont = loadFont("res//brk.ttf");
    pressFont = loadFont("res//pressStart.ttf");
    eatSound = new Audio("res//eat.wav");
    failSound = new Audio("res//fail.wav");
}

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    score = 0;
    s = new Snake();
    g = new GameOver();
    start = new StartGame();
    gameOver = false;
    startGame = true;
    frameRate(10);
    pickLocation();
    background(0);
    maxScore = Math.round((width/20)*(height/20));
}

/*Called directly after setup(), the draw() function 
 * continuously executes the lines of code contained inside its block 
 * until the program is stopped or noLoop() is called
 */
function draw(){
    background(0);
    
    //checks for start of game
    if(startGame){
        fill(200, 66, 244);
        textFont(menuFont);
        if(width>600){
            textSize(150);
            textAlign(CENTER);
            text("WindowSnake",width/2,150);
        }else{
            textSize(80);
            textAlign(CENTER);
            text("WindowSnake",width/2,150);
        }
        start.printStart(scl);
        noLoop();
    }
    //checks if game is over
    if(gameOver){
        failSound.play();
        scoreTemp = score;
        setup();
        fill(200, 66, 244);
        textFont(menuFont);
        if(width>600){
            textSize(150);
            textAlign(CENTER);
            text("WindowSnake",width/2,150);
        }else{
            textSize(80);
            textAlign(CENTER);
            text("WindowSnake",width/2,150);
        }
        g.printGameOver(scl);
        noLoop();
    }
    
    gameOver = s.update();
    gameOver = s.tailCollided();
    s.show();
    
    if(s.eat(food)){
        pickLocation();
        eatSound.play();
        score++;
    }
    
    fill(200, 66, 244);
    textFont(menuFont);
    textSize(60);
    textAlign(LEFT);
    text("Score: "+score,20,height-60);
    
    fill(255,0,100);
    rect(food.x,food.y,scl,scl);
}

function pickLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    
    //vector to store x and y
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        s.yspeed = -1;
        s.xspeed = 0;
    }
    if(keyCode == DOWN_ARROW){
        s.yspeed = 1;
        s.xspeed = 0;
    }
    if(keyCode == LEFT_ARROW){
        s.yspeed = 0;
        s.xspeed = -1;
    }
    if(keyCode == RIGHT_ARROW){
        s.yspeed = 0;
        s.xspeed = 1;
    }
    if(keyCode == 13 && (gameOver || startGame)){
        gameOver = false;
        startGame = false;
        loop();
    }
}