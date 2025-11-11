import { useState, useEffect } from "react";
import { fetchUserProfile } from "../../utils/githubApi";
import "./AboutGitHubStats.css";

function AboutGitHubStats() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserProfile()
      .then(setProfile)
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError("Failed to load GitHub stats");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (error) return null;
  if (!profile) return null;

  return (
    <div className="about-github-stats">
      <h3 className="about-github-stats-title">GitHub Activity</h3>
      <div className="about-stats-grid">
        <div className="about-stat">
          <span className="about-stat-number">{profile.public_repos}</span>
          <span className="about-stat-label">Public Repos</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-number">{profile.followers}</span>
          <span className="about-stat-label">Followers</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-number">{profile.following}</span>
          <span className="about-stat-label">Following</span>
        </div>
      </div>
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="about-github-link"
      >
        View GitHub Profile →
      </a>
    </div>
  );
}

export default AboutGitHubStats;
