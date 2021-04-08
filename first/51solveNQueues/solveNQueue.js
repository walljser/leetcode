var solveNQueens = function(n) {
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill('.'));
  }
  const result = [];

  // 因为我们是从上往下填充的，所以只需要上方，左上方，右上方是否有皇后
  var isValid = function(board, row, col) {
    const n = board.length;
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }

    // 检查左上角
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    // 检查右上方
    for (let i = row - 1, j = col + 1; i >= 0 && j <= n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }

    return true;
  }

  var backtrack = function(board, row) {
    if (row === board.length) {
      const stringBoard = board.slice();
      for (let i = 0; i < board.length; i++) {
        stringBoard[i] = stringBoard[i].join('')
      }
      result.push(stringBoard);
      return;
    }
    const n = board.length;
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row][col] = 'Q';
      backtrack(board, row + 1);
      board[row][col] = '.';
    }
  }

  backtrack(board, 0);

  return result;
};

console.log(solveNQueens(4));
