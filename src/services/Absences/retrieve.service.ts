import ErrorHandler from "../../utils/error";
import { getRepository } from "typeorm";
import AbsenceTime from "../../models/AbsenceTime";

class RetriveAbsencesService {
  async execute(id: string) {
    const AbsencessRepository = getRepository(AbsenceTime);

    const absence = await AbsencessRepository.findOneOrFail({ id }).catch(
      (e) => {
        throw new ErrorHandler("Occurrence not found");
      }
    );

    return absence;
  }
}
export default RetriveAbsencesService;
