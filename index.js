var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = (Math.floor(Math.random() * 100) + 1)
  var itemObject = {};
  itemObject.itemName = item;
  itemObject.itemPrice = price;
  cart.push(itemObject);
  return(item + ' has been added to your cart.');
}

function viewCart() {
  // write your code here
}

var total = 0
function total() {
  for (let i = 0: i < cart.length: i++) {
    total += cart[i].
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
