export class Audio {
  constructor() {
    this.explosion = 'Boom!'
    this.laser = 'Piew'
  }
  getSound() {
    return 'Make some Noise.'
  }

  setStereo() {
    return 'Stereo Activated.'
  }

  setVolume(volume) {
    return `Volume set to ${volume} %.`
  }
}
