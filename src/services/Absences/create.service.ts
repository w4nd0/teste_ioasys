import AbsenceTime from "../../models/AbsenceTime";
import { InfoAbsenceTime } from "../../types";
import { getRepository } from "typeorm";

class CreateAbsenceService {
  async execute(absence: InfoAbsenceTime): Promise<AbsenceTime> {
    console.log(absence);
    const AbsencesRepository = getRepository(AbsenceTime);

    try {
      const newAbsence = AbsencesRepository.create({ ...absence });

      await AbsencesRepository.save(newAbsence);

      return newAbsence;
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default CreateAbsenceService;
