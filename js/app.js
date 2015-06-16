// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = 0;
    this.y = 0;
    //this.speed = Math.floor(Math.random()*3000) + 100;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    /*
    this.x += this.speed * dt;
    if(this.x > 505) {
        this.x = Enemy.reset();
    }*/
}

Enemy.prototype.reset = function () {
    this.x = -100;
    this.y = 0;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Startposition of Player
    this.x = 200;
    this.y = 400;

    // Image of Player
    this.playerImage = 'images/char-cat-girl.png';

}

Player.prototype.update = function(dt) {
    /*
    this.x += this.speed * dt;
    if(this.x > 505) {
        this.x = Player.reset();
    }*/
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.playerImage), this.x, this.y); 
}

Player.prototype.handleInput = function(key){
    var gapY = 83;
    var gapX = 100;

    if(key == 'up' && (this.y-gapY >= 0)){
        this.y = this.y - gapY;
    }else if(key == 'down' && (this.y+gapY <= 400)){
        this.y = this.y + gapY;
    }else if(key == 'left' && (this.x-gapX >= 0)){
        this.x = this.x - gapX;
    }else if(key == 'right' && this.x+gapX <= 400){
        this.x = this.x + gapX;
    }
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

for(i=0; i<3; i++){
    enemy = new Enemy();
    allEnemies.push(enemy);    
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
