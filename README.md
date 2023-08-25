# _'Za Bros_

#### By _**Jake Elsberry 

#### _A webpage application allowing for ordering pizza.

## Technologies Used

* JavaScript
* HTML
* CSS

## Description

This is a webpage application that allows the users to order a pizza with various toppings and sizes, and see how much the final cost will be.


## Setup/Installation Requirements

1. Copy the **[URL](https://github.com/Schmelzberry/za-bros.git)** provided for this repository.
2. Open Terminal.
3. Change your working directory to where you want the cloned directory.
4. In your terminal, type `git clone` and use the copied URL from Step 1. Or, copy the following git command:
```bash
git clone https://github.com/Schmelzberry/za-bros.git
```
5. Navigate to the top level of the newly cloned directory.
6. Open index.html in your browser to view and navigate the webpage.

## Tests

##### **Describe:** Pizza()

```javascript
Test 1: "It will create a pizza object with a 2 key value pairs: size and an array of toppings."
Code:
  let pizza1 = new Pizza("small",["ham"])
Expected Output:
  Pizza {size: "small", toppings: ["ham"]}

Test 2: "It will create an array with a length that matches number of toppings selected."
Code:
  let pizza2 = new Pizza("ham onion olive" , "small");
Expected Output:
  Pizza { toppings: ["ham", "onion", "olive"] size: "small",}

  Test 3: "It will create an additional key-value for price and set it to a base price of 10 for small pizzas."
Code:
  let pizza2 = new Pizza("ham onion olive" , "small");
Expected Output:
  Pizza { toppings: ["ham", "onion", "olive"] size: "small", price: 10}
```
##### **Describe:** Pizza.prototype.fetchPrice()

```javascript
Test 1: "It will return the price of a pizza Object"
Code:
  let pizza2 = new Pizza("ham onion olive" , "small");
  Pizza { toppings: ["ham", "onion", "olive"] size: "small", price: 10}
  pizza2.fetchPrice();
Expected Output: 10;
```

##### **Describe:** Pizza.prototype.fetchSize()

```javascript
Test 1: "It will return the size of a pizza Object"
Code:
  let pizza2 = new Pizza("ham onion olive" , "small");
  Pizza { toppings: ["ham", "onion", "olive"] size: "small", price: 10}
  pizza2.fetchSize();
Expected Output: "small";
```
##### **Describe:** Pizza.prototype.fetchToppings()

```javascript
Test 1: "It will return the toppings of ta pizza Object"
Code:
  let pizza2 = new Pizza("ham onion olive" , "small");
  Pizza { toppings: ["ham", "onion", "olive"] size: "small", price: 10}
  pizza2.fetchToppings();
Expected Output: ["ham", "onion", "olive"]
```

##### **Describe:** Pizza.prototype.toppingsCalc()

```javascript
Test 1: "It will add 1 to the price of the pizza"
Code:
  let pizza2 = new Pizza("ham onion olive" , "small");
  Pizza { toppings: ["ham", "onion", "olive"] size: "small", price: 10}
  pizza2.toppingsCalc();
Expected Output: price: 11;

Test 2: "It will add 1 to the price of the pizza if meat is selected as a topping"
Code:
  let pizza2 = new Pizza("ham onion olive" , "small");
  Pizza { toppings: ["ham", "onion", "olive", "pepperoni"] size: "small", price: 10}
  pizza2.toppingsCalc();
Expected Output: price: 12;

Test 3: "It will add 0.5 to the price of the pizza if a non-meat item is a topping"
Code:
  let pizza2 = new Pizza("ham onion olive pepperoni" , "small");
  Pizza { toppings: ["ham", "onion", "olive", "pepperoni"] size: "small", price: 10}
  pizza2.toppingsCalc();
Expected Output: price: 13;
```

##### **Describe:** Pizza.prototype.sizeCalc()

```javascript
Test 1: "It will add 2 to the price of the pizza if the size is medium"
Code:
  let pizza2 = new Pizza("" , "medium");
  pizza2.sizeCalc();
Expected Output: Pizza { toppings: [""] size: "medium", price: 12}

Test 2: "It will add 4 to the price of the pizza if the size is large"
Code:
  let pizza2 = new Pizza("" , "large");
  pizza2.sizeCalc();
Expected Output: price: 14
```
##### **Describe:** Pizza.prototype.finalPrice()

```javascript
Test 1: "It will add both the toppings selections and sizing together to create a final price"
Code:
  let pizza2 = new Pizza("ham onion olive" , "medium");
  pizza2.finalPrice();
Expected Output: price: 14
```

## Known Bugs

* None atm

## License

MIT License

Copyright (c)  Jake Elsberry

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.