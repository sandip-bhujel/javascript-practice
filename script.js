const cart = [
  { id: 1, name: "VEHICLE QUICK CHARGER", price: 800 },
  { id: 2, name: "LOAFER", price: 500 },
  { id: 3, name: "MOBILE STAND", price: 200 },
  { id: 4, name: "KURTHA", price: 700 },
];
const totalPrice = cart.reduce((total, items) => total + items.price, 0);
console.log(totalPrice);
