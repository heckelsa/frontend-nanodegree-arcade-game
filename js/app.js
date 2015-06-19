//==========================================
//============== Variables =================
//==========================================
var ENEMY_START_POSITION_X = -90;
var ENEMY_START_POSITION_Y = 63;

var ENEMY_IMAGE = 'images/enemy-bug.png';
var PLAYER_IMAGE = 'images/char-cat-girl.png';

var PLAYER_START_POSITION_X = 200;
var PLAYER_START_POSITION_Y = 400;

var PLAYER_DISTANCE_Y = 83;
var PLAYER_DISTANCE_X = 101;


//==========================================
//================= Enemy ==================
//==========================================
var Enemy = function() {

    this.sprite = ENEMY_IMAGE;
    this.speed = Math.floor(Math.random()*500) + 100;

    this.reset();    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if(this.x > 500) {
        this.x = ENEMY_START_POSITION_X;
    }
};

// Startposition for Enemy
Enemy.prototype.reset = function () {
    this.x = ENEMY_START_POSITION_X;
    this.y = ENEMY_START_POSITION_Y;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//==========================================
//================ Player ==================
//==========================================
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Speed of Player
    this.speed = 300;

    // Startposition of Player
    this.reset();

    // Image of Player
    this.playerSprite = PLAYER_IMAGE;
};

Player.prototype.update = function(dt) {
    this.x += this.speed * dt;
    this.y += this.speed * dt;
};

// Places the Player on Start Position
Player.prototype.reset = function(){
    this.x = PLAYER_START_POSITION_X;
    this.y = PLAYER_START_POSITION_Y;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.playerSprite), this.x, this.y); 
};

Player.prototype.handleInput = function(key){
    
    if(key == 'up' && (this.y-PLAYER_DISTANCE_Y >= 0)){
		// Player moves up
        this.y = this.y - PLAYER_DISTANCE_Y;
    }else if(key == 'up' && (this.y-PLAYER_DISTANCE_Y < 0)){
		// Player meets Water. Back to Start position
		this.reset();
	}else if(key == 'down' && (this.y+PLAYER_DISTANCE_Y <= 400)){
		// Player moves down
        this.y = this.y + PLAYER_DISTANCE_Y;
    }else if(key == 'left' && (this.x-PLAYER_DISTANCE_X >= -2)){
		// Player moves left
        this.x = this.x - PLAYER_DISTANCE_X;
    }else if(key == 'right' && this.x+PLAYER_DISTANCE_X <= 404){
		// Player moves right.
        this.x = this.x + PLAYER_DISTANCE_X;
    }
};


//==========================================
//=============== Objects ==================
//==========================================
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

for(i=1; i<4; i++){
    enemy = new Enemy(ENEMY_START_POSITION_X, ENEMY_START_POSITION_Y);
    allEnemies.push(enemy); 

    ENEMY_START_POSITION_Y = ENEMY_START_POSITION_Y + 83;   
}

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
