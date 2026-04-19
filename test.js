function solve(n) {
  let newNum = 0;
  while (n > 0) {
    let remainder = n % 10;
    newNum = newNum * 10 + remainder;
    n = Math.floor(n / 10);
  }
  return newNum;
}
let arr = 123;

console.log(solve(arr));
