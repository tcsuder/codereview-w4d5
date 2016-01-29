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
    expect(testPizza.toppingPusher()).to.equal(testPizza.possibleToppings.pepperoni[0]);
  });
});

describe('PossibleToppings', function() {
  it("will create possibleToppings object with the given properties", function() {
    var testPossibleToppings = new PossibleToppings();
    expect(testPossibleToppings.choices[1]).to.equal("pepperoni");
    expect(testPossibleToppings.cost[1]).to.eql(1);
  });
});
