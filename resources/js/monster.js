class Monster extends Object{
	constructor(canvas, x, y, width, height, type, xLeftBound, xRightBound, speed, img){		
		super(canvas, x, y, width, height, type);
		this.xLeftBound = xLeftBound;
		this.xRightBound = xRightBound;
		this.movingRight = true;
		this.img = img;
		this.speed = speed;
	}		
	update(){
		// monster moves within the space between left and right boundary
		if(this.x + this.width> this.xRightBound){
			this.movingRight = false;
		}
		if(this.x <this.xLeftBound){
			this.movingRight = true;
		}
		if(this.movingRight){
			this.x += this.speed;
		}
		else{
			this.x -= this.speed;
		}
	}
}