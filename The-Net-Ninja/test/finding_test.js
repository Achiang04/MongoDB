const assert = require("assert");
const MarioChar = require("../models/marioChar");

// describe tests
describe("Finding records", function () {
  let char;
  // Add a character to the db before each tests
  beforeEach(function (done) {
    char = new MarioChar({
      name: "ucup",
    });
    char.save().then(function () {
      //   assert(chat.isNew === false);
      done(); // go next test
    });
  });

  // create tests
  it("finds one record from the database", function (done) {
    // MarioChar.find({})
    // kalau object kosong gini dia bakal cari semua isi data nya dan direturn
    // mungkin ini cara untuk get all data
    MarioChar.findOne({ name: "ucup" }).then(function (result) {
      assert(result.name === "ucup");
      done();
    });
  });
  // next test
  it("finds one record by ID from the database", function (done) {
    MarioChar.findOne({ _id: char._id }).then(function (result) {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
