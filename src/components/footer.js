import React, { Component } from "react";

import iconCGV from "../images/img/cgv.jpg";
import iconBHD from "../images/img/bhd.jpg";
import iconGALAXY from "../images/img/galaxycine.jpg";
import iconCinestar from "../images/img/cinestar.jpg";
import iconLOTTE from "../images/img/lotte.jpg";
import iconMegaGS from "../images/img/megags.jpg";
import iconBeta from "../images/img/bt.jpg";
import iconDongdacinema from "../images/img/dongdacinema.jpg";
import iconTOUCH from "../images/img/TOUCH.jpg";
import iconCNX from "../images/img/cnx.jpg";
import iconStarlight from "../images/img/STARLIGHT.jpg";
import iconDcine from "../images/img/dcine.jpg";
import iconZalo from "../images/img/zalopay_icon.jpg";
import iconPayoo from "../images/img/payoo.jpg";
import iconVCB from "../images/img/VCB.jpg";
import iconAGRIBANK from "../images/img/AGRIBANK.jpg";
import iconVIETTINBANK from "../images/img/VIETTINBANK.jpg";
import iconIVB from "../images/img/IVB.jpg";
import icon123go from "../images/img/123go.jpg";
import iconLaban from "../images/img/laban.jpg";
import iconApple from "../images/img/apple-logo.jpg";
import iconAndroid from "../images/img/android-logo.jpg";
import iconFace from "../images/img/facebook-logo.jpg";
import logoZion from "../images/img/zion-logo.jpg";
import logoBoCongThuong from "../images/img/thongbaobocongthuong.jpg";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="the-end" className="footer">
          <div className="footer__content">
            <div className="row footer__rowFirst">
              <div className="col-12 col-md-5 col-lg-5 footer__left mt-5">
                <h6 className="footer__title">TIX</h6>
                <div className="row">
                  <div className="col-lg-6 footer__hideOnMobile footer__remove">
                    <a href="https://tix.vn/faq" className="footer__text">
                      FAQ
                    </a>
                    <p>
                      <a
                        href="https://tix.vn/brand-guideline/"
                        className="footer__text"
                      >
                        Brand Guidelines
                      </a>
                    </p>
                  </div>
                  <div className="col-12 col-lg-6 footer__onMobile">
                    <div className="thoabao">
                      <a
                        href="https://tix.vn/thoa-thuan-su-dung"
                        className="footer__text"
                      >
                        Thỏa thuận sử dụng
                      </a>
                      <p>
                        <a
                          href="https://tix.vn/chinh-sach-bao-mat"
                          className="footer__text"
                        >
                          Chính sách bảo mật
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 footer__middle mt-5">
                <h6 className="footer__title">ĐỐI TÁC</h6>
                <div className="row">
                  <div className="col-12 d-flex">
                    <a href="https://www.cgv.vn/">
                      <img
                        src={iconCGV}
                        alt="iconCGV"
                        style={{ background: "white" }}
                      />
                    </a>
                    <a href="https://www.bhdstar.vn/">
                      <img src={iconBHD} alt="iconBHD" />
                    </a>
                    <a href="https://www.galaxycine.vn/">
                      <img src={iconGALAXY} alt="iconGALAXY" />
                    </a>
                    <a href="http://cinestar.com.vn/">
                      <img src={iconCinestar} alt="iconCinestar" />
                    </a>
                    <a href="http://lottecinemavn.com/LCHS/index.aspx">
                      <img src={iconLOTTE} alt="iconLOTTE" />
                    </a>
                  </div>
                  <div className="col-12 d-flex">
                    <a href="https://www.megagscinemas.vn/">
                      <img src={iconMegaGS} alt="iconMegaGS" />
                    </a>
                    <a href="https://www.betacineplex.vn/home.htm">
                      <img src={iconBeta} alt="iconBeta" />
                    </a>
                    <a href="http://ddcinema.vn/">
                      <img src={iconDongdacinema} alt="iconDongdacinema" />
                    </a>
                    <a href="https://touchcinema.com/">
                      <img src={iconTOUCH} alt="iconTOUCH" />
                    </a>
                    <a href="https://cinemaxvn.com/">
                      <img src={iconCNX} alt="iconCNX" />
                    </a>
                  </div>
                  <div className="col-12 d-flex">
                    <a href="https://starlight.vn/">
                      <img src={iconStarlight} alt="iconStarlight" />
                    </a>
                    <a href="https://www.dcine.vn/">
                      <img src={iconDcine} alt="iconDcine" />
                    </a>
                    <a href="https://zalopay.vn/">
                      <img src={iconZalo} alt="iconZalo" />
                    </a>
                    <a href="https://www.payoo.vn/">
                      <img src={iconPayoo} alt="iconPayoo" />
                    </a>
                    <a href="https://portal.vietcombank.com.vn/Pages/Home.aspx">
                      <img src={iconVCB} alt="iconVCB" />
                    </a>
                  </div>
                  <div className="col-12 d-flex">
                    <a href="https://www.agribank.com.vn/">
                      <img src={iconAGRIBANK} alt="iconAGRIBANK" />
                    </a>
                    <a href="https://www.vietinbank.vn/web/home/vn/index.html">
                      <img src={iconVIETTINBANK} alt="iconVIETTINBANK" />
                    </a>
                    <a href="https://www.indovinabank.com.vn/">
                      <img src={iconIVB} alt="iconIVB" />
                    </a>
                    <a href="https://webv3.123go.vn/">
                      <img src={icon123go} alt="icon123go" />
                    </a>
                    <a href="https://laban.vn/">
                      <img src={iconLaban} alt="iconLaban" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-4 footer__right mt-5">
                <div className="row">
                  <div className="col-lg-6 footer__hideOnMobile footer__remove">
                    <h6 className="footer__title">MOBILE APP</h6>
                    <div className="d-flex">
                    <a className="ml-4" href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                      <img
                        className="iconApple"
                        src={iconApple}
                        alt="iconApple"
                      />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                      <img
                        className="iconAndroid"
                        src={iconAndroid}
                        alt="iconAndroid"
                      />
                    </a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 footer__hideOnMobile">
                    <h6 className="footer__title">SOCIAL</h6>
                    <div className="faza d-flex">
                      <a className="ml-4" href="https://www.facebook.com/tix.vn/">
                        <img
                          className="iconFace"
                          src={iconFace}
                          alt="iconFace"
                        />
                      </a>
                      <a href="https://zalo.me/tixdatve">
                        <img
                          className="iconZalo"
                          src={iconZalo}
                          alt="iconZalo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="footer__hr" />
            <div className="row footer__rowSecond">
              <div className="col-12 col-md-1 footer__img">
                <div className="footer__logo">
                  <img src={logoZion} alt="logoZion" />
                </div>
              </div>
              <div className="col-12 col-md-9 footer__hr__content">
                <h6>TIX-SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h6>
                <p>
                  Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp.
                  Hồ Chí Minh, Việt Nam.
                </p>
                <p>
                  Giấy chứng nhận đăn ký kinh doanh số: 0101659783,
                  <br />
                  đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </p>
                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                <p className="d-flex">
                  <span>Email:</span>
                  <a href="#" className="ml-2 footer__email">
                    support@tix.vn
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-2 footer__img">
                <div className="footer__BoCo mb-5">
                  <a href="http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1">
                    <img src={logoBoCongThuong} alt="logoBoCongThuong" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
