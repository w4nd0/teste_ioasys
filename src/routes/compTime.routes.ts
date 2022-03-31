import { Router, Express } from "express";
import {
  authenticate,
  resourceOwnerOrAdm,
} from "../middlewares/user.middleware";
import { isAdm } from "../middlewares/adm.middleware";
import RetriveCompTimeController from "../controllers/CompTime/retrive";
import CreateCompTimeController from "../controllers/CompTime/create";
import ListCompTimesController from "../controllers/CompTime/list";
import UpdateCompTimeController from "../controllers/CompTime/update";
import DeleteCompTimeController from "../controllers/CompTime/delete";

const compTimeRouter = Router();

const compTimeRoutes = (app: Express) => {
  compTimeRouter.use(authenticate);

  compTimeRouter.get(
    "/:id",
    resourceOwnerOrAdm,
    new RetriveCompTimeController().handle
  );

  compTimeRouter.use(isAdm);

  compTimeRouter.post("", new CreateCompTimeController().handle);
  compTimeRouter.get("", new ListCompTimesController().handle);
  compTimeRouter.patch("", new UpdateCompTimeController().handle);
  compTimeRouter.delete("", new DeleteCompTimeController().handle);

  app.use("/compensatory", compTimeRouter);
};

export default compTimeRoutes;
