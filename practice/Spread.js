const array1 = [1, 2, 3, 4];
const array2 = [10, 11, 12, 13, 14];
array1.push(...array2);
console.log(JSON.stringify(array1));