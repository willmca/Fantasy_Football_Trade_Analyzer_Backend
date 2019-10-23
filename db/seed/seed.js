const Player = require("../models/Players.js")
const PlayerData=require("../data/Players.json")

Player.find({}).deleteMany({}).then(() => {
    
    let newPlayerData = {};
    
    PlayerData.map(element => {
        
        newPlayerData.Name=element.Name;
        newPlayerData.Team=element.Team;
        newPlayerData.Position=element.Position;
        newPlayerData.Rating=element.Rating;
        newPlayerData.Rank=element.Rank;
        newPlayerData.PhotoURL=element.PhotoURL

       

        Player.create(newPlayerData)
        .then( (players) => {
            players.save()
            console.log(players)
          
            
        } )
    })
});



  