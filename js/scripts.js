function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaQuantity = pizzaQuantity;
}

Pizza.prototype.price = function() {
  debugger;
  var price = 10;
  if (this.pizzaSize === "large") {
    price += 10;
  } else if (this.pizzaSize === "medium") {
    price += 5;
  } else {

  } return price;
}
