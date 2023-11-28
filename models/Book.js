const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    "name": String,
    "option": [
        {
            "language": String,
            "price": Number,
        }
    ],
}, { versionKey: false});
  
module.exports = mongoose.model("Book", bookSchema, "books");
