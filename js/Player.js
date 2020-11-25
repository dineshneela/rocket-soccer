class Player {
  constructor(){
    this.index = null;
    this.distancer = 0;
    this.distancel = 0;
    this.distanceu = 0;
    this.distanced = 0;
    this.name = null;
    
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distancer:this.distancer,
      distancel:this.distancel,
      distanceu:this.distanceu,
      distanced:this.distanced
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  
}
