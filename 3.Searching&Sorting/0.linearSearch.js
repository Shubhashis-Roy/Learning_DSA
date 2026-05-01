function solve(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      //   return i;
      console.log(i);
      return;
    }
  }
  // return -1;
  console.log("not present");
}
let arr = [4, 9, 1, 0, 2];
solve(arr, 4);
