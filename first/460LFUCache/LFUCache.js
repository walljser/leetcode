/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.keyToVal = new Map();
  this.keyToFeq = new Map();
  this.feqToKeys = new Map();
  this.max = capacity;
  this.minFeq = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {

};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const LinkedHashSet = function() {
  const head = new Node(0, 0);
  const tail = new Node(0, 0);
  head.next = tail;
  tail.prev = head;
  this.head = head;
  this.tail = tail;
}

const Node = function(_key, _val) {
  this.key = _key;
  this.val = _val;
  this.prev = null;
  this.next = null;
}
