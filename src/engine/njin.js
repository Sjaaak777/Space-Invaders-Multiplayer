class Njin {
  constructor() {
    this.value = 'from Njin constructor'
  }

  testFunction() {
    return 'Text from Njin testFunction'
  }
}

export { Njin }
export { Audio } from './audio/explosion'
export { Communicator } from './network/communicator'
export { Keyboard } from './input/keyboard'
export { Mouse } from './input/mouse'
export { Scene } from './display/scene'
export { PlayerStorage } from './storage/player-storage'

