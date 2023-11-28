var express = require("express");
var router = express.Router();
const AuthorControllers = require("../controllers/authors");
const handErrorAsync = require("../service/handErrorAsync");

router.get("/author", handErrorAsync(AuthorControllers.getAuthor));
router.post("/author", handErrorAsync(AuthorControllers.createAuthor));

module.exports = router;