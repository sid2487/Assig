import express from "express";
import githubRoutes from "./routes/github.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const port = 3000;

app.use("/api", githubRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listenig on ${port}`);
});