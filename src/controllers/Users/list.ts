import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import LisUsersService from "../../services/Users/list.service";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersService = new LisUsersService();

    const listUsers = await listUsersService.execute();

    return response.json(instanceToInstance(listUsers));
  }
}

export default ListUsersController;
