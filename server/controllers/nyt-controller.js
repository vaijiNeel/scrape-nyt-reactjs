var Article = require("../models/Articles");

module.exports = {
  // this method handles finding all articles in the db
  find: function(req, res) {
    console.log("get saved articles from the db");
    Article.find()
    .then(function(doc) {
      console.log("found articles doc: ", doc);
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles adding new articles to the db
  insert: function(req, res) {
    console.log("Add saved artice to the db");
    console.log("req.body: ", req.body);
    Article.create(req.body)
    .then(function(doc) {
      res.json(doc);
      console.log("saved article - doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // this method handles deleting articles from the db
  delete: function(req, res) {
    console.log("Delete a saved article from the db");
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      console.log("deleted article - doc: ", doc);
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};