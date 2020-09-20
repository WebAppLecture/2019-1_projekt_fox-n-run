class MovableObject extends Object{
	constructor(canvas, x, y, width, height, type){
		super(canvas, x, y, width, height, type);
        this.vy = 0;
        this.vx = 0;
		this.ax = 0;
		this.decx = 0;
		this.movingX = false;
		this.allowMovement();
    }
	
	static get movingObstacleDecX(){
		return 0.7;
	}
	
	static get accX() {
		return 1.2;
	}
	
	static get decX() {
		return 0.2;
	}	
	
	static get gravity() {
		return 0.5;
	}
    	
	
	getDirection(val) {
		if(val >= 0) {
			return 1;
		}
		return -1;
	}
		
	
	allowMovement() {
		this.moveAllowed = {
			"up": true,
			"down": true,
			"right": true,
			"left": true,
		};
	}

	
	
}