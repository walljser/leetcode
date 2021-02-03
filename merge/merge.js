function merge(nums1, m, nums2, n) {
    var nums1Copy = nums1.slice(0, m);
    console.log(nums1Copy);
    var p1 = 0;
    var p2 = 0;
    var p = 0;
    while ((p1 < m) && (p2 < n)) {
        nums1[p++] = (nums1Copy[p1] < nums2[p2]) ? nums1Copy[p1++] : nums2[p2++];
    }
    while (p1 < m) {
        nums1[p1 + p2] = nums1Copy[p1];
        p1++;
    }
    while (p2 < n) {
        nums1[p1 + p2] = nums2[p2];
        p2++;
    }
}
;
// const num1: number[] = [1,2,3,0,0,0];
// const num2: number[] = [2,5,6];
// merge(num1, 3, num2, 3);
var num1 = [0];
var num2 = [1];
merge(num1, 0, num2, 1);
console.log(num1);
