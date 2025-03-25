import video from "../../assets/projects-video-and-images/OnlineLibrary.mp4";
import img1 from "../../assets/projects-video-and-images/onlineLibrary1.png";
import githubIcon from "../../assets/github-logo.png";
import posterIMG from "../../assets/projects-video-and-images/posterOL.png";

export default function OnlineLibrary() {
  return (
    <section className="project">
      <div className="projectDescription">
        <h2>Library</h2>
        <div className="description">
          <p>
            This web application lets the user search for any book, check its
            description, add or remove a book from favourites and add reviews to
            selected books. <br></br>I developed this soul project using vanilla
            Javascript, where I fetched data from the Google Books API and
            displayed it dynamically in the HTML. Used sessionStorage to cache
            the data - the favourite books and the reviews - for the duration of
            the session. <br></br>It also strengthened my knowledge in class
            constructors, asynchronous functions, data attributes and -many-
            array methods.
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
