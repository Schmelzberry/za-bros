// BUSINESS LOGIC // 


function Pizza(toppings, size) {
  this.toppings = toppings.split(" ");
  this.size = size;
  this.price;
}
// global instance of pizza for testing purpose *****DELETE BEFORE TURNING IN*****
let pizza2 = new Pizza("ham onion olive pepperoni", "large");

// checking the price of a pizza
Pizza.prototype.fetchPrice = function () {
  return this.price;
}

// checking the size of a pizza
Pizza.prototype.fetchSize = function () {
  return this.size;
}

// checking the toppings of a pizza
Pizza.prototype.fetchToppings = function () {
  return this.toppings;
}

// checking the toppings of a pizza
Pizza.prototype.fetchToppingsAndPrice = function () {
  return (this.toppings + " " + this.price);
}


// prototype for checking the toppings of a pizza
Pizza.prototype.toppingsCalc = function () {
  let meatToppings = this.toppings;
  
  // set this variable so the forEach loop can communicate with Pizza's price and can pass result outside of loop to toppingsCalc prototype  
  let giveLoopContext = this;

  meatToppings.forEach(function (topping) {
    if (topping.toString() === 'ham' || topping.toString() === 'pepperoni' || topping.toString() === 'sausage') {
      giveLoopContext.price += 1;
      console.log(giveLoopContext.price);
    } 
    else if (topping.toString() === 'onion' || topping.toString() === 'olive') {
      giveLoopContext.price += 0.5;
      console.log(giveLoopContext.price);
    }
  })
  return this.price;
}

//prototype for calculating size 
Pizza.prototype.sizeCalc = function () {
 
  let size = this.size;
  let givePriceContext = this;
  switch (size) {
    case ("small"):
      givePriceContext.price += 10;
      console.log(givePriceContext.price)
      break;
    case("medium"):
      givePriceContext.price += 12;
      console.log(givePriceContext.price);
      break;
    case("large"):
      givePriceContext.price += 14;
      console.log(givePriceContext.price);
      break;
  }
}

// final price prototype that calls on previous calculations to see a final price
Pizza.prototype.finalPrice = function () {
this.price = 0;
this.toppingsCalc();
this.sizeCalc();
return this.price;
}

// USER INTERFACE LOGIC // 

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("select-tops");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const toppingsInput = getSelectedToppings();
    const selectedSize = radioValues();

    const customerPizza = new Pizza(toppingsInput, selectedSize);
    displayPizza(customerPizza);
  });
});



function displayPizza(customerPizza) {
  const toppingsResult = document.getElementById("pizza-results");
  const finalPriceResult = document.getElementById("final-price-results");

  toppingsResult.textContent = customerPizza.fetchToppings().join(", ");
  finalPriceResult.textContent = "$" + customerPizza.finalPrice().toFixed(2);

  const resultsDiv = document.getElementById("results");
  resultsDiv.classList.remove("hidden");
}

