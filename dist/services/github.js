import axios from "axios";
import { cache } from "../utils/cache.js";
export async function fetchGitHub(username) {
    try {
        const userRes = await axios.get(`https://api.github.com/users/${username}`);
        const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`);
        cache.user = userRes.data;
        cache.repos = repoRes.data;
    }
    catch (error) {
        console.error("Github api Error");
        throw new Error(error.message);
    }
}
//# sourceMappingURL=github.js.map