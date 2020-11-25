class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
car1=createSprite(250,displayHeight/2+200);
car1.addImage(car1img)
car2=createSprite(displayWidth-250,displayHeight/2+200)
car2.addImage(car2img)
//goall=createSprite(100,displayHeight/2)
//goall.addImage(goallimg)
//goalr=createSprite(displayWidth-100,displayHeight/2)
//goalr.addImage(goalrimg)
//ball=createSprite(displayWidth/2,displayHeight/2)
//ball.addImage(ballimg)
cars=[car1,car2]
  }

  play(){
    form.hide();
background(backgroundimg)
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      
      var index = 0;

      //x and y position of the cars
      var xr;
      var xl;
      var yu ;
      var yd
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        xr = displayWidth-allPlayers[plr].distancer;
        xl = displayWidth-allPlayers[plr].distancel;
        //use data form the database to display the cars in y direction
        yu = displayHeight - allPlayers[plr].distanceu;
        yd = displayHeight - allPlayers[plr].distanced;
        
        if (index === player.index){
          if(keyIsDown(RIGHT_ARROW)){
            cars[index-1].x=xr
          }
          if(keyIsDown(LEFT_ARROW)){
            cars[index-1].x=xl
          }
          if(keyIsDown(UP_ARROW)){
            cars[index-1].y=yu
          }
          if(keyIsDown(DOWN_ARROW)){
            cars[index-1].y=yd
          }
          camera.position.x = cars[index-1].x
          camera.position.y = cars[index-1].y
        
        
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distanceu +=10
      player.update();

    
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distancer +=10
      player.update();

    
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distancel +=10
      player.update();

    
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.distanced +=10
      player.update();

    
    }
    drawSprites();
  }
  end(){
    console.log("GAME ENDED")
    
  }
}
