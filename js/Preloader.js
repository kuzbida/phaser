BunnyDefender.Preloader = function (game) {
  this.preloaderBar = null;
  this.titleText = null;
  this.ready = false;
};

BunnyDefender.Preloader.prototype = {
  preload: function () {
    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
    this.preloadBar.anchor.setTo(0.5,0.5);
    this.load.setPreloadSprite(this.preloadBar);
    this.titleText = this.add.image(this.world.centerX, this.world.centerY - 220, 'titleImage');
    this.titleText.anchor.setTo(0.5,0.5);
    this.load.image('titleScreen', 'assets/images/TitleBg.png');
    this.load.bitmapFont('eightbitwonder', 'assets/fonts/eightbitwonder.png', 'assets/fonts/eightbitwonder.fnt');
  },

  create: function () {
    this.preloadBar.cropEnabled = false;
  },

  update: function () {
    this.ready = true;
    this.state.start('StartMenu');
  }
};