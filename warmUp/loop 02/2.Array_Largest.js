// Q. Find largest number from a number
let arr = [2, -6, 4, 8, 1, -9];

//! Normal solution
function solve1(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  console.log(largest);
}

//! Optimize Solution
function solve(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  console.log(largest);
}

solve(arr);
