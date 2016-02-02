function Pizza(pizzaSize, possibleSizes, crust, possibleCrusts, toppings, possibleToppings, price) {
  this.pizzaSize = pizzaSize;
  this.possibleSizes = [];
  this.crust = crust;
  this.possibleCrusts = [];
  this.toppings = [];
  this.possibleToppings = [];
  this.price = 12;
}

function PossibleToppings() {
  this.choices = ["lol", "pepperoni", "sausage", "bacon", "extraCheese", "mushrooms", "bellPeppers", "pineapple", "jalapenos", "olives", "tomatoes", "basil"];
  this.cost = [2, 1, 1, 1, 1, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2, 1/2];
}

function PossibleSizes() {
  this.choices = ["small", "medium", "large"];
  this.cost = [0, 1, 2];
}

function PossibleCrusts() {
  this.choices = ["thin", "pan", "deep"];
  this.cost = [0, 0, 0];
}

Pizza.prototype.instaPizza = function() {
  this.possibleToppings = new PossibleToppings;
  this.possibleSizes = new PossibleSizes;
  this.possibleCrusts = new PossibleCrusts;
  this.price = 12;
  return this.possibleToppings.choices[1];
}

Pizza.prototype.priceCalculator = function() {
  for (var i = 0; i < 13; i++) {
    if (this.toppings.indexOf(this.possibleToppings.choices[i]) !== -1) {
      this.price += this.possibleToppings.cost[i];
    }
  }
  // I DON'T KNOW HOW TO GET THIS TO WORK IN MY SPECS. IT WORKS IN MY PAGE JUST FINE.
  for (var j = 0; j < 3; j++) {
    if (this.pizzaSize.indexOf(this.possibleSizes.choices[j]) !== -1) {
      this.price += this.possibleSizes.cost[j];
    }
  }
  return this.price
}

Pizza.prototype.pizzaPusher = function() {
  cart = new Cart;
  cart.pizzas.push(this);
  return cart.pizzas;
}

$(document).ready(function() {
// **************************************CLICK FUNCTION
  $("div#menu").click(function() {
    $("#user-options").slideDown();
  });
  $("div#specials").click(function() {
    $("#specials-menu").slideDown();
  });
  $("div#hawaiian").click(function() {
    $("#user-options").slideDown();
  });
  $("div#meat").click(function() {
    $("#user-options").slideDown();
  });
  $("div#veggie").click(function() {
    $("#user-options").slideDown();
  });
  $("div#supreme").click(function() {
    $("#user-options").slideDown();
  });


  $("div#hawaiian").click(function () {
    $("button").removeClass("active");
    $("button#bacon, button#pineapple").addClass("active");
  });
  $("div#meat").click(function () {
    $("button").removeClass("active");
    $("button#bacon, button#sausage, button#pepperoni").addClass("active");
  });
  $("div#veggie").click(function () {
    $("button").removeClass("active");
    $("button#mushrooms, button#bellPeppers, button#olives, button#tomatoes").addClass("active");
  });
  $("div#supreme").click(function () {
    $("button").removeClass("active");
    $("button#mushrooms, button#bellPeppers, button#olives, button#tomatoes, button#bacon, button#pepperoni").addClass("active");
  });

// *************************** PIZZA ORDER
  var multiPrice = 0;

  $("#options-form").submit(function(event) {
    var pizza = new Pizza();
    event.preventDefault();
    pizza.instaPizza();

    var pizzaToppings = [];
    var pizzaSize =  $('input[name="size"]:checked').val();
    var crust = $('input[name="crust"]:checked').val();
    if (size === undefined) {
      alert("please pick a size")

    } else if (crust === undefined) {
      alert("please pick a crust type")
    } else {
      $("button.topping").each(function() {
        if ($(this).hasClass('active')) {
          pizzaToppings.push($(this).attr("id"));
        }
      });

      pizza.pizzaSize = pizzaSize;
      pizza.crust = crust;
      pizza.toppings = pizzaToppings;

      pizza.priceCalculator();
      multiPrice += pizza.price;

      $("div.pizza-cart").append( "<p>Added a pizza with toppings: " + pizza.toppings.join(", ") + ".</p>" +
                                  "<p style='text-indent: 1em'>Size: " + pizza.pizzaSize + "</p>" +
                                  "<p style='text-indent: 1em'>Crust: " + pizza.crust + "</p>" +
                                  "<p style='text-indent: 1em'><strong>Price:</strong> $" + pizza.price.toFixed(2) + "</p>" +
                                  "<hr class='pizza-breaker'>"
      );

      $("section#reciept").slideDown();
      if (multiPrice >= 24) {
        $("div#total-cost").append( "<h4>Total Cost: $" + multiPrice.toFixed(2) + "</h4>" +
                                    "<p>Come on by! Pick 'em up!</p>");
      }
    }
  });
});
