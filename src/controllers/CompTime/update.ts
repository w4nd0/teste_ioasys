import { Request, Response } from "express";
import UpdateCompTimeService from "../../services/CompTime/update.service";

class UpdateCompTimeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const data = request.body;

    const updateCompTimeService = new UpdateCompTimeService();

    const updateCompTime = await updateCompTimeService.execute({ id, data });

    return response.json(updateCompTime);
  }
}

export default UpdateCompTimeController;
