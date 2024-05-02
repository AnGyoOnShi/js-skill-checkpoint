// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(products) {
  // เริ่มเขียนโค้ดตรงนี้
  return products.filter((products) => products.quantity != 0);
}

// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
