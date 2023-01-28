/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = String(x);
  let res = true;
  for (let i = 0; i <= str.length; i++) {
    let check = str.length - i - 1;
    if (str.charAt(i) !== str.charAt(check)) {
      res = false;
    }
    console.log(str.charAt(i), str.charAt(check), res);
  }
  return res;
};

const run = isPalindrome(121);
console.log(run);
