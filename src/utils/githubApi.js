const GITHUB_USERNAME = "jemaxmars";
const BASE_URL = "https://api.github.com";
const CACHE_KEY = "github_data_cache";
const CACHE_DURATION = 60 * 60 * 1000;

const getCache = (key) => {
  try {
    const cached = localStorage.getItem(`${CACHE_KEY}_${key}`);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const isExpired = Date.now() - timestamp > CACHE_DURATION;

    if (isExpired) {
      localStorage.removeItem(`${CACHE_KEY}_${key}`);
      return null;
    }

    console.log(`Using cached data for: ${key}`);
    return data;
  } catch (error) {
    console.error("Cache read error:", error);
    return null;
  }
};

const setCache = (key, data) => {
  try {
    const cacheData = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(`${CACHE_KEY}_${key}`, JSON.stringify(cacheData));
  } catch (error) {
    console.error("Cache write error:", error);
  }
};

export async function fetchUserRepos(forceRefresh = false) {
  const cacheKey = "repos";

  if (!forceRefresh) {
    const cached = getCache(cacheKey);
    if (cached) return cached;
  }

  try {
    console.log("Fetching GitHub repos for:", GITHUB_USERNAME);
    const response = await fetch(
      `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10&type=owner`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    throw error;
  }
}

export async function fetchUserProfile(forceRefresh = false) {
  const cacheKey = "profile";

  if (!forceRefresh) {
    const cached = getCache(cacheKey);
    if (cached) return cached;
  }

  try {
    const response = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}`);
    if (!response.ok) throw new Error("Failed to fetch profile");

    const data = await response.json();
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    throw error;
  }
}

export async function fetchGitHubStats(forceRefresh = false) {
  const cacheKey = "stats";

  if (!forceRefresh) {
    const cached = getCache(cacheKey);
    if (cached) return cached;
  }

  try {
    const profile = await fetchUserProfile(forceRefresh);
    const stats = {
      name: profile.name,
      bio: profile.bio,
      location: profile.location,
      publicRepos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
      avatarUrl: profile.avatar_url,
      profileUrl: profile.html_url,
      blogUrl: profile.blog,
    };
    setCache(cacheKey, stats);
    return stats;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    throw error;
  }
}

export async function fetchRepoDetails(repoName, forceRefresh = false) {
  const cacheKey = `repo_${repoName}`;

  if (!forceRefresh) {
    const cached = getCache(cacheKey);
    if (cached) return cached;
  }

  try {
    console.log(`Fetching details for repo: ${repoName}`);
    const response = await fetch(
      `${BASE_URL}/repos/${GITHUB_USERNAME}/${repoName}`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    console.error(`Error fetching repo details for ${repoName}:`, error);
    throw error;
  }
}
