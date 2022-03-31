import { Request, Response } from "express";
import ListCompTimesService from "../../services/CompTime/list.service";

class ListCompTimesController {
  async handle(request: Request, response: Response) {
    const listCompTimesService = new ListCompTimesService();

    const listCompTimes = await listCompTimesService.execute();

    return response.json(listCompTimes);
  }
}

export default ListCompTimesController;
