import React from "react";
import pumps1_img from "../assets/images/png/our_pumps_center_img.png";
import { Carousel } from "3d-react-carousal";
import rocket from "../assets/images/gif/roket_gif.gif";
import our_boxes from "../assets/images/png/our_pumps_boxes_img.png";
const OurPumps = () => {
  let slides = [
    <img src={pumps1_img} alt="img" />,
    <img src={pumps1_img} alt="img" />,
    <img src={pumps1_img} alt="img" />,
    <img src={pumps1_img} alt="img" />,
    <img src={pumps1_img} alt="img" />,
  ];
  return (
    <>
      <section
        className="bg-black position-relative mt_-2 py-5 "
        id="our_pumps"
      >
        <h2 className="text-center text-white fs_2xl ff_exo fw-bolder pb-3">
          Our Pumps
        </h2>
        <div className="position-relative z-3">
          <Carousel slides={slides} autoplay={false} interval={1000} />
        </div>
        <div className="roket_gif d-none d-lg-block">
          <img src={rocket} alt="rocket" />
        </div>
        <div className="position-absolute start-0 top-0 d-none d-sm-block">
          <div className="rgb_circle"></div>
        </div>
        <div className="position-absolute end-0 top-50 d-none d-sm-block">
          <div className="rgb_circle"></div>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x z-1"><img src={our_boxes} alt="boximg" /></div>
      </section>
    </>
  );
};

export default OurPumps;
