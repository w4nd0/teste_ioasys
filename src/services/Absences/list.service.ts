import { getRepository } from "typeorm";
import AbsenceTime from "../../models/AbsenceTime";

class ListAbsencesService {
  async execute() {
    const absencesRepository = getRepository(AbsenceTime);

    const absences = absencesRepository.find();

    return absences;
  }
}

export default ListAbsencesService;
