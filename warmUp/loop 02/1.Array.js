// Q.Write a function that returns the number of negative numbers in an array.

let arr = [2, -6, 4, 8, 1, -9];

function solve(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      counter = counter + 1;
    }
  }
  return counter;
}

console.log(solve(arr));
