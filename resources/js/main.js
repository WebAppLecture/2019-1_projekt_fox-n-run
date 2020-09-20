// init objects
let game = loadGame();
let sounds = loadSounds();
let backgroundParts = loadBackground();
let player = loadPlayer();
let score = loadScore();
let staticObstacles = loadStaticObstacles();
let movableObstacles = loadMovableObstacles();
let collectableObstacles = loadCollectableObstacles();
let monsters = loadMonster();
let goal = loadGoal();

let offsetX = 0;


// game loop
function animate() {
	// if game is paused, then a blue transparent layer is put over the canvas
	if(game.state.paused){
		canvas.globalAlpha = 0.3;
		canvas.fillStyle = "blue"; 
		canvas.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
	// game is running
	if(!game.state.paused && !game.state.quit && !game.state.gameOver &&!game.state.won){
	
	// canvas
	canvas.save();
	canvas.translate(offsetX,0);
    canvas.clearRect(-offsetX,0,CANVAS_WIDTH, CANVAS_HEIGHT);
	offsetX = -player.x + CANVAS_WIDTH/2;
	
	// background
	backgroundParts[0].checkOutsideCollision(player.x-CANVAS_WIDTH/2, backgroundParts[1], backgroundParts[2]);
	backgroundParts[0].update(player.vx);
	backgroundParts[0].draw();
	backgroundParts[1].checkOutsideCollision(player.x-CANVAS_WIDTH/2, backgroundParts[0], backgroundParts[2])
	backgroundParts[1].update(player.vx);
	backgroundParts[1].draw();
	backgroundParts[2].checkOutsideCollision(player.x-CANVAS_WIDTH/2, backgroundParts[0], backgroundParts[1])
	backgroundParts[2].update(player.vx);
	backgroundParts[2].draw();
	
	// variables for storing different values of special collisions
	let movableCollision = false;
	let standingOnMovable = false;
	staticCollision = false;
	
	// static obstacles
	for(let staticObstacle of staticObstacles) {
		
		// check collision of static obstacle and player
		let playerCollision = StaticObstacle.collisionCheck(player, staticObstacle);
		if(playerCollision){			
			staticCollision = true;
		}
		player.handleCollision(playerCollision, staticObstacle); 
		
		// check collision of static obstacle with movable obstacle
		for(let movableObstacle of movableObstacles){
			let movableObstacleCollision = StaticObstacle.collisionCheck(movableObstacle, staticObstacle);
			if(movableObstacleCollision){
				movableObstacle.handleObstacleCollision(movableObstacleCollision, staticObstacle); 
			}	
		}
		staticObstacle.draw();
	}
	
	// movable obstacles
	for(let movableObstacle of movableObstacles) {
		// check collision with player
		let collision = MovableObstacle.collisionCheck(player, movableObstacle);
		// check collision of movable object and player
		if(collision){
			movableObstacle.handlePlayerCollision(collision,player);
			player.handleCollision(collision, movableObstacle);
			if(collision == Collisions.right ||collision == Collisions.left ){
				movableCollision = true;
			}
			if(collision == Collisions.bottom){
				standingOnMovable = true;	
			}		
			
		}
		movableObstacle.update();
		movableObstacle.draw();
	}
	
	// collectable obstacles
	for(let collectableObstacle of collectableObstacles) {
		
		let collision = CollectableObstacle.collisionCheck(player, collectableObstacle);
		// check collision of collectable object and player 
		if(collision){
			collectableObstacles.splice(collectableObstacles.indexOf(collectableObstacle), 1);
			score.value += 1;
		}
		collectableObstacle.updateFrameIndex();
		collectableObstacle.draw();
	}
	
	// check collision of player and monster
	for(let monster of monsters) {		
		let coll = Monster.collisionCheck(player, monster);
		if(coll){
			game.resetGameStates();
			game.state.gameOver = true;
			game.handle();
		}
		monster.update();
		monster.draw();
	}
	
	// check if player has reached the goal
	let hasWon = Goal.collisionCheck(player, goal);
	goal.draw()
	if(hasWon){
		game.resetGameStates();
		game.state.won = true;
		game.handle();
	}
	
	// player
	let lastPlayerState = player.getState();
	player.update();
	player.updateLastRunningDirection();
	player.updateFrameIndex();
	player.updateState(standingOnMovable, staticCollision, movableCollision, lastPlayerState);
    player.draw();
	
	//score
	score.update(offsetX);
	score.draw();	
	
	canvas.restore();
	
	if(player.y+player.height > CANVAS_HEIGHT &&!hasWon){ // end game, if player falls in pit
		game.resetGameStates();
		game.state.gameOver = true;
		game.handle();
	}
	
	// sounds
	game.renderSound(player, sounds, collectableObstacles);
	
	window.requestAnimationFrame(animate);
	
	}
	
}