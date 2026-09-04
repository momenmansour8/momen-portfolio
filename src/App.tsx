import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      number: "01",
      title: "BRAND FILM",
      client: "CLIENT NAME",
      role: "FILM EDITOR",
      year: "2026",
      image: "/work1.jpg",
      video: "https://player.vimeo.com/video/123456789",
    },

    {
      number: "02",
      title: "COMMERCIAL FILM",
      client: "CLIENT NAME",
      role: "FILM EDITOR",
      year: "2025",
      image: "/work2.jpg",
      video: "https://player.vimeo.com/video/123456789",
    },

    {
      number: "03",
      title: "FASHION FILM",
      client: "CLIENT NAME",
      role: "FILM EDITOR",
      year: "2025",
      image: "/work3.jpg",
      video: "https://player.vimeo.com/video/1212757715",
    },
  ];

  const playSound = () => {
    const audio = new Audio("/click.mp3");

    audio.volume = 0.5;

    audio.play();
  };

  return (
    <div className="page">
      <nav className="nav">
        <div>MO'MEN MANSOUR</div>

        <div>FILM EDITOR</div>
      </nav>

      <section className="hero">
        <img
          className="floating-image"
          src="/logo.png"
          onClick={(e) => {
            const image = e.currentTarget;

            playSound();

            image.classList.add("clicked");

            setTimeout(() => {
              image.classList.remove("clicked");
            }, 500);
          }}
        />

        <div className="hero-title">
          MO'MEN
          <br />
          MANSOUR
          <span>FILM EDITOR</span>
        </div>
      </section>

      <section className="film-strip">
        <div className="film-track">
          <img src="/work1.jpg" />

          <img src="/work2.jpg" />

          <img src="/work3.jpg" />

          <img src="/work1.jpg" />

          <img src="/work2.jpg" />

          <img src="/work3.jpg" />
        </div>
      </section>

      <section className="work">
        <h1>SELECTED WORK</h1>

        {projects.map((project, index) => (
          <div
            className="project"
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <img className="project-image" src={project.image} />

            <div className="project-content">
              <span className="project-number">{project.number}</span>

              <h2>{project.title}</h2>

              <div className="project-details">
                <span>{project.client}</span>

                <span>{project.role}</span>

                <span>{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="clients-strip">
        <div className="clients-track">
          <span>NIKE</span>

          <span>ADIDAS</span>

          <span>BMW</span>

          <span>SAMSUNG</span>

          <span>NETFLIX</span>

          <span>COCA COLA</span>

          <span>NIKE</span>

          <span>ADIDAS</span>

          <span>BMW</span>

          <span>SAMSUNG</span>

          <span>NETFLIX</span>

          <span>COCA COLA</span>
        </div>
      </section>

      {/* PROJECT POPUP */}

      {selectedProject && (
        <div className="project-popup">
          <div className="popup-content">
            <button className="close" onClick={() => setSelectedProject(null)}>
              ×
            </button>

            <iframe
              className="popup-video"
              src={selectedProject.video}
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>

            <h2>{selectedProject.title}</h2>

            <div className="popup-info">
              <div>
                CLIENT
                <br />
                {selectedProject.client}
              </div>

              <div>
                ROLE
                <br />
                {selectedProject.role}
              </div>

              <div>
                YEAR
                <br />
                {selectedProject.year}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="contact">
        <div className="contact-title">
          LET'S CREATE
          <br />
          SOMETHING
          <br />
          WORTH REMEMBERING.
        </div>

        <div className="contact-info">
          MO'MEN MANSOUR
          <br />
          FILM EDITOR
          <br />
          <br />
          <a href="#">INSTAGRAM</a>
          <a href="#">VIMEO</a>
          <a href="#">BEHANCE</a>
          <a href="#">EMAIL</a>
        </div>
      </section>
    </div>
  );
}
