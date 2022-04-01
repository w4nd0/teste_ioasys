import ListCompTimesService from "../../services/CompTime/list.service";

class ListCompTimesController {
  async handle(request, response) {
    const listCompTimesService = new ListCompTimesService();

    const userId: string = request.userId;
    const isAdm: boolean = request.isAdm;

    const listCompTimes = await listCompTimesService.execute(userId, isAdm);

    return response.json(listCompTimes);
  }
}

export default ListCompTimesController;
