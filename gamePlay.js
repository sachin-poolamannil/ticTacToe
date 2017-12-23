const GamePlay=function(playersNames,playersSymbols,allowedMoves){
  this.playersNames=playersNames;
  this.playersSymbols=playersSymbols;
  this.allowedMoves=allowedMoves;
  this.playersData={};
  this.setPlayers();
};

GamePlay.prototype.setPlayers=function(){
  let iter=0;
  this.playersNames.forEach((playerName)=>{
    this.playersData[playerName]=new Player(playerName,this.playersSymbols[iter]);
    iter++;
  });
};

GamePlay.prototype.updatePlayerMove=function(playerName,move){
  if(this.isMovePossible(+move)){
    this.playersData[playerName].addMove(move);
    this.removeAllowedMove(+move);
    return true;
  }
  return false;
};

GamePlay.prototype.getPlayerSymbol=function(playerName){
  return this.playersData[playerName].getPlayerSymbol();
};

GamePlay.prototype.findWhoWon=function(){
  return this.playersNames.filter((playerName)=>{
    return this.playersData[playerName].hasWon(winningMoves);
  })[0];
};

GamePlay.prototype.hasAnyWon=function(){
  return this.playersNames.some((playerName)=>{
    return this.playersData[playerName].hasWon(winningMoves);
  });
};

GamePlay.prototype.isGameDraw=function(){
  return !this.hasAnyWon() && this.allowedMoves.length==0;
};

GamePlay.prototype.isGameOnGoing=function(){
  return !this.hasAnyWon() || !this.isGameDraw();
};

GamePlay.prototype.hasGameEnded=function(){
  return this.hasAnyWon() || this.isGameDraw();
};


GamePlay.prototype.removeAllowedMove=function(move){
  let moves=this.allowedMoves;
  this.allowedMoves=moves.slice(0,moves.indexOf(move)).concat(moves.slice(moves.indexOf(move)+1));
};

GamePlay.prototype.isMovePossible=function(move){
  return this.allowedMoves.includes(+move);
};

const winningMoves=[[1,2,3], [4,5,6], [7,8,9],
             [1,4,7], [2,5,8], [3,6,9],
             [1,5,9], [3,5,7]
            ];
