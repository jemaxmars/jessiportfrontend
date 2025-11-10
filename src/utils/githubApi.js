const GITHUB_USERNAME = "jemaxmars";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

// Helper function to get cached data
function getCachedData(key) {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);
  if (Date.now() - timestamp > CACHE_DURATION) {
    localStorage.removeItem(key);
    return null;
  }
  return data;
}

// Helper function to cache data
function setCachedData(key, data) {
  localStorage.setItem(
    key,
    JSON.stringify({
      data,
      timestamp: Date.now(),
    })
  );
}

// Fetch user repositories
export async function fetchUserRepos() {
  try {
    // Don't use cache for now - fetch fresh data
    console.log("Fetching GitHub repos for:", GITHUB_USERNAME);
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10&type=owner`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Full API response:", data);

    // Log first repo to see ALL properties
    if (data.length > 0) {
      console.log(
        "First repo ALL properties:",
        JSON.stringify(data[0], null, 2)
      );
    }

    return data;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    throw error;
  }
}

export async function fetchUserProfile() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`
    );
    if (!response.ok) throw new Error("Failed to fetch profile");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    throw error;
  }
}

export async function fetchGitHubStats() {
  try {
    const profile = await fetchUserProfile();
    return {
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
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    throw error;
  }
}
