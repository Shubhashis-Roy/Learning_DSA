// Link: https://leetcode.com/problems/max-consecutive-ones/description/

var findMaxConsecutiveOnes = function (nums) {
  let maxCounter = 0;
  let currCounter = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCounter++;
    }
    if (nums[i] === 0) {
      //   if (maxCounter < currCounter) {
      //     maxCounter = currCounter;
      //   }
      maxCounter = Math.max(currCounter, maxCounter);
      currCounter = 0;
    }
  }

  //   if (maxCounter < currCounter) {
  //     console.log(currCounter);
  //   } else {
  //     console.log(maxCounter);
  //   }

  console.log(Math.max(currCounter, maxCounter));
};

let nums = [1, 1, 0, 1, 1, 1];

findMaxConsecutiveOnes(nums);
