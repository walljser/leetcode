var Node = function(_key, _val) {
  this.key = _key;
  this.val = _val;
  this.prev = null;
  this.next = null;
}

var DoubleList = function() {
  const head = new Node(0, 0);
  const tail = new Node(0, 0);
  head.next = tail;
  tail.prev = head;
  this.head = head;
  this.tail = tail;
}

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
  let node = this.keyToVal.get(key);
  if (!node) {
    return -1;
  }
  const value = this.keyToVal.get(key);
  this.addFeq(key);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this.keyToFeq.size >= this.max) {
    const minFeqKeyMap = this.feqToKeys.get(this.minFeq);
  } else {

  }
};

/**
 *
 * @param {*} key
 * @param {*} value
 */
LFUCache.prototype.deleteMinFeqKey = function(key, value) {
  const minFeqKeyMap = this.feqToKeys.get(this.minFeq);
  this.feqKeyMap
}

/**
 * 增加使用频率
 * @param {*} key
 */
LFUCache.prototype.addFeq = function(key) {
  const feq = this.keyToFeq.get(key) || 0;
  const newFeq = feq + 1;
  this.deleteFromFeqToKeys(key);
  this.addToFeqToKeys(key, newFeq);
  this.keyToFeq.set(key, newFeq)
}

/**
 * 向上找最小的使用频率，更新
 * @param {*} feq
 * @returns
 */
LFUCache.prototype.findMinFeq = function(feq) {
  if (this.feqToKeys.size === 0) {
    return;
  }
  const feqKeyMap = this.feqToKeys.get(feq);
  if (feqKeyMap.size > 0) {
    this.minFeq = feq;
    return feq;
  } else {
    this.findMinFeq(feq + 1);
  }
}

/**
 * 从feqToKeys中删除一个key
 * @param {*} key
 */
LFUCache.prototype.deleteFromFeqToKeys = function(key) {
  const feq = this.keyToFeq.get(key);
  const feqKeyMap = this.feqToKeys.get(feq);
  if (this.minFeq === feq) {
    // 属于最小使用频率圈
    feqKeyMap.delete(key);
    if (feqKeyMap.size === 0) {
      this.feqToKeys.delete(feq);
      this.findMinFeq(feq + 1);
    }
  } else {
    feqKeyMap.delete(feq)
    if (feqKeyMap.size === 0) {
      this.feqToKeys.delete(feq);
    }
  }
}

/**
 * 向feqToKeys中添加一个key
 * @param {*} key
 * @param {*} feq
 */
LFUCache.prototype.addToFeqToKeys = function(key, feq) {
  let feqKeyMap = this.feqToKeys.get(feq);
  if (feqKeyMap) {
    feqKeyMap.set(key, true);
  } else {
    feqKeyMap = new Map();
    feqKeyMap.set(key, true);
    this.feqToKeys.set(feq, feqKeyMap);
  }
}

const lf = new LFUCache();
