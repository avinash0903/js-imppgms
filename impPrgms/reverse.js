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


function reverse(str){
  var newString = '';
  for(let i = str.length - 1; i>=0; i--){
    newString = newString + str[i];
  }
  return newString;
}
let rev = reverse('avinash')
console.log(rev);