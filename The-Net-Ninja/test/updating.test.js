/*
char.update() = single / atau cuman bisa hapus satu
marioChar.update() // bisa hapus lebih dari satu selagi dia sama
marioChar.findOneAndUpdate() // cari yang pertama ketemu di db dan hapus
*/

const assert = require("assert");
const MarioChar = require("../models/marioChar");

// describe tests
describe("Updating records", function () {
  let char;
  // Add a character to the db before each tests
  beforeEach(function (done) {
    char = new MarioChar({
      name: "ucup",
      weight: 50,
    });
    char.save().then(function () {
      done();
    });
  });

  // create tests
  it("Updates one record from the database", function () {
    MarioChar.findOneAndUpdate({ name: "ucup" }, { name: "asep" }).then(
      function () {
        MarioChar.findOne({ _id: char._id }).then(function (result, done) {
          assert(result.name === "asep");
          done();
        });
      }
    );
  });

  it("Increment the weight by 1", function (done) {
    MarioChar.update({}, { $inc: { weight: 1 } }).then(function () {
      MarioChar.findOne({ name: "ucup" }).then(function (record) {
        assert(record.weight === 51);
        done();
      });
    });
  });
});
