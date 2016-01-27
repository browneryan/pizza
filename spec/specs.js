// Example spec. Uncomment if you want to see it run in spec-runner.html! Then uncomment the function in scripts.js
// describe('helloWorld', function(){
//   it("is going to be false", function(){
//     expect(helloWorld()).to.equal(false);
//   });
// });

describe('Pizza', function(){
  it("creates new pizza with given properties", function() {
    var newPizza = new Pizza("large","artichokes",5);
    expect(newPizza.pizzaSize).to.equal("large");
    expect(newPizza.pizzaToppings).to.equal("artichokes");
    expect(newPizza.pizzaQuantity).to.equal(5);
  });
});
