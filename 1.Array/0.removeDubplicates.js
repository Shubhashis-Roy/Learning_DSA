// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=problem-list-v2&envId=array

// let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let arr = [1, 1, 2];
var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};

let res = removeDuplicates(arr);
console.log(res);
