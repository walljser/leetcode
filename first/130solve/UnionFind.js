class UnionFind {
  parents = [];

  constructor(totalNodes) {
    for (let i = 0; i < totalNodes; i++) {
      parents[i] = i;
    }
  }

  union(node1, node2) {
    const root1 = this.find(node1);
    const root2 = this.find(node2);
    if (root1 != root2) {
      parents[root2] = root1;
    }
  }

  find(node) {
    while (parents[node] !== node) {
      parents[node] = parents[parents[node]];
      node = parents[node];
    }
    return node;
  }

  isConnected(node1, node2) {
    return this.find(node1) === this.find;
  }
}
