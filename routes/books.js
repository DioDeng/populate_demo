var express = require("express");
var router = express.Router();
const BookControllers = require("../controllers/books");
const handErrorAsync = require("../service/handErrorAsync");

router.get("/book", handErrorAsync(BookControllers.getBook));
router.post("/book", handErrorAsync(BookControllers.createBook));

module.exports = router;