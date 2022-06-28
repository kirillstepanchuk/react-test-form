import { Request, Response } from "express";

const { httpStatusCode } = require("../constants");

const handleAddFeedback = async (req: Request, res: Response) => {
  try {
    console.log("req: ", req.body);

    res.status(httpStatusCode.OK).send({
      message: "Ваш отзыв успешно отправлен!",
    });
  } catch (e) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send({
      message:
        "Упс... Какая-то ошибка при отправке отзыва. Попробуйте немного позже)",
    });
  }
};

module.exports = {
  handleAddFeedback,
};
