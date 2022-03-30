import { Router, Express } from "express";
import {
  setPassword,
  authenticate,
  resourceOwnerOrAdm,
} from "../middlewares/user.middleware";
import { isAdm } from "../middlewares/adm.middleware";
import CreateUserController from "../controllers/Users/create";
import ListUsersController from "../controllers/Users/list";
import LoginUserController from "../controllers/Users/login";
import RetriveUserController from "../controllers/Users/retrieve";

const router = Router();

const usersRoutes = (app: Express) => {
  app.post("/login", new LoginUserController().handle);
  router.post("", setPassword, new CreateUserController().handle);

  router.use(authenticate);

  router.get("", isAdm, new ListUsersController().handle);
  router.get("/:id", resourceOwnerOrAdm, new RetriveUserController().handle);

  app.use("/user", router);
};

export default usersRoutes;
