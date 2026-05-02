// Time complexity: O(n^2)
// Space comp: O(1)

function solve(arr) {
  for (i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev = prev - 1;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

let arr = [3, 4, 9, 2, 0];
console.log(solve(arr));
