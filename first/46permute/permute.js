var permute = function(nums) {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [nums];
  }
  if (nums.length === 2) {
    return [[nums[0], nums[1]], [nums[1], nums[0]]];
  }
  const result = [];
  const track = [];

  var backtrack = function(nums, track) {
    if (track.length === nums.length) {
      result.push([...track]);
      return ;
    }
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (track.indexOf(num) >= 0) {
        continue;
      }
      track.push(num);
      backtrack(nums, track);
      track.pop(num);
    }
  }

  backtrack(nums, track);

  return result;
};

console.log(permute([1, 2, 3]));
