const map = []
let dist = []
const INF = 1e10
const n = 5

function initMap (n) {
  for (let i = 1; i <= n; i++) {
    map[i] = []
    for (let j = 1; j <= n; j++) {
      map[i][j] = INF
    }
  }
}

function addMap (u, v, w) {
  map[u][v] = w
}

function dijkstra (u) {
  const flag = []
  dist = []
  const p = []
  for (let i = 1; i <= n; i++) {
    if (u === i) {
      dist[i] = 0
    } else {
      dist[i] = map[u][i]
    }
    flag[i] = false
    if (dist[i] === INF) {
      p[i] = -1
    } else {
      p[i] = u
    }
  }
  flag[u] = true
  let t = u
  for (let i = 1; i <= n; i++) {
    let temp = INF
    // 寻找距离集合S最近的点
    for (let j = 1; j <= n; j++) {
      if (!flag[j] && dist[j] < temp) {
        t = j
        temp = dist[j]
      }
    }
    flag[t] = true
    // 更新集合中与t相邻接的点到远点u的距离
    for (let j = 1; j <= n; j++) {
      if (!flag[j] && map[t][j] < INF) {
        if (dist[j] > dist[t] + map[t][j]) {
          dist[j] = dist[t] + map[t][j]
          p[j] = t
        }
      }
    }
  }
}

initMap(n)
addMap(1,5,12)
addMap(5,1,8)
addMap(1,2,16)
addMap(2,1,29)
addMap(5,2,32)
addMap(2,4,13)
addMap(4,2,27)
addMap(1,3,15)
addMap(3,1,21)
addMap(3,4,7)
addMap(4,3,19)

const u = 5
dijkstra(u)

for (let i = 1; i <= n; i++) {
  let str = '小明：' + u + ' - 要去的位置：' + i
  if (dist[i] === INF) {
    str += ' sorry, 无路可达'
  } else {
    str += ' 最短距离为：' + dist[i]
  }
  console.log(str)
}
