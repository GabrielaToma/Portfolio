import video from "../../assets/projects-video-and-images/AssemblyVideo.mp4";
import githubIcon from "../../assets/github-logo.png";

export default function Assembly() {
  return (
    <section className="project rev">
      <div className="projectDescription assembly ">
        <h2>Assembly</h2>
        <div className="description">
          <p>
            Hangman with a twist - guess the word and save the tech world.{" "}
            <br></br> In this fun little project, I built a React-based web
            application that dynamically updates content using state management,
            applies conditional styling with clsx and determines the game's
            result using the useEffect hook. <br></br>Give it a shot, I hope you
            will see the confetti!
          </p>
          <div className="links">
            <a
              href="https://assembly-react-project.vercel.app/"
              aria-describedby="link icon"
              title="Visit the Assembly project"
              target="blank"
            >
              🔗{" "}
            </a>

            <a
              href="https://github.com/GabrielaToma/AssemblyGameReact"
              target="blank"
            >
              <img
                src={githubIcon}
                className="githubIcon"
                aria-describedby="github icon image"
                title="Assembly GitHub"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="projectMedia assembly">
        <video
          src={video}
          type="video/mp4"
          autoPlay
          muted
          loop
          prelfoad="metadata"
          className="videoAssembly"
        ></video>{" "}
      </div>
    </section>
  );
}
