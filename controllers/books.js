const resSuccess = require("../service/resSuccess");
const appError = require("../service/appError");
const Book = require("../models/Book");

const books = {
  // 新增
  async createBook(req, res, next) {
    const { name, version, address } = req.body;

    // 欄位未填寫正確
    if ( !name || !version ) {
      return next(appError(400, "欄位未填寫正確！", next));
    }

    const newBook = await Book.create({
        name, version, address
    });
    resSuccess(res, 201, newBook);
  },
  async getBook(req, res, next) {
    const data = await Book.find();
    resSuccess(res, 201, data);
  }
};

module.exports = books;