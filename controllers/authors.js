const resSuccess = require("../service/resSuccess");
const appError = require("../service/appError");
const Author = require("../models/Author");

const authors = {
    // 取得
    async getAuthor(req, res, next) {
    //   {
    //     "_id": "655c8fdf60c381b3d359043d",
    //     "author": "LULU",
    //     "books": [
    //         "655c8e75acd60f16daea6ef1",
    //         "655c8e9bacd60f16daea6ef6"
    //     ],
    //     "option": "655c8e75acd60f16daea6ef2"
    // }
        const result = await Author.find({
            'author': 'LULU'
          }).populate({
            path: "books",
            select: "name"
          }).populate({
            path: "option",
          });
          // 回傳的資料，option為null，非預期所想 ＱＱ
          // option的id 來自book資料庫裡頭的option集合
          // 
          // "data": [
          //   {
          //       "_id": "655c8fdf60c381b3d359043d",
          //       "author": "LULU",
          //       "books": [
          //           {
          //               "_id": "655c8e75acd60f16daea6ef1",
          //               "name": "貓狗大戰"
          //           },
          //           {
          //               "_id": "655c8e9bacd60f16daea6ef6",
          //               "name": "呼嚕與六便士"
          //           }
          //       ],
          //       "option": null
          //   }

        resSuccess(res, 201, result);
    },
  // 新增
  async createAuthor(req, res, next) {
    const { books, author, option } = req.body;
    // 欄位未填寫正確
    if ( !books ) {
      return next(appError(400, "欄位未填寫正確！", next));
    }

    const newData = await Author.create({
        books, author, option
    });
    resSuccess(res, 201, newData);
  },
};

module.exports = authors;