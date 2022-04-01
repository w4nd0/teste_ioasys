import ListAbsencesService from "../../services/Absences/list.service";

class ListAbsencesController {
  async handle(request, response) {
    const listAbsencesService = new ListAbsencesService();

    const userId: string = request.userId;
    const isAdm: boolean = request.isAdm;

    const listAbsences = await listAbsencesService.execute(userId, isAdm);

    return response.json(listAbsences);
  }
}

export default ListAbsencesController;
