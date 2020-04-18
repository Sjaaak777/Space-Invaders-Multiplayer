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
export { Keyboard } from './input/keyboard'
export { Mouse } from './input/mouse'
export { Network } from './network/multiplayer'
export { Scene } from './display/scene'
