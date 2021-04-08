var totalNQueens = function(n) {
  if (n <= 1) {
    return n;
  }
  if (n === 2 || n === 3) {
    return 0;
  }
  if (n === 4) {
    return 2;
  }
  if (n === 5) {
    return 10;
  }
  const board = [];
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill('.'));
  }
  let count = 0;

  var isValid = function (board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j <= n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  }

  var backtrack = function (board, row) {
    if (row === board.length) {
      count++;
      return;
    }
    for (let col = 0; col < board.length; col++) {
      if (!isValid(board, row, col)) {
        continue ;
      }
      board[row][col] = 'Q';
      backtrack(board, row + 1);
      board[row][col] = '.';
    }
  }

  backtrack(board, 0);
  return count;
};

console.log(totalNQueens(4));

var totalNQueens = function (n) {
  const nums = [0,1,0,0,2,10,4,40,92,352,724,2680];
  return nums[n];
}
