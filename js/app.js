//==========================================
//============== Variables =================
//==========================================
var enemyStartPositionX = -90;
var enemyStartPositionY = 63;

var enemyImage = 'images/enemy-bug.png';
var playerImage = 'images/char-cat-girl.png';

var playerStartPositionX = 200;
var playerStartPositionY = 400;

var playerDistanceY = 83;
var playerDistanceX = 101;


//==========================================
//================= Enemy ==================
//==========================================
var Enemy = function() {

    this.sprite = enemyImage;
    this.speed = Math.floor(Math.random()*500) + 100;

    this.reset();    
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;
    if(this.x > 500) {
        this.x = enemyStartPositionX;
    }
}

// Startposition for Enemy
Enemy.prototype.reset = function () {
    this.x = enemyStartPositionX;
    this.y = enemyStartPositionY;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


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
    this.playerSprite = playerImage;

}

Player.prototype.update = function(dt) {
    this.x += this.speed * dt;
    this.y += this.speed * dt;

   
}

// Places the Player on Start Position
Player.prototype.reset = function(){
    this.x = playerStartPositionX;
    this.y = playerStartPositionY;
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.playerSprite), this.x, this.y); 
}

Player.prototype.handleInput = function(key){
    
    if(key == 'up' && (this.y-playerDistanceY >= 0)){
		// Player moves up
        this.y = this.y - playerDistanceY;
    }else if(key == 'up' && (this.y-playerDistanceY < 0)){
		// Player meets Water. Back to Start position
		this.reset();
	}else if(key == 'down' && (this.y+playerDistanceY <= 400)){
		// Player moves down
        this.y = this.y + playerDistanceY;
    }else if(key == 'left' && (this.x-playerDistanceX >= 0)){
		// Player moves left
        this.x = this.x - playerDistanceX;
    }else if(key == 'right' && this.x+playerDistanceX <= 400){
		// Player moves right.
        this.x = this.x + playerDistanceX;
    }
}


//==========================================
//=============== Objects ==================
//==========================================
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

for(i=1; i<4; i++){
    enemy = new Enemy(enemyStartPositionX, enemyStartPositionY);
    allEnemies.push(enemy); 

    enemyStartPositionY = enemyStartPositionY + 83;   
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
