function reverse(str) {
  var newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;
}
let rev = reverse('avinash');
console.log(rev);
