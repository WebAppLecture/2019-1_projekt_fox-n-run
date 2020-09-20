// event listener for pressed keys
document.addEventListener("keydown", function(e) {
	if(e.repeat) {
		e.preventDefault();
	} else {
		if(!game.state.paused){

			switch(e.which){
				case 65: // player run left
					player.vx = - Player.vRunHigh;				
					player.movingX = true;
					break;
				case 32: //player jump
					player.startJump();
					break;
				case 68: //player run right
					player.vx = Player.vRunHigh;
					player.movingX = true;
					break;
				case 80: // pause game
					game.resetGameStates();
					game.state.paused = true;
					game.handle();
					break;
			}
		}
	}
});


document.addEventListener("keyup", function(e) {
	if(!game.state.paused){

		switch(e.which){
			case 65: // stop running left
				player.vx = - Player.vRunLow;
				player.movingX = false;
				break;
			case 68: // stop running right
				player.vx = Player.vRunLow;
				player.movingX = false;
				break;
			case 32: // end jump
				player.endJump();
				break;
				
			case 80:
				break;					
			}
		}
});

// start game
document.querySelector(".startButton").addEventListener("click", function(){
	game.resetGameStates();
	game.state.started= true; 
	game.handle();
  
});

// return to game
document.querySelector(".returnButton").addEventListener("click", function(){
	game.resetGameStates();
	game.state.running = true;
	game.handle();  
});

// leave game
document.querySelector(".quitButton").addEventListener("click", function(){	
	game.resetGameStates();
	game.state.quit = true;
	game.handle();
  
});
