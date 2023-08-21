class Car {
  constructor(fuel) {
    this.fuel = fuel;
  }
  run(distance) {
    // コンストラクタでthisコンテキストに設定した値はthisで参照できるようになる
    this.fuel = this.fuel - distance;
    console.log(`走行距離${distance},現在の燃料は${this.fuel}`);
  }
}
// 燃料を60積んだ車を作る
const car = new Car(60);
car.run(5);