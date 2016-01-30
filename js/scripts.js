function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
  debugger;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaQuantity = pizzaQuantity;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Pizza.prototype.price = function() {
  var price = 0;
  if(this.pizzaSize === "small"){
    price += 10 * this.quantity + this.toppings * .50;
  } else if (this.pizzaSize === "medium") {
    price += 14 * this.quantity + this.toppings * 1;
  } else if (this.pizzaSize === "large") {
    price += 17 * this.quantity + this.toppings * 1.50;
  } return price;
}

//     var price = 5;
//     price += (this.pizzaQuantity * this.pizzaToppings);
//     // for (var i = 0; i < this.pizzaQuantity; i++) {
//     //   price += 5;
//     // }
//     if (this.pizzaSize === "large") {
//       price += 10;
//     } else if (this.pizzaSize === "medium") {
//       price += 5;
//     } else  {
//     } price += (this.pizzaQuantity * price);
//     return price;
// }

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
      var inputtedPizzaToppings = $(':checkbox:checked').length;
      var inputtedPizzaSize = $("select#sizes").val();
      var inputtedPizzaQuantity = parseInt($("input#quantity").val());
      var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings, inputtedPizzaQuantity);

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedPhoneNumber = $("input#new-phone-number").val();
      var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber)

      var toppings = [];
      $.each($("input[name='toppingsBoxes']:checked"), function(){
      toppings.push($(this).val());
      });
      toppings = toppings.join(', ');

      $(".showPrice").show();
      $(".full-name").text(newContact.fullName());
      $(".total-price").text(newPizza.price());
      $(".phone-number").text(inputtedPhoneNumber);
      $(".pizza-size").text(inputtedPizzaSize);
      $(".pizza-quantity").text(inputtedPizzaQuantity);
      $(".pizza-toppings").text(toppings);

      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    event.preventDefault();
  });
});
