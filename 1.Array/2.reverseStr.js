// link: https://leetcode.com/problems/reverse-string/description/

var reverseString1 = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s;
};

// Iterate half array and swap
var reverseString = function (s) {
  let n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = s[i];
    s[i] = s[n - i - 1];
    s[n - i - 1] = temp;
  }
  return s;
};

let s = ["h", "e", "l", "l", "o"];
// let s = ["h", "e", "r", "t"];
let res = reverseString(s);
console.log(res);
