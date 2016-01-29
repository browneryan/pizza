function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaQuantity = pizzaQuantity;
}

Pizza.prototype.price = function() {
    var price = 5;
    price += (this.pizzaQuantity * this.pizzaToppings);
    for (var i = 0; i < this.pizzaQuantity; i++) {
      price += 5;
    }
    if (this.pizzaSize === "large") {
      price += 10;
    } else if (this.pizzaSize === "medium") {
      price += 5;
    } else  {
    } return price;
}

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    $(".showPrice").empty();
      var total = 0;
      var totalPizzaToppings = $(":checkbox:checked.toppings").each(function() {
        total += +this.value;
      });
      var inputtedPizzaToppings = total;
      var inputtedPizzaSize = $("select#sizes").val();
      var inputtedPizzaQuantity = parseInt($("input#quantity").val());
      var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings, inputtedPizzaQuantity);

      $(".showPrice").text(newPizza.price());

    event.preventDefault();
  });
});
