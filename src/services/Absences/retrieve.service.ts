import ErrorHandler from "../../utils/error";
import { getRepository } from "typeorm";
import AbsenceTime from "../../models/AbsenceTime";

class RetriveAbsenceService {
  async execute(id: string) {
    const absencesRepository = getRepository(AbsenceTime);

    const absence = await absencesRepository.findOneOrFail({ id }).catch(
      (e) => {
        throw new ErrorHandler("Occurrence not found");
      }
    );

    return absence;
  }
}
export default RetriveAbsenceService;
