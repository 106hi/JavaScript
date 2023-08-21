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

}
// 燃料を60積んだ車を作る
const car = new Car(60);
// 燃料を100積んだトラックを作る
const truck = new Truck(100);
car.run(5);
truck.run(10);