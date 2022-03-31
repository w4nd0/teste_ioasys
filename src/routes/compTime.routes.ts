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
import { compTimeCreateSchema } from "../schemas/CompTime/compTimeCreate";
import { schemaValidate } from "../middlewares/schemaValidate";
import { compTimeUpdateSchema } from "../schemas/CompTime/compTimeUpdate";

const compTimeRouter = Router();

const compTimeRoutes = (app: Express) => {
  compTimeRouter.use(authenticate);

  compTimeRouter.get(
    "/:id",
    resourceOwnerOrAdm,
    new RetriveCompTimeController().handle
  );

  compTimeRouter.use(isAdm);

  compTimeRouter.post(
    "",
    schemaValidate(compTimeCreateSchema),
    new CreateCompTimeController().handle
  );
  compTimeRouter.get("", new ListCompTimesController().handle);
  compTimeRouter.patch(
    "",
    schemaValidate(compTimeUpdateSchema),
    new UpdateCompTimeController().handle
  );
  compTimeRouter.delete("", new DeleteCompTimeController().handle);

  app.use("/compensatory", compTimeRouter);
};

export default compTimeRoutes;
