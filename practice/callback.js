function add(a, b) {
  console.log(a + b);
}
function calc(a, b, callback) {
  callback(a, b);
}
calc(3, 5, add);
calc(10, 3, add);
calc(100, -5, add);