// Question #7: Array Merging

const firstProductList = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 700 },
];

const secondProductList = [
  { id: 3, name: "Tablet", price: 500 },
  { id: 4, name: "Headphones", price: 150 },
];

// เริ่มเขียนโค้ดตรงนี้
const newProductList = [...firstProductList,...secondProductList];

console.log(newProductList);