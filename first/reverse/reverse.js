var reverse = function(x) {
  if (x === 0) {
    return 0;
  }
  let isDecimal = false;
  if (x < 0) {
    isDecimal = true;
    x = 0 - x;
  }
  x = parseInt((x + "").replace(/(0+)$/g, "").split('').reverse().join(''));
  const target = isDecimal ? 0 - x : x;
  if (target > (Math.pow(2, 31) - 1) || target < Math.pow(-2, 31)) {
    return 0;
  }
  return target;
};

const x = 123;
const x1 = 3210000;
const s = reverse(x);
const s1 = reverse(x1);
console.log(s);
console.log(s1);
