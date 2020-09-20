let canvas = document.querySelector("#myCanvas").getContext('2d');

function loadGame(){
	let game = new Game();
	return game;
}
function loadBackground(){
	let backgroundParts = [];
	
	let backgroundImg = new Image();
	backgroundImg.src = "resources/data/background_upperpart.jpg";
	
	backgroundParts.push(new Background(canvas, backgroundImg,-390, 0, BG_WIDTH, BG_HEIGHT));
	backgroundParts.push(new Background(canvas, backgroundImg,700-390, 0, BG_WIDTH, BG_HEIGHT));
	backgroundParts.push(new Background(canvas, backgroundImg,1400-390, 0, BG_WIDTH, BG_HEIGHT));
	return backgroundParts;
}

function loadPlayer(){
	let runningLeftImg = [];
	for(let i = 0; i<8; i++){
		let img = document.createElement('img');
        img.src = "resources/data/sprites/Run_L_"+i+".png";
		runningLeftImg.push(img);
	}
	
	let runningRightImg = [];
	for(let i = 0; i<8; i++){
		let img = document.createElement('img');
        img.src = "resources/data/sprites/Run_"+i+".png";
		runningRightImg.push(img);
	}
	let standingImgRight = [];

	for(let i = 0; i<12; i++){
		let img = document.createElement('img');
        img.src = "resources/data/sprites/Idle_"+i+".png";	
		standingImgRight.push(img);
	}
	
	let standingImgLeft = [];

	for(let i = 0; i<12; i++){
		let img = document.createElement('img');
        img.src = "resources/data/sprites/L_Idle_"+i+".png";	
		standingImgLeft.push(img);
	}
	
	let jumpingImgLeft = [];
	for(let i = 0; i<14; i++){
		let img = document.createElement('img');
        img.src = "resources/data/sprites/L_Jump_"+i+".png";
		jumpingImgLeft.push(img);
	}
	
	let jumpingImgRight = [];
	for(let i = 0; i<14; i++){
		let img = document.createElement('img');
        img.src = "resources/data/sprites/Jump_"+i+".png";
		jumpingImgRight.push(img);
	}
	
	let fallingImgLeft = [];
	for(let i = 0; i<3; i++){
		let img = document.createElement('img');
        img.src = "resources/data/sprites/L_Fall_"+i+".png";	
		fallingImgLeft.push(img);
	}
	
	let fallingImgRight = [];
	for(let i = 0; i<3; i++){
		let img = document.createElement('img');
        img.src = "resources/data/sprites/Fall_"+i+".png";	
		fallingImgRight.push(img);
	}
			
	let player = new Player(canvas, PLAYER_START_X, PLAYER_START_Y, PLAYER_WIDTH, PLAYER_HEIGHT, PLAYER_JUMPING_HEIGHT, runningLeftImg, runningRightImg, standingImgLeft, standingImgRight, jumpingImgLeft, jumpingImgRight, fallingImgLeft, jumpingImgRight );
	return player;
}

function loadScore(){
	let score = new Score(canvas);
	return score;
}

function loadStaticObstacles(){
	let staticObstacles = [];
	let img = new Image();
	img.src = "resources/data/ground.jpg";
	
	staticObstacles.push(new StaticObstacle(canvas, 1400, 600, 300, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 1900 , 600, 300, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 2500 , 600, 300, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 3000 , 600, 500, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 4000 , 600, 200, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 4400 , 400, 200, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 4900 , 600, 1100, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 5300 , 400, 200, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 6000, 300, 100, 2000, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 6400 , 600, 400, 200,  ObjectTypes.static, img));	
	staticObstacles.push(new StaticObstacle(canvas, 6600 , 449, 200, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 7350 , 600, 380, 200, ObjectTypes.static, img));		
	staticObstacles.push(new StaticObstacle(canvas, 7870 , 400, 150, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 8400 , 400, 150, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 8900 , 400, 150, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 9300 , 600, 600, 200,  ObjectTypes.static, img));	
	staticObstacles.push(new StaticObstacle(canvas, 7870 , 400, 150, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 8400 , 400, 150, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 8900 , 400, 150, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 50, 400, 100,300, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 0, 600, 1200, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 50, 400, 100, 2000, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 10200 , 600, 150, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 10600 , 450, 150, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 11000 , 300, 150, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 11500 , 400, 250, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 12100 , 600, 360, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 12950 , 600, 650, 200, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 13300 , 449, 300, 50, ObjectTypes.static, img));
	staticObstacles.push(new StaticObstacle(canvas, 14000 , 600, 1000, 200, ObjectTypes.static, img));
	
	return staticObstacles;
}

function loadMonster(){
	let monsters =[];
	let img = new Image();
	img.src = "resources/data/monster.gif";
	monsters.push(new Monster(canvas, 9600, 500, MONSTER_WIDTH, MONSTER_HEIGHT ,"movable", 9300, 9900, 3, img));
	monsters.push(new Monster(canvas, 13450, 350, MONSTER_WIDTH, MONSTER_HEIGHT ,"movable", 13300, 13600, 3, img));

	return monsters;
}
function loadMovableObstacles(){

	let img = document.createElement('img');
    img.src = "resources/data/box.png";
	let movableObstacles = [];

	movableObstacles.push(new MovableObstacle(img,canvas, 3200, 500, MOV_OBJ_WIDTH, MOV_OBJ_HEIGHT, ObjectTypes.movable));
	movableObstacles.push(new MovableObstacle(img,canvas, 5350, 300, MOV_OBJ_WIDTH, MOV_OBJ_HEIGHT, ObjectTypes.movable));
	movableObstacles.push(new MovableObstacle(img,canvas, 6500, 500, MOV_OBJ_WIDTH, MOV_OBJ_HEIGHT, ObjectTypes.movable));
	movableObstacles.push(new MovableObstacle(img,canvas, 6500, 500, MOV_OBJ_WIDTH, MOV_OBJ_HEIGHT, ObjectTypes.movable));
	movableObstacles.push(new MovableObstacle(img,canvas, 12200, 300, MOV_OBJ_WIDTH, MOV_OBJ_HEIGHT, ObjectTypes.movable));
	movableObstacles.push(new MovableObstacle(img,canvas, 13200, 500, MOV_OBJ_WIDTH, MOV_OBJ_HEIGHT, ObjectTypes.movable));

	return movableObstacles;	
}

function loadCollectableObstacles(){
	let collectableObstacles = [];
	
	let orangeImage = new Image();
	orangeImage.src = "resources/data/fruits_existing.png";

	collectableObstacles.push(new CollectableObstacle(canvas, 250, 400, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable, orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 550, 350, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT,  ObjectTypes.collectable, orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 700, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT,  ObjectTypes.collectable, orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 1500, 350, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable, orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 1800, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 2100, 400, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 2200, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 2300, 330, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 2500, 360, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 2700, 310, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 2800, 330, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 2900, 340, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 3000, 350, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 3100, 360, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 3200, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 3300, 310, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 3800, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 4200, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 4400, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 4560, 350, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 4700, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 4900, 280, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 5100, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 6000, 100, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 6200, 200, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 6400, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 6600, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 6800, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 7000, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 8000, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 8200, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 8400, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 8600, 250, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 8800, 300, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 10700, 100, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 11100, 100, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 11400, 100, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 12200, 170, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));
	collectableObstacles.push(new CollectableObstacle(canvas, 12700, 200, COLL_OBJ_IMG_WIDTH, COLL_OBJ_IMG_HEIGHT, ObjectTypes.collectable,orangeImage, 6));


	return collectableObstacles;
}

function loadSounds(){
	let sounds = [];
	let gameOverSound = document.createElement("audio");
	let jumpSound = document.createElement("audio");
	let collectedFruit = document.createElement("audio");
	gameOverSound.src = "resources/data/audio/game_over_sound.mp3";	
	jumpSound.src = "resources/data/audio/jump.mp3";	
	
	sounds.push(gameOverSound);	
	sounds.push(jumpSound);
	sounds.push(collectedFruit);
	return sounds;
}

function loadGoal(){
	let img = new Image();
	img.src = "resources/data/goal.png";
	let goal = new Goal(canvas, 14600, 500, GOAL_WIDTH, GOAL_HEIGHT, "goal", img);
	return goal;
}
