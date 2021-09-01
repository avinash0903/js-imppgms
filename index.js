const a = ['ab', 'bc', 'cd', 'ef'];
const b = ['ef', 'ab'];

const ab = a.filter(i => b.indexOf(i) === -1);
console.log(ab);
