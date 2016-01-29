describe ('Pizza', function(size, crust, toppings, possibleToppings, price) {
  it("will create a Pizza object with the givven properties", function() {
    var testPizza = new Pizza("medium", "thin", [], [], 12);
    expect(testPizza.size).to.equal("medium");
    expect(testPizza.crust).to.equal("thin");
    expect(testPizza.toppings).to.eql([]);
    expect(testPizza.possibleToppings).to.eql([]);
    expect(testPizza.price).to.equal(12);
  });

  it("will initiate a new Pizza object with possible toppings", function() {
    var testPizza = new Pizza;
    expect(testPizza.instantPizza()).to.equal("pepperoni");
  });

  it("will push toppings from pizza.possibleToppings to pizza.toppings array", function () {
    var testPizza = new Pizza;
    testPizza.newPizza();
    expect(testPizza.toppingPusher("pepperoni")).to.equal(testPizza.possibleToppings.pepperoni[0]);
  });
});

describe ('PossibleToppings', function() {
  it("will create a PossibleToppings object witht he given properties", function () {
    var testPossibleToppings = new PossibleToppings();
    expect(testPossibleToppings.lol).to.eql(["lol", 2]);
    expect(testPossibleToppings.pepperoni).to.eql(["pepperoni", 1]);
    expect(testPossibleToppings.sausage).to.eql(["sausage", 1]);
    expect(testPossibleToppings.bacon).to.eql(["bacon", 1]);
    expect(testPossibleToppings.cBacon).to.eql(["cBacon", 1]);
    expect(testPossibleToppings.extraCheese).to.eql(["extraCheese", 1]);
    expect(testPossibleToppings.mushrooms).to.eql(["mushrooms", 1/2]);
    expect(testPossibleToppings.bellPeppers).to.eql(["bellPeppers", 1/2]);
    expect(testPossibleToppings.pineapple).to.eql(["pineapple", 1/2]);
    expect(testPossibleToppings.jalapenos).to.eql(["jalapenos", 1/2]);
    expect(testPossibleToppings.olives).to.eql(["olives", 1/2]);
    expect(testPossibleToppings.tomatoes).to.eql(["tomatoes", 1/2]);
    expect(testPossibleToppings.basil).to.eql(["basil", 1/2]);
  });
});
