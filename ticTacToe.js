let playersNames=['Player-1','Player-2'];
let playersSymbols=['X','O'];
let allowedMoves=[1,2,3,4,5,6,7,8,9];
let gamePlay;
let currentPlayerNumber=0;

const loadGame=function(){
  gamePlay=new GamePlay(playersNames,playersSymbols,allowedMoves);
  startGame();
};

const startGame=function(){
  document.getElementById('gameBoard').addEventListener("click",updateMoves);
  displayPlayersTurn(playersNames[currentPlayerNumber]);
};

const updateMoves=function(event){
  if(gamePlay.updatePlayerMove(playersNames[currentPlayerNumber%2],+event.target.id)){
    event.target.innerText=gamePlay.getPlayerSymbol(playersNames[currentPlayerNumber%2]);
    if(gamePlay.hasAnyWon()){
      displayAndEndGame(playersNames[currentPlayerNumber%2]+" won!!");
    }else if(gamePlay.isGameDraw()){
      displayAndEndGame("Game draw!!");
    }else{
      currentPlayerNumber++;
      displayPlayersTurn(playersNames[currentPlayerNumber%2]);
    }
  }
};

const displayAndEndGame=function(message){
  document.getElementById('gameBoard').removeEventListener("click",updateMoves);
  document.getElementById("displayGameStatistics").innerText=message;
  document.getElementById('gameBoard').style.backgroundColor = "#7C7777";
};

const displayPlayersTurn=function(playerName){
  document.getElementById("displayGameStatistics").innerText=playerName+"\'s turn";
}

window.onload=loadGame;
