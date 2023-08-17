function add(x, ...y) {
  let result = x;
  // 与えられたyの数だけ加算する
  y.forEach(number => {
    result = result + number;
  });
  console.log(result);
}

add(1);
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);