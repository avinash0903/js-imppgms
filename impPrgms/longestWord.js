function longest(str) {
  var string = str.split(' ');
  var longestWord = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > longestWord) {
      longestWord = string[i].length;
    }
  }
  return longestWord;
}
console.log(longest('The quick brown fox jumped over the lazy dog'));
