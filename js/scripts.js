// BUSINESS LOGIC // 

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price;
}

// prototype for checking the toppings of a pizza
Pizza.prototype.toppingsCalc = function () {
  let Toppings = this.toppings;

  Toppings.forEach((topping) => {
    if (topping === 'ham' || topping === 'pepperoni' || topping === 'sausage') {
      this.price += 1;
    } else {
      this.price += 0.5;
    }
  })
  return this.price;
}

//prototype for calculating size 
Pizza.prototype.sizeCalc = function () {

  let size = this.size;

  switch (size) {
    case ("small"):
      this.price += 10;
      break;
    case ("medium"):
      this.price += 12;
      break;
    case ("large"):
      this.price += 14;
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

    const toppingsInput = SelectedToppings();
    const selectedSize = radioValues();

    const customerPizza = new Pizza(toppingsInput, selectedSize);
    displayPizza(customerPizza);
  });
});

// check form for which toppings are checked
// query all topping values in checkbox
// need to create an array that Pizza constructor expects, use map to transform array and get value
function SelectedToppings() {
  const toppingCheckboxes = document.querySelectorAll("input[name='tops']:checked");
  const toppings = Array.from(toppingCheckboxes).map(function (checkbox) {
    return checkbox.value;
  });
  return toppings;
}

// return radio values from form
function radioValues() {
  const selectedSize = document.querySelector("input[name='size-pizza']:checked").value;
  return selectedSize;
}

// display results
function displayPizza(customerPizza) {
  const toppingsResult = document.getElementById("pizza-results");
  const finalPriceResult = document.getElementById("price-results");
  const finalSizeResult = document.getElementById("size-results");

  toppingsResult.innerText = customerPizza.toppings.join(", ");
  finalPriceResult.innerText = "$" + customerPizza.finalPrice().toFixed(2);
  finalSizeResult.innerText = customerPizza.size;

  const resultsDiv = document.getElementById("results");
  resultsDiv.removeAttribute("class");
}

