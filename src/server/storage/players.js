let players = []

export default class Players {
  constructor(id) {
    this.id = id
    this.score = 0
  }

  addPlayer(playerId) {
    players.push({ id: playerId, score: this.score })
  }

  removePlayer(playerId) {
    players = players.filter((object) => object.id !== playerId)
  }

  getPlayer(playerId) {
    return players.find(function (player, index) {
      return player.id == playerId
    })
  }

  listPlayers() {
    console.log('van listplayers', players)
  }

  clearPlayersList() {
    players = []
  }

  updateScore(playerId) {
    let player = this.getPlayer(playerId)
    if (player) {
      player.score = this.score + 10
    }
  }
}
