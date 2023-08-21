class Car {
  // economyRateが渡されない場合は、デフォルト値として1を設定すること
  constructor(fuel, economyRate = 1) {
    this.fuel = fuel;
    this.economyRate = economyRate;
  }
  run(distance) {
    // コンストラクタでthisコンテキストに設定した値はthisで参照できるようになる
    this.fuel = this.fuel - distance * this.economyRate;
    console.log(`走行距離${distance},現在の燃料は${this.fuel}`);
  }
}
class Truck extends Car {
  constructor(fuel) {
    const economyRate = 2;
    super(fuel, economyRate);
  }
}
// 燃料を60積んだ車を作る
const car = new Car(60);
// 燃料を100積んだトラックを作る
const truck = new Truck(60);
car.run(5);
truck.run(5);