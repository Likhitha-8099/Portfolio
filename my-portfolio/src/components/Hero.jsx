
const Hero = () => {
  return (
    <section className="hero" id="home">
      <p className="hero-subtitle">
        HELLO, I'M LIKHITHA MARKONDA
      </p>

      <h1>Java Developer & AI Enthusiast</h1>

      <p className="hero-description">
        Passionate about Java, Spring Boot, React
        and AI-powered applications.
      </p>
      <div className="hero-actions">
      <a className="hero-button" href="#projects">
        View My Projects →
      </a>

      <a className="resume-button" href="/resume.pdf" download>
        Download Resume
      </a>
      </div>
    </section>
  );
};

export default Hero;
