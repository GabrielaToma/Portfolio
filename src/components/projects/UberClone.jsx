import img1 from "../../assets/projects-video-and-images/Uber2.png";
import githubIcon from "../../assets/github-logo.png";

export default function UberClone() {
  return (
    <section className="project rev">
      <div className="projectDescription ">
        <h2>Uber Clone</h2>
        <div className="description">
          <p>
            Through this project I did my best to replicate the landing page of
            Uber - the previous one, as they updated it recently - through
            Bootstrap.
          </p>
          <div className="links">
            <a
              href="https://gabrielatoma.github.io/Uber-LandingPageClone/"
              aria-describedby="link icon"
              title="Visit the Uber-LandingPageClone project"
              target="blank"
            >
              🔗{" "}
            </a>

            <a
              href="https://github.com/GabrielaToma/Uber-LandingPageClone"
              target="blank"
            >
              <img
                src={githubIcon}
                className="githubIcon"
                aria-describedby="github icon image"
                title="Uber-LandingPageClone GitHub"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="projectMedia uber">
        <img src={img1} className="projectImage1 uber"></img>
      </div>
    </section>
  );
}
