import React from "react";
import preloder_img from "../assets/images/png/about_logo.png";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.getElementById("hidden").classList.remove("overflow_hidden");
  }, 2000);
  return (
    <section className="bg-black z_index_1000 position-relative" id="none">
      <div className="none">
        <div className="bg-black text-center d-flex align-items-center justify-content-center start-0 top-0 b w-100 z_index_100 min-vh-100 position-fixed">
          <img
            src={preloder_img}
            alt="preloder_img"
            className="d-flex align-items-center justify-content-center animation_preloader w-25"
          />
        </div>
      </div>
    </section>
  );
};
export default Preloader;
