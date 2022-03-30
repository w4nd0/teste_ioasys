import express from "express";
import usersRoutes from "./users.routes";
import { Express } from "express";
import absencesRoutes from "./absences.routes";

const routes = (app: Express) => {
  app.use(express.json());
  usersRoutes(app);
  absencesRoutes(app);
};

export default routes;
