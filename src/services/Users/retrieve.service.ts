import ErrorHandler from "../../utils/error";
import { getRepository } from "typeorm";
import User from "../../models/User";

class RetriveUserService {
  async execute(id: string) {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOneOrFail({ id }).catch((e) => {
      throw new ErrorHandler("User not found");
    });

    return user;
  }
}
export default RetriveUserService;
