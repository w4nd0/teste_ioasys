import { Request, Response } from "express";
import RetriveAbsenceService from "../../services/Absences/retrieve.service";

class RetriveAbsenceController {
  async handle(request: Request, response: Response) {
    const retriveAbsencesService = new RetriveAbsenceService();

    const { id } = request.params;

    const absence = await retriveAbsencesService.execute(id);

    return response.json(absence);
  }
}

export default RetriveAbsenceController;
