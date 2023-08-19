const fuel = 100;
const model = "X-1976";
const customPropertyName = "shippedBy";
const car = {
  fuel,
  model,
  run() {
    console.log("Run");
  },
  [customPropertyName]: "1977"
};
console.log(car.fuel);
console.log(car.model);
console.log(car.shippedBy);
car.run();