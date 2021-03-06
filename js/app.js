// var player1 = { name: 'You', color: 'yellow' };
// var player2 = { name: 'AI (Easy)', color: 'red' };
// var status = 'ready'; // 'ready', 'p1Turn', 'p2Turn', 'p1Win', 'p2Win'
var boardHTML = null
var columnsHTML = null

var turn = 'yellow'
var board = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null]
]

var toggleTurn = function () {
  turn = (turn === 'yellow') ? 'red' : 'yellow'
}

var checkGamesStatus = function(col, row) {
// comprobar horizontal
if(board[col, row] === board[col, row + 1])
if(board[col, row] === board[col, row + 2])
if(board[col, row] === board[col, row + 3])
if(board[col, row] === board[col, row - 1])
if(board[col, row] === board[col, row - 2])
if(board[col, row] === board[col, row + 3])
// comprobar vertical
if(board[col, row] === board[col + 1, row])
if(board[col, row] === board[col + 2, row])
if(board[col, row] === board[col + 3, row])
if(board[col, row] === board[col - 1, row])
if(board[col, row] === board[col - 2, row])
if(board[col, row] === board[col - 3, row])
// comprobar diagonal incremental
if(board[col, row] === board[col + 1, row + 1])
if(board[col, row] === board[col + 2, row + 1])
if(board[col, row] === board[col + 3, row + 1])
if(board[col, row] === board[col - 1, row - 1])
if(board[col, row] === board[col - 2, row - 1])
if(board[col, row] === board[col - 3, row - 1])
// comprobar diagonal decremental
if(board[col, row] === board[col + 1, row - 1])
if(board[col, row] === board[col + 2, row - 1])
if(board[col, row] === board[col + 3, row - 1])
if(board[col, row] === board[col - 1, row + 1])
if(board[col, row] === board[col - 2, row + 1])
if(board[col, row] === board[col - 3, row + 1]);
}

var columnEventHandler = function (evt) {
  var columnId = evt.target.id.substr(1, 1)
  for (var i = 0; i < board[columnId].length; i++) {
    if (!board[columnId][i]) {
      board[columnId][i] = turn
      checkGamesStatus()
      toggleTurn()
      render()
      break
    }
  }
}

var bindColumnHandlers = function () {
  columnsHTML = document.getElementsByClassName('column')
  for (var i = 0; i < columnsHTML.length; i++) {
    columnsHTML[i].onclick = columnEventHandler
  }
}

var render = function () {
  var html = ''
  for (var i = 0; i < board.length; i++) {
    html += '<div id="c' + i + '" class="column">'
    for (var j = board[i].length - 1; j >= 0; j--) {
      html += '<div id="s' + i + j + '" class="spot'
      if (board[i][j]) html += ' ' + board[i][j]
      html += '"></div>'
    }
    html += '</div>'
  }
  boardHTML.innerHTML = html
  bindColumnHandlers()
}

var init = function () {
  boardHTML = document.getElementById('board')
  turn = Math.random() > 0.5 ? 'yellow' : 'red'
  render()
}

window.onload = init
