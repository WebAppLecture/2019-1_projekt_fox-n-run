class Game{
	constructor(){
		this.resetGameStates();
	}
	// start game loop
	start(){
		window.requestAnimationFrame(animate);
    } 
	resetGameStates(){
		this.state = {
			"menu": false,
			"started": false,
			"paused": false,
			"gameOver": false,
			"running": false,
			"quit": false,
			"won": false,
		};
	}
	
	// handle different game states
	handle(){ 
		canvas.globalAlpha = 1.0;
		// player has won 
		if(this.state.won){
			document.querySelector("#myCanvas").style.display = "none";
			document.querySelector(".wonScreen").style.display = "flex";
			return;
		}
		// player has lost
		if(this.state.gameOver){
			document.querySelector("#myCanvas").style.display = "none";
			document.querySelector(".endscreen").style.display = "flex";
			this.state.gameOver = true;
			return;
		}
		// player has paused the game
		if(this.state.paused){			
			document.querySelector(".pauseScreen").style.display = "flex";
			canvas.globalAlpha = 0.3;
			return;
		}
		// player has started the game
		if(this.state.started){
			document.querySelector("#myCanvas").style.display = "flex";
			document.querySelector(".menu").style.display = "none";		
			this.start();
			return;
		}
		// game is running
		if(this.state.running){
			document.querySelector("#myCanvas").style.display = "flex";
			document.querySelector(".pauseScreen").style.display = "none";
			window.requestAnimationFrame(animate); 
			return;
		}
		// player has quit the game
		if(this.state.quit){
			document.querySelector("#myCanvas").style.display = "none";
			document.querySelector(".pauseScreen").style.display = "none";
			document.querySelector(".quitGameScreen").style.display = "flex";
			return;
		}
		
	}	
	
	// play different sounds
	renderSound(player, sounds, collectableObstacles){
		
		if(player.y+player.height > CANVAS_HEIGHT){ // end game sound
			sounds[0].play();
		}
		if(player.state.jumping){
			sounds[1].play();
		}	
	}
	
}