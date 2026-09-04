import { useParams } from "react-router-dom";
import "./Project.css";

const projects = {
  "brand-film": {
    title: "BRAND FILM",

    video: "https://player.vimeo.com/video/123456789",

    description:
      "A cinematic story built around emotion, rhythm and visual storytelling.",

    client: "CLIENT NAME",

    director: "DIRECTOR NAME",

    editor: "MO'MEN MANSOUR",

    year: "2026",
  },
};

export default function Project() {
  const { id } = useParams();

  const project = projects[id];

  return (
    <div className="project-page">
      <iframe
        className="project-video"
        src={project.video}
        title={project.title}
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>

      <div className="project-info">
        <h1>{project.title}</h1>

        <p>{project.description}</p>

        <div className="credits">
          <div>
            CLIENT
            <br />
            {project.client}
          </div>

          <div>
            DIRECTOR
            <br />
            {project.director}
          </div>

          <div>
            EDITOR
            <br />
            {project.editor}
          </div>

          <div>
            YEAR
            <br />
            {project.year}
          </div>
        </div>
      </div>
    </div>
  );
}
