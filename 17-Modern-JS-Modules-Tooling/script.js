// Exporting file
// console.log(shoppingCart);
import shoppingCart from './shoppingCart.js';

// Simple inport
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// console.log('Exporting file.');

// addToCart('suger', 5);

// console.log(totalPrice, totalQuantity);

// ================================================================== //
// Improt everything with name space
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('salt', 4);

console.log(ShoppingCart.totalQuantity);

// ================================================================== //
// import default
import add, { cart } from './shoppingCart.js';

add('apple', 5);
add('bread', 2);
add('toste', 3);

// When we import somthing we import itself not a copy of it (live connection)
console.log(cart);
import { cart } from './shoppingCart';

// ================================================================== //
// Top level await
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data[1]);

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    title: data.at(-1).title,
    text: data.at(-1).body,
  };
};

// const lastPost = await getLastPost();
// console.log(lastPost);

// ================================================================== //
const ShoppingCart = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({
      product,
      quantity,
    });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shoppingCost}).`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart.addToCart('pizza', 4);
ShoppingCart.addToCart('apples', 7);
// console.log(ShoppingCart.shoppingCost);

// Import fron libraries
import cloneDeep from 'lodash-es';

const statu = {
  cart: [
    { product: 'pizza', count: 2 },
    { product: 'koshry', count: 5 },
  ],
  signin: true,
};

const deepCloneStatu = cloneDeep(statu);

statu.signin = false;
console.log(statu);
console.log(deepCloneStatu);

if (module.hot) {
  module.hot.accept();
}

// import 'core-js/stable';
