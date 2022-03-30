import User from "../../models/User";
import { InfoUser } from "../../types";
import { getRepository } from "typeorm";
import ErrorHandler from "../../utils/error";

class CreateUserService {
  async execute(user: InfoUser): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUser = await usersRepository.findOne({
      where: { email: user.email },
    });

    if (checkUser) throw new ErrorHandler("E-mail already registered");

    const newUser = usersRepository.create({ ...user });

    await usersRepository.save(newUser);

    delete newUser.password;

    return newUser;
  }
}

export default CreateUserService;
