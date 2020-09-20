class Player extends MovableObject{
	
    constructor(canvas, x, y, width, height, jumpHeight, runningLeftImg, runningRightImg, standingImgLeft, standingImgRight, jumpingImgLeft, jumpingImgRight, fallingImgLeft, fallingImgRight){
		super(canvas, x, y, width, height, ObjectTypes.player);
        
        this.vy = 0;
        this.vx = 0;
		this.ax = 0;
		this.decx = 0;
		this.movingX = false;
		this.allowMovement();
		this.handleStates();
		
		this.runningLeftImg = runningLeftImg;
		this.runningRightImg = runningRightImg;
		this.standingImgLeft = standingImgLeft;
		this.standingImgRight = standingImgRight;

		this.jumpingImgLeft = jumpingImgLeft;
		this.jumpingImgRight = jumpingImgRight;

		this.fallingImgLeft = fallingImgLeft;
		this.fallingImgRight = fallingImgRight;
		
		
		this.lastRunningDirectionRight = true;
    }
	
	static get movingObstacleDecX(){
		return 0.7;
	}
		
	static get vxMax() {
		return 5;
	}
	
	static get vyMax() {
		return 40;
	}	
	
	static get vJumpHigh() {
		return -15.0;
	}
	
	static get vJumpLow() {
		return -6.0;
	}
	
	static get vRunHigh() {
		return 8;
	}
	
	static get vRunLow() {
		return 4;
	}
    
	// depending on the different states, different images of the player are drawn
    draw() {
		if(this.state.runningLeft){
			this.numberOfFrames = 8;
			this.canvas.drawImage(this.runningLeftImg[this.frameIndex], 116, 70, 420, 600, this.x, this.y, 70, 100);
			return;

		}
		if(this.state.runningRight){
			this.numberOfFrames = 8;
			this.canvas.drawImage(this.runningRightImg[this.frameIndex], 150, 70, 420, 600, this.x, this.y, 70, 100);
			return;
			
		}
		if(this.state.standing){
			this.numberOfFrames = 12;
			if(this.lastRunningDirectionRight){
				this.canvas.drawImage(this.standingImgRight[this.frameIndex], 150, 70, 420, 600, this.x, this.y, 70, 100);
			}
			else{
				this.canvas.drawImage(this.standingImgLeft[this.frameIndex], 150, 70, 420, 600, this.x, this.y, 70, 100);
			}
			return;

		}
		if(this.state.jumping){
			this.numberOfFrames = 14;
			
			if(this.lastRunningDirectionRight){
				this.canvas.drawImage(this.jumpingImgRight[this.frameIndex], 150, 70, 420, 600, this.x, this.y, 70, 100);
				return;
			}
			else{
				this.canvas.drawImage(this.standingImgLeft[this.frameIndex], 116, 70, 450, 600, this.x, this.y, 70, 100);
				return;
			}
			
			
		}
		if(this.state.falling){
			this.numberOfFrames = 3;
			
			if(this.lastRunningDirectionRight){
				this.canvas.drawImage(this.fallingImgRight[this.frameIndex], 150, 70, 420, 600, this.x, this.y, 70, 100);
				return;
			}
			else{
				this.canvas.drawImage(this.fallingImgLeft[this.frameIndex], 116, 70, 420, 600, this.x, this.y, 70, 100);
				return;
			}
		}
		if(this.state.movingObstacle){
			if(!this.lastRunningDirectionRight){
				this.numberOfFrames = 8;
				this.canvas.drawImage(this.runningLeftImg[this.frameIndex], 116, 70, 420, 600, this.x, this.y, 70, 100);
				return;

			}
			else{
				this.numberOfFrames = 8;
				this.canvas.drawImage(this.runningRightImg[this.frameIndex], 150, 70, 420, 600, this.x, this.y, 70, 100);
				return;
			
			}
		}
		this.canvas.drawImage(this.img, 150, 70, 450, 570, this.x, this.y, 70, 100);
       
    }
	
	startJump() {
		if(this.moveAllowed.up && this.vy === Player.gravity) { 
			this.vy = Player.vJumpHigh;
		}
	}

	endJump(){
		if(this.vy < Player.vJumpLow && !this.moveAllowed.down) {
			this.vy = Player.vJumpLow;
			
		}
	}
	
	// get state in which the player is
	getState(){
		if(this.state.runningLeft){
			return "runningLeft";
		}
		if(this.state.runningRight){
			return "runningRight";
		}
		if(this.state.standing){
			return "standing";
		}
		if(this.state.jumping){
			return "jumping";
		}
		if(this.state.falling){
			return "falling";
		}
		if(this.state.movingObstacle){
			return "movingObstacle";
		}
	}

	// update x and y position
	update(){
		
		this.vy += Player.gravity;
		this.y += this.vy;
		
		// accelerates if player isn´t moving right or left
		if(!this.movingX) {
			this.vx += - this.getDirection(this.vx) * Player.decX;
			if(Math.abs(this.vx) <= Player.decX) {
				this.vx = 0;
			}
		} 
		this.x += this.vx;		
	}
	
	// handle collisions with different kind of objects
	handleCollision(collision, object) {
		switch(collision) {
			case Collisions.bottom:
				if(this.vy !== 0 && this.vy > 0) {
					this.y = this.y - this.vy;
					this.vy = 0;
				}
				break;
			case Collisions.top:
				switch(object.type){
					case ObjectTypes.movable:						
						if(!object.moveAllowed.down){
							this.moveAllowed.up = false;
							this.y = this.y - this.vy;
							this.vy = 0;
						}
						break;
					case ObjectTypes.static:
						if(this.vy !== 0) {
							this.y = this.y - this.vy;
							this.vy = 0;
						}
						this.moveAllowed.up = false;
						break;
				}
				break;
			case Collisions.left:
				switch(object.type) {
					case ObjectTypes.movable:
						this.x = this.x - this.vx;
						if(!object.moveAllowed.left){
							this.vx = 0;
							this.moveAllowed.left = false;
						}
						else{
							this.vx = - MOV_OBJ_VX; // when player pushes an object he is slower than usual
						}
						break;
					case ObjectTypes.static:
						if(this.vx !== 0) {
							this.x = this.x - this.vx;
							this.vx = 0;
						}
						this.moveAllowed.left = false;
						break;
				}
				break;
			case Collisions.right:
				switch(object.type) {
					case ObjectTypes.movable:
						this.x = this.x - this.vx;
						if(!object.moveAllowed.right){
							this.vx = 0;
							this.moveAllowed.right = false;
						}
						else{
							this.vx = MOV_OBJ_VX;
						}
						break;
					case ObjectTypes.static:
						if(this.vx !== 0) {
							this.x = this.x - this.vx;
							this.vx = 0;
						}
						this.moveAllowed.right = false;
						break;
				}
				break;
			default:
				this.allowMovement();
		}
	}
	
	
	handleStates() {
		this.state = {
			"runningLeft":false,
			"runningRight": false,
			"standing": false,
			"jumping": false,
			"falling": false,
			"movingObstacle": false,
			"collected": false,
		};
	}
	
	// saves the value of the last direction in which the player has run
	updateLastRunningDirection(){
		if(this.vx>0){
			this.lastRunningDirectionRight = true;
		}
		if(this.vx<0){
			this.lastRunningDirectionRight = false;
		}
	}
	
	// update the current state
	updateState(standingOnMovable, staticCollision, movableCollision, lastState){

		this.handleStates();
		// collision with movable object
		if(movableCollision){
			if(lastState !== "movingObstacle"){
				this.frameIndex = 0;
			}
			this.state.movingObstacle = true;
			return;
		}
		// jumping up
		if(this.vy < Player.gravity || (!standingOnMovable && !staticCollision && this.vy == Player.gravity)){
			if(lastState !== "jumping"){
				this.frameIndex = 0;
			}
			this.state.jumping = true;
			return;
		}
		
		// falling
		if(this.vy > Player.gravity){
			if(lastState !== "falling"){
				this.frameIndex = 0;
			}
			this.state.falling = true;
			return;
		}
		
		// running left
		if(this.vx < 0){
			if(lastState !== "runningLeft"){
				this.frameIndex = 0;
			}
			this.state.runningLeft = true;
			return;
		}
		
		// running right
		if(this.vx > 0){
			if(lastState !== "runningRight"){
				this.frameIndex = 0;
			}
			this.state.runningRight = true;
			return;
		}
		
		// standing
		if(lastState !== "standing"){
			this.frameIndex = 0;		
		}
		// default value: player is standing
		this.state.standing = true;
		
	}
	
}