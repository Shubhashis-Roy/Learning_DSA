// link: https://leetcode.com/problems/remove-element/description/?envType=problem-list-v2&envId=array

var removeElement1 = function (nums, val) {
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] != val) {
  //       count++;
  //     }
  //   }
  nums = nums.filter((n) => n != val);
  console.log(nums);

  return nums.length;
};

var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  console.log(nums);

  return x;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// let nums = [3, 2, 2, 3];
let val = 2;
let res = removeElement(nums, val);
console.log(res);
