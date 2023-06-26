import React from "react";
import { Row } from "react-bootstrap";
import MyNav from "./MyNav";
import circle_text from "../assets/images/png/hero_circle_text.png";
const Hero = () => {
  return (
    <>
      <header className="hero_bg vh_xl_110 pb-lg-5">
        <MyNav />
        <section className="h-100 py-sm-5 py-3 position-relative z-2" id="hero" data-aos="zoom-in-down" data-aos-duration="3000">
          <div className="container h-100 py-sm-5 py-3">
            <Row className="h-100 pb-md-5 my-5 my-lg-0">
              <div className="d-flex flex-column align-items-center justify-content-center h-100 pb-xl-5">
                <h1 className="ff_exo fs_3xl fw-bolder text-center mb-0 hero_h1">
                  Earn More in Less Time
                </h1>
                <div className="mw_703 pt-3 pb-5 mb-lg-4">
                  <p className=" ff_monstrat fs_sm text-white mb-0 text-center">
                    If you don't join this group you could be missing out on one
                    of the biggest opportunities of your life, more than 25000
                    people have already joined!
                  </p>
                  <p className="text-center ff_monstrat fs_sm text-white mb-0">
                    Will you miss this opportunity?
                  </p>
                </div>
                <div className="position-relative pb-lg-5 py-4 py-lg-0">
                  <div className="position-absolute hero_img">
                    <img src={circle_text} alt="circle_text" />
                  </div>
                  <div>
                    <button className="hero_btn position-relative z-0 hover_effect overflow-hidden">
                      <a href="https://web.telegram.org/a/" target="_blank" className="text-white">
                      JOIN TELEGRAM FOR FREE</a>
                    </button>
                  </div>
                </div>
              </div>
            </Row>
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;
