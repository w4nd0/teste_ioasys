import { Request, Response } from "express";
import UpdateUserService from "../../services/Users/update.service";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const data = request.body;

    const updateUserService = new UpdateUserService();

    const updateUser = await updateUserService.execute({ id, data });

    return response.json(updateUser);
  }
}

export default UpdateUserController;
