// Time complexity: O(n^2)
// Space comp: O(1)

function solve(arr) {
  let n = arr.length;

  for (i = 0; i < n - 1; i++) {
    let isSwapped = false;

    for (j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    // If no swapped happened means array is already sorted so break the loop
    if (!isSwapped) break;
  }
  return arr;
}

let arr = [3, 4, 9, 2, 0];
console.log(solve(arr));
