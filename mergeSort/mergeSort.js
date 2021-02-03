/**
 * 合并排序
 * 时间复杂度：O(n*logn)
 * 空间复杂度：O(n)
 */

function merge (s, low, mid, high) {
  const b = [];
  let i = low;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= high) {
    if (s[i] <= s[j]) {
      b[k++] = s[i++]
    } else {
      b[k++] = s[j++]
    }
  }
  while (i <= mid) {
    b[k++] = s[i++];
  }
  while (j <= high) {
    b[k++] = s[j++];
  }
  for (let i = low, k = 0; i <= high; i++) {
    // 复制已排序过的元素
    s[i] = b[k++];
  }
}

function mergeSort(s, low, high) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(s, low, mid);
    mergeSort(s, mid + 1, high);
    merge(s, low, mid, high);
  }
}

const s = [42, 15, 20, 6, 8, 38, 50, 12];
mergeSort(s, 0, s.length - 1);
console.log(s);
