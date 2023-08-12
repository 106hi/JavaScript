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
for (var i = 0; i < 10; i++) {
  var result = add(i, 3);
  output(result);
}