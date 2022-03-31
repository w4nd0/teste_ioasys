import { Request, Response } from "express";
import UpdateAbsenceService from "../../services/Absences/update.service";

class UpdateAbsenceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const data = request.body;

    const updateAbsenceService = new UpdateAbsenceService();

    const updateAbsence = await updateAbsenceService.execute({ id, data });

    return response.json(updateAbsence);
  }
}

export default UpdateAbsenceController;
