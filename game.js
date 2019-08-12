const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: {y:300},
          debug: false
      }
  },
  scene: {
      preload: preload,
      create: create,
      // update: update
  }
};

const game = new Phaser.Game(config);

  function preload() {
    this.load.image('sky', 'assets/sky.png');
  }

  function create() {
    this.add.image(400, 300, 'sky')
  }