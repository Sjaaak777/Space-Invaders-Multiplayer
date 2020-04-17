import { Audio } from './audio/explosion'
import { Keyboard } from '../engine/input/keyboard'
import { Mouse } from '../engine/input/mouse'
import { Scene } from './display/scene'

class Njin {
  constructor() {
    this.value = 'from Njin constructor'
  }

  testFunction() {
    return 'Text from Njin testFunction'
  }
}

export { Njin, Audio, Keyboard, Mouse, Scene }
