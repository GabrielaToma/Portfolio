import img1 from "../../assets/projects-video-and-images/MuseumOfCandy1.png";
import img2 from "../../assets/projects-video-and-images/MuseumOfCandy2.png";
import githubIcon from "../../assets/github-logo.png";

export default function MuseumOfCandy() {
  return (
    <section className="project rev">
      <div className="projectDescription">
        <h2>Museum of Candy</h2>
        <div className="description">
          <p>
            This project was part of Colt Steele's Web Developer Bootcamp. It
            helped me tremendously to get familiar with Boostrap and to learn
            how to develop with the 'mobile first' concept in mind. <br></br>On
            top of the original project, I added a contact form and made it more
            interactive by implementing a section that lets the user buy
            tickets, improving the experience.
          </p>
          <div className="links">
            <a
              href="https://gabrielatoma.github.io/MuseumOfCandy/"
              aria-describedby="link icon"
              title="Visit the Museum of Candy project"
              target="blank"
            >
              🔗{" "}
            </a>

            <a
              href="https://github.com/GabrielaToma/MuseumOfCandy"
              target="blank"
            >
              <img
                src={githubIcon}
                className="githubIcon"
                aria-describedby="github icon image"
                title="Museum of Candy GitHub"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="projectMedia museumOfCandy">
        <img src={img1} className="projectImage1"></img>
        <img src={img2} className="projectImage2"></img>
      </div>
    </section>
  );
}
