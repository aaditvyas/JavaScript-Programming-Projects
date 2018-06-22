let team = {
  // Internal Variables
  _players: [],
  _games: [{opponent: "Broncos",
           teamPoints: 42,
           opponentPoints: 27}],
  
  // Getters
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  
  // Add functions
  addPlayer(firstName, lastName, age) {
    let player = {firstName: firstName,
                 lastName:
                 lastName,
                 age: age}
    this._players.push(player);
  },
  
  addGame(name, teamPoints, opponentPoints) {
    let game = {name: name,
               teamPoints: teamPoints,
               opponentPoints: opponentPoints};
    this._games.push(game);
  }
}

// Add new Players
team.addPlayer("Pablo", "Sanchez", 11);
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

// Print Players
console.log(team.players);

// Add new games
team.addGame("Browns", 20, 35);
team.addGame("Rockets", 75, 60);
team.addGame("Celtics", 80, 79);
team.addGame("Lions", 13, 30);

// Print Games
console.log(team.games);
