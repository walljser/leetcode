package quickSort;

public class QuickSort {
  public void quickSort (int[] arr, int low, int high) {
    if (low < high) {
      int part = partition(arr, low, high);
      quickSort(arr, low, part - 1);
      quickSort(arr, part + 1, high);
    }
  }

  public int partition(int[] arr, int low, int high) {
    int pivot = arr[low];
    int i = low, j = high;
    while (i < j) {
      while (i < j && arr[j] >= pivot) {
        j--;
      }
      while (i < j && arr[i] <= pivot) {
        i++;
      }
      if (i < j) {
        int temp = arr[i];
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
}
