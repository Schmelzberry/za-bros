// ******Business Logic****** // 
function Pizza(toppings, size) {
  this.toppings = toppings.split(" ");
  this.size = size;
  this.price = 10;
}
// prototype for checking the price of a pizza
Pizza.prototype.fetchPrice = function () {
  return this.price;
} 



