function Pizza(size, possibleSizes, crust, possibleCrusts, toppings, possibleToppings, price) {
  this.size = size;
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
  return this.possibleToppings.choices[1];
}

Pizza.prototype.toppingPusher = function(choice) {
  this.toppings.push(choice)
  return this.toppings[this.toppings.length-1];
}

Pizza.prototype.priceCalculator = function() {
  for (var i = 0; i < 13; i++) {
    if (this.toppings.indexOf(this.possibleToppings.choices[i]) !== -1) {
      this.price += this.possibleToppings.cost[i];
      console.log(this.price);
    }
  }
  for (var i = 0; i < 3; i++) {
    debugger;
    if (this.size.indexOf(this.possibleSizes.choices[i]) !== -1) {
      this.price += this.possibleSizes.cost[i];
      console.log(this.price);
    }
  }
  return this.price
}



$(document).ready(function() {
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
    $("button#mushrooms, button#bell-peppers, button#olives, button#tomatoes").addClass("active");
  });
  $("div#supreme").click(function () {
    $("button").removeClass("active");
    $("button#mushrooms, button#bell-peppers, button#olives, button#tomatoes, button#bacon, button#pepperoni").addClass("active");
  });

// *************************** PIZZA ORDER

  var pizza1 = new Pizza();

  $("#options-form").submit(function(event) {
    event.preventDefault();
    pizza1.instaPizza();
    var pizzaToppings = [];
    var size =  $('input[name="size"]:checked').val();
    var crust = $('input[name="crust"]:checked').val();
      if (size === undefined) {
        alert("please pick a size")
      } else if (crust === undefined) {
        alert("please pick a crust type")
      }

    $("button.topping").each(function() {
      if ($(this).hasClass('active')) {
        pizzaToppings.push($(this).attr("id"));
      }
    });

    pizza1.size = size;
    pizza1.crust = crust;
    pizza1.toppings = pizzaToppings;

    pizza1.priceCalculator();
    console.log(pizza1.price);

  });
});
