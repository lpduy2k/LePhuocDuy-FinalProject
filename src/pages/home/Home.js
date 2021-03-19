import React, { Component } from "react";
import Carousel from "../../components/caurosel";
import ListMovie from "../../components/ListMovie";
import Information from "../../components/Information";
import BlockApp from "../../components/BlockApp";
import Footer from "../../components/footer";
import Cinema from "../../components/Cinema";
import BackToTop from "../../components/BackToTop";
import Navbar from "../../components/navbar";
import ListMovieForMobile from "../../components/ListMovieForMobile";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Carousel />
        <ListMovie />
        <ListMovieForMobile/>
        <Cinema />
        <Information />
        <BlockApp />
        <Footer />
        <BackToTop />
      </div>
    );
  }
}

export default Home;
