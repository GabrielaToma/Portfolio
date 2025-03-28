import video from "../../assets/projects-video-and-images/OnlineLibrary.mp4";
import img1 from "../../assets/projects-video-and-images/onlineLibrary1.png";
import githubIcon from "../../assets/github-logo.png";
import posterIMG from "../../assets/projects-video-and-images/posterOL.png";

export default function OnlineLibrary() {
  return (
    <section className="project ol">
      <div className="projectDescription">
        <h2>Library</h2>
        <div className="description">
          <p>
            This web application lets the user search for any book, check its
            description or visit its page on Google Books, add or remove a book
            from favourites and add reviews to the selected books. <br></br>I
            developed this project using vanilla Javascript. It helped me
            consolidate my knowledge in fetch requests, class constructors,
            array methods and sessionStorage.
          </p>
          <div className="links">
            <a
              href="https://online-library-rho.vercel.app/"
              aria-describedby="link icon"
              title="Visit the OnlineLibrary project"
              target="blank"
            >
              🔗{" "}
            </a>

            <a
              href="https://github.com/GabrielaToma/OnlineLibrary"
              target="blank"
            >
              <img
                src={githubIcon}
                className="githubIcon"
                aria-describedby="github icon image"
                title="Online Library GitHub"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="projectMedia library">
        <img src={img1} className="projectImage1"></img>
        <video
          src={video}
          type="video/mp4"
          autoPlay
          muted
          loop
          preload="metadata"
          poster={posterIMG}
        ></video>
      </div>
    </section>
  );
}
