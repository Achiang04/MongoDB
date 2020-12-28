// const mocha = require("mocha");
// ga perlu import bisa jalan juga

const assert = require("assert");
const MarioChar = require("../models/marioChar");

// describe tests
describe("Saving records", function () {
  // create tests
  it("saves a record to the database", function () {
    const char = new MarioChar({
      name: "ucup",
    });
    char.save().then(function () {
      assert(chat.isNew === false);
      done(); // go next test
    });
  });
  // next test
});
