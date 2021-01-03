/*
element operator
$exists = udah ada atau belum ?
$type = cek apakah ada data dengan type yang itu ? true tampilkan false null
*/

// select * from products where category is null
db.products.find({
  category: {
    $exists: false,
  },
});

// select * from products where type(category) = "string"
db.products.find({
  category: {
    $type: "string",
  },
});

db.products.find({
  category: {
    $type: ["long", "string"],
  },
});

// select * from products where type(price) in ("int", "long")
db.products.find({
  price: {
    $type: ["int", "long"],
  },
});
