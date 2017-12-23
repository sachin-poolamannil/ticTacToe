const Player=function(playerName,playerSymbol){
  this.playerName=playerName;
  this.playerSymbol=playerSymbol;
  this.playerMoves=[];
};

Player.prototype.addMove=function(move){
  this.playerMoves.push(move);
  return;
};

Player.prototype.hasWon=function(winningMoves){
  return winningMoves.some((winningMove)=>{
    return winningMove.every((move)=>{
      return this.playerMoves.includes(move);
    });
  });
};

Player.prototype.getTotalMovesPlayed=function(){
  return this.playerMoves.length;
};

Player.prototype.getPlayerSymbol=function(){
  return this.playerSymbol;
};
