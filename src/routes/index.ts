import express from "express";
import usersRoutes from "./users.routes";
import { Express } from "express";

const routes = (app: Express) => {
  app.use(express.json());
  usersRoutes(app);
};

export default routes;
