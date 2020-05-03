let tanks = []

export default class Tank {
  // ### STEP 7 ###
  addTank(tank) {
    tanks.push(tank)
    console.log('tanks: addTank()', tanks)
    this.listTanks()
  }

  listTanks() {
    console.log('tanks: listTanks()', tanks)
  }

  getTanks() {
    // tanks.forEach((tank) => console.log('van Get Tanks', tank))
    console.log('tanks: getTanks()', tanks)
    return tanks
  }

  removeTank(playerId) {
    tanks = tanks.filter((object) => object.id !== playerId)
  }
}
