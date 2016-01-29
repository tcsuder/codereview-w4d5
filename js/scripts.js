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

Pizza.prototype.instantPizza = function() {
  this.possibleToppings = new PossibleToppings;
  return this.possibleToppings.choices[1];
}

Pizza.prototype.toppingPusher = function() {
  var pizza = new Pizza;
  pizza.toppings.push("pepperoni", "lol")
  return pizza.toppings
}
