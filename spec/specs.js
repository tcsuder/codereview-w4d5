describe ('Pizza', function(size, possibleSizes, crust, possibleCrusts, toppings, possibleToppings, price) {
  it("will create a Pizza object with the given properties", function() {
    var testPizza = new Pizza("medium", [], "thin", [], [], [], 12);
    expect(testPizza.size).to.equal("medium");
    expect(testPizza.crust).to.equal("thin");
    expect(testPizza.toppings).to.eql([]);
    expect(testPizza.possibleToppings).to.eql([]);
    expect(testPizza.price).to.equal(12);
  });

  it("will initiate a new Pizza object with possible toppings", function() {
    var testPizza = new Pizza;
    expect(testPizza.instaPizza("pepperoni")).to.equal("pepperoni");
  });

  it("will add value of toppings to Pizza.price for chioces in toppings array", function() {
    var testPizza = new Pizza;
    testPizza.instaPizza();
    testPizza.toppings.push("lol");
    testPizza.toppings.push("pepperoni");
    expect(testPizza.priceCalculator()).to.equal(15);
  });
});

describe('PossibleToppings', function() {
  it("will create possibleToppings object with the given properties", function() {
    var testPossibleToppings = new PossibleToppings();
    expect(testPossibleToppings.choices[1]).to.equal("pepperoni");
    expect(testPossibleToppings.cost[1]).to.eql(1);
  });
});

describe('PossibleSizes', function() {
  it("will create possibleSizes object with the given properties", function() {
    var testPossibleSizes = new PossibleSizes();
    expect(testPossibleSizes.choices[1]).to.equal("medium");
    expect(testPossibleSizes.cost[1]).to.eql(1);
  });
});

describe('PossibleCrusts', function() {
  it("will create possibleCrusts object with the given properties", function() {
    var testPossibleCrusts = new PossibleCrusts();
    expect(testPossibleCrusts.choices[1]).to.equal("pan");
    expect(testPossibleCrusts.cost[1]).to.eql(0);
  });
});
