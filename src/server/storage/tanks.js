export default class Tank {
  constructor() {
    this.tanks = []
  }

  // ### STEP 7 ###
  addTank(tank) {
    this.tanks.push(tank)
  }

  listTanks() {}

  getTanks() {
    return this.tanks
  }

  setMarkedForDeletion(tankId) {
    let tankToDelete = this.tanks.find((obj) => obj.id == tankId)
    tankToDelete.markedForDeletion = true
  }

  removeTank() {
    this.tanks = this.tanks.filter((obj) => !obj.markedForDeletion)
  }

  removeTankWithMarkedForDeletion(socketId) {}
}

setInterval(() => {}, 1000 / 0.5)

setInterval(() => {}, 1000 / 0.5)
