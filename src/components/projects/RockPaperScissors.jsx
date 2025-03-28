import img from "../../assets/projects-video-and-images/RPS.png";
import video from "../../assets/projects-video-and-images/RPSvideo.mp4";
import githubIcon from "../../assets/github-logo.png";

export default function RockPaperScissors() {
  return (
    <section className="project rps">
      <div className="projectDescription">
        <h2>Rock, paper, scissors?</h2>
        <div className="description">
          <p>
            This project is a classic and is built with vanilla JavaScript. It's
            interactive, responsive and gives the user the ability to switch
            languages and get beaten by a computer in a bilingual way.
          </p>
          <div className="links">
            <a
              href="https://gabrielatoma.github.io/Rock-Paper-Scissors/"
              aria-describedby="link icon"
              title="Visit the Rock-paper-scissors project"
              target="blank"
            >
              🔗{" "}
            </a>

            <a
              href="https://github.com/GabrielaToma/Rock-Paper-Scissors"
              target="blank"
            >
              <img
                src={githubIcon}
                className="githubIcon"
                aria-describedby="github icon image"
                title="Rock-paper-scissors GitHub"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="projectMedia rps">
        <img src={img} className="projectImage1RPS"></img>
        <video
          src={video}
          type="video/mp4"
          autoPlay
          muted
          loop
          prelfoad="metadata"
          className="videoRPS"
        ></video>
      </div>
    </section>
  );
}
