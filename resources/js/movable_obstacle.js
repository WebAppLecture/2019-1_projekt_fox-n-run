class MovableObstacle extends MovableObject{
	constructor(img, canvas, x, y, width, height,type){		
		super(canvas, x, y, width, height, ObjectTypes.movable);
		this.img = img;
		this.vx = 0;
		this.vy = 0;
		this.ax = 0;
		this.decx = 0;
	}

	handleObstacleCollision(collision, object){
		switch(collision) {
			
			case Collisions.bottom:
				if(this.vy > 0){
					if(this.vy !== 0) {
						this.y = this.y - this.vy;
						this.vy = 0;
					}	
				}
				this.moveAllowed.down = false;
				break;
			case Collisions.left:
				if(this.vx !== 0) {
					this.x = this.x - this.vx;
					this.vx = 0;
				}
				this.moveAllowed.left = false;
				break;
				
			case Collisions.right:
				if(this.vx !== 0) {
					this.x = this.x - this.vx;
					this.vx = 0;
				}
				this.moveAllowed.right = false;
				break;
				
			default:
				this.allowMovement();
		}		
	}
	
	handlePlayerCollision(collision, player){
		
		// handle collision with player from left 
		if(collision === Collisions.left && (collision !== Collisions.bottom && collision !== Collisions.top)) {
			if(this.moveAllowed.left ){
				this.vx = -MOV_OBJ_VX;
				}
			else{
					this.vx = 0;
				}
		}
		
		// handle collision with player from right
		if(collision === Collisions.right && (collision !== Collisions.bottom && collision !== Collisions.top)) {
			if(this.moveAllowed.right ){
				this.vx = MOV_OBJ_VX;
				}
				else{
					this.vx = 0;
				}
		}
		
	}
		
	update(){
		
		this.vy +=  MovableObstacle.gravity;		
		this.y += this.vy;	
		this.vx += - this.getDirection(this.vx) * MovableObstacle.decX;
		if(Math.abs(this.vx) <= MovableObstacle.decX) {
			this.vx = 0;
		}
		this.x += this.vx;		
	}	
	
}