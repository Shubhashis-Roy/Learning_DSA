// Time complexity: O(n^2)
// Space comp: O(1)

function solve(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    //add check for improvement the algo.
    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let arr = [3, 4, 9, 2, 0];
console.log(solve(arr));
