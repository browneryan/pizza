function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  // this.address = [];
}

function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaQuantity = pizzaQuantity;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
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
    // $(".showPrice").empty();
      var total = 0;
      var totalPizzaToppings = $(":checkbox:checked.toppings").each(function() {
        total += +this.value;
      });
      var inputtedPizzaToppings = total;
      var inputtedPizzaSize = $("select#sizes").val();
      var inputtedPizzaQuantity = parseInt($("input#quantity").val());
      var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings, inputtedPizzaQuantity);

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();
      var inputtedPhoneNumber = $("input#new-phone-number").val();
      var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber)

      $(".showPrice").show();
      $(".full-name").text(newContact.fullName());
      $(".total-price").text(newPizza.price());
      $(".phone-number").text(inputtedPhoneNumber);
      // $(".total-price").text(newPizza.price());

    event.preventDefault();
  });
});
