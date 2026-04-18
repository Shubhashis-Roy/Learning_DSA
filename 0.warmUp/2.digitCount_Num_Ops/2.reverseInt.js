function solve(n) {
  let copyNum = n;
  n = Math.abs(n);

  let reverse = 0;
  while (n > 0) {
    let remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
  }

  let limit = Math.pow(2, 31);

  if (reverse < -limit || reverse > limit) return 0;

  return copyNum > 0 ? reverse : -reverse;
}

const n = 1223;
console.log(solve(n));
