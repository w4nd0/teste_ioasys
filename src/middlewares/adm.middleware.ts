import jwt from "jsonwebtoken";
import { getCustomRepository, getRepository } from "typeorm";
import User from "../models/User";
import ErrorHandler from "../utils/error";

export const isAdm = async (req, res, next) => {
  try {
    const userLogin = <jwt.UserId>(
      jwt.decode(req.headers.authorization.split(" ")[1])
    );

    const { userId } = userLogin;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ id: userId });

    if (user.isAdm) {
      next();
    } else {
      throw new ErrorHandler("Missing admin permissions", 401);
    }
  } catch (e) {
    if (e instanceof ErrorHandler) {
      throw new ErrorHandler(e.message, e.statusCode);
    }
    throw new ErrorHandler("Internal Error", 500);
  }
};
