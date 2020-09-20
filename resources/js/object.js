class Object{
	constructor(canvas, x, y, width, height, type){
		this.canvas = canvas;
		this.x = x;
        this.y = y;
		this.width = width;
		this.height = height;
		this.type = type; 	
		
		this.frameIndex = 0,
        this.tickCount = 0,
        this.ticksPerFrame = 5;
        this.numberOfFrames = 7;
		this.loop = true;
	}
	
	// update frame index for spritesheets
	updateFrameIndex(){
		this.tickCount += 1;
			
        if (this.tickCount > this.ticksPerFrame) {
        
            this.tickCount = 0;
        	
            // If the current frame index is in range
            if (this.frameIndex < this.numberOfFrames - 1) {	
                // Go to the next frame
                this.frameIndex += 1;
            }	
			else if(this.loop){
				this.frameIndex = 0;
			}
        }
	}

	draw() {
		this.canvas.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
	
	// check collision of two objects r1 and r2
	static collisionCheck(r1, r2){
		let dx=(r1.x+r1.width/2)-(r2.x+r2.width/2),
			dy=(r1.y+r1.height/2)-(r2.y+r2.height/2),
			width=(r1.width+r2.width)/2,
			height=(r1.height+r2.height)/2,
			crossWidth=width*dy,
			crossHeight=height*dx,
			collision=false;
		
		if(Math.abs(dx)<=width && Math.abs(dy)<=height){
			if(crossWidth>crossHeight){
				collision = (crossWidth>(-crossHeight)) ? Collisions.top : Collisions.right;
			}else{
				collision= (crossWidth>-(crossHeight)) ? Collisions.left : Collisions.bottom;
			}
			return(collision);
		} else {
			return false;
		}
	}
}