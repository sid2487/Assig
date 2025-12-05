import axios from "axios";
import { cache } from "../utils/cache.js";
import type { GitHubUser } from "../types/User.js";
import type { GitHubRepo } from "../types/Repo.js";



export async function fetchGitHub(username: string): Promise<void>{
    try {
        const userRes = await axios.get<GitHubUser>(`https://api.github.com/users/${username}`);
        const repoRes = await axios.get<GitHubRepo[]>(`https://api.github.com/users/${username}/repos`);

        cache.user = userRes.data;
        cache.repos = repoRes.data;
    } catch (error: any) {
        console.error("Github api Error");
        throw new Error(error.response?.data);
    }
}