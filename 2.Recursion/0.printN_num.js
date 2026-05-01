// Pt N to 1
function print0(nums) {
  if (nums === 0) return;
  console.log(nums--);
  // nums = nums - 1;
  print(nums);
}

// Pt 1 to N
function print(nums, n = 1) {
  if (n > nums) return;

  console.log(n);
  n = n + 1;
  print(nums, n);
}

let nums = 4;
print(nums, 1);
