import express from "express";

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log("Server starded on port 3333");
});

export default app;

// import express, { Request, Response, NextFunction } from "express";
// import "express-async-errors";
// import "./database";
// import routes from "./routes";
// import ErrorHandler from "./utils/error";

// const app = express();

// routes(app);

// app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
//   if (err instanceof ErrorHandler) {
//     return response.status(err.statusCode).json({
//       status: "error",
//       message: err.message,
//     });
//   }

//   return response.status(500).json({
//     status: "error",
//     message: "Internal server error",
//   });
// });

// export default app;
