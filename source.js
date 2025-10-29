/*
An inventory manage
ment program that allows to add, update, find and remove products from the inventory. We use an array of objects to represent the inventory, where each object has a name and quantity as the keys.
*/

let inventory = [
  { name: "flour", quantity: 20 },
  { name: "rice", quantity: 5 },
];

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
  };
};

let productObject = { name: "FLOUR", quantity: 52 };
console.log(removeProduct(productObject.name, productObject.quantity));
console.log(inventory);