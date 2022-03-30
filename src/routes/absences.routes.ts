import { Router, Express } from "express";
import {
  authenticate,
  resourceOwnerOrAdm,
} from "../middlewares/user.middleware";
import { isAdm } from "../middlewares/adm.middleware";
import CreateAbsenceController from "../controllers/Absences/create";
import ListAbsencesController from "../controllers/Absences/list";
import RetriveAbsenceController from "../controllers/Absences/retrive";
import UpdateAbsenceController from "../controllers/Absences/update";
import DeleteAbsenceController from "../controllers/Absences/delete";

const absencesTimeRouter = Router();

const absencesRoutes = (app: Express) => {
  absencesTimeRouter.use(authenticate);

  absencesTimeRouter.get(
    "/:id",
    resourceOwnerOrAdm,
    new RetriveAbsenceController().handle
  );
  
  absencesTimeRouter.use(isAdm);

  absencesTimeRouter.post("", new CreateAbsenceController().handle);
  absencesTimeRouter.get("", new ListAbsencesController().handle);
  absencesTimeRouter.patch("", new UpdateAbsenceController().handle);
  absencesTimeRouter.delete("", new DeleteAbsenceController().handle);

  app.use("/absences", absencesTimeRouter);
};

export default absencesRoutes;
