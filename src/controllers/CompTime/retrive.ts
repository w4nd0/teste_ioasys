import { Request, Response } from "express";
import RetriveCompTimesService from "../../services/CompTime/retrieve.service";

class RetriveCompTimeController {
  async handle(request: Request, response: Response) {
    const retriveCompTimesService = new RetriveCompTimesService();

    const { id } = request.params;

    const compTime = await retriveCompTimesService.execute(id);

    return response.json(compTime);
  }
}

export default RetriveCompTimeController;
