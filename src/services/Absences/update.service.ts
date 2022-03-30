import { getRepository } from "typeorm";
import AbsenceTime from "../../models/AbsenceTime";
import ErrorHandler from "../../utils/error";

class UpdateAbsenceService {
  async execute({ id, data }) {
    const absencesRepository = getRepository(AbsenceTime);

    const absence = await absencesRepository.findOne({ id });

    if (!absence) {
      throw new ErrorHandler("Occurrence not found");
    }

    await absencesRepository.update(id, data);

    return await absencesRepository.findOne({ id });
  }
}

export default UpdateAbsenceService;
