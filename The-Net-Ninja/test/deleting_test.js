/*
char.remove() = single / atau cuman bisa hapus satu
marioCHar.remove() // bisa hapus lebih dari satu selagi dia sama
marioChar.findOneAndRemove() // cari yang pertama ketemu di db dan hapus
*/

const assert = require("assert");
const MarioChar = require("../models/marioChar");

// describe tests
describe("Deleting records", function () {
  let char;
  // Add a character to the db before each tests
  beforeEach(function (done) {
    char = new MarioChar({
      name: "ucup",
    });
    char.save().then(function () {
      done();
    });
  });

  // create tests
  it("Deletes one record from the database", function (done) {
    MarioChar.findOneAndRemove({ name: "ucup" }).then(function () {
      MarioChar.findOne({ name: "ucup" }).then(function (result) {
        assert(result === null);
        done();
      });
    });
  });
});
