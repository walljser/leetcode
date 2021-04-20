/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board || board.length === 0) {
    return ;
  }
  const m = board.length;
  const n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const isEdge = i === 0 || j === 0 || (i === m - 1) || (j === n - 1)
      if (isEdge && board[i][j] === 'O') {
        dfs(board, i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '#') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }
};

const dfs = function (board, i, j) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] == 'X' || board[i][j] === '#') {
    return;
  }
  board[i][j] = '#';
  dfs(board, i - 1, j);
  dfs(board, i + 1, j);
  dfs(board, i, j - 1);
  dfs(board, i, j + 1);
}

// const d = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
// const d = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
// const d = [["O","O","O"],["O","O","O"],["O","O","O"]];
const d = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
solve(d);
