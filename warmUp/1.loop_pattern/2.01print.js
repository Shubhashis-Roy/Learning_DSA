function solve() {
  for (let i = 0; i < 5; i++) {
    let row = " ";
    let bool = 1;

    for (let j = 0; j < i + 1; j++) {
      row = row + bool;
      if (bool === 1) {
        bool = 0;
      } else {
        bool = 1;
      }
    }
    console.log(row);
  }
}

function solve1() {
  let bool = 0;
  for (let i = 0; i < 5; i++) {
    let row = " ";

    if (bool === 1) {
      bool = 0;
    } else {
      bool = 1;
    }
    for (let j = 0; j < i + 1; j++) {
      row = row + bool;
    }
    console.log(row);
  }
}

function solve2() {
  const n = 4;
  let bool = 1;
  for (let i = 0; i < n; i++) {
    let row = " ";

    for (let j = 0; j < i + 1; j++) {
      row = row + bool;
      if (bool === 1) {
        bool = 0;
      } else {
        bool = 1;
      }
    }
    console.log(row);
  }
}

solve2();
