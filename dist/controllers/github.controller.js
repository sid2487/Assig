import { cache } from "../utils/cache.js";
import { fetchGitHub } from "../services/github.js";
export const getUser = async (req, res) => {
    try {
        if (!cache.user) {
            await fetchGitHub("octocat");
        }
        return res.status(200).json(cache.user);
    }
    catch (error) {
        console.error("Server User Error", error);
        return res.status(500).json("Server User ERror");
    }
};
export const getRepos = async (req, res) => {
    try {
        if (!cache.repos) {
            await fetchGitHub("octocat");
        }
        let repos = cache.repos || [];
        const lang = req.query.language;
        if (lang) {
            repos = repos.filter((repo) => repo.language === lang);
        }
        return res.status(200).json(repos);
    }
    catch (error) {
        console.error("Server Repos Error", error);
        return res.status(500).json("Server Repos Error");
    }
};
export const getRepoByName = async (req, res) => {
    try {
        if (!cache.repos) {
            await fetchGitHub("octocat");
        }
        const name = req.params.name?.toLowerCase();
        const repo = cache.repos?.find(r => r.name.toLowerCase() === name);
        if (!repo) {
            return res
                .status(404)
                .json({ error: "Repository not found" });
        }
        ;
        return res.status(200).json(repo);
    }
    catch (error) {
        console.error("Server Repo Error", error);
        return res.status(500).json("Server Repo Error");
    }
};
//# sourceMappingURL=github.controller.js.map