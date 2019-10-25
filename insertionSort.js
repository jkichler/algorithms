function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      let tmp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = tmp;
      j--;
    }
  }
  return array;
}
