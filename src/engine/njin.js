import { Audio } from '../engine/audio/audio'
import { Mouse } from '../engine/input/mouse'
import { Scene } from '../engine/scene/scene'

class Njin {
  constructor() {
    this.value = 'from Njin constructor'
  }

  testFunction() {
    return 'Text from Njin testFunction'
  }
}

export { Njin, Audio, Mouse, Scene }
