// If the player rolls a 1, they score nothing and it becomes the next player's turn.
// If the player rolls any other number, it is added to their turn total and the player's turn continues.
// If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

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
    //holdfunction()
  }else{
    totalObject.playerTurnTotal += roll;
  }
}

$(function(){
  $("#btnRoll").click(function(){
    playerRoll();

  });
  $("#btnHold").click(function(){
    // playerHold();
    // totalObject.playerTotal += totalObject.playerTurnTotal;
  });


  // Rolls();
});
