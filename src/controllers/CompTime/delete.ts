import { Request, Response } from "express";
import DeleteCompTimeService from "../../services/CompTime/delete.service"

class DeleteCompTimeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCompTimeService = new DeleteCompTimeService();

    const deleteCompTime = await deleteCompTimeService.execute(id);

    return response.json(deleteCompTime);
  }
}

export default DeleteCompTimeController;
