import express from "express";
import { Express } from "express";
import usersRoutes from "./users.routes";
import absencesRoutes from "./absences.routes";
import compTimeRoutes from "./compTime.routes";

const routes = (app: Express) => {
  app.use(express.json());
  usersRoutes(app);
  absencesRoutes(app);
  compTimeRoutes(app);
};

export default routes;
