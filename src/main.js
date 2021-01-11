var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

// TODO - is path specified correctly?
ASSET_MANAGER.queueDownload("../res/Starship.png");
ASSET_MANAGER.queueDownload("../res/Alien-left-spritesheet.png");
ASSET_MANAGER.queueDownload("../res/alien.png");
ASSET_MANAGER.queueDownload("../res/MarsGround.png");

ASSET_MANAGER.downloadAll(function () {
	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	var canvas = document.getElementById('gameWorld');

	var ctx = canvas.getContext('2d');

	// Getting the width of our canvas (adding to our params object).
	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;
	console.log(`Canvas height: ${PARAMS.CANVAS_HEIGHT}`)

	gameEngine.init(ctx);

	gameEngine.addEntity(new SceneManager(gameEngine));

	gameEngine.start();
});
