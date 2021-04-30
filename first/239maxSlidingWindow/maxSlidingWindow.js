class MonotonicQueue {
  queue = [];

  push(n) {
    while (this.queue.length > 0 && this.queue[this.queue.length - 1] < n) {
      this.queue.pop();
    }
    this.queue.push(n);
  }

  max() {
    return this.queue[0];
  }

  pop(n) {
    if (n === this.queue[0]) {
      this.queue.shift();
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
  const window = new MonotonicQueue();
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      window.push(nums[i]);
    } else {
      window.push(nums[i]);
      const max = window.max();
      res.push(max);
      window.pop(nums[i - k + 1]);
    }
  }
  return res;
};

console.log(maxSlidingWindow([1,3,1,2,0,5], 3));
