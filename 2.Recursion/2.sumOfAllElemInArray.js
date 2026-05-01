//! ADD ALL THE ITEM
function sum1(n) {
  if (n === 0) return arr[0];

  return arr[n] + sum(n - 1);
}

//! ADD THE ODD ITEM
// NORMAL CODE:
// if (n === 0) {
//   if (isOdd) {
//     return arr[0];
//   } else if (!isOdd) {
//     return 0;
//   }
// }
// if (isOdd) {
//   return arr[n] + sum(n - 1);
// } else if (!isOdd) {
//   return sum(n - 1);
// }
function sum(n) {
  let isOdd = arr[n] % 2 != 0;

  if (n === 0) return isOdd ? arr[0] : 0;

  return isOdd ? arr[n] + sum(n - 1) : sum(n - 1);
}

let arr = [5, 3, 2, 0, 1];
// let arr = [4, 2];

console.log(sum(arr.length - 1));
