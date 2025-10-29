/*
An inventory manage
ment program that allows to add, update, find and remove products from the inventory. We use an array of objects to represent the inventory, where each object has a name and quantity as the keys.

User Stories:

1. Declare an empty array named inventory that will store product objects having a key name with the value of a lowercase string, and a key quantity with the value of an integer.
2. Create a function named `findProductIndex` that takes the product name as its argument and returns the index of the corresponding product object inside the inventory array.
3. Create a function named `addProduct` that takes a product object as its argument.
4. Create a function named removeProduct that takes the product name and quantity as its arguments.
*/

let inventory = [];

const findProductIndex = (productName) => {
  let name = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name) return i;
  }
  return -1;
};

const addProduct = (productObject) => {
  const name = productObject.name.toLowerCase();
  const quantity = productObject.quantity;
  const productIndex = findProductIndex(name);
  if (productIndex === -1) {
    inventory.push({
      name: name,
      quantity: quantity,
    });
    console.log(`${name} added to inventory`);
  } else {
    inventory[productIndex].quantity += quantity;
    console.log(`${name} quantity updated`);
  }
  return inventory[findProductIndex(name)];
};

// a function that is meant to subtract a product quantity from the inventory
const removeProduct = (productName, productQuantity) => {
  const name = productName.toLowerCase();
  const productIndex = findProductIndex(name);
  if (productIndex === -1) {
    // product doesn't exist!
    console.log(`${name} not found`);
  } else {
    // product exists!
    const oldQuantity = inventory[productIndex].quantity;
    const remainingQuantity = oldQuantity - productQuantity;
    if (remainingQuantity < 0) {
      console.log(
        `Not enough ${name} available, remaining pieces: ${inventory[productIndex].quantity}`
      );
    } else if (remainingQuantity === 0) {
      // remove the object from the inventory
      inventory.splice(productIndex, 1); // as in the index of the item then specify how many to remove
      console.log(`${name} removed from inventory`);
    } else {
      // update the object
      inventory[productIndex].quantity -= productQuantity;
      console.log(
        `Remaining ${name} pieces: ${inventory[productIndex].quantity}`
      );
    }
  }
};

// TESTS!
inventory = [
  { name: "tanya", quantity: 15 },
  { name: "santa", quantity: 54 },
  { name: "heska", quantity: 113 },
  { name: "simba", quantity: 19 },
  { name: "gilean", quantity: 8 },
  { name: "flour", quantity: 5 },
  { name: "rambo", quantity: 28 },
  { name: "sadima", quantity: 9 },
  { name: "gitiri", quantity: 30 },
];

// Test findProductIndex
console.log(findProductIndex("Simba")); // should return 3
console.log(findProductIndex("hasinA")); // should return -1

// Test addProduct
console.log(addProduct({name: "sadima", quantity: 1})); // should add 1 to quantity to get quantity = 10 => {name: 'sadima', quantity: 10} and log the message: sadima quantity updated
console.log(addProduct({name: "gitu", quantity: 3})); // Should add this new product to inventory and log: gitu added to inventory

// Test removeProduct:
productObject = {name: "gilean", quantity: 5};
console.log(removeProduct(productObject.name, productObject.quantity)); // should subtract 5 from the quantity to log Remaining gilean pieces: 3

productObject = {name: "rambo", quantity: 28};
console.log(removeProduct(productObject.name, productObject.quantity)); // should remove the object since quantity reduced to zero and log: rambo removed from inventory 

productObject = {name: "heska", quantity: 120};
console.log(removeProduct(productObject.name, productObject.quantity)); // Object remains unchanged in the inventory since the quantity to remove exceeds the prevailing value and log: Not enough heska available, remaining pieces: 113.
console.log(inventory);
