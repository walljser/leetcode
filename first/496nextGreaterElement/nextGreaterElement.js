/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function(nums1, nums2) {
//   const res = [];
//   while (nums1.length > 0) {
//     const cur = nums1.shift();
//     const index = nums2.indexOf(cur);
//     if (index < 0) {
//       res.push(-1);
//     } else {
//       let findNum = -1;
//       for (let i = index; i < nums2.length; i++) {
//         if (nums2[i] > cur) {
//           findNum = nums2[i];
//           break;
//         }
//       }
//       res.push(findNum);
//     }
//   }
//   return res;
// };

var nextGreaterElement = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;

  const stack = [];
  const map = {};
  for (let i = 0; i < len2; i++) {
    while(stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      const num = stack.pop();
      map[num] = nums2[i];
    }
    stack.push(nums2[i]);
  }

  const res = [];
  for (let i = 0; i < len1; i++) {
    num = map[nums1[i]];
    if (num === undefined) {
      num = -1;
    }
    res.push(num);
  }
  return res;
}

// const nums1 = [4,1,2]
// const nums2 = [1,3,4,2]
// console.log(nextGreaterElement(nums1, nums2))
