
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">

      {/* Animated Background Glow */}
      <div className="hero-glow"></div>

      {/* Main Hero Content */}
      <div className="hero-container">

        <p className="hero-eyebrow">
          HELLO, I'M
        </p>

        <h1 className="hero-name">
         
          <span className="name-accent">Likhitha Markonda</span>
        </h1>

        <p className="hero-tagline">
          Building ideas. Engineering possibilities.
        </p>

        <p className="hero-role">
          Java Developer <span>·</span> Backend Engineer <span>·</span> AI Enthusiast
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="hero-button">
            Explore My Work <span>↗</span>
          </Link>
        </div>

      </div>

      {/* Scroll Indicator */}
      <p className="hero-scroll">
        SCROLL TO DISCOVER <span>↓</span>
      </p>

    </section>
  );
}

export default Hero;
