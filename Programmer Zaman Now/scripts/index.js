/*
1 = ascending
-1 = descending
*/

// Create index at category in products collection
db.products.createIndex({
  category: 1,
});

// Get all indexes in products collection
db.products.getIndexes();

// Find products by category (will use index)
db.products.find({
  category: "food",
});

// Debugging query optimization
db.products
  .find({
    category: "food",
  })
  .explain();

// db.products.find({
//  category: "food",
// }).explain();

db.products
  .find({})
  .sort({
    category: 1,
  })
  .explain();

// db.products.find({}).sort({
//  category: 1,
// }).explain();

// Create index at price and tags in products collection
db.products.createIndex({
  stock: 1,
  tags: 1,
});

// Find products by stock and tags (will use index)
db.products.find({
  stock: 10,
  tags: "popular",
});

db.products
  .find({
    stock: 10,
    tags: "popular",
  })
  .explain();

// db.products.find({
//   stock: 10,
//   tags: "popular",
// }).explain()

// Debugging query optimization
/*
kalau buat index lebih dari 1
index lompatan ga akan kena index
contoh buat 3 index
1,2,3
kalau nyari nya
1 = dia kenak
1,2 = kenak
1,2,3 = kenak
locat ke 
2 = dia ga kenak
harus berurut dari 1 ke seterusnya
*/

db.products
  .find({
    stock: 10,
  })
  .explain();

// db.products.find({
//     stock: 10,
// }).explain();

db.products
  .find({
    tags: "popular",
  })
  .explain();

//   db.products.find({
//     tags: "popular",
//   }).explain();

// afccsecf1
