import React, { useState, useEffect } from "react";
import { fetchUserRepos } from "../../utils/githubApi";
import "./MyWork.css";

function MyWork() {
  const [githubData, setGithubData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGitHubData = async () => {
      try {
        console.log("Starting to fetch repos...");
        const repos = await fetchUserRepos();
        console.log("Raw repos from API:", repos);

        const dataMap = {};
        repos.forEach((repo) => {
          console.log(`Processing repo: ${repo.name}`, {
            name: repo.name,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            html_url: repo.html_url,
          });

          dataMap[repo.name] = {
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            url: repo.html_url,
          };
        });

        console.log("Final dataMap:", dataMap);
        setGithubData(dataMap);
      } catch (err) {
        console.error("Failed to load GitHub data:", err);
      } finally {
        setLoading(false);
      }
    };
    loadGitHubData();
  }, []);

  const projects = [
    {
      id: 0,
      title: "WTWR - What To Wear",
      repoName: "se_project_express",
      description:
        "A full-stack web application that provides clothing recommendations based on current weather conditions. Features user authentication, profile management, and clothing item collection with like/dislike functionality. The frontend is built with React and the backend uses Node.js with Express and MongoDB. Implements JWT authentication, RESTful API design, and real-time weather data integration. This project showcases comprehensive full-stack development skills including database design, API development, and modern React patterns.",
      image: "/wtwrThumbnail.png",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "CSS3",
        "REST API",
        "Postman",
        "Git",
        "Figma",
      ],
      liveLink: "https://wtwr.raresupply.com/",
      githubLink: "https://github.com/jemaxmars/se_project_express",
      videoLink: "https://youtu.be/Y1ElcO0zIQ4?si=TzRm1h5Jof5G5m1n",
    },
    {
      id: 1,
      title: "Spots - Image Sharing Site",
      repoName: "se_project_spots",
      description:
        "A responsive web application developed as part of the TripleTen Software Engineering Program. This project represents my first fully responsive site, designed with both desktop and mobile users in mind. Built using semantic HTML and modern CSS techniques with Figma for UI/UX planning. Enhanced with JavaScript ES6+, Object-Oriented Programming principles, and asynchronous programming with Fetch API. Features a custom Webpack build setup for optimized asset management and scalable code architecture.",
      image: "/spotsThumbnail.png",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "OOP",
        "Webpack",
        "Figma",
        "GitHub Pages",
      ],
      liveLink: "https://jemaxmars.github.io/se_project_spots",
      githubLink: "https://github.com/jemaxmars/se_project_spots",
      videoLink: "https://www.loom.com/share/f32990511ca44879bc88a97b75d6a188",
    },
    {
      id: 2,
      title: "Campus Orientation Guide",
      repoName: "campus-orientation",
      description:
        "A modern, interactive web application designed to help new students navigate university life. Features real-time search with text highlighting, interactive navigation between dining, buildings, and campus life sections, and an FAQ accordion system. Built with vanilla JavaScript and modular CSS using BEM methodology, with Webpack 5 for optimal performance. Emphasizes clean code architecture, accessibility with ARIA labels, and responsive mobile-first design.",
      image: "/starlightThumbnail.png",
      techStack: [
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Webpack 5",
        "BEM Methodology",
        "Google Fonts",
        "GitHub Pages",
      ],
      liveLink: "https://jemaxmars.github.io/campus-orientation/",
      githubLink: "https://github.com/jemaxmars/campus-orientation",
      videoLink: "https://youtu.be/Qiq37M9LkaY?si=8mu5DYMSO8wwyq-t",
    },
  ];

  return (
    <div className="my__work">
      <div className="my__work-container">
        <h1>My Work</h1>
        <p className="my__work-intro">
          Here you'll find a showcase of my projects and portfolio pieces.
        </p>

        <div className="projects-grid">
          {projects.map((project) => {
            const repoData = githubData[project.repoName];
            console.log(
              `Project "${project.title}" - repoName: "${project.repoName}" - repoData:`,
              repoData
            );

            return (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Go To URL
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.videoLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  <div className="tech-stack">
                    <h4 className="tech-stack-title">Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {repoData && (
                    <div className="github-stats">
                      <h4 className="github-stats-title">GitHub Activity:</h4>
                      <div className="github-stat-items">
                        <span className="github-stat">⭐ {repoData.stars}</span>
                        <span className="github-stat">🔱 {repoData.forks}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyWork;
