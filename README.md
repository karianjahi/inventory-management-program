# 📦 Inventory Management Program

This is a beginner-friendly **JavaScript inventory tracking program**.  
It supports basic operations like **adding**, **finding**, **updating**, and **removing** products — all stored in a simple in-memory array of objects.

---

## 🧠 JavaScript Fundamentals Practiced

This project purposefully exercises core, foundational JavaScript concepts:

| Concept | How it's used here |
|--------|---------------------|
| **Arrays** | Inventory is stored in an array: `let inventory = []` |
| **Objects** | Each product is stored as `{ name, quantity }` |
| **Functions** | All logic is encapsulated in reusable functions |
| **Conditionals** | `if/else` chains drive logical decisions |
| **Loops** | A `for` loop searches products by name |
| **String methods** | `.toLowerCase()` normalizes inputs |
| **Array methods** | `.push()` adds and `.splice()` removes from inventory |
| **Return values** | Functions like `findProductIndex()` return useful values |
| **Console I/O** | Uses `console.log()` to inform the user of system state |

This is great practice for writing procedural logic and working with real-world data structures.

---

## ✨ Features

- ✅ Add a product — or update it if it exists
- 🔍 Find a product index by name
- 🔄 Increase or decrease existing stock
- 🗑️ Remove items when quantity reaches zero
- 💬 Console feedback for every action

---

## 📁 Project Structure
```bash
inventory-management-program/
├── .gitignore
├── LICENSE
├── README.md
└── source.js
```
---

## 📌 Core Functions

| Function | Parameters | Behavior |
|---------|------------|----------|
| `findProductIndex()` | `(productName: string)` | Returns index of product in `inventory` or `-1` if not found |
| `addProduct()` | `({ name: string, quantity: number })` | Adds object if not exists, else increments quantity |
| `removeProduct()` | `(productName: string, productQuantity: number)` | Subtracts or removes product; prevents overdraft |
| `inventory` | *(array)* | Holds all product objects as `{ name, quantity }` |

---

## 🧪 Running & Testing

### Clone and run:

    git clone https://github.com/karianjahi/inventory-management-program.git
    cd inventory-management-program
    node source.js

### Pre-written test cases
Tests at the bottom of `source.js` verify:

- Searching inventories 🔍
- Adding or updating stocks ➕
- Partial or full removal ➖
- Edge cases like overdraft errors ⚠️

Just run:

    node source.js

and read the console output.

---

## 💡 Future Enhancements

- Add CLI prompts instead of hard-coded tests
- Save inventory to a JSON file or database
- Create a web UI consuming this core logic
- Input validation and exception handling

---

## 📜 License

This project is licensed under the **MIT License** — see  [License](https://opensource.org/license/mit) for details.

---

## 🙌 Contributions

Pull requests and improvements are welcome.  
Fork, play, improve, and open a PR 🚀

Happy coding! 🎯
