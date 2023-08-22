const breakfast = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("🥚");
  }, 100);
});
breakfast
  .then(data => {
    console.log(data);
    return `${data}🥓`;
  })
  .then(data => {
    console.log(data);
    return `${data}🥚`;
  })
  .then(data => {
    console.log(`${data}出来上がり。`);
  });