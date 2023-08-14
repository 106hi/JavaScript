function task(callback) {
  callback();
}

var ES5Chicken = {
  egg: "🥚",
  wakeup: function() {
    task(function() {
      console.log("ES5(こけこっこー)", this.egg);
    }.bind(this));
  }
}

const ES6Chicken = {
  egg: "🥚",
  wakeup: function() {
    task(() => {
      console.log("ES6(こけこっこー)", this.egg);
    });
  }
};

ES5Chicken.wakeup();
ES6Chicken.wakeup();