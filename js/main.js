var game = new Phaser.Game(800, 600, Phaser.AUTO);

var GameState = {
    preload: function(){
        this.load.image('background', 'assets/images/bg.jpg');
        this.load.image('fish', 'assets/images/fish.png')
    },
    create: function(){
        this.background = this.game.add.sprite(0, 0, 'background');
        this.fish = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'fish');
        this.fish.anchor.setTo(0.5, 0.5);
        this.fish.scale.setTo(-0.5, 0.5);
    },
    update: function(){
        this.fish.angle += 0.5;
    }
};

game.state.add('GameState', GameState);
game.state.start('GameState');