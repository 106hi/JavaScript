const fuel = 100;
const model = "X-1976";
const car = {
  fuel,
  model,
  run() {
    console.log("Run");
  }
};
console.log(car.fuel);
console.log(car.model);
car.run();