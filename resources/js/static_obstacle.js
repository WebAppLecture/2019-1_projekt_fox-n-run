class StaticObstacle extends Object{
	constructor(canvas, x, y, width, height, type, img){		
		super(canvas, x, y, width, height, type);
		this.img = img;
	}
	draw(){
		this.canvas.drawImage(this.img, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
	}
}