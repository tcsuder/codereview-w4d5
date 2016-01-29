describe ('Pizza', function(size, crust, toppings, possibleToppings, price) {
  it("will create a Pizza object with the givven properties", function() {
    var testPizza = new Pizza("medium", "thin", [], [], 12);
    expect(testPizza.size).to.equal("medium");
    expect(testPizza.crust).to.equal("thin");
    expect(testPizza.toppings).to.eql([]);
    expect(testPizza.possibleToppings).to.eql([]);
    expect(testPizza.price).to.equal(12);
  });
});
