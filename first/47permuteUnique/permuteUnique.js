var permuteUnique = function(nums) {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [nums];
  }
  const result = [];
  const visited = new Array(nums.length).fill(false);

  var backtrack = function (nums, track) {
    if (track.length === nums.length) {
      result.push([...track]);
      return ;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        continue;
      }
      const num = nums[i];
      track.push(num);
      visited[i] = true;
      backtrack(nums, track);
      visited[i] = false;
      track.pop(num);
    }
  }

  nums.sort((x, y) => x - y);
  backtrack(nums, []);

  return result;
};

console.log(permuteUnique([1, 2, 1]));
