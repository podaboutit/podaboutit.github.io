const jsonText =
  '{"orders":[{"id":"O001","product":[	{"id":"P010","name":"Blue paint","price":35.00,"quantity":2},	{"id":"P512","name":"Roller Brush","price":2.45,"quantity":6},	{"id":"P3010","name":"Tape","price":6.50,"quantity":2}],"address":"63 Faraday Lane","payment":"Paid"},{"id":"O006","product":[	{"id":"P009","name":"White Sealer","price":30.00,"quantity":4},	{"id":"P512","name":"Roller Brush","price":2.45,"quantity":6},	{"id":"P864","name":"Mixing Motor","price":659.99,"quantity":1},	{"id":"P840","name":"Li-Ion Battery","price":149.99,"quantity":1}],"address":"1342 Lith Drive","payment":"Cash on Delivery"},{"id":"O152","product":[	{"id":"P934","name":"Paint Job","price":5125.00,"quantity":1}],"address":"10 Oxy Avenue 13-478","payment":"Paid"}],"inventory":{"product":[	{"id":"P010","name":"Blue paint","price":35.00,"quantity":200},	{"id":"P512","name":"Roller Brush","price":2.45,"quantity":2000},	{"id":"P3010","name":"Tape","price":6.50,"quantity":5000},	{"id":"P009","name":"White Sealer","price":30.00,"quantity":1600},	{"id":"P864","name":"Mixing Motor","price":659.99,"quantity":10},	{"id":"P840","name":"Li-Ion Battery","price":149.99,"quantity":100},	{"id":"P934","name":"Paint Job","price":5125.00,"quantity":99999}	]}}';

// parse the JSON text into a JavaScript object
const obj = JSON.parse(jsonText);
// find orders with payment "Cash on Delivery"
const orders = obj.orders.filter(
  (order) => order.payment === "Cash on Delivery"
);
// print the products with payments "Cash on Delivery"
orders.forEach((order) => {
  order.product.forEach((product) => console.log(product));
});

// increase price of these orders by 10%
orders.forEach((order) => {
  order.product.forEach((product) => {
    product.price = product.price * 1.1;
  });
}
);
console.log(orders);

//print all of the inventory ids with prices less that 200
const inventory = obj.inventory.product.filter(
  (product) => product.price < 200
);
console.log(inventory);
inventory.forEach((product) => console.log(product.id));
