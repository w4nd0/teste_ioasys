import { Request, Response } from "express";
import UpdateAbsencesService from "../../services/Absences/update.service";

class UpdateAbsenceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const data = request.body;

    const updateAbsenceService = new UpdateAbsencesService();

    const updateAbsence = await updateAbsenceService.execute({ id, data });

    return response.json(updateAbsence);
  }
}

export default UpdateAbsenceController;
