//! NOT WORK IN LEET CODE
var singleNumber1 = function (nums) {
  let obj = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  let n = Object.keys(obj).find((key) => obj[key] === 1);
  console.log(n);
};

//! TAKE EXTRA SPACE
var singleNumber1 = function (nums) {
  let hash = {};
  for (i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === 1)
      // return nums[i]
      console.log(nums[i]);
  }
};

//! USE XOR
var singleNumber = function (nums) {
  let xor = 0;
  for (i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  // return xor;
  console.log(xor);
};

let nums = [4, 1, 2, 1, 2];
// let nums = [2, 2, 1];

singleNumber(nums);
