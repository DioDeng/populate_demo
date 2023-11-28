const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const authorSchema = new Schema({
    "author": String,
    "books": [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    "option": {
        type: Schema.Types.ObjectId,
        ref: "Book"
    },
}, { versionKey: false});

module.exports = mongoose.model("Author", authorSchema, "authors"); // 分别为Model名、Schema、数据库中集合名