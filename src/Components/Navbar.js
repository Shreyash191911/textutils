import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; 

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> 
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.abouttxt}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div
            class="btn-group me-2 mx-4"
            role="group"
            aria-label="First group"
          >
            <button
              type="button"
              class="btn btn-primary mx-2"
              onClick={props.ToggleAppearance} 
              style={{
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            ></button>
            <button
              type="button"
              class="btn btn-warning mx-2"
              onClick={props.ToggleAppearance}
              style={{
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            ></button>
            <button
              type="button"
              class="btn btn-danger mx-2"
              onClick={props.ToggleAppearance}
              style={{
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            ></button>
            <button
              type="button"
              class="btn btn-success mx-2"
              onClick={props.ToggleAppearance} 
              style={{
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.5)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            ></button>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.ToggleMode}
            />
            <label
              className={`form-check-label text-${
                props.Mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div> 
      </div>
    </nav>
  );
} 

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttxt: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//     title: "set title here",
//     abouttxt: "set about text here"
// }
