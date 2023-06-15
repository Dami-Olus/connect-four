/*----- constants -----*/


/*----- state variables -----*/


let board
let winner
let turn


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
function init(){
  board = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
  ]
  turn = 1
  winner = null
  render()
}

init()

function render(){
  renderBoard()
  renderMessage()
  renderControls()
}

function renderBoard(){
  board.forEach(function(colArr, colIdx){
    colArr.forEach(function(cellVal, rowIdx){
      console.log(colIdx, rowIdx)
    })
  }) 
}
function renderMessage(){}
function renderControls(){}