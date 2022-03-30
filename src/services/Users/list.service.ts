import { getRepository } from "typeorm";
import User from "../../models/User";

class ListUsersService {
  async execute() {
    const usersRepository = getRepository(User);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUsersService;
