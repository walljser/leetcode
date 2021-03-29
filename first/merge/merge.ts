function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const nums1Copy: number[] = nums1.slice(0, m);
  console.log(nums1Copy);
  let p1: number = 0;
  let p2: number = 0;
  let p: number = 0;

  while ((p1 < m) && (p2 < n)) {
    if (nums1Copy[p1] < nums2[p2]) {
      nums1[p++] = nums1Copy[p1++];
    } else {
      nums1[p++] = nums2[p2++];
    }
  }

  while (p1 < m) {
    console.log(111);
    nums1[p++] = nums1Copy[p1++];
  }
  while (p2 < n) {
    nums1[p++] = nums2[p2++];
  }
};

const num1: number[] = [1,2,3,0,0,0];
const num2: number[] = [2,5,6];
merge(num1, 3, num2, 3);
// const num1 = [0]
// const num2 = [1]
// merge(num1, 0, num2, 1);
console.log(num1);
