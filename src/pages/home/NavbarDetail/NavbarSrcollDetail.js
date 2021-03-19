import React, { Component } from "react";
import { Link, Events } from "react-scroll";
import NavbarReturnHome from "./NavbarReturnHome";
export default class NavBarSrcollDetail extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function () {});

    Events.scrollEvent.register("end", function () {});
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    return (
      <div className="header__item">
      <div className="navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavbarReturnHome />
            </li>
            <li className="nav-item">
            <Link
              activeClass="active"
              className="test5 nav-link"
              to="test5"
              spy={true}
              smooth={true}
              duration={500}
            >
              Thông tin phim
            </Link>
            </li>
            <li className="nav-item">
            <Link
              activeClass="active"
              className="test5 nav-link"
              to="test5"
              spy={true}
              smooth={true}
              duration={500}
            >
              Lịch Chiếu
            </Link>
            </li>
        </ul>
      </div>
      </div>
    );
  }
}
