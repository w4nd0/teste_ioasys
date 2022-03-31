import { getRepository } from "typeorm";
import User from "../../models/User";
import ErrorHandler from "../../utils/error";

class UpdateUserService {
  async execute({ id, data }) {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ id });

    if (!user) {
      throw new ErrorHandler("User not found");
    }

    await usersRepository.update(id, data);

    return await usersRepository.findOne({ id });
  }
}

export default UpdateUserService;
