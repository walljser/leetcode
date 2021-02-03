function merge(nums1, m, nums2, n) {
    var nums1Copy = nums1.slice(0, m);
    console.log(nums1Copy);
    var p1 = 0;
    var p2 = 0;
    var p = 0;
    while ((p1 < m) && (p2 < n)) {
        if (nums1Copy[p1] < nums2[p2]) {
            nums1[p++] = nums1Copy[p1++];
        }
        else {
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
}
;
var num1 = [1, 2, 3, 0, 0, 0];
var num2 = [2, 5, 6];
merge(num1, 3, num2, 3);
// const num1 = [0]
// const num2 = [1]
// merge(num1, 0, num2, 1);
console.log(num1);
