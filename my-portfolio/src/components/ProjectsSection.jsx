
function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* PROJECT 1 */}
        <div className="project-card">
          <h3>BloodBridge</h3>

          <img
            src="/images/bloodbridge-logo.png"
            alt="BloodBridge Logo"
            className="project-logo"
          />

          <p>
            BloodBridge is a blood donation management
            platform that connects donors, hospitals,
            and patients.
          </p>

          <p className="project-tech">
            Java · Spring Boot · MySQL · JWT · REST APIs
          </p>

          <div className="project-links">
            <a href="https://github.com/Likhitha-8099/BloodBridge"
              target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://blood-bridge-sepia.vercel.app/"
              target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <h3>TripMind AI</h3>

          <img
            src="/images/tripmind-logo.png"
            alt="TripMind AI Logo"
            className="project-logo"
          />

          <p>
            An AI-powered travel planning application
            that generates personalized travel itineraries
            based on user preferences and travel requirements.
          </p>

          <p className="project-tech">
            Java 17 · Spring Boot · LangChain4j · Groq API · MySQL
          </p>

          <div className="project-links">
            <a href="https://github.com/Likhitha-8099/TripGuideAI"
              target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="project-card">

  <h3>PrepGPT</h3>
   <img
  src="/images/prep.jpg"
  alt="PrepGPT Project"
  className="project-logo"
/>
  <p>
    PrepGPT is an AI-powered mock interview platform
    that generates personalized interview questions
    based on candidate resumes and job descriptions.
  </p>

  <p className="project-tech">
    React · Java · Spring Boot · MySQL · Groq API
  </p>


  <div className="project-links">
    <a
      href="https://github.com/Likhitha-8099/PrepGpt"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  </div>

</div>
      </div>
    </section>
  );
}

export default ProjectsSection;
