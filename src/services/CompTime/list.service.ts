import { getRepository } from "typeorm";
import CompTime from "../../models/CompTime";

class ListCompTimesService {
  async execute(userId: string, isAdm: boolean) {
    const compTimeRepository = getRepository(CompTime);

    if (isAdm) {
      return compTimeRepository.find();
    } else {
      return compTimeRepository.find({ where: { userId } });
    }
  }
}

export default ListCompTimesService;
