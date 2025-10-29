# 📦 Inventory Management Program

A simple **inventory management** program written in **JavaScript** that allows you to **add**, **update**, **find**, and **remove** products from an in-memory inventory.

Products are stored in an **array of objects**, where each object has:

{
  name: String (lowercase),
  quantity: Number (integer)
}

---

## ✨ Features

- ✅ Add new products to inventory
- ♻️ Update quantity if product already exists
- 🔍 Find product index by name
- 🗑️ Remove product or reduce its quantity
- 💬 Console logs for user feedback

---

## 🧠 Implementation Overview

### 📁 Project Structure

inventory-management-program/
├── .gitignore
├── LICENSE
├── README.md
└── source.js

### 📌 Core Functions

Function              Description
───────────────────────────────────────────────────────────────────────────────
findProductIndex()    → Returns index of product in inventory array or -1
addProduct()          → Adds new product or updates existing quantity
removeProduct()       → Subtracts quantity or removes product when zero
inventory[]           → Global array holding objects {name, quantity}

---

## 🔧 How to Use

1) Clone the repo
```bash
    git clone https://github.com/<your-username>/inventory-management-program.git
    cd inventory-management-program
```
2) Run the code
```bash
    node source.js
```
---

## 🧪 Included Tests

Test cases at bottom of `source.js` validate:

- Product search 🔍
- Adding/updating ➕
- Removing/reducing ➖

Run:  `node source.js`  and observe console output.

---

## 📜 License

Licensed under MIT — see `LICENSE`.

---

## 💡 Future Enhancements

- CLI or Web UI
- Persist inventory to file or DB
- Validation and detailed error handling

---

## 🙌 Contributions

Forks and PRs welcome 🚀

Happy coding! 🎯
