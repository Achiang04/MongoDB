// select *  from customers where _id = 'Ucup'
db.customers.find({
  _id: "Ucup",
});

// kalau mau lebih dari satu
db.customers.find({
  _id: "Ucup",
  name: "Ucup si Anak Haram",
});

// select * from customers where name = 'Ucup si Anak Haram'
db.customers.find({
  name: "Ucup si Anak Haram",
});

// select * from products where price = 2000
db.products.find({
  price: 2000,
});

db.products.find({
  name: "Mie Sedap",
});

// select * from orders where items.product_id = 1
db.orders.find({
  "items.product_id": 1,
});
