function solve(n) {
  if (n < 0) {
    console.log("not");
    return;
  }

  let num = n;

  let reverse = 0;

  while (n > 0) {
    let remainder = n % 10;

    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
  }

  if (num === reverse) {
    console.log("palindrome");
  } else {
    console.log("not");
  }

  //   return num === reverse
}

const n = 121;
solve(n);
