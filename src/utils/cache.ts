import type { GitHubRepo } from "../types/Repo.js";
import type { GitHubUser } from "../types/User.js";

export const cache: {
    user: GitHubUser | null;
    repos: GitHubRepo[] | null
} = {
      user: null,
      repos: null,
    
}