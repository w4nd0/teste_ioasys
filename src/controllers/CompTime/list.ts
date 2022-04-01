import { Request, Response } from "express";
import ListCompTimesService from "../../services/CompTime/list.service";

class ListCompTimesController {
  async handle(request: Request, response: Response) {
    const listCompTimesService = new ListCompTimesService();

    const userId: string = request.userId;
    const isAdm: boolean = request.isAdm;

    const listCompTimes = await listCompTimesService.execute(userId, isAdm);

    return response.json(listCompTimes);
  }
}

export default ListCompTimesController;
