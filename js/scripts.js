// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

var turns = 0
var totalObject = {
      playerTurnTotal: 0,
      playerTotal: 0,
      compTurnTotal: 0,
      compTotal: 0
    }

function rolls(){
  return Math.round(Math.random() * (5) + 1);
}

 var playerRoll = function(){
  var roll = rolls();
  console.log(roll);
  if(roll === 1){
    totalObject.playerTurnTotal = 0;
    hold();
  }else{
    totalObject.playerTurnTotal += roll;
  }
}

var hold = function(){
  totalObject.playerTotal += totalObject.playerTurnTotal;
  totalObject.compTotal += totalObject.compTurnTotal;
  totalObject.playerTurnTotal = 0;
  totalObject.compTurnTotal = 0;
}

var compRoll = function(){
  var roll = rolls();
  console.log(roll);
  if(turns < 2){
    if(roll === 1){
      totalObject.compTurnTotal = 0;
      hold();
    }else{
      totalObject.compTurnTotal += roll;
      turns +=1
      compRoll();
    }
  }else{
    hold();
  }
}


//front endvvvvvv
$(function(){
  $("#btnRoll").click(function(){
    playerRoll();

  });
  $("#btnHold").click(function(){
    hold();
    compRoll();
  });


  // Rolls();
});
