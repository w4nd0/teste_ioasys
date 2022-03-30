import { Request, Response } from "express";
import CreateAbsenceService from "../../services/Absences/create.service";

class CreateAbsenceController {
  async handle(request: Request, response: Response) {
    const createAbsenceService = new CreateAbsenceService();

    const newAbsence = await createAbsenceService.execute(request.body);

    return response.status(201).json(newAbsence);
  }
}

export default CreateAbsenceController;
