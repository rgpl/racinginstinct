var game = new Phaser.Game(1334,750,Phaser.AUTO,'game');

console.log("device->",game.device);

var Preloader = {
	preload:function() {
		game.load.image('bg','src/assets/images/bg.png');
		game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;	
	
	},
	create:function(){
		var preloadBg = game.add.image(0,0,'bg');

	}
};

game.state.add("preload",Preloader);
game.state.start('preload');