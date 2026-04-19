function solve(n) {
  if (n === 0) {
    console.log(1);
    return;
  }

  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  console.log(count);
}

const n = -78;

solve(n);
