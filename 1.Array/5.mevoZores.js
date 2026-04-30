// Link: https://leetcode.com/problems/move-zeroes/

var moveZeroes1 = function (nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (j = i + 1; j < nums.length; j++) {
        if (nums[j] != 0) {
          nums[i] = nums[j];
          nums[j] = 0;
          break;
        }
      }
    }
  }
  console.log(nums);
};

var moveZeroes = function (nums) {
  let x = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  for (i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums);
};

// let nums = [0, 1, 0, 3, 12];
// let nums = [0, 0, 1];
let nums = [0, 0, 0];

moveZeroes(nums);
