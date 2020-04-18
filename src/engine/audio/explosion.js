export class Audio {
  constructor() {
    this.explosion = 'Boom!'
    this.laser = 'Piew'
  }
  getSound() {
    console.log('Make some Noise.')
  }

  setStereo() {
    console.log('Stereo Activated.')
  }

  setVolume(volume) {
    console.log(`Volume set to ${volume} %.`)
  }
}
