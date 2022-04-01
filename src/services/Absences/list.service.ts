import { getRepository } from "typeorm";
import AbsenceTime from "../../models/AbsenceTime";

class ListAbsencesService {
  async execute(userId: string, isAdm: boolean) {
    const absencesRepository = getRepository(AbsenceTime);

    if (isAdm) {
      return absencesRepository.find();
    } else {
      return absencesRepository.find({ where: { userId } });
    }
  }
}

export default ListAbsencesService;
