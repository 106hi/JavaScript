const car = {
  fuel: 60,
  info: {
    model: "X-1976"
  }
};

const { fuel, info: { model }} = car;
console.log(fuel);
console.log(model);