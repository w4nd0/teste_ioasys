import { getRepository } from "typeorm";
import CompTime from "../../models/CompTime";

class ListCompTimesService {
  async execute() {
    const compTimeRepository = getRepository(CompTime);

    const compTime = compTimeRepository.find();

    return compTime;
  }
}

export default ListCompTimesService;
