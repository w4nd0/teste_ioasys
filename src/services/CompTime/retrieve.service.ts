import ErrorHandler from "../../utils/error";
import { getRepository } from "typeorm";
import CompTime from "../../models/CompTime";

class RetriveCompTimeService {
  async execute(id: string) {
    const compTimesRepository = getRepository(CompTime);

    const compTime = await compTimesRepository
      .findOneOrFail({ id })
      .catch((e) => {
        throw new ErrorHandler("Occurrence not found");
      });

    return compTime;
  }
}
export default RetriveCompTimeService;
