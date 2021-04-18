console.log(a);
var a = 'a'
var b = 'b'
var c = 'c'
console.log(b);
setTimeout(() => console.log(c), 2000);
setTimeout(() => console.log(a), 1000);

new Promise(function(resolve, reject) {
  resolve('a');

  setTimeout(() => resolve(2), 1000);
}).then(x => console.log('promise', x))

new Promise(function(resolve, reject) {
  setTimeout(() => resolve('a'), 1000);
}).then(x => console.log('promise 2', x))
