// Reverse of a String and number

function reverse(str) {
  return str
    .toString()
    .split('')
    .reverse()
    .join('');
}
let reversed = reverse(456);
console.log(reversed);
//2
function reverse(str) {
  var newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;
}
let rev = reverse('avinash');
console.log(rev);

//palindrome
function palindrome(str) {
  const re = /[\Z_]/g;
  str = str.toLowerCase().replace(re, '');
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
const b = palindrome('abba');
console.log(b);
