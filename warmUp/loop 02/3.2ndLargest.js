// Q. Find 2nd largest number from a number
let arr = [4, 9, 9, 0, 2, 8, 8, 7, 1, -5];

function solve(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secLargest) {
      secLargest = arr[i];
    }
  }

  console.log(secLargest);
}

solve(arr);
