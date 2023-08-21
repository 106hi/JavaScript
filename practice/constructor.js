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
class Truck extends Car {
  run(distance) {
    // トラックは燃料が悪いので距離の２倍燃料を消費するようにする
    this.fuel = this.fuel - distance * 2;
    console.log(`走行距離${distance},現在の燃料は${this.fuel}`);
  }
}
// 燃料を60積んだ車を作る
const car = new Car(60);
// 燃料を100積んだトラックを作る
const truck = new Truck(60);
car.run(5);
truck.run(5);