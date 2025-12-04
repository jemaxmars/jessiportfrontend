import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import AboutGitHubStats from "../AboutGithubStats/AboutGithubStats";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About Me</h1>

        <div className="about-card">
          <div className="about-paragraph">
            <p>
              I'm Jessi. I'm a full-stack software developer with a creative
              edge, a strategic mind, and a story that's anything but ordinary.
            </p>
          </div>
          <div className="paragraph-spacer"></div>

          <div className="about-paragraph">
            <p>
              My journey began in a technical high school, where I studied
              Information Systems Technology and graphic design for two years.
              That early exposure to tech planted the seed, but it was my
              passion for design and problem-solving that kept it growing.
              Before stepping into software development, I spent over a decade
              in healthcare, as a nursing assistant, working everywhere from
              psychiatric facilities to hospitals. I started college
              prerequisites with the intention of pursuing a nursing degree, but
              ultimately chose a different path. These experiences taught me how
              to listen, adapt, and solve real problems under pressure. I've
              seen the human side of systems and now I build digital ones with
              empathy and precision.
            </p>
          </div>
          <div className="paragraph-spacer"></div>

          <div className="about-paragraph">
            <p>
              In 2021, I became a widow. That loss reshaped my perspective and
              sharpened my purpose. Life is short, and I knew I wanted to create
              something lasting. After recovering from a health setback in 2023,
              I enrolled in TripleTen's Software Engineering Bootcamp in 2024
              and immersed myself in full-stack development.
            </p>
          </div>
          <div className="paragraph-spacer"></div>

          <div className="about-paragraph">
            <p>
              I mastered the full stack from semantic HTML and responsive CSS to
              React, Node.js, Express, MongoDB, and JWT authentication. I've
              built RESTful APIs, deployed secure applications to the cloud, and
              written clean, testable code using Jest, ESLint, and Prettier. I
              work with Git like a second language and bring design thinking
              into every build.
            </p>
          </div>
          <div className="paragraph-spacer"></div>

          <div className="about-paragraph">
            <p>
              I thrive in the frontend where creativity meets logic, but I've
              grown to love the backend's architecture and flow. My projects are
              crafted with intention, styled with flair, and engineered to
              perform.
            </p>
          </div>
          <div className="paragraph-spacer"></div>

          <div className="about-paragraph">
            <p>
              Outside of coding, I'm a mom of two, a girlfriend, a wellness
              coordinator in addiction medicine, and a lifelong learner. I'm
              passionate about anime, music, and history documentaries. I enjoy
              fishing when the opportunity strikes and recently rekindled my
              love for chess. I bring that same curiosity and discipline to my
              work, always leveling up and always thinking a few moves ahead. If
              you're looking for a developer who blends technical depth with
              creative vision and builds with both heart and strategy, I'd love
              to connect.
            </p>
          </div>
          <ScrollAnimation />
        </div>

        <AboutGitHubStats />
      </div>
    </div>
  );
}

export default About;
