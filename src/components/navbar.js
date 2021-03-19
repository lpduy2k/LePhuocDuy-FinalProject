import { Link } from "react-router-dom";
import React from "react";
import logo from '../images/img/web-logo.jpg';
import avatar from '../images/img/avatar.jpg';
import NavBarSrcoll from "./NavBarSrcoll";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { notifiSuccess } from "../utils/MyToys";
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailUser: {},
    };
  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("user"))) {
      this.setState({
        detailUser: JSON.parse(localStorage.getItem("user")),
      });
    } else {
      this.setState({
        detailUser: null,
      });
    }
  }

  handleLoginOut = () => {
    notifiSuccess(`goodbye` + " " + this.state.detailUser.hoTen)
    localStorage.removeItem("user");
    this.setState({
      detailUser: null,
    });
  };
  render() {
    return (
      <React.Fragment>
        {/* <section className="menu">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="row">
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <div className="col-3">
                  <div className="logo">
                    <a href>
                      <img src={logo} alt="" />
                    </a>
                  </div>
                </div>
                <NavBarSrcoll />
                <div className="col-3">
                  <div className="sign-language">
                    <ul>
                      {this.state.detailUser === null ? (
                        <li>
                          <i className="fa fa-user" />
                          <Link to="/form">Đăng Nhập</Link>
                        </li>
                      ) : (
                        <div className="navbarLogin">
                          <p style={{ display: "flex" }}>
                            <Link to="/inFoUserBooking">
                              <AccountCircleIcon
                                type="button"
                                style={{ margin: "5px 7px", fontSize: "28px" }}
                              />
                            </Link>
                            <h4 className="nav_NameUser">
                              {this.state.detailUser.hoTen}{" "}
                            </h4>
                            <h4 className="nav_Middle"> |</h4>
                            <h4
                              className="nav_UserOut"
                              onClick={this.handleLoginOut}
                            >
                              THOÁT
                            </h4>
                          </p>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section> */}



        <div>
            <div className="header__content">
                <nav className="navbar navbar-expand-lg navbar-light">
                <div className="header__logo">
                    <a href="#">
                    <img className="navbar-brand" src={logo} />
                    </a>
                </div>
                <NavBarSrcoll />
                <div className="header__right d-flex">
                    <div className="nav-item d-flex">
                    {this.state.detailUser === null ? (
                      <div className="nav-link border-right color-grey">
                        <img className="mr-2" src={avatar} alt />
                        <Link to="/form">Đăng Nhập</Link>
                      </div>
                    ) : (
                      <div className="nav-link border-right color-grey">
                          <p style={{ display: "flex" }}>
                            <Link to="/inFoUserBooking">
                              <AccountCircleIcon
                                type="button"
                                className="mt-2 mr-2" src={avatar} alt
                              />
                            </Link>
                            <h4 className="mt-1 mr-4">
                              {this.state.detailUser.hoTen}{" "}
                            </h4>
                            <button
                              className="btn btn-secondary"
                              onClick={this.handleLoginOut}
                            >
                              THOÁT
                            </button>
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="nav-item dropdown align-self-center">
                    <a className="nav-link dropdown-toggle fa fa-map-marker color-grey" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Hồ Chí Minh
                    </a>
                    <div className="dropdown-menu selectScroll" aria-labelledby="navbarDropdownMenuLink">
                        <a href="#" className="dropdown-item">Hồ Chí Minh</a>
                        <a href="#" className="dropdown-item">Hà Nội</a>
                        <a href="#" className="dropdown-item">Đà Nẵng</a>
                        <a href="#" className="dropdown-item">Hải Phòng</a>
                        <a href="#" className="dropdown-item">Biên Hòa</a>
                        <a href="#" className="dropdown-item">Nha Trang</a>
                        <a href="#" className="dropdown-item">Bình Dương</a>
                        <a href="#" className="dropdown-item">Phan Thiết</a>
                        <a href="#" className="dropdown-item">Hạ Long</a>
                        <a href="#" className="dropdown-item">Cần Thơ</a>
                        <a href="#" className="dropdown-item">Vũng Tàu</a>
                        <a href="#" className="dropdown-item">Quy Nhơn</a>
                        <a href="#" className="dropdown-item">Huế</a>
                        <a href="#" className="dropdown-item">Long Xuyên</a>
                        <a href="#" className="dropdown-item">Thái Nguyên</a>
                        <a href="#" className="dropdown-item">Buôn Ma Thuột</a>
                        <a href="#" className="dropdown-item">Bắc Giang</a>
                        <a href="#" className="dropdown-item">Bến Tre</a>
                        <a href="#" className="dropdown-item">Việt Trì</a>
                        <a href="#" className="dropdown-item">Ninh Bình</a>
                        <a href="#" className="dropdown-item">Thái Bình</a>
                        <a href="#" className="dropdown-item">Vinh</a>
                        <a href="#" className="dropdown-item">Bảo Lộc</a>
                        <a href="#" className="dropdown-item">Đà Lạt</a>
                        <a href="#" className="dropdown-item">Trà Vinh</a>
                        <a href="#" className="dropdown-item">Yên Bái</a>
                        <a href="#" className="dropdown-item">Kiên Giang</a>
                        <a href="#" className="dropdown-item">Vĩnh Long</a>
                        <a href="#" className="dropdown-item">Cà Mau</a>
                        <a href="#" className="dropdown-item">Hậu Giang</a>
                        <a href="#" className="dropdown-item">Tây Ninh</a>
                        <a href="#" className="dropdown-item">Tuyên Quang</a>
                        <a href="#" className="dropdown-item">Thanh Hóa</a>
                        <a href="#" className="dropdown-item">Nam Định</a>
                        <a href="#" className="dropdown-item">Hải Dương</a>
                        <a href="#" className="dropdown-item">Gia Lai</a>
                        <a href="#" className="dropdown-item">Hà Tĩnh</a>
                        <a href="#" className="dropdown-item">Phú Yên</a>
                        <a href="#" className="dropdown-item">Bạc Liêu</a>
                        <a href="#" className="dropdown-item">Long An</a>
                        <a href="#" className="dropdown-item">Đồng Hới</a>
                        <a href="#" className="dropdown-item">Hà Nam</a>
                        <a href="#" className="dropdown-item">Bắc Ninh</a>
                        <a href="#" className="dropdown-item">Quảng Trị</a>
                        <a href="#" className="dropdown-item">Kon Tum</a>
                        <a href="#" className="dropdown-item">Sóc Trăng</a>
                        <a href="#" className="dropdown-item">Sơn La</a>
                        <a href="#" className="dropdown-item">Lạng Sơn</a>
                        <a href="#" className="dropdown-item">Quảng Ngãi</a>
                        <a href="#" className="dropdown-item">Mỹ Tho</a>
                        <a href="#" className="dropdown-item">Đồng Tháp</a>
                        <a href="#" className="dropdown-item">Hưng Yên</a>
                    </div>
                    </div>
                </div>
                <div className="align-right d-md-none">
                    <i className="fa fa-align-right" />
                </div>
                </nav>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
