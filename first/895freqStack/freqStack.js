var FreqStack = function() {
  this.maxFeq = 0;
  this.valToFeq = new Map();
  this.feqToVals = new Map();
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  const feq = (this.valToFeq.get(val) || 0) + 1;
  this.valToFeq.set(val, feq);
  const stackVals = this.feqToVals.get(feq);
  if (Object.prototype.toString.call(stackVals) === '[object Array]') {
    stackVals.push(val);
    // this.feqToVals.set(feq, stackVals);
  } else {
    this.feqToVals.set(feq, [val]);
  }
  this.maxFeq = Math.max(this.maxFeq, feq);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const stackVals = this.feqToVals.get(this.maxFeq) || [];
  let val
  if (stackVals.length > 0) {
    val = stackVals.pop();
    const feq = this.valToFeq.get(val);
    this.valToFeq.set(val, feq - 1);
  }
  if (stackVals.length === 0) {
    this.maxFeq--;
  }
  return val;
};

