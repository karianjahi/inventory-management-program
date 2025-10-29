/*
An inventory manage
ment program that allows to add, update, find and remove products from the inventory. We use an array of objects to represent the inventory, where each object has a name and quantity as the keys.
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
  let name = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) return i;
  }
  return -1;
};


const addProduct = (productObject) => {
  let productIndex = findProductIndex(productObject.name);
  console.log(productIndex)
};

const removeProduct = (productName, productQuantity) => {};

console.log(findProductIndex("WaNjeNGi"));
console.log(addProduct({'name': 'FlOur'}));