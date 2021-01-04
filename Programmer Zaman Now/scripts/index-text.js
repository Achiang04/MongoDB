// selalu pake .explain() untuk liat indexes nya udah ada atau belum
// letak nya dipaling belakang

// drop current index text
db.products.dropIndex("name_text");

// create index text
db.products.createIndex(
  {
    name: "text",
    category: "text",
    tags: "text",
  },
  {
    weights: {
      name: 10,
      category: 5,
      tags: 1,
    },
  }
);

// search products with text "mie"
db.products.find({
  $text: {
    $search: "mie",
  },
});

// search products with text "mie" OR "laptop"
db.products.find({
  $text: {
    $search: "mie laptop", // or (salah satu aja mie atau laptop)
  },
});

// search products with text "mie sedap"
db.products.find({
  $text: {
    $search: '"mie sedap"', // ingat kalau pake petik 1 petik 2 gini artinya di gabung bukan or kayak yang diatas
  },
});

// db.products.find({
//   $text: {
//     $search: "\"mie sedap\"", // atau bisa pake cara kek gini dia sama juga cmn beda style aja
//   },
// });
// tapi cara di atas kalau pake prettier auto balek kek yang cara pertama jadi pake cara pertama aja

// search products with text "mie" and NOT "sedap"
db.products.find({
  $text: {
    $search: "mie -sedap", // ini artinya ada kata mie tapi ga mau ada kata sedap nya (fungsi mines nya lebih ke untuk menghilangkan atau NOT)
  },
});

// Debugging query optimization
db.products
  .find({
    $text: {
      $search: "mie -sedap",
    },
  })
  .explain();

// db.products.find({
//     $text: {
//         $search: "mie -sedap"
//     }
// }).explain();

// ini akan error karena tidak ada index text di dalam collections
db.customers.find({
  $text: {
    $search: "Ucup",
  },
});
