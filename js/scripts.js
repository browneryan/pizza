// Uncomment this to see the example spec test pass. Delete if you don't need it!
// var helloWorld = function(){
//   return false;
// };
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
