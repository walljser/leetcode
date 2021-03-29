function swap (s, a, b) {
  const temp = s[a];
  s[a] = s[b];
  s[b] = temp;
}

function partition (arr, low, high) {
  const pivot = arr[low];
  let i = low, j = high;
  while (i < j) {
    while (i < j && arr[j] >= pivot) {
      j--;
    }
    while (i < j && arr[i] <= pivot) {
      i++;
    }
    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  if (pivot < arr[i]) {
    arr[low] = arr[i - 1];
    arr[i - 1] = pivot;
    return i - 1;
  } else {
    arr[low] = arr[i];
    arr[i] = pivot;
    return i;
  }
}

function quickSort (arr, low, high) {
  let mid
  if (low < high) {
    mid = partition(arr, low, high);
    quickSort(arr, low, mid - 1);
    quickSort(arr, mid + 1, high);
  }
}

const s = [42, 15, 20, 6, 8, 38, 50, 12];
quickSort(s, 0, s.length - 1);
console.log(s);
