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
