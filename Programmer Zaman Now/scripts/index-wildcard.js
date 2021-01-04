/*
.$** = bakal buat semua field yang ada di dalam embedded nya jadi index 
dan kalau nambah field baru juga dia akan otomatis buat jadi index

note:
terlalu banyak index jg ga bisa 
secara query mungkin dia akan jadi lebih laju
tapi untuk kayak update insert dia lebih lambat
karena setiap data yang masuk mongo bakal buatin index nya secara otomatis
*/

// membuat wildcard index
db.customers.createIndex({
  "customFields.$**": 1,
});

// Insert many customers
db.customers.insertMany([
  {
    _id: "budi",
    full_name: "Budi",
    customFields: {
      hobby: "Gaming",
      university: "Universitas Belum Ada",
    },
  },
  {
    _id: "joko",
    full_name: "Joko",
    customFields: {
      ipk: 3.2,
      university: "Universitas Belum Ada",
    },
  },
  {
    _id: "rudi",
    full_name: "Rudi",
    customFields: {
      motherName: "Tini",
      passion: "Entepreneur",
    },
  },
]);

// Debug wildcard index
db.customers
  .find({
    "customFields.passion": "Enterpreneur",
  })
  .explain();
db.customers
  .find({
    "customFields.ipk": 3.2,
  })
  .explain();
db.customers
  .find({
    "customFields.hobby": "Gaming",
  })
  .explain();

// db.customers.find({
//     "customFields.passion": "Enterpreneur"
// }).explain();

// db.customers.find({
//     "customFields.ipk": 3.2
// }).explain();

// db.customers.find({
//     "customFields.hobby": "Gaming"
// }).explain();
