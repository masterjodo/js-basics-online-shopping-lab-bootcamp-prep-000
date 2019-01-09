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

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i <cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
      return cart;
    } else {
      return("That item is not in your cart.")
    }
}

function placeOrder(cardNumber) {
  // write your code here
}
