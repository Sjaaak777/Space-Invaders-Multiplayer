let players = []

export class PlayerStorage {
  constructor(game) {}

  addPlayer(data) {
    players.push({ id: data, name: 'test tank' })
  }

  removePlayer(id) {}

  getPlayer(id) {}

  listPlayers() {
    console.log(players)
  }
}

// DO NOT DELETE - To be implemented (TBI)

// const getFilteredTank = function (players, playerId) {
//   return players.find(function (player, index) {
//     return player.id == playerId
//   })
// }

// const player = getFilteredTank(players, 6)
// console.log(player)
