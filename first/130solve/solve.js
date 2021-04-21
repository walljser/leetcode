/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function(board) {
//   if (!board || board.length === 0) {
//     return ;
//   }
//   const m = board.length;
//   const n = board[0].length;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       const isEdge = i === 0 || j === 0 || (i === m - 1) || (j === n - 1)
//       if (isEdge && board[i][j] === 'O') {
//         dfs(board, i, j);
//       }
//     }
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === '#') {
//         board[i][j] = 'O'
//       } else if (board[i][j] === 'O') {
//         board[i][j] = 'X'
//       }
//     }
//   }
// };

// const dfs = function (board, i, j) {
//   if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] == 'X' || board[i][j] === '#') {
//     return;
//   }
//   board[i][j] = '#';
//   dfs(board, i - 1, j);
//   dfs(board, i + 1, j);
//   dfs(board, i, j - 1);
//   dfs(board, i, j + 1);
}

var solve = function(board) {
  if (!board || board.length === 0) {
    return;
  }
  const rows = board.length;
  const cols = board[0].length;
  const uf = new UnionFind(rows * cols + 1);
  const dummyNode = rows * cols;

  const node = function(i, j) {
    return i * cols + j;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'O') {
        if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
          uf.union(node(i, j), dummyNode);
        } else {
          if (i > 0 && board[i - 1][j] == 'O')
            uf.union(node(i, j), node(i - 1, j));
          if (i < rows - 1 && board[i + 1][j] == 'O')
            uf.union(node(i, j), node(i + 1, j));
          if (j > 0 && board[i][j - 1] == 'O')
            uf.union(node(i, j), node(i, j - 1));
          if (j < cols - 1 && board[i][j + 1] == 'O')
            uf.union(node(i, j), node(i, j + 1));
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (uf.isConnected(node(i, j), dummyNode)) {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }
}

class UnionFind {
  parents = [];

  constructor(totalNodes) {
    for (let i = 0; i < totalNodes; i++) {
      this.parents[i] = i;
    }
  }

  union(node1, node2) {
    const root1 = this.find(node1);
    const root2 = this.find(node2);
    if (root1 != root2) {
      this.parents[root2] = root1;
    }
  }

  find(node) {
    while (this.parents[node] !== node) {
      this.parents[node] = this.parents[this.parents[node]];
      node = this.parents[node];
    }
    return node;
  }

  isConnected(node1, node2) {
    return this.find(node1) === this.find(node2);
  }
}
