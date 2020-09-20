class Score{
	constructor(canvas){
		this.canvas = canvas;
		this.value = 0; // the number of fruits the player has collected
		this.x = 250;
		this.y = SCORE_Y;
		this.canvas.font = "30px Arial";
		this.color = "#0095DD";
		
	}
	update(offsetX){
		this.x = -offsetX +600;
	}
	draw() {
		this.canvas.fillStyle = this.color;
		this.canvas.fillText("Score: "+this.value, this.x, this.y);
	}
}