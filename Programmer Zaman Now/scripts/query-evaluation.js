// select * from products where price > 1000000
db.products.find({
  $expr: {
    $gt: ["$price", 1000000],
  },
});

// select * from customers where toUpper(_id) = 'UCUP'
db.customers.find({
  $expr: {
    $eq: [{ $toUpper: "$_id" }, "UCUP"],
  },
});

// select * from products where name is not null and category is not null
db.products.find({
  $jsonSchema: {
    required: ["name", "category"],
  },
});

// select * from products where name is not null and type(name) = 'string' and type(price) = 'long'
db.products.find({
  $jsonSchema: {
    required: ["name"],
    properties: {
      name: {
        bsonType: "string",
      },
      price: {
        bsonType: "long",
      },
    },
  },
});

// select * from products where price % 5 = 0
db.products.find({
  price: {
    $mod: [5, 0],
  },
});

// select * from products where name like "%mie%"
db.products.find({
  name: {
    $regex: /mie/,
    $options: "i",
  },
});

// select * from products where name like "Mie%"
db.products.find({
  name: {
    $regex: /^Mie/,
  },
});

// create text index on products
db.products.createIndex({
  name: "text",
});

db.products.createIndex({
  name: "text",
  catergory: "text",
});

// select * from products where (name like "%mie%" or name like "%sedap%")
// ini dia akan cari dengan sistem or (mie aja atau sedap aja)
db.products.find({
  $text: {
    $search: "mie sedap",
  },
});

// select * from products where name like "%mie sedap%"
// fungsi dari petik 1 dan 2 adalah untuk membungkus supaya dia jadi AND (hanya akan muncul kalau mie dan sedap terpenuhi)
db.products.find({
  $text: {
    $search: '"mie sedap"',
  },
});

// select * from customers where _id = "Ucup"
// fungsi where supaya bisa pakai javascript dalam codingan mongo
db.customers.find({
  $where: function () {
    // return this.name == "Ucup si Anak Haram"
    return this._id == "Ucup";
  },
});

print("test"); // cara console atau print di mongo
