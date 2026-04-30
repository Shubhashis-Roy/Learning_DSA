var moveZeroes = function (nums) {
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

// let nums = [0, 1, 0, 0, 3, 12];
let nums = [0, 0, 1];

moveZeroes(nums);
