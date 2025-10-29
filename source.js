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
  const productIndex = findProductIndex(productObject.name);
  const name = productObject.name.toLowerCase();
  const quantity = productObject.quantity;
  if (productIndex === -1) {
    inventory.push({
      name: name,
      quantity: quantity,
    });
    console.log(`${name} added to inventory`)
  } else {
    inventory[productIndex].quantity += quantity;
    console.log(`${name} quantity updated`)
  }
  return inventory[findProductIndex(name)];
};


const removeProduct = (productName, productQuantity) => {
  let name = productName.toLowerCase();
  

};

let productObject = { name: "flOur", quantity: 18};
console.log(addProduct(productObject));