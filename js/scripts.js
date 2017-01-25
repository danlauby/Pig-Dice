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
   if(totalObject.playerTotal >= 100 || totalObject.compTotal >=100){
     endGame();
   }else {
     var roll = rolls();
     if(roll === 1){
       totalObject.playerTurnTotal = 0;
       endGame();
       displayPlayerOutput();
       easyCompRoll();
     }else{
       totalObject.playerTurnTotal += roll;
     }
   }
}

var easyCompRoll = function(){
  if(totalObject.playerTotal >= 100 || totalObject.compTotal >=100){
    endGame();
  }else {
    var roll = rolls();
    if(turns < 2){
      if(roll === 1){
        totalObject.compTurnTotal = 0;
        endGame();
        displayCompOutput();
      }else{
        totalObject.compTurnTotal += roll;
        turns +=1;
        easyCompRoll();
      }
    }else{
        endGame();
        displayCompOutput();
      turns= 0;
    }
  }
}

var endGame = function(){
  if(totalObject.playerTotal >= 100 || totalObject.compTotal >=100){
    return true;
  }else {
    totalObject.playerTotal += totalObject.playerTurnTotal;
    totalObject.compTotal += totalObject.compTurnTotal;
    totalObject.playerTurnTotal = 0;
    totalObject.compTurnTotal = 0;
    return false;
  }
}

//front endvvvvvv
function displayPlayerOutput(){
  $(".player-output").empty();
  $(".player-output").append("<h1>Your turn total is: "+ totalObject.playerTurnTotal + "</h1>").append("<h2> Your overall total is: " + totalObject.playerTotal+"<h2>");
}

function displayCompOutput(){
  $(".comp-output").empty();
  $(".comp-output").append("<h1>The Computers turn total is: "+ totalObject.compTurnTotal + "</h1>").append("<h2> The Computers overall total is: " + totalObject.compTotal+"<h2>");
}

function displayResult(){
  $("button").hide();
  $("#displayHolder").hide();
  $(".win-holder").show();
  if(totalObject.playerTotal>=100){
    $(".player-wins").show();
  }else if(totalObject.compTotal>=100){
    $(".comp-wins").show();
  }
}

$(function(){
  $("#btnRoll").click(function(){
    playerRoll();
    displayPlayerOutput();

  });
  $("#btnHold").click(function(){
    endGame();
    if (endGame()===true) {
      displayResult();
    }else if (endGame()===false){
      displayPlayerOutput();
      easyCompRoll();

      if (endGame()===true) {
        displayResult();
      }

      displayCompOutput();
    }
  });



  // Rolls();
});
