import React, { Component } from "react";
import { Link, Events } from "react-scroll";
export default class NavBarSrcoll extends Component {
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
                <Link
              activeClass="active"
              className="test2 nav-link"
              to="test2"
              spy={true}
              smooth={true}
              duration={500}
            >
              Lịch Chiếu
            </Link>
              </li>
              <li className="nav-item">
                <Link
              activeClass="active"
              className="test4 nav-link"
              to="test4"
              spy={true}
              smooth={true}
              duration={500}
            >
              Cụm rạp
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
              Tin tức
            </Link>
              </li>
              <li className="nav-item">
                <Link
              activeClass="active"
              className="test10 nav-link"
              to="test10"
              spy={true}
              smooth={true}
              duration={500}
            >
              Ứng dụng
            </Link>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}
