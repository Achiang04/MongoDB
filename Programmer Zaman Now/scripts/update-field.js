/*
tidak ada decrement disini jadi cara mengatasi nya dengan membuat mines di increment nya
misal stock ada 10
$inc: -1 (ga harus 1 bebas kek biasa)
hasil = 8
*/

// alter table customers change name full_name
db.customers.updateMany(
  {},
  {
    $rename: {
      name: "full_name",
    },
  }
);

// update products set stock = stock + 10
db.products.updateMany(
  {},
  {
    $inc: {
      stock: 10, // increment
    },
  }
);

db.products.updateMany(
  {},
  {
    $inc: {
      stock: -10, // decrement
    },
  }
);

// update products set lastModifiedDate = current_date()
db.products.updateMany(
  {},
  {
    $currentDate: {
      lastModifiedDate: {
        $type: "date",
      },
    },
  }
);
