// ******Business Logic****** // 

function Pizza(toppings, size) {
  this.toppings = toppings.split(" ");
  this.size = size;
  this.price = 10;
}
// global instance of pizza for testing purpose *****DELETE BEFORE TURNING IN*****
let pizza2 = new Pizza("ham onion olive" , "small");

// prototype for checking the price of a pizza
Pizza.prototype.fetchPrice = function () {
  return this.price;
}

// prototype for checking the size of a pizza
Pizza.prototype.fetchSize = function () {
  return this.size;
}

// prototype for checking the toppings of a pizza
Pizza.prototype.fetchToppings = function () {
  return this.toppings;
}





