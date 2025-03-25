import video from "../../assets/projects-video-and-images/tenziesVideo.mp4";
import githubIcon from "../../assets/github-logo.png";

export default function Tenzies() {
  return (
    <section className="project">
      <div className="projectDescription">
        <h2>Tenzies</h2>
        <div className="description">
          <p>
            Roll the dice and hope for the best. <br></br>This game represents
            my first dive into React: function components, props and hooks -
            such as useState, useEffect and useRef. During this project, I
            understood why React is such a loved library and the various ways it
            makes life easier.
          </p>
          <div className="links">
            <a
              href="https://tenzies-project-peach.vercel.app/"
              aria-describedby="link icon"
              title="Visit the Tenzies project"
              target="blank"
            >
              🔗{" "}
            </a>

            <a
              href="https://github.com/GabrielaToma/TenziesProject"
              target="blank"
            >
              <img
                src={githubIcon}
                className="githubIcon"
                aria-describedby="github icon image"
                title="Tenzies GitHub"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="projectMedia tenzies">
        <video
          src={video}
          type="video/mp4"
          autoPlay
          muted
          loop
          prelfoad="metadata"
          className="videoTenzies"
        ></video>{" "}
      </div>
    </section>
  );
}
