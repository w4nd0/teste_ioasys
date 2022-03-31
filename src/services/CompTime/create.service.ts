import { InfoCompensatoryTime } from "../../types";
import { getRepository } from "typeorm";
import CompTime from '../../models/CompTime'

class CreateCompTimeService {
  async execute(compTime: InfoCompensatoryTime): Promise<CompTime> {
    const CompTimesRepository = getRepository(CompTime);

    try {
      const newCompTime = CompTimesRepository.create({ ...compTime });

      await CompTimesRepository.save(newCompTime);

      return newCompTime;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default CreateCompTimeService;
