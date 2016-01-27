describe('Pizza', function(){
  it("creates new pizza with given properties", function() {
    var newPizza = new Pizza("large", "artichokes", 5);
    expect(newPizza.pizzaSize).to.equal("large");
    expect(newPizza.pizzaToppings).to.equal("artichokes");
    expect(newPizza.pizzaQuantity).to.equal(5);
  });
});
describe('Price', function(){
  it("calculates price based on property values", function() {
    var newPrice = new Pizza("large", "artichokes", 5);
    expect(newPrice.price()).to.equal(20);
  });
});
