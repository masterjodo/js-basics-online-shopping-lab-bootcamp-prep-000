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
  if (cart.typeOf() === "undefined") {
    return("Your shopping cart is empty.");
  }
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
    }
  }
  if (item != cart[item]) {
    return("That item is not in your cart.")
  }
}


function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    return("Sorry, we don't have a credit card on file for you.");
  }
  else {
    var newtotal = total();
    cart = [];
    return("Your total cost is $" + newtotal + ", which will be charged to the card " + cardNumber + ".");
  }
}
