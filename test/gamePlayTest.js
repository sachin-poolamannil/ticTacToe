let assert=require('assert');
let GamePlay=require('../gamePlay.js');

let test={};

test['setPlayers creates new Player and push Player Object to its array']=function(){
  let playersNames=['Tom','Jerry'];
  let playersSymbols=['o','x'];
  let allowedMoves=[1,2,3,4,5,6,7,8,9];
  let gamePlay=new GamePlay(playersNames,playersSymbols,allowedMoves);
  // console.log(gamePlay);
};

test['updatePlayerMove updates the move of a specific player']=function(){
  let playersNames=['Tom','Jerry'];
  let playersSymbols=['o','x'];
  let allowedMoves=[1,2,3,4,5,6,7,8,9];
  let gamePlay=new GamePlay(playersNames,playersSymbols,allowedMoves);
  gamePlay.updatePlayerMove(playersNames[0],1);
  gamePlay.updatePlayerMove(playersNames[0],2);
  // console.log(gamePlay.playersData[playersNames[0]]);
  assert.deepEqual(gamePlay.playersData[playersNames[0]].playerMoves,[1,2]);
};

test['findWhoWon returns the winner player object']=function(){
  let playersNames=['Tom','Jerry'];
  let playersSymbols=['o','x'];
  let allowedMoves=[1,2,3,4,5,6,7,8,9];
  let gamePlay=new GamePlay(playersNames,playersSymbols,allowedMoves);
  gamePlay.updatePlayerMove(playersNames[0],1);
  gamePlay.updatePlayerMove(playersNames[1],4);
  gamePlay.updatePlayerMove(playersNames[0],2);
  gamePlay.updatePlayerMove(playersNames[1],6);
  gamePlay.updatePlayerMove(playersNames[0],5);
  gamePlay.updatePlayerMove(playersNames[1],7);
  gamePlay.updatePlayerMove(playersNames[0],3);
  gamePlay.updatePlayerMove(playersNames[1],8);
  assert.deepEqual(gamePlay.findWhoWon(),'Tom');
};

test['hasAnyWon checks whether any player has won']=function(){
  let playersNames=['Tom','Jerry'];
  let playersSymbols=['o','x'];
  let allowedMoves=[1,2,3,4,5,6,7,8,9];
  let gamePlay=new GamePlay(playersNames,playersSymbols,allowedMoves);
  gamePlay.updatePlayerMove(playersNames[0],1);
  gamePlay.updatePlayerMove(playersNames[1],4);
  gamePlay.updatePlayerMove(playersNames[0],2);
  gamePlay.updatePlayerMove(playersNames[1],6);
  gamePlay.updatePlayerMove(playersNames[0],5);
  gamePlay.updatePlayerMove(playersNames[1],7);
  gamePlay.updatePlayerMove(playersNames[0],3);
  gamePlay.updatePlayerMove(playersNames[1],8);
  assert.ok(gamePlay.hasAnyWon());

  playersNames=['Tom','Jerry'];
  playersSymbols=['o','x'];
  allowedMoves=[1,2,3,4,5,6,7,8,9];
  gamePlay=new GamePlay(playersNames,playersSymbols,allowedMoves);
  gamePlay.updatePlayerMove(playersNames[0],1);
  gamePlay.updatePlayerMove(playersNames[1],4);
  gamePlay.updatePlayerMove(playersNames[0],2);
  gamePlay.updatePlayerMove(playersNames[1],6);
  gamePlay.updatePlayerMove(playersNames[0],5);
  gamePlay.updatePlayerMove(playersNames[1],7);
  assert.ok(!gamePlay.hasAnyWon());

};

exports.test=test;
