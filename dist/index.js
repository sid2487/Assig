import express from "express";
import githubRoutes from "./routes/github.routes.js";
const app = express();
const port = 3000;
app.use("/api", githubRoutes);
app.listen(port, () => {
    console.log(`Server is listenig on ${port}`);
});
//# sourceMappingURL=index.js.map