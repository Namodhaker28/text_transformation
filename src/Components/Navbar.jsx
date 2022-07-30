import React from "react";
import { Link } from "react-router-dom";
//import InstagramIcon from '@mui/icons-material/Instagram';

export default function (props) {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/about">
                About
              </a>
            </li> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link active dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact Us
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Namodhaker76@gmail.com
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="https://www.linkedin.com/in/namo-dhaker-4a3389200/">
                    LinkedIN
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Instagram
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <div
            className={`form-check d-flex form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
