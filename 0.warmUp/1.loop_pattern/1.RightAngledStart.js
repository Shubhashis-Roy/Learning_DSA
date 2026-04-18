//! Print star
function solve() {
  for (let i = 0; i < 5; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

//! Print Number
function solve1() {
  for (let i = 0; i < 4; i++) {
    let row = " ";
    for (let j = 0; j < i + 1; j++) {
      row = row + (i + 1);
    }
    console.log(row);
  }
}

//! Print upward direction Number
function solve2() {
  for (let i = 4; i > 0; i--) {
    let row = " ";
    for (let j = 0; j < i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

//! Right side right angle in left side
/* 
num of stars: i + 1
empty space: n - ( i + 1 )
*/

function solve3() {
  const n = 4;
  for (let i = 0; i < n; i++) {
    let row = " ";
    //log empty space
    for (let j = 0; j < n - (i - 1); j++) {
      row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }

    console.log(row);
  }
}

solve3();
