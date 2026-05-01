//! NOT ACCEPTED BY LEET CODE
var merge0 = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  let arr = [];

  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (nums1Copy[p1] < nums2[p2]) {
      arr.push(nums1Copy[p1]);
      p1++;
    } else if (nums1Copy[p1] > nums2[p2]) {
      arr.push(nums2[p2]);
      p2++;
    } else if ((nums1Copy[p1] = nums2[p2])) {
      arr.push(nums2[p2]);
      p2++;
    }
  }
  console.log(arr);
};

//! NOT OPTIMIZE SOLUTION
var merge1 = function (nums1, m, nums2, n) {
  nums1.length = m;

  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }

  nums1.sort((a, b) => a - b);
};

//! USE EXTRA SPACE
var merge2 = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  console.log(nums1);
};

//! NO EXTRA SPACE && OPTIMIZE SOLUTION
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  console.log(nums1);
};

let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

merge(nums1, m, nums2, n);
