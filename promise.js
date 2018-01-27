var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise((resolve, reject) => resolve(100));

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]


