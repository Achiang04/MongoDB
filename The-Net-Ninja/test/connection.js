const mongoose = require("mongoose");

// ES6 Promises
mongoose.Promise = global.Promise;

// connect to the db before tests run
before(function (done) {
  // connect to mongodb
  mongoose.connect("mongodb://localhost/testaroo", {
    useNewUrlParser: true,
  });

  // element.on("click," function())
  // once itu sama dengan on
  // once = sekali
  mongoose.connection
    .once("open", function () {
      console.log("Connection has been made, now make fireworks...");
      done();
    })
    .on("error", function (error) {
      console.log(error);
    });
});

// drop the characters collection before each test
beforeEach(function (done) {
  // drop the collection
  mongoose.connection.collections.mariochars.drop(function () {
    done(); // manggil done yang ada di saving data
    // tapi ga tau cara kerja nya gmna tiba tiba bisa manggil done di saving data
  });
});
