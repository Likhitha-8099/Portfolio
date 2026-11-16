
import Education from '../components/Education';
import TechnicalExpertise from '../components/TechnicalExpertise';

function About() {
  return (
    <>
      {/* About Me */}
      <section className="about">
        <div className="about-container">

          {/* Left Side - Introduction */}
          <div className="about-content">
            <p className="about-subtitle">GET TO KNOW ME</p>

            <h1>About Me</h1>

            <h2>Full-Stack Java Developement & AI Enthusiast</h2>

            <p className="about-description">
              I am a Computer Science and Data Science undergraduate
              with a strong interest in Java Development, Backend
              Engineering, and Artificial Intelligence.

              I enjoy building scalable applications using Java,
              Spring Boot, React, and AI technologies. I have hands-on
              experience developing REST APIs, integrating databases,
              implementing authentication, and building AI-powered
              applications using Large Language Models.

              I have worked on projects such as TripMind AI,
              BloodBridge, and PrepGPT, where I explored backend
              development, full-stack integration, and AI-driven
              solutions.
            </p>

            <div className="about-tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>Artificial Intelligence</span>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="about-image">
            <img
              src="/images/Photo-blazer.png"
              alt="Likhitha Markonda"
            />
          </div>

        </div>
      </section>

      {/* Education */}
      <Education />

      {/* Experience */}
      <section className="experience">
        <h1>Experience</h1>

        <div className="experience-card">
          <h2>Infosys Springboard – Full Stack Developer Intern</h2>
          <p>November 2025 – January 2026</p>
          <ul>
            <li>Worked on the InsurAI corporate insurance management platform.</li>
            <li>Developed responsive React components.</li>
            <li>Gained practical full-stack development experience.</li>
          </ul>
        </div>

        <div className="experience-card">
          <h2>Vault of Codes – Web Development Intern</h2>
          <p>May – June 2025</p>
          <ul>
            <li>Gained practical experience in web development.</li>
          </ul>
        </div>
      </section>

      {/* Technical Expertise */}
      <TechnicalExpertise />

      {/* Achievements */}
      <section className="achievements">
        <h1>Achievements</h1>

        <div className="achievements-container">
          <div className="achievement-card">
            <h2>300+ DSA Problems</h2>
            <p>Solved coding problems.</p>
          </div>

          <div className="achievement-card">
            <h2>Top 10 GenAI Hackathon</h2>
            <p>Team achievement at VIEW College.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
