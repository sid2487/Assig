import { Router } from "express";
import { getRepoByName, getRepos, getUser } from "../controllers/github.controller.js";
const router = Router();
router.get("/user", getUser);
router.get("/repos", getRepos);
router.get("/repos/:name", getRepoByName);
export default router;
//# sourceMappingURL=github.routes.js.map