import { NavLink, useLocation } from "react-router-dom";
import me from "../assets/eu2.jpg";
import githubIcon from "../assets/githubIcon.jpg";

export default function AsideBar(props) {
  const location = useLocation();

  //Function to determine the shadow of the aside bar based on the current route

  function getAsideBarShadow() {
    switch (location.pathname) {
      case "/":
        return "8px 0 10px rgba(128, 0, 128, 0.5)";
      case "/about":
        return "8px 0 10px rgba(146, 25, 14, 0.64)";
      case "/projects":
        return "8px 0 10px rgba(36, 69, 175, 0.58)";
      case "/contact":
        return "8px 0 10px rgba(232, 171, 73, 0.6)";
      default:
        return "8px 0 10px rgba(250, 248, 250, 0.73)";
    }
  }

  //Function to determine the border of the image

  function getBorder() {
    switch (location.pathname) {
      case "/":
        return "rgb(86, 5, 86)";
      case "/about":
        return "rgb(146, 25, 14)";
      case "/projects":
        return "rgb(84, 105, 175)";
      case "/contact":
        return "rgb(227, 178, 99)";
      default:
        return "rgb(250, 248, 250)";
    }
  }

  return (
    <aside
      className={`side-bar ${props.display ? "open" : ""}`}
      style={{ boxShadow: getAsideBarShadow() }}
    >
      <div className="pictureContainer">
        <img
          style={{ borderColor: getBorder() }}
          className="personalPicture"
          src={me}
        ></img>
      </div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink about" : "navLink"
            }
            to="/about"
          >
            Get to know me
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink projects" : "navLink"
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "navLink contact" : "navLink"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <a href="https://github.com/GabrielaToma" target="blank">
          <img
            src={githubIcon}
            className="githubIcon"
            aria-describedby="github icon image"
            title="Github link"
          ></img>
        </a>
      </ul>
    </aside>
  );
}
