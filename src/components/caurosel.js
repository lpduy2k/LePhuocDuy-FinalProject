import React from "react";
import banner1 from "../images/img/di-nguyen-bi-an.jpg";
import banner2 from "../images/img/lua-deu-gap-lua-dao.jpg";
import banner3 from "../images/img/tiec-trang-mau-blood-moon-party.jpg";
import banner4 from "../images/img/sg-trong-con-mua.jpg";
import banner5 from "../images/img/ky-nghi-nho-doi.jpg";
import SearchBar from "./SearchBar";
import Dialog1 from "./Dialog";
export default class Caurosel extends React.Component {
  render() {
    return (
      <div name="test1">
        <section className="carousel">
          <div className="carousel__content">
            <div
              id="TixIndicators"
              className="carousel slide tixCarousel"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#TixIndicators"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#TixIndicators" data-slide-to={1} />
                <li data-target="#TixIndicators" data-slide-to={2} />
                <li data-target="#TixIndicators" data-slide-to={3} />
                <li data-target="#TixIndicators" data-slide-to={4} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="#" className="carousel__changeDetail">
                    <img
                      src={banner1}
                      className="d-block w-100"
                      alt=""
                    />
                    <div className="carousel__bg"></div>
                  </a>
                  <button type="button" className="carousel__button">
                    <a href="#" className="carousel__changeDetail"></a>

                    <Dialog1
                      trailer={"https://www.youtube.com/embed/FMb0QPgAzBs"}
                    />
                  </button>
                </div>
                <div className="carousel-item">
                  <img
                    src={banner2}
                    className="d-block w-100"
                    alt=""
                  />
                  <div className="carousel__bg"></div>
                  <button type="button" className="carousel__button">
                    <Dialog1
                      trailer={"https://www.youtube.com/embed/NWEe2BGhOUA"}
                    />
                  </button>
                </div>
                <div className="carousel-item">
                  <img
                    src={banner3}
                    className="d-block w-100"
                    alt=""
                  />
                  <div className="carousel__bg"></div>
                  <button type="button" className="carousel__button">
                    <Dialog1
                      trailer={"https://www.youtube.com/embed/Vgb1uUmpQNU"}
                    />
                  </button>
                </div>
                <div className="carousel-item">
                  <img
                    src={banner4}
                    className="d-block w-100"
                    alt=""
                  />
                  <div className="carousel__bg"></div>
                  <button type="button" className="carousel__button">
                    <Dialog1
                      trailer={"https://www.youtube.com/embed/3d91fe4A3pA"}
                    />
                  </button>
                </div>
                <div className="carousel-item">
                  <img
                    src={banner5}
                    className="d-block w-100"
                    alt=""
                  />
                  <div className="carousel__bg"></div>
                  <button type="button" className="carousel__button">
                    <Dialog1
                      trailer={"https://www.youtube.com/embed/RAo52-S7eIA"}
                    />
                  </button>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#TixIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon button"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#TixIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon button"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <SearchBar />
        </section>
      </div>
    );
  }
}
