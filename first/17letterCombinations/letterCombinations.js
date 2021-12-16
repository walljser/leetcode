function letterCombinations(digits) {
  const res = [];
  if (!digits) {
    return res;
  }
  const phone = {
    '0': ' ',
    '1': '*',
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  const combination = [];

  const backtrack = function(index) {
    if (index === digits.length) {
      res.push(combination.join(''));
      return;
    }
    const digit = digits[index];
    const phoneNums = phone[digit];
    for (let i = 0; i < phoneNums.length; i++) {
      combination.push(phoneNums[i]);
      backtrack(index + 1);
      combination.pop();
    }
  }

  backtrack(0);
  return res;
};


console.log(letterCombinations("23"));
