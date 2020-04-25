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
    const filteredPlayers = players.filter((item) => item !== playerId)
  }

  getPlayer(playerId) {
    return players.find(function (player, index) {
      return player.id == playerId
    })
  }

  listPlayers() {
    console.log(players)
    return players
  }

  clearPlayersList() {
    players = []
    }
    
    updateScore(playerId) {
        let player = this.getPlayer(playerId)
        player.score = 10
        this.listPlayers()
        
    }
}
