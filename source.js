/*
An inventory manage
ment program that allows to add, update, find and remove products from the inventory. We use an array of objects to represent the inventory, where each objecthas a name and quantity as the keys.
*/

let inventory = [
  {
    name: "flour",
    quantity: 5,
  },

  {
    name: "tobacco",
    quantity: 5,
  },

  {
    name: "wanjengi",
    quantity: 50241,
  },
];

const findProductIndex = (productName) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName) return i;
  }
};

console.log(findProductIndex("flour"));

const addProduct = (productObject) => {};

const removeProduct = (productName, productQuantity) => {};
