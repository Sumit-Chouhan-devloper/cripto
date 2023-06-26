import React from "react";
import { Row } from "react-bootstrap";
import work_img from "../assets/images/png/it_works_img.png";
const Works = () => {
  return (
    <>
      <section
        className="bg-black py-5 works_s mt_-2 position-relative"
        id="works"
      >
        <div className="container py-lg-5 my-lg-5 position-relative z_5">
          <h2 className="text-center text-white ff_exo fw-bold mb-0 pb-lg-5 pb-2 fs_2xl ">
            How it <span className="work_rgb">Works?</span>
          </h2>
          <Row className=" justify-content-between overflow-hidden">
            <div className="col-lg-4 d-flex flex-column justify-content-between align-items-sm-center align-items-lg-start">
              <p className="gradient-border-mask" data-aos="fade-right">
                Create an Exhange Account
              </p>
              <p className="gradient-border-mask" data-aos="fade-right">
                Transfer bnb to trustwallet or metamask
              </p>
              <p
                className="gradient-border-mask text-sm-center text-lg-start"
                data-aos="fade-right"
              >
                Connect wallet to Pancakeswap, Poocoin, Dextools or
                Boggedfinance
              </p>
            </div>
            <div className="col-lg-4 d-flex justify-content-center">
              <div>
                <img
                  src={work_img}
                  alt="mobile_img"
                  className="w-100 work_img"
                />
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column justify-content-between align-items-sm-center">
              <p className="gradient-border-mask" data-aos="fade-left">
                Buy as soon as possible after the signal
              </p>
              <p className="gradient-border-mask text-sm-center text-lg-start" data-aos="fade-left">
                We hold the pump for at least 5 minutes and the coin will
                attract investors from outside our group
              </p>
              <p className="gradient-border-mask" data-aos="fade-left">
                Sell after the signal and take the profits
              </p>
            </div>
          </Row>
        </div>
        <div className="position-absolute faqs_top_circle top-0 d-none d-sm-block">
          <div className="rgb_circle"></div>
        </div>
        <div className="position-absolute faqs_bottom_circle top-50 end-0 d-none d-sm-block">
          <div className="rgb_circle"></div>
        </div>
      </section>
    </>
  );
};

export default Works;
