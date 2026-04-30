//  Link: https://leetcode.com/problems/missing-number/description/

var missingNumber = function (nums) {
  let n = nums.length;

  let totalSum = (n * (n + 1)) / 2;

  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  let missingNum = totalSum - sum;
  console.log(missingNum);
};

// let nums = [3, 0, 1];
let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

missingNumber(nums);
