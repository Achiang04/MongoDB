const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

// Describe our tests
describe("Nesting records", function () {
  beforeEach(function (done) {
    mongoose.connection.collections.authors.drop(function () {
      done();
    });
  });

  // create tests
  it("create an author with sub-documents", function (done) {
    const pat = new Author({
      name: "asep",
      books: [{ title: "mati aja kau sana", pages: 300 }],
    });
    pat.save().then(function () {
      Author.findOne({ name: "asep" }).then(function (record) {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it("adds a book to an author", function (done) {
    const pat = new Author({
      name: "asep",
      books: [{ title: "mati aja kau sana", pages: 300 }],
    });
    pat.save().then(function () {
      Author.findOne({ name: "asep" }).then(function (record) {
        record.books.push({ title: "kok masih idup kau bujang", pages: 1000 });
        record.save().then(function () {
          Author.findOne({ name: "asep" }).then(function (record) {
            assert(record.books.length === 2);
            done();
          });
        });
      });
    });
  });
});
