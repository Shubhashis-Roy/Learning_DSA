// Q.search for a element in an array and return the index, if not present the element then return -1

let arr = [1, 5, 7, 0, 20];

function solve(arr, element) {
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
      index = i;
    }
  }

  if (index) return index;

  return -1;
}

console.log(solve(arr, 9));
