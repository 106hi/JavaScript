function add(a, b) {
  return a + b;
}
function output(value) {
  if (value % 3 === 0) {
    console.log(value);
  } else {
    console.log(null);
  }
}
console.log(add(1, 1));
output(1);
output(3);