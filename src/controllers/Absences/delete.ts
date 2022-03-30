import { Request, Response } from "express";
import DeleteAbsenceService from "../../services/Absences/delete.service";

class DeleteAbsenceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteAbsenceService = new DeleteAbsenceService();

    const deleteAbsence = await deleteAbsenceService.execute(id);

    return response.json(deleteAbsence);
  }
}

export default DeleteAbsenceController;
