let assert=require('assert');
const Player=require('../player.js');
let test={};

const winningMoves=[[1,2,3], [4,5,6], [7,8,9],
             [1,4,7], [2,5,8], [3,6,9],
             [1,5,9], [3,6,7]
            ];

test['hasWon checks whether the player moves contain winning move combination']=function(){
  let tom=new Player("Tom");
  let playerMoves=[1,2,3];
  tom.addMove(1);
  tom.addMove(2);
  tom.addMove(3);
  assert.ok(tom.hasWon(winningMoves));

  jerry=new Player("Jerry");
  jerry.addMove(1);
  jerry.addMove(2);
  jerry.addMove(5);
  jerry.addMove(6);
  jerry.addMove(7);
  assert.ok(!jerry.hasWon(winningMoves));
};

exports.test=test;
