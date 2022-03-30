import { Request, Response } from "express";
import ListAbsencesService from "../../services/Absences/list.service";

class ListAbsencesController {
  async handle(request: Request, response: Response) {
    const listAbsencesService = new ListAbsencesService();

    const listAbsences = await listAbsencesService.execute();

    return response.json(listAbsences);
  }
}

export default ListAbsencesController;
