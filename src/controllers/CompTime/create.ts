import { Request, Response } from "express";
import CreateCompTimeService from "../../services/CompTime/create.service";

class CreateCompTimeController {
  async handle(request: Request, response: Response) {
    const createCompTimeService = new CreateCompTimeService();

    const newCompTime = await createCompTimeService.execute(request.body);

    return response.status(201).json(newCompTime);
  }
}

export default CreateCompTimeController;
