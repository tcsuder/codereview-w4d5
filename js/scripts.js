function Pizza(size, crust, toppings, possibleToppings, price) {
  this.size = size;
  this.crust = crust;
  this.toppings = [];
  this.possibleToppings = [];
  this.price = 12;
}

function PossibleToppings() {
  this.choices = ["lol", "pepperoni", "sausage", "bacon", "cBacon", "extraCheese", "mushrooms", "bellPeppers", "pineapple", "jalapenos", "olives", "tomatoes", "basil"];
  this.cost = [2, 1, 1, 1, 1, 1, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2];
}

Pizza.prototype.instaPizza = function() {
  this.possibleToppings = new PossibleToppings;
  return this.possibleToppings.choices[1];
}

Pizza.prototype.toppingPusher = function(choice) {
  this.toppings.push(choice)
  return this.toppings[this.toppings.length-1];
}

Pizza.prototype.priceCalculator = function() {
  debugger;
  for (var i = 0; i < 13; i++) {
    if (this.toppings.indexOf(this.possibleToppings.choices[i]) !== -1) {
      this.price += this.possibleToppings.cost[i];
      console.log(this.price);
    }
  }
  return this.price
}
