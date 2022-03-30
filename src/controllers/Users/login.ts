import { Request, Response } from "express";
import LoginUserService from "../../services/Users/login.service";

class LoginUserController {
  async handle(request: Request, response: Response) {
    const loginUserService = new LoginUserService();

    const token = await loginUserService.execute(request.body);

    return response.json({ token });
  }
}

export default LoginUserController;
