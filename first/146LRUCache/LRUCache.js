/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.maxSize = capacity;
  const dbl = new DoubleList();
  const map = new Map();
  this.map = map;
  this.dbl = dbl;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.map.get(key)
  if (!node) {
    return -1;
  }
  this.dbl.remove(node);
  this.dbl.addLastest(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = this.map.get(key);
  if (node) {
    this.dbl.remove(node);
    node.val = value;
    this.dbl.addLastest(node);
  } else {
    node = new Node(key, value);
    const size = this.dbl.getSize();
    if (size < this.maxSize) {
      this.dbl.addLastest(node);
      this.map.set(key, node);
    } else {
      const deleteNode = this.dbl.removeFirst();
      this.map.delete(deleteNode.key);
      this.dbl.addLastest(node);
      this.map.set(key, node);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const Node = function(_key, _val) {
  this.key = _key;
  this.val = _val;
  this.prev = null;
  this.next = null;
}

const DoubleList = function() {
  this.size = 0;
  const head = new Node(0, 0);
  const tail = new Node(0, 0);
  head.next = tail;
  tail.prev = head;
  this.head = head;
  this.tail = tail;
}

DoubleList.prototype.remove = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.size--;
}

DoubleList.prototype.addLastest = function(node) {
  node.next = this.tail;
  node.prev = this.tail.prev;
  this.tail.prev.next = node;
  this.tail.prev = node;
  this.size++;
}

DoubleList.prototype.removeFirst = function() {
  const firstNode = this.head.next;
  firstNode.next.prev = this.head;
  this.head.next = firstNode.next;
  this.size--;
  return firstNode;
}

DoubleList.prototype.getSize = function() {
  return this.size;
}

// ["LRUCache","put","put","get","put","put","get"]
// [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]

const lru = new LRUCache(2);
lru.put(2, 1);
lru.put(2, 2);
console.log(lru.get(2));
