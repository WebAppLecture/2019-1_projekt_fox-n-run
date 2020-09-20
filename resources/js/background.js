class Background{
	constructor(canvas, image, x, y, width, height){		
		this.image = image;		
		this.canvas = canvas;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
	}	
	draw() {
		this.canvas.fillStyle = "black";
		this.canvas.fillRect(this.x, this.y+this.height, this.width, 200);
		this.canvas.drawImage(this.image, this.x, this.y, this.width,this.height);
		
    }
	
	update(playerVx, playerMovableObjectCollision){
		if(playerMovableObjectCollision){
			this.x = this.x - playerVx*0.25;
		}
		
	}
	// check if background img is not in shown canvas frame anymore
	// if it isn´t there anymore, then the bg img is either placed on the right side or left side
	checkOutsideCollision(pos, bg1, bg2){
		if(this.x +this.width < pos){
			if(bg1.x>bg2.x){
				this.x = bg1.x+ this.width;
			}
			if(bg1.x<bg2.x){
				this.x = bg2.x+this.width;
			}
		}
		if(this.x > pos+CANVAS_WIDTH){
			if(bg1.x<bg2.x){
				this.x = bg1.x- this.width;
			}
			if(bg1.x>bg2.x){
				this.x = bg2.x-this.width;
			}
		}
			
	}
}
