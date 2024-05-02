// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(cart) {
  // เริ่มเขียนโค้ดตรงนี้
  /*let sum = 0;
  for (let key in cart) {
    sum = cart[key].price * cart[key].quantity + sum;
  }
  return sum;*/
  return cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
