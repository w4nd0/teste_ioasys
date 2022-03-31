import { getRepository } from "typeorm";
import CompTime from "../../models/CompTime";
import ErrorHandler from "../../utils/error";

class UpdateCompTimeService {
  async execute({ id, data }) {
    const compTimesRepository = getRepository(CompTime);

    const compTime = await compTimesRepository.findOne({ id });

    if (!compTime) {
      throw new ErrorHandler("Occurrence not found");
    }

    await compTimesRepository.update(id, data);

    return await compTimesRepository.findOne({ id });
  }
}

export default UpdateCompTimeService;
