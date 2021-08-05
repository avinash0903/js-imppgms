//Square of a number
document.write('Square of a number : ' + '<br/>');
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
square();
var square4 = square(4);
document.write(square4 + '<br/>');

// finding Even and odd numbers

const number = prompt('Enter a number: ');
const result = number % 2 == 0 ? 'even' : 'odd';
console.log(`The number is ${result}.`);

// printing even or od
//using filter
const array = [1, 2, 4, 5, 8, 11, 12, 9];
const even = array.filter(x => x % 2 === 0);
document.write(`even numbers: ${even}` + '<br/>');
const odd = array.filter(x => x % 2 !== 0);
document.write(`odd number: ${odd}` + '<br/>');
//using for loop
const getEven = () => {
  const arr = [1, 3, 2, 4, 6, 8, 9, 7];
  for (num of arr) {
    if (num % 2 === 0) {
      document.write(num + '<br/>');
    }
  }
};
getEven();

//scope examples
let b = 10;
function a() {
  c();
  function c() {
    if ((b = 10)) {
      var a = 19;
      let u = 20;
    }
    console.log(b);
    console.log(a);
    console.log(u);
  }
}
a();

//Removing Duplicates
let colors = ['white', 'red', 'blue', 'blue'];

color1 = [...new Set(colors)];
console.log(color1);

let uniq = colors.filter((item, pos) => {
  return colors.indexOf(item) == pos;
});
console.log(uniq);
