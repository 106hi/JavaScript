// promiseオブジェクトの省略
const promise = Promise.resolve("You got a API response!!");
promise
  .then(data => {
    console.log("成功しました。", data);
  });