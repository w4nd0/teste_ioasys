import { getRepository } from "typeorm";
import ErrorHandler from "../../utils/error";
import AbsenceTime from "../../models/AbsenceTime";

class DeleteAbsencesService {
  async execute(id: string) {
    const absencesRepository = getRepository(AbsenceTime);

    const absence = await absencesRepository.findOne({ id });

    if (!absence) {
      throw new ErrorHandler("Occurrence not found");
    }

    await absencesRepository.delete(id);

    return { message: "Absence deleted with success" };
  }
}

export default DeleteAbsencesService;
