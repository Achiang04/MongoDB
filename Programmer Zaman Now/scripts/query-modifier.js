// select count(*) from products
db.products.find({}).count();

// select * from products limit 4
db.products.find({}).limit(4);

// select * from products offset 2
db.products.find({}).skip(2);

// select * from products limit 4 offset 2
// ini bisa dibolak balik function nya akan dijalankan dengan di gabung
// jadi ga akan di pisah, hasilnya tetap akan sama
db.products.find({}).limit(4).skip(2);
db.products.find({}).skip(2).limit(4);

// select * from products order by name asc, category desc
// 1 untuk asceding
// -1 untuk descending
// persepsi ku sih
// kalau ada dua yang kedua ga ke sorting
// jadi buat nya harus salah satu kalau asc asc aja jangan digabung dengan desc
db.products.find({}).sort({
  name: 1,
  category: -1,
});

db.products.find({}).sort({
  name: -1,
});
