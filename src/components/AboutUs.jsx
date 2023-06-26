import React from "react";
import { Row } from "react-bootstrap";
import about_logo from "../assets/images/png/about_logo.png";
const AboutUs = () => {
  return (
    <>
      <section className="bg-black mt_-2 overflow-hidden" id="about">
        <div className="about_bg py-5 about_s">
          <div className="container py-lg-5">
            <Row className="align-items-center flex-column-reverse flex-lg-row pb-lg-4">
              <div
                className="col-lg-6 pt-4 pt-lg-0"
                data-aos="fade-right"
              >
                <h2 className="mb-0 ff_mukta text-white fw-bolder fs_2xl">
                  About Us
                </h2>
                <p className="ff_poppins text-white fs_sm mb-0 pt-sm-4 pt-3">
                  We are a team that has been working with cryptocurrencies for
                  over 8 years. We decided to create this community with the aim
                  of bringing together as many investors as possible, so that
                  everyone can profit from it. The group is completely free
                  because the greater the number of investors, the greater the
                  ability to influence the value of the corresponding coins.
                </p>
              </div>
              <div
                className="col-lg-6 d-flex justify-content-center ps-lg-5"
                data-aos="fade-left"
              >
                <div>
                  <img src={about_logo} alt="logo" className="w-100" />
                </div>
              </div>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
