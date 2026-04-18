function solve(n) {
  n = Math.abs(n);

  let reverse = 0;
  while (n > 0) {
    let remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
  }
  console.log(reverse);
}

const n = -123;
solve(n);
