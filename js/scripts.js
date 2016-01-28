function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaQuantity = pizzaQuantity;
}

Pizza.prototype.price = function() {
  var price = 10;
  for (var i = 0; i < this.pizzaToppings; i++) {
    price += 1;
   }
   for (var i = 0; i < this.pizzaQuantity; i++) {
     price += 5;
    }
  if (this.pizzaSize === "large") {
    price += 10;
  } else if (this.pizzaSize === "medium") {
    price += 5;
  } else {
  } return price;
}
