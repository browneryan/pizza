describe('Contact', function(){
  it("creates new contact with given properties", function(){
  var testContact = new Contact("James","Beard","2099888710");
  expect(testContact.firstName).to.equal("James");
  expect(testContact.lastName).to.equal("Beard");
  expect(testContact.phoneNumber).to.equal("2099888710");
  });
   it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Martha","Stewart");
    expect(testContact.fullName()).to.equal("Martha Stewart");
  });
});
describe('Pizza', function(){
  it("creates new pizza with given properties", function() {
    var newPizza = new Pizza("large", 3, 5);
    expect(newPizza.pizzaSize).to.equal("large");
    expect(newPizza.pizzaToppings).to.equal(3);
    expect(newPizza.pizzaQuantity).to.equal(5);
  });
});
describe('Price', function(){
  it("calculates price based on property values", function() {
    var newPrice = new Pizza("large", 3, 2);
    expect(newPrice.price()).to.equal(31);
  });
});
