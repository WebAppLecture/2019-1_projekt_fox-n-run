class CollectableObstacle extends Object{
	constructor(canvas, x, y, width, height, type, img, numberOfFrames){		
		super(canvas, x, y, width, height, type);
		this.img = img;
		this.frameIndex = 0,
        this.tickCount = 0,
        this.ticksPerFrame = 7,
        this.numberOfFrames = numberOfFrames;
		this.width = this.width/ this.numberOfFrames;
		this.loop = true;
		
	}	
	draw() {
		this.canvas.drawImage(this.img, this.frameIndex * this.width ,0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
	
}