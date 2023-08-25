function Pizza(toppings, size) {
  this.toppings = toppings.split(" ");
  this.size = size;
  this.price = 10;
}

Pizza.prototype.fetchPrice = function () {
  return this.price;
} 

