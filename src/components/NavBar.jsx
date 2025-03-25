import githubIcon from "../assets/githubIcon.jpg";
import hamburgerMenu from "../assets/hamburgerMenu.png";

export default function NavBar(props) {
  return (
    <nav className="navBar">
      <h3>Toma Gabriela Alexandra</h3>
      <div>
        <a href="https://github.com/GabrielaToma" target="blank">
          <img
            src={githubIcon}
            className="githubIcon"
            aria-describedby="github icon image"
            title="Github link"
          ></img>
        </a>
        <button
          onClick={() => {
            props.handleClick();
          }}
          aria-label={`${props.display} ? "Close the side-bar menu" : "Open the side bar menu"`}
        >
          <img className="hamburgerIcon" src={hamburgerMenu}></img>
        </button>
      </div>
    </nav>
  );
}
