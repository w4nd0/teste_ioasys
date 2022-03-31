import { getRepository } from "typeorm";
import ErrorHandler from "../../utils/error";
import CompTime from "../../models/CompTime";

class DeleteCompTimesService {
  async execute(id: string) {
    const compTimesRepository = getRepository(CompTime);

    const compTime = await compTimesRepository.findOne({ id });

    if (!compTime) {
      throw new ErrorHandler("Occurrence not found");
    }

    await compTimesRepository.delete(id);

    return { message: "Compensatory time deleted with success" };
  }
}

export default DeleteCompTimesService;
