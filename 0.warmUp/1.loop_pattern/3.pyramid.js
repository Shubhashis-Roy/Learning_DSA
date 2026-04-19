function solve(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let k = 0; k < n - i; k++) {
      row = row + " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      row = row + "*";
    }

    console.log(row);
  }
}

solve(5);
