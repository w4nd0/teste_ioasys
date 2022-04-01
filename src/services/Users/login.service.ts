import { InfoLogin } from "../../types";
import { getRepository } from "typeorm";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/auth";
import ErrorHandler from "../../utils/error";
import User from "../../models/User";

class LoginUserService {
  async execute(user: InfoLogin) {
    const usersRepository = getRepository(User);

    const { email, password } = user;

    if (!email || !password) {
      throw new ErrorHandler("Wrong email/password");
    }

    const infoLogin = await usersRepository.findOne({
      where: { email },
      select: ["id", "password", "isAdm"],
    });

    if (!infoLogin) {
      throw new ErrorHandler("Wrong email/password");
    }
    const match = await bcrypt.compare(password, infoLogin.password);
    if (!match) {
      throw new ErrorHandler("Wrong email/password");
    }
    const token: string = jwt.sign(
      {
        userId: infoLogin.id,
        isAdm: infoLogin.isAdm,
      },
      config.secret,
      {
        expiresIn: config.expiresIn,
      }
    );

    return token;
  }
}

export default LoginUserService;
