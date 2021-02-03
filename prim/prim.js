const INF = 0x3fffffff;
const N = 100;
const s = [];
const closest = [];
const lowcost = [];

/**
 * 普莱姆算法，最小生成树
 * 时间复杂度：O(n^2)
 * 空间复杂度：用到closest，lowcost，O(n)
 */
function prim (n, u0, c) {
  s[u0] = true; // 初始化，先将u0加入集合S
  let i, j
  for (i = 1; i <= n; i++) {
    if (i !== u0) {
      lowcost[i] = c[u0][i]; // 初始化各个顶点到集合S（u0)最近的边值
      closest[i] = u0;
      s[i] = false;
    } else {
      lowcost[i] = 0;
    }
  }
  for (i = 1; i <= n; i++) {
    let temp = INF;
    let t = u0;
    for (j = 1; j <= n; j++) {
      // 找到距离集合S最近的店
      if (!s[j] && (lowcost[j] < temp)) {
        temp = lowcost[j];
        t = j;
      }
    }
    if (t === u0) {
      // 说明找不到连同的点
      break
    }
    s[t] = true; // 将找到的点t加入到集合S中
    for (j = 1; j <= n; j++) {
      // 拿距离[t][j]来对比，是根据刚刚加入的点t，更新各个点到集合S的最短距离
      if (!s[j] && (c[t][j]) < lowcost[j]) {
        lowcost[j] = c[t][j];
        closest[j] = t;
      }
    }
  }
}

const n = 7;
const c = [];
for (let i = 1; i <= n; i++) {
  c[i] = [];
  for (let j = 1; j <= n; j++) {
    c[i][j] = INF;
  }
}

function addPoint (u, v, w) {
  c[u][v] = w;
  c[v][u] = w;
}

addPoint(1,2,23);
addPoint(1,6,28);
addPoint(1,7,36);
addPoint(2,3,10);
addPoint(2,7,1);
addPoint(3,4,15);
addPoint(3,7,4);
addPoint(4,5,3);
addPoint(4,7,9);
addPoint(5,6,17);
addPoint(5,7,16);
addPoint(6,7,25);

const u0 = 1;

prim(n, u0, c);

console.log('数组 lowcost 的内容为：');
let str = '';
let sumCost = 0;
for (let i = 1; i <= n; i++) {
  str += lowcost[i] + ' ';
  sumCost += lowcost[i];
}
console.log(str);
console.log('最小的花费是：', sumCost);
